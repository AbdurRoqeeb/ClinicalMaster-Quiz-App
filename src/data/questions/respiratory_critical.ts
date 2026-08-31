import { Question } from '../../types';

export const RESPIRATORY_CRITICAL_QUESTIONS: Question[] = [
  // ----------------------------------------------------
  // MANAGEMENT OF ACUTE SEVERE ASTHMATIC ATTACK (Pages 1-3)
  // ----------------------------------------------------
  {
    id: 'asthma_q1',
    topicId: 'acute_severe_asthma',
    topicTitle: 'Management of Acute Severe Asthmatic Attack',
    questionNumber: 1,
    clinicalVignette: 'A 24-year-old man with a history of persistent asthma presents to LAUTECH Teaching Hospital during the Harmattan season with severe shortness of breath. He is sitting upright, leaning forward, and can only speak in broken words. Vital signs: BP 130/85 mmHg, HR 124 bpm, RR 32 breaths/min, SpO2 88% on room air. Auscultation reveals diffuse bilateral expiratory wheezes with markedly decreased breath sounds at the bases. High-flow oxygen and nebulized salbutamol are initiated immediately. Which of the following findings on physical examination or investigation best indicates that this patient has progressed from acute severe asthma to life-threatening asthma?',
    options: [
      { id: 'A', text: 'Pulse rate of 124 beats/min' },
      { id: 'B', text: 'Peak expiratory flow rate (PEFR) of 40% predicted' },
      { id: 'C', text: 'A "silent chest" on auscultation' },
      { id: 'D', text: 'Respiratory rate of 32 breaths/min' }
    ],
    correctOption: 'C',
    correctAnswerText: 'A "silent chest" on auscultation.',
    explanation: 'A "silent chest" occurs when airflow is so critically compromised by airway constriction and respiratory muscle exhaustion that insufficient air movement exists to generate wheezing sounds. This is an ominous hallmark of life-threatening asthma requiring immediate aggressive intervention.',
    optionRationales: {
      A: 'Tachycardia (HR > 110 bpm) is a standard criterion for acute severe asthma, not specifically life-threatening asthma.',
      B: 'PEFR 33–50% predicted defines acute severe asthma. A PEFR < 33% predicted is the threshold for life-threatening asthma.',
      C: 'Correct. A "silent chest", along with cyanosis, bradycardia, confusion, exhaustion, or normal/elevated PaCO2, defines life-threatening asthma.',
      D: 'Tachypnea with RR >= 25 breaths/min is a feature of acute severe asthma.'
    },
    keyTakeaway: 'The absence of wheezing in an exhausted, tachypneic asthmatic ("silent chest") indicates critical airflow obstruction and imminent respiratory arrest.',
    sourcePageRef: 'Page 1, Q1',
    difficulty: 'High Yield',
    tags: ['Asthma', 'Emergency', 'Life-Threatening Signs', 'Silent Chest']
  },
  {
    id: 'asthma_q2',
    topicId: 'acute_severe_asthma',
    topicTitle: 'Management of Acute Severe Asthmatic Attack',
    questionNumber: 2,
    clinicalVignette: 'A 19-year-old female student was brought to the accident and emergency unit with a severe asthma exacerbation. She received three consecutive nebulized salbutamol (5 mg) and ipratropium bromide (0.5 mg) treatments over the past hour along with 200 mg IV hydrocortisone. An arterial blood gas (ABG) drawn on room air shows: PaCO2: 40 mmHg, PaO2: 62 mmHg. Which of the following is the most accurate interpretation of this arterial blood gas result in this clinical context?',
    options: [
      { id: 'A', text: 'Normal acid-base status indicating clinical improvement' },
      { id: 'B', text: 'Expected compensation for acute metabolic acidosis' },
      { id: 'C', text: 'Impending respiratory muscle fatigue and respiratory failure' },
      { id: 'D', text: 'Acute primary metabolic alkalosis secondary to steroid administration' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Impending respiratory muscle fatigue and respiratory failure.',
    explanation: 'In severe acute asthma with tachypnea, hyperventilation normally blows off CO2, resulting in a low PaCO2 (<35 mmHg) and respiratory alkalosis. A "normal" PaCO2 (40 mmHg) in a struggling asthmatic indicates respiratory muscle exhaustion and inability to maintain hyperventilation, heralding acute hypercapnic respiratory arrest.',
    optionRationales: {
      A: 'A "normal" PaCO2 is pseudonormalization in an acute asthma attack and is a red flag for failure, not improvement.',
      B: 'There is no metabolic acidosis provided in the scenario, and 40 mmHg is not a compensatory value here.',
      C: 'Correct. Normal or rising PaCO2 in severe asthma indicates respiratory pump failure and impending arrest.',
      D: 'Steroids do not cause immediate acute acid-base alterations of this pattern.'
    },
    keyTakeaway: 'A "normal" PaCO2 in a severely breathless, tachypneic asthmatic is an ominous sign of diaphragmatic fatigue and imminent respiratory failure.',
    sourcePageRef: 'Pages 1–2, Q2',
    difficulty: 'High Yield',
    tags: ['ABG', 'Asthma', 'Pseudonormalization', 'Critical Care']
  },
  {
    id: 'asthma_q3',
    topicId: 'acute_severe_asthma',
    topicTitle: 'Management of Acute Severe Asthmatic Attack',
    questionNumber: 3,
    clinicalVignette: 'A 30-year-old businessman presents to the emergency room with an acute severe asthma attack. He is managed with nebulized bronchodilators, high-flow oxygen, and IV hydrocortisone. After 45 minutes of continuous therapy, he remains in significant distress with a PEFR of 40% predicted. The house officer prepares to administer a second-line intravenous adjunct. Which of the following best describes the physiological mechanism of action of the most appropriate second-line drug for this patient?',
    options: [
      { id: 'A', text: 'Competitive inhibition of muscarinic acetylcholine receptors in bronchial smooth muscle' },
      { id: 'B', text: 'Inhibition of intracellular calcium influx into airway vascular and bronchial smooth muscle cells' },
      { id: 'C', text: 'Direct stimulation of adenylate cyclase leading to increased intracellular cyclic AMP' },
      { id: 'D', text: 'Suppression of nuclear factor kappa B (NF-kappaB) translocation and cytokine transcription' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Inhibition of intracellular calcium influx into airway vascular and bronchial smooth muscle cells.',
    explanation: 'The recommended second-line intravenous adjunct for severe acute asthma refractory to initial bronchodilators and steroids is IV Magnesium Sulfate (1.2–2.0 g infused over 20 minutes). Magnesium acts as a physiological calcium channel blocker, inhibiting calcium influx into airway smooth muscle cells, thereby inducing potent bronchodilation and inhibiting acetylcholine release at motor nerve terminals.',
    optionRationales: {
      A: 'This describes the mechanism of anticholinergics like Ipratropium bromide, which is first-line inhaled therapy.',
      B: 'Correct. IV Magnesium sulfate inhibits voltage-gated calcium channels, promoting smooth muscle relaxation.',
      C: 'This describes beta-2 agonists like Salbutamol/Albuterol via Gs protein coupling.',
      D: 'This describes the anti-inflammatory genomic mechanism of corticosteroids (Hydrocortisone/Prednisolone).'
    },
    keyTakeaway: 'Intravenous Magnesium Sulfate exerts bronchodilation by blocking intracellular calcium entry into bronchial smooth muscle.',
    sourcePageRef: 'Page 2, Q3',
    difficulty: 'Core Clinical',
    tags: ['Asthma', 'Pharmacology', 'Magnesium Sulfate', 'Mechanism of Action']
  },
  {
    id: 'asthma_q4',
    topicId: 'acute_severe_asthma',
    topicTitle: 'Management of Acute Severe Asthmatic Attack',
    questionNumber: 4,
    clinicalVignette: 'A 28-year-old pregnant woman (26 weeks gestation) presents to the emergency department with severe wheezing, tachypnea (RR 30/min), and an SpO2 of 89% on room air. The medical officer initiates oxygen therapy via a face mask with a reservoir bag. According to emergency clinical protocols for acute asthma in pregnancy, what is the target oxygen saturation (SpO2) range that should be maintained?',
    options: [
      { id: 'A', text: '88% – 92%' },
      { id: 'B', text: '90% – 92%' },
      { id: 'C', text: '94% – 98%' },
      { id: 'D', text: '100% at all times' }
    ],
    correctOption: 'C',
    correctAnswerText: '94% – 98%.',
    explanation: 'In pregnancy, maternal hypoxemia rapidly translates to fetal hypoxemia, reduced uterine blood flow, and fetal distress. Guidelines (BTS/SIGN, GINA) explicitly recommend maintaining maternal SpO2 between 94% and 98% (or PaO2 > 70 mmHg) to ensure adequate placental oxygen delivery.',
    optionRationales: {
      A: '88%–92% is the target range for patients at risk of hypercapnic respiratory failure (such as COPD), but dangerously low in pregnancy.',
      B: '90%–92% is inadequate for the fetus during an acute exacerbation.',
      C: 'Correct. 94%–98% ensures optimal maternal oxygenation and prevents fetal hypoxic compromise.',
      D: 'Targeting 100% continuously is unnecessary and risks oxygen toxicity or hyperoxia-induced vasoconstriction.'
    },
    keyTakeaway: 'Target SpO2 in acute asthma during pregnancy is strictly 94%–98% to prevent fetal hypoxia and placental hypoperfusion.',
    sourcePageRef: 'Pages 2–3, Q4',
    difficulty: 'High Yield',
    tags: ['Asthma in Pregnancy', 'Oxygen Therapy', 'Target SpO2']
  },
  {
    id: 'asthma_q5',
    topicId: 'acute_severe_asthma',
    topicTitle: 'Management of Acute Severe Asthmatic Attack',
    questionNumber: 5,
    clinicalVignette: 'A 16-year-old secondary school student with a history of severe brittle asthma is brought to the casualty unit in Enugu. On arrival, he is lethargic, cyanotic, and unable to maintain his posture. Vital signs: HR 52 bpm (bradycardia), RR 8 breaths/min (shallow), SpO2 78% on room air. Auscultation reveals absent breath sounds bilaterally. Which of the following is the most immediate step in the management of this patient?',
    options: [
      { id: 'A', text: 'Continuous nebulization of salbutamol 10 mg with ipratropium' },
      { id: 'B', text: 'Administration of IV Magnesium Sulfate 2.0 g over 20 minutes' },
      { id: 'C', text: 'Immediate endotracheal intubation and mechanical ventilation' },
      { id: 'D', text: 'Stat administration of IV Hydrocortisone 200 mg and chest X-ray' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Immediate endotracheal intubation and mechanical ventilation.',
    explanation: 'This patient has developed near-fatal asthma, manifested by bradypnea (RR 8/min), bradycardia (HR 52 bpm), cyanosis, altered consciousness (lethargy), and silent lungs. In this state of imminent respiratory arrest, medical therapy alone will not deliver drugs to the alveoli. Immediate airway securing via endotracheal intubation and invasive mechanical ventilation is life-saving.',
    optionRationales: {
      A: 'Inhaled nebulization requires active tidal ventilation; with RR 8 and absent breath sounds, aerosol delivery is impossible.',
      B: 'IV Magnesium is an adjunct for acute severe asthma, but cannot substitute for airway management in respiratory arrest.',
      C: 'Correct. Impending respiratory arrest with bradycardia, bradypnea, and coma necessitates immediate intubation.',
      D: 'IV steroids take hours to act and a chest X-ray will delay critical resuscitation.'
    },
    keyTakeaway: 'Bradycardia, bradypnea, and coma in acute asthma are signs of near-fatal asthma requiring emergency endotracheal intubation.',
    sourcePageRef: 'Page 3, Q5',
    difficulty: 'High Yield',
    tags: ['Near-Fatal Asthma', 'Intubation', 'Airway Management', 'Resuscitation']
  },

  // ----------------------------------------------------
  // SYNOPSIS OF SEPSIS MANAGEMENT (Pages 33-35)
  // ----------------------------------------------------
  {
    id: 'sepsis_q1',
    topicId: 'sepsis_management',
    topicTitle: 'Synopsis of Sepsis Management',
    questionNumber: 1,
    clinicalVignette: 'A 62 year old man presents to A&E with fever, productive cough, confusion and shortness of breath. His blood pressure is 80/45 mmHg, temp 39.1°C, RR 30/min and SpO2 is 89% in room air, serum lactate is 4.2mmol/L. Chest examination reveals bronchial breath sounds over the right lower zone. What is the most appropriate initial management priority?',
    options: [
      { id: 'A', text: 'Obtain a CT pulmonary angiogram' },
      { id: 'B', text: 'Administer IV antibiotics and begin sepsis resuscitation' },
      { id: 'C', text: 'Give oral antibiotics and review after 24 hours' },
      { id: 'D', text: 'Perform bronchoscopy immediately.' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Administer IV antibiotics and begin sepsis resuscitation',
    explanation: 'The patient presents in septic shock secondary to severe community-acquired pneumonia (hypotension, elevated lactate > 2 mmol/L, altered mental status). According to the Surviving Sepsis Campaign Hour-1 Bundle, immediate priorities include administering broad-spectrum intravenous antimicrobials and starting rapid intravenous crystalloid resuscitation (30 mL/kg).',
    optionRationales: {
      A: 'CTPA would delay resuscitation in a hemodynamically unstable septic patient.',
      B: 'Correct. Immediate IV broad-spectrum antibiotics and fluid resuscitation are the cornerstone of the sepsis bundle.',
      C: 'Oral therapy is completely inappropriate for septic shock and severe pneumonia.',
      D: 'Bronchoscopy is invasive and contraindicated in an unstable patient before initial stabilization.'
    },
    keyTakeaway: 'In septic shock, the initial priority within the first hour is rapid IV fluid resuscitation and prompt administration of broad-spectrum IV antibiotics.',
    sourcePageRef: 'Page 33, Q1',
    difficulty: 'Core Clinical',
    tags: ['Sepsis', 'Septic Shock', 'Resuscitation', 'Hour-1 Bundle']
  },
  {
    id: 'sepsis_q2',
    topicId: 'sepsis_management',
    topicTitle: 'Synopsis of Sepsis Management',
    questionNumber: 2,
    clinicalVignette: 'A 58-year-old woman is admitted with septic shock secondary to pyelonephritis. She receives appropriate IV fluids and antibiotics and is commenced on noradrenaline. Despite adequate fluid resuscitation, she continues to require a high dose of noradrenaline to maintain a MAP of 65 mmHg. Which of the following is the most appropriate additional therapy?',
    options: [
      { id: 'A', text: 'IV hydrocortisone' },
      { id: 'B', text: 'Oral prednisolone' },
      { id: 'C', text: 'Dobutamine' },
      { id: 'D', text: 'IV methylprednisolone' }
    ],
    correctOption: 'A',
    correctAnswerText: 'IV hydrocortisone',
    explanation: 'In septic shock refractory to fluid resuscitation and escalating vasopressor therapy (noradrenaline), guidelines recommend intravenous hydrocortisone at a dose of 200 mg/day (e.g., 50 mg IV every 6 hours or continuous infusion). Corticosteroids treat relative adrenal insufficiency and restore vascular responsiveness to catecholamines.',
    optionRationales: {
      A: 'Correct. IV Hydrocortisone (200 mg/day) is indicated for refractory septic shock requiring ongoing high-dose vasopressors.',
      B: 'Oral absorption is erratic in shock, and prednisolone lacks the physiological mineralocorticoid activity of hydrocortisone.',
      C: 'Dobutamine is indicated when myocardial dysfunction or persistent hypoperfusion exists despite adequate MAP, not solely for refractory hypotension.',
      D: 'High-dose methylprednisolone is not recommended in sepsis due to immunosuppression and superinfection risks.'
    },
    keyTakeaway: 'Low-dose IV hydrocortisone (200 mg/day) is indicated in septic shock that is refractory to fluid resuscitation and high-dose vasopressors.',
    sourcePageRef: 'Pages 33–34, Q2',
    difficulty: 'High Yield',
    tags: ['Septic Shock', 'Hydrocortisone', 'Vasopressors', 'Critical Care']
  },
  {
    id: 'sepsis_q3',
    topicId: 'sepsis_management',
    topicTitle: 'Synopsis of Sepsis Management',
    questionNumber: 3,
    clinicalVignette: 'A 62-year-old woman presents with fever, abdominal pain and vomiting. She is hypotensive and confused. CT imaging demonstrates perforation of a hollow abdominal viscus with widespread intra-abdominal contamination. Blood cultures are obtained and broad-spectrum antibiotics are administered. Which intervention is most important for definitive control of the sepsis?',
    options: [
      { id: 'A', text: 'Repeated measurement of serum lactate' },
      { id: 'B', text: 'Administration of IV hydrocortisone' },
      { id: 'C', text: 'Urgent surgical source control' },
      { id: 'D', text: 'Increasing the dose of antibiotics' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Urgent surgical source control',
    explanation: 'In intra-abdominal sepsis caused by hollow viscus perforation, medical management (antibiotics, fluids, vasopressors) cannot sterilize or seal an ongoing leak. Emergent surgical source control (laparotomy, peritoneal lavage, and repair/resection) is essential for definitive cure and survival.',
    optionRationales: {
      A: 'Lactate measurement monitors resuscitation progress but does not treat the underlying cause.',
      B: 'Hydrocortisone is an adjunct for refractory vasopressor shock, not definitive source control.',
      C: 'Correct. Urgent surgical source control is mandatory to remove contaminated debris and close the perforation.',
      D: 'Increasing antibiotic doses will fail if ongoing gross contamination persists.'
    },
    keyTakeaway: 'Source control is a non-negotiable pillar of sepsis management; ongoing contamination requires urgent procedural/surgical intervention.',
    sourcePageRef: 'Page 34, Q3',
    difficulty: 'Core Clinical',
    tags: ['Sepsis', 'Source Control', 'Surgery', 'Peritonitis']
  },
  {
    id: 'sepsis_q4',
    topicId: 'sepsis_management',
    topicTitle: 'Synopsis of Sepsis Management',
    questionNumber: 4,
    clinicalVignette: 'A 70-year-old man with septic shock develops oliguria despite adequate fluid resuscitation. His creatinine rises from 90 µmol/L to 420 µmol/L over 48 hours. Renal ultrasound shows no obstruction. He develops potassium of 7.1 mmol/L despite IV calcium, insulin with glucose, and nebulized salbutamol. Which of the following is the most appropriate next step?',
    options: [
      { id: 'A', text: 'Give another crystalloid bolus' },
      { id: 'B', text: 'Start high-dose furosemide' },
      { id: 'C', text: 'Initiate urgent renal replacement therapy' },
      { id: 'D', text: 'Administer sodium bicarbonate alone' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Initiate urgent renal replacement therapy',
    explanation: 'The patient has severe oliguric acute kidney injury (AKI) in the setting of septic shock with life-threatening hyperkalemia (K+ 7.1 mmol/L) refractory to medical shifting therapies (calcium, insulin/dextrose, salbutamol). This is a definitive indication for emergency renal replacement therapy (RRT / dialysis).',
    optionRationales: {
      A: 'Further fluids risk pulmonary edema in an oliguric, non-responsive kidney.',
      B: 'Furosemide will not clear potassium rapidly in established acute tubular necrosis with oliguria.',
      C: 'Correct. Refractory hyperkalemia in severe AKI requires emergent renal replacement therapy.',
      D: 'Sodium bicarbonate alone is insufficient and ineffective for acute cardiac stabilization or clearance.'
    },
    keyTakeaway: 'Refractory severe hyperkalemia (>6.5-7.0 mmol/L) unresponsive to medical shifting in acute renal failure requires immediate renal replacement therapy.',
    sourcePageRef: 'Pages 34–35, Q4',
    difficulty: 'High Yield',
    tags: ['Septic Shock', 'AKI', 'Hyperkalemia', 'Dialysis', 'RRT']
  },
  {
    id: 'sepsis_q5',
    topicId: 'sepsis_management',
    topicTitle: 'Synopsis of Sepsis Management',
    questionNumber: 5,
    clinicalVignette: 'A 70-year-old woman develops fever, tachycardia, abdominal distension, and confusion 4 days after bowel surgery. Her temperature is 39.1°C, pulse 124/min, and BP 88/52 mmHg. She has increasing abdominal tenderness and absent bowel sounds. She receives IV fluids and broad-spectrum antibiotics. Her blood pressure initially improves but subsequently falls again, and her lactate continues to rise. Which of the following is the most likely reason for her persistent shock?',
    options: [
      { id: 'A', text: 'Inadequate oxygen supplementation' },
      { id: 'B', text: 'Uncontrolled infectious source requiring source control' },
      { id: 'C', text: 'Excessive antibiotic dosing' },
      { id: 'D', text: 'Relative bradycardia caused by sepsis' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Uncontrolled infectious source requiring source control',
    explanation: 'A patient developing peritonitis, fever, and shock 4 days after bowel surgery who fails to sustain improvement on antibiotics and fluids most likely has an anastomotic leak or intra-abdominal collection. Persistent sepsis despite medical therapy indicates an uncontrolled focus requiring re-exploration, drainage, or diversion.',
    optionRationales: {
      A: 'Oxygen alone will not reverse distributive shock caused by intra-abdominal peritonitis.',
      B: 'Correct. An anastomotic leak or intra-abdominal abscess represents an uncontrolled septic focus needing urgent re-intervention.',
      C: 'Antibiotic overdosing does not produce refractory septic shock.',
      D: 'The patient has tachycardia (HR 124), not relative bradycardia.'
    },
    keyTakeaway: 'Secondary deterioration following gastrointestinal surgery is pathognomonic of an anastomotic leak and demands urgent source control investigation.',
    sourcePageRef: 'Page 35, Q5',
    difficulty: 'Core Clinical',
    tags: ['Postoperative Sepsis', 'Anastomotic Leak', 'Source Control']
  },

  // ----------------------------------------------------
  // MANAGEMENT OF RESPIRATORY FAILURE (Pages 35-37)
  // ----------------------------------------------------
  {
    id: 'resp_fail_q1',
    topicId: 'respiratory_failure',
    topicTitle: 'Management of Respiratory Failure',
    questionNumber: 1,
    clinicalVignette: 'A 72-year-old man with known COPD is treated in the emergency department for an infective exacerbation. Despite nebulised bronchodilators, corticosteroids, and controlled oxygen therapy, a repeat ABG after 1 hour shows persistent respiratory acidosis: pH 7.28, PaCO2 8.2 kPa. What is the most appropriate next step?',
    options: [
      { id: 'A', text: 'Increase inspired oxygen concentration to 60%' },
      { id: 'B', text: 'Start non-invasive ventilation (NIV/BiPAP)' },
      { id: 'C', text: 'Proceed immediately to intubation and invasive ventilation' },
      { id: 'D', text: 'Repeat nebulisers and reassess in 4 hours' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Start non-invasive ventilation (NIV/BiPAP)',
    explanation: 'In acute exacerbations of COPD, persistent respiratory acidosis (pH < 7.35, PaCO2 > 6.0 kPa or 45 mmHg) after 1 hour of optimal medical management is the classic primary indication for Non-Invasive Ventilation (NIV / BiPAP). NIV reduces the work of breathing, improves gas exchange, and decreases intubation and mortality rates.',
    optionRationales: {
      A: 'Increasing FiO2 to 60% will worsen hypercapnia by blunting hypoxic drive, increasing dead space ventilation, and the Haldane effect.',
      B: 'Correct. NIV is first-line for acute hypercapnic respiratory failure in COPD exacerbations unresponsive to initial medical therapy.',
      C: 'Invasive intubation is reserved for NIV failure, severe encephalopathy, or cardiorespiratory arrest.',
      D: 'Reassessing in 4 hours with pH 7.28 without ventilatory support risks rapid deterioration and respiratory arrest.'
    },
    keyTakeaway: 'Persistent respiratory acidosis (pH 7.25–7.35) in acute COPD exacerbations despite standard medical therapy is the gold-standard indication for non-invasive ventilation (BiPAP).',
    sourcePageRef: 'Page 35, Q1',
    difficulty: 'High Yield',
    tags: ['COPD', 'Respiratory Failure', 'NIV', 'BiPAP', 'Acidosis']
  },
  {
    id: 'resp_fail_q2',
    topicId: 'respiratory_failure',
    topicTitle: 'Management of Respiratory Failure',
    questionNumber: 2,
    clinicalVignette: 'A 70-year-old man with known severe COPD and chronic CO2 retention is brought to the emergency department breathless. Paramedics have already administered high-flow 15L oxygen via non-rebreathe mask. He is now drowsy. What is the most appropriate immediate action?',
    options: [
      { id: 'A', text: 'Continue current oxygen therapy and reassess in 30 minutes' },
      { id: 'B', text: 'Titrate down oxygen to achieve target saturation of 88-92% and check an urgent ABG' },
      { id: 'C', text: 'Stop all oxygen therapy immediately' },
      { id: 'D', text: 'Give intravenous furosemide' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Titrate down oxygen to achieve target saturation of 88-92% and check an urgent ABG',
    explanation: 'Administering uncontrolled high-flow oxygen to chronic CO2 retainers can cause severe oxygen-induced hypercapnia and CO2 narcosis via loss of hypoxic vasoconstriction (worsening V/Q mismatch), the Haldane effect, and decreased central respiratory drive. The correct management is to titrate oxygen down using a Venturi mask or nasal cannula to a target SpO2 of 88%–92% and immediately check an ABG to guide NIV therapy.',
    optionRationales: {
      A: 'Continuing high-flow oxygen will worsen CO2 narcosis, coma, and respiratory arrest.',
      B: 'Correct. Controlled oxygen titration (target 88–92%) and urgent ABG assessment are mandatory.',
      C: 'Completely stopping oxygen causes severe rebound hypoxemia.',
      D: 'Furosemide is indicated for acute pulmonary edema, not for oxygen-induced hypercapnia in COPD.'
    },
    keyTakeaway: 'In chronic hypercapnic COPD patients, excessive oxygen causes CO2 retention; titrate oxygen to target 88–92% and check an urgent ABG.',
    sourcePageRef: 'Page 36, Q2',
    difficulty: 'High Yield',
    tags: ['COPD', 'Oxygen Toxicity', 'CO2 Retention', 'Target SpO2']
  },
  {
    id: 'resp_fail_q3',
    topicId: 'respiratory_failure',
    topicTitle: 'Management of Respiratory Failure',
    questionNumber: 3,
    clinicalVignette: 'A 68-year-old man with known severe COPD is admitted with worsening breathlessness. Arterial blood gas on air shows: pH 7.30, PaO2 6.8 kPa, PaCO2 8.9 kPa, HCO3- 32 mmol/L. Which of the following best describes this picture?',
    options: [
      { id: 'A', text: 'Acute Type 1 respiratory failure' },
      { id: 'B', text: 'Chronic Type 2 respiratory failure' },
      { id: 'C', text: 'Acute-on-chronic Type 2 respiratory failure' },
      { id: 'D', text: 'Compensated respiratory alkalosis' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Acute-on-chronic Type 2 respiratory failure',
    explanation: 'The ABG demonstrates: PaO2 6.8 kPa (<8 kPa = hypoxemia) and PaCO2 8.9 kPa (>6 kPa = hypercapnia), defining Type 2 respiratory failure. The elevated HCO3- (32 mmol/L) proves pre-existing chronic renal retention of bicarbonate (chronic compensation). However, the acidemic pH (7.30 < 7.35) demonstrates acute decompensation. Thus, this is an Acute-on-chronic Type 2 respiratory failure.',
    optionRationales: {
      A: 'Type 1 respiratory failure has hypoxia with normal or low PaCO2.',
      B: 'Chronic compensated Type 2 failure maintains a normal pH (7.35–7.45) due to complete metabolic compensation.',
      C: 'Correct. Acidemia (pH 7.30) + hypercapnia + elevated bicarbonate (32 mmol/L) = Acute-on-chronic Type 2 failure.',
      D: 'The pH is acidemic (7.30), not alkalemic.'
    },
    keyTakeaway: 'Acidemia (pH <7.35) accompanied by hypercapnia and elevated baseline HCO3 indicates acute-on-chronic Type 2 respiratory failure.',
    sourcePageRef: 'Page 36, Q3',
    difficulty: 'Core Clinical',
    tags: ['ABG', 'COPD', 'Type 2 Respiratory Failure', 'Acid-Base']
  },
  {
    id: 'resp_fail_q4',
    topicId: 'respiratory_failure',
    topicTitle: 'Management of Respiratory Failure',
    questionNumber: 4,
    clinicalVignette: 'A 55-year-old man with severe respiratory failure is being considered for NIV. He is tachypnoeic and hypoxaemic. He is conscious but intermittently confused. He has copious secretions that he cannot adequately clear. Which feature is the strongest reason not to initiate NIV?',
    options: [
      { id: 'A', text: 'Hypoxaemia' },
      { id: 'B', text: 'Tachypnoea' },
      { id: 'C', text: 'Copious secretions with inability to clear them' },
      { id: 'D', text: 'Underlying pulmonary disease' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Copious secretions with inability to clear them',
    explanation: 'Contraindications to Non-Invasive Ventilation (NIV) include: inability to protect the airway, copious secretions that cannot be cleared (risk of fatal aspiration and airway plugging), severe hemodynamic instability, facial trauma/burns, and recent upper GI surgery.',
    optionRationales: {
      A: 'Hypoxemia is an indication for respiratory support, not a contraindication.',
      B: 'Tachypnea is a typical presenting sign of respiratory failure that NIV treats.',
      C: 'Correct. Copious unmanageable secretions and inability to protect the airway are major contraindications to NIV, mandating invasive endotracheal intubation.',
      D: 'Underlying chronic lung disease is a primary indication for NIV.'
    },
    keyTakeaway: 'Inability to clear copious secretions or protect the airway is a strict contraindication to non-invasive ventilation (NIV).',
    sourcePageRef: 'Pages 36–37, Q4',
    difficulty: 'Core Clinical',
    tags: ['NIV', 'Contraindications', 'Airway Management', 'Critical Care']
  },
  {
    id: 'resp_fail_q5',
    topicId: 'respiratory_failure',
    topicTitle: 'Management of Respiratory Failure',
    questionNumber: 5,
    clinicalVignette: 'A patient who has successfully completed a spontaneous breathing trial is extubated. Because of his clinical risk profile, the team wants to reduce the likelihood of post-extubation respiratory failure and re-intubation. Which intervention described in the presentation can be used for this purpose?',
    options: [
      { id: 'A', text: 'Continuous high-concentration oxygen indefinitely' },
      { id: 'B', text: 'Post-extubation BiPAP/CPAP' },
      { id: 'C', text: 'Immediate re-intubation' },
      { id: 'D', text: 'SIMV indefinitely' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Post-extubation BiPAP/CPAP',
    explanation: 'In high-risk patients (e.g., hypercapnic COPD, obesity hypoventilation syndrome, congestive heart failure, age > 65), the prophylactic application of post-extubation non-invasive ventilation (BiPAP / CPAP) significantly reduces the incidence of post-extubation respiratory failure, re-intubation rates, and ICU mortality.',
    optionRationales: {
      A: 'High oxygen alone does not provide positive pressure support to prevent atelectasis or unload fatigued respiratory muscles.',
      B: 'Correct. Prophylactic post-extubation NIV (BiPAP/CPAP) prevents post-extubation respiratory failure in high-risk patients.',
      C: 'Immediate re-intubation is unnecessary if the patient has passed a spontaneous breathing trial.',
      D: 'SIMV is an invasive mechanical ventilation mode, not applicable to an extubated patient.'
    },
    keyTakeaway: 'Prophylactic non-invasive ventilation (BiPAP/CPAP) immediately post-extubation decreases re-intubation rates in high-risk patients.',
    sourcePageRef: 'Page 37, Q5',
    difficulty: 'Core Clinical',
    tags: ['Extubation', 'BiPAP', 'NIV', 'ICU Care']
  },

  // ----------------------------------------------------
  // USE OF ADRENALINE IN MEDICINE (Pages 45-47)
  // ----------------------------------------------------
  {
    id: 'adrenaline_q1',
    topicId: 'adrenaline_in_medicine',
    topicTitle: 'Use of Adrenaline in Medicine',
    questionNumber: 1,
    clinicalVignette: 'A 28-year-old woman with asthma presents with severe respiratory distress. She is unable to complete sentences, has diffuse wheezing, and has an oxygen saturation of 84%. She receives repeated nebulized salbutamol, ipratropium, systemic corticosteroids and oxygen but deteriorates. Which statement regarding adrenaline is most accurate?',
    options: [
      { id: 'A', text: 'Adrenaline is routinely superior to inhaled β₂ agonists in acute asthma' },
      { id: 'B', text: 'Adrenaline is contraindicated in all severe asthma attacks' },
      { id: 'C', text: 'Adrenaline may have a role in selected life-threatening situations, but routine treatment of acute asthma is based on inhaled bronchodilators, corticosteroids and supportive management' },
      { id: 'D', text: 'Adrenaline should replace corticosteroids' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Adrenaline may have a role in selected life-threatening situations, but routine treatment of acute asthma is based on inhaled bronchodilators, corticosteroids and supportive management',
    explanation: 'Standard acute asthma therapy relies on selective inhaled beta-2 agonists (salbutamol), anticholinergics (ipratropium), systemic corticosteroids, and oxygen. Adrenaline is not first-line for routine acute asthma due to non-selective alpha and beta-1 cardiovascular stimulation, but IM/IV adrenaline is indicated in life-threatening asthma with severe distress or when acute anaphylaxis is suspected.',
    optionRationales: {
      A: 'Inhaled selective beta-2 agonists are preferred first-line over adrenaline because they avoid systemic beta-1 cardiac side effects.',
      B: 'Adrenaline is not contraindicated; it is used in life-threatening asthma or anaphylaxis.',
      C: 'Correct. Adrenaline is reserved for life-threatening refractory presentations or anaphylaxis; standard care is inhaled bronchodilators and steroids.',
      D: 'Adrenaline provides rapid bronchodilation but cannot replace the anti-inflammatory action of corticosteroids.'
    },
    keyTakeaway: 'Adrenaline is reserved for life-threatening acute asthma or anaphylaxis; standard care remains inhaled selective beta-2 agonists and corticosteroids.',
    sourcePageRef: 'Page 45, Q1',
    difficulty: 'Core Clinical',
    tags: ['Adrenaline', 'Asthma', 'Emergency Pharmacology']
  },
  {
    id: 'adrenaline_q2',
    topicId: 'adrenaline_in_medicine',
    topicTitle: 'Use of Adrenaline in Medicine',
    questionNumber: 2,
    clinicalVignette: 'A 35-year-old man develops severe anaphylaxis after eating peanuts. He receives an appropriate dose of IM adrenaline. Five minutes later, his blood pressure remains 70/40 mmHg, oxygen saturation is 82%, and he continues to have severe respiratory distress. What is the best next pharmacological intervention?',
    options: [
      { id: 'A', text: 'Repeat IM adrenaline' },
      { id: 'B', text: 'Give oral antihistamine only' },
      { id: 'C', text: 'Give IV furosemide' },
      { id: 'D', text: 'Give IV diazepam' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Repeat IM adrenaline',
    explanation: 'In severe anaphylaxis with persistent hypotension and airway compromise after the first dose of intramuscular adrenaline, international resuscitation guidelines mandate repeating IM adrenaline every 5 minutes as needed (into the anterolateral aspect of the middle third of the thigh).',
    optionRationales: {
      A: 'Correct. IM Adrenaline (0.5 mg in adults) should be repeated every 5 minutes in refractory anaphylaxis.',
      B: 'Antihistamines are second-line, slow to act, and do not treat bronchospasm or shock.',
      C: 'Furosemide is a diuretic that will worsen anaphylactic distributive and hypovolemic shock.',
      D: 'Diazepam is a sedative with no role in anaphylaxis and may depress respiration further.'
    },
    keyTakeaway: 'In refractory anaphylaxis, repeat IM Adrenaline (1:1000) every 5 minutes until hemodynamic and respiratory stability is achieved.',
    sourcePageRef: 'Page 45, Q2',
    difficulty: 'High Yield',
    tags: ['Anaphylaxis', 'Adrenaline', 'Resuscitation Protocols']
  },
  {
    id: 'adrenaline_q3',
    topicId: 'adrenaline_in_medicine',
    topicTitle: 'Use of Adrenaline in Medicine',
    questionNumber: 3,
    clinicalVignette: 'A 67-year-old man suddenly collapses and is found to be unresponsive and not breathing normally. CPR is commenced. The cardiac monitor shows ventricular fibrillation. Which intervention should be prioritized?',
    options: [
      { id: 'A', text: 'IV adrenaline immediately before any other intervention' },
      { id: 'B', text: 'Immediate defibrillation' },
      { id: 'C', text: 'IV atropine' },
      { id: 'D', text: 'IV calcium gluconate' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Immediate defibrillation',
    explanation: 'In shockable cardiac arrest (Ventricular Fibrillation or Pulseless Ventricular Tachycardia), immediate unsynchronized defibrillation is the single most critical intervention. For VF/pVT, defibrillation takes priority; adrenaline (1 mg IV) is administered only after the second shock (prior to the 3rd shock) during ongoing CPR.',
    optionRationales: {
      A: 'Defibrillation takes immediate priority over drug administration in VF arrest.',
      B: 'Correct. Immediate defibrillation is the definitive treatment for ventricular fibrillation.',
      C: 'Atropine has no role in the modern ACLS algorithm for VF cardiac arrest.',
      D: 'Calcium gluconate is only indicated in hyperkalemia or calcium channel blocker overdose.'
    },
    keyTakeaway: 'For Ventricular Fibrillation, immediate defibrillation is the absolute priority; adrenaline is given after the second shock.',
    sourcePageRef: 'Page 46, Q3',
    difficulty: 'High Yield',
    tags: ['ACLS', 'Cardiac Arrest', 'Defibrillation', 'Ventricular Fibrillation']
  },
  {
    id: 'adrenaline_q4',
    topicId: 'adrenaline_in_medicine',
    topicTitle: 'Use of Adrenaline in Medicine',
    questionNumber: 4,
    clinicalVignette: 'A 72-year-old man presents with dizziness and near-syncope. His pulse is 32 beats/min and blood pressure is 78/45 mmHg. ECG demonstrates high-grade AV block. He is confused, cold and clammy. Which drug is generally the initial pharmacological treatment for this condition?',
    options: [
      { id: 'A', text: 'Adrenaline' },
      { id: 'B', text: 'Atropine' },
      { id: 'C', text: 'Adenosine' },
      { id: 'D', text: 'Amiodarone' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Atropine',
    explanation: 'For acute symptomatic and unstable bradycardia (hypotension, altered mental status, signs of shock), IV Atropine (0.5 mg to 1 mg IV bolus, up to a maximum of 3 mg) is the first-line pharmacological treatment. If atropine fails or is ineffective (e.g., Mobitz II or complete 3rd degree AV block with wide QRS), transcutaneous pacing, adrenaline infusion, or dopamine infusion is initiated.',
    optionRationales: {
      A: 'Adrenaline infusion is a second-line option if atropine and pacing are unavailable or ineffective.',
      B: 'Correct. IV Atropine is the standard initial pharmacological agent for symptomatic bradycardia.',
      C: 'Adenosine slows AV nodal conduction and would worsen bradycardia.',
      D: 'Amiodarone is an antiarrhythmic for tachyarrhythmias and is contraindicated in high-grade AV block.'
    },
    keyTakeaway: 'IV Atropine is the first-line medication for unstable bradycardia; transcutaneous pacing or adrenaline/dopamine infusions follow if refractory.',
    sourcePageRef: 'Page 46, Q4',
    difficulty: 'Core Clinical',
    tags: ['Bradycardia', 'Atropine', 'AV Block', 'ACLS']
  },
  {
    id: 'adrenaline_q5',
    topicId: 'adrenaline_in_medicine',
    topicTitle: 'Use of Adrenaline in Medicine',
    questionNumber: 5,
    clinicalVignette: 'A 3-year-old child presents with a barking cough, hoarseness and severe inspiratory stridor at rest. There is marked chest recession and oxygen saturation is 89%. There is no urticaria, facial swelling or known allergen exposure. Which intervention is most appropriate?',
    options: [
      { id: 'A', text: 'IM adrenaline' },
      { id: 'B', text: 'Nebulized adrenaline' },
      { id: 'C', text: 'IV adrenaline bolus' },
      { id: 'D', text: 'Oral salbutamol' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Nebulized adrenaline',
    explanation: 'The presentation (barking cough, hoarseness, inspiratory stridor at rest, chest recession) is classic for severe croup (laryngotracheobronchitis). The immediate treatment for moderate-to-severe croup with resting stridor is Nebulized Adrenaline (L-epinephrine or racemic epinephrine) combined with systemic corticosteroids (dexamethasone). Adrenaline stimulates mucosal alpha-1 receptors, causing rapid vasoconstriction and reducing subglottic edema.',
    optionRationales: {
      A: 'IM adrenaline is indicated for anaphylaxis, not viral croup.',
      B: 'Correct. Nebulized adrenaline provides rapid local vasoconstriction to relieve subglottic airway edema in croup.',
      C: 'IV adrenaline bolus is reserved for cardiac arrest.',
      D: 'Salbutamol is a lower airway bronchodilator and has no efficacy for subglottic edema in croup.'
    },
    keyTakeaway: 'Severe croup with resting inspiratory stridor and chest indrawing is treated with Nebulized Adrenaline and Dexamethasone.',
    sourcePageRef: 'Pages 46–47, Q5',
    difficulty: 'High Yield',
    tags: ['Croup', 'Pediatrics', 'Nebulized Adrenaline', 'Stridor']
  }
];
