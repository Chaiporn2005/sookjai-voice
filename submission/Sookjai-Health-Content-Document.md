# Sookjai Health — Content Document

## 1. Overview

| Field | Value |
|---|---|
| Project name | Sookjai Health [source: participant] |
| One-line vision | A Thai voice-first health companion: the chipmunk mascot น้องสุขใจ talks with older adults by voice, does a first-line symptom and emotional check, and measures pulse with the phone camera [source: participant] |
| Pillar | Health & Aging Society [source: participant] |
| Owner | Sookjai Health team (AI for All Thailand participant) [source: participant] |
| Date | 27 October 2026 |
| Status | Ideation approved (Stage 7), verdict Conditional Go |
| Project type | Brownfield: a working prototype exists [source: prototype] |

## 2. Problem Statement

**The participant's framing, verbatim:** "ผู้สูงอายุเข้าถึงการดูแลสุขภาพยากผ่านการไปโรงพยาบาล,การเดินทางไปโรงพยายาล,โรค NCDs, และปัญหาด้านจิตใจ เช่น ความเหงา ความโดดเดี่ยว (Social Isolation) รวมถึงช่องว่างทางเทคโนโลยี" [source: participant]

*In English:* older adults find healthcare hard to reach because it means going to hospital and travelling there. They also face NCDs, mental-health problems such as loneliness and social isolation, and a technology gap. [source: participant]

**Evidence found in research:**

| Topic | Finding | Source |
|---|---|---|
| Aging | Share of people 60+ was 20.17% in 2023, forecast 31.37% in 2040 | [source: web research — NESDC via Statista] |
| Aging | 60+ share projected at 21.2% in 2025 | [source: web research — Fiscal Policy Office via Wikipedia] |
| Living alone | Older adults living alone rose from about 3.6% (1994) to about 10.8% (2017) | [source: web research — APSSR 2020] |
| Living alone | Solo-living older persons report more psychological distress, but are not shown to be socially alienated | [source: web research — comparative study] |
| NCDs | NHES 7 (2024–2025), all ages: est. 6.1 M diabetes, 17.5 M hypertension (secondary news report, not the official report) | [source: web research — secondary report] |
| NCDs, older adults | NHES III: hypertension 51.1%; 56.1% unaware of their hypertension | [source: web research — Thai journal] |
| Depression | 2Q/9Q screening: 26.9% at risk (n = 420); prevalence 12.3% in Nong Khai (n = 1,264); 13.2% major depression at Siriraj (n = 384) | [source: web research — Thai journals] |
| Digital divide | Online communication use by older adults is relatively low, with the gap largest in rural areas (2011–2014 data); a current 60+ smartphone rate was not confirmed | [source: web research — NBTC journal] |

**Current customer journey:**
- Basic care means going to hospital, and the travel itself is a barrier. [source: participant]
- NCDs need ongoing attention that is hard to get without visits. [source: participant]
- Loneliness and social isolation. [source: participant]
- A technology gap makes digital tools hard to use. [source: participant]
- Fear of seeing a doctor ("ช่วยลดความกลัวในการพบแพทย์", the aim of reducing that fear). [source: participant]

## 3. Solution Summary

**The participant's idea, verbatim (excerpt):** "มี "มาสคอตเอไอ" เป็นเพื่อนคู่คิดผู้ช่วยอัจฉริยะ คอยพูดคุยทักทาย ถามไถ่อาการด้วยเสียงอย่างเป็นกันเอง ช่วยลดความกลัวในการพบแพทย์ คลายความเหงา และเยียวยาจิตใจผู้สูงอายุ พร้อมประเมินความเสี่ยงโรคเบื้องต้น" [source: participant]

*In English:* an "AI mascot" acts as a smart companion. It greets older adults and asks about their symptoms by voice in a friendly way, to reduce fear of seeing a doctor, ease loneliness and comfort them, and gives a first-line disease-risk assessment.

The participant's plan also includes camera PPG for pulse and blood oxygen with stored history. [source: participant]

**Expected value, verbatim:** "ได้รับการรักษาอย่างเท่าเทียมไม่ว่าจะอยู่จังหวัดไหน ได้รับการประเมินสุขภาพเบื้องต้นด้วยโทรศัพท์ และคาดหวังว่าจะลดอัตราความเสี่ยงเป็นโรคซึมเศร้า และสร้างความตระหนักรู้เรื่องโรคที่มีความเสี่ยงอาจเป็นไร" [source: participant]

*In English:* equal care no matter which province people live in; a first-line health assessment by phone; a hoped-for reduction in depression risk; and awareness of diseases a person may be at risk of.

**What works today vs. roadmap:**

| Capability | Status | Source |
|---|---|---|
| Camera PPG heart rate (BPM); reported only when quality score ≥ 65 and two methods agree within 15%; labeled demo mode | Working; accuracy not yet validated on people | [source: prototype] |
| Rule-based symptom checker: 14 symptoms, 9 danger signs, 4 urgency levels, 1669 guidance | Working; not yet clinician-reviewed | [source: prototype] |
| Mascot น้องสุขใจ from the participant's character sheet, animated with a talking mouth | Working | [source: prototype] |
| Voice conversation with AI (Typhoon speech recognition + Typhoon language model through a Cloudflare Worker), consent first | Working; tested end-to-end with real Typhoon | [source: prototype] |
| Emergency and self-harm phrases answered on the device (1669 / 1323), never sent to the AI | Working | [source: prototype] |
| Opt-in voice-mood observation compared with the user's own usual voice, plus DMH ST-5 and 2Q screening | Working, experimental; accuracy not validated | [source: prototype] |
| Thai speech, 20 px base text, 48 px touch targets | Working; voice quality depends on the device | [source: prototype] |
| "Vision" symptom checking | Roadmap | [source: participant] |
| SpO2 (blood oxygen) | Roadmap | [source: participant] |
| ResNet / CNN / Ensemble PPG model | Roadmap | [source: participant] |
| Measurement history with date and time | Roadmap | [source: participant] |

**Positioning:** a friendly "front door" that complements Mor Prom, telemedicine and อสม. (village health volunteers): talk, triage, check pulse, then refer. [source: web research — Stage 2 recommendation]

## 4. Confirmed Parameters

| Parameter | Value | Source |
|---|---|---|
| Pillar | Health & Aging Society | [source: participant] |
| Positioning | Complement national apps and telemedicine; refer out for consults | [source: web research] |
| Scope | Hackathon demo + pilot-ready MVP + PPG validation | [source: participant — approved Stage 4] |
| Roadmap only | Vision, SpO2, ResNet/CNN/Ensemble, measurement history | [source: participant — A4 confirmed] |
| Target users | Thai older adults with a smartphone, used alone or with family help | [source: participant — A1 confirmed] |
| Business model | Free for older adults; pilot via community/hospital partners or public programs; B2B/B2G funding later | [source: participant — A5 confirmed] |
| Free API tiers enough for pilot | **Rejected**: the pilot needs a funded API plan | [source: participant — A6 rejected] |
| Success targets | SC1–SC5 as listed in section 10 | [source: participant — confirmed Stage 7] |
| Timeline | Validation 1–2 months, pilot 3 months | [source: participant — confirmed Stage 7] |
| Team | 4 core + 4 advisors | [source: participant — confirmed Stage 7] |

## 5. Competitive Landscape

| Player | What it does | Relevance | Source |
|---|---|---|---|
| Mor Prom / Mor Prom SUPER APP (Ministry of Public Health) | Merging more than 50 government health apps; booking, records, prescriptions, telemedicine; pilot began 17 Oct 2025 | Hospital-service access, not a daily companion; partner, not rival | [source: web research — PRD, Pattaya Mail] |
| MorDee (True Digital) | Telemedicine with 500+ doctors in 20+ specialties, medicine delivery, insurance claims | Referral target for doctor consults | [source: web research — mordeeapp.com] |
| Doctor Anywhere (formerly Raksa) | Southeast Asian telemedicine incl. psychiatric consults | Referral target | [source: web research] |
| Clicknic | Telemedicine partnered with NHSO for Universal Coverage | Shows a public-payer channel exists | [source: web research] |
| Smart อสม. app | Village health volunteer reporting (e.g., dengue surveillance) | Existing community channel | [source: web research — Thai journals] |
| ElliQ (Intuition Robotics) | AI companion device; NY State pilot with 800+ users; sponsor-reported 95% loneliness reduction (not peer-reviewed) | Closest companion benchmark; hardware, English | [source: web research — NYSOFA] |
| Binah.ai | Vital signs from face video incl. SpO2 claims; accuracy not independently verified | Camera-vitals demand; validation gap | [source: web research — CNBC] |
| Kintsugi, Sonde Health | Voice biomarkers: Kintsugi claims ~80% vs. clinician assessment (vendor claim); Sonde 104-patient cohort study | Precedent for voice-mood; thin evidence | [source: web research — Axios, Voicebot] |

**Build vs. buy:**
- **Partner or refer:** telemedicine and doctor consults. [source: web research]
- **Build (done):** the Thai voice companion, triage and safety rules. [source: prototype]
- **Buy:** language and speech models (Typhoon API). [source: prototype]
- **Research or license later:** SpO2, Vision and ML vitals. [source: web research]

**Market gaps:**
- No product found that combines a Thai voice companion, triage and a camera pulse check for older adults. [source: assumption]
- National apps focus on service access rather than daily companionship. [source: assumption]

## 6. Feasibility Assessment

| Dimension | Rating | Basis |
|---|---|---|
| Technical | Go | Working prototype; test suites pass (core 70, Worker 34, prosody 15, end-to-end 40); live Typhoon run succeeded [source: prototype] |
| Clinical validity | Conditional | PPG not validated on people; camera PPG needs rigorous validation [source: web research — PMC scoping review]; voice-mood accuracy unvalidated [source: prototype] |
| Regulatory & privacy | Conditional | Thai SaMD labeling/UDI rules apply to risk classes 2–4 from 20 Jun 2026 [source: web research — Tilleke & Gibbins]; SpO2 or diagnosis claims would likely trigger SaMD classification [source: assumption]; consent and on-device processing implemented [source: prototype] |
| Resource & capability | Conditional | No clinician reviewer yet [source: prototype]; advisor roles unfilled [source: assumption] |
| Timeline | Go (demo) / Conditional (pilot) | Demo works today; pilot needs validation first [source: prototype] |
| Budget / cost | Conditional | Re-rated from Go after A6 was rejected: free tiers (Typhoon speech recognition 100 req/min, chat 200 req/min at time of writing) are not enough for the pilot; paid pricing was not found [source: prototype README; source: participant — A6 rejected] |

**Overall verdict:** Conditional Go, confidence medium.

## 7. Screens & Flows

**Flow A — Voice conversation**
1. The user taps "คุยด้วยเสียงกับน้องสุขใจ".
2. If consent has not been given, a consent card appears, with an unchecked option for voice-mood observation. Declining leads to offline typed chat.
3. The user taps the microphone. Listening stops by itself after about 1.3 s of silence.
4. If emergency or self-harm words are detected, the app answers locally and shows a 1669/1323 call button above the microphone. Nothing is sent to the AI.
5. Otherwise, speech goes through Typhoon speech recognition and the Typhoon language model via the Worker.
6. The mascot speaks the reply and its mouth animates.
7. If voice-mood is on, a card asks "คุณอาจกำลังเครียด ใช่ไหมคะ" ("You might be stressed, is that right?") with yes and no buttons. "Yes" leads to a breathing tip and the ST-5 or 2Q form, then the result with a 1323 button.

[source: prototype]

**Flow B — Pulse check**
1. Instructions: sit down, then cover the rear camera and flash with a fingertip.
2. The camera signal is filtered and two BPM methods run.
3. If the quality score is ≥ 65 and the methods agree within 15%, the BPM is shown as an estimate (not a medical device).
4. Otherwise no number is shown, only tips to retry.
5. A clearly labeled demo mode is available.

[source: prototype]

**Flow C — Symptom check**
1. The user picks symptom chips or types text, then adds duration and context.
2. A danger sign gives level 3: call 1669 now.
3. Otherwise the result is level 0–2 with self-care steps and when to see a doctor.

[source: prototype]

**Screens:**
1. **Home**
   - Large "Sookjai Health" title in the Peralta font, with acorn and leaf doodles and a Thai subtitle.
   - The waving mascot, which greets the user aloud when tapped.
   - Large buttons for pulse, symptoms and voice talk, plus a privacy pill. [source: prototype]
2. **Talk screen** (full screen, warm cream gradient)
   - Top bar: title, a mode badge ("AI · Typhoon" or "ออฟไลน์" for offline) and a close button.
   - Centre: the mascot, sized to fit, with a moving mouth.
   - Captions: user speech in a brown bubble on the right; the reply in a cream bubble on the left, which turns red in an emergency.
   - Bottom:
     - an optional mood card (dashed border, yes/no)
     - a status line
     - a 92 px round microphone: brown when idle, red while listening, pulsing while thinking, green while speaking
     - a text box with "ส่ง" (send)
     - footer links: stress test, voice-mood toggle, revoke consent

   [source: prototype]
3. **Consent overlay**
   - Explains where voice and text go.
   - Asks users not to share identifying data.
   - States that the AI may be wrong and that emergencies stay local.
   - Unchecked voice-mood option; accept, or decline to offline chat. [source: prototype]
4. **Emergency state:** a red reply bubble and a large "โทร 1669" (call 1669) button above the microphone, always visible without scrolling. [source: prototype]
5. **Questionnaire overlay (ST-5 / 2Q)**
   - Numbered questions with large 48 px tick-box options.
   - "ดูผล" (show result) opens a result box with the level, score out of 15, advice and a "โทร 1323" (call 1323) button.
   - Where relevant, "ทำแบบคัดกรอง 2Q ต่อ" (continue to 2Q) is offered. [source: prototype]
6. **Pulse screen:** finger instructions, a measuring state, a BPM result or a "no reliable reading" message, the labeled demo mode and a validation (MAE) table. [source: prototype]
7. **Symptom screen:** symptom chips plus a text box; the result shows a coloured urgency level (0–3), care steps and danger signs. [source: prototype]

**Design principles:**
- Voice-first.
- Big and warm: 20 px text, 48 px targets.
- Safety first.
- Honest: labeled demo mode, "estimate" wording, the AI asks rather than diagnoses.
- Private by default.

[source: prototype]

**Customer journey, current vs. to-be:**

| Touchpoint | Current [source: participant] | To-be | Pain removed |
|---|---|---|---|
| Feeling unwell | Must travel to hospital to ask | Ask น้องสุขใจ by voice at home; triage and self-care or referral | Travel, hospital barrier |
| Ongoing NCD attention | Hard without visits | Pulse check and symptom check any time | Access gap (BPM only now; history on roadmap) |
| Loneliness | Isolation | Friendly mascot conversation; optional mood check with ST-5/2Q and 1323 referral | Isolation, unseen distress |
| Technology gap | Apps hard to use | Speak instead of type; big text; one big microphone button | Digital barrier |
| Fear of doctors | Avoids care | Gentle conversation lowers the threshold; urgent cases pushed to 1669 | Fear, delay |

## 8. Architecture / How It Works

- **Browser app (one HTML page)**
  - Pulse measurement, symptom rules, offline chat and voice-mood analysis all run on the device. [source: prototype]
  - Only three things are kept in the browser: text size, consent, and the user's usual-voice values (only when voice-mood is on). [source: prototype]
- **Camera PPG:** fingertip video, then filtering, then two independent BPM estimates and a quality gate (score ≥ 65, agreement within 15%). [source: prototype]
- **Voice path**
  - The microphone is recorded in the browser as a 16 kHz WAV.
  - It goes to the **Cloudflare Worker**, which holds the Typhoon key and a locked safety prompt.
  - Typhoon speech recognition produces text; the Typhoon language model produces the reply.
  - The browser speaks the reply in Thai.

  [source: prototype]
- **Safety layer:** emergency and self-harm phrases are matched on the device first and answered locally (1669 / 1323) without reaching the AI. [source: prototype]
- **Voice-mood**
  - Pitch, loudness, speaking rate and pauses are measured on the device and compared with the median of the user's recent turns.
  - Only cue words such as "พูดเร็วกว่าปกติ" ("speaking faster than usual") are sent; the AI weighs the user's words above voice cues.
  - The user confirms the result with yes or no.

  [source: prototype]
- **Hosting:** GitHub Pages for the page; Cloudflare Workers for the proxy. [source: prototype]

## 9. Scope

| ID | Item | Priority | Traces to |
|---|---|---|---|
| M1 | Voice conversation with น้องสุขใจ (Typhoon via Worker) | Must | Talking mascot companion [source: participant] |
| M2 | Local emergency and self-harm safety (1669 / 1323) | Must | Safe first-line care [source: prototype] |
| M3 | Rule-based symptom checker (14 symptoms, 9 danger signs) | Must | First-line risk assessment [source: participant] |
| M4 | Camera PPG heart rate (BPM) with quality gate | Must | PPG pulse check [source: participant] |
| M5 | Thai speech, large text, 48 px targets | Must | Technology gap [source: participant] |
| M6 | Consent, on-device processing, revocable AI use | Must | Trust [source: prototype] |
| M7 | PPG validation study (MAE vs. reference device) | Must | Clinical validity Conditional [source: Stage 3] |
| S1 | Voice-mood observation + DMH ST-5 / 2Q (built, experimental) | Should | Loneliness and mental health [source: participant] |
| S2 | Natural female cloud voice | Should | Friendly companion [source: participant] |
| S3 | Measurement history (opt-in, local first) | Should | View past readings [source: participant] |
| S4 | Clinician review of symptom rules and AI prompt | Should | Risk R2 [source: Stage 3] |
| C1 | SpO2 research track, no user-facing claims | Could | Blood oxygen [source: participant] |
| C2 | ResNet / CNN / Ensemble PPG model research | Could | Participant's model idea [source: participant] |
| C3 | "Vision" feature once its purpose is defined | Could | "Voice & Vision" [source: participant] |
| C4 | Sharing with family / อสม. | Could | Community channel [source: web research] |

**Out of scope (this phase):**
- Diagnosis and medication advice
- Telemedicine consultations (refer to Mor Prom / MorDee instead)
- User accounts and cloud health records
- SpO2 values shown to users
- Hardware devices

## 10. Success Criteria

| # | Criterion | Target | Source |
|---|---|---|---|
| SC1 | PPG accuracy vs. reference pulse oximeter, at rest, older adults | MAE ≤ 5 BPM on ≥ 30 participants | [source: participant — confirmed proposal] |
| SC2 | Emergency phrases handled locally | 100% of the safety test set | [source: prototype — currently passing] |
| SC3 | Voice reply time on a mid-range phone | Median ≤ 6 s | [source: participant — confirmed proposal] |
| SC4 | Older adults completing a voice conversation unaided | ≥ 70% of pilot users | [source: participant — confirmed proposal] |
| SC5 | User satisfaction | ≥ 4 / 5 | [source: participant — confirmed proposal] |
| SC6 | Self-reported loneliness, pre/post pilot | Improvement measured with a validated scale; target TBD | [source: assumption] |

## 11. Team Composition

| Role | Responsibility |
|---|---|
| Product lead | Vision, priorities, pitch, partner outreach |
| Full-stack developer | App, Worker, voice pipeline, accessibility |
| Signal / ML engineer | PPG pipeline, validation analysis, ML research |
| UX researcher / designer | Testing with older adults, mascot and voice experience |
| Clinical advisor (part-time) | Symptom rules, safety prompt, validation protocol |
| Mental-health advisor (part-time) | Voice-mood wording, ST-5/2Q flow, referral path |
| Community partner lead | Pilot site, อสม. onboarding |
| Privacy / regulatory advisor (on call) | PDPA consent, SaMD positioning |

**Size:** 4 core + 4 advisors. [source: participant — confirmed Stage 7]

**Already covered by the prototype work:** web development, LLM safety, signal-processing PPG. [source: prototype]

**Gaps:** clinical and mental-health advisors, UX research with older adults, a community partner, and privacy/regulatory advice. [source: assumption]

**RACI (A = accountable, R = responsible, C = consulted, I = informed):**

| Deliverable | Product lead | Full-stack | Signal/ML | UX | Clinical | Mental-health | Community | Privacy/Reg |
|---|---|---|---|---|---|---|---|---|
| Hackathon demo | A | R | C | C | I | I | I | I |
| PPG validation (M7, SC1) | A | C | R | I | C | I | C | I |
| Clinician review (S4) | A | C | I | I | R | C | I | I |
| Voice-mood & ST-5/2Q (S1) | A | R | C | C | C | R | I | C |
| Community pilot (Phase 2) | A | C | C | R | C | C | R | C |
| Consent & compliance (M6) | A | R | I | C | C | I | I | R |

## 12. Timeline

| Phase | Duration | Source |
|---|---|---|
| Phase 0: Hackathon demo | Now (built) | [source: prototype] |
| Phase 1: Validation (SC1, SC3) + clinician review | 1–2 months | [source: participant — confirmed Stage 7] |
| Phase 2: Community pilot with a partner (e.g., รพ.สต. / อสม.) | 3 months; starts only once a funded API plan exists (condition C3) | [source: participant — confirmed Stage 7] |

## 13. Key Risks & Mitigations

| # | Risk | Mitigation |
|---|---|---|
| R1 | PPG inaccurate in older adults, especially with irregular rhythms (UCSF: 0.9 agreement with ECG; all disagreements in irregular rhythms) [source: web research — MobiHealthNews] | Quality gate (score ≥ 65, agreement within 15%); validation study (SC1) |
| R2 | AI gives wrong or unsafe advice [source: prototype] | Locked system prompt, local safety rules, disclaimers, clinician review (S4) |
| R3 | Voice reply latency of about 15 s in one live run [source: prototype] | Faster model, shorter replies, progress cues; target SC3 |
| R4 | Voice-mood false alarms cause worry [source: prototype] | Opt-in, user confirmation, words weighted above voice, DMH ST-5/2Q |
| R5 | Regulatory exposure if SpO2 or diagnosis claims are made [source: web research — Tilleke & Gibbins] | Keep SpO2 and diagnosis on the roadmap until validated |
| R6 | Adoption blocked by the digital gap [source: participant] | Voice-first, large text; family and อสม. onboarding |
| R7 | API cost beyond free tiers; pilot cannot run on free quota (A6 rejected) [source: participant] | Price the paid tier, estimate cost per user, fund via partners or public programs (A5) |
| I1 | Updated Worker code not yet redeployed [source: prototype] | Redeploy in the Cloudflare dashboard |

## 14. Open Assumptions

| # | Assumption | Status | How it will be validated |
|---|---|---|---|
| A1 | Target users: Thai older adults with a smartphone, alone or with family help | Confirmed by participant; still to be proven | Pilot recruitment data |
| A2 | Older adults accept talking to a cartoon mascot about health and feelings | Confirmed by participant; still to be proven | SC4, SC5 in the pilot |
| A3 | Camera-PPG BPM is accurate enough for first-line screening | Confirmed by participant; still to be proven | SC1 validation study |
| A4 | Vision, SpO2, ML models and history are roadmap, not current features | Confirmed by participant | — (a decision) |
| A5 | Free for older adults; pilot via partners or public programs; B2B/B2G later | Confirmed by participant; still to be proven | Partner and funding talks |
| A6 | Free tiers are enough for the pilot | **Rejected** by participant | Replaced by condition C3 |
| A7 | Voice-mood observation adds value without causing worry | Confirmed by participant; still to be proven | Pilot feedback, false-alarm rate |
| — | No competing Thai voice companion + triage + pulse product exists | Assumption [source: assumption] | Further market scan |
| — | SC6 loneliness target | Open (TBD) [source: assumption] | Choose a validated scale before the pilot |

## 15. Decision Log

| # | Decision | Rationale | Stage |
|---|---|---|---|
| D1 | Pillar: Health & Aging Society | Participant's choice [source: participant] | Step 0 |
| D2 | Follow-up answers taken from the built prototype | Participant delegated [source: participant] | Step 0 |
| D3 | Run all stages 2–8b + One-Page Proposal | Participant's choice [source: participant] | 1 |
| D4 | Position as a complement to national apps and telemedicine | Mature telemedicine exists [source: web research] | 2 |
| D5 | Scope approved: demo + pilot-ready MVP + PPG validation | Clinical and regulatory Conditional | 4 |
| D6 | A1–A5, A7, success targets, timeline and team confirmed; A6 rejected | Participant's answer [source: participant] | 7 |
| D7 | Budget re-rated Go → Conditional; pilot needs a funded API plan | Follows from D6 | 7 |

**Corrections:**
- `[correction: A6 "free tiers of Typhoon + Cloudflare are enough for the pilot" → rejected by participant; Stage 3 Budget rating Go → Conditional; pilot made dependent on API funding]`

## 16. Go / No-Go

**Verdict: Conditional Go.** Technically ready for the demo and a pilot. Health claims beyond "first-line guidance" must wait for validation and a clear regulatory position.

**Conditions:**
1. **C1:** PPG meets SC1 (MAE ≤ 5 BPM on ≥ 30 older adults) before any accuracy claim.
2. **C2:** clinician review of the symptom rules and AI prompt before the pilot.
3. **C3:** a funded API plan is in place before the pilot (A6 rejected).
4. **C4:** no SpO2 or diagnosis claims until validated and the regulatory position is clear.

**Next steps (Inception):**
- PPG validation protocol
- Recruit advisors and run the review
- Pilot budget plan
- Latency work toward ≤ 6 s
- Identify a pilot partner (รพ.สต. / อสม.)

## 17. Evidence & Sources

**External claims (web research):**
- 60+ share 20.17% (2023), forecast 31.37% (2040): NESDC via Statista — https://statista.com/statistics/713667/thailand-forecast-aging-population
- 60+ share 21.2% projected for 2025: Fiscal Policy Office via Wikipedia — https://en.wikipedia.org/wiki/Demographics_of_Thailand
- Living alone 3.6% → 10.8% (1994 → 2017): APSSR 2020 — https://www.dlsu.edu.ph/wp-content/uploads/pdf/research/journals/apssr/2020-December-vol20-4/3-Older-Adults-Living-Alone-in-Thailand.pdf
- Solo living and psychological distress: comparative study — https://ink.library.smu.edu.sg/soss_research/2025
- NHES 7 estimates (secondary report): https://toutelathailande.fr/en/information/deadly-diseases-in-thailand-are-exploding-figures-are-alarming. ; HSRI record — https://kb.hsri.or.th/dspace/handle/11228/6360
- NHES III older adults, hypertension 51.1% / 56.1% unaware: https://he02.tci-thaijo.org/index.php/OSIR/article/view/265405
- Depression 26.9% at risk (n = 420): https://he02.tci-thaijo.org/index.php/VMED/article/view/205447
- Depression 12.3% Nong Khai (n = 1,264): https://www.thaidj.org/index.php/pjne/article/view/10941
- Depression 13.2% Siriraj (n = 384): https://he01.tci-thaijo.org/index.php/aseanjrm/article/view/77338
- Elderly online communication gap: NBTC journal — https://so04.tci-thaijo.org/index.php/NBTC_Journal/article/view/119101
- Mor Prom SUPER APP: https://thailand.prd.go.th/en/content/category/detail/id/2078/iid/431637 ; https://www.pattayamail.com/thailandnews/thailand-expands-30-baht-treatment-and-kidney-transplant-access-mor-prom-app-upgraded-522617 ; https://www.pattayamail.com/thailandnews/thailand-launches-mor-prom-super-app-in-chonburi-pushing-healthcare-fully-into-the-digital-age-536680
- MorDee: https://www.mordeeapp.com/en/medical
- Doctor Anywhere, Clicknic: https://www.thailandstarterkit.com/health/telemedicine-service-thailand/
- Smart อสม.: https://thaidj.org/index.php/jdhss/article/download/16179/12929/42514
- ElliQ NY State pilot: https://aging.ny.gov/news/nysofas-rollout-ai-companion-robot-elliq-shows-95-reduction-loneliness
- Binah.ai: https://www.cnbc.com/2020/01/09/check-your-vitals-with-your-smartphone-camera.html
- Kintsugi, Sonde: https://www.axios.com/2022/10/20/voice-biomarkers-depression-anxiety-ai-telehealth ; https://voicebot.ai/2021/10/21/sonde-health-debuts-mental-health-vocal-biomarker-app-and-api
- Camera PPG needs rigorous validation: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10937558/
- UCSF 0.9 agreement with ECG: https://www.mobihealthnews.com/news/health-eheart-studys-smartphone-measurements-offer-population-level-heart-rate-insights
- Thai SaMD UDI labeling (risk classes 2–4, from 20 Jun 2026): https://www.tilleke.com/insights/thailand-introduces-udi-labeling-requirements-for-software-as-a-medical-device/41/

**Prototype evidence:**
- Test results: core 70, Worker 34, prosody 15, end-to-end 40.
- Live Typhoon run.
- Latency of about 15 s observed in one run.
- Typhoon free quota as documented at time of writing.

All from the Sookjai Health prototype and its README.

**Participant input:** the problem framing, idea, expected value, and confirmations or rejections at Stage 7.

**Unverified claims, kept as assumptions:**
- that no competing Thai voice companion + triage + pulse product exists
- that national apps focus on access rather than companionship
- that SpO2 or diagnosis claims would trigger SaMD classification
- the SC6 target
- the gaps in the team
