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
  // INVESTIGATION OF DIABETIC FOOT ULCERS (Pages 40-43)
  // ----------------------------------------------------
  {
    id: 'dfu_q1',
    topicId: 'diabetic_foot_ulcers',
    topicTitle: 'Investigation of Diabetic Foot Ulcers',
    questionNumber: 1,
    clinicalVignette: 'A 62-year-old man with type 2 diabetes presents with a 2-cm deep plantar ulcer under the first metatarsal head. On examination with a sterile blunt metal probe, a positive "probe-to-bone" test is noted (the probe contacts hard, gritty bone). Inflammatory markers show an ESR of 78 mm/h and CRP of 42 mg/L. Plain radiographs of the foot show soft-tissue swelling but no obvious cortical bone destruction. Which of the following is the most appropriate next imaging investigation to confirm or exclude underlying osteomyelitis?',
    options: [
      { id: 'A', text: 'Superficial swab culture only' },
      { id: 'B', text: 'Magnetic resonance imaging (MRI) of the foot' },
      { id: 'C', text: 'Computed tomography (CT) scan without contrast' },
      { id: 'D', text: 'Repeat plain radiograph in 6 months' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Magnetic resonance imaging (MRI) of the foot',
    explanation: 'A positive probe-to-bone test in a high-prevalence setting has a high positive predictive value (>85%) for diabetic foot osteomyelitis. Plain radiographs take 10–14 days to show visible cortical bone resorption or periosteal reaction. When osteomyelitis is suspected clinically with elevated inflammatory markers but plain X-rays are normal or equivocal, Magnetic Resonance Imaging (MRI) is the gold-standard imaging modality of choice (sensitivity >90%, specificity >80%), detecting early bone marrow edema (T1 low signal, T2/STIR high signal).',
    optionRationales: {
      A: 'Superficial swabs culture skin colonizers and do not diagnose bony involvement.',
      B: 'Correct. MRI is the most sensitive and specific imaging modality for diagnosing early diabetic foot osteomyelitis.',
      C: 'CT is superior for cortical sequestrum but lacks MRI\'s high sensitivity for early marrow edema.',
      D: 'Waiting 6 months leads to uncontrolled infection, tissue loss, and amputation.'
    },
    keyTakeaway: 'When diabetic foot osteomyelitis is suspected with a positive probe-to-bone test but normal plain X-rays, MRI of the foot is the imaging gold standard.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Diabetic Foot', 'Osteomyelitis', 'Probe-to-Bone', 'MRI Foot', 'Infectious Disease']
  },
  {
    id: 'dfu_q2',
    topicId: 'diabetic_foot_ulcers',
    topicTitle: 'Investigation of Diabetic Foot Ulcers',
    questionNumber: 2,
    clinicalVignette: 'A 70-year-old woman with a 25-year history of poorly controlled diabetes presents with a non-healing ulcer on the lateral border of her right foot. Clinical examination reveals absent dorsalis pedis and posterior tibial pulses, cool extremities, shiny skin, and loss of hair. An Ankle-Brachial Index (ABI) is performed and reveals a value of 1.52. What is the most appropriate clinical explanation for this ABI finding?',
    options: [
      { id: 'A', text: 'The patient has completely normal lower extremity arterial perfusion, ruling out peripheral artery disease' },
      { id: 'B', text: 'The patient has mild peripheral artery disease that requires no further evaluation' },
      { id: 'C', text: 'Medial arterial calcification (Mönckeberg sclerosis) has produced an incompressible, rigid tibial artery, producing a falsely elevated ABI' },
      { id: 'D', text: 'The elevated ABI confirms severe critical limb ischemia with absolute accuracy' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Medial arterial calcification (Mönckeberg sclerosis) has produced an incompressible, rigid tibial artery, producing a falsely elevated ABI',
    explanation: 'An ABI > 1.30 or > 1.40 is abnormally elevated due to Medial Arterial Calcification (Mönckeberg medial calcinosis / sclerosis) in the tunica media of lower extremity arteries. The calcified, rigid arterial walls resist external compression by the pneumatic blood pressure cuff, yielding falsely elevated ankle systolic pressures. This artifact completely masks underlying severe occlusive peripheral artery disease (PAD). In such patients, alternative tests such as Toe-Brachial Index (TBI, using digital arteries that are rarely calcified) or arterial duplex ultrasound must be performed.',
    optionRationales: {
      A: 'ABI > 1.40 is an artifactual elevation, not normal perfusion.',
      B: 'An elevated ABI indicates non-compressible calcified vessels, which frequently conceals severe ischemia.',
      C: 'Correct. Medial arterial calcification causes vessel wall rigidity, falsely elevating the ABI (>1.40).',
      D: 'The elevated number is a false artifact caused by calcification, not a direct measurement of ischemia.'
    },
    keyTakeaway: 'An ABI > 1.40 indicates non-compressible, calcified tibial arteries (Mönckeberg sclerosis) which falsely masks severe peripheral artery disease; evaluate with Toe-Brachial Index (TBI).',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Ankle-Brachial Index', 'Monckeberg Sclerosis', 'Medial Calcification', 'Diabetic Foot', 'PAD']
  },
  {
    id: 'dfu_q3',
    topicId: 'diabetic_foot_ulcers',
    topicTitle: 'Investigation of Diabetic Foot Ulcers',
    questionNumber: 3,
    clinicalVignette: 'A 58-year-old man with diabetes presents with a foul-smelling, purulent diabetic foot ulcer. A superficial swab of the ulcer base was previously taken and grew Pseudomonas aeruginosa and mixed staphylococci. What is the most accurate and recommended method for obtaining a microbiological specimen in diabetic foot infections?',
    options: [
      { id: 'A', text: 'Repeat the superficial swab without cleaning the ulcer' },
      { id: 'B', text: 'Obtain a swab of intact skin adjacent to the ulcer' },
      { id: 'C', text: 'Obtain a deep tissue specimen (biopsy or curettage of the ulcer base) following thorough cleansing and surgical debridement of superficial slough' },
      { id: 'D', text: 'Blood culture is the only acceptable specimen for diagnosing ulcer infections' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Obtain a deep tissue specimen (biopsy or curettage of the ulcer base) following thorough cleansing and surgical debridement of superficial slough',
    explanation: 'Superficial wound swabs invariably capture non-pathogenic superficial colonizing skin flora rather than true deep invasive tissue pathogens. International guidelines (IWGDF, IDSA) mandate that microbiological specimens must be obtained by deep tissue curettage (scraping the ulcer base) or aseptic deep tissue biopsy after thorough wound cleansing and sharp surgical debridement of superficial slough and necrotic debris.',
    optionRationales: {
      A: 'Superficial uncleaned swabs sample colonizers and lead to inappropriate antibiotic overuse.',
      B: 'Skin swabs sample commensal flora, not deep pathogens.',
      C: 'Correct. Deep tissue curettage or biopsy after debridement is the gold standard microbiological specimen.',
      D: 'Blood cultures are positive in only a minority of non-bacteremic diabetic foot infections.'
    },
    keyTakeaway: 'Microbiology in diabetic foot infections must be obtained from deep tissue biopsy or curettage after debridement, never from superficial uncleaned swabs.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Diabetic Foot', 'Microbiology Specimen', 'Deep Tissue Biopsy', 'Infection Guidelines']
  },
  {
    id: 'dfu_q4',
    topicId: 'diabetic_foot_ulcers',
    topicTitle: 'Investigation of Diabetic Foot Ulcers',
    questionNumber: 4,
    clinicalVignette: 'A 65-year-old man with type 2 diabetes presents for diabetic foot screening. He has a chronic plantar ulcer. His peripheral pulses are easily palpable and the ABI is 1.08. Which simple, standardized bedside investigation is recommended as the primary tool to assess for Loss of Protective Sensation (LOPS)?',
    options: [
      { id: 'A', text: '128-Hz tuning fork vibration testing only' },
      { id: 'B', text: '10-g Semmes-Weinstein monofilament testing' },
      { id: 'C', text: 'Ankle-brachial index' },
      { id: 'D', text: 'Electromyography and nerve conduction studies' }
    ],
    correctOption: 'B',
    correctAnswerText: '10-g Semmes-Weinstein monofilament testing',
    explanation: 'The 10-g Semmes-Weinstein monofilament test (applying 10 grams of buckling force across designated plantar sites such as the plantar surface of the hallux and 1st, 3rd, and 5th metatarsal heads) is the international standard bedside screening test for identifying Loss of Protective Sensation (LOPS). Inability to perceive the 10-g monofilament indicates advanced sensory peripheral neuropathy and a dramatically increased risk of pressure ulceration.',
    optionRationales: {
      A: 'A 128-Hz tuning fork assesses vibration sense, which is complementary, but the 10-g monofilament specifically defines LOPS.',
      B: 'Correct. 10-g Semmes-Weinstein monofilament is the gold-standard test for loss of protective sensation (LOPS).',
      C: 'ABI evaluates macrovascular arterial perfusion, not sensory nerve function.',
      D: 'EMG/NCS is reserved for complex atypical neuropathies, not routine bedside foot ulcer screening.'
    },
    keyTakeaway: 'The 10-g Semmes-Weinstein monofilament is the gold-standard bedside tool for detecting loss of protective sensation (LOPS) in the diabetic foot.',
    sourcePageRef: '',
    difficulty: 'Core Clinical',
    tags: ['Monofilament Test', 'Diabetic Neuropathy', 'LOPS', 'Foot Screening']
  },
  {
    id: 'dfu_q5',
    topicId: 'diabetic_foot_ulcers',
    topicTitle: 'Investigation of Diabetic Foot Ulcers',
    questionNumber: 5,
    clinicalVignette: 'A 67-year-old man presents with a painful, necrotic ulcer on his right great toe. Examination shows absent distal pulses, dependent rubor, and an ABI of 0.38, confirming critical limb-threatening ischemia. Which investigation is indicated to define the detailed arterial vascular anatomy and plan surgical or endovascular revascularization?',
    options: [
      { id: 'A', text: 'HbA1c level' },
      { id: 'B', text: 'Plain X-ray of the foot' },
      { id: 'C', text: 'CT angiography (CTA) of the lower extremity or digital subtraction angiography (DSA)' },
      { id: 'D', text: '10-g monofilament sensory testing' }
    ],
    correctOption: 'C',
    correctAnswerText: 'CT angiography (CTA) of the lower extremity or digital subtraction angiography (DSA)',
    explanation: 'In critical limb-threatening ischemia (ABI < 0.40, resting pain, tissue necrosis), detailed vascular anatomical roadmapping is essential to identify the location, length, and severity of arterial occlusions from the aortoiliac segment down to the tibial/pedal vessels. Computed Tomography Angiography (CTA), Magnetic Resonance Angiography (MRA), or invasive Digital Subtraction Angiography (DSA) are the definitive investigations to guide surgical bypass or endovascular angioplasty.',
    optionRationales: {
      A: 'HbA1c monitors long-term glycemic control but cannot guide vascular surgery.',
      B: 'Plain X-rays assess bone structure, not vascular lumen anatomy.',
      C: 'Correct. CT angiography, MRA, or catheter DSA is required to map arterial anatomy for revascularization.',
      D: 'Monofilament evaluates neuropathy, not arterial occlusive anatomy.'
    },
    keyTakeaway: 'CT angiography, MRA, or Digital Subtraction Angiography (DSA) is required in critical limb ischemia to map vascular anatomy for revascularization.',
    sourcePageRef: '',
    difficulty: 'Core Clinical',
    tags: ['Vascular Roadmapping', 'CT Angiography', 'Critical Limb Ischemia', 'Revascularization']
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
