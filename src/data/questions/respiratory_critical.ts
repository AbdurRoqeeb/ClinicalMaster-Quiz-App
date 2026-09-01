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
    clinicalVignette: 'A 24-year-old man presents to the emergency department during the Harmattan season with acute breathlessness and chest tightness. On examination, he is agitated, using accessory muscles of respiration, and unable to complete sentences in one breath. His pulse rate is 124 beats per minute, respiratory rate is 32 breaths per minute, SpO₂ is 88% on room air, and peak expiratory flow rate (PEFR) is 40% of his predicted value. Auscultation of the chest reveals widespread polyphonic wheezing. Which of the following clinical findings would indicate that this patient is progressing from acute severe asthma to life-threatening asthma?',
    options: [
      { id: 'A', text: 'Pulse rate of 124 beats per minute' },
      { id: 'B', text: 'Peak expiratory flow rate (PEFR) of 40% of predicted value' },
      { id: 'C', text: 'Development of a "silent chest" on auscultation' },
      { id: 'D', text: 'Respiratory rate of 32 breaths per minute' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Development of a "silent chest" on auscultation',
    explanation: 'A "silent chest" occurs when airflow obstruction becomes so severe and respiratory muscle fatigue so profound that air movement is insufficient to generate wheezing sounds. This is a critical hallmark of life-threatening asthma requiring immediate aggressive escalation, including preparation for intubation. In contrast, tachycardia (>110 bpm), tachypnea (>25 bpm), and PEFR 33–50% are criteria for acute severe asthma, not life-threatening asthma.',
    optionRationales: {
      A: 'Pulse rate > 110 bpm is a feature of acute severe asthma, whereas bradycardia/hypotension indicates life-threatening asthma.',
      B: 'PEFR 33–50% defines acute severe asthma; PEFR < 33% indicates life-threatening asthma.',
      C: 'Correct. A silent chest signifies critical airway obstruction and severe muscle exhaustion, defining life-threatening asthma.',
      D: 'Respiratory rate >= 25 breaths/min is a feature of acute severe asthma, whereas bradypnea/respiratory exhaustion indicates life-threatening asthma.'
    },
    keyTakeaway: 'The disappearance of wheezing accompanied by a "silent chest" reflects critical airflow reduction and imminent respiratory arrest in life-threatening asthma.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Asthma', 'Life-Threatening Asthma', 'Silent Chest', 'Emergency Medicine']
  },
  {
    id: 'asthma_q2',
    topicId: 'acute_severe_asthma',
    topicTitle: 'Management of Acute Severe Asthmatic Attack',
    questionNumber: 2,
    clinicalVignette: 'A 19-year-old female university student is brought to the emergency room with severe acute asthma. She has received back-to-back nebulised salbutamol with ipratropium bromide, high-flow oxygen, and intravenous hydrocortisone over the past 45 minutes. An arterial blood gas (ABG) analysis on high-flow oxygen reveals: pH 7.38, PaCO₂ 40 mmHg (5.3 kPa), PaO₂ 62 mmHg (8.3 kPa), HCO₃⁻ 24 mmol/L, Base excess 0 mmol/L. Which of the following is the most accurate interpretation of these ABG findings in the context of this patient\'s clinical presentation?',
    options: [
      { id: 'A', text: 'The ABG is completely normal, indicating significant clinical improvement and allowing step-down of emergency care' },
      { id: 'B', text: 'The ABG demonstrates an expected compensatory response with early metabolic acidosis' },
      { id: 'C', text: 'The "normal" PaCO₂ in a tachypnoeic asthmatic represents impending respiratory muscle fatigue and respiratory failure' },
      { id: 'D', text: 'The findings indicate an acute primary metabolic alkalosis with complete respiratory compensation' }
    ],
    correctOption: 'C',
    correctAnswerText: 'The "normal" PaCO₂ in a tachypnoeic asthmatic represents impending respiratory muscle fatigue and respiratory failure',
    explanation: 'In early acute asthma, hyperventilation driven by hypoxia typically produces a low PaCO₂ (<35 mmHg) and respiratory alkalosis. A "normal" PaCO₂ (40 mmHg) or rising PaCO₂ in a severely breathless, tachypneic patient indicates that respiratory muscles are tiring, alveolar ventilation is failing, and hypercapnic respiratory failure is imminent. This is a red-flag warning requiring intensive care transfer.',
    optionRationales: {
      A: 'A normal PaCO2 in severe asthma is a pseudonormalization due to impending respiratory failure, not a sign of recovery.',
      B: 'The bicarbonate and base excess are completely normal, showing no metabolic acidosis.',
      C: 'Correct. In severe tachypnea, a normal PaCO2 indicates failure to clear CO2 and impending muscle exhaustion.',
      D: 'The pH and bicarbonate are normal; there is no primary metabolic alkalosis.'
    },
    keyTakeaway: 'A normal or elevated PaCO2 in a severely tachypneic asthmatic is an ominous sign of impending respiratory muscle exhaustion and hypercapnic failure.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Asthma', 'ABG Interpretation', 'Hypercapnia', 'Critical Care']
  },
  {
    id: 'asthma_q3',
    topicId: 'acute_severe_asthma',
    topicTitle: 'Management of Acute Severe Asthmatic Attack',
    questionNumber: 3,
    clinicalVignette: 'A 30-year-old businessman with acute severe asthma remains severely dyspnoeic with a PEFR of 40% of predicted despite 45 minutes of nebulised beta-2 agonists, ipratropium, and systemic corticosteroids. The medical team decides to administer a single dose of intravenous magnesium sulphate as a second-line bronchodilator. What is the primary cellular mechanism of action of intravenous magnesium sulphate in acute severe asthma?',
    options: [
      { id: 'A', text: 'Competitive inhibition of muscarinic M3 receptors on airway smooth muscle' },
      { id: 'B', text: 'Inhibition of intracellular calcium influx into airway vascular and bronchial smooth muscle cells' },
      { id: 'C', text: 'Direct stimulation of adenylate cyclase to increase intracellular cyclic AMP' },
      { id: 'D', text: 'Suppression of nuclear factor kappa B (NF-κB) nuclear translocation' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Inhibition of intracellular calcium influx into airway vascular and bronchial smooth muscle cells',
    explanation: 'Magnesium acts as a physiological calcium antagonist by inhibiting voltage-gated and receptor-operated calcium channels on bronchial smooth muscle cells and preventing intracellular calcium release from the sarcoplasmic reticulum. This reduces intracellular cytosolic free calcium, directly causing bronchial smooth muscle relaxation and potent bronchodilation.',
    optionRationales: {
      A: 'Competitive inhibition of muscarinic M3 receptors is the mechanism of ipratropium bromide.',
      B: 'Correct. Magnesium acts as a physiological calcium antagonist, inhibiting calcium influx into bronchial smooth muscle.',
      C: 'Direct stimulation of adenylate cyclase to increase cAMP is the mechanism of beta-2 agonists (salbutamol).',
      D: 'Suppression of NF-kB nuclear translocation is the genomic anti-inflammatory mechanism of corticosteroids.'
    },
    keyTakeaway: 'Intravenous Magnesium Sulfate (1.2–2.0 g IV over 20 min) causes bronchodilation by blocking intracellular calcium influx into bronchial smooth muscle.',
    sourcePageRef: '',
    difficulty: 'Core Clinical',
    tags: ['Magnesium Sulfate', 'Asthma Pharmacology', 'Mechanism of Action']
  },
  {
    id: 'asthma_q4',
    topicId: 'acute_severe_asthma',
    topicTitle: 'Management of Acute Severe Asthmatic Attack',
    questionNumber: 4,
    clinicalVignette: 'A 28-year-old primigravida at 26 weeks of gestation presents with acute severe asthma. She is visibly distressed and tachypnoeic. What is the recommended target maternal oxygen saturation (SpO₂) range during the management of an acute asthma attack in pregnancy?',
    options: [
      { id: 'A', text: '88%–92%' },
      { id: 'B', text: '90%–92%' },
      { id: 'C', text: '94%–98%' },
      { id: 'D', text: '100% at all times' }
    ],
    correctOption: 'C',
    correctAnswerText: '94%–98%',
    explanation: 'In pregnancy, maternal hypoxemia rapidly compromises fetal oxygenation because the fetal oxyhemoglobin dissociation curve operates at a steeper, lower PaO2 range. International guidelines (BTS/SIGN, GINA) mandate maintaining maternal SpO2 at 94–98% (or PaO2 > 70 mmHg) to ensure adequate placental perfusion and avoid fetal hypoxia.',
    optionRationales: {
      A: '88%–92% is the target range for chronic hypercapnic COPD patients, not pregnant asthmatics.',
      B: '90%–92% is inadequate and risks profound fetal hypoxemia and distress.',
      C: 'Correct. Target maternal SpO2 in pregnancy is strictly 94%–98% to protect the fetus from hypoxia.',
      D: 'Hyperoxia (100%) can cause coronary and cerebral vasoconstriction and is unnecessary.'
    },
    keyTakeaway: 'In pregnant women presenting with acute asthma, oxygen saturation must be maintained between 94% and 98% to safeguard fetal oxygenation.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Asthma in Pregnancy', 'Oxygen Target', 'Obstetric Emergency']
  },
  {
    id: 'asthma_q5',
    topicId: 'acute_severe_asthma',
    topicTitle: 'Management of Acute Severe Asthmatic Attack',
    questionNumber: 5,
    clinicalVignette: 'A 16-year-old boy with a known history of brittle asthma is brought to the emergency department. On arrival, he is lethargic, cyanotic, and unable to speak. Physical examination reveals a pulse rate of 52 beats per minute, respiratory rate of 8 breaths per minute, blood pressure of 80/50 mmHg, SpO₂ of 78% on room air, and virtually absent breath sounds throughout both lung fields. Which of the following is the most appropriate immediate step in the management of this patient?',
    options: [
      { id: 'A', text: 'Continuous nebulisation of salbutamol 10 mg combined with ipratropium bromide' },
      { id: 'B', text: 'Intravenous administration of magnesium sulphate 2 g over 20 minutes' },
      { id: 'C', text: 'Immediate endotracheal intubation and mechanical ventilation with 100% oxygen' },
      { id: 'D', text: 'Stat dose of intravenous hydrocortisone 200 mg and urgent chest radiography' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Immediate endotracheal intubation and mechanical ventilation with 100% oxygen',
    explanation: 'The patient exhibits unmistakable signs of near-fatal asthma / impending respiratory arrest: severe lethargy/coma, profound cyanosis, bradycardia (HR 52 bpm), bradypnea (RR 8 bpm), hypotension, and a completely silent chest. In this state, nebulized drug delivery fails due to lack of alveolar airflow. The only immediate life-saving intervention is rapid sequence intubation, endotracheal airway protection, and mechanical ventilation.',
    optionRationales: {
      A: 'Nebulized therapy cannot reach airways in a patient with RR 8 and near-zero tidal volume.',
      B: 'IV Magnesium takes 20 minutes to infuse and cannot reverse acute respiratory arrest.',
      C: 'Correct. Bradycardia, bradypnea, lethargy, and absent breath sounds represent near-fatal asthma requiring immediate intubation.',
      D: 'Steroids take 4–6 hours to exert cellular anti-inflammatory effects and chest X-rays must not delay airway control.'
    },
    keyTakeaway: 'Near-fatal asthma with bradycardia, bradypnea, hypotension, and altered mental status mandates immediate endotracheal intubation and mechanical ventilation.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Near-Fatal Asthma', 'Intubation', 'Airway Management', 'Resuscitation']
  },

  // ----------------------------------------------------
  // SYNOPSIS OF SEPSIS MANAGEMENT (Pages 33-35)
  // ----------------------------------------------------
  {
    id: 'sep_q1',
    topicId: 'sepsis_management',
    topicTitle: 'Synopsis of Sepsis Management',
    questionNumber: 1,
    clinicalVignette: 'A 62-year-old man presents with fever, productive cough, and confusion. BP is 80/45 mmHg, pulse is 128/min, RR is 30/min, and oxygen saturation is 88% on room air. Serum lactate is 4.2 mmol/L. Chest examination reveals bronchial breath sounds in the right lower zone. After starting high-flow oxygen, which of the following is the most appropriate initial priority in his management?',
    options: [
      { id: 'A', text: 'Obtain a CT pulmonary angiogram to exclude pulmonary embolism' },
      { id: 'B', text: 'Administer IV antibiotics and begin sepsis resuscitation' },
      { id: 'C', text: 'Administer oral broad-spectrum antibiotics' },
      { id: 'D', text: 'Perform immediate bronchoscopy to clear secretions' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Administer IV antibiotics and begin sepsis resuscitation',
    explanation: 'The patient presents in septic shock secondary to severe community-acquired pneumonia (hypotension BP 80/45 mmHg, tachycardia, tachypnea, confusion, lactate 4.2 mmol/L). According to Surviving Sepsis Campaign Hour-1 bundle guidelines, the absolute priority is: (1) measure lactate, (2) obtain blood cultures prior to antibiotics, (3) administer broad-spectrum intravenous antimicrobials, and (4) initiate rapid intravenous crystalloid fluid resuscitation (30 mL/kg).',
    optionRationales: {
      A: 'CTPA is contraindicated in an unstable hypotensive septic patient before resuscitation.',
      B: 'Correct. Immediate IV broad-spectrum antibiotics and crystalloid fluid resuscitation are the cornerstone of the Surviving Sepsis Campaign Hour-1 bundle.',
      C: 'Oral antibiotics have erratic, delayed absorption and are ineffective in septic shock.',
      D: 'Bronchoscopy is not indicated initially and delays vital hemodynamic resuscitation.'
    },
    keyTakeaway: 'The Surviving Sepsis Hour-1 bundle mandates immediate IV broad-spectrum antibiotics, blood cultures, lactate measurement, and 30 mL/kg crystalloid resuscitation.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Sepsis', 'Hour-1 Bundle', 'Septic Shock', 'Antibiotics', 'Resuscitation']
  },
  {
    id: 'sep_q2',
    topicId: 'sepsis_management',
    topicTitle: 'Synopsis of Sepsis Management',
    questionNumber: 2,
    clinicalVignette: 'A 58-year-old woman with septic shock from pyelonephritis remains hypotensive despite 30 mL/kg of IV crystalloids. An infusion of noradrenaline has been escalated to 0.25 µg/kg/min, with a mean arterial pressure of 58 mmHg. Her arterial lactate remains elevated at 3.8 mmol/L. Which additional therapy should now be considered?',
    options: [
      { id: 'A', text: 'Intravenous hydrocortisone' },
      { id: 'B', text: 'Oral prednisolone' },
      { id: 'C', text: 'Dobutamine infusion' },
      { id: 'D', text: 'Intravenous methylprednisolone pulse therapy' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Intravenous hydrocortisone',
    explanation: 'The Surviving Sepsis Campaign guidelines recommend low-dose intravenous corticosteroids (Hydrocortisone 200 mg/day, either as 50 mg IV every 6 hours or continuous infusion) in adults with septic shock who require ongoing escalating doses of vasopressors (e.g. noradrenaline >= 0.25 µg/kg/min) to maintain a target MAP >= 65 mmHg. Hydrocortisone restores vascular responsiveness to catecholamines and treats relative adrenal insufficiency.',
    optionRationales: {
      A: 'Correct. Low-dose IV Hydrocortisone (200 mg/day) is indicated for refractory septic shock on escalating vasopressors.',
      B: 'Oral prednisolone has unpredictable absorption in shock and inadequate mineralocorticoid effect.',
      C: 'Dobutamine is indicated for myocardial dysfunction or persistent hypoperfusion despite adequate MAP, not purely for refractory vasopressor-dependent hypotension.',
      D: 'High-dose pulse methylprednisolone is harmful in sepsis and increases secondary infection risk.'
    },
    keyTakeaway: 'Intravenous Hydrocortisone (200 mg/day) is indicated in septic shock refractory to fluid resuscitation and escalating vasopressor support.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Septic Shock', 'Hydrocortisone', 'Vasopressors', 'Surviving Sepsis']
  },
  {
    id: 'sep_q3',
    topicId: 'sepsis_management',
    topicTitle: 'Synopsis of Sepsis Management',
    questionNumber: 3,
    clinicalVignette: 'A 62-year-old woman presents with severe abdominal pain, high fever, and marked rebound tenderness. An erect chest X-ray confirms free gas under the right hemidiaphragm. She is hypotensive (BP 84/50 mmHg) with a lactate of 4.8 mmol/L. She is started on broad-spectrum IV antibiotics and aggressive fluid resuscitation. Which of the following is the most important intervention for definitive control of her sepsis?',
    options: [
      { id: 'A', text: 'Repeated serum lactate measurements every 2 hours' },
      { id: 'B', text: 'Intravenous hydrocortisone therapy' },
      { id: 'C', text: 'Urgent surgical source control' },
      { id: 'D', text: 'Increasing the antibiotic dose above the standard range' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Urgent surgical source control',
    explanation: 'In hollow viscus gastrointestinal perforation with pneumoperitoneum and fecal/peritoneal contamination, antimicrobial therapy and fluid resuscitation are supportive only. Without urgent surgical laparotomy to repair the perforation and perform peritoneal washout (source control), the ongoing flood of enteric microorganisms and toxins will inevitably result in irreversible multi-organ failure and death. Source control is mandatory within 6–12 hours.',
    optionRationales: {
      A: 'Serial lactate monitoring tracks resuscitation adequacy but provides no anatomical treatment.',
      B: 'Hydrocortisone is supportive for refractory shock but cannot fix a ruptured bowel.',
      C: 'Correct. Emergent surgical source control is the definitive life-saving intervention for hollow viscus perforation.',
      D: 'Higher antibiotic doses cannot sterilize an open perforated viscus with ongoing intra-abdominal contamination.'
    },
    keyTakeaway: 'Emergent surgical source control is the definitive life-saving requirement in intra-abdominal sepsis from hollow viscus perforation.',
    sourcePageRef: '',
    difficulty: 'Core Clinical',
    tags: ['Sepsis Source Control', 'Pneumoperitoneum', 'Peritonitis', 'Surgical Emergency']
  },
  {
    id: 'sep_q4',
    topicId: 'sepsis_management',
    topicTitle: 'Synopsis of Sepsis Management',
    questionNumber: 4,
    clinicalVignette: 'A 70-year-old man with severe septic shock develops oliguria. His serum creatinine rises to 420 µmol/L and serum potassium is 7.1 mmol/L with marked peaking of T waves on ECG. Despite intravenous calcium gluconate, insulin-dextrose infusion, and nebulised salbutamol, his repeat potassium 1 hour later is 6.9 mmol/L and he remains anuric. What is the most appropriate next step in management?',
    options: [
      { id: 'A', text: 'Administer a 2-litre bolus of isotonic crystalloid' },
      { id: 'B', text: 'Administer high-dose intravenous furosemide' },
      { id: 'C', text: 'Initiate urgent renal replacement therapy' },
      { id: 'D', text: 'Administer oral sodium bicarbonate alone' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Initiate urgent renal replacement therapy',
    explanation: 'The patient has severe oliguric acute kidney injury with life-threatening hyperkalemia (K+ 7.1 mmol/L) refractory to medical shifting therapies (calcium, insulin-dextrose, beta-agonists). In anuric septic AKI with refractory hyperkalemia and ECG changes, urgent Renal Replacement Therapy (such as Continuous Veno-Venous Hemofiltration/CRRT) is the only definitive intervention to remove potassium and prevent fatal cardiac arrest.',
    optionRationales: {
      A: 'Further large fluid boluses in an anuric patient risk precipitating fatal pulmonary edema.',
      B: 'Loop diuretics are ineffective in established anuric acute tubular necrosis.',
      C: 'Correct. Refractory life-threatening hyperkalemia in anuric AKI is an absolute indication for emergency renal replacement therapy.',
      D: 'Oral bicarbonate is too slow and ineffective in refractory hyperkalemic arrest situations.'
    },
    keyTakeaway: 'Refractory life-threatening hyperkalemia (>6.5 mmol/L) in anuric septic AKI is a definitive emergency indication for renal replacement therapy.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Septic AKI', 'Hyperkalemia', 'Dialysis Indications', 'RRT', 'Critical Care']
  },
  {
    id: 'sep_q5',
    topicId: 'sepsis_management',
    topicTitle: 'Synopsis of Sepsis Management',
    questionNumber: 5,
    clinicalVignette: 'A 70-year-old woman is admitted to the ICU 4 days after an emergency bowel resection for a perforated diverticulum. She develops fever, tachycardia, abdominal distension, and absent bowel sounds. Her blood pressure falls to 80/50 mmHg despite adequate fluid resuscitation, requiring noradrenaline infusion. Her serum lactate rises from 1.8 to 4.5 mmol/L. She is already receiving broad-spectrum antibiotics. What is the most likely reason for her clinical deterioration?',
    options: [
      { id: 'A', text: 'Inadequate oxygen delivery due to anaemia' },
      { id: 'B', text: 'Uncontrolled infectious source requiring source control' },
      { id: 'C', text: 'Excessive antibiotic dosing causing drug-induced hypotension' },
      { id: 'D', text: 'Relative bradycardia causing reduced cardiac output' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Uncontrolled infectious source requiring source control',
    explanation: 'A secondary clinical deterioration 4–7 days post-gastrointestinal surgery with new fever, abdominal distension, septic shock, and rising lactate despite broad-spectrum antibiotics strongly points to an uncontrolled surgical source—most commonly an anastomotic leak, deep intra-abdominal abscess, or progressive bowel ischemia/necrosis. Urgent diagnostic imaging (CT abdomen/pelvis) and surgical re-exploration for source control are essential.',
    optionRationales: {
      A: 'Isolated mild anemia does not account for acute distributive shock and fever 4 days post-op.',
      B: 'Correct. Secondary deterioration after bowel surgery on antibiotics indicates an uncontrolled source (anastomotic breakdown/abscess).',
      C: 'Standard antibiotics do not cause acute refractory distributive shock and lactate surges.',
      D: 'The patient is tachycardic, not bradycardic.'
    },
    keyTakeaway: 'Deterioration with septic shock days after abdominal surgery on appropriate antibiotics indicates an uncontrolled surgical source (anastomotic leak or abscess).',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Post-Op Sepsis', 'Anastomotic Leak', 'Source Control', 'Surgical Sepsis']
  },

  // ----------------------------------------------------
  // MANAGEMENT OF RESPIRATORY FAILURE (Pages 35-37)
  // ----------------------------------------------------
  {
    id: 'rf_q1',
    topicId: 'respiratory_failure',
    topicTitle: 'Management of Respiratory Failure',
    questionNumber: 1,
    clinicalVignette: 'A 72-year-old man with a severe exacerbation of COPD is treated with controlled oxygen (24% via Venturi mask), nebulised bronchodilators, and systemic corticosteroids. A repeat ABG shows: pH 7.28, PaCO₂ 8.2 kPa (61.5 mmHg), PaO₂ 8.0 kPa (60 mmHg), HCO₃⁻ 29 mmol/L. He is conscious and able to protect his airway. What is the most appropriate next step in management?',
    options: [
      { id: 'A', text: 'Increase the FiO₂ to 60% via a non-rebreathe mask' },
      { id: 'B', text: 'Start non-invasive ventilation (NIV/BiPAP)' },
      { id: 'C', text: 'Perform immediate endotracheal intubation' },
      { id: 'D', text: 'Repeat nebulised bronchodilators and recheck the ABG in 4 hours' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Start non-invasive ventilation (NIV/BiPAP)',
    explanation: 'Non-Invasive Positive Pressure Ventilation (NIV/BiPAP) is the evidence-based first-line treatment of choice for acute hypercapnic respiratory failure in COPD exacerbations where respiratory acidosis (pH 7.25–7.35, PaCO2 > 6.0 kPa) persists despite initial medical therapy and controlled oxygen. NIV reduces work of breathing, improves alveolar ventilation, prevents invasive intubation, and reduces mortality.',
    optionRationales: {
      A: 'High-flow O2 (60%) will suppress hypoxic drive and worsen hypercapnic narcosis in COPD retainers.',
      B: 'Correct. Persistent respiratory acidosis (pH 7.28, PaCO2 8.2 kPa) in a conscious COPD patient is the gold-standard indication for NIV.',
      C: 'Invasive intubation is reserved for patients who fail NIV or have GCS depression/inability to protect airway.',
      D: 'Waiting 4 hours allows progressive acidemia, CO2 narcosis, and respiratory arrest.'
    },
    keyTakeaway: 'Persistent respiratory acidosis (pH < 7.35, elevated PaCO2) in an acute COPD exacerbation despite initial medical therapy is a primary indication for Non-Invasive Ventilation (NIV).',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Respiratory Failure', 'COPD Exacerbation', 'BiPAP', 'NIV', 'Acid-Base']
  },
  {
    id: 'rf_q2',
    topicId: 'respiratory_failure',
    topicTitle: 'Management of Respiratory Failure',
    questionNumber: 2,
    clinicalVignette: 'A 70-year-old man with severe COPD and known chronic CO₂ retention is admitted with an exacerbation. He was mistakenly placed on a 15 L/min non-rebreathe oxygen mask during transport. On arrival, he is drowsy and slow to respond. An urgent ABG shows: pH 7.20, PaCO₂ 10.8 kPa (81 mmHg), PaO₂ 18.2 kPa (136 mmHg), HCO₃⁻ 31 mmol/L. Which of the following is the most appropriate immediate action?',
    options: [
      { id: 'A', text: 'Continue the high-flow oxygen because the PaO₂ is well maintained' },
      { id: 'B', text: 'Titrate down oxygen to achieve a target saturation of 88–92% and check an urgent ABG' },
      { id: 'C', text: 'Stop all oxygen immediately' },
      { id: 'D', text: 'Administer intravenous furosemide' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Titrate down oxygen to achieve a target saturation of 88–92% and check an urgent ABG',
    explanation: 'Uncontrolled high-flow oxygen in chronic hypercapnic COPD patients causes worsening hypercapnia through three mechanisms: (1) release of hypoxic pulmonary vasoconstriction, increasing dead-space ventilation (V/Q mismatch), (2) the Haldane effect (oxygenated hemoglobin displaces CO2 into blood), and (3) reduction in central hypoxic respiratory drive. The immediate action is to titrate oxygen down using a 24% or 28% Venturi mask to target SpO2 88–92%, assess for NIV, and recheck ABG.',
    optionRationales: {
      A: 'Continuing hyperoxia sustains critical CO2 narcosis and risks respiratory arrest.',
      B: 'Correct. Titrate oxygen down immediately to target SpO2 88–92% via Venturi mask and prepare for NIV.',
      C: 'Stopping all oxygen abruptly causes rebound life-threatening severe hypoxemia.',
      D: 'Furosemide does not treat oxygen-induced hypercapnia.'
    },
    keyTakeaway: 'In chronic CO2 retainers, high-flow oxygen can precipitate dangerous CO2 retention; oxygen must be titrated to target SpO2 88–92% and NIV initiated if acidosis develops.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['CO2 Retention', 'Oxygen Therapy', 'Haldane Effect', 'COPD']
  },
  {
    id: 'rf_q3',
    topicId: 'respiratory_failure',
    topicTitle: 'Management of Respiratory Failure',
    questionNumber: 3,
    clinicalVignette: 'A 68-year-old man with a history of COPD presents with increased breathlessness. An arterial blood gas on room air reveals: pH 7.30, PaO₂ 6.8 kPa (51 mmHg), PaCO₂ 8.9 kPa (66.8 mmHg), HCO₃⁻ 32 mmol/L. Which of the following best describes this patient’s type of respiratory failure?',
    options: [
      { id: 'A', text: 'Acute Type 1 respiratory failure' },
      { id: 'B', text: 'Chronic Type 2 respiratory failure' },
      { id: 'C', text: 'Acute-on-chronic Type 2 respiratory failure' },
      { id: 'D', text: 'Compensated respiratory alkalosis' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Acute-on-chronic Type 2 respiratory failure',
    explanation: 'Type 2 respiratory failure is defined by hypoxemia (PaO2 < 8 kPa) with hypercapnia (PaCO2 > 6.0 kPa). The elevated bicarbonate (HCO3- 32 mmol/L, normal 22–26) indicates chronic renal retention of bicarbonate over days to weeks in response to longstanding CO2 elevation. However, the presence of an acute uncompensated acidemia (pH 7.30, below 7.35) indicates an acute super-imposed decompensation, confirming Acute-on-Chronic Type 2 Respiratory Failure.',
    optionRationales: {
      A: 'Type 1 failure has a normal or low PaCO2, whereas PaCO2 is markedly elevated here.',
      B: 'Pure chronic compensated Type 2 failure has a normal pH (7.35–7.45).',
      C: 'Correct. Acidemia (pH 7.30) + high PaCO2 (8.9 kPa) + elevated baseline bicarbonate (32 mmol/L) defines acute-on-chronic Type 2 failure.',
      D: 'The pH is acidemic (7.30), not alkalotic.'
    },
    keyTakeaway: 'Acute-on-chronic Type 2 respiratory failure is characterized by hypoxemia, hypercapnia, elevated baseline bicarbonate, and an acute acidemia (pH < 7.35).',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Respiratory Failure', 'Type 2 Failure', 'Acute-on-Chronic', 'ABG']
  },
  {
    id: 'rf_q4',
    topicId: 'respiratory_failure',
    topicTitle: 'Management of Respiratory Failure',
    questionNumber: 4,
    clinicalVignette: 'A 55-year-old man with severe respiratory failure is being considered for non-invasive ventilation (NIV). He is tachypnoeic, intermittently confused, and has copious respiratory secretions that he is unable to clear. Which of the following is the most important reason NOT to initiate NIV in this patient?',
    options: [
      { id: 'A', text: 'The presence of hypoxaemia' },
      { id: 'B', text: 'The presence of tachypnoea' },
      { id: 'C', text: 'Copious secretions with inability to clear them' },
      { id: 'D', text: 'The presence of underlying pulmonary disease' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Copious secretions with inability to clear them',
    explanation: 'A fundamental contraindication to Non-Invasive Ventilation (NIV) is the presence of copious airway secretions in a patient unable to cough, clear secretions, or protect their airway. Positive pressure delivered via a tight-fitting mask will force secretions distal into the bronchial tree, worsen ventilation-perfusion mismatch, cause severe aspiration pneumonia, and trigger sudden airway occlusion. Such patients require invasive endotracheal intubation and direct tracheal suctioning.',
    optionRationales: {
      A: 'Hypoxemia is an indication for respiratory support, not a contraindication to NIV.',
      B: 'Tachypnea is expected in respiratory failure and is not a contraindication.',
      C: 'Correct. Inability to clear copious secretions carries high risk of aspiration and airway obstruction under positive mask pressure.',
      D: 'Underlying pulmonary disease (e.g. COPD) is the primary indication for NIV.'
    },
    keyTakeaway: 'Copious secretions and inability to protect the airway are major contraindications to Non-Invasive Ventilation, necessitating invasive endotracheal intubation.',
    sourcePageRef: '',
    difficulty: 'Core Clinical',
    tags: ['NIV Contraindications', 'Airway Protection', 'Aspiration Risk', 'Intubation']
  },
  {
    id: 'rf_q5',
    topicId: 'respiratory_failure',
    topicTitle: 'Management of Respiratory Failure',
    questionNumber: 5,
    clinicalVignette: 'A patient with COPD who was intubated for hypercapnic respiratory failure is successfully extubated after passing a spontaneous breathing trial. He has multiple risk factors for extubation failure, including age > 65 years and underlying severe cardiac disease. Which of the following is the most appropriate preventative intervention post-extubation?',
    options: [
      { id: 'A', text: 'Continuous high-flow nasal cannula oxygen indefinitely' },
      { id: 'B', text: 'Post-extubation non-invasive ventilation (BiPAP/CPAP)' },
      { id: 'C', text: 'Immediate re-intubation' },
      { id: 'D', text: 'Synchronised intermittent mandatory ventilation (SIMV) indefinitely' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Post-extubation non-invasive ventilation (BiPAP/CPAP)',
    explanation: 'In high-risk patients (e.g. COPD, age > 65, hypercapnia at extubation, underlying congestive heart failure), immediate prophylactic application of Non-Invasive Ventilation (NIV/BiPAP) upon extubation significantly reduces post-extubation respiratory failure, re-intubation rates, ICU length of stay, and 90-day mortality compared to standard oxygen therapy.',
    optionRationales: {
      A: 'High-flow nasal oxygen alone does not unload respiratory muscles or ventilate hypercapnia as effectively as NIV in high-risk COPD.',
      B: 'Correct. Prophylactic post-extubation NIV in high-risk patients prevents extubation failure and re-intubation.',
      C: 'Immediate re-intubation is only indicated if the patient clinically fails and develops airway compromise.',
      D: 'SIMV requires an invasive endotracheal tube.'
    },
    keyTakeaway: 'Prophylactic post-extubation Non-Invasive Ventilation prevents re-intubation and improves outcomes in high-risk COPD patients.',
    sourcePageRef: '',
    difficulty: 'Core Clinical',
    tags: ['Extubation', 'Prophylactic NIV', 'BiPAP', 'Critical Care Weaning']
  },

  // ----------------------------------------------------
  // USE OF ADRENALINE IN MEDICINE (Pages 45-47)
  // ----------------------------------------------------
  {
    id: 'adr_q1',
    topicId: 'adrenaline_in_medicine',
    topicTitle: 'Use of Adrenaline in Medicine',
    questionNumber: 1,
    clinicalVignette: 'A 28-year-old woman presents with severe acute asthma that deteriorates rapidly despite inhaled salbutamol, ipratropium, systemic corticosteroids, and high-flow oxygen. Which of the following statements regarding the use of adrenaline in acute asthma is most accurate?',
    options: [
      { id: 'A', text: 'Adrenaline is routinely superior to selective beta-2 agonists and should be used as first-line therapy in all cases' },
      { id: 'B', text: 'Adrenaline is absolutely contraindicated in all cases of severe asthma because of the risk of myocardial infarction' },
      { id: 'C', text: 'Adrenaline may have a role in selected life-threatening situations, but routine treatment of acute asthma is based on inhaled bronchodilators, corticosteroids and supportive management' },
      { id: 'D', text: 'Adrenaline should be given by intravenous bolus to replace systemic corticosteroids' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Adrenaline may have a role in selected life-threatening situations, but routine treatment of acute asthma is based on inhaled bronchodilators, corticosteroids and supportive management',
    explanation: 'Selective beta-2 agonists (salbutamol) and corticosteroids are the primary mainstays of acute asthma management. However, in life-threatening or near-fatal asthma (e.g. severe airway obstruction preventing inhalation, anaphylaxis-associated asthma, or impending respiratory arrest), parenteral adrenaline (IM 0.3–0.5 mg) is a valuable second-line/adjunctive therapy that produces potent bronchodilation, mucosal vasoconstriction (alpha-1 effect), and mast cell stabilization.',
    optionRationales: {
      A: 'Adrenaline is not first-line for routine acute asthma due to alpha and beta-1 cardiovascular adverse effects.',
      B: 'Adrenaline is not contraindicated; it is life-saving in near-fatal refractory asthma and anaphylaxis.',
      C: 'Correct. Inhaled bronchodilators and steroids remain standard of care; adrenaline is reserved for life-threatening/near-fatal scenarios.',
      D: 'IV bolus adrenaline carries extreme arrhythmia risk and never replaces anti-inflammatory corticosteroids.'
    },
    keyTakeaway: 'Adrenaline is reserved for life-threatening acute asthma or anaphylaxis-associated bronchospasm; standard therapy is based on selective beta-2 agonists and corticosteroids.',
    sourcePageRef: '',
    difficulty: 'Core Clinical',
    tags: ['Adrenaline', 'Acute Asthma', 'Pharmacology', 'Emergency Medicine']
  },
  {
    id: 'adr_q2',
    topicId: 'adrenaline_in_medicine',
    topicTitle: 'Use of Adrenaline in Medicine',
    questionNumber: 2,
    clinicalVignette: 'A 35-year-old man presents with severe peanut anaphylaxis, manifested by marked stridor, facial angioedema, and hypotension. He receives an intramuscular injection of 0.5 mg adrenaline into the anterolateral thigh. Five minutes later, his BP remains 70/40 mmHg, SpO₂ is 82% on high-flow oxygen, and he continues in severe respiratory distress. What is the most appropriate next pharmacological intervention?',
    options: [
      { id: 'A', text: 'Repeat the dose of intramuscular adrenaline' },
      { id: 'B', text: 'Administer an oral antihistamine only' },
      { id: 'C', text: 'Administer intravenous furosemide' },
      { id: 'D', text: 'Administer intravenous diazepam' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Repeat the dose of intramuscular adrenaline',
    explanation: 'In severe anaphylaxis with refractory shock, persistent stridor, or hypoxemia, international resuscitation guidelines (Resuscitation Council UK, AAAAI, EAACI) recommend repeating Intramuscular (IM) Adrenaline (0.5 mg in adults, 1:1,000 solution) every 5 minutes if there is no adequate clinical improvement, while administering aggressive IV crystalloid fluid boluses.',
    optionRationales: {
      A: 'Correct. Repeat IM adrenaline every 5 minutes in refractory anaphylaxis with ongoing hypotension/hypoxemia.',
      B: 'Oral antihistamines have slow onset, do not treat hypotension or laryngeal edema, and are purely adjunctive.',
      C: 'Furosemide will worsen profound anaphylactic distributive/hypovolemic shock.',
      D: 'Diazepam will depress consciousness and worsen airway compromise.'
    },
    keyTakeaway: 'Intramuscular Adrenaline (0.5 mg 1:1000 in adults) should be repeated every 5 minutes in anaphylaxis if severe respiratory or cardiovascular symptoms persist.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Anaphylaxis', 'Adrenaline Dosing', 'Repeat Injection', 'Emergency Protocol']
  },
  {
    id: 'adr_q3',
    topicId: 'adrenaline_in_medicine',
    topicTitle: 'Use of Adrenaline in Medicine',
    questionNumber: 3,
    clinicalVignette: 'A 67-year-old man collapses in the medical ward. CPR is commenced and a cardiac monitor shows ventricular fibrillation (VF). Which of the following is the prioritized intervention before any drug administration?',
    options: [
      { id: 'A', text: 'Administer intravenous adrenaline immediately before any other intervention' },
      { id: 'B', text: 'Immediate defibrillation' },
      { id: 'C', text: 'Administer intravenous atropine' },
      { id: 'D', text: 'Administer intravenous calcium gluconate' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Immediate defibrillation',
    explanation: 'In shockable cardiac arrest rhythms (Ventricular Fibrillation / Pulseless Ventricular Tachycardia), immediate electrical defibrillation (unsynchronized shock) is the single most critical intervention that determines survival. In the ACLS/BLS algorithm, defibrillation is delivered first, followed immediately by 2 minutes of CPR; adrenaline (1 mg IV) is given only after the second unsuccessful shock (after 3rd cycle).',
    optionRationales: {
      A: 'Drugs must never delay immediate defibrillation for shockable rhythms.',
      B: 'Correct. Immediate electrical defibrillation is the highest priority intervention in VF arrest.',
      C: 'Atropine has no role in ventricular fibrillation.',
      D: 'Calcium gluconate is only indicated for hyperkalemia/hypocalcemia/calcium channel blocker toxicity.'
    },
    keyTakeaway: 'In shockable cardiac arrest rhythms (VF/pVT), immediate defibrillation takes absolute precedence over all pharmacological interventions.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['ACLS', 'Defibrillation', 'Ventricular Fibrillation', 'Adrenaline Timing']
  },
  {
    id: 'adr_q4',
    topicId: 'adrenaline_in_medicine',
    topicTitle: 'Use of Adrenaline in Medicine',
    questionNumber: 4,
    clinicalVignette: 'A 72-year-old man presents with dizziness and is found to have a high-grade AV block with a ventricular rate of 32 beats per minute. He is hypotensive (BP 78/45 mmHg), confused, and clammy. Which of the following is the most appropriate initial pharmacological drug for unstable bradycardia?',
    options: [
      { id: 'A', text: 'Adrenaline infusion as first-line drug' },
      { id: 'B', text: 'Atropine' },
      { id: 'C', text: 'Adenosine' },
      { id: 'D', text: 'Amiodarone' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Atropine',
    explanation: 'In the ACLS bradycardia algorithm, the initial first-line pharmacological agent for symptomatic/unstable bradycardia (hypotension, altered mental status, shock, ischemic chest pain) is intravenous Atropine (0.5–1.0 mg IV bolus up to maximum 3 mg). If atropine is ineffective, second-line options include transcutaneous pacing, adrenaline infusion (2–10 µg/min), or dopamine infusion.',
    optionRationales: {
      A: 'Adrenaline infusion is a second-line option if atropine and initial pacing fail.',
      B: 'Correct. Intravenous Atropine (0.5–1 mg) is the first-line drug for symptomatic acute bradycardia.',
      C: 'Adenosine blocks the AV node and would worsen high-grade heart block.',
      D: 'Amiodarone is an antiarrhythmic that slows conduction and is contraindicated in severe bradycardia.'
    },
    keyTakeaway: 'Intravenous Atropine (0.5–1.0 mg) is the first-line drug for unstable bradycardia; adrenaline infusion is reserved as a second-line escalation therapy.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['ACLS', 'Bradycardia', 'Atropine', 'AV Block']
  },
  {
    id: 'adr_q5',
    topicId: 'adrenaline_in_medicine',
    topicTitle: 'Use of Adrenaline in Medicine',
    questionNumber: 5,
    clinicalVignette: 'A 3-year-old child presents with a barking cough, hoarseness, severe inspiratory stridor at rest, subcostal and intercostal indrawing, and an oxygen saturation of 89% on room air. A diagnosis of severe croup (laryngotracheobronchitis) is made. Which of the following is the most appropriate intervention?',
    options: [
      { id: 'A', text: 'Intramuscular adrenaline' },
      { id: 'B', text: 'Nebulised adrenaline' },
      { id: 'C', text: 'Intravenous adrenaline bolus' },
      { id: 'D', text: 'Oral salbutamol' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Nebulised adrenaline',
    explanation: 'Severe croup with resting stridor, significant respiratory distress, and indrawing requires immediate Nebulized Adrenaline (L-adrenaline 1:1,000 or racemic adrenaline) combined with oral/IV dexamethasone. Adrenaline stimulates alpha-1 adrenergic receptors on subglottic mucosal arterioles, causing rapid vasoconstriction, reduction of mucosal edema, and prompt relief of airway obstruction.',
    optionRationales: {
      A: 'IM adrenaline is for anaphylaxis; nebulized route delivers high topical drug concentration directly to subglottic mucosa.',
      B: 'Correct. Nebulized adrenaline produces rapid alpha-1 vasoconstriction, dramatically reducing subglottic airway edema.',
      C: 'IV adrenaline boluses carry unacceptable risk of severe tachycardia and arrhythmias.',
      D: 'Salbutamol is ineffective for subglottic laryngeal edema in croup.'
    },
    keyTakeaway: 'Nebulized Adrenaline (1:1,000) provides rapid topical alpha-1 vasoconstriction to relieve life-threatening subglottic airway edema in severe croup.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Pediatric Croup', 'Nebulized Adrenaline', 'Stridor', 'Subglottic Edema']
  },

  // ----------------------------------------------------
  // COMPARISON OF CT SCAN & MRI IN STROKE MANAGEMENT (Pages 52-54)
  // ----------------------------------------------------
  {
    id: 'stroke_q1',
    topicId: 'stroke_imaging',
    topicTitle: 'Comparison of CT Scan & MRI in Stroke Management',
    questionNumber: 1,
    clinicalVignette: 'A 72-year-old man presents 90 minutes after sudden-onset right-sided hemiparesis and expressive aphasia. Blood pressure is 180/100 mmHg. Which is the most appropriate initial neuroimaging modality in this emergency setting?',
    options: [
      { id: 'A', text: 'MRI Brain with diffusion-weighted imaging (DWI)' },
      { id: 'B', text: 'CT Perfusion only' },
      { id: 'C', text: 'Non-contrast CT Brain' },
      { id: 'D', text: 'MRI Angiography' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Non-contrast CT Brain',
    explanation: 'The primary immediate goal in acute stroke evaluation within the thrombolytic window (<4.5 hours) is to rapidly differentiate ischemic stroke from acute intracerebral hemorrhage (ICH). Non-contrast computed tomography (NCCT) of the brain is the mandatory first-line modality because it is widely accessible, extremely fast (<1 minute), and has nearly 100% sensitivity for detecting acute intracranial hemorrhage, allowing immediate decision-making for IV thrombolysis.',
    optionRationales: {
      A: 'MRI is more sensitive for early ischemia but takes 15–30 minutes, has contraindications, and may delay thrombolysis.',
      B: 'CT perfusion alone without non-contrast CT is insufficient to exclude hemorrhage.',
      C: 'Correct. Non-contrast CT is the fastest, standard first-line neuroimaging to exclude hemorrhage prior to thrombolysis.',
      D: 'MRA evaluates vessel patency but does not provide immediate non-contrast parenchymal scan.'
    },
    keyTakeaway: 'Non-contrast Brain CT is the fastest, mandatory first-line neuroimaging modality in suspected acute stroke to rule out intracranial hemorrhage.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Acute Stroke', 'Non-Contrast CT', 'Thrombolysis Window', 'Emergency Imaging']
  },
  {
    id: 'stroke_q2',
    topicId: 'stroke_imaging',
    topicTitle: 'Comparison of CT Scan & MRI in Stroke Management',
    questionNumber: 2,
    clinicalVignette: 'A 59-year-old man presents with sudden vertigo, dysarthria, ataxia and vomiting. A non-contrast CT brain performed 2 hours after onset is normal. Which imaging modality is most sensitive for confirming the suspected diagnosis?',
    options: [
      { id: 'A', text: 'Repeat non-contrast CT after 24 hours' },
      { id: 'B', text: 'Skull X-ray' },
      { id: 'C', text: 'MRI Brain with diffusion-weighted imaging (DWI)' },
      { id: 'D', text: 'Electroencephalogram (EEG)' }
    ],
    correctOption: 'C',
    correctAnswerText: 'MRI Brain with diffusion-weighted imaging (DWI)',
    explanation: 'Non-contrast CT has very poor sensitivity (<20–30%) for detecting acute posterior fossa (brainstem and cerebellar) ischemic strokes due to beam-hardening artifacts from the dense petrous temporal bones. Diffusion-Weighted Imaging (DWI) on MRI detects cytotoxic edema within minutes of ischemia onset with >95% sensitivity and is the gold-standard modality for confirming acute brainstem/cerebellar infarction.',
    optionRationales: {
      A: 'Repeat CT is still prone to posterior fossa bone artifact obscuring small brainstem strokes.',
      B: 'Skull X-rays cannot evaluate brain parenchyma.',
      C: 'Correct. Diffusion-Weighted MRI (DWI) is the most sensitive imaging modality for acute posterior fossa and brainstem strokes.',
      D: 'EEG evaluates cortical electrical activity for seizures, not acute structural posterior circulation ischemia.'
    },
    keyTakeaway: 'Diffusion-Weighted MRI (DWI) is the most sensitive modality for acute posterior fossa (brainstem and cerebellum) ischemic strokes where CT is frequently normal.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Posterior Fossa Stroke', 'DWI MRI', 'Brainstem Ischemia', 'Neuroimaging']
  },
  {
    id: 'stroke_q3',
    topicId: 'stroke_imaging',
    topicTitle: 'Comparison of CT Scan & MRI in Stroke Management',
    questionNumber: 3,
    clinicalVignette: 'A patient presents with wake-up stroke (unknown onset time) and dense left hemiplegia. Which MRI finding helps identify salvageable brain tissue eligible for reperfusion therapy?',
    options: [
      { id: 'A', text: 'T2 hyperintensity without DWI lesion' },
      { id: 'B', text: 'Gradient echo (GRE) blooming artifact' },
      { id: 'C', text: 'DWI-FLAIR mismatch' },
      { id: 'D', text: 'Apparent diffusion coefficient (ADC) normalization' }
    ],
    correctOption: 'C',
    correctAnswerText: 'DWI-FLAIR mismatch',
    explanation: 'DWI-FLAIR mismatch (presence of an acute hyperintense lesion on DWI indicating cytotoxic edema, but NO corresponding parenchymal hyperintensity on FLAIR) indicates that the ischemic stroke has occurred within the preceding 4.5 hours (WAKE-UP trial protocol). This mismatch proves that the tissue is in the early salvageable window, allowing patients with unknown-onset/wake-up stroke to safely receive IV thrombolytic therapy (Alteplase).',
    optionRationales: {
      A: 'T2 hyperintensity without DWI lesion represents old chronic gliosis.',
      B: 'GRE blooming artifact indicates microbleeds or acute hemorrhage.',
      C: 'Correct. DWI-FLAIR mismatch identifies acute stroke within 4.5 hours, qualifying unknown-onset strokes for thrombolysis.',
      D: 'ADC normalization (pseudonormalization) occurs in subacute strokes (>1–2 weeks).'
    },
    keyTakeaway: 'DWI-FLAIR mismatch (positive DWI, negative FLAIR) establishes stroke onset within 4.5 hours, qualifying wake-up stroke patients for reperfusion therapy.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Wake-Up Stroke', 'DWI-FLAIR Mismatch', 'Thrombolysis', 'WAKE-UP Trial']
  },
  {
    id: 'stroke_q4',
    topicId: 'stroke_imaging',
    topicTitle: 'Comparison of CT Scan & MRI in Stroke Management',
    questionNumber: 4,
    clinicalVignette: 'A patient with acute ischemic stroke received IV thrombolytic therapy. 24 hours later, the patient develops worsening consciousness and severe headache. Which is the most appropriate imaging modality to evaluate for hemorrhagic transformation?',
    options: [
      { id: 'A', text: 'MRI Perfusion' },
      { id: 'B', text: 'Non-contrast CT Brain' },
      { id: 'C', text: 'Carotid Doppler ultrasound' },
      { id: 'D', text: 'PET Scan' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Non-contrast CT Brain',
    explanation: 'The most feared complication of IV thrombolysis is symptomatic intracranial hemorrhage (sICH). Any acute neurological deterioration (worsening GCS, severe headache, acute hypertension, vomiting) mandates immediate cessation of antithrombotics and emergency Non-Contrast CT Brain to detect hyperdense acute hemorrhagic transformation and mass effect.',
    optionRationales: {
      A: 'MRI perfusion takes too long in an acute deteriorating patient.',
      B: 'Correct. Non-contrast CT Brain is the fastest, definitive test to diagnose acute hemorrhagic transformation.',
      C: 'Carotid ultrasound evaluates extracranial vessel stenosis, not intracranial hemorrhage.',
      D: 'PET scan evaluates glucose metabolism and has no role in acute intracranial emergencies.'
    },
    keyTakeaway: 'Neurological deterioration following thrombolytic therapy requires immediate non-contrast CT brain to evaluate for hemorrhagic transformation.',
    sourcePageRef: '',
    difficulty: 'Core Clinical',
    tags: ['Post-Thrombolysis', 'Hemorrhagic Transformation', 'Non-Contrast CT', 'Stroke Complications']
  },
  {
    id: 'stroke_q5',
    topicId: 'stroke_imaging',
    topicTitle: 'Comparison of CT Scan & MRI in Stroke Management',
    questionNumber: 5,
    clinicalVignette: 'A 72-year-old woman presents with sudden severe headache, vomiting, and reduced level of consciousness. Emergency non-contrast CT shows a well-defined hyperdense lesion in the right basal ganglia with surrounding hypodense edema and midline shift. Which is the most likely diagnosis?',
    options: [
      { id: 'A', text: 'Middle cerebral artery territory ischemic infarction' },
      { id: 'B', text: 'Glioblastoma multiforme' },
      { id: 'C', text: 'Acute intracerebral hemorrhage' },
      { id: 'D', text: 'Brain abscess' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Acute intracerebral hemorrhage',
    explanation: 'On non-contrast CT, acute extravasated blood has high attenuation (50–80 Hounsfield Units) appearing distinctly bright/hyperdense due to concentrated globin protein. A hyperdense lesion in the deep basal ganglia (putamen/internal capsule) with surrounding hypodense vasogenic edema and mass effect in a hypertensive patient is the classic presentation of acute hypertensive Intracerebral Hemorrhage (ICH). Acute ischemic infarcts appear hypodense (dark), not hyperdense.',
    optionRationales: {
      A: 'Ischemic infarction appears hypodense (dark) on non-contrast CT.',
      B: 'Glioblastoma presents insidiously with ring-enhancing mass and central necrosis, not acute hyperdense clot.',
      C: 'Correct. Acute clot is distinctly hyperdense (bright white) on non-contrast CT; basal ganglia is the most common site of hypertensive ICH.',
      D: 'Brain abscess presents with fever, ring enhancement on contrast CT, and central hypodensity.'
    },
    keyTakeaway: 'Acute intracerebral hemorrhage appears as a distinctly hyperdense (bright) parenchymal lesion on non-contrast CT, commonly localized to the basal ganglia in hypertensive patients.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Intracerebral Hemorrhage', 'Basal Ganglia', 'Hyperdense CT', 'Hypertension']
  },

  // ----------------------------------------------------
  // BASIC LIFE SUPPORT (BLS) (Pages 77-79)
  // ----------------------------------------------------
  {
    id: 'bls_q1',
    topicId: 'basic_life_support',
    topicTitle: 'Basic Life Support (BLS)',
    questionNumber: 1,
    clinicalVignette: 'A 56-year-old man collapses suddenly at a gym. A bystander who is trained in BLS arrives at his side and finds that he is unresponsive. The patient is making occasional, irregular, snorting/agonal gasping respirations. Which of the following is the most appropriate next step in the BLS algorithm?',
    options: [
      { id: 'A', text: 'Give 2 rescue breaths before taking any further action' },
      { id: 'B', text: 'Check for a carotid pulse for at least 30 seconds' },
      { id: 'C', text: 'Activate the emergency response system and obtain an automated external defibrillator (AED)' },
      { id: 'D', text: 'Place the patient in the recovery position and observe' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Activate the emergency response system and obtain an automated external defibrillator (AED)',
    explanation: 'According to AHA and ERC BLS guidelines, agonal gasps are not normal breathing and are a sign of cardiac arrest. In an unresponsive victim with absent or abnormal (agonal) breathing, the rescuer must immediately activate the emergency response system (call for help/EMS) and retrieve an Automated External Defibrillator (AED) before commencing high-quality chest compressions at a rate of 100–120/min and depth of 5–6 cm.',
    optionRationales: {
      A: 'Rescue breaths before activating EMS or starting compressions violate the C-A-B resuscitation sequence.',
      B: 'Pulse checks by laypersons are not recommended; healthcare providers must spend no more than 10 seconds checking a pulse.',
      C: 'Correct. Immediately activate emergency response and retrieve an AED upon confirming unresponsiveness with agonal breathing.',
      D: 'The recovery position is only for responsive patients or those breathing normally; agonal gasping represents cardiac arrest.'
    },
    keyTakeaway: 'Agonal gasps indicate cardiac arrest; immediately activate emergency response and obtain an AED prior to commencing CPR.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['BLS', 'Agonal Gasping', 'EMS Activation', 'AED', 'Cardiac Arrest']
  },
  {
    id: 'bls_q2',
    topicId: 'basic_life_support',
    topicTitle: 'Basic Life Support (BLS)',
    questionNumber: 2,
    clinicalVignette: 'A 63-year-old man collapses in a hospital outpatient hallway. Rescuers initiate CPR, and an automated external defibrillator (AED) arrives. The pads are attached to the patient\'s bare chest. The AED analyzes the rhythm and announces, "Shock advised. Charging. Stand clear." Which of the following is the correct sequence of actions for the rescuers?',
    options: [
      { id: 'A', text: 'Continue chest compressions for 2 minutes before delivering the shock' },
      { id: 'B', text: 'Deliver the shock and immediately resume chest compressions' },
      { id: 'C', text: 'Check the carotid pulse immediately after shock delivery before resuming compressions' },
      { id: 'D', text: 'Administer intravenous adrenaline before delivering the shock' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Deliver the shock and immediately resume chest compressions',
    explanation: 'When an AED advises a shock: (1) ensure all rescuers are clear of the patient, (2) push the shock button to deliver defibrillation, and (3) immediately resume chest compressions starting with compressions (do NOT pause to re-check rhythm or pulse). The myocardium is stunned post-shock and requires immediate circulatory support for 2 minutes before the AED performs its next rhythm analysis.',
    optionRationales: {
      A: 'Shock delivery must occur promptly once advised; do not delay defibrillation.',
      B: 'Correct. Clear the patient, deliver the shock, and immediately resume chest compressions without pausing for a pulse check.',
      C: 'Pausing to check the pulse immediately post-shock wastes critical perfusion time; CPR must resume immediately.',
      D: 'Drug administration is part of ACLS and must never delay defibrillation.'
    },
    keyTakeaway: 'Immediately after delivering an AED defibrillation shock, resume chest compressions starting with compressions without checking for a pulse.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['BLS', 'AED Shock', 'Chest Compressions', 'Post-Defibrillation CPR']
  },
  {
    id: 'bls_q3',
    topicId: 'basic_life_support',
    topicTitle: 'Basic Life Support (BLS)',
    questionNumber: 3,
    clinicalVignette: 'A medical student is performing chest compressions during a resuscitation attempt in the emergency department. After 90 seconds of continuous compressions, the student\'s compression rate is slowing, and depth has decreased below 5 cm due to physical fatigue. Which intervention is most effective to maintain high-quality CPR?',
    options: [
      { id: 'A', text: 'Increase the target compression rate to 140–160 compressions per minute' },
      { id: 'B', text: 'Allow longer pauses between compression cycles every 30 seconds' },
      { id: 'C', text: 'Switch compressors approximately every 2 minutes (or every 5 cycles)' },
      { id: 'D', text: 'Change the compression-to-ventilation ratio from 30:2 to 15:2' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Switch compressors approximately every 2 minutes (or every 5 cycles)',
    explanation: 'Rescuer fatigue develops rapidly within 1–2 minutes of continuous chest compressions, leading to progressive reduction in compression depth (<5 cm), inadequate coronary perfusion pressure, and reduced ROSC rates (even when the rescuer does not perceive fatigue). To maintain high-quality CPR, guidelines mandate rotating the compressor role every 2 minutes (or every 5 cycles of 30:2 CPR), taking less than 5 seconds to switch.',
    optionRationales: {
      A: 'Excessive rate (>120/min) impairs ventricular refill time and reduces stroke volume.',
      B: 'Pauses in compressions cause an immediate collapse in coronary perfusion pressure.',
      C: 'Correct. Switching compressors every 2 minutes prevents fatigue and preserves adequate compression depth (>5 cm).',
      D: '15:2 is the two-rescuer pediatric CPR ratio; the adult ratio remains 30:2.'
    },
    keyTakeaway: 'Compressors must switch every 2 minutes (or every 5 cycles of 30:2) to prevent fatigue and maintain effective compression depth and coronary perfusion.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['CPR Quality', 'Compressor Rotation', 'BLS Guidelines', 'Fatigue Prevention']
  },
  {
    id: 'bls_q4',
    topicId: 'basic_life_support',
    topicTitle: 'Basic Life Support (BLS)',
    questionNumber: 4,
    clinicalVignette: 'A 29-year-old man is found unresponsive in a public restroom with pinpoint pupils, agonal gasping respirations, and no carotid pulse. An empty syringe is found nearby. A bystander arrives with an AED and an intranasal naloxone kit. Which of the following describes the most appropriate priority approach in this patient?',
    options: [
      { id: 'A', text: 'Administer naloxone and wait for spontaneous recovery before starting CPR' },
      { id: 'B', text: 'Perform CPR and use the AED as indicated; naloxone may be given if available' },
      { id: 'C', text: 'Administer naloxone only because chest compressions are contraindicated in opioid arrest' },
      { id: 'D', text: 'Administer intravenous sodium bicarbonate before any airway maneuvers' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Perform CPR and use the AED as indicated; naloxone may be given if available',
    explanation: 'In a patient with cardiac arrest (unresponsive and pulseless), standard high-quality BLS (immediate chest compressions, AED rhythm analysis, and ventilations) is the overriding priority. While naloxone can reverse opioid-induced respiratory depression in a patient with a pulse, naloxone does not treat cardiac arrest. Resuscitation (CPR and AED) must not be delayed or interrupted to administer naloxone.',
    optionRationales: {
      A: 'Waiting for naloxone in pulseless cardiac arrest causes irreversible brain death; CPR takes priority.',
      B: 'Correct. Standard BLS (CPR + AED) is the primary priority in cardiac arrest; naloxone can be given concurrently without interrupting CPR.',
      C: 'Compressions are never contraindicated in pulseless cardiac arrest.',
      D: 'Sodium bicarbonate is not indicated in standard BLS and never delays CPR.'
    },
    keyTakeaway: 'In pulseless opioid-associated cardiac arrest, high-quality CPR and early AED defibrillation take priority over naloxone administration.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Opioid Arrest', 'BLS Priorities', 'Naloxone', 'CPR vs Naloxone']
  },
  {
    id: 'bls_q5',
    topicId: 'basic_life_support',
    topicTitle: 'Basic Life Support (BLS)',
    questionNumber: 5,
    clinicalVignette: 'An unresponsive patient is found to have respiratory arrest (no spontaneous breathing) but a definite strong carotid pulse is present at 68 beats per minute. Opioid overdose is suspected. What is the most appropriate next step in management?',
    options: [
      { id: 'A', text: 'Perform chest compressions only without ventilation' },
      { id: 'B', text: 'Provide rescue ventilations and consider naloxone' },
      { id: 'C', text: 'Defibrillate immediately with the AED' },
      { id: 'D', text: 'Give intravenous atropine and observe' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Provide rescue ventilations and consider naloxone',
    explanation: 'When an unresponsive patient has a definite palpable pulse (>= 60 bpm) but absent or inadequate spontaneous breathing, the patient is in Respiratory Arrest (not cardiac arrest). The immediate priority is opening the airway and delivering rescue ventilations (1 breath every 5–6 seconds, or 10–12 breaths/min) using a bag-mask device with oxygen, and administering Naloxone (IN, IM, or IV) if opioid toxicity is suspected. Recheck the pulse every 2 minutes.',
    optionRationales: {
      A: 'Chest compressions are indicated only when a pulse is absent (<60 bpm with poor perfusion in infants).',
      B: 'Correct. Provide rescue breaths (1 breath every 5–6s) and administer naloxone for suspected opioid respiratory arrest with a pulse.',
      C: 'Defibrillation is only for shockable pulseless cardiac arrest rhythms (VF/pVT).',
      D: 'Atropine is for unstable bradycardia; the heart rate is normal (68 bpm).'
    },
    keyTakeaway: 'In respiratory arrest with a palpable pulse, provide rescue breathing (1 breath every 5–6 seconds) and administer naloxone for suspected opioid overdose.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Respiratory Arrest', 'Rescue Breathing', 'Opioid Overdose', 'BLS Ventilation']
  }
];
