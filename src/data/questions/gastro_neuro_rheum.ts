import { Question } from '../../types';

export const GASTRO_NEURO_RHEUM_QUESTIONS: Question[] = [
  // ----------------------------------------------------
  // MANAGEMENT OF UPPER GI BLEEDING (Pages 37-40)
  // ----------------------------------------------------
  {
    id: 'ugib_q1',
    topicId: 'upper_gi_bleeding',
    topicTitle: 'Management of Upper GI Bleeding',
    questionNumber: 1,
    clinicalVignette: 'A 62-year-old man presents with massive hematemesis and melena. He has known liver cirrhosis. On examination: blood pressure is 85/50 mmHg, heart rate is 128 bpm, extremities are cold and clammy, and he has marked splenomegaly. While initiating IV fluid resuscitation with packed red blood cells, which pharmacological regimen should be started immediately prior to emergency endoscopy?',
    options: [
      { id: 'A', text: 'Intravenous Terlipressin (or Octreotide) plus prophylactic intravenous Ceftriaxone' },
      { id: 'B', text: 'Oral Propranolol 40 mg twice daily plus oral sucralfate' },
      { id: 'C', text: 'Intravenous Tranexamic acid 1 g stat alone' },
      { id: 'D', text: 'High-dose oral antacid suspension via nasogastric tube' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Intravenous Terlipressin (or Octreotide) plus prophylactic intravenous Ceftriaxone',
    explanation: 'In suspected acute variceal hemorrhage, vasoactive drugs (Terlipressin, Octreotide, Somatostatin) must be initiated immediately on presentation before diagnostic endoscopy to reduce splanchnic blood flow and lower portal venous pressure. Short-term prophylactic antibiotic therapy (IV Ceftriaxone 1 g/day for up to 7 days) is mandatory because bacterial infections occur in up to 50% of cirrhotic bleeders; antibiotic prophylaxis significantly reduces early rebleeding, spontaneous bacterial peritonitis, and all-cause mortality.',
    optionRationales: {
      A: 'Correct. Vasoactive agents (Terlipressin/Octreotide) reduce portal inflow while prophylactic Ceftriaxone reduces sepsis, rebleeding, and mortality.',
      B: 'Non-selective beta-blockers (propranolol) are strictly contraindicated in acute shock/active bleeding; they are used only for secondary prophylaxis once stabilized.',
      C: 'Tranexamic acid has no proven mortality benefit in variceal bleeding and increases thromboembolic complications in cirrhosis.',
      D: 'Oral antacids are completely ineffective for life-threatening variceal hemorrhage.'
    },
    keyTakeaway: 'Early IV vasoactive therapy (Terlipressin / Octreotide) combined with prophylactic antibiotics (IV Ceftriaxone) is mandatory in acute variceal bleeding.',
    sourcePageRef: 'Pages 37–38, Q1',
    difficulty: 'High Yield',
    tags: ['Variceal Bleeding', 'Terlipressin', 'Ceftriaxone Prophylaxis', 'Cirrhosis', 'Upper GI Bleed']
  },
  {
    id: 'ugib_q2',
    topicId: 'upper_gi_bleeding',
    topicTitle: 'Management of Upper GI Bleeding',
    questionNumber: 2,
    clinicalVignette: 'A 58-year-old man presents with melena following 2 weeks of high-dose ibuprofen use for severe osteoarthritis. Emergency upper endoscopy reveals a 1.5-cm peptic ulcer in the duodenal bulb with active arterial spurting (Forrest Class Ia). Which endoscopic intervention is recommended as the standard of care for definitive hemostasis?',
    options: [
      { id: 'A', text: 'Epinephrine (adrenaline) injection alone as monotherapy' },
      { id: 'B', text: 'Dual endoscopic therapy (e.g., Epinephrine injection combined with thermal coagulation or mechanical through-the-scope hemoclips)' },
      { id: 'C', text: 'Argon plasma coagulation alone without mechanical clipping' },
      { id: 'D', text: 'Immediate emergency laparotomy and partial gastrectomy without endoscopic therapy' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Dual endoscopic therapy (e.g., Epinephrine injection combined with thermal coagulation or mechanical through-the-scope hemoclips)',
    explanation: 'For high-risk peptic ulcer bleeding (Forrest Class Ia active spurting, Ib active oozing, or IIa non-bleeding visible vessel), dual endoscopic therapy is guideline-mandated. Epinephrine injection provides transient local vasoconstriction and initial visualization, but must ALWAYS be combined with a second definitive hemostatic modality (mechanical hemoclips or thermal contact coagulation / bipolar probe). Epinephrine monotherapy is inadequate due to unacceptably high rebleeding rates.',
    optionRationales: {
      A: 'Epinephrine monotherapy has high rebleeding rates and is inferior to combination therapy.',
      B: 'Correct. Dual therapy (epinephrine injection plus mechanical hemoclip or thermal coagulation) is the standard of care.',
      C: 'Argon plasma coagulation is non-contact and insufficient for deep arterial spurters in peptic ulcers.',
      D: 'Surgery is reserved for refractory bleeding that fails repeated endoscopic intervention.'
    },
    keyTakeaway: 'High-risk bleeding peptic ulcers (Forrest Ia, Ib, IIa) require dual endoscopic therapy (epinephrine injection plus mechanical hemoclip or thermal coagulation).',
    sourcePageRef: 'Page 38, Q2',
    difficulty: 'High Yield',
    tags: ['Peptic Ulcer', 'Forrest Classification', 'Dual Endoscopy', 'Hemoclips', 'Hemostasis']
  },
  {
    id: 'ugib_q3',
    topicId: 'upper_gi_bleeding',
    topicTitle: 'Management of Upper GI Bleeding',
    questionNumber: 3,
    clinicalVignette: 'A 70-year-old woman presents with a single episode of mild coffee-ground emesis. Her initial Glasgow-Blatchford Score (GBS) is calculated as 0 (Hemoglobin 13.5 g/dL, Blood Urea 4.2 mmol/L, Systolic BP 125 mmHg, Heart Rate 72 bpm, no melena, syncope, hepatic disease, or heart failure). Which of the following is the most appropriate management plan?',
    options: [
      { id: 'A', text: 'Urgent ICU admission, balloon tamponade, and emergent angiography' },
      { id: 'B', text: 'Safe outpatient management with low risk of requiring blood transfusion or endoscopic intervention' },
      { id: 'C', text: 'Immediate endotracheal intubation and emergency surgical consultation' },
      { id: 'D', text: 'High-dose IV PPI infusion for 72 hours in the high-dependency unit' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Safe outpatient management with low risk of requiring blood transfusion or endoscopic intervention',
    explanation: 'The Glasgow-Blatchford Score (GBS) is the standard risk-stratification score used at initial presentation of upper GI bleeding before endoscopy. A GBS of 0 (or score <= 1 in many clinical guidelines) identifies very low-risk patients who have virtually zero risk of mortality, negligible need for endoscopic hemostatic intervention, and no requirement for blood transfusion. Such patients can be safely discharged for outpatient diagnostic workup.',
    optionRationales: {
      A: 'ICU and balloon tamponade are for catastrophic refractory variceal shock.',
      B: 'Correct. A GBS of 0 identifies very low risk, allowing safe outpatient management without hospital admission.',
      C: 'Intubation and emergent surgery are completely unnecessary for a GBS score of 0.',
      D: 'Continuous 72-hour IV PPI infusions are indicated only after successful endoscopic treatment of high-risk ulcer stigmata.'
    },
    keyTakeaway: 'A Glasgow-Blatchford Score (GBS) of 0 identifies very low-risk upper GI bleed patients who can safely be managed as outpatients.',
    sourcePageRef: 'Pages 38–39, Q3',
    difficulty: 'Core Clinical',
    tags: ['Glasgow-Blatchford Score', 'GBS', 'Risk Stratification', 'Upper GI Bleeding', 'Triage']
  },
  {
    id: 'ugib_q4',
    topicId: 'upper_gi_bleeding',
    topicTitle: 'Management of Upper GI Bleeding',
    questionNumber: 4,
    clinicalVignette: 'A 65-year-old cirrhotic patient with massive refractory esophageal variceal hemorrhage continues to bleed exsanguinating amounts of blood despite endoscopic band ligation and IV terlipressin infusion. As a temporary bridge to definitive rescue therapy (TIPS / Shunt), a Sengstaken-Blakemore tube is placed and inflated. What is the maximum recommended duration for continuous balloon inflation to prevent ischemic pressure necrosis and esophageal perforation?',
    options: [
      { id: 'A', text: '6 hours' },
      { id: 'B', text: '24 hours (with periodic deflation)' },
      { id: 'C', text: '72 hours continuously' },
      { id: 'D', text: '7 days' }
    ],
    correctOption: 'B',
    correctAnswerText: '24 hours (with periodic deflation)',
    explanation: 'Balloon tamponade (using Sengstaken-Blakemore or Minnesota tubes) is strictly a temporary rescue bridge for catastrophic, refractory variceal bleeding when endoscopy fails. Because prolonged mucosal compression causes severe ischemic mucosal necrosis, ulceration, and catastrophic esophageal perforation, the balloon should not remain inflated continuously for more than 24 hours (and ideally no more than 12–24 hours). Deflation of the esophageal balloon every 6–12 hours for 5 minutes is recommended to maintain mucosal viability while organizing TIPS or surgery.',
    optionRationales: {
      A: '6 hours may be too short if organizing transfer for TIPS, though shorter duration is always safer.',
      B: 'Correct. The maximum duration is 24 hours with intermittent deflation to prevent fatal esophageal rupture/necrosis.',
      C: 'Leaving the balloon inflated for 72 hours causes extensive transmural esophageal necrosis and perforation.',
      D: '7 days would inevitably cause fatal esophageal wall necrosis.'
    },
    keyTakeaway: 'Balloon tamponade (Sengstaken-Blakemore tube) is a short-term bridge to TIPS/surgery and must not be left inflated continuously for more than 24 hours.',
    sourcePageRef: 'Page 39, Q4',
    difficulty: 'High Yield',
    tags: ['Sengstaken-Blakemore', 'Balloon Tamponade', 'Variceal Bleed', 'Esophageal Perforation']
  },
  {
    id: 'ugib_q5',
    topicId: 'upper_gi_bleeding',
    topicTitle: 'Management of Upper GI Bleeding',
    questionNumber: 5,
    clinicalVignette: 'A 54-year-old man with a bleeding duodenal ulcer undergoes successful endoscopic hemoclipping and thermal coagulation. He is started on an intravenous Omeprazole bolus of 80 mg followed by a continuous infusion of 8 mg/hour for 72 hours. What is the precise physiological rationale for maintaining an intragastric pH above 6.0 following endoscopic hemostasis?',
    options: [
      { id: 'A', text: 'Intragastric pH > 6.0 is required to eradicate Helicobacter pylori within 24 hours' },
      { id: 'B', text: 'Pepsin is irreversibly inactivated and platelet aggregation and fibrin clot stabilization are optimized at pH >= 6.0' },
      { id: 'C', text: 'High intragastric pH increases gastric mucosal hydrochloric acid secretion to prevent bacterial overgrowth' },
      { id: 'D', text: 'High pH induces splanchnic arterial vasoconstriction comparable to terlipressin' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Pepsin is irreversibly inactivated and platelet aggregation and fibrin clot stabilization are optimized at pH >= 6.0',
    explanation: 'Platelet aggregation and blood coagulation are virtually abolished at acidic pH (< 5.4), and gastric pepsin (which lyses fibrin clots) is maximally active at pH 1.5–3.5. Raising and maintaining the intragastric pH >= 6.0 irreversibly inactivates pepsin, stabilizes platelet aggregation, prevents fibrin clot dissolution over the sealed blood vessel, and significantly reduces the risk of recurrent peptic ulcer hemorrhage.',
    optionRationales: {
      A: 'H. pylori eradication requires oral antibiotic combination regimens, not acute IV PPI monotherapy.',
      B: 'Correct. At pH >= 6.0, pepsin is inactivated and platelet aggregation/fibrin clot stability is maintained.',
      C: 'High pH suppresses acid secretion rather than increasing it.',
      D: 'PPIs do not act on splanchnic vascular receptors.'
    },
    keyTakeaway: 'Maintaining intragastric pH >= 6.0 with high-dose IV PPI therapy inactivates pepsin and stabilizes platelet clot formation, preventing ulcer rebleeding.',
    sourcePageRef: 'Pages 39–40, Q5',
    difficulty: 'High Yield',
    tags: ['Proton Pump Inhibitors', 'Intragastric pH', 'Pepsin Inactivation', 'Clot Stabilization']
  },

  // ----------------------------------------------------
  // COMPARISON OF CT SCAN & MRI IN STROKE MANAGEMENT (Pages 52-53)
  // ----------------------------------------------------
  {
    id: 'stroke_q1',
    topicId: 'stroke_imaging',
    topicTitle: 'Comparison of CT Scan & MRI in Stroke Management',
    questionNumber: 1,
    clinicalVignette: 'A 65-year-old man presents with sudden-onset right hemiplegia and expressive aphasia starting 90 minutes ago. Non-contrast CT (NCCT) head shows no acute hemorrhage and no hyperdense MCA sign, with an Alberta Stroke Program Early CT Score (ASPECTS) of 10. What is the primary role of non-contrast CT head in the hyperacute management of suspected ischemic stroke within the thrombolysis window?',
    options: [
      { id: 'A', text: 'Identifying salvageable ischemic penumbra' },
      { id: 'B', text: 'Rapidly ruling out intracranial hemorrhage and large established core infarction before intravenous thrombolysis' },
      { id: 'C', text: 'Visualizing the precise site of distal cortical microvascular thrombosis' },
      { id: 'D', text: 'Confirming the specific histologic subtype of ischemic neuronal necrosis' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Rapidly ruling out intracranial hemorrhage and large established core infarction before intravenous thrombolysis',
    explanation: 'The primary, indispensable clinical role of non-contrast head CT in hyperacute stroke (<= 4.5 hours) is to rapidly exclude acute intracranial hemorrhage (which is an absolute contraindication to thrombolysis) and detect early extensive established infarction (such as hypoattenuation involving > 1/3 of the MCA territory, which carries prohibitive bleeding risk). NCCT is widely available, rapid (<1 minute), and reliably rules out bleeding.',
    optionRationales: {
      A: 'Ischemic penumbra requires CT Perfusion (CTP) or MRI DWI-PWI mismatch, not routine NCCT.',
      B: 'Correct. Non-contrast CT is performed primarily to rule out intracranial hemorrhage and massive established infarct.',
      C: 'Distal cortical thrombi require CT Angiography (CTA) or MR Angiography (MRA).',
      D: 'Histology cannot be determined by non-contrast CT.'
    },
    keyTakeaway: 'The primary goal of non-contrast CT head in acute stroke is rapid exclusion of intracranial hemorrhage prior to thrombolysis.',
    sourcePageRef: 'Page 52, Q1',
    difficulty: 'High Yield',
    tags: ['Stroke Imaging', 'NCCT', 'Thrombolysis', 'Intracranial Hemorrhage', 'ASPECTS']
  },
  {
    id: 'stroke_q2',
    topicId: 'stroke_imaging',
    topicTitle: 'Comparison of CT Scan & MRI in Stroke Management',
    questionNumber: 2,
    clinicalVignette: 'A 58-year-old woman presents with acute left-sided weakness 2 hours after symptom onset. On MRI brain, Diffusion-Weighted Imaging (DWI) shows high signal intensity (bright) with corresponding low signal on Apparent Diffusion Coefficient (ADC) in the right middle cerebral artery territory, while T2/FLAIR images appear entirely normal. What does this "DWI-FLAIR mismatch" signify?',
    options: [
      { id: 'A', text: 'An acute ischemic lesion within the early time window (<4.5 hours) where brain tissue is salvageable before irreversible FLAIR hyperintensity develops' },
      { id: 'B', text: 'A subacute ischemic stroke occurring more than 48 hours ago' },
      { id: 'C', text: 'An acute subarachnoid hemorrhage with false-negative CT' },
      { id: 'D', text: 'An imaging artifact caused by patient motion during MRI acquisition' }
    ],
    correctOption: 'A',
    correctAnswerText: 'An acute ischemic lesion within the early time window (<4.5 hours) where brain tissue is salvageable before irreversible FLAIR hyperintensity develops',
    explanation: 'Diffusion-Weighted Imaging (DWI) is exquisitely sensitive to cytotoxic edema (restricted water diffusion) within minutes of arterial occlusion. In contrast, T2/FLAIR hyperintensity requires 4 to 6 hours to develop as vasogenic edema and tissue breakdown accumulate. Therefore, a lesion visible on DWI but not yet visible on FLAIR ("DWI-FLAIR mismatch") definitively establishes that the stroke is hyperacute (< 4.5 hours old), making the patient eligible for IV thrombolysis even when the exact time of symptom onset is unknown.',
    optionRationales: {
      A: 'Correct. DWI-positive with FLAIR-negative proves the stroke is < 4.5 hours old (salvageable ischemic tissue).',
      B: 'Subacute strokes (>48 hours) show prominent FLAIR and T2 hyperintensity.',
      C: 'Subarachnoid hemorrhage appears hyperintense on FLAIR in CSF spaces, not an isolated parenchymal DWI lesion.',
      D: 'This is a genuine biological mismatch validating hyperacute ischemia.'
    },
    keyTakeaway: 'DWI-FLAIR mismatch (positive DWI, negative FLAIR) proves that an ischemic stroke is within the 4.5-hour thrombolysis window.',
    sourcePageRef: 'Pages 52–53, Q2',
    difficulty: 'High Yield',
    tags: ['DWI-FLAIR Mismatch', 'MRI Brain', 'Thrombolysis Window', 'Cytotoxic Edema']
  },
  {
    id: 'stroke_q3',
    topicId: 'stroke_imaging',
    topicTitle: 'Comparison of CT Scan & MRI in Stroke Management',
    questionNumber: 3,
    clinicalVignette: 'A 70-year-old man goes to bed normal at 10:00 PM and awakens at 6:00 AM with left hemiparesis and hemineglect ("wake-up stroke"). Because the exact time of stroke onset is unknown, which advanced neuroimaging strategy is indicated by current AHA/ASA guidelines to determine eligibility for intravenous thrombolysis (alteplase / tenecteplase)?',
    options: [
      { id: 'A', text: 'Routine non-contrast CT head alone' },
      { id: 'B', text: 'MRI brain demonstrating DWI positive lesion with negative FLAIR (DWI-FLAIR mismatch) or CT perfusion showing ischemic core vs penumbra mismatch' },
      { id: 'C', text: 'Skull X-ray and carotid Doppler ultrasonography' },
      { id: 'D', text: 'Immediate cerebral angiography via femoral artery catheterization' }
    ],
    correctOption: 'B',
    correctAnswerText: 'MRI brain demonstrating DWI positive lesion with negative FLAIR (DWI-FLAIR mismatch) or CT perfusion showing ischemic core vs penumbra mismatch',
    explanation: 'In "wake-up strokes" and strokes with unknown time of onset, advanced neuroimaging has revolutionized patient selection. Based on the WAKE-UP trial, patients with MRI DWI-FLAIR mismatch (indicating stroke onset < 4.5 hours) benefit significantly from IV thrombolysis with excellent functional recovery. Alternatively, automated CT Perfusion (CTP) demonstrating a small ischemic core with a large salvageable penumbral mismatch qualifies patients for thrombolysis or endovascular thrombectomy.',
    optionRationales: {
      A: 'NCCT alone cannot determine the precise age of the ischemic core in wake-up strokes.',
      B: 'Correct. MRI DWI-FLAIR mismatch or CT Perfusion core-penumbra mismatch identifies candidates for reperfusion therapy.',
      C: 'Skull X-rays and Doppler ultrasound cannot assess parenchymal brain ischemia or penumbra.',
      D: 'Invasive catheter angiography is therapeutic for thrombectomy, but non-invasive MRI/CT perfusion is required first for selection.'
    },
    keyTakeaway: 'MRI DWI-FLAIR mismatch or CT Perfusion enables safe reperfusion therapy in wake-up strokes and unknown onset times.',
    sourcePageRef: 'Page 53, Q3',
    difficulty: 'High Yield',
    tags: ['Wake-up Stroke', 'CT Perfusion', 'WAKE-UP Trial', 'Penumbra', 'Thrombolysis']
  },
  {
    id: 'stroke_q4',
    topicId: 'stroke_imaging',
    topicTitle: 'Comparison of CT Scan & MRI in Stroke Management',
    questionNumber: 4,
    clinicalVignette: 'A 60-year-old woman receives IV alteplase for acute ischemic stroke. Two hours after the infusion, she suddenly complains of severe headache, nausea, and her Glasgow Coma Scale (GCS) drops precipitously from 14 to 9 with a blood pressure of 190/110 mmHg. What is the immediate priority diagnostic and management action?',
    options: [
      { id: 'A', text: 'Immediately discontinue ongoing infusions, perform emergent non-contrast CT head to evaluate for symptomatic intracranial hemorrhage, and check stat fibrinogen and coagulation panel' },
      { id: 'B', text: 'Administer high-dose intravenous heparin bolus to prevent recurrent arterial re-occlusion' },
      { id: 'C', text: 'Administer oral aspirin 300 mg and observe in the ward' },
      { id: 'D', text: 'Discharge to general medical ward for supportive nursing care' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Immediately discontinue ongoing infusions, perform emergent non-contrast CT head to evaluate for symptomatic intracranial hemorrhage, and check stat fibrinogen and coagulation panel',
    explanation: 'Symptomatic Intracranial Hemorrhage (sICH) is the most feared and lethal complication of IV thrombolytic therapy (occurring in ~5–6% of cases). Sudden neurological deterioration, acute headache, vomiting, acute hypertension, or reduced consciousness warrants immediate cessation of any thrombolytic/antiplatelet agents, emergent non-contrast CT head to detect bleeding, STAT coagulation studies (fibrinogen, PT/INR, aPTT, platelets), and immediate preparation of reversal agents (Cryoprecipitate for fibrinogen < 150 mg/dL, tranexamic acid, and prothrombin complex concentrate).',
    optionRationales: {
      A: 'Correct. Stop infusions, perform emergent NCCT to confirm/exclude sICH, and check fibrinogen for reversal.',
      B: 'Heparin is strictly contraindicated and will cause catastrophic fatal hemorrhage if intracranial bleeding has occurred.',
      C: 'Aspirin is contraindicated during acute hemorrhagic transformation.',
      D: 'Discharge is inappropriate; this is a neuro-critical life-threatening emergency.'
    },
    keyTakeaway: 'Sudden neurological deterioration after thrombolysis demands immediate drug cessation, emergent NCCT head, and stat fibrinogen/coagulation workup for sICH.',
    sourcePageRef: 'Page 53, Q4',
    difficulty: 'High Yield',
    tags: ['Thrombolysis Complications', 'sICH', 'Emergency NCCT', 'Fibrinogen', 'Reversal']
  },
  {
    id: 'stroke_q5',
    topicId: 'stroke_imaging',
    topicTitle: 'Comparison of CT Scan & MRI in Stroke Management',
    questionNumber: 5,
    clinicalVignette: 'A 72-year-old hypertensive man presents with acute vertigo, ataxia, dysarthria, dysphagia, and right Horner\'s syndrome (lateral medullary syndrome / Wallenberg syndrome). A non-contrast head CT performed on arrival is reported as normal. Why is MRI (specifically DWI and T2) markedly superior to CT in evaluating posterior fossa and brainstem strokes?',
    options: [
      { id: 'A', text: 'CT produces prominent beam-hardening and streak artifacts from the dense petrous temporal and occipital bones obscuring brainstem detail' },
      { id: 'B', text: 'CT cannot differentiate gray matter from white matter in any part of the brain' },
      { id: 'C', text: 'MRI cannot detect ischemic strokes in the anterior circulation' },
      { id: 'D', text: 'Posterior fossa strokes do not cause restricted water diffusion' }
    ],
    correctOption: 'A',
    correctAnswerText: 'CT produces prominent beam-hardening and streak artifacts from the dense petrous temporal and occipital bones obscuring brainstem detail',
    explanation: 'Non-contrast CT has very poor sensitivity (<20–30%) for acute posterior fossa (brainstem and cerebellar) ischemic strokes because the thick, dense surrounding bones of the skull base (petrous temporal bone and occipital bone) cause severe "beam-hardening" and streak artifacts, obscuring the brainstem and cerebellum. MRI (specifically DWI/T2/FLAIR) is not subject to bone-attenuation artifacts and has >95% sensitivity for brainstem and posterior fossa infarctions.',
    optionRationales: {
      A: 'Correct. Beam-hardening artifacts from the dense skull base bones severely degrade CT visualization of the brainstem.',
      B: 'CT can differentiate cortical gray-white matter boundaries in the supratentorial hemispheres.',
      C: 'MRI is equally superior for both anterior and posterior circulation strokes.',
      D: 'Posterior fossa strokes cause profound cytotoxic edema and restricted diffusion visible on DWI.'
    },
    keyTakeaway: 'MRI DWI is the gold standard for posterior fossa/brainstem strokes because CT is obscured by dense bone beam-hardening artifacts.',
    sourcePageRef: 'Page 53, Q5',
    difficulty: 'High Yield',
    tags: ['Posterior Fossa Stroke', 'Beam-Hardening Artifact', 'MRI DWI', 'Brainstem Ischemia']
  },

  // ----------------------------------------------------
  // INDICATIONS FOR STEROID USE & STEROID EQUIVALENT DOSES (Pages 70-72)
  // ----------------------------------------------------
  {
    id: 'steroid_q1',
    topicId: 'steroid_prescribing',
    topicTitle: 'Indications for Steroid Use & Steroid Equivalent Doses',
    questionNumber: 1,
    clinicalVignette: 'A 32-year-old woman with known Addison\'s disease (primary adrenal insufficiency) on daily oral maintenance therapy presents with acute bacterial gastroenteritis, persistent vomiting, high fever (39.2°C), and hypotension (BP 80/50 mmHg). What is the appropriate adjustment to her corticosteroid regimen during this acute severe physiological stress?',
    options: [
      { id: 'A', text: 'Temporarily discontinue all corticosteroid replacement until vomiting subsides' },
      { id: 'B', text: 'Switch immediately to parenteral Hydrocortisone (100 mg IV stat bolus followed by 100 mg IV every 6 to 8 hours or 200 mg/24h continuous infusion) with vigorous IV saline rehydration' },
      { id: 'C', text: 'Double her usual oral fludrocortisone dose without administering hydrocortisone' },
      { id: 'D', text: 'Administer low-dose oral dexamethasone (0.5 mg once daily)' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Switch immediately to parenteral Hydrocortisone (100 mg IV stat bolus followed by 100 mg IV every 6 to 8 hours or 200 mg/24h continuous infusion) with vigorous IV saline rehydration',
    explanation: 'Patients with adrenal insufficiency cannot mount an endogenous cortisol response to severe physiological stress (fever, sepsis, trauma, surgery) or retain oral medications during vomiting. Without prompt "stress-dose" parenteral hydrocortisone (100 mg IV bolus followed by 50–100 mg IV q6–8h or 200 mg/day continuous infusion) and aggressive IV 0.9% normal saline rehydration, the patient will rapidly deteriorate into fatal circulatory collapse (adrenal crisis).',
    optionRationales: {
      A: 'Discontinuing steroids precipitates lethal hypovolemic shock and adrenal crisis.',
      B: 'Correct. Stress-dose IV hydrocortisone (100 mg stat, then q6-8h) with IV saline is life-saving in adrenal crisis.',
      C: 'At high doses (>=100 mg/day), hydrocortisone provides sufficient mineralocorticoid activity; fludrocortisone is unnecessary acutely and oral drugs cannot be absorbed during vomiting.',
      D: 'Low-dose oral dexamethasone is inadequate and cannot be retained during active vomiting.'
    },
    keyTakeaway: 'Adrenal insufficiency patients facing severe physiological stress or vomiting require immediate stress-dose parenteral hydrocortisone (100 mg IV bolus then q6–8h) and IV saline.',
    sourcePageRef: 'Pages 70–71, Q1',
    difficulty: 'High Yield',
    tags: ['Adrenal Crisis', 'Addison Disease', 'Stress-Dose Hydrocortisone', 'Steroid Prescribing']
  },
  {
    id: 'steroid_q2',
    topicId: 'steroid_prescribing',
    topicTitle: 'Indications for Steroid Use & Steroid Equivalent Doses',
    questionNumber: 2,
    clinicalVignette: 'A patient with severe Crohn\'s disease is treated with oral Prednisolone 40 mg daily for 8 weeks. His bowel symptoms resolve completely, and the physician plans to discontinue the medication. Which of the following is the most critical physiological reason for tapering systemic corticosteroids gradually rather than stopping abruptly?',
    options: [
      { id: 'A', text: 'To prevent sudden rebound hypoglycemia' },
      { id: 'B', text: 'To allow recovery of the suppressed hypothalamic-pituitary-adrenal (HPA) axis and prevent acute secondary adrenal crisis' },
      { id: 'C', text: 'To stimulate gastric acid secretion and accelerate mucosal healing' },
      { id: 'D', text: 'To prevent acute severe hypercalcemia' }
    ],
    correctOption: 'B',
    correctAnswerText: 'To allow recovery of the suppressed hypothalamic-pituitary-adrenal (HPA) axis and prevent acute secondary adrenal crisis',
    explanation: 'Exogenous corticosteroid therapy at supraphysiological doses (> 5 mg/day prednisolone equivalent) for more than 3 to 4 weeks causes prolonged negative feedback inhibition of hypothalamic CRH and pituitary ACTH secretion. This leads to bilateral adrenal cortical atrophy. Abrupt cessation of the drug unmasks severe secondary adrenal insufficiency (acute adrenal crisis) and causes severe disease rebound. Gradual dose tapering allows the pituitary-adrenal axis and adrenal cortex sufficient time (weeks to months) to recover endogenous steroidogenesis.',
    optionRationales: {
      A: 'Steroids cause hyperglycemia; stopping them does not cause isolated rebound hypoglycemia as the primary hazard.',
      B: 'Correct. Gradual tapering is essential to allow HPA axis recovery and prevent life-threatening secondary adrenal crisis.',
      C: 'Steroids do not heal ulcers; they increase peptic ulcer risk.',
      D: 'Hypercalcemia is not the driving reason for steroid tapering.'
    },
    keyTakeaway: 'Corticosteroids used for >3 weeks suppress the HPA axis; gradual dose tapering is mandatory to avoid secondary adrenal crisis.',
    sourcePageRef: 'Page 71, Q2',
    difficulty: 'High Yield',
    tags: ['HPA Axis Suppression', 'Steroid Tapering', 'Secondary Adrenal Insufficiency', 'Pharmacology']
  },
  {
    id: 'steroid_q3',
    topicId: 'steroid_prescribing',
    topicTitle: 'Indications for Steroid Use & Steroid Equivalent Doses',
    questionNumber: 3,
    clinicalVignette: 'A 55-year-old woman with polymyalgia rheumatica requires long-term corticosteroid therapy with Prednisolone 15 mg daily for at least 12 months. Which of the following prophylactic regimens should be routinely initiated from the onset of therapy to mitigate glucocorticoid-induced osteoporosis (GIOP)?',
    options: [
      { id: 'A', text: 'Calcium (1,000–1,200 mg/day) and Vitamin D (800–2,000 IU/day) supplementation plus an oral bisphosphonate (e.g., Alendronate or Risedronate) based on fracture risk assessment' },
      { id: 'B', text: 'High-dose loop diuretics and phosphate binders' },
      { id: 'C', text: 'Immediate cessation of all dietary calcium intake to avoid hypercalciuria' },
      { id: 'D', text: 'Daily intramuscular parathyroid hormone injections without calcium' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Calcium (1,000–1,200 mg/day) and Vitamin D (800–2,000 IU/day) supplementation plus an oral bisphosphonate (e.g., Alendronate or Risedronate) based on fracture risk assessment',
    explanation: 'Glucocorticoids cause rapid bone loss within the first 3 to 6 months of therapy by inhibiting osteoblastogenesis, promoting osteoclast survival, reducing intestinal calcium absorption, and increasing renal calcium wasting. Guidelines (ACR/IOF) recommend baseline fracture risk assessment (FRAX, DEXA), lifestyle counseling, daily Calcium (1,000–1,200 mg/day) and Vitamin D (800–2,000 IU/day), plus oral bisphosphonates (Alendronate 70 mg weekly or Risedronate 35 mg weekly) in individuals at moderate-to-high fracture risk receiving >= 2.5–5 mg/day prednisolone for >= 3 months.',
    optionRationales: {
      A: 'Correct. Calcium, Vitamin D, and Bisphosphonates form the cornerstone of GIOP prevention.',
      B: 'Loop diuretics increase renal calcium loss and worsen osteoporosis.',
      C: 'Dietary calcium restriction worsens negative calcium balance and bone loss.',
      D: 'Teriparatide (PTH analog) is second-line for very high risk, but always requires calcium/vitamin D repletion.'
    },
    keyTakeaway: 'Long-term corticosteroid therapy requires proactive prevention of Glucocorticoid-Induced Osteoporosis (GIOP) with Calcium, Vitamin D, and Bisphosphonates.',
    sourcePageRef: 'Pages 71–72, Q3',
    difficulty: 'Core Clinical',
    tags: ['GIOP', 'Osteoporosis Prophylaxis', 'Bisphosphonates', 'Prednisolone', 'Bone Health']
  },
  {
    id: 'steroid_q4',
    topicId: 'steroid_prescribing',
    topicTitle: 'Indications for Steroid Use & Steroid Equivalent Doses',
    questionNumber: 4,
    clinicalVignette: 'A patient with confirmed primary adrenal insufficiency requires lifelong maintenance hormone replacement therapy. Which combination of corticosteroids best replicates normal physiological adrenal cortical endocrine output?',
    options: [
      { id: 'A', text: 'Oral Hydrocortisone (15–25 mg daily in divided doses, 2/3 on waking, 1/3 in early afternoon) plus oral Fludrocortisone (0.05–0.2 mg once daily in the morning)' },
      { id: 'B', text: 'Oral Dexamethasone 4 mg once daily alone' },
      { id: 'C', text: 'Intravenous Methylprednisolone 500 mg weekly' },
      { id: 'D', text: 'Oral Prednisolone 30 mg every other day without mineralocorticoid replacement' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Oral Hydrocortisone (15–25 mg daily in divided doses, 2/3 on waking, 1/3 in early afternoon) plus oral Fludrocortisone (0.05–0.2 mg once daily in the morning)',
    explanation: 'Primary adrenal insufficiency involves destruction of all three adrenal cortical zones, resulting in deficiency of both glucocorticoids (cortisol) and mineralocorticoids (aldosterone). Physiological maintenance replacement requires oral Hydrocortisone (15–25 mg/day split in a circadian pattern: highest dose upon waking, smaller dose in early afternoon to mimic normal circadian rhythm) PLUS oral Fludrocortisone (0.05–0.2 mg/day) to regulate sodium retention, potassium excretion, and intravascular volume.',
    optionRationales: {
      A: 'Correct. Circadian Hydrocortisone (glucocorticoid) plus Fludrocortisone (mineralocorticoid) perfectly replaces physiological adrenal cortical secretion.',
      B: 'Dexamethasone has zero mineralocorticoid activity, long half-life, and causes HPA suppression and cushingoid features.',
      C: 'High-dose weekly pulses are for severe inflammatory autoimmune pulses, not physiological replacement.',
      D: 'Prednisolone alone lacks sufficient mineralocorticoid potency for primary adrenal failure without fludrocortisone.'
    },
    keyTakeaway: 'Primary adrenal insufficiency replacement requires circadian Hydrocortisone (glucocorticoid) plus Fludrocortisone (mineralocorticoid).',
    sourcePageRef: 'Page 72, Q4',
    difficulty: 'High Yield',
    tags: ['Adrenal Insufficiency', 'Hydrocortisone', 'Fludrocortisone', 'Circadian Dosing']
  },
  {
    id: 'steroid_q5',
    topicId: 'steroid_prescribing',
    topicTitle: 'Indications for Steroid Use & Steroid Equivalent Doses',
    questionNumber: 5,
    clinicalVignette: 'A 45-year-old man with severe asthma has been taking Prednisolone 20 mg daily for 6 months. How does the anti-inflammatory potency and mineralocorticoid activity of Prednisolone compare to Hydrocortisone (cortisol)?',
    options: [
      { id: 'A', text: 'Prednisolone is half as potent as hydrocortisone with zero anti-inflammatory activity' },
      { id: 'B', text: 'Prednisolone has approximately 4 to 5 times the anti-inflammatory potency of hydrocortisone and significantly less mineralocorticoid (salt-retaining) activity' },
      { id: 'C', text: 'Prednisolone is 30 times more potent than dexamethasone' },
      { id: 'D', text: 'Prednisolone has pure mineralocorticoid effects with no glucocorticoid action' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Prednisolone has approximately 4 to 5 times the anti-inflammatory potency of hydrocortisone and significantly less mineralocorticoid (salt-retaining) activity',
    explanation: 'Standard systemic corticosteroid equivalencies: Hydrocortisone (cortisol) = 20 mg (anti-inflammatory potency 1.0, mineralocorticoid potency 1.0); Prednisone / Prednisolone = 5 mg (anti-inflammatory potency 4.0–5.0, mineralocorticoid potency 0.8); Methylprednisolone = 4 mg (potency 5.0, mineralocorticoid 0.5); Dexamethasone = 0.75 mg (potency 25–30, mineralocorticoid 0). Therefore, 5 mg of prednisolone equals 20 mg of hydrocortisone (4x more potent anti-inflammatory) with slightly less mineralocorticoid salt-retaining effect.',
    optionRationales: {
      A: 'Prednisolone is 4–5 times MORE potent than hydrocortisone.',
      B: 'Correct. Prednisolone is 4–5x more potent than hydrocortisone with reduced mineralocorticoid activity.',
      C: 'Dexamethasone is ~6 times more potent than prednisolone (0.75 mg dex = 5 mg pred).',
      D: 'Prednisolone is predominantly a glucocorticoid (anti-inflammatory), not a pure mineralocorticoid.'
    },
    keyTakeaway: 'Prednisolone (5 mg) is 4–5 times more potent than Hydrocortisone (20 mg) as an anti-inflammatory and has lower mineralocorticoid salt-retaining effect.',
    sourcePageRef: 'Page 72, Q5',
    difficulty: 'High Yield',
    tags: ['Steroid Equivalencies', 'Prednisolone', 'Hydrocortisone', 'Anti-inflammatory Potency']
  }
];
