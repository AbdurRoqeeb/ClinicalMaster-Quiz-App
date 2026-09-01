import { Question } from '../../types';

export const CARDIO_RENAL_QUESTIONS: Question[] = [
  // ----------------------------------------------------
  // SYNOPSIS OF ANTIHYPERTENSIVE DRUGS (Pages 13-15)
  // ----------------------------------------------------
  {
    id: 'anti_q1',
    topicId: 'antihypertensive_drugs',
    topicTitle: 'Synopsis of Antihypertensive Drugs',
    questionNumber: 1,
    clinicalVignette: 'A 62-year-old man taking amlodipine 10 mg daily for stage 2 hypertension complains of progressive bilateral lower extremity swelling without dyspnea, orthopnea, or elevated JVP. His physician adds lisinopril 10 mg daily to his regimen. Two weeks later, the ankle swelling has markedly resolved. Which hemodynamic mechanism explains the resolution of edema after adding lisinopril?',
    options: [
      { id: 'A', text: 'Increased sodium excretion via inhibition of the sodium-chloride cotransporter in the proximal tubule' },
      { id: 'B', text: 'Dilation of post-capillary venules, thereby normalizing intraglomerular/capillary hydrostatic pressure' },
      { id: 'C', text: 'Selective constriction of pre-capillary arterioles, decreasing blood flow to the lower extremities' },
      { id: 'D', text: 'Increased plasma oncotic pressure via upregulation of hepatic albumin synthesis' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Dilation of post-capillary venules, thereby normalizing intraglomerular/capillary hydrostatic pressure',
    explanation: 'Dihydropyridine calcium channel blockers (amlodipine) cause selective precapillary arteriolar vasodilation without dilating postcapillary venules. This creates high intraglomerular/interstitial capillary hydrostatic pressure, driving fluid transudation into the dependent interstitial space (peripheral edema). ACE inhibitors (lisinopril) and ARBs dilate postcapillary venules in addition to arterioles, which relieves the capillary pressure gradient, normalizing hydrostatic pressure and resolving the edema.',
    optionRationales: {
      A: 'Inhibition of NaCl cotransporters is the mechanism of thiazide diuretics in the distal convoluted tubule.',
      B: 'Correct. ACE inhibitors dilate post-capillary venules, reducing capillary hydrostatic pressure and eliminating CCB-induced transudation edema.',
      C: 'ACE inhibitors cause vasodilation, not precapillary arteriolar vasoconstriction.',
      D: 'ACE inhibitors do not stimulate hepatic albumin synthesis.'
    },
    keyTakeaway: 'ACE inhibitors and ARBs resolve CCB-induced peripheral edema by dilating post-capillary venules, normalizing microvascular capillary hydrostatic pressure.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Antihypertensives', 'Amlodipine', 'Lisinopril', 'Capillary Dynamics', 'Edema']
  },
  {
    id: 'anti_q2',
    topicId: 'antihypertensive_drugs',
    topicTitle: 'Synopsis of Antihypertensive Drugs',
    questionNumber: 2,
    clinicalVignette: 'A 68-year-old man with benign prostatic hyperplasia and newly diagnosed hypertension is prescribed a medication to treat both conditions simultaneously. Shortly after taking the first dose before bedtime, he gets up to use the restroom, experiences severe dizziness, and has a brief loss of consciousness with spontaneous recovery (first-dose syncope). Which medication is most likely responsible?',
    options: [
      { id: 'A', text: 'Metoprolol succinate' },
      { id: 'B', text: 'Doxazosin' },
      { id: 'C', text: 'Clonidine' },
      { id: 'D', text: 'Hydrochlorothiazide' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Doxazosin',
    explanation: 'Selective alpha-1 adrenergic receptor antagonists (doxazosin, prazosin, terazosin) relax vascular smooth muscle in both arterioles and veins, while relaxing smooth muscle in the prostatic stroma and bladder neck. A well-known adverse effect is "first-dose phenomenon / first-dose syncope", where rapid widespread venous pooling upon standing causes severe orthostatic hypotension and syncope.',
    optionRationales: {
      A: 'Metoprolol is a cardioselective beta-blocker that treats hypertension/angina, not BPH bladder symptoms.',
      B: 'Correct. Doxazosin is an alpha-1 blocker used for BPH and hypertension that classically causes first-dose orthostatic syncope.',
      C: 'Clonidine is a central alpha-2 agonist that causes rebound hypertension upon abrupt withdrawal, not first-dose BPH syncope.',
      D: 'Hydrochlorothiazide is a diuretic that does not cause acute first-dose vascular collapse.'
    },
    keyTakeaway: 'Alpha-1 adrenergic blockers (doxazosin, prazosin) treat both BPH and hypertension but carry a significant risk of first-dose orthostatic syncope.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Doxazosin', 'Alpha-1 Blockers', 'First-Dose Syncope', 'BPH', 'Pharmacology']
  },
  {
    id: 'anti_q3',
    topicId: 'antihypertensive_drugs',
    topicTitle: 'Synopsis of Antihypertensive Drugs',
    questionNumber: 3,
    clinicalVignette: 'A 65-year-old woman with chronic atrial fibrillation and hypertension has been maintained on verapamil 240 mg daily. Her primary care physician decides to add a second antihypertensive agent to improve rate and blood pressure control. Three days later, she presents to the emergency room with severe lightheadedness, fatigue, and an ECG showing complete (third-degree) atrioventricular (AV) block with a ventricular escape rate of 32 beats per minute. Which medication was most likely added?',
    options: [
      { id: 'A', text: 'Losartan' },
      { id: 'B', text: 'Chlorthalidone' },
      { id: 'C', text: 'Metoprolol' },
      { id: 'D', text: 'Hydralazine' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Metoprolol',
    explanation: 'Non-dihydropyridine calcium channel blockers (verapamil, diltiazem) and beta-adrenergic antagonists (metoprolol, atenolol) both exert potent negative inotropic, chronotropic, and dromotropic effects by suppressing AV nodal conduction velocity and prolonging the AV nodal refractory period. Co-administration of verapamil with a beta-blocker leads to profound synergistic AV nodal suppression, frequently precipitating high-grade or complete (third-degree) heart block and severe bradycardia.',
    optionRationales: {
      A: 'Losartan is an ARB with no inhibitory effect on cardiac conduction pathways.',
      B: 'Chlorthalidone is a thiazide-like diuretic that does not depress AV conduction.',
      C: 'Correct. Combining non-DHP CCBs (Verapamil) with beta-blockers (Metoprolol) synergistically blocks AV nodal conduction, causing 3rd-degree heart block.',
      D: 'Hydralazine causes reflex tachycardia, not AV nodal conduction block.'
    },
    keyTakeaway: 'Combining non-dihydropyridine calcium channel blockers (verapamil/diltiazem) with beta-blockers is generally contraindicated due to high risk of complete AV block and cardiogenic shock.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Drug Interactions', 'Verapamil', 'Metoprolol', 'AV Block', 'Cardiology']
  },
  {
    id: 'anti_q4',
    topicId: 'antihypertensive_drugs',
    topicTitle: 'Synopsis of Antihypertensive Drugs',
    questionNumber: 4,
    clinicalVignette: 'A 45-year-old woman taking an oral arteriolar vasodilator for treatment-resistant hypertension presents with progressive polyarthralgias, symmetrical joint swelling, a malar-like facial rash, low-grade fever, and pleuritic chest pain. Laboratory investigations reveal positive antinuclear antibodies (ANA) with a homogeneous pattern and high-titer anti-histone antibodies. Anti-dsDNA and anti-Smith antibodies are negative. Which medication is the most likely culprit?',
    options: [
      { id: 'A', text: 'Minoxidil' },
      { id: 'B', text: 'Hydralazine' },
      { id: 'C', text: 'Clonidine' },
      { id: 'D', text: 'Amlodipine' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Hydralazine',
    explanation: 'Hydralazine is a direct arteriolar vasodilator classically associated with Drug-Induced Lupus Erythematosus (DILE), particularly in patients who are slow hepatic N-acetyltransferases (slow acetylators) or taking doses >200 mg/day. DILE presents with arthralgias, rash, fever, and serositis, characterized serologically by positive ANA and >95% positivity for anti-histone antibodies, with negative anti-dsDNA and anti-Smith antibodies. Symptoms resolve upon drug discontinuation.',
    optionRationales: {
      A: 'Minoxidil causes hypertrichosis (hair growth) and fluid retention, not drug-induced lupus.',
      B: 'Correct. Hydralazine classically triggers drug-induced lupus erythematosus with anti-histone antibodies.',
      C: 'Clonidine causes dry mouth and sedation, not DILE.',
      D: 'Amlodipine causes peripheral edema, not autoimmune lupus.'
    },
    keyTakeaway: 'Hydralazine (and procainamide/isoniazid) classically triggers Drug-Induced Lupus Erythematosus (DILE), characterized by positive anti-histone antibodies and resolution after discontinuation.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Hydralazine', 'Drug-Induced Lupus', 'Anti-Histone Antibodies', 'DILE']
  },
  {
    id: 'anti_q5',
    topicId: 'antihypertensive_drugs',
    topicTitle: 'Synopsis of Antihypertensive Drugs',
    questionNumber: 5,
    clinicalVignette: 'A 70-year-old man with atherosclerotic bilateral renal artery stenosis is started on an ACE inhibitor for refractory hypertension. Within one week of therapy, his serum creatinine increases from 1.2 mg/dL to 2.9 mg/dL. Which physiologic effect of the ACE inhibitor on the renal microcirculation is directly responsible for this acute decline in glomerular filtration rate (GFR)?',
    options: [
      { id: 'A', text: 'Selective constriction of the afferent arteriole' },
      { id: 'B', text: 'Preferential dilation of the efferent arteriole' },
      { id: 'C', text: 'Preferential dilation of the afferent arteriole' },
      { id: 'D', text: 'Selective constriction of the efferent arteriole' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Preferential dilation of the efferent arteriole',
    explanation: 'In bilateral renal artery stenosis (or unilateral stenosis in a solitary kidney), renal perfusion pressure is severely reduced. To maintain adequate glomerular capillary hydrostatic pressure and preserve GFR, the kidney relies on Angiotensin II-mediated vasoconstriction of the post-glomerular efferent arteriole. Blocking angiotensin II with an ACE inhibitor or ARB causes preferential efferent arteriolar vasodilation, collapsing the transcapillary glomerular hydrostatic pressure gradient and triggering an acute drop in GFR (AKI).',
    optionRationales: {
      A: 'Afferent arteriolar constriction is mediated by NSAIDs (inhibition of vasodilatory prostaglandins).',
      B: 'Correct. ACE inhibitors block angiotensin II, causing preferential efferent arteriolar dilation and collapsing glomerular filtration pressure in bilateral RAS.',
      C: 'Prostaglandins dilate the afferent arteriole, not ACE inhibitors.',
      D: 'Constricting the efferent arteriole would increase intraglomerular pressure and increase GFR.'
    },
    keyTakeaway: 'ACE inhibitors and ARBs block angiotensin II, preferentially dilating the efferent arteriole and precipitating acute renal failure in bilateral renal artery stenosis.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Renal Artery Stenosis', 'ACE Inhibitors', 'Efferent Arteriole', 'Glomerular Dynamics', 'AKI']
  },

  // ----------------------------------------------------
  // INTERPRETATION OF ARTERIAL BLOOD GASES (Pages 15-18)
  // ----------------------------------------------------
  {
    id: 'abg_q1',
    topicId: 'abg_interpretation',
    topicTitle: 'Interpretation of Arterial Blood Gases',
    questionNumber: 1,
    clinicalVignette: 'A 35-year-old woman with a history of recurrent vomiting for 3 days presents with severe weakness. ABG analysis reveals: pH 7.52, PaCO₂ 40 mmHg (5.3 kPa), PaO₂ 92 mmHg, HCO₃⁻ 32 mmol/L. Which of the following is the most accurate acid-base interpretation?',
    options: [
      { id: 'A', text: 'Uncompensated metabolic alkalosis' },
      { id: 'B', text: 'Partially compensated metabolic alkalosis' },
      { id: 'C', text: 'Uncompensated respiratory alkalosis' },
      { id: 'D', text: 'Fully compensated metabolic alkalosis' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Uncompensated metabolic alkalosis',
    explanation: 'Step 1: pH is 7.52 (>7.45) = Alkalemia. Step 2: HCO3- is 32 mmol/L (>26 mmol/L) = Metabolic process. Step 3: PaCO2 is 40 mmHg, which is completely within the normal reference range (35–45 mmHg). Because the respiratory system has not yet mounted a compensatory hypoventilation response to retain CO2 (PaCO2 remains normal), this represents an Uncompensated Metabolic Alkalosis.',
    optionRationales: {
      A: 'Correct. Alkalemic pH, elevated bicarbonate, and normal PaCO2 (no respiratory compensation) define uncompensated metabolic alkalosis.',
      B: 'Partial compensation requires PaCO2 to be elevated above 45 mmHg.',
      C: 'Respiratory alkalosis requires PaCO2 < 35 mmHg.',
      D: 'Full compensation requires pH to be restored to the normal reference range (7.35–7.45).'
    },
    keyTakeaway: 'An elevated pH and high bicarbonate with a normal PaCO2 represents uncompensated metabolic alkalosis.',
    sourcePageRef: '',
    difficulty: 'Core Clinical',
    tags: ['ABG', 'Metabolic Alkalosis', 'Acid-Base', 'Vomiting']
  },
  {
    id: 'abg_q2',
    topicId: 'abg_interpretation',
    topicTitle: 'Interpretation of Arterial Blood Gases',
    questionNumber: 2,
    clinicalVignette: 'A 41-year-old woman presents with sudden pleuritic chest pain, tachypnoea (RR 34/min), and tachycardia. A pulmonary embolism is suspected. ABG shows: pH 7.52, PaCO₂ 28 mmHg (3.7 kPa), PaO₂ 68 mmHg (9.1 kPa), HCO₃⁻ 24 mmol/L. Which of the following is the correct interpretation?',
    options: [
      { id: 'A', text: 'Uncompensated respiratory alkalosis' },
      { id: 'B', text: 'Partially compensated respiratory alkalosis' },
      { id: 'C', text: 'Uncompensated metabolic alkalosis' },
      { id: 'D', text: 'Fully compensated respiratory alkalosis' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Uncompensated respiratory alkalosis',
    explanation: 'Step 1: pH is 7.52 (>7.45) = Alkalemia. Step 2: PaCO2 is 28 mmHg (<35 mmHg) = Primary respiratory process due to hyperventilation blowing off CO2. Step 3: HCO3- is 24 mmol/L (normal reference range 22–26 mmol/L). Because renal compensation (excreting bicarbonate) takes 24–72 hours to develop, this acute presentation is an Uncompensated Respiratory Alkalosis.',
    optionRationales: {
      A: 'Correct. Alkalemia (pH 7.52) with low PaCO2 (28 mmHg) and normal bicarbonate (24 mmol/L) defines acute uncompensated respiratory alkalosis.',
      B: 'Partially compensated would show a depressed bicarbonate (<22 mmol/L).',
      C: 'Metabolic alkalosis requires elevated bicarbonate (>26 mmol/L).',
      D: 'Fully compensated requires pH within 7.35–7.45.'
    },
    keyTakeaway: 'Acute hyperventilation causing low PaCO2 with alkalemic pH and normal bicarbonate represents uncompensated respiratory alkalosis.',
    sourcePageRef: '',
    difficulty: 'Core Clinical',
    tags: ['ABG', 'Respiratory Alkalosis', 'Pulmonary Embolism', 'Hyperventilation']
  },
  {
    id: 'abg_q3',
    topicId: 'abg_interpretation',
    topicTitle: 'Interpretation of Arterial Blood Gases',
    questionNumber: 3,
    clinicalVignette: 'A 68-year-old man with a 40-pack-year smoking history and known COPD presents with worsening breathlessness, shallow breathing, and drowsiness. ABG on room air shows: pH 7.28, PaCO₂ 55 mmHg (7.3 kPa), PaO₂ 54 mmHg (7.2 kPa), HCO₃⁻ 24 mmol/L. Which of the following is the most accurate interpretation?',
    options: [
      { id: 'A', text: 'Uncompensated metabolic acidosis' },
      { id: 'B', text: 'Partially compensated respiratory acidosis' },
      { id: 'C', text: 'Uncompensated respiratory acidosis' },
      { id: 'D', text: 'Fully compensated respiratory acidosis' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Uncompensated respiratory acidosis',
    explanation: 'Step 1: pH is 7.28 (<7.35) = Acidemia. Step 2: PaCO2 is 55 mmHg (>45 mmHg) = Primary respiratory process (hypoventilation/CO2 retention). Step 3: HCO3- is 24 mmol/L (completely normal). Because the kidneys have not yet retained bicarbonate (which takes days), this represents an acute Uncompensated Respiratory Acidosis.',
    optionRationales: {
      A: 'Metabolic acidosis requires depressed bicarbonate (<22 mmol/L).',
      B: 'Partially compensated respiratory acidosis requires an elevated bicarbonate (>26 mmol/L).',
      C: 'Correct. Acidemia (pH 7.28) with elevated PaCO2 (55 mmHg) and normal bicarbonate (24 mmol/L) indicates acute uncompensated respiratory acidosis.',
      D: 'Fully compensated requires pH within 7.35–7.45.'
    },
    keyTakeaway: 'Acidemic pH with elevated PaCO2 and normal bicarbonate represents acute uncompensated respiratory acidosis.',
    sourcePageRef: '',
    difficulty: 'Core Clinical',
    tags: ['ABG', 'Respiratory Acidosis', 'COPD', 'Acute Hypoventilation']
  },
  {
    id: 'abg_q4',
    topicId: 'abg_interpretation',
    topicTitle: 'Interpretation of Arterial Blood Gases',
    questionNumber: 4,
    clinicalVignette: 'A 70-year-old man attends a routine clinic follow-up for stable, severe chronic obstructive pulmonary disease. He has chronic mild dyspnoea but no acute symptoms. An arterial blood gas on room air reveals: pH 7.36, PaCO₂ 55 mmHg (7.3 kPa), PaO₂ 62 mmHg (8.3 kPa), HCO₃⁻ 29 mmol/L. Which of the following is the most accurate interpretation?',
    options: [
      { id: 'A', text: 'Uncompensated respiratory acidosis' },
      { id: 'B', text: 'Partially compensated respiratory acidosis' },
      { id: 'C', text: 'Fully compensated respiratory acidosis' },
      { id: 'D', text: 'Fully compensated metabolic alkalosis' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Fully compensated respiratory acidosis',
    explanation: 'Step 1: pH is 7.36, which is inside the normal physiological reference range (7.35–7.45), but sits on the acid side of 7.40. Step 2: PaCO2 is elevated at 55 mmHg (>45 mmHg). Step 3: HCO3- is elevated at 29 mmol/L (>26 mmol/L). The chronic renal retention of bicarbonate over weeks to months has successfully neutralized the hydrogen ion excess, bringing the pH back into the normal range. This is a Fully Compensated Respiratory Acidosis (Chronic Type 2 Respiratory Failure).',
    optionRationales: {
      A: 'Uncompensated has a depressed pH (<7.35) and normal bicarbonate.',
      B: 'Partially compensated has an abnormal pH (<7.35) alongside elevated bicarbonate.',
      C: 'Correct. Normal pH (7.36) with elevated PaCO2 and elevated bicarbonate defines fully compensated chronic respiratory acidosis.',
      D: 'Metabolic alkalosis would push pH to the alkalotic side of 7.40.'
    },
    keyTakeaway: 'A normal pH (7.35–7.45) with elevated PaCO2 and elevated bicarbonate indicates fully compensated chronic respiratory acidosis.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['ABG', 'Chronic Compensation', 'COPD', 'Compensated Acidosis']
  },
  {
    id: 'abg_q5',
    topicId: 'abg_interpretation',
    topicTitle: 'Interpretation of Arterial Blood Gases',
    questionNumber: 5,
    clinicalVignette: 'A 58-year-old man presents with drowsiness and shallow breathing after taking an excessive dose of opioid analgesics. His respiratory rate is 8 breaths per minute. An arterial blood gas reveals: pH 7.25, PaCO₂ 60 mmHg (8.0 kPa), PaO₂ 55 mmHg (7.3 kPa), HCO₃⁻ 24 mmol/L. Which of the following is the most accurate interpretation?',
    options: [
      { id: 'A', text: 'Uncompensated metabolic acidosis' },
      { id: 'B', text: 'Uncompensated respiratory acidosis' },
      { id: 'C', text: 'Partially compensated respiratory acidosis' },
      { id: 'D', text: 'Fully compensated respiratory acidosis' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Uncompensated respiratory acidosis',
    explanation: 'Step 1: pH is 7.25 (<7.35) = Severe acidemia. Step 2: PaCO2 is 60 mmHg (>45 mmHg) = Marked respiratory acidosis caused by opioid-induced central respiratory drive suppression and severe hypoventilation (RR 8/min). Step 3: HCO3- is 24 mmol/L (completely normal). Because this is an acute poisoning event, there has been no time for renal retention of bicarbonate. This is an acute Uncompensated Respiratory Acidosis.',
    optionRationales: {
      A: 'Metabolic acidosis requires low bicarbonate (<22 mmol/L).',
      B: 'Correct. Acidemia (pH 7.25) with high PaCO2 (60 mmHg) and normal bicarbonate defines acute uncompensated respiratory acidosis.',
      C: 'Partially compensated requires elevated bicarbonate.',
      D: 'Fully compensated requires normal pH (7.35–7.45).'
    },
    keyTakeaway: 'Acute opioid overdose suppresses central respiratory drive, causing acute uncompensated respiratory acidosis (low pH, high PaCO2, normal HCO3).',
    sourcePageRef: '',
    difficulty: 'Core Clinical',
    tags: ['Opioid Overdose', 'ABG', 'Respiratory Acidosis', 'Hypoventilation']
  },

  // ----------------------------------------------------
  // ECG FEATURES OF ELECTROLYTE DERANGEMENTS (Pages 31-33)
  // ----------------------------------------------------
  {
    id: 'ecg_q1',
    topicId: 'ecg_electrolytes',
    topicTitle: 'ECG Features of Electrolyte Derangements',
    questionNumber: 1,
    clinicalVignette: 'A 68-year-old man with CKD on lisinopril and spironolactone develops severe hyperkalemia. An ECG demonstrates tall, narrow, peaked T waves, PR interval prolongation, and widening of the QRS complex. Which cellular electrophysiologic mechanism is directly responsible for these progressive QRS and PR changes in severe hyperkalemia?',
    options: [
      { id: 'A', text: 'Increased calcium influx during phase II of the cardiac action potential' },
      { id: 'B', text: 'Progressive membrane Depolarization causing sodium channel in-activation' },
      { id: 'C', text: 'Delayed closure of L-type calcium channels during phase II repolarization' },
      { id: 'D', text: 'Increased activity of the sodium-potassium ATPase pump' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Progressive membrane Depolarization causing sodium channel in-activation',
    explanation: 'Extracellular potassium elevation reduces the transmembrane potassium gradient, shifting the resting membrane potential of cardiomyocytes to a less negative (more depolarized) value (e.g. from -90 mV towards -70 mV). According to Hodgkin-Huxley voltage-gating principles, sustained resting depolarization causes voltage-dependent inactivation of fast voltage-gated sodium channels (Phase 0). This impairs Phase 0 upstroke velocity (Vmax), resulting in slow intraventricular conduction, PR prolongation, and QRS widening (leading ultimately to sine wave patterns).',
    optionRationales: {
      A: 'Phase 2 calcium influx governs contractility and ST length, not conduction slowing.',
      B: 'Correct. Hyperkalemia causes resting membrane depolarization, inactivating fast Na+ channels and slowing Phase 0 conduction (QRS widening).',
      C: 'Delayed L-type calcium channel closure causes QT prolongation.',
      D: 'Na+/K+ ATPase is not directly upregulated by extracellular hyperkalemia to cause QRS widening.'
    },
    keyTakeaway: 'Hyperkalemia causes partial resting membrane depolarization, which inactivates fast Na+ channels, slowing Phase 0 conduction velocity and widening the PR and QRS intervals.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['ECG', 'Hyperkalemia', 'Electrophysiology', 'Sodium Channel Inactivation', 'QRS Widening']
  },
  {
    id: 'ecg_q2',
    topicId: 'ecg_electrolytes',
    topicTitle: 'ECG Features of Electrolyte Derangements',
    questionNumber: 2,
    clinicalVignette: 'A 42-year-old woman taking chlorthalidone presents with fatigue, palpitations, and severe leg cramps. Her 12-lead ECG demonstrates flattened T waves with a distinct positive deflection immediately following the T wave and preceding the next P wave in the precordial leads. Which ECG feature is being described?',
    options: [
      { id: 'A', text: 'Delta wave' },
      { id: 'B', text: 'T-wave inversion' },
      { id: 'C', text: 'Osborne J waves' },
      { id: 'D', text: 'Prominent U waves' }
    ],
    correctOption: 'D',
    correctAnswerText: 'Prominent U waves',
    explanation: 'Hypokalemia (e.g. from thiazide/chlorthalidone diuretic use) alters cardiac repolarization, causing ST segment depression, progressive flattening/inversion of T waves, and emergence of prominent U waves (amplitude > 1 mm or > 25% of the preceding T wave, representing delayed repolarization of mid-myocardial M-cells or Purkinje fibers). This gives the appearance of a prolonged "QU" interval and predisposes to Torsades de Pointes.',
    optionRationales: {
      A: 'Delta waves are slurred QRS upstrokes seen in Wolff-Parkinson-White syndrome.',
      B: 'T-wave inversion is a negative deflection, not a positive deflection following the T wave.',
      C: 'Osborn (J) waves are positive deflections at the J-point seen in severe hypothermia.',
      D: 'Correct. Prominent U waves are positive deflections following the T wave classically seen in hypokalemia.'
    },
    keyTakeaway: 'Hypokalemia characteristically causes T-wave flattening, ST-segment depression, and prominent U waves (delayed Purkinje/M-cell repolarization).',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['ECG', 'Hypokalemia', 'U Waves', 'Chlorthalidone', 'Electrolytes']
  },
  {
    id: 'ecg_q3',
    topicId: 'ecg_electrolytes',
    topicTitle: 'ECG Features of Electrolyte Derangements',
    questionNumber: 3,
    clinicalVignette: 'A 55-year-old man with sarcoidosis presents with severe constipation, polyuria, and confusion. Laboratory evaluation confirms a serum calcium of 14.2 mg/dL. Which ECG finding is most characteristic of severe hypercalcemia?',
    options: [
      { id: 'A', text: 'Wide QRS complex' },
      { id: 'B', text: 'Prolonged QT interval' },
      { id: 'C', text: 'Peaked T waves' },
      { id: 'D', text: 'Shortened QT interval' }
    ],
    correctOption: 'D',
    correctAnswerText: 'Shortened QT interval',
    explanation: 'Hypercalcemia increases the extracellular-to-intracellular calcium gradient, accelerating calcium entry through L-type channels and triggering faster calcium-dependent inactivation, thereby markedly shortening Phase 2 (plateau phase) of the cardiac ventricular action potential. On the surface ECG, this is reflected as a shortened ST segment and a significantly shortened corrected QT (QTc) interval.',
    optionRationales: {
      A: 'Wide QRS is characteristic of hyperkalemia or bundle branch blocks.',
      B: 'Prolonged QT is seen in hypocalcemia, hypokalemia, and hypomagnesemia.',
      C: 'Peaked T waves are classic for hyperkalemia.',
      D: 'Correct. Hypercalcemia shortens Phase 2 of the action potential, causing a distinctly shortened QT interval.'
    },
    keyTakeaway: 'Hypercalcemia shortens the cardiac Phase 2 plateau phase, producing a characteristic shortened QT interval on ECG.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Hypercalcemia', 'Shortened QT', 'ECG', 'Calcium', 'Sarcoidosis']
  },
  {
    id: 'ecg_q4',
    topicId: 'ecg_electrolytes',
    topicTitle: 'ECG Features of Electrolyte Derangements',
    questionNumber: 4,
    clinicalVignette: 'A 38-year-old woman undergoes total thyroidectomy for papillary thyroid carcinoma. On post-operative day 2, she develops perioral numbness, paresthesias in her fingertips, and a positive Trousseau sign. A 12-lead ECG reveals a QTc interval of 520 ms. Which portion of the ECG waveform is specifically lengthened to cause this QT prolongation in hypocalcemia?',
    options: [
      { id: 'A', text: 'T wave duration' },
      { id: 'B', text: 'ST segment Length' },
      { id: 'C', text: 'QRS complex width' },
      { id: 'D', text: 'PR interval length' }
    ],
    correctOption: 'B',
    correctAnswerText: 'ST segment Length',
    explanation: 'In hypocalcemia (e.g. from inadvertent surgical hypoparathyroidism), the reduced transsarcolemmal calcium influx slows Phase 2 (plateau phase) repolarization, causing prolongation of Phase 2 of the myocardial action potential without altering Phase 3. On the ECG, this specifically manifests as prolongation of the isoelectric ST segment, while the morphology and duration of the T wave itself remain completely normal.',
    optionRationales: {
      A: 'T wave duration is unchanged in pure hypocalcemia.',
      B: 'Correct. Hypocalcemia prolongs Phase 2 of the action potential, which specifically lengthens the ST segment while keeping the T wave morphology normal.',
      C: 'QRS complex width is determined by Phase 0 sodium influx.',
      D: 'PR interval reflects AV nodal conduction.'
    },
    keyTakeaway: 'Hypocalcemia prolongs the QTc interval by specifically lengthening the ST segment, while the T-wave duration remains normal.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Hypocalcemia', 'ST Segment', 'Prolonged QT', 'Thyroidectomy', 'Electrolytes']
  },
  {
    id: 'ecg_q5',
    topicId: 'ecg_electrolytes',
    topicTitle: 'ECG Features of Electrolyte Derangements',
    questionNumber: 5,
    clinicalVignette: 'A 45-year-old man with end-stage renal disease misses his dialysis session. He presents with severe generalized muscle weakness and palpitations. The emergency ECG shows tall, tented, peaked T waves and marked widening of the QRS complex (>140 ms). Which of the following is the most urgent first-line intervention?',
    options: [
      { id: 'A', text: 'Intravenous calcium gluconate' },
      { id: 'B', text: 'Intravenous regular insulin with 50% dextrose' },
      { id: 'C', text: 'Oral sodium polystyrene sulfonate (Kayexalate)' },
      { id: 'D', text: 'Urgent hemodialysis' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Intravenous calcium gluconate',
    explanation: 'When severe hyperkalemia produces ECG changes (peaked T waves, QRS widening, loss of P waves, sine wave), the patient is at immediate risk of lethal ventricular fibrillation and asystole. Intravenous Calcium Gluconate (10 mL of 10% solution over 2–5 minutes) must be given immediately. Calcium antagonizes the membrane excitability effects of hyperkalemia by raising the threshold potential (less negative), restoring the normal voltage gap and stabilizing the myocardial membrane in 1–3 minutes.',
    optionRationales: {
      A: 'Correct. IV Calcium Gluconate immediately stabilizes the cardiac membrane and protects against fatal arrhythmias in hyperkalemia with ECG changes.',
      B: 'Insulin-dextrose shifts potassium into cells but takes 15–30 minutes to act; calcium must be given first.',
      C: 'Oral binders take hours to days and have no role in acute cardiac stabilization.',
      D: 'Hemodialysis provides definitive removal but takes time to set up; calcium must be administered STAT.'
    },
    keyTakeaway: 'Intravenous Calcium Gluconate is the mandatory immediate first-line agent to stabilize cardiac membranes in hyperkalemia with ECG changes.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Hyperkalemia', 'Calcium Gluconate', 'Membrane Stabilization', 'ECG Emergency']
  },

  // ----------------------------------------------------
  // MANAGEMENT OF HYPERKALAEMA (Pages 47-50)
  // ----------------------------------------------------
  {
    id: 'hk_q1',
    topicId: 'hyperkalemia_management',
    topicTitle: 'Management of Hyperkalaemia',
    questionNumber: 1,
    clinicalVignette: 'A 58-year-old patient with diabetic nephropathy presents with a serum potassium of 6.8 mmol/L. An intravenous infusion of regular insulin and concentrated dextrose is administered. What is the cellular mechanism by which insulin reduces extracellular potassium concentration?',
    options: [
      { id: 'A', text: 'Stimulation of renal potassium excretion in the collecting duct' },
      { id: 'B', text: 'Stimulation of faecal potassium excretion via the colon' },
      { id: 'C', text: 'Stimulation of Na+/K+ ATPase activity, driving potassium into skeletal muscle and liver cells' },
      { id: 'D', text: 'Binding of potassium to insulin molecules in the plasma' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Stimulation of Na+/K+ ATPase activity, driving potassium into skeletal muscle and liver cells',
    explanation: 'Insulin binds to its cell-surface tyrosine kinase receptor on skeletal muscle and hepatic cells, triggering signaling cascades (PI3K/Akt pathway) that directly stimulate translocation and activity of the Na+/K+ ATPase pump. The Na+/K+ ATPase pump actively pumps 3 Na+ out of the cell and 2 K+ into the cell against concentration gradients, driving potassium from the extracellular space into the intracellular compartment and lowering serum potassium within 15–30 minutes.',
    optionRationales: {
      A: 'Insulin does not directly stimulate renal collecting duct excretion.',
      B: 'Gastrointestinal potassium binders stimulate fecal excretion, not insulin.',
      C: 'Correct. Insulin stimulates Na+/K+ ATPase pumps, driving potassium into intracellular stores (muscle and liver).',
      D: 'Insulin does not chemically chelate potassium in plasma.'
    },
    keyTakeaway: 'Insulin stimulates the cell membrane Na+/K+ ATPase pump to rapidly shift potassium from extracellular fluid into skeletal muscle and liver cells.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Hyperkalemia', 'Insulin-Dextrose', 'Na+/K+ ATPase', 'Potassium Shift']
  },
  {
    id: 'hk_q2',
    topicId: 'hyperkalemia_management',
    topicTitle: 'Management of Hyperkalaemia',
    questionNumber: 2,
    clinicalVignette: 'A 68-year-old man with end-stage renal disease presents with a serum potassium of 7.1 mmol/L. An ECG shows tall, peaked T waves and widened QRS complexes. Which of the following is the most appropriate immediate treatment to stabilize the cardiac membrane?',
    options: [
      { id: 'A', text: 'Intravenous furosemide' },
      { id: 'B', text: 'Intravenous calcium (gluconate or chloride)' },
      { id: 'C', text: 'Intravenous sodium bicarbonate' },
      { id: 'D', text: 'Nebulised salbutamol' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Intravenous calcium (gluconate or chloride)',
    explanation: 'When hyperkalemia causes ECG abnormalities, intravenous calcium (10 mL of 10% calcium gluconate or calcium chloride) is the immediate priority. Calcium raises the myocardial action potential threshold potential (making it less negative), restoring the normal membrane threshold-to-resting potential gap and stabilizing the cardiomyocyte membrane to prevent progression to ventricular fibrillation or asystole.',
    optionRationales: {
      A: 'Furosemide is ineffective in end-stage renal disease and does not stabilize the heart.',
      B: 'Correct. IV Calcium (gluconate or chloride) immediately stabilizes the myocardial membrane.',
      C: 'Bicarbonate has a slow, modest shifting effect and does not stabilize membranes.',
      D: 'Salbutamol shifts potassium but takes 15–30 minutes to act; calcium acts within 1–3 minutes.'
    },
    keyTakeaway: 'Intravenous calcium (gluconate or chloride) is the immediate first-line cardiac membrane stabilizer in severe hyperkalemia with ECG changes.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Hyperkalemia', 'Calcium Gluconate', 'Membrane Stabilization', 'Cardiology']
  },
  {
    id: 'hk_q3',
    topicId: 'hyperkalemia_management',
    topicTitle: 'Management of Hyperkalaemia',
    questionNumber: 3,
    clinicalVignette: 'A patient with severe hyperkalaemia (potassium 7.0 mmol/L) has received intravenous calcium, insulin with glucose, and nebulised salbutamol. Repeat testing 2 hours later shows a potassium of 6.9 mmol/L with persistent severe renal failure and anuria. Which of the following is the most definitive treatment to remove excess potassium from the body?',
    options: [
      { id: 'A', text: 'Oral potassium supplement' },
      { id: 'B', text: 'Observation for 24 hours' },
      { id: 'C', text: 'Haemodialysis' },
      { id: 'D', text: 'Oral sodium bicarbonate' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Haemodialysis',
    explanation: 'Shifting therapies (insulin-dextrose, beta-2 agonists) only temporarily move potassium into cells for 2–4 hours; they do not remove potassium from the body. In an anuric patient with severe renal failure where renal excretion is zero and medical shifting has failed (persistent K 6.9 mmol/L), urgent Hemodialysis is the gold-standard, definitive extracorporeal therapy that removes potassium from the body (clearing 30–50 mmol/hour).',
    optionRationales: {
      A: 'Potassium supplements would be lethal.',
      B: 'Observation risks sudden fatal cardiac arrest.',
      C: 'Correct. Hemodialysis is the most rapid and definitive extracorporeal modality to remove total-body potassium in anuric renal failure.',
      D: 'Oral bicarbonate will not provide sufficient clearance in an anuric patient.'
    },
    keyTakeaway: 'In anuric renal failure with refractory severe hyperkalemia, emergency hemodialysis is the only definitive method to remove potassium from the body.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Hyperkalemia', 'Hemodialysis', 'Anuric AKI', 'Definitive Clearance']
  },
  {
    id: 'hk_q4',
    topicId: 'hyperkalemia_management',
    topicTitle: 'Management of Hyperkalaemia',
    questionNumber: 4,
    clinicalVignette: 'A 34-year-old man presents with severe diabetic ketoacidosis (DKA). Initial laboratory testing reveals a serum potassium of 6.7 mmol/L, arterial pH 6.95, serum bicarbonate 5 mmol/L, and peaked T waves on ECG. Which of the following describes the most appropriate approach to managing this patient\'s hyperkalaemia?',
    options: [
      { id: 'A', text: 'Administer intravenous sodium bicarbonate alone' },
      { id: 'B', text: 'Administer intravenous calcium followed by insulin-based potassium shifting, while treating the underlying DKA' },
      { id: 'C', text: 'Administer an oral potassium binder alone' },
      { id: 'D', text: 'Administer a loop diuretic alone' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Administer intravenous calcium followed by insulin-based potassium shifting, while treating the underlying DKA',
    explanation: 'In severe DKA, acidosis and insulin deficiency cause potassium to shift out of cells into the ECF, producing serum hyperkalemia despite profound whole-body potassium depletion (due to osmotic diuresis). When ECG changes (peaked T waves) are present: (1) give IV calcium gluconate to stabilize the heart, (2) start IV insulin and aggressive fluid resuscitation to clear ketoacids and shift potassium back into cells, and (3) anticipate that serum potassium will plummet rapidly, requiring potassium supplementation once K+ falls below 5.0–5.3 mmol/L.',
    optionRationales: {
      A: 'Bicarbonate alone does not stabilize the myocardium and does not address the underlying ketoacidosis.',
      B: 'Correct. IV calcium stabilizes cardiac membranes while insulin and fluids drive DKA resolution and shift potassium intracellularly.',
      C: 'Oral binders are far too slow and unindicated in total-body potassium depletion.',
      D: 'Loop diuretics will worsen severe hypovolemic shock in DKA.'
    },
    keyTakeaway: 'In DKA with hyperkalemic ECG changes, give IV calcium to stabilize the myocardium, then start IV insulin and fluid resuscitation, monitoring for rapid subsequent hypokalemia.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['DKA', 'Hyperkalemia', 'Insulin Resuscitation', 'Total Body Potassium']
  },
  {
    id: 'hk_q5',
    topicId: 'hyperkalemia_management',
    topicTitle: 'Management of Hyperkalaemia',
    questionNumber: 5,
    clinicalVignette: 'A 72-year-old man with heart failure with reduced ejection fraction (HFrEF) and chronic kidney disease stage 3b is maintained on lisinopril and spironolactone. His serum potassium has ranged between 5.6 and 6.1 mmol/L over several clinic visits. He is clinically stable, and his ECG is normal. Which of the following is the most appropriate long-term management strategy?',
    options: [
      { id: 'A', text: 'Permanently discontinue all RAAS inhibitors' },
      { id: 'B', text: 'Ignore the potassium level because the patient is asymptomatic' },
      { id: 'C', text: 'Identify and correct reversible causes, review hyperkalemia-inducing medications, and consider potassium-lowering strategies that may permit continuation of beneficial therapy' },
      { id: 'D', text: 'Administer intravenous calcium and insulin-dextrose immediately' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Identify and correct reversible causes, review hyperkalemia-inducing medications, and consider potassium-lowering strategies that may permit continuation of beneficial therapy',
    explanation: 'RAAS inhibitors (ACEi, ARBs, MRAs) provide proven mortality and cardiovascular survival benefits in HFrEF and diabetic CKD. Permanently discontinuing them increases cardiovascular mortality. Modern guidelines recommend: (1) dietary potassium counseling, (2) stopping non-essential potassium-elevating drugs (NSAIDs, herbal supplements), (3) adding thiazide/loop diuretics if volume allows, and (4) utilizing novel oral potassium binders (Patiromer or Sodium Zirconium Cyclosilicate / Lokelma) to maintain normokalemia while safely preserving guideline-directed RAASi therapy.',
    optionRationales: {
      A: 'Abruptly stopping RAAS inhibitors increases cardiovascular mortality and heart failure hospitalizations.',
      B: 'Ignoring persistent hyperkalemia risks lethal sudden cardiac arrhythmias.',
      C: 'Correct. Review reversible factors, optimize diet, and use modern potassium binders to maintain lifesaving RAAS inhibitor therapy.',
      D: 'IV calcium and insulin are for acute emergencies with ECG changes, not outpatient chronic mild-to-moderate hyperkalemia.'
    },
    keyTakeaway: 'In heart failure and CKD, manage chronic hyperkalemia with dietary adjustments and novel potassium binders (Patiromer/SZC) to avoid discontinuing lifesaving RAAS inhibitors.',
    sourcePageRef: '',
    difficulty: 'Core Clinical',
    tags: ['Chronic Hyperkalemia', 'RAAS Inhibitors', 'Heart Failure', 'Patiromer', 'SZC']
  },

  // ----------------------------------------------------
  // TYPES & INDICATIONS OF DIALYSIS (Pages 54-56)
  // ----------------------------------------------------
  {
    id: 'dia_q1',
    topicId: 'dialysis_modalities',
    topicTitle: 'Types & Indications of Dialysis',
    questionNumber: 1,
    clinicalVignette: 'A 32-year-old man presents after ingesting antifreeze (ethylene glycol). He has severe high anion gap metabolic acidosis, acute kidney injury, and visual symptoms. Which modality is the most effective and definitive method for rapid removal of the toxic alcohol and its toxic metabolites?',
    options: [
      { id: 'A', text: 'Activated charcoal' },
      { id: 'B', text: 'Intravenous fomepizole alone' },
      { id: 'C', text: 'Haemodialysis' },
      { id: 'D', text: 'Peritoneal dialysis' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Haemodialysis',
    explanation: 'Ethylene glycol and its toxic acidic metabolites (glycolate, glyoxylate, oxalate) are low-molecular-weight, water-soluble molecules with small volumes of distribution that are rapidly cleared by Intermittent Hemodialysis. While fomepizole blocks alcohol dehydrogenase to prevent further toxic metabolite generation, hemodialysis is the definitive modality that clears parent alcohol, eliminates toxic organic acid metabolites, and corrects profound metabolic acidosis and AKI.',
    optionRationales: {
      A: 'Activated charcoal does not bind small polar alcohol molecules.',
      B: 'Fomepizole blocks metabolism but does not remove existing toxic metabolites or correct severe metabolic acidosis.',
      C: 'Correct. Intermittent hemodialysis rapidly eliminates ethylene glycol, glycolic acid, and oxalate while correcting severe acidosis.',
      D: 'Peritoneal dialysis has clearance rates far too slow for acute toxic alcohol poisoning.'
    },
    keyTakeaway: 'Intermittent Hemodialysis is the definitive modality for rapid clearance of toxic alcohols (ethylene glycol, methanol) and correction of severe metabolic acidosis.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Dialysis Indications', 'Toxic Alcohols', 'Ethylene Glycol', 'Hemodialysis']
  },
  {
    id: 'dia_q2',
    topicId: 'dialysis_modalities',
    topicTitle: 'Types & Indications of Dialysis',
    questionNumber: 2,
    clinicalVignette: 'A 45-year-old woman with CKD stage 5 presents with pleuritic chest pain that improves on leaning forward. On auscultation, a scratchy triphasic pericardial friction rub is heard over the left sternal border. An ECG demonstrates diffuse PR depression with ST-segment elevation. What is the most appropriate management?',
    options: [
      { id: 'A', text: 'Reassure the patient and discharge on oral paracetamol' },
      { id: 'B', text: 'Commence high-dose oral corticosteroids' },
      { id: 'C', text: 'Arrange urgent dialysis' },
      { id: 'D', text: 'Perform immediate pericardiocentesis' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Arrange urgent dialysis',
    explanation: 'The presence of a pericardial friction rub and chest pain in a patient with severe uremia (CKD Stage 5 / ESRD) confirms Uremic Pericarditis. Uremic pericarditis is an absolute, urgent indication for Renal Replacement Therapy / Dialysis (mnemonic AEIOU: Uremic complications). Initiating intensive daily hemodialysis (using regional heparin-free protocols to avoid hemopericardium) leads to resolution in >90% of cases. Pericardiocentesis is reserved for cardiac tamponade.',
    optionRationales: {
      A: 'Uremic pericarditis risks catastrophic pericardial hemorrhage and tamponade if untreated.',
      B: 'Systemic steroids are ineffective for uremic toxins and do not address the metabolic cause.',
      C: 'Correct. Uremic pericarditis is an absolute indication for emergency initiation of dialysis.',
      D: 'Pericardiocentesis is indicated only for hemodynamic cardiac tamponade.'
    },
    keyTakeaway: 'Uremic pericarditis (friction rub, pleuritic chest pain in advanced uremia) is a classic absolute indication for urgent dialysis.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Uremic Pericarditis', 'Dialysis Indications', 'AEIOU', 'Nephrology']
  },
  {
    id: 'dia_q3',
    topicId: 'dialysis_modalities',
    topicTitle: 'Types & Indications of Dialysis',
    questionNumber: 3,
    clinicalVignette: 'A 65-year-old woman with ESRD underwent an emergency laparotomy for a perforated diverticulum with fecal peritonitis 4 days ago. She requires maintenance renal replacement therapy. Which modality is LEAST appropriate in this patient?',
    options: [
      { id: 'A', text: 'Tunnelled central venous catheter hemodialysis' },
      { id: 'B', text: 'Peritoneal dialysis' },
      { id: 'C', text: 'Temporary femoral catheter hemodialysis' },
      { id: 'D', text: 'Continuous veno-venous hemofiltration (CVVH)' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Peritoneal dialysis',
    explanation: 'Peritoneal dialysis requires an intact, sterile peritoneal membrane and an intact abdominal wall to instill and dwell dialysate fluid. Recent major open abdominal surgery (laparotomy), abdominal wall disruption, bowel resection, and active intra-abdominal fecal peritonitis are major absolute contraindications to peritoneal dialysis due to dialysate leakage through surgical wounds, risk of peritonitis, and disrupted peritoneal surface area. Hemodialysis via central venous access must be used.',
    optionRationales: {
      A: 'Tunnelled internal jugular HD catheters bypass the abdomen and are safe.',
      B: 'Correct. Recent open abdominal surgery and fecal peritonitis are strict contraindications to Peritoneal Dialysis.',
      C: 'Femoral venous HD catheters are suitable temporary vascular access.',
      D: 'CVVH is appropriate vascular-based CRRT.'
    },
    keyTakeaway: 'Recent laparotomy, abdominal wall defects, and severe intra-abdominal infection are major contraindications to Peritoneal Dialysis.',
    sourcePageRef: '',
    difficulty: 'Core Clinical',
    tags: ['Peritoneal Dialysis', 'Contraindications', 'Laparotomy', 'Peritonitis']
  },
  {
    id: 'dia_q4',
    topicId: 'dialysis_modalities',
    topicTitle: 'Types & Indications of Dialysis',
    questionNumber: 4,
    clinicalVignette: 'A 70-year-old man in the intensive care unit with septic shock is mechanically ventilated and requires high-dose noradrenaline (0.35 µg/kg/min) to maintain a MAP of 60 mmHg. He develops oliguric acute kidney injury with rising potassium and refractory metabolic acidosis. Which dialysis modality is most appropriate for this patient?',
    options: [
      { id: 'A', text: 'Intermittent hemodialysis (4-hour session)' },
      { id: 'B', text: 'Peritoneal dialysis' },
      { id: 'C', text: 'Continuous renal replacement therapy (CRRT)' },
      { id: 'D', text: 'Delay dialysis until vasopressors are discontinued' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Continuous renal replacement therapy (CRRT)',
    explanation: 'In critically ill, hemodynamically unstable patients with septic shock requiring high-dose vasopressor support, Intermittent Hemodialysis (IHD) rapidly removes fluid and solute over 3–4 hours, which frequently triggers severe hypotension, myocardial ischemia, and worsening organ perfusion. Continuous Renal Replacement Therapy (CRRT, such as CVVH or CVVHDF) operates continuously 24 hours/day with slow, gentle ultrafiltration rates, providing superb hemodynamic tolerance and smooth acid-base correction.',
    optionRationales: {
      A: 'Intermittent HD causes rapid fluid shifts and severe hypotension in unstable shock.',
      B: 'Peritoneal dialysis has low clearance and unpredictable absorption in shock states.',
      C: 'Correct. CRRT provides continuous, gentle solute and fluid removal without causing hemodynamic collapse in septic shock.',
      D: 'Delaying dialysis in refractory acidemia and hyperkalemia causes fatal cardiac arrest.'
    },
    keyTakeaway: 'Continuous Renal Replacement Therapy (CRRT) is the modality of choice for acute kidney injury in hemodynamically unstable patients in septic shock.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['CRRT', 'Septic Shock', 'Hemodynamic Instability', 'Critical Care AKI']
  },
  {
    id: 'dia_q5',
    topicId: 'dialysis_modalities',
    topicTitle: 'Types & Indications of Dialysis',
    questionNumber: 5,
    clinicalVignette: 'A 58-year-old man with CKD presents with a serum potassium of 7.2 mmol/L. An ECG shows peaked T waves and widened QRS complexes. He receives IV calcium gluconate, insulin with dextrose, and nebulised salbutamol. Repeat ECG 30 minutes later shows persistent QRS widening. What is the most appropriate next step?',
    options: [
      { id: 'A', text: 'Repeat the insulin-dextrose infusion in 2 hours' },
      { id: 'B', text: 'Administer oral sodium polystyrene sulfonate' },
      { id: 'C', text: 'Arrange urgent haemodialysis' },
      { id: 'D', text: 'Give a second dose of calcium gluconate only and observe' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Arrange urgent haemodialysis',
    explanation: 'Refractory severe hyperkalemia (>7.0 mmol/L) with persistent dangerous ECG conduction abnormalities (wide QRS) despite maximal medical stabilization and intracellular shifting therapies represents an immediate life-threatening emergency. The patient must be transferred immediately for emergency Intermittent Hemodialysis, which is the most rapid modality to definitively remove potassium from the blood.',
    optionRationales: {
      A: 'Waiting 2 hours while the QRS remains wide risks sudden ventricular fibrillation.',
      B: 'Oral resin binders take hours to work and cannot treat acute refractory conduction blocks.',
      C: 'Correct. Refractory hyperkalemia with persistent ECG widening despite medical therapy requires immediate emergency hemodialysis.',
      D: 'A second dose of calcium may temporarily stabilize membranes but does not remove potassium; dialysis is mandatory.'
    },
    keyTakeaway: 'Hyperkalemia with persistent widening of the QRS complex despite medical shifting therapies is an absolute emergency indication for urgent hemodialysis.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Hyperkalemia', 'Emergency Dialysis', 'Refractory Hyperkalemia', 'Wide QRS']
  },

  // ----------------------------------------------------
  // INVESTIGATION OF ACUTE MYOCARDIAL INFARCTION (Pages 69-70)
  // ----------------------------------------------------
  {
    id: 'ami_q1',
    topicId: 'acute_mi_investigation',
    topicTitle: 'Investigation of Acute Myocardial Infarction',
    questionNumber: 1,
    clinicalVignette: 'A 55-year-old woman presents to the emergency department with retrosternal chest discomfort radiating to her neck. An initial ECG reveals ST-segment depression in leads V4–V6. An initial high-sensitivity cardiac troponin I (hs-cTnI) concentration measured 1 hour after chest pain onset is below the 99th percentile upper reference limit. Which of the following is the most appropriate next step?',
    options: [
      { id: 'A', text: 'Exclude acute myocardial infarction and discharge the patient safely' },
      { id: 'B', text: 'Repeat the high-sensitivity cardiac troponin measurement after the recommended interval and assess for a dynamic change' },
      { id: 'C', text: 'Proceed immediately to direct coronary angiography without further biomarker testing' },
      { id: 'D', text: 'Request serum myoglobin concentration to confirm myocardial necrosis' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Repeat the high-sensitivity cardiac troponin measurement after the recommended interval and assess for a dynamic change',
    explanation: 'According to the Universal Definition of Myocardial Infarction and ESC/AHA guidelines, diagnosis of Non-ST-Elevation Myocardial Infarction (NSTEMI) requires detection of a dynamic rise and/or fall of cardiac troponin with at least one value above the 99th percentile URL. When a patient presents very early (<2–3 hours from onset), the initial hs-cTn value may still be below the threshold. A repeat measurement at 1–3 hours (using validated 0/1-hour or 0/2-hour rapid algorithms) is mandatory to detect significant delta changes.',
    optionRationales: {
      A: 'A single early negative troponin cannot exclude acute MI in a patient with ischemic ECG changes.',
      B: 'Correct. Serial hs-cTn testing at 1–3 hours is required to detect dynamic rise/fall and confirm or exclude NSTEMI.',
      C: 'Angiography is guided by risk stratification; confirming biomarker dynamics is standard for non-STEMI.',
      D: 'Myoglobin lacks cardiac specificity and is no longer recommended in modern guidelines.'
    },
    keyTakeaway: 'A single early troponin below the 99th percentile does not rule out acute MI; serial testing at 1–3 hours is required to assess for a dynamic delta rise or fall.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Acute Coronary Syndrome', 'hs-cTn', 'NSTEMI', 'Serial Biomarkers', 'Cardiac Troponin']
  },
  {
    id: 'ami_q2',
    topicId: 'acute_mi_investigation',
    topicTitle: 'Investigation of Acute Myocardial Infarction',
    questionNumber: 2,
    clinicalVignette: 'A 71-year-old man admitted to the intensive care unit with severe community-acquired pneumonia has a high-sensitivity cardiac troponin concentration of 85 ng/L (99th percentile upper reference limit: 14 ng/L). An ECG shows sinus tachycardia at 110/min with no ischemic ST-segment changes. He has had no chest pain. Which of the following is the most appropriate interpretation of these findings?',
    options: [
      { id: 'A', text: 'The patient has a Type 1 acute myocardial infarction requiring immediate percutaneous coronary intervention' },
      { id: 'B', text: 'Elevated cardiac troponin alone establishes the diagnosis of acute myocardial infarction' },
      { id: 'C', text: 'The patient has myocardial injury, but acute myocardial infarction requires additional evidence of acute myocardial ischemia' },
      { id: 'D', text: 'The elevated troponin is an analytical error and can be completely disregarded' }
    ],
    correctOption: 'C',
    correctAnswerText: 'The patient has myocardial injury, but acute myocardial infarction requires additional evidence of acute myocardial ischemia',
    explanation: 'The Universal Definition of Myocardial Infarction explicitly distinguishes "Myocardial Injury" from "Myocardial Infarction". Myocardial injury is defined by elevated cardiac troponin >99th percentile. To meet criteria for Myocardial Infarction, there must be myocardial injury PLUS clinical evidence of acute myocardial ischemia (e.g. ischemic chest discomfort, new ischemic ECG changes, pathological Q waves, or imaging evidence of new regional wall motion abnormalities). In severe sepsis/pneumonia without ischemia, this represents non-ischemic myocardial injury (or Type 2 supply-demand mismatch).',
    optionRationales: {
      A: 'Type 1 MI is caused by acute plaque rupture/thrombosis; this patient has non-ischemic injury from severe sepsis.',
      B: 'Troponin elevation alone defines myocardial injury; MI requires co-existing clinical evidence of ischemia.',
      C: 'Correct. Sepsis/pneumonia causes myocardial injury; clinical or ECG evidence of acute ischemia is required to diagnose MI.',
      D: 'Elevated troponin in sepsis is a true biological marker of myocardial stress and carries prognostic weight.'
    },
    keyTakeaway: 'Elevated troponin alone defines Myocardial Injury; a diagnosis of Myocardial Infarction strictly requires co-existing clinical or ECG evidence of acute myocardial ischemia.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Myocardial Injury', 'Type 2 MI', 'Universal Definition', 'Sepsis', 'Troponin']
  },
  {
    id: 'ami_q3',
    topicId: 'acute_mi_investigation',
    topicTitle: 'Investigation of Acute Myocardial Infarction',
    questionNumber: 3,
    clinicalVignette: 'A 58-year-old man presents with acute retrosternal chest heaviness radiating to his left arm for 45 minutes, accompanied by diaphoresis and nausea. Blood pressure is 150/90 mmHg, and pulse is 104/min. Which of the following is the most appropriate initial diagnostic investigation in evaluating this patient?',
    options: [
      { id: 'A', text: 'Obtain a 12-lead ECG and assess for evidence of acute myocardial ischemia' },
      { id: 'B', text: 'Wait for cardiac biomarker results before ordering an ECG' },
      { id: 'C', text: 'Arrange emergency coronary angiography without an ECG' },
      { id: 'D', text: 'Perform an exercise treadmill stress test' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Obtain a 12-lead ECG and assess for evidence of acute myocardial ischemia',
    explanation: 'In any patient presenting with acute chest pain suspicious for acute coronary syndrome, a 12-lead ECG is the single most urgent diagnostic test and must be acquired and interpreted within 10 minutes of arrival (door-to-ECG time <= 10 min). The ECG immediately identifies ST-Elevation Myocardial Infarction (STEMI), which mandates emergency reperfusion therapy (primary PCI <= 90 min) without waiting for laboratory biomarkers.',
    optionRationales: {
      A: 'Correct. A 12-lead ECG within 10 minutes is the primary diagnostic priority to identify STEMI and guide immediate reperfusion.',
      B: 'Waiting for blood biomarkers delays emergent catheterization laboratory activation in STEMI and increases mortality.',
      C: 'An ECG must precede angiography to confirm the diagnosis and identify the culprit territory.',
      D: 'Exercise stress testing is contraindicated in acute unstable chest pain.'
    },
    keyTakeaway: 'A 12-lead ECG within 10 minutes of emergency arrival is the mandatory first diagnostic step in acute chest pain to identify STEMI.',
    sourcePageRef: '',
    difficulty: 'Core Clinical',
    tags: ['12-Lead ECG', 'STEMI Protocol', 'Door-to-ECG', 'Acute Coronary Syndrome']
  }
];
