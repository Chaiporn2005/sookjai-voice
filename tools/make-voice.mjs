// Records the fixed lines into voice/*.mp3 with Botnoi (Bow), through our Worker, so each line
// costs points once instead of on every play. Clips that already exist are skipped, and one run
// (a "part") spends at most 2,000 points; run it again for the next part.
//   node tools/make-voice.mjs --dry          show what is missing, split into parts, and the cost
//   node tools/make-voice.mjs                make the next part of the missing clips
//   node tools/make-voice.mjs [name ...]     make only the named clips (still at most one part)
//   --max=N                                  points per part instead of 2000
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const endpoint = (html.match(/const AI_ENDPOINT = '([^']+)'/) || [])[1];
const ORIGIN = 'https://chaiporn2005.github.io'; // an origin the Worker accepts

// name, text exactly as in index.html, speed (0.9 for the slower, calmer lines)
const LINES = [
  ['hero-greet', 'สวัสดีค่ะ หนูชื่อน้องสุขใจ กระรอกน้อยผู้ช่วยดูแลสุขภาพ ให้หนูช่วยวัดชีพจร หรือช่วยดูอาการเบื้องต้นก็ได้นะคะ ถ้ามีอาการฉุกเฉิน โทร 1669 ได้ทันทีค่ะ'],
  ['hero-poke-1', 'ว้าว! ดีใจจังที่ได้เจอค่ะ วันนี้ดื่มน้ำหรือยังคะ'],
  ['hero-poke-2', 'โอ๊ะ! จั๊กจี้ค่ะ อยากคุยกับหนูไหม กดปุ่ม “คุยกับน้องสุขใจ” ได้เลยนะคะ'],
  ['hero-poke-3', 'หืม? วันนี้รู้สึกอย่างไรบ้างคะ ถ้าไม่สบาย ลองเช็กอาการกับหนูได้นะ'],
  ['hero-poke-4', 'หนูเก็บลูกโอ๊กไว้ให้ด้วยค่ะ ลุกขึ้นยืดเส้นยืดสายกันสักหน่อยไหมคะ'],
  ['hero-poke-5', 'นอนหลับให้พอ กินผักผลไม้ แล้วร่างกายจะสดชื่นนะคะ'],
  ['talk-thanks', 'ขอบคุณค่ะ แตะปุ่มไมค์สีน้ำตาลด้านล่าง แล้วพูดกับหนูได้เลยนะคะ'],
  ['talk-mood-sad', 'ขอบคุณที่เล่าให้หนูฟังนะคะ คุณไม่ได้อยู่คนเดียว ลองตอบคำถามสั้นๆ สองข้อ เพื่อดูว่าควรคุยกับผู้เชี่ยวชาญไหมค่ะ', 0.9],
  ['talk-mood-breathe', 'ขอบคุณที่บอกหนูนะคะ ลองหายใจเข้าช้าๆ นับหนึ่งถึงสี่ แล้วค่อยๆ หายใจออก ทำสักสามรอบนะคะ ถ้าอยากรู้ระดับความเครียด ลองทำแบบประเมินสั้นๆ ห้าข้อได้ค่ะ', 0.9]
];
const stale = LINES.filter(([, text]) => !html.includes(text));
if (stale.length) { console.error('Text no longer in index.html, update LINES:', stale.map(l => l[0]).join(', ')); process.exit(1); }
// The chat panel's fixed replies (chat-*), read from ChatBrain itself so the text always matches.
// This runs code from our own index.html, the same code the app runs.
const block = (a, b) => html.slice(html.indexOf(a) + a.length, html.indexOf(b));
const { ChatBrain } = new Function(block('/* SYMPTOM-CORE-START */', '/* SYMPTOM-CORE-END */')
  + block('/* CHAT-CORE-START */', '/* CHAT-CORE-END */') + '; return { ChatBrain };')();
LINES.push(...ChatBrain.lines());
// Same as speakable() in index.html: read emergency numbers digit by digit.
const speakable = s => s.replace(/1669/g, 'หนึ่ง หก หก เก้า').replace(/1323/g, 'หนึ่ง สาม สอง สาม').replace(/1367/g, 'หนึ่ง สาม หก เจ็ด');
const cost = s => 2 * s.replace(/\s/g, '').length; // V2 voices: 2 points a character, spaces free

const args = process.argv.slice(2), dry = args.includes('--dry'), only = args.filter(a => !a.startsWith('--'));
const dir = path.join(root, 'voice');
fs.mkdirSync(dir, { recursive: true });
const max = Number((args.find(a => a.startsWith('--max=')) || '--max=2000').slice(6));
const todo = LINES.filter(([name]) => (!only.length || only.includes(name)) && !fs.existsSync(path.join(dir, name + '.mp3')));
// Split in order into parts of at most `max` points (a single longer line gets a part of its own).
const parts = [];
for (const line of todo) {
  const c = cost(speakable(line[1])), last = parts[parts.length - 1];
  if (last && last.points + c <= max) { last.lines.push(line); last.points += c; }
  else parts.push({ lines: [line], points: c });
}
const total = parts.reduce((n, p) => n + p.points, 0);
console.log(`${todo.length} clip(s) missing, about ${total} points, ${parts.length} part(s) of at most ${max}:`);
parts.forEach((p, i) => console.log(`  part ${i + 1}: ${p.points} points, ${p.lines.length} clips: ${p.lines.map(l => l[0]).join(', ')}`));
if (dry || !todo.length) process.exit(0);
if (!endpoint) { console.error('AI_ENDPOINT is not set in index.html'); process.exit(1); }

console.log(`Making part 1 (${parts[0].points} points).`);
let left = Infinity;
for (const [name, text, speed = 1] of parts[0].lines) {
  if (cost(speakable(text)) > left) { console.error(`Stopped before ${name}: only ${left} points left. Top up, then run again.`); process.exit(1); }
  const r = await fetch(`${endpoint}/tts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Origin: ORIGIN },
    body: JSON.stringify({ text: speakable(text), speed })
  });
  if (!r.ok) { console.error(`${name}: failed (${r.status}) ${await r.text()}`); process.exit(1); }
  fs.writeFileSync(path.join(dir, name + '.mp3'), Buffer.from(await r.arrayBuffer()));
  const p = r.headers.get('X-Points-Left');
  if (p != null) left = Number(p);
  console.log(`${name}.mp3 saved, points left: ${p ?? '?'}`);
}
if (parts.length > 1) console.log(`Done. ${parts.length - 1} more part(s): run the same command again.`);
