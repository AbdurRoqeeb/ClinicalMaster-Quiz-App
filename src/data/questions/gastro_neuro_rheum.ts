import { Question } from '../../types';

export const GASTRO_NEURO_RHEUM_QUESTIONS: Question[] = [
  // ----------------------------------------------------
  // MANAGEMENT OF UPPER GI BLEEDING (Pages 38-40)
  // ----------------------------------------------------
  {
    id: 'ugib_q1',
    topicId: 'upper_gi_bleeding',
    topicTitle: 'Management of Upper GI Bleeding',
    questionNumber: 1,
    clinicalVignette: 'A 55-year-old woman with a history of regular ibuprofen use for osteoarthritis presents with acute hematemesis and melena. At urgent upper gastrointestinal endoscopy, a 1.5-cm peptic ulcer in the posterior duodenal bulb is identified with active, spurting arterial bleeding (Forrest Ia). Which of the following is the most appropriate endoscopic and pharmacological management?',
    options: [
      { id: 'A', text: 'Oral PPI therapy only, followed by repeat endoscopy in 48 hours' },
      { id: 'B', text: 'Endoscopic injection of adrenaline alone combined with oral PPI' },
      { id: 'C', text: 'Dual endoscopic haemostatic therapy (e.g. thermal coagulation or mechanical hemoclip plus adrenaline injection) combined with high-dose intravenous PPI therapy' },
      { id: 'D', text: 'No endoscopic intervention is required because spurting ulcers heal spontaneously' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Dual endoscopic haemostatic therapy (e.g. thermal coagulation or mechanical hemoclip plus adrenaline injection) combined with high-dose intravenous PPI therapy',
    explanation: 'High-risk non-variceal peptic ulcer lesions (Forrest Ia active spurting, Forrest Ib active oozing, or Forrest IIa non-bleeding visible vessel) require dual-modality endoscopic hemostasis. Monotherapy with adrenaline injection is inadequate because adrenaline only provides transient vasoconstriction without permanent mechanical thrombosis. Combining adrenaline injection (for clear visualization) with a definitive second modality (through-the-scope hemoclip or thermal contact coagulation / heater probe), followed by high-dose intravenous PPI (80 mg IV bolus + 8 mg/h infusion for 72 hours), reduces rebleeding and mortality.',
    optionRationales: {
      A: 'Oral PPI alone without endoscopic hemostasis carries >80% mortality/rebleeding in spurting arterial ulcers.',
      B: 'Adrenaline monotherapy is inferior and associated with high rebleeding rates; dual therapy is the international standard.',
      C: 'Correct. Dual endoscopic therapy (hemoclip/thermal + adrenaline) plus high-dose IV PPI is the gold standard for Forrest Ia/Ib lesions.',
      D: 'Active arterial spurting requires immediate physical hemostasis.'
    },
    keyTakeaway: 'Forrest Ia spurting peptic ulcers mandate dual endoscopic hemostatic therapy (hemoclip or thermal coagulation plus adrenaline) and high-dose intravenous PPI therapy.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Upper GI Bleeding', 'Forrest Classification', 'Endoscopic Hemostasis', 'Dual Therapy', 'PPI']
  },
  {
    id: 'ugib_q2',
    topicId: 'upper_gi_bleeding',
    topicTitle: 'Management of Upper GI Bleeding',
    questionNumber: 2,
    clinicalVignette: 'A 62-year-old man taking diclofenac for chronic back pain presents to the emergency department with fresh hematemesis and dark tarry stools. On arrival, he is pale, cold, and clammy. Blood pressure is 82/54 mmHg, and pulse is 126/min. What is the most appropriate immediate management strategy?',
    options: [
      { id: 'A', text: 'Urgent endoscopy within 30 minutes before IV fluid resuscitation' },
      { id: 'B', text: 'Commence ABC resuscitation with two wide-bore IV cannulae (14–16G), rapid crystalloid infusion, cross-match blood, and stabilize hemodynamics prior to endoscopy' },
      { id: 'C', text: 'Administer oral omeprazole 40 mg and observe in the medical ward' },
      { id: 'D', text: 'Perform gastric lavage with ice-cold saline before inserting IV access' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Commence ABC resuscitation with two wide-bore IV cannulae (14–16G), rapid crystalloid infusion, cross-match blood, and stabilize hemodynamics prior to endoscopy',
    explanation: 'In acute massive upper gastrointestinal bleeding presenting with hemorrhagic shock (hypotension BP 82/54 mmHg, tachycardia HR 126 bpm), the absolute first priority is Airway, Breathing, and Circulation (ABC) resuscitation. Immediate management requires establishing two large-bore peripheral IV lines (14G or 16G), infusing isotonic crystalloids, sending blood for full blood count, coagulation profile, and urgent cross-matching, and restoring intravascular volume and tissue perfusion BEFORE performing endoscopy.',
    optionRationales: {
      A: 'Sedating and instrumenting an unresuscitated, hypotensive patient for endoscopy causes aspiration, cardiovascular collapse, and death.',
      B: 'Correct. Immediate resuscitation with large-bore IV access and crystalloids to stabilize hemodynamics must precede endoscopy.',
      C: 'Oral medication has no role in severe hemorrhagic shock.',
      D: 'Ice-cold gastric lavage is obsolete and delays essential vascular resuscitation.'
    },
    keyTakeaway: 'In severe upper GI bleeding with shock, hemodynamic stabilization and fluid resuscitation via two large-bore IV cannulae must strictly precede endoscopic intervention.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Hemorrhagic Shock', 'ABC Resuscitation', 'Upper GI Bleeding', 'IV Access']
  },
  {
    id: 'ugib_q3',
    topicId: 'upper_gi_bleeding',
    topicTitle: 'Management of Upper GI Bleeding',
    questionNumber: 3,
    clinicalVignette: 'A 48-year-old man with decompensated chronic liver disease and ascites presents with massive hematemesis. His BP is 88/52 mmHg and pulse is 118/min. While arrangements are being made for emergency endoscopy, which pharmacological approach is recommended in the initial resuscitation phase?',
    options: [
      { id: 'A', text: 'Intravenous pentagastrin infusion' },
      { id: 'B', text: 'Vasoactive drug therapy (e.g. intravenous terlipressin or octreotide) combined with prophylactic intravenous antibiotics (e.g. ceftriaxone)' },
      { id: 'C', text: 'Oral propranolol 40 mg immediately' },
      { id: 'D', text: 'Intravenous vitamin K as sole pharmacological therapy' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Vasoactive drug therapy (e.g. intravenous terlipressin or octreotide) combined with prophylactic intravenous antibiotics (e.g. ceftriaxone)',
    explanation: 'In suspected acute variceal hemorrhage, international guidelines (Baveno VII) recommend immediate initiation of: (1) a vasoactive drug (Terlipressin, Octreotide, or Somatostatin) to induce splanchnic vasoconstriction and reduce portal venous inflow/pressure, PLUS (2) short-term prophylactic intravenous antibiotics (Ceftriaxone 1 g/day for up to 7 days). Antibiotic prophylaxis reduces bacterial translocation, prevents spontaneous bacterial peritonitis (SBP), and significantly reduces rebleeding and all-cause mortality.',
    optionRationales: {
      A: 'Pentagastrin stimulates gastric acid secretion and has no role in variceal bleeding.',
      B: 'Correct. Early vasoactive therapy (Terlipressin/Octreotide) plus prophylactic IV antibiotics (Ceftriaxone) is the standard pre-endoscopic regimen in variceal bleeds.',
      C: 'Non-selective beta-blockers (propranolol) are used for secondary prophylaxis after recovery, but are strictly contraindicated during acute bleeding.',
      D: 'Vitamin K takes 24 hours to act and cannot achieve acute portal decompressive hemostasis.'
    },
    keyTakeaway: 'Suspected acute variceal bleeding requires immediate vasoactive therapy (terlipressin/octreotide) and prophylactic intravenous antibiotics (ceftriaxone) prior to endoscopy.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Variceal Bleeding', 'Terlipressin', 'Octreotide', 'Antibiotic Prophylaxis', 'Baveno VII']
  },
  {
    id: 'ugib_q4',
    topicId: 'upper_gi_bleeding',
    topicTitle: 'Management of Upper GI Bleeding',
    questionNumber: 4,
    clinicalVignette: 'A 52-year-old man with cirrhosis has massive hematemesis from large esophageal varices that fails to respond to endoscopic variceal band ligation and intravenous terlipressin. A Sengstaken-Blakemore balloon tube is placed as a temporary bridging measure, successfully halting active hemorrhage. What is the most appropriate definitive next step in management?',
    options: [
      { id: 'A', text: 'Leave the Sengstaken-Blakemore balloon inflated continuously for 5 days' },
      { id: 'B', text: 'Start oral propranolol while the tube is in place and remove the tube in 48 hours' },
      { id: 'C', text: 'Deflate the balloon and re-attempt endoscopic adrenaline injection' },
      { id: 'D', text: 'Arrange urgent salvage transjugular intrahepatic portosystemic shunt (TIPS)' }
    ],
    correctOption: 'D',
    correctAnswerText: 'Arrange urgent salvage transjugular intrahepatic portosystemic shunt (TIPS)',
    explanation: 'Balloon tamponade (Sengstaken-Blakemore or Minnesota tube) is strictly a temporary rescue bridge (maximum 24 hours) because prolonged balloon inflation causes catastrophic esophageal necrosis, ulceration, and perforation. In refractory variceal bleeding failing endoscopic and pharmacological therapy, early/salvage Transjugular Intrahepatic Portosystemic Shunt (TIPS) is the definitive rescue procedure of choice to decompress the portal venous system.',
    optionRationales: {
      A: 'Balloon inflation >24 hours leads to pressure necrosis and fatal esophageal rupture.',
      B: 'Oral beta-blockers cannot prevent rebleeding once the balloon is deflated after refractory hemorrhage.',
      C: 'Adrenaline injection is ineffective and unsafe for high-pressure varices.',
      D: 'Correct. Salvage TIPS is the definitive procedure for variceal bleeding refractory to endoscopic banding.'
    },
    keyTakeaway: 'Balloon tamponade is only a temporary bridge (<=24 hours); refractory variceal bleeding requires urgent salvage Transjugular Intrahepatic Portosystemic Shunt (TIPS).',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['TIPS', 'Refractory Varices', 'Balloon Tamponade', 'Sengstaken-Blakemore', 'Cirrhosis']
  },
  {
    id: 'ugib_q5',
    topicId: 'upper_gi_bleeding',
    topicTitle: 'Management of Upper GI Bleeding',
    questionNumber: 5,
    clinicalVignette: 'A 45-year-old man presents with non-variceal upper GI bleeding and is successfully stabilized with IV fluids. Within what timeframe should diagnostic and therapeutic upper GI endoscopy ideally be performed in a hemodynamically stabilized patient?',
    options: [
      { id: 'A', text: 'Within 6 hours in all patients regardless of stability' },
      { id: 'B', text: 'Within 24 hours of presentation after adequate resuscitation' },
      { id: 'C', text: 'After 72 hours of complete fasting and observation' },
      { id: 'D', text: 'Only if re-bleeding occurs during the hospital admission' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Within 24 hours of presentation after adequate resuscitation',
    explanation: 'International guidelines (ESGE, ACG) recommend that early upper gastrointestinal endoscopy be performed within 24 hours of presentation in patients with acute upper GI bleeding once hemodynamic stabilization and adequate resuscitation have been achieved. Performing endoscopy within 24 hours provides accurate diagnostic assessment, delivers timely hemostasis for high-risk stigmata, reduces hospital length of stay, and prevents rebleeding.',
    optionRationales: {
      A: 'Endoscopy within <6 hours has not been shown to improve outcomes compared to 24 hours and may risk inadequate resuscitation.',
      B: 'Correct. Early endoscopy within 24 hours after hemodynamic stabilization is the recommended international standard.',
      C: 'Waiting 72 hours delays hemostasis for high-risk ulcers and increases rebleeding rates.',
      D: 'Diagnostic endoscopy is indicated in all presenting upper GI bleeds, not just recurrent bleeds.'
    },
    keyTakeaway: 'Early upper GI endoscopy should be performed within 24 hours of presentation following adequate hemodynamic resuscitation.',
    sourcePageRef: '',
    difficulty: 'Core Clinical',
    tags: ['Endoscopy Timing', 'Upper GI Bleeding', 'Clinical Guidelines', 'Resuscitation']
  },
// ----------------------------------------------------
  // MANAGEMENT OF ERECTILE DYSFUNCTION (Pages 56-58)
  // ----------------------------------------------------
  {
    id: 'ed_q1',
    topicId: 'erectile_dysfunction',
    topicTitle: 'Management of Erectile Dysfunction',
    questionNumber: 1,
    clinicalVignette: 'A 32-year-old man presents with severe anxiety regarding sexual performance following a single episode of erectile failure. He reports normal, rigid morning erections and normal nocturnal penile tumescence. Which autonomic mechanism explains his situational erectile failure?',
    options: [
      { id: 'A', text: 'Excessive parasympathetic activity causing premature venous leakage' },
      { id: 'B', text: 'Subclinical testosterone deficiency' },
      { id: 'C', text: 'Increased sympathetic activity causing cavernosal arteriolar vasoconstriction' },
      { id: 'D', text: 'Reduced penile sensory nerve conduction' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Increased sympathetic activity causing cavernosal arteriolar vasoconstriction',
    explanation: 'Penile erection is mediated by parasympathetic-driven release of nitric oxide (NO), stimulating guanylate cyclase to increase cGMP, resulting in cavernosal smooth muscle relaxation and engorgement. In psychogenic ED and performance anxiety, high central sympathetic tone triggers massive release of norepinephrine, stimulating alpha-1 adrenergic receptors on penile helicine arterioles and trabecular smooth muscle, causing profound vasoconstriction and preventing sinusoidal filling despite intact vascular anatomy (as evidenced by normal nocturnal erections).',
    optionRationales: {
      A: 'Parasympathetic activity produces erection, not flaccidity or venous leakage.',
      B: 'Testosterone deficiency causes low libido and loss of morning erections.',
      C: 'Correct. Excessive sympathetic outflow releases norepinephrine, causing alpha-1 mediated vasoconstriction that aborts erection.',
      D: 'Sensory conduction is preserved in psychogenic ED.'
    },
    keyTakeaway: 'Performance anxiety triggers sympathetic overactivity, releasing norepinephrine to cause alpha-1 mediated cavernosal vasoconstriction (psychogenic ED).',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Erectile Dysfunction', 'Psychogenic ED', 'Sympathetic Tone', 'Alpha-1 Vasoconstriction']
  },
  {
    id: 'ed_q2',
    topicId: 'erectile_dysfunction',
    topicTitle: 'Management of Erectile Dysfunction',
    questionNumber: 2,
    clinicalVignette: 'A 60-year-old man with severe diabetic vasculopathy and neuropathy presents with refractory erectile dysfunction. He has failed maximum-dose oral PDE-5 inhibitors (sildenafil, tadalafil) taken with correct timing and sexual stimulation. Serum total testosterone is normal. He is motivated and willing to self-administer localized therapy. Which of the following is the most appropriate second-line treatment?',
    options: [
      { id: 'A', text: 'Discontinue all ED therapy permanently' },
      { id: 'B', text: 'Intracavernosal alprostadil (prostaglandin E1) injection therapy' },
      { id: 'C', text: 'Oral testosterone undecanoate' },
      { id: 'D', text: 'Daily oral isosorbide mononitrate' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Intracavernosal alprostadil (prostaglandin E1) injection therapy',
    explanation: 'When oral phosphodiesterase-5 (PDE-5) inhibitors fail or are contraindicated, second-line therapies for erectile dysfunction include Intracavernosal Injection (ICI) therapy (Alprostadil / PGE1, or combination Trimix: alprostadil + papaverine + phentolamine), intraurethral alprostadil pellets (MUSE), or Vacuum Erection Devices (VED). Alprostadil acts directly on cavernosal smooth muscle EP receptors to increase intracellular cAMP, bypassing impaired endothelial nitric oxide pathways.',
    optionRationales: {
      A: 'Second-line and third-line effective therapies remain available.',
      B: 'Correct. Intracavernosal alprostadil injection therapy is the evidence-based second-line treatment of choice following oral PDE-5 inhibitor failure.',
      C: 'Testosterone supplementation is ineffective when baseline testosterone levels are normal.',
      D: 'Nitrates combined with prior PDE-5 inhibitors cause fatal refractory hypotension and do not treat ED.'
    },
    keyTakeaway: 'Intracavernosal Alprostadil (PGE1) injections are the standard second-line treatment for erectile dysfunction refractory to oral PDE-5 inhibitors.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Erectile Dysfunction', 'Alprostadil', 'Intracavernosal Injection', 'Second-Line ED']
  },
  {
    id: 'ed_q3',
    topicId: 'erectile_dysfunction',
    topicTitle: 'Management of Erectile Dysfunction',
    questionNumber: 3,
    clinicalVignette: 'A 55-year-old man with hypertension and type 2 diabetes presents with a 1-year history of worsening erectile dysfunction. He has normal libido and no symptoms of hypogonadism. Cardiovascular evaluation reveals stable low-risk cardiac status, and he is not taking any nitrate medications. Which of the following is the recommended first-line oral pharmacological treatment?',
    options: [
      { id: 'A', text: 'Intramuscular testosterone cypionate' },
      { id: 'B', text: 'Intracavernosal alprostadil' },
      { id: 'C', text: 'Oral phosphodiesterase-5 (PDE-5) inhibitor (e.g. Sildenafil or Tadalafil)' },
      { id: 'D', text: 'Vacuum erection device as exclusive first-line drug therapy' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Oral phosphodiesterase-5 (PDE-5) inhibitor (e.g. Sildenafil or Tadalafil)',
    explanation: 'Oral Phosphodiesterase type 5 (PDE-5) inhibitors (Sildenafil, Tadalafil, Vardenafil, Avanafil) are the universal first-line pharmacological treatment of choice for erectile dysfunction across diverse etiologies (vascular, diabetic, neurogenic, psychogenic). By inhibiting the PDE-5 enzyme that degrades cyclic GMP in the corpus cavernosum, they sustain intracellular cGMP levels and smooth muscle relaxation during sexual arousal. They are contraindicated in patients taking organic nitrates.',
    optionRationales: {
      A: 'Testosterone is only indicated in confirmed biochemical hypogonadism with low morning testosterone.',
      B: 'Intracavernosal injections are invasive second-line therapies.',
      C: 'Correct. Oral PDE-5 inhibitors (Sildenafil, Tadalafil) are the recommended first-line pharmacological therapy.',
      D: 'Vacuum erection device is a non-pharmacological mechanical option.'
    },
    keyTakeaway: 'Oral PDE-5 inhibitors (Sildenafil, Tadalafil) are the first-line pharmacological therapy for erectile dysfunction in patients without nitrate contraindications.',
    sourcePageRef: '',
    difficulty: 'Core Clinical',
    tags: ['Erectile Dysfunction', 'Sildenafil', 'PDE-5 Inhibitors', 'First-Line Therapy']
  }
];
