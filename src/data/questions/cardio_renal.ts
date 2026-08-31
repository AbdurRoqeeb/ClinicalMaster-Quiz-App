import { Question } from '../../types';

export const CARDIO_RENAL_QUESTIONS: Question[] = [
  // ----------------------------------------------------
  // SYNOPSIS OF ANTIHYPERTENSIVE DRUGS (Pages 13-15)
  // ----------------------------------------------------
  {
    id: 'antihtn_q1',
    topicId: 'antihypertensive_drugs',
    topicTitle: 'Synopsis of Antihypertensive Drugs',
    questionNumber: 1,
    clinicalVignette: 'A 62-year-old man develops bilateral ankle swelling four weeks after starting amlodipine. His physician adds lisinopril to his regimen, which resolves the edema. By what hemodynamic mechanism does lisinopril alleviate this specific adverse effect?',
    options: [
      { id: 'A', text: 'Increased systemic sodium excretion via the proximal tubule' },
      { id: 'B', text: 'Dilation of post-capillary venules, normalizing capillary pressure' },
      { id: 'C', text: 'Constriction of pre-capillary arterioles, decreasing extremity blood flow' },
      { id: 'D', text: 'Increased oncotic pressure of the intravascular fluid compartment' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Dilation of post-capillary venules, normalizing capillary pressure',
    explanation: 'Dihydropyridine calcium channel blockers (Amlodipine) cause selective pre-capillary arteriolar vasodilation without dilating post-capillary venules, leading to increased intracapillary hydrostatic pressure and fluid transudation (peripheral edema). ACE inhibitors (Lisinopril) dilate post-capillary venules, normalizing the transcapillary pressure gradient and resolving the dependent edema.',
    optionRationales: {
      A: 'ACE inhibitors work primarily on the renin-angiotensin system and efferent/venular tone, not primary proximal tubule natriuresis.',
      B: 'Correct. ACE inhibitors dilate post-capillary venules, relieving the elevated intracapillary hydrostatic pressure caused by CCBs.',
      C: 'Lisinopril does not constrict pre-capillary arterioles.',
      D: 'Lisinopril does not increase serum albumin or oncotic pressure.'
    },
    keyTakeaway: 'ACE inhibitors relieve CCB-induced peripheral edema by dilating post-capillary venules and normalizing intracapillary pressure.',
    sourcePageRef: 'Page 13, Q1',
    difficulty: 'High Yield',
    tags: ['Antihypertensives', 'Amlodipine Edema', 'ACE Inhibitors', 'Hemodynamics']
  },
  {
    id: 'antihtn_q2',
    topicId: 'antihypertensive_drugs',
    topicTitle: 'Synopsis of Antihypertensive Drugs',
    questionNumber: 2,
    clinicalVignette: 'A 68-year-old man with benign prostatic hyperplasia and newly diagnosed hypertension is prescribed a single medication to manage both conditions. The morning after taking his first pill, he stands up from bed, becomes severely dizzy, and briefly loses consciousness. Which of the following drugs was most likely prescribed?',
    options: [
      { id: 'A', text: 'Metoprolol' },
      { id: 'B', text: 'Doxazosin' },
      { id: 'C', text: 'Clonidine' },
      { id: 'D', text: 'Hydrochlorothiazide' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Doxazosin',
    explanation: 'Doxazosin is a selective alpha-1 adrenergic receptor antagonist used to treat both hypertension and BPH (relaxing prostatic smooth muscle). It is notoriously associated with the "first-dose phenomenon"—severe orthostatic hypotension, reflex pooling of blood, and syncope shortly after initiation. It should be started at a low dose at bedtime.',
    optionRationales: {
      A: 'Metoprolol is a beta-1 blocker that does not relieve BPH symptoms.',
      B: 'Correct. Doxazosin is an alpha-1 blocker treating BPH + HTN that causes marked first-dose orthostatic syncope.',
      C: 'Clonidine is a central alpha-2 agonist causing rebound hypertension upon abrupt withdrawal, not BPH relief.',
      D: 'Hydrochlorothiazide is a thiazide diuretic with no efficacy for prostatic outflow obstruction.'
    },
    keyTakeaway: 'Alpha-1 blockers (Doxazosin, Prazosin) treat BPH and HTN but can provoke severe first-dose orthostatic syncope.',
    sourcePageRef: 'Page 14, Q2',
    difficulty: 'Core Clinical',
    tags: ['Doxazosin', 'BPH', 'First-Dose Phenomenon', 'Orthostatic Hypotension']
  },
  {
    id: 'antihtn_q3',
    topicId: 'antihypertensive_drugs',
    topicTitle: 'Synopsis of Antihypertensive Drugs',
    questionNumber: 3,
    clinicalVignette: 'A 65-year-old woman with hypertension, currently well-controlled on verapamil, is prescribed a second antihypertensive agent. Three days later, she presents to the ER with severe fatigue and an ECG showing 3rd-degree AV block (HR 32 bpm). Which medication was most likely added?',
    options: [
      { id: 'A', text: 'Losartan' },
      { id: 'B', text: 'Chlorthalidone' },
      { id: 'C', text: 'Metoprolol' },
      { id: 'D', text: 'Hydralazine' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Metoprolol',
    explanation: 'Verapamil is a non-dihydropyridine calcium channel blocker with negative inotropic, chronotropic, and dromotropic (AV nodal slowing) effects. Combining verapamil with a beta-blocker (Metoprolol) creates synergistic suppression of the SA and AV nodes, frequently precipitating severe bradycardia, high-grade or complete (3rd-degree) AV block, and asystole.',
    optionRationales: {
      A: 'Losartan is an ARB with no direct AV nodal conduction depressant properties.',
      B: 'Chlorthalidone is a thiazide-like diuretic that does not slow AV nodal conduction.',
      C: 'Correct. Co-administration of non-DHP CCBs (Verapamil/Diltiazem) with beta-blockers (Metoprolol) is a dangerous contraindication due to synergistic AV block.',
      D: 'Hydralazine is a direct vasodilator that triggers reflex tachycardia, not AV block.'
    },
    keyTakeaway: 'Concomitant use of Verapamil and Beta-blockers (Metoprolol) is contraindicated due to severe additive AV block and profound bradycardia.',
    sourcePageRef: 'Page 14, Q3',
    difficulty: 'High Yield',
    tags: ['Verapamil', 'Beta-Blockers', 'AV Block', 'Drug Interactions']
  },
  {
    id: 'antihtn_q4',
    topicId: 'antihypertensive_drugs',
    topicTitle: 'Synopsis of Antihypertensive Drugs',
    questionNumber: 4,
    clinicalVignette: 'A 45-year-old woman taking an oral direct arteriolar vasodilator for severe hypertension develops new-onset joint pain, a facial rash, and positive anti-histone antibodies. Which medication is she most likely taking?',
    options: [
      { id: 'A', text: 'Minoxidil' },
      { id: 'B', text: 'Hydralazine' },
      { id: 'C', text: 'Clonidine' },
      { id: 'D', text: 'Amlodipine' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Hydralazine',
    explanation: 'Hydralazine (a direct arteriolar vasodilator) is classic for causing Drug-Induced Lupus Erythematosus (DILE), especially in slow hepatic acetylators and at doses exceeding 200 mg/day. It presents with arthralgias, fever, serositis, and cutaneous rash, and characteristically tests positive for Anti-Histone Antibodies (>95% of cases).',
    optionRationales: {
      A: 'Minoxidil causes hypertrichosis, fluid retention, and pericardial effusion, not drug-induced lupus.',
      B: 'Correct. Hydralazine is a classic cause of drug-induced lupus characterized by positive anti-histone antibodies.',
      C: 'Clonidine causes dry mouth, sedation, and rebound hypertension.',
      D: 'Amlodipine causes peripheral edema and gingival hyperplasia.'
    },
    keyTakeaway: 'Hydralazine is classically associated with Drug-Induced Lupus Erythematosus (DILE) and positive anti-histone antibodies.',
    sourcePageRef: 'Pages 14–15, Q4',
    difficulty: 'High Yield',
    tags: ['Hydralazine', 'Drug-Induced Lupus', 'Anti-Histone', 'Adverse Effects']
  },
  {
    id: 'antihtn_q5',
    topicId: 'antihypertensive_drugs',
    topicTitle: 'Synopsis of Antihypertensive Drugs',
    questionNumber: 5,
    clinicalVignette: 'A 70-year-old man with severe peripheral artery disease starts a new antihypertensive. One week later, his serum creatinine spikes from 1.2 to 2.9 mg/dL. Imaging confirms bilateral renal artery stenosis. What specific physiologic effect of the new drug caused this acute kidney injury?',
    options: [
      { id: 'A', text: 'Constriction of the afferent arteriole' },
      { id: 'B', text: 'Dilation of the efferent arteriole' },
      { id: 'C', text: 'Dilation of the afferent arteriole' },
      { id: 'D', text: 'Constriction of the efferent arteriole' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Dilation of the efferent arteriole',
    explanation: 'In bilateral renal artery stenosis, pre-glomerular perfusion pressure is critically low. Glomerular Filtration Rate (GFR) is maintained by angiotensin II-mediated vasoconstriction of the efferent arteriole. When an ACE inhibitor or ARB is administered, angiotensin II production/action is blocked, resulting in selective Dilation of the efferent arteriole, precipitous loss of transglomerular capillary hydrostatic pressure, and acute kidney injury.',
    optionRationales: {
      A: 'NSAIDs constrict the afferent arteriole by blocking prostaglandin synthesis.',
      B: 'Correct. ACE inhibitors/ARBs inhibit angiotensin II, dilating efferent arterioles and collapsing GFR in bilateral RAS.',
      C: 'Prostaglandins dilate the afferent arteriole.',
      D: 'Angiotensin II naturally constricts the efferent arteriole; the drug blocks this effect.'
    },
    keyTakeaway: 'ACE inhibitors/ARBs cause acute renal failure in bilateral renal artery stenosis by dilating the efferent arteriole and collapsing glomerular filtration pressure.',
    sourcePageRef: 'Page 15, Q5',
    difficulty: 'High Yield',
    tags: ['Renal Artery Stenosis', 'Efferent Arteriole', 'ACE Inhibitors', 'Hemodynamics']
  },

  // ----------------------------------------------------
  // INTERPRETATION OF ARTERIAL BLOOD GASES (Pages 16-18)
  // ----------------------------------------------------
  {
    id: 'abg_q1',
    topicId: 'abg_interpretation',
    topicTitle: 'Interpretation of Arterial Blood Gases',
    questionNumber: 1,
    clinicalVignette: 'A 35-year-old woman presents with persistent vomiting for 3 days following an episode of severe gastroenteritis. She is dehydrated and complains of generalized weakness. Her arterial blood gas shows: pH: 7.52, PaCO₂: 40 mmHg, HCO₃⁻: 32 mmol/L. What is the most appropriate interpretation of these findings?',
    options: [
      { id: 'A', text: 'Uncompensated metabolic alkalosis' },
      { id: 'B', text: 'Partially compensated metabolic alkalosis' },
      { id: 'C', text: 'Uncompensated respiratory alkalosis' },
      { id: 'D', text: 'Fully compensated metabolic alkalosis' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Uncompensated metabolic alkalosis',
    explanation: 'pH is 7.52 (>7.45 = alkalemia). HCO3- is 32 mmol/L (>26 mmol/L = primary metabolic disorder). PaCO2 is 40 mmHg (normal reference 35–45 mmHg), indicating that the respiratory system has not yet mounted hypoventilatory compensation (expected PaCO2 rise). Therefore, this is an uncompensated metabolic alkalosis.',
    optionRationales: {
      A: 'Correct. High pH + high HCO3 with normal PaCO2 = Uncompensated metabolic alkalosis.',
      B: 'Partial compensation requires PaCO2 to be elevated above 45 mmHg with abnormal pH.',
      C: 'Respiratory alkalosis requires a low PaCO2 (<35 mmHg).',
      D: 'Full compensation requires a normalized pH (7.35–7.45).'
    },
    keyTakeaway: 'Alkalemia with elevated HCO3 and normal PaCO2 represents uncompensated metabolic alkalosis.',
    sourcePageRef: 'Page 16, Q1',
    difficulty: 'Core Clinical',
    tags: ['ABG', 'Metabolic Alkalosis', 'Vomiting', 'Acid-Base']
  },
  {
    id: 'abg_q2',
    topicId: 'abg_interpretation',
    topicTitle: 'Interpretation of Arterial Blood Gases',
    questionNumber: 2,
    clinicalVignette: 'A 41 year old woman presents with sudden-onset pleuritic chest pain and severe shortness of breath. She is tachypnoeic with a respiratory rate of 34 breaths/min. Pulmonary embolism is suspected. ABG shows: pH: 7.52, PaCO₂: 28 mmHg, HCO₃⁻: 24 mmol/L. What is the most appropriate interpretation?',
    options: [
      { id: 'A', text: 'Uncompensated respiratory alkalosis' },
      { id: 'B', text: 'Partially compensated respiratory alkalosis' },
      { id: 'C', text: 'Uncompensated metabolic alkalosis' },
      { id: 'D', text: 'Fully compensated respiratory alkalosis' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Uncompensated respiratory alkalosis',
    explanation: 'pH is 7.52 (>7.45 = alkalemia). PaCO2 is 28 mmHg (<35 mmHg = primary respiratory alkalosis due to tachypneic hyperventilation blowing off CO2 in PE). HCO3- is 24 mmol/L (normal 22–26 mmol/L), showing that renal compensation (bicarbonate excretion, which takes 24–48 hours) has not occurred. Thus, this is acute uncompensated respiratory alkalosis.',
    optionRationales: {
      A: 'Correct. High pH + low PaCO2 + normal HCO3 = Uncompensated (acute) respiratory alkalosis.',
      B: 'Partially compensated respiratory alkalosis requires low HCO3 (<22 mmol/L).',
      C: 'HCO3 is normal, so the primary defect is not metabolic.',
      D: 'Full compensation requires normal pH.'
    },
    keyTakeaway: 'Hyperventilation in acute pulmonary embolism causes acute uncompensated respiratory alkalosis (high pH, low PaCO2, normal HCO3).',
    sourcePageRef: 'Page 16, Q2',
    difficulty: 'Core Clinical',
    tags: ['ABG', 'Respiratory Alkalosis', 'Pulmonary Embolism', 'Hyperventilation']
  },
  {
    id: 'abg_q3',
    topicId: 'abg_interpretation',
    topicTitle: 'Interpretation of Arterial Blood Gases',
    questionNumber: 3,
    clinicalVignette: 'A 68-year-old man with a 40-pack-year smoking history is brought to the emergency department with severe shortness of breath, reduced level of consciousness, and shallow breathing. He has a known history of chronic obstructive pulmonary disease. Arterial blood gas analysis shows: pH: 7.28, PaCO₂: 55 mmHg, HCO₃⁻: 24 mmol/L. Which of the following is the most appropriate interpretation of this arterial blood gas?',
    options: [
      { id: 'A', text: 'Uncompensated metabolic acidosis' },
      { id: 'B', text: 'Partially compensated respiratory acidosis' },
      { id: 'C', text: 'Uncompensated respiratory acidosis' },
      { id: 'D', text: 'Fully compensated respiratory acidosis' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Uncompensated respiratory acidosis',
    explanation: 'pH is 7.28 (<7.35 = acidemia). PaCO2 is 55 mmHg (>45 mmHg = respiratory acidosis due to acute hypoventilation/CO2 retention). HCO3- is 24 mmol/L (normal reference 22–26 mmol/L), proving absence of renal metabolic compensation. This represents acute uncompensated respiratory acidosis.',
    optionRationales: {
      A: 'Metabolic acidosis requires a low HCO3- (<22 mmol/L).',
      B: 'Partial compensation requires an elevated HCO3- (>26 mmol/L).',
      C: 'Correct. Low pH + elevated PaCO2 + normal HCO3- = Acute uncompensated respiratory acidosis.',
      D: 'Full compensation requires a normal pH.'
    },
    keyTakeaway: 'Acidemia with elevated PaCO2 and normal HCO3 indicates acute uncompensated respiratory acidosis.',
    sourcePageRef: 'Pages 16–17, Q3',
    difficulty: 'Core Clinical',
    tags: ['ABG', 'Respiratory Acidosis', 'COPD Exacerbation']
  },
  {
    id: 'abg_q4',
    topicId: 'abg_interpretation',
    topicTitle: 'Interpretation of Arterial Blood Gases',
    questionNumber: 4,
    clinicalVignette: 'A 70-year-old man with long-standing COPD presents for routine follow-up. He has chronic exertional dyspnea but no acute deterioration. His arterial blood gas shows: pH: 7.36, PaCO₂: 55 mmHg, HCO₃⁻: 29 mmol/L. Which of the following is the most appropriate interpretation?',
    options: [
      { id: 'A', text: 'Uncompensated respiratory acidosis' },
      { id: 'B', text: 'Partially compensated respiratory acidosis' },
      { id: 'C', text: 'Fully compensated respiratory acidosis' },
      { id: 'D', text: 'Fully compensated metabolic alkalosis' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Fully compensated respiratory acidosis',
    explanation: 'pH is 7.36 (within the normal reference range 7.35–7.45, but on the acid side of 7.40). PaCO2 is elevated at 55 mmHg (chronic primary respiratory acidosis). HCO3- is elevated at 29 mmol/L (>26 mmol/L), indicating that chronic renal bicarbonate retention has successfully returned the pH to normal. This defines chronic fully compensated respiratory acidosis.',
    optionRationales: {
      A: 'Uncompensated acidosis would have an abnormal acidemic pH with normal HCO3.',
      B: 'Partially compensated states still have an abnormal pH (<7.35).',
      C: 'Correct. Normal pH (7.36) with elevated PaCO2 and elevated HCO3 = Fully compensated respiratory acidosis.',
      D: 'The primary underlying pathology in COPD is chronic alveolar hypoventilation (respiratory), not primary metabolic alkalosis.'
    },
    keyTakeaway: 'A normal pH (7.35–7.45) with elevated PaCO2 and elevated HCO3 represents chronic fully compensated respiratory acidosis.',
    sourcePageRef: 'Page 17, Q4',
    difficulty: 'High Yield',
    tags: ['ABG', 'Compensated Respiratory Acidosis', 'COPD', 'Renal Compensation']
  },
  {
    id: 'abg_q5',
    topicId: 'abg_interpretation',
    topicTitle: 'Interpretation of Arterial Blood Gases',
    questionNumber: 5,
    clinicalVignette: 'A 58-year-old man is brought to the emergency department with severe drowsiness and shallow breathing after receiving an excessive dose of opioid analgesics. His respiratory rate is 8 breaths/min. ABG shows: pH: 7.25, PaCO₂: 60 mmHg, HCO₃⁻: 24 mmol/L. What is the most likely acid–base disturbance?',
    options: [
      { id: 'A', text: 'Uncompensated metabolic acidosis' },
      { id: 'B', text: 'Uncompensated respiratory acidosis' },
      { id: 'C', text: 'Partially compensated respiratory acidosis' },
      { id: 'D', text: 'Fully compensated respiratory acidosis' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Uncompensated respiratory acidosis',
    explanation: 'Opioid toxicity suppresses the brainstem respiratory center, causing severe bradypnea (RR 8/min), alveolar hypoventilation, and rapid acute CO2 retention. The ABG shows acidemia (pH 7.25), hypercapnia (PaCO2 60 mmHg), and normal bicarbonate (HCO3 24 mmol/L), confirming acute uncompensated respiratory acidosis.',
    optionRationales: {
      A: 'Metabolic acidosis would show low HCO3- (<22 mmol/L).',
      B: 'Correct. Acute hypoventilation with high PaCO2, acidemia, and normal bicarbonate = Uncompensated respiratory acidosis.',
      C: 'Partial compensation requires elevated bicarbonate (>26 mmol/L).',
      D: 'Full compensation requires normal pH (7.35–7.45).'
    },
    keyTakeaway: 'Acute opioid overdose suppresses central respiratory drive, causing acute uncompensated respiratory acidosis.',
    sourcePageRef: 'Pages 17–18, Q5',
    difficulty: 'Core Clinical',
    tags: ['Opioid Overdose', 'ABG', 'Respiratory Acidosis', 'Hypoventilation']
  },

  // ----------------------------------------------------
  // ECG FEATURES OF ELECTROLYTE DERANGEMENTS (Pages 30-32)
  // ----------------------------------------------------
  {
    id: 'ecg_q1',
    topicId: 'ecg_electrolytes',
    topicTitle: 'ECG Features of Electrolyte Derangements',
    questionNumber: 1,
    clinicalVignette: 'A 68-year-old man with chronic kidney disease presents with generalised weakness and intermittent palpitations. He has been taking lisinopril and spironolactone. Laboratory investigation shows: Na+: 138 mmol/L, HCO3: 19mmol/L, Creatinine: 420 micromol/L and ECG shows tall, narrow, peaked T-waves, PR prolongation and QRS widening. Which of the following best explains the progression of ECG abnormalities in this patient?',
    options: [
      { id: 'A', text: 'Increased calcium influx during phase ii of the cardiac action potential.' },
      { id: 'B', text: 'Progressive membrane Depolarization causing sodium channel in-activation.' },
      { id: 'C', text: 'Delayed calcium channel closure during ventricular repolarization' },
      { id: 'D', text: 'Increased sodium potassium ATPase activity' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Progressive membrane Depolarization causing sodium channel in-activation.',
    explanation: 'Elevated extracellular potassium decreases the transmembrane potassium gradient, shifting the resting membrane potential to a less negative (more depolarized) level. This baseline resting membrane depolarization causes progressive voltage-gated fast Sodium (Na+) channel inactivation, resulting in slowed Phase 0 upstroke, delayed intraventricular conduction (PR prolongation, QRS widening, sine wave pattern), and loss of P waves.',
    optionRationales: {
      A: 'Calcium influx during Phase 2 is not the driver of QRS widening in hyperkalemia.',
      B: 'Correct. Baseline membrane depolarization inactives fast Na+ channels, slowing cardiac conduction.',
      C: 'Delayed calcium closure causes long QT, not peaked T waves or QRS widening.',
      D: 'Hyperkalemia does not primarily manifest as increased ATPase activity causing block.'
    },
    keyTakeaway: 'Hyperkalemia causes baseline resting membrane depolarization, leading to fast sodium channel inactivation and slowed cardiac conduction.',
    sourcePageRef: 'Pages 30–31, Q1',
    difficulty: 'Advanced',
    tags: ['Hyperkalemia', 'Electrophysiology', 'Sodium Channels', 'ECG']
  },
  {
    id: 'ecg_q2',
    topicId: 'ecg_electrolytes',
    topicTitle: 'ECG Features of Electrolyte Derangements',
    questionNumber: 2,
    clinicalVignette: 'A 42-year-old woman with history of hypertension with a chlorthalidone presents with palpitation and leg cramps. Her ECG shows a normal sinus rhythm with an apparent prolongation of the QT interval, upon closer inspection, the T wave is relatively flat and there is positive deflection immediately following it, before the next P wave. What is the most likely cause of this ECG finding?',
    options: [
      { id: 'A', text: 'Delta wave formation' },
      { id: 'B', text: 'T-wave Inversion' },
      { id: 'C', text: 'Osborne J Waves' },
      { id: 'D', text: 'Prominent U waves' }
    ],
    correctOption: 'D',
    correctAnswerText: 'Prominent U waves',
    explanation: 'Thiazide diuretics (Chlorthalidone) cause urinary potassium and magnesium wasting, resulting in hypokalemia. Classic ECG findings of hypokalemia include ST-segment depression, flattening or inversion of T waves, and prominent U waves (a positive deflection immediately following the T wave, often merging to create pseudo-prolongation of the QT interval, known as a QU interval).',
    optionRationales: {
      A: 'Delta waves are slurred QRS upstrokes seen in Wolff-Parkinson-White syndrome.',
      B: 'T-wave inversion alone does not account for the separate distinct positive post-T wave deflection.',
      C: 'Osborn (J) waves are positive deflections at the J-point seen in severe hypothermia.',
      D: 'Correct. Prominent U waves appearing after flat T waves are the classic hallmark of hypokalemia.'
    },
    keyTakeaway: 'Hypokalemia produces ST depression, flattened T waves, and prominent U waves (often mistaken for prolonged QT).',
    sourcePageRef: 'Page 31, Q2',
    difficulty: 'High Yield',
    tags: ['Hypokalemia', 'Prominent U Waves', 'ECG', 'Chlorthalidone']
  },
  {
    id: 'ecg_q3',
    topicId: 'ecg_electrolytes',
    topicTitle: 'ECG Features of Electrolyte Derangements',
    questionNumber: 3,
    clinicalVignette: 'A 55-year-old man with Sarcoidosis presents with constipation, Polyuria and confusion. His serum calcium is 14.2mg/dl. Which of the following ECG findings is most likely to be present in this patient?',
    options: [
      { id: 'A', text: 'Wide QRS complex' },
      { id: 'B', text: 'Prolonged QT interval' },
      { id: 'C', text: 'Peaked T Waves' },
      { id: 'D', text: 'Shortened QT interval' }
    ],
    correctOption: 'D',
    correctAnswerText: 'Shortened QT interval',
    explanation: 'Hypercalcemia (here 14.2 mg/dL secondary to 1-alpha-hydroxylase production in sarcoid granulomas) accelerates Phase 2 plateau and Phase 3 repolarization of the cardiac action potential, resulting in shortening of the ST segment and a classically Shortened QTc interval.',
    optionRationales: {
      A: 'Widened QRS is typical of hyperkalemia, bundle branch blocks, or sodium channel toxicity.',
      B: 'Prolonged QT interval is caused by hypocalcemia, hypokalemia, and hypomagnesemia.',
      C: 'Peaked T waves are the hallmark of hyperkalemia.',
      D: 'Correct. Hypercalcemia shortens the duration of cardiac Phase 2 plateau, producing a shortened QT interval.'
    },
    keyTakeaway: 'Hypercalcemia accelerates cardiac repolarization, producing a classically shortened QT interval.',
    sourcePageRef: 'Pages 31–32, Q3',
    difficulty: 'High Yield',
    tags: ['Hypercalcemia', 'Shortened QT', 'Sarcoidosis', 'ECG']
  },
  {
    id: 'ecg_q4',
    topicId: 'ecg_electrolytes',
    topicTitle: 'ECG Features of Electrolyte Derangements',
    questionNumber: 4,
    clinicalVignette: 'A patient with a history of total thyroidectomy presents with perioral numbness and a positive Trousseau sign. The ECG reveals a QTc interval of 520ms. Which specific portion of the ECG is primarily responsible for this prolongation?',
    options: [
      { id: 'A', text: 'T wave duration' },
      { id: 'B', text: 'ST segment Length.' },
      { id: 'C', text: 'QRS complex width' },
      { id: 'D', text: 'PR interval length' }
    ],
    correctOption: 'B',
    correctAnswerText: 'ST segment Length.',
    explanation: 'Iatrogenic hypoparathyroidism post-thyroidectomy causes acute hypocalcemia (perioral numbness, tetany, positive Trousseau sign). Hypocalcemia selectively prolongs Phase 2 of the cardiac action potential (inward Ca2+ plateau) without altering Phase 3 repolarization. On the surface ECG, this selectively elongates the ST segment length while leaving T wave morphology and duration unchanged.',
    optionRationales: {
      A: 'T wave duration is unchanged in pure hypocalcemia.',
      B: 'Correct. Hypocalcemia lengthens the action potential Phase 2 plateau, prolonging the ST segment length.',
      C: 'QRS width reflects Phase 0 depolarization and is unaffected.',
      D: 'PR interval reflects AV nodal conduction and is not the primary site of QTc prolongation.'
    },
    keyTakeaway: 'Hypocalcemia prolongs the QTc interval specifically by lengthening the ST segment, while preserving T wave morphology.',
    sourcePageRef: 'Page 32, Q4',
    difficulty: 'High Yield',
    tags: ['Hypocalcemia', 'ST Segment', 'Long QT', 'Trousseau Sign']
  },
  {
    id: 'ecg_q5',
    topicId: 'ecg_electrolytes',
    topicTitle: 'ECG Features of Electrolyte Derangements',
    questionNumber: 5,
    clinicalVignette: 'A 45-year-old male with end stage renal disease presents to the emergency department with generalized muscle weakness and palpitation. ECG findings include a tall peaked T-wave and a widened QRS complex. What is the next step of management?',
    options: [
      { id: 'A', text: 'Intravenous calcium gluconate' },
      { id: 'B', text: 'Intravenous regular insulin and dextrose' },
      { id: 'C', text: 'Oral sodium polystyrene sulfonate' },
      { id: 'D', text: 'Urgent hemodialysis' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Intravenous calcium gluconate',
    explanation: 'In severe hyperkalemia with cardiotoxic ECG changes (widened QRS, loss of P waves, or peaked T waves), the absolute first immediate step is intravenous administration of 10% Calcium Gluconate (or calcium chloride). Calcium directly antagonizes potassium\'s cardiotoxicity by stabilizing the cardiac resting membrane potential and restoring the threshold potential, preventing fatal ventricular fibrillation or asystole within 1–3 minutes.',
    optionRationales: {
      A: 'Correct. IV Calcium Gluconate immediately stabilizes cardiac myocyte membranes and is the mandatory first step.',
      B: 'Insulin and dextrose shift potassium into cells, which is step 2 (takes 15–30 minutes to act).',
      C: 'Oral binders take hours to days to lower total body potassium and have no emergency role.',
      D: 'Hemodialysis is the definitive clearance modality, but calcium must be given first to prevent immediate cardiac arrest during setup.'
    },
    keyTakeaway: 'For hyperkalemia with ECG changes, IV Calcium Gluconate is the mandatory first-line step for immediate cardiac membrane stabilization.',
    sourcePageRef: 'Page 32, Q5',
    difficulty: 'High Yield',
    tags: ['Hyperkalemia', 'Calcium Gluconate', 'Membrane Stabilization', 'Emergency']
  },

  // ----------------------------------------------------
  // MANAGEMENT OF HYPERKALAEMA (Pages 47-49)
  // ----------------------------------------------------
  {
    id: 'hyperk_q1',
    topicId: 'hyperkalemia_management',
    topicTitle: 'Management of Hyperkalaemia',
    questionNumber: 1,
    clinicalVignette: 'A 58-year-old patient with diabetic nephropathy has a serum potassium of 6.8mmol/L. He is given IV insulin-dextrose. What is the main mechanism responsible for the fall in serum potassium?',
    options: [
      { id: 'A', text: 'Increased renal potassium excretion' },
      { id: 'B', text: 'Increased faecal potassium excretion' },
      { id: 'C', text: 'Stimulation of Na+/K+ ATPase activity' },
      { id: 'D', text: 'Binding of potassium to insulin' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Stimulation of Na+/K+ ATPase activity',
    explanation: 'Insulin binds to its receptor on skeletal muscle and hepatic cells, activating intracellular signaling that translocates and stimulates the Na+/K+ ATPase pump. This drives 3 Na+ ions out of cells in exchange for 2 K+ ions into the intracellular fluid, rapidly lowering extracellular and serum potassium concentrations.',
    optionRationales: {
      A: 'Insulin does not increase renal excretion of potassium.',
      B: 'Fecal excretion is facilitated by cation exchange resins (e.g. Patiromer, Lokelma), not insulin.',
      C: 'Correct. Insulin stimulates the Na+/K+ ATPase pump, shifting potassium from ECF into ICF.',
      D: 'Insulin does not chelate or bind potassium directly.'
    },
    keyTakeaway: 'Insulin lowers serum potassium by stimulating the Na+/K+ ATPase pump, promoting intracellular potassium shifting.',
    sourcePageRef: 'Page 47, Q1',
    difficulty: 'Core Clinical',
    tags: ['Hyperkalemia', 'Insulin-Dextrose', 'Na-K ATPase', 'Cellular Shift']
  },
  {
    id: 'hyperk_q2',
    topicId: 'hyperkalemia_management',
    topicTitle: 'Management of Hyperkalaemia',
    questionNumber: 2,
    clinicalVignette: 'A 68-year-old man with chronic kidney disease presents with generalized weakness. His serum potassium is 7.1 mmol/L. ECG shows tall peaked T waves and widening of the QRS complex. What is the most appropriate immediate treatment?',
    options: [
      { id: 'A', text: 'IV Furosemide' },
      { id: 'B', text: 'IV calcium' },
      { id: 'C', text: 'IV sodium bicarbonate' },
      { id: 'D', text: 'Nebulised salbutamol' }
    ],
    correctOption: 'B',
    correctAnswerText: 'IV calcium',
    explanation: 'A potassium of 7.1 mmol/L with QRS widening is a critical medical emergency. Intravenous calcium (10 mL of 10% calcium gluconate or calcium chloride over 2–5 minutes) is the immediate priority to stabilize the cardiac resting membrane potential and prevent lethal ventricular arrhythmias.',
    optionRationales: {
      A: 'Loop diuretics work too slowly and are ineffective in advanced renal failure.',
      B: 'Correct. IV Calcium is the immediate lifesaving priority for cardiac membrane stabilization.',
      C: 'Sodium bicarbonate is slow, unreliable, and reserved for severe metabolic acidosis.',
      D: 'Nebulized salbutamol shifts potassium but lacks immediate membrane stabilizing action.'
    },
    keyTakeaway: 'Hyperkalemia with QRS widening requires immediate IV Calcium before attempting intracellular potassium shifting.',
    sourcePageRef: 'Pages 47–48, Q2',
    difficulty: 'High Yield',
    tags: ['Hyperkalemia', 'IV Calcium', 'Resuscitation', 'Emergency']
  },
  {
    id: 'hyperk_q3',
    topicId: 'hyperkalemia_management',
    topicTitle: 'Management of Hyperkalaemia',
    questionNumber: 3,
    clinicalVignette: 'A patient with K+ of 7.0mmol/L has received calcium, insulin-glucose and nebulised salbutamol. His potassium remains 6.9mmol/L. He has severe renal failure and is producing very little urine. What is the most appropriate definitive treatment?',
    options: [
      { id: 'A', text: 'Oral potassium supplement' },
      { id: 'B', text: 'Observation only' },
      { id: 'C', text: 'Haemodialysis' },
      { id: 'D', text: 'Oral sodium bicarbonate' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Haemodialysis',
    explanation: 'When severe hyperkalemia is refractory to temporizing medical measures (insulin-dextrose, beta-2 agonists) in an anuric or severely oliguric renal failure patient, emergent Hemodialysis is the only definitive, rapid method to physically remove excess potassium from the body.',
    optionRationales: {
      A: 'Potassium supplementation would be lethal.',
      B: 'Observation in refractory severe hyperkalemia will lead to fatal cardiac arrest.',
      C: 'Correct. Hemodialysis is the definitive modality for refractory hyperkalemia in acute or chronic renal failure.',
      D: 'Oral bicarbonate has minimal acute clearance efficacy in anuria.'
    },
    keyTakeaway: 'Refractory hyperkalemia in anuric renal failure mandates urgent emergency Hemodialysis.',
    sourcePageRef: 'Page 48, Q3',
    difficulty: 'High Yield',
    tags: ['Hyperkalemia', 'Hemodialysis', 'Renal Failure', 'Definitive Management']
  },
  {
    id: 'hyperk_q4',
    topicId: 'hyperkalemia_management',
    topicTitle: 'Management of Hyperkalaemia',
    questionNumber: 4,
    clinicalVignette: 'A 34-year-old man presents with severe diabetic ketoacidosis. Laboratory investigations show: K⁺ = 6.7 mmol/L; pH = 6.95; HCO₃⁻ = 5 mmol/L; ECG: peaked T waves. Which of the following is the best approach to the hyperkalemia?',
    options: [
      { id: 'A', text: 'Sodium bicarbonate is sufficient; no insulin is required' },
      { id: 'B', text: 'IV calcium followed by insulin-based potassium shifting, while treating the underlying DKA' },
      { id: 'C', text: 'Oral potassium binder as sole therapy' },
      { id: 'D', text: 'Loop diuretic as sole therapy' }
    ],
    correctOption: 'B',
    correctAnswerText: 'IV calcium followed by insulin-based potassium shifting, while treating the underlying DKA',
    explanation: 'In severe DKA, acidosis and insulin deficiency cause extracellular shifting of potassium, presenting with high serum K+ (6.7 mmol/L) and peaked T waves despite total body potassium depletion. Management requires: (1) IV Calcium to stabilize the myocardium, (2) IV regular insulin infusion to suppress ketogenesis and drive K+ into cells, and (3) vigorous IV fluid resuscitation.',
    optionRationales: {
      A: 'Insulin is the mandatory definitive treatment for DKA; bicarbonate alone is insufficient.',
      B: 'Correct. IV calcium stabilizes the myocardium while insulin treats the DKA and shifts potassium intracellularly.',
      C: 'Oral binders do not treat DKA and will precipitate hypokalemia later as insulin takes effect.',
      D: 'Loop diuretics will worsen severe hypovolemia in DKA.'
    },
    keyTakeaway: 'Hyperkalemia with peaked T waves in DKA requires IV calcium for cardiac protection alongside standard insulin and fluid resuscitation.',
    sourcePageRef: 'Pages 48–49, Q4',
    difficulty: 'High Yield',
    tags: ['DKA', 'Hyperkalemia', 'Insulin Therapy', 'IV Calcium']
  },
  {
    id: 'hyperk_q5',
    topicId: 'hyperkalemia_management',
    topicTitle: 'Management of Hyperkalaemia',
    questionNumber: 5,
    clinicalVignette: 'A 72-year-old man with HFrEF and CKD is taking lisinopril and spironolactone. His potassium has gradually increased from 5.2 to 6.1 mmol/L over several weeks. He is clinically stable and has no ECG abnormalities. Which of the following is the most appropriate overall management strategy?',
    options: [
      { id: 'A', text: 'Immediately permanently discontinue all RAAS-blocking therapy' },
      { id: 'B', text: 'Ignore the potassium because RAAS blockade improves survival in heart failure' },
      { id: 'C', text: 'Identify and correct reversible causes, review hyperkalemia-inducing medications, and consider potassium-lowering strategies that may permit continuation of beneficial therapy' },
      { id: 'D', text: 'Give IV calcium gluconate and insulin/glucose immediately' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Identify and correct reversible causes, review hyperkalemia-inducing medications, and consider potassium-lowering strategies that may permit continuation of beneficial therapy',
    explanation: 'RAAS inhibitors (ACEi, ARBs, MRAs) provide proven mortality benefits in heart failure with reduced ejection fraction (HFrEF). Rather than abruptly and permanently discontinuing these lifesaving medications for chronic mild-to-moderate hyperkalemia, clinicians should assess dietary intake, eliminate NSAIDs/potassium supplements, optimize loop diuretics, or initiate novel oral potassium binders (Patiromer / Sodium Zirconium Cyclosilicate) to enable continuation of guideline-directed medical therapy.',
    optionRationales: {
      A: 'Permanent discontinuation forfeits substantial heart failure survival benefits.',
      B: 'Ignoring K+ 6.1 risks progressive fatal arrhythmias.',
      C: 'Correct. Comprehensive review of reversible causes, diet, and potassium binders allows safe preservation of RAASi therapy.',
      D: 'Emergency IV calcium/insulin is indicated for acute severe hyperkalemia with ECG changes, not stable chronic outpatient elevations.'
    },
    keyTakeaway: 'In heart failure, mitigate hyperkalemia using dietary modification and potassium binders rather than reflexively discontinuing lifesaving RAAS inhibitors.',
    sourcePageRef: 'Page 49, Q5',
    difficulty: 'Core Clinical',
    tags: ['HFrEF', 'RAAS Blockade', 'Chronic Hyperkalemia', 'Potassium Binders']
  },

  // ----------------------------------------------------
  // TYPES & INDICATIONS OF DIALYSIS (Pages 54-56)
  // ----------------------------------------------------
  {
    id: 'dialysis_q1',
    topicId: 'dialysis_modalities',
    topicTitle: 'Types & Indications of Dialysis',
    questionNumber: 1,
    clinicalVignette: 'A 32-year-old man is brought to the emergency department after ingesting an unknown quantity of antifreeze several hours earlier. He is confused, tachypnoeic, and has a high anion-gap metabolic acidosis with visual disturbance. Which treatment offers the most definitive removal of the toxin and its metabolites?',
    options: [
      { id: 'A', text: 'Activated charcoal.' },
      { id: 'B', text: 'Intravenous fomepizole alone' },
      { id: 'C', text: 'Haemodialysis.' },
      { id: 'D', text: 'Peritoneal dialysis.' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Haemodialysis.',
    explanation: 'Antifreeze (Ethylene glycol or Methanol) poisoning produces toxic acid metabolites (glycolate/oxalate or formate) causing severe high anion gap acidosis, renal failure, and retinal injury. While Fomepizole inhibits alcohol dehydrogenase to prevent further metabolism, Intermittent Hemodialysis provides rapid, definitive extracorporeal clearance of both the parent alcohol and its toxic organic acid metabolites while correcting the profound acidosis.',
    optionRationales: {
      A: 'Small aliphatic alcohols do not bind to activated charcoal.',
      B: 'Fomepizole blocks alcohol dehydrogenase but does not clear pre-formed toxic metabolites or correct severe acidosis.',
      C: 'Correct. Hemodialysis is the definitive treatment for toxic alcohol ingestion with severe acidosis or end-organ damage.',
      D: 'Peritoneal dialysis clearance rates are far too slow for acute toxic alcohol poisoning.'
    },
    keyTakeaway: 'Emergency Hemodialysis is the definitive treatment to clear toxic alcohols (ethylene glycol/methanol) and their toxic acid metabolites.',
    sourcePageRef: 'Page 54, Q1',
    difficulty: 'High Yield',
    tags: ['Toxic Alcohols', 'Ethylene Glycol', 'Hemodialysis', 'Toxicology']
  },
  {
    id: 'dialysis_q2',
    topicId: 'dialysis_modalities',
    topicTitle: 'Types & Indications of Dialysis',
    questionNumber: 2,
    clinicalVignette: 'A 45-year-old woman with long-standing CKD stage 5 presents with pleuritic chest pain that improves on leaning forward. Examination reveals a pericardial friction rub. Her serum urea is markedly elevated but her potassium and pH are within acceptable limits. What is the most appropriate management?',
    options: [
      { id: 'A', text: 'Reassure and continue outpatient follow-up, since electrolytes are normal' },
      { id: 'B', text: 'Start high-dose oral corticosteroids for pericarditis.' },
      { id: 'C', text: 'Arrange urgent dialysis.' },
      { id: 'D', text: 'Perform pericardiocentesis regardless of tamponade signs.' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Arrange urgent dialysis.',
    explanation: 'A pericardial friction rub in a patient with advanced renal failure and severe uremia establishes the diagnosis of Uremic Pericarditis. Uremic pericarditis is an absolute, urgent indication for Dialysis (typically daily intermittent hemodialysis without heparin, or peritoneal dialysis). Prompt dialysis resolves pericardial inflammation and prevents hemorrhagic tamponade.',
    optionRationales: {
      A: 'Untreated uremic pericarditis carries a high risk of lethal hemorrhagic cardiac tamponade.',
      B: 'Corticosteroids and NSAIDs are ineffective for uremic pericarditis and NSAIDs worsen renal failure.',
      C: 'Correct. Uremic pericarditis is a classic mandatory indication for urgent dialysis.',
      D: 'Pericardiocentesis is indicated only when overt hemodynamic cardiac tamponade is documented.'
    },
    keyTakeaway: 'Uremic pericarditis (chest pain + friction rub in renal failure) is an absolute indication for urgent dialysis.',
    sourcePageRef: 'Page 54, Q2',
    difficulty: 'High Yield',
    tags: ['Uremic Pericarditis', 'Dialysis Indications', 'CKD Stage 5']
  },
  {
    id: 'dialysis_q3',
    topicId: 'dialysis_modalities',
    topicTitle: 'Types & Indications of Dialysis',
    questionNumber: 3,
    clinicalVignette: 'A 65-year-old woman with ESRD underwent emergency laparotomy for a perforated sigmoid diverticulum four days ago. She now requires renal replacement therapy for worsening uraemia. Which modality is least appropriate at this time?',
    options: [
      { id: 'A', text: 'Tunnelled central venous catheter with intermittent haemodialysis' },
      { id: 'B', text: 'Peritoneal dialysis' },
      { id: 'C', text: 'Temporary femoral catheter with haemodialysis' },
      { id: 'D', text: 'Continuous veno-venous haemofiltration.' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Peritoneal dialysis',
    explanation: 'Recent major abdominal surgery, bowel perforation, acute peritonitis, and disruption of peritoneal membrane integrity are absolute/major contraindications to Peritoneal Dialysis due to the risk of dialysate leakage through incisions, poor solute clearance from adhesions, and severe intra-abdominal infection. Extracorporeal modalities (Hemodialysis or CRRT) via central venous access must be used.',
    optionRationales: {
      A: 'Vascular access hemodialysis is safe and effective.',
      B: 'Correct. Peritoneal dialysis is contraindicated following recent laparotomy and bowel perforation.',
      C: 'Femoral venous access for hemodialysis is appropriate.',
      D: 'CVVH via vascular access is safe and effective.'
    },
    keyTakeaway: 'Recent abdominal laparotomy and hollow viscus perforation represent strict contraindications to Peritoneal Dialysis.',
    sourcePageRef: 'Page 55, Q3',
    difficulty: 'Core Clinical',
    tags: ['Peritoneal Dialysis', 'Contraindications', 'Laparotomy', 'RRT']
  },
  {
    id: 'dialysis_q4',
    topicId: 'dialysis_modalities',
    topicTitle: 'Types & Indications of Dialysis',
    questionNumber: 4,
    clinicalVignette: 'A 70-year-old man is in the intensive care unit with septic shock secondary to pneumonia. He is on noradrenaline for a mean arterial pressure of 62 mmHg and has developed oliguric acute kidney injury with a rising potassium and worsening acidosis. Which renal replacement modality is most appropriate?',
    options: [
      { id: 'A', text: 'Conventional intermittent haemodialysis, 4 hours.' },
      { id: 'B', text: 'Peritoneal dialysis.' },
      { id: 'C', text: 'Continuous renal replacement therapy.' },
      { id: 'D', text: 'Delay dialysis until he is off vasopressors.' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Continuous renal replacement therapy.',
    explanation: 'Continuous Renal Replacement Therapy (CRRT, such as CVVH or CVVHD) is the preferred renal replacement modality for critically ill patients with acute kidney injury and hemodynamic instability (e.g., septic shock requiring vasopressors). CRRT provides slow, continuous solute clearance and ultrafiltration over 24 hours, avoiding the rapid fluid shifts and profound hypotension provoked by intermittent 4-hour hemodialysis.',
    optionRationales: {
      A: 'Intermittent hemodialysis causes rapid fluid shifts and severe hypotension in unstable shock.',
      B: 'Peritoneal dialysis has low clearance and unpredictable absorption in septic shock.',
      C: 'Correct. CRRT is the modality of choice in hemodynamically unstable patients on vasopressors.',
      D: 'Delaying dialysis in worsening hyperkalemic acidosis will cause cardiac arrest.'
    },
    keyTakeaway: 'Continuous Renal Replacement Therapy (CRRT) is the preferred dialysis modality for hemodynamically unstable patients in septic shock.',
    sourcePageRef: 'Page 55, Q4',
    difficulty: 'High Yield',
    tags: ['CRRT', 'Septic Shock', 'Hemodynamic Instability', 'ICU Nephrology']
  },
  {
    id: 'dialysis_q5',
    topicId: 'dialysis_modalities',
    topicTitle: 'Types & Indications of Dialysis',
    questionNumber: 5,
    clinicalVignette: 'A 58-year-old man with CKD presents with generalised weakness. ECG shows peaked T waves and a widened QRS complex. Serum potassium is 7.2 mmol/L. He has already received intravenous calcium gluconate, insulin-dextrose infusion, and nebulised salbutamol, but a repeat ECG performed 30 minutes later still shows widened QRS complexes. What is the most appropriate next step?',
    options: [
      { id: 'A', text: 'Repeat insulin-dextrose infusion and reassess in 2 hours.' },
      { id: 'B', text: 'Administer oral sodium polystyrene sulfonate (Kayexalate) and observe.' },
      { id: 'C', text: 'Arrange urgent haemodialysis' },
      { id: 'D', text: 'Give a second dose of calcium gluconate only.' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Arrange urgent haemodialysis',
    explanation: 'The persistence of conduction abnormalities (widened QRS) and severe hyperkalemia (7.2 mmol/L) despite full medical therapy (calcium, insulin/dextrose, salbutamol) indicates refractory, life-threatening hyperkalemia. Immediate arrangements for emergency Hemodialysis are required for definitive potassium removal.',
    optionRationales: {
      A: 'Repeating insulin and waiting 2 hours in a failing patient invites sudden ventricular fibrillation.',
      B: 'Oral resin binders take hours to days and have no role in acute refractory toxicity.',
      C: 'Correct. Urgent hemodialysis is mandatory for hyperkalemia with persistent cardiotoxicity refractory to medical shifting.',
      D: 'While a repeat dose of calcium can buy minutes of membrane stabilization, it does not remove potassium; urgent dialysis must be arranged.'
    },
    keyTakeaway: 'Hyperkalemia with persistent ECG widening refractory to medical shifting is a definitive indication for urgent emergency Hemodialysis.',
    sourcePageRef: 'Pages 55–56, Q5',
    difficulty: 'High Yield',
    tags: ['Refractory Hyperkalemia', 'Urgent Dialysis', 'Emergency Nephrology']
  },

  // ----------------------------------------------------
  // INVESTIGATION OF ACUTE MYOCARDIAL INFARCTION (Pages 66-67)
  // ----------------------------------------------------
  {
    id: 'ami_q1',
    topicId: 'acute_mi_investigation',
    topicTitle: 'Investigation of Acute Myocardial Infarction',
    questionNumber: 1,
    clinicalVignette: 'A 55-year-old woman with hypertension presents to the emergency department with 90 minutes of severe, pressure-like retrosternal chest pain associated with diaphoresis and nausea. Her ECG shows horizontal ST-segment depression in leads V4–V6. An initial high-sensitivity cardiac troponin I is below the assay’s 99th-percentile upper reference limit. Which of the following is the most appropriate next step in the investigation of this patient?',
    options: [
      { id: 'A', text: 'Exclude acute myocardial infarction because the initial troponin is normal' },
      { id: 'B', text: 'Repeat high-sensitivity cardiac troponin after the recommended interval and assess for a dynamic change' },
      { id: 'C', text: 'Proceed directly to coronary angiography solely because the initial ECG is abnormal' },
      { id: 'D', text: 'Request serum myoglobin because it rises earlier than cardiac troponin' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Repeat high-sensitivity cardiac troponin after the recommended interval and assess for a dynamic change',
    explanation: 'High-sensitivity cardiac troponins (hs-cTn) require time to release into the circulation following myocardial necrosis (typically 1–3 hours). In very early presenters (<2 hours from symptom onset), initial troponin may be below the 99th percentile. A rapid serial retest at 1, 2, or 3 hours is mandatory to demonstrate a diagnostic dynamic rise or fall (delta value).',
    optionRationales: {
      A: 'A single early negative troponin cannot exclude acute MI in a patient presenting at 90 minutes with ischemic ECG changes.',
      B: 'Correct. Serial hs-cTn testing at validated intervals to detect dynamic changes is standard of care.',
      C: 'Hemodynamically stable NSTE-ACS without refractory pain does not require emergent angiography before biomarker sampling.',
      D: 'Myoglobin lacks cardiac specificity and is no longer recommended in modern guidelines.'
    },
    keyTakeaway: 'A normal baseline hs-cTn in very early chest pain (<2 hours) requires serial re-measurement to detect diagnostic dynamic rises.',
    sourcePageRef: 'Page 66, Q1',
    difficulty: 'High Yield',
    tags: ['Acute MI', 'High-Sensitivity Troponin', 'Serial Biomarkers', 'NSTEMI']
  },
  {
    id: 'ami_q2',
    topicId: 'acute_mi_investigation',
    topicTitle: 'Investigation of Acute Myocardial Infarction',
    questionNumber: 2,
    clinicalVignette: 'A 71-year-old man with severe pneumonia develops tachycardia and hypotension. High-sensitivity troponin is markedly elevated above the 99th percentile. ECG shows sinus tachycardia but no new ST-segment elevation or depression. He has no typical chest pain. Which of the following is the most appropriate interpretation?',
    options: [
      { id: 'A', text: 'The patient definitely has type 1 myocardial infarction' },
      { id: 'B', text: 'An elevated troponin alone establishes acute myocardial infarction' },
      { id: 'C', text: 'The patient has myocardial injury, but MI requires additional evidence of ischemia' },
      { id: 'D', text: 'Troponin is unreliable in critically ill patients' }
    ],
    correctOption: 'C',
    correctAnswerText: 'The patient has myocardial injury, but MI requires additional evidence of ischemia',
    explanation: 'According to the Fourth Universal Definition of Myocardial Infarction, an elevated cardiac troponin above the 99th percentile establishes "Myocardial Injury". To diagnose Acute Myocardial Infarction, there must be evidence of acute myocardial ischemia (ischemic symptoms, new ischemic ECG changes, pathological Q waves, or imaging evidence of new regional wall motion abnormalities). In sepsis/pneumonia without ischemia, troponin release represents non-ischemic myocardial injury or supply-demand mismatch (Type 2 injury).',
    optionRationales: {
      A: 'Type 1 MI requires acute atherosclerotic plaque rupture/thrombosis.',
      B: 'Elevated troponin defines myocardial injury, not necessarily acute MI.',
      C: 'Correct. Elevated troponin defines myocardial injury; acute MI requires concurrent clinical or ECG evidence of acute myocardial ischemia.',
      D: 'Troponin accurately detects myocyte necrosis and carries strong prognostic value in critical illness.'
    },
    keyTakeaway: 'Troponin elevation defines Myocardial Injury; a diagnosis of Myocardial Infarction strictly requires accompanying evidence of acute ischemia.',
    sourcePageRef: 'Pages 66–67, Q2',
    difficulty: 'High Yield',
    tags: ['Universal Definition of MI', 'Myocardial Injury', 'Troponin', 'Critical Care']
  },
  {
    id: 'ami_q3',
    topicId: 'acute_mi_investigation',
    topicTitle: 'Investigation of Acute Myocardial Infarction',
    questionNumber: 3,
    clinicalVignette: 'A 58-year-old man presents to the emergency department with 40 minutes of severe retrosternal pressure radiating to his left arm. He is diaphoretic and nauseated. His blood pressure is 150/90 mmHg and pulse rate is 104/min. Acute myocardial infarction is suspected. Which of the following is the most appropriate next step in his evaluation?',
    options: [
      { id: 'A', text: 'Obtain a 12-lead ECG and assess for evidence of acute myocardial ischemia' },
      { id: 'B', text: 'Wait for cardiac biomarkers before performing further assessment' },
      { id: 'C', text: 'Arrange coronary angiography as the initial diagnostic test' },
      { id: 'D', text: 'Perform an exercise stress test to determine whether his symptoms are cardiac' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Obtain a 12-lead ECG and assess for evidence of acute myocardial ischemia',
    explanation: 'In all patients presenting with acute chest pain suspicious for acute coronary syndrome, a 12-lead ECG is the mandatory first-line investigation and must be acquired and interpreted within 10 minutes of first medical contact to identify STEMI requiring immediate emergency reperfusion therapy (primary PCI or fibrinolysis).',
    optionRationales: {
      A: 'Correct. A 12-lead ECG within 10 minutes is the immediate priority in suspected acute MI.',
      B: 'Waiting for blood biomarkers delays life-saving STEMI reperfusion.',
      C: 'Coronary angiography is indicated based on ECG triage (STEMI vs NSTE-ACS), not before an ECG is performed.',
      D: 'Exercise stress testing is strictly contraindicated during an active acute coronary syndrome.'
    },
    keyTakeaway: 'In acute chest pain, acquiring and interpreting a 12-lead ECG within 10 minutes is the priority first step to triage for emergency reperfusion.',
    sourcePageRef: 'Page 67, Q3',
    difficulty: 'High Yield',
    tags: ['12-Lead ECG', 'Chest Pain Protocol', 'Door-to-ECG', 'STEMI Triage']
  }
];
