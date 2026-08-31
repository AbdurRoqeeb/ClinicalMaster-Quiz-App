import { Question } from '../../types';

export const GASTRO_NEURO_RHEUM_QUESTIONS: Question[] = [
  // ----------------------------------------------------
  // GASTROINTESTINAL BLEEDING (UPPER & LOWER) (Pages 7-10)
  // ----------------------------------------------------
  {
    id: 'gib_q1',
    topicId: 'gi_bleeding',
    topicTitle: 'Gastrointestinal Bleeding (Upper & Lower)',
    questionNumber: 1,
    clinicalVignette: 'A 54-year-old man presents to the emergency department with a 6-hour history of vomiting bright red blood. He has a known history of alcohol-related cirrhosis and portal hypertension. On arrival, his blood pressure is 88/50 mmHg and heart rate is 122 bpm. Which of the following is the most appropriate initial pharmacological agent to administer while preparing for urgent endoscopy?',
    options: [
      { id: 'A', text: 'Intravenous tranexamic acid' },
      { id: 'B', text: 'Intravenous vasoactive agent (e.g., Terlipressin or Octreotide)' },
      { id: 'C', text: 'Oral beta-blocker (propranolol)' },
      { id: 'D', text: 'High-dose oral antacid suspension' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Intravenous vasoactive agent (e.g., Terlipressin or Octreotide)',
    explanation: 'In suspected acute variceal bleeding, intravenous vasoactive therapy (Terlipressin, Octreotide, or Somatostatin) must be started immediately upon presentation before endoscopy. These agents induce splanchnic vasoconstriction, reducing portal venous inflow and decreasing variceal pressure, thereby controlling hemorrhage and reducing rebleeding and mortality.',
    optionRationales: {
      A: 'Tranexamic acid has not shown mortality benefit in acute variceal hemorrhage and increases thromboembolic risk in cirrhosis.',
      B: 'Correct. Intravenous vasoactive agents (Terlipressin / Octreotide) reduce portal pressure and are first-line prior to endoscopy.',
      C: 'Non-selective beta-blockers are used for secondary prophylaxis, but are strictly contraindicated in acute hypovolemic shock / active bleeding.',
      D: 'Oral antacids are ineffective for acute variceal hemorrhage.'
    },
    keyTakeaway: 'Early administration of IV vasoactive agents (Terlipressin / Octreotide) alongside prophylactic antibiotics is mandatory in acute variceal bleeding.',
    sourcePageRef: 'Pages 7–8, Q1',
    difficulty: 'High Yield',
    tags: ['Variceal Bleeding', 'Terlipressin', 'Octreotide', 'Cirrhosis']
  },
  {
    id: 'gib_q2',
    topicId: 'gi_bleeding',
    topicTitle: 'Gastrointestinal Bleeding (Upper & Lower)',
    questionNumber: 2,
    clinicalVignette: 'A 68-year-old man with osteoarthritis taking high-dose naproxen presents with melena and fatigue. Hemoglobin is 7.2 g/dL. Endoscopy reveals a 2-cm clean-based ulcer (Forrest class III) in the gastric antrum with no active bleeding or visible vessel. What is the appropriate endoscopic and pharmacological management?',
    options: [
      { id: 'A', text: 'Dual endoscopic therapy (epinephrine injection + hemoclip) plus IV PPI infusion for 72 hours' },
      { id: 'B', text: 'No endoscopic intervention required; switch to oral PPI and discontinue NSAIDs' },
      { id: 'C', text: 'Endoscopic band ligation' },
      { id: 'D', text: 'Emergency surgical partial gastrectomy' }
    ],
    correctOption: 'B',
    correctAnswerText: 'No endoscopic intervention required; switch to oral PPI and discontinue NSAIDs',
    explanation: 'According to the Forrest Classification of peptic ulcer bleeding, a clean-based ulcer (Forrest Class III) has an extremely low risk of rebleeding (<5%) and does not require endoscopic hemostatic therapy (no clips, thermal, or epinephrine needed). The patient can be transitioned to oral high-dose PPI therapy, have offending NSAIDs stopped, and undergo outpatient management.',
    optionRationales: {
      A: 'Endoscopic therapy and 72-hour IV PPI infusions are reserved for high-risk stigmata (Forrest Ia, Ib, IIa, IIb).',
      B: 'Correct. Forrest III clean-based ulcers do not warrant endoscopic therapy; oral PPI and stopping NSAIDs is sufficient.',
      C: 'Band ligation is indicated for esophageal varices, not gastric peptic ulcers.',
      D: 'Surgery is reserved for refractory bleeding failing repeat endoscopy.'
    },
    keyTakeaway: 'Clean-based peptic ulcers (Forrest III) have very low rebleeding risk and do not require endoscopic therapy.',
    sourcePageRef: 'Page 8, Q2',
    difficulty: 'Core Clinical',
    tags: ['Peptic Ulcer', 'Forrest Classification', 'Endoscopy', 'Upper GI Bleeding']
  },
  {
    id: 'gib_q3',
    topicId: 'gi_bleeding',
    topicTitle: 'Gastrointestinal Bleeding (Upper & Lower)',
    questionNumber: 3,
    clinicalVignette: 'A 74-year-old woman presents with painless, large-volume maroon-to-bright red rectal bleeding (hematochezia). She is hemodynamically stable. An upper endoscopy is performed and is completely normal. What is the most common cause of acute massive lower gastrointestinal bleeding in this age group?',
    options: [
      { id: 'A', text: 'Colonic diverticulosis' },
      { id: 'B', text: 'Hemorrhoids' },
      { id: 'C', text: 'Colonic adenocarcinoma' },
      { id: 'D', text: 'Ischemic colitis' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Colonic diverticulosis',
    explanation: 'Colonic Diverticulosis is the most common cause of acute, massive, painless lower gastrointestinal bleeding in elderly adults (accounting for 30–50% of cases). Diverticula form where penetrating vasa recta breach the muscularis propria, exposing the nutrient artery to mechanical stretch and segmental thinning, leading to sudden arterial hemorrhage into the lumen.',
    optionRationales: {
      A: 'Correct. Diverticulosis is the leading cause of major painless lower GI bleeding in older adults.',
      B: 'Hemorrhoids typically cause small-volume bright red blood on toilet paper or dripping into the bowl, not large-volume maroon hematochezia.',
      C: 'Colonic malignancy causes chronic occult blood loss, microcytic anemia, or bowel obstruction, rarely acute massive bleeding.',
      D: 'Ischemic colitis presents with crampy abdominal pain followed by bloody diarrhea in patients with cardiovascular risk factors.'
    },
    keyTakeaway: 'Colonic diverticulosis is the leading etiology of acute, massive, painless lower gastrointestinal bleeding in older adults.',
    sourcePageRef: 'Pages 8–9, Q3',
    difficulty: 'High Yield',
    tags: ['Lower GI Bleeding', 'Diverticulosis', 'Hematochezia', 'Geriatrics']
  },
  {
    id: 'gib_q4',
    topicId: 'gi_bleeding',
    topicTitle: 'Gastrointestinal Bleeding (Upper & Lower)',
    questionNumber: 4,
    clinicalVignette: 'A 60-year-old man with alcoholic cirrhosis presents with acute upper GI bleeding from esophageal varices. In addition to hemodynamic resuscitation and intravenous octreotide, which of the following prophylactic medications is proven to significantly reduce the risk of spontaneous bacterial peritonitis, rebleeding, and overall mortality?',
    options: [
      { id: 'A', text: 'Prophylactic short-course IV antibiotic (e.g., Ceftriaxone 1 g daily for up to 7 days)' },
      { id: 'B', text: 'Oral ciprofloxacin for 6 months' },
      { id: 'C', text: 'Intravenous metronidazole' },
      { id: 'D', text: 'Intravenous broad-spectrum antifungal (fluconazole)' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Prophylactic short-course IV antibiotic (e.g., Ceftriaxone 1 g daily for up to 7 days)',
    explanation: 'Bacterial infections (bacteremia, SBP, pneumonia) develop in up to 50% of cirrhotic patients with acute GI hemorrhage due to bacterial translocation and immune dysfunction. Routine short-course prophylactic antibiotics (IV Ceftriaxone 1 g/day for up to 7 days, or oral norfloxacin/ciprofloxacin) significantly decrease rebleeding rates, prevent SBP/sepsis, and improve overall survival.',
    optionRationales: {
      A: 'Correct. Prophylactic IV Ceftriaxone for up to 7 days is a guideline-mandated standard of care in cirrhotic GI bleeding.',
      B: 'Long-term 6-month fluoroquinolones are unnecessary and breed antimicrobial resistance.',
      C: 'Metronidazole does not cover common Gram-negative enteric rods causing SBP/sepsis in cirrhosis.',
      D: 'Routine antifungal prophylaxis is not indicated.'
    },
    keyTakeaway: 'Short-course antibiotic prophylaxis (Ceftriaxone 1 g IV daily for up to 7 days) reduces rebleeding and mortality in cirrhotic variceal bleeding.',
    sourcePageRef: 'Page 9, Q4',
    difficulty: 'High Yield',
    tags: ['Cirrhosis', 'Variceal Bleeding', 'Ceftriaxone Prophylaxis', 'SBP Prevention']
  },
  {
    id: 'gib_q5',
    topicId: 'gi_bleeding',
    topicTitle: 'Gastrointestinal Bleeding (Upper & Lower)',
    questionNumber: 5,
    clinicalVignette: 'A 78-year-old man with chronic atrial fibrillation and vascular disease presents with sudden-onset severe, crampy left lower quadrant abdominal pain followed 4 hours later by moderate-volume bloody diarrhea. Colonoscopy reveals pale, edematous mucosa with petechial hemorrhages and dusky ulcerations sharply demarcated at the splenic flexure. What is the most likely diagnosis?',
    options: [
      { id: 'A', text: 'Ulcerative colitis' },
      { id: 'B', text: 'Ischemic colitis' },
      { id: 'C', text: 'Clostridioides difficile colitis' },
      { id: 'D', text: 'Angiodysplasia' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Ischemic colitis',
    explanation: 'Ischemic colitis results from transient non-occlusive hypoperfusion of the mesenteric microvasculature. It characteristically affects "watershed" regions of the colon with vulnerable collateral blood supply—most notably the Splenic Flexure (Griffiths\' point, between SMA and IMA) and the Rectosigmoid Junction (Sudeck\'s point). It presents with acute crampy abdominal pain rapidly followed by bloody diarrhea in older vascular patients.',
    optionRationales: {
      A: 'Ulcerative colitis begins in the rectum and spreads contiguously proximally without watershed demarcation.',
      B: 'Correct. Crampy pain followed by bloody diarrhea affecting the splenic flexure watershed is diagnostic of ischemic colitis.',
      C: 'C. difficile presents with watery diarrhea, leukocytosis, and pseudomembranes following antibiotic exposure.',
      D: 'Angiodysplasia causes painless lower GI bleeding without preceding ischemic pain.'
    },
    keyTakeaway: 'Ischemic colitis presents with acute crampy abdominal pain followed by bloody diarrhea, classically localizing to watershed zones like the splenic flexure.',
    sourcePageRef: 'Pages 9–10, Q5',
    difficulty: 'Core Clinical',
    tags: ['Ischemic Colitis', 'Watershed Areas', 'Splenic Flexure', 'Lower GI Bleeding']
  },

  // ----------------------------------------------------
  // MOVEMENT DISORDERS & PARKINSON'S DISEASE (Pages 33-36)
  // ----------------------------------------------------
  {
    id: 'pd_q1',
    topicId: 'movement_disorders_parkinsons',
    topicTitle: "Movement Disorders & Parkinson's Disease",
    questionNumber: 1,
    clinicalVignette: 'A 66-year-old retired teacher presents with a 9-month history of a resting tremor in his right hand ("pill-rolling"), progressive slowness in buttoning his shirts (bradykinesia), and difficulty initiating walking. On examination, there is cogwheel rigidity in his right upper limb and reduced arm swing. What is the primary neuropathological hallmark of idiopathic Parkinson\'s disease?',
    options: [
      { id: 'A', text: 'Degeneration of GABAergic medium spiny neurons in the caudate nucleus' },
      { id: 'B', text: 'Loss of dopaminergic neurons in the substantia nigra pars compacta with intracellular Lewy bodies (alpha-synuclein)' },
      { id: 'C', text: 'Amyloid-beta plaques and neurofibrillary tau tangles in the hippocampus' },
      { id: 'D', text: 'Demyelination of the corticospinal tracts' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Loss of dopaminergic neurons in the substantia nigra pars compacta with intracellular Lewy bodies (alpha-synuclein)',
    explanation: 'Idiopathic Parkinson\'s disease is pathologically characterized by the selective loss of pigmented dopaminergic neurons in the Substantia Nigra pars compacta (SNpc) of the midbrain, accompanied by intracellular eosinophilic inclusions called Lewy bodies composed of aggregated, misfolded Alpha-Synuclein protein.',
    optionRationales: {
      A: 'Loss of GABAergic medium spiny neurons in the caudate is the hallmark of Huntington\'s disease.',
      B: 'Correct. Degeneration of SNpc dopaminergic neurons with Lewy bodies (alpha-synuclein) defines Parkinson\'s disease.',
      C: 'Amyloid plaques and tau tangles are the hallmark of Alzheimer\'s disease.',
      D: 'Corticospinal demyelination occurs in Multiple Sclerosis or ALS.'
    },
    keyTakeaway: 'Parkinson\'s disease is caused by loss of dopaminergic neurons in the substantia nigra pars compacta and alpha-synuclein Lewy bodies.',
    sourcePageRef: 'Pages 33–34, Q1',
    difficulty: 'High Yield',
    tags: ['Parkinson Disease', 'Substantia Nigra', 'Alpha-Synuclein', 'Lewy Bodies']
  },
  {
    id: 'pd_q2',
    topicId: 'movement_disorders_parkinsons',
    topicTitle: "Movement Disorders & Parkinson's Disease",
    questionNumber: 2,
    clinicalVignette: 'A 68-year-old man with Parkinson\'s disease treated with Levodopa/Carbidopa for 6 years complains that his medication effects "wear off" 3 hours after each dose, causing severe stiffness and tremor before the next dose is due. He also experiences involuntary writhing choreiform movements of his neck and limbs 1 hour after taking his pills. What are these motor complications called, and what is the underlying mechanism?',
    options: [
      { id: 'A', text: 'Motor fluctuations (wearing-off) and peak-dose dyskinesias due to progressive loss of striatal dopamine storage capacity and pulsatile receptor stimulation' },
      { id: 'B', text: 'Tardive dyskinesia from dopamine receptor blockade' },
      { id: 'C', text: 'Serotonin syndrome from drug interactions' },
      { id: 'D', text: 'Conversion to atypical parkinsonism (PSP)' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Motor fluctuations (wearing-off) and peak-dose dyskinesias due to progressive loss of striatal dopamine storage capacity and pulsatile receptor stimulation',
    explanation: 'With advancing disease, progressive loss of nigrostriatal nerve terminals impairs the brain\'s capacity to buffer and store exogenous dopamine. The short plasma half-life of levodopa (60–90 min) causes pulsatile stimulation of striatal dopamine receptors, leading to "wearing-off" motor fluctuations and peak-dose dyskinesias. Management includes adding COMT inhibitors (Entacapone), MAO-B inhibitors, or dopamine agonists.',
    optionRationales: {
      A: 'Correct. Progressive loss of presynaptic storage leads to pulsatile levodopa levels, wearing-off, and peak-dose dyskinesia.',
      B: 'Tardive dyskinesia is caused by chronic neuroleptic antipsychotic dopamine receptor blockade.',
      C: 'Serotonin syndrome presents with hyperthermia, hyperreflexia, and clonus.',
      D: 'Motor fluctuations are standard long-term levodopa complications in idiopathic PD, not PSP.'
    },
    keyTakeaway: 'Long-term levodopa therapy leads to "wearing-off" and peak-dose dyskinesias due to loss of presynaptic dopaminergic buffering.',
    sourcePageRef: 'Pages 34–35, Q2',
    difficulty: 'High Yield',
    tags: ['Levodopa', 'Motor Fluctuations', 'Peak-Dose Dyskinesia', 'Wearing-Off']
  },
  {
    id: 'pd_q3',
    topicId: 'movement_disorders_parkinsons',
    topicTitle: "Movement Disorders & Parkinson's Disease",
    questionNumber: 3,
    clinicalVignette: 'A 69-year-old man presents with parkinsonian symptoms including stiffness and slow gait. However, his history reveals recurrent unprovoked falls backwards within the first year of symptoms. Examination shows profound impairment of voluntary vertical downward gaze (supranuclear ophthalmoplegia), axial rigidity greater than limb rigidity, and lack of response to high-dose levodopa. What is the most likely diagnosis?',
    options: [
      { id: 'A', text: 'Idiopathic Parkinson\'s disease' },
      { id: 'B', text: 'Progressive Supranuclear Palsy (PSP)' },
      { id: 'C', text: 'Multiple System Atrophy (MSA)' },
      { id: 'D', text: 'Corticobasal Degeneration' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Progressive Supranuclear Palsy (PSP)',
    explanation: 'Progressive Supranuclear Palsy (PSP / Steele-Richardson-Olszewski syndrome) is an atypical parkinsonian tauopathy. Classic red-flag features that distinguish PSP from idiopathic PD include: (1) early unprovoked falls (especially backward instability) in year 1, (2) vertical supranuclear gaze palsy (loss of voluntary vertical saccades/downgaze), (3) prominent axial rigidity and "surprised" facial expression, and (4) poor or absent response to levodopa.',
    optionRationales: {
      A: 'Idiopathic PD has unilateral onset, prominent resting tremor, good levodopa response, and late falls.',
      B: 'Correct. Early falls + vertical supranuclear gaze palsy + axial rigidity + levodopa resistance = PSP.',
      C: 'Multiple System Atrophy features prominent early autonomic failure (orthostatic hypotension, urinary incontinence) and cerebellar ataxia.',
      D: 'Corticobasal degeneration features asymmetric limb apraxia, cortical sensory loss, and alien limb phenomenon.'
    },
    keyTakeaway: 'Progressive Supranuclear Palsy (PSP) is characterized by early backward falls, vertical supranuclear gaze palsy, and poor levodopa response.',
    sourcePageRef: 'Page 35, Q3',
    difficulty: 'High Yield',
    tags: ['PSP', 'Atypical Parkinsonism', 'Supranuclear Gaze Palsy', 'Tauopathy']
  },
  {
    id: 'pd_q4',
    topicId: 'movement_disorders_parkinsons',
    topicTitle: "Movement Disorders & Parkinson's Disease",
    questionNumber: 4,
    clinicalVignette: 'A 38-year-old woman presents with bilateral postural and action tremor of the hands that worsens when holding a cup of tea or writing. She notes that a glass of wine significantly improves her tremor. Her father and grandfather had similar tremors. Examination reveals an 8-Hz kinetic tremor with no resting tremor, no rigidity, and no bradykinesia. What is the first-line pharmacological treatment for this condition?',
    options: [
      { id: 'A', text: 'Levodopa/Carbidopa' },
      { id: 'B', text: 'Propranolol or Primidone' },
      { id: 'C', text: 'Trihexyphenidyl' },
      { id: 'D', text: 'Haloperidol' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Propranolol or Primidone',
    explanation: 'The clinical presentation (bilateral action/postural tremor, positive family history, improvement with alcohol, absence of parkinsonian signs) is classic for Essential Tremor. First-line pharmacological therapy for essential tremor consists of Propranolol (a non-selective beta-adrenergic blocker) or Primidone (an anticonvulsant metabolized to phenobarbital and phenylethylmalonamide).',
    optionRationales: {
      A: 'Levodopa treats resting tremor in Parkinson\'s disease, not essential tremor.',
      B: 'Correct. Propranolol and Primidone are the established first-line treatments for essential tremor.',
      C: 'Trihexyphenidyl is an anticholinergic used for parkinsonian resting tremor or dystonia.',
      D: 'Haloperidol is a dopamine antagonist that causes drug-induced parkinsonism and tardive syndromes.'
    },
    keyTakeaway: 'Essential tremor is an action/postural tremor relieved by alcohol, treated first-line with Propranolol or Primidone.',
    sourcePageRef: 'Pages 35–36, Q4',
    difficulty: 'High Yield',
    tags: ['Essential Tremor', 'Propranolol', 'Primidone', 'Movement Disorders']
  },
  {
    id: 'pd_q5',
    topicId: 'movement_disorders_parkinsons',
    topicTitle: "Movement Disorders & Parkinson's Disease",
    questionNumber: 5,
    clinicalVignette: 'A 28-year-old man presents with progressive dysarthria, drooling, dystonic posturing of the upper limbs, and mood lability. Slit-lamp ophthalmological examination demonstrates a golden-brown ring at the limbus of the cornea (Kayser-Fleischer rings). What is the initial diagnostic laboratory profile for this disorder?',
    options: [
      { id: 'A', text: 'Low serum ceruloplasmin, elevated 24-hour urinary copper excretion, and elevated hepatic copper' },
      { id: 'B', text: 'Elevated serum ceruloplasmin and low urinary copper' },
      { id: 'C', text: 'Elevated serum ferritin and transferrin saturation' },
      { id: 'D', text: 'Positive anti-GAD antibodies' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Low serum ceruloplasmin, elevated 24-hour urinary copper excretion, and elevated hepatic copper',
    explanation: 'This describes Wilson\'s Disease (hepatolenticular degeneration), an autosomal recessive defect in the copper-transporting P-type ATPase (ATP7B gene). Impaired biliary copper excretion leads to toxic copper accumulation in the liver, basal ganglia (causing parkinsonism, dystonia, dysarthria, psychiatric changes), and Descemet\'s membrane of the cornea (Kayser-Fleischer rings). Diagnostic evaluation shows low serum ceruloplasmin (<20 mg/dL) and high 24-hour urinary copper (>100 ug/day).',
    optionRationales: {
      A: 'Correct. Wilson\'s disease features low ceruloplasmin with elevated 24-hour urinary and tissue copper levels.',
      B: 'Ceruloplasmin is characteristically reduced in >90% of Wilson\'s patients.',
      C: 'High ferritin and transferrin saturation indicate Hemochromatosis.',
      D: 'Anti-GAD antibodies are seen in Stiff-Person Syndrome and Type 1 Diabetes.'
    },
    keyTakeaway: 'Wilson\'s disease causes neuropsychiatric symptoms and KF rings, diagnosed by low ceruloplasmin and elevated 24-hour urinary copper excretion.',
    sourcePageRef: 'Page 36, Q5',
    difficulty: 'High Yield',
    tags: ['Wilson Disease', 'Ceruloplasmin', 'Kayser-Fleischer Rings', 'Copper Metabolism']
  },

  // ----------------------------------------------------
  // SYSTEMIC LUPUS ERYTHEMATOSUS (SLE) (Pages 36-39)
  // ----------------------------------------------------
  {
    id: 'sle_q1',
    topicId: 'sle',
    topicTitle: 'Systemic Lupus Erythematosus (SLE)',
    questionNumber: 1,
    clinicalVignette: 'A 26-year-old woman presents with photosensitive malar rash, inflammatory polyarthritis of the PIP and MCP joints, oral ulcers, and pleuritic chest pain. Urinalysis shows 3+ proteinuria and cellular casts. Serum antinuclear antibody (ANA) is positive at a titer of 1:1280 (homogeneous pattern). Which autoantibody is the MOST specific for the diagnosis of SLE and correlates closely with disease activity and lupus nephritis?',
    options: [
      { id: 'A', text: 'Anti-Ro/SSA' },
      { id: 'B', text: 'Anti-double-stranded DNA (anti-dsDNA)' },
      { id: 'C', text: 'Anti-centromere antibody' },
      { id: 'D', text: 'Anti-histone antibody' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Anti-double-stranded DNA (anti-dsDNA)',
    explanation: 'While ANA is highly sensitive (>98%) for SLE, Anti-dsDNA and Anti-Smith (anti-Sm) antibodies are highly specific for SLE. Furthermore, Anti-dsDNA titers fluctuate with disease activity and correlate directly with the development and flares of active Lupus Nephritis and complement consumption (low C3 and C4).',
    optionRationales: {
      A: 'Anti-Ro/SSA is associated with subacute cutaneous lupus and neonatal lupus with congenital heart block, but lacks the nephritis correlation of anti-dsDNA.',
      B: 'Correct. Anti-dsDNA is highly specific for SLE and directly correlates with disease flares and lupus nephritis.',
      C: 'Anti-centromere antibodies are specific for Limited Cutaneous Systemic Sclerosis (CREST).',
      D: 'Anti-histone antibodies are seen in drug-induced lupus erythematosus.'
    },
    keyTakeaway: 'Anti-dsDNA antibodies are highly specific for SLE and correlate directly with lupus nephritis and disease activity flares.',
    sourcePageRef: 'Pages 36–37, Q1',
    difficulty: 'High Yield',
    tags: ['SLE', 'Anti-dsDNA', 'Lupus Nephritis', 'Autoantibodies']
  },
  {
    id: 'sle_q2',
    topicId: 'sle',
    topicTitle: 'Systemic Lupus Erythematosus (SLE)',
    questionNumber: 2,
    clinicalVignette: 'A 29-year-old woman with known SLE presents for evaluation of persistent hypertension and peripheral edema. 24-hour urine protein is 3.8 g/day, and serum creatinine has risen from 0.8 to 1.6 mg/dL. Renal biopsy shows diffuse global endocapillary hypercellularity, subendothelial immune deposits ("wire-loop" lesions), and prominent capillary wall thickening. Which class of Lupus Nephritis is this, and what is the recommended induction therapy?',
    options: [
      { id: 'A', text: 'Class II (Mesangial proliferative); oral low-dose prednisone' },
      { id: 'B', text: 'Class IV (Diffuse lupus nephritis); high-dose IV pulse corticosteroids plus Mycophenolate Mofetil or IV Cyclophosphamide' },
      { id: 'C', text: 'Class V (Membranous lupus nephritis); ACE inhibitor monotherapy' },
      { id: 'D', text: 'Class I (Minimal mesangial); observation only' },
      { id: 'E', text: 'Class VI (Advanced sclerotic); emergency hemodialysis only' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Class IV (Diffuse lupus nephritis); high-dose IV pulse corticosteroids plus Mycophenolate Mofetil or IV Cyclophosphamide',
    explanation: 'Class IV (Diffuse Lupus Nephritis) is the most common, severe, and aggressive form of renal involvement in SLE (>50% of glomeruli involved, wire-loop subendothelial immune complex deposits). Standard induction therapy to prevent end-stage renal disease requires high-dose corticosteroids (IV methylprednisolone pulses followed by oral prednisone) COMBINED with either Mycophenolate Mofetil (MMF) or intravenous Cyclophosphamide.',
    optionRationales: {
      A: 'Class II is mild mesangial disease without wire loops or nephrotic-range proteinuria.',
      B: 'Correct. Class IV diffuse proliferative nephritis requires intensive immunosuppressive induction with pulse steroids plus MMF or Cyclophosphamide.',
      C: 'Class V is pure subepithelial membranous disease causing nephrotic syndrome.',
      D: 'Class I is minimal mesangial disease without clinical renal impairment.',
      E: 'Class VI is advanced sclerotic disease (>90% glomerulosclerosis).'
    },
    keyTakeaway: 'Class IV (Diffuse proliferative) lupus nephritis requires intensive induction immunosuppression with pulse corticosteroids plus MMF or Cyclophosphamide.',
    sourcePageRef: 'Pages 37–38, Q2',
    difficulty: 'High Yield',
    tags: ['Lupus Nephritis', 'Class IV', 'Cyclophosphamide', 'Mycophenolate']
  },
  {
    id: 'sle_q3',
    topicId: 'sle',
    topicTitle: 'Systemic Lupus Erythematosus (SLE)',
    questionNumber: 3,
    clinicalVignette: 'A 31-year-old woman with SLE has a history of two unprovoked deep vein thromboses and three consecutive spontaneous first-trimester miscarriages. Laboratory testing reveals a persistently prolonged aPTT that fails to correct with normal mixing plasma, a positive lupus anticoagulant test, and high-titer anticardiolipin IgG antibodies. What is the diagnosis, and what is the long-term management for secondary thromboprophylaxis?',
    options: [
      { id: 'A', text: 'Immune Thrombocytopenic Purpura; oral prednisone' },
      { id: 'B', text: 'Antiphospholipid Syndrome (APS); long-term oral anticoagulation with Warfarin (target INR 2.0–3.0)' },
      { id: 'C', text: 'Disseminated Intravascular Coagulation; fresh frozen plasma infusions' },
      { id: 'D', text: 'Factor V Leiden deficiency; low-dose aspirin monotherapy' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Antiphospholipid Syndrome (APS); long-term oral anticoagulation with Warfarin (target INR 2.0–3.0)',
    explanation: 'The patient meets the Sydney criteria for Antiphospholipid Syndrome (APS / secondary to SLE): vascular thrombosis (DVT), recurrent pregnancy morbidity (miscarriages), and persistent antiphospholipid antibodies (Lupus anticoagulant / anticardiolipin). The paradox of a prolonged in vitro aPTT with in vivo hypercoagulability is classic. Long-term secondary thromboprophylaxis requires lifelong Vitamin K Antagonist (Warfarin) anticoagulation targeting an INR of 2.0–3.0.',
    optionRationales: {
      A: 'ITP causes isolated thrombocytopenic bleeding, not recurrent venous thromboses and miscarriages.',
      B: 'Correct. Secondary Antiphospholipid Syndrome with thrombosis mandates long-term Warfarin anticoagulation (target INR 2-3).',
      C: 'DIC causes widespread consumptive microvascular clotting and severe bleeding with low fibrinogen.',
      D: 'Aspirin alone is insufficient for established venous thromboembolism in APS.'
    },
    keyTakeaway: 'Secondary Antiphospholipid Syndrome (thrombosis + miscarriages + aPL antibodies) requires long-term Warfarin anticoagulation (INR 2–3).',
    sourcePageRef: 'Page 38, Q3',
    difficulty: 'High Yield',
    tags: ['Antiphospholipid Syndrome', 'Lupus Anticoagulant', 'Warfarin', 'Thrombosis']
  },
  {
    id: 'sle_q4',
    topicId: 'sle',
    topicTitle: 'Systemic Lupus Erythematosus (SLE)',
    questionNumber: 4,
    clinicalVignette: 'A 24-year-old newly diagnosed SLE patient is initiated on Hydroxychloroquine (HCQ) 200 mg daily. She asks why this drug is recommended for all SLE patients regardless of disease severity. Which of the following represents the proven long-term clinical benefits of hydroxychloroquine in SLE?',
    options: [
      { id: 'A', text: 'It completely eliminates the need for any sun protection' },
      { id: 'B', text: 'It reduces flare rates, prevents organ damage accrual, lowers thrombotic risk, and improves overall long-term survival' },
      { id: 'C', text: 'It cures the underlying genetic defect causing autoimmunity' },
      { id: 'D', text: 'It replaces renal transplantation in end-stage lupus nephritis' }
    ],
    correctOption: 'B',
    correctAnswerText: 'It reduces flare rates, prevents organ damage accrual, lowers thrombotic risk, and improves overall long-term survival',
    explanation: 'Hydroxychloroquine (HCQ, an antimalarial / Toll-like receptor signaling modulator) is the cornerstone baseline therapy for all patients with SLE unless contraindicated. High-quality evidence confirms that continuous HCQ therapy reduces lupus flare rates, prevents cumulative irreversible organ damage, lowers the risk of arterial/venous thrombosis, and confers a substantial survival benefit.',
    optionRationales: {
      A: 'Sun protection (SPF 50+) remains mandatory because ultraviolet light directly triggers keratinocyte apoptosis and SLE flares.',
      B: 'Correct. HCQ is the disease-modifying anchor in SLE, reducing flares, thrombotic events, damage accrual, and mortality.',
      C: 'HCQ modulates endosomal TLRs and antigen presentation, but does not alter genome sequence.',
      D: 'HCQ cannot reverse end-stage sclerotic renal failure.'
    },
    keyTakeaway: 'Hydroxychloroquine is the cornerstone therapy for all SLE patients, proven to reduce flares, thrombosis, damage accrual, and mortality.',
    sourcePageRef: 'Pages 38–39, Q4',
    difficulty: 'High Yield',
    tags: ['Hydroxychloroquine', 'SLE Maintenance', 'Disease Modification']
  },
  {
    id: 'sle_q5',
    topicId: 'sle',
    topicTitle: 'Systemic Lupus Erythematosus (SLE)',
    questionNumber: 5,
    clinicalVignette: 'A pregnant woman with active SLE and high-titer Anti-Ro/SSA and Anti-La/SSB antibodies undergoes routine fetal echocardiography at 20 weeks gestation. The fetal heart rate is found to be 52 bpm, with complete dissociation between atrial and ventricular contractions. What is the diagnosis?',
    options: [
      { id: 'A', text: 'Fetal ventricular tachycardia' },
      { id: 'B', text: 'Congenital complete (3rd-degree) atrioventricular heart block due to transplacental transfer of maternal anti-Ro/La antibodies' },
      { id: 'C', text: 'Physiological fetal sinus bradycardia' },
      { id: 'D', text: 'Tetralogy of Fallot' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Congenital complete (3rd-degree) atrioventricular heart block due to transplacental transfer of maternal anti-Ro/La antibodies',
    explanation: 'Neonatal Lupus Erythematosus results from transplacental passage of maternal IgG Anti-Ro/SSA and Anti-La/SSB antibodies beginning at 16–24 weeks gestation. These autoantibodies bind to fetal cardiac conduction tissue (AV node and bundle of His), triggering immune-mediated inflammation, calcification, and irreversible fibrosis, producing permanent Congenital Complete (3rd-degree) Heart Block.',
    optionRationales: {
      A: 'Fetal heart rate is 52 bpm (severe bradycardia, not tachycardia).',
      B: 'Correct. Transplacental anti-Ro/SSA antibodies cause permanent inflammatory fibrosis of the fetal AV node (congenital 3rd-degree heart block).',
      C: 'Fetal heart rate of 52 bpm with AV dissociation is severe structural heart block, never physiological.',
      D: 'Tetralogy of Fallot does not present as isolated complete AV block on fetal ultrasound.'
    },
    keyTakeaway: 'Maternal Anti-Ro/SSA antibodies cross the placenta to cause neonatal lupus and irreversible congenital complete heart block.',
    sourcePageRef: 'Page 39, Q5',
    difficulty: 'High Yield',
    tags: ['Neonatal Lupus', 'Anti-Ro/SSA', 'Congenital Heart Block', 'Pregnancy']
  },

  // ----------------------------------------------------
  // AUTOIMMUNE HEPATITIS (AIH) (Pages 44-46)
  // ----------------------------------------------------
  {
    id: 'aih_q1',
    topicId: 'autoimmune_hepatitis',
    topicTitle: 'Autoimmune Hepatitis (AIH)',
    questionNumber: 1,
    clinicalVignette: 'A 32-year-old woman presents with fatigue, jaundice, and right upper quadrant discomfort. Laboratory tests show: ALT 780 IU/L, AST 650 IU/L, Total Bilirubin 4.8 mg/dL, and Alkaline Phosphatase 120 IU/L (mild elevation). Viral hepatitis serologies (A, B, C, E) are negative. Serum protein electrophoresis shows marked hypergammaglobulinemia with elevated IgG. Which autoantibody profile is most characteristic of Type 1 Autoimmune Hepatitis?',
    options: [
      { id: 'A', text: 'Anti-Liver Kidney Microsome-1 (anti-LKM1) and anti-LC1' },
      { id: 'B', text: 'Antinuclear Antibody (ANA) and Anti-Smooth Muscle Antibody (ASMA) with anti-actin specificity' },
      { id: 'C', text: 'Antimitochondrial Antibody (AMA)' },
      { id: 'D', text: 'Anti-Centromere Antibody' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Antinuclear Antibody (ANA) and Anti-Smooth Muscle Antibody (ASMA) with anti-actin specificity',
    explanation: 'Type 1 Autoimmune Hepatitis (accounting for 80–90% of AIH cases worldwide, typically affecting young to middle-aged women) is characterized by positive Antinuclear Antibodies (ANA) and Anti-Smooth Muscle Antibodies (ASMA, specifically directed against F-actin) along with polyclonal IgG hypergammaglobulinemia.',
    optionRationales: {
      A: 'Anti-LKM1 and anti-LC1 antibodies define Type 2 AIH (which primarily affects pediatric/adolescent patients).',
      B: 'Correct. Type 1 AIH is characterized by ANA, ASMA (anti-actin), and elevated IgG.',
      C: 'Antimitochondrial antibodies (AMA) are the diagnostic hallmark of Primary Biliary Cholangitis (PBC).',
      D: 'Anti-centromere antibodies are seen in CREST / limited scleroderma.'
    },
    keyTakeaway: 'Type 1 Autoimmune Hepatitis is characterized by positive ANA, ASMA (anti-actin), and marked polyclonal IgG hypergammaglobulinemia.',
    sourcePageRef: 'Pages 44–45, Q1',
    difficulty: 'High Yield',
    tags: ['Autoimmune Hepatitis', 'Type 1 AIH', 'ANA', 'ASMA', 'IgG']
  },
  {
    id: 'aih_q2',
    topicId: 'autoimmune_hepatitis',
    topicTitle: 'Autoimmune Hepatitis (AIH)',
    questionNumber: 2,
    clinicalVignette: 'A 14-year-old girl is evaluated for acute jaundice and elevated transaminases (ALT 1100 IU/L). Autoantibody panel is negative for ANA and ASMA, but positive for Anti-Liver Kidney Microsome type 1 (anti-LKM1) antibodies. Which autoantigen is targeted by anti-LKM1 in Type 2 Autoimmune Hepatitis?',
    options: [
      { id: 'A', text: 'Cytochrome P450 2D6 (CYP2D6)' },
      { id: 'B', text: 'Formiminotransferase cyclodeaminase (FTCD)' },
      { id: 'C', text: 'Pyruvate dehydrogenase complex (PDC-E2)' },
      { id: 'D', text: 'UDP-glucuronosyltransferase' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Cytochrome P450 2D6 (CYP2D6)',
    explanation: 'Type 2 Autoimmune Hepatitis (predominantly presenting in children and adolescent girls with rapid progression to acute liver failure) is driven by anti-LKM1 autoantibodies that specifically target the Cytochrome P450 2D6 (CYP2D6) enzyme located on the endoplasmic reticulum of hepatocytes.',
    optionRationales: {
      A: 'Correct. Anti-LKM1 autoantibodies in Type 2 AIH specifically target the Cytochrome P450 2D6 (CYP2D6) antigen.',
      B: 'FTCD is targeted by anti-Liver Cytosol type 1 (anti-LC1) antibodies.',
      C: 'PDC-E2 is the mitochondrial antigen targeted by AMA in Primary Biliary Cholangitis.',
      D: 'UDP-glucuronosyltransferase is deficient in Gilbert and Crigler-Najjar syndromes.'
    },
    keyTakeaway: 'Type 2 AIH features anti-LKM1 autoantibodies targeted against Cytochrome P450 2D6 (CYP2D6).',
    sourcePageRef: 'Page 45, Q2',
    difficulty: 'Advanced',
    tags: ['Type 2 AIH', 'Anti-LKM1', 'CYP2D6', 'Pediatric Hepatology']
  },
  {
    id: 'aih_q3',
    topicId: 'autoimmune_hepatitis',
    topicTitle: 'Autoimmune Hepatitis (AIH)',
    questionNumber: 3,
    clinicalVignette: 'A liver biopsy is performed in a 40-year-old woman with suspected autoimmune hepatitis. What histopathological triad on liver biopsy provides the strongest histological evidence for Autoimmune Hepatitis?',
    options: [
      { id: 'A', text: 'Interface hepatitis (piecemeal necrosis), dense lymphoplasmacytic infiltrate with abundant plasma cells, and hepatocyte rosettes / emperipolesis' },
      { id: 'B', text: 'Granulomatous destruction of interlobular bile ducts with ductopenia' },
      { id: 'C', text: 'Macrovesicular steatosis with Mallory-Denk bodies and neutrophilic perivenular infiltration' },
      { id: 'D', text: 'Concentric "onion-skin" periductal fibrosis of large bile ducts' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Interface hepatitis (piecemeal necrosis), dense lymphoplasmacytic infiltrate with abundant plasma cells, and hepatocyte rosettes / emperipolesis',
    explanation: 'The classic liver biopsy features diagnostic of Autoimmune Hepatitis are: (1) Interface hepatitis (lymphoplasmacytic inflammatory destruction extending across the limiting plate into the hepatic lobule), (2) Dense plasma cell-rich infiltration in portal tracts, (3) Hepatocyte rosette formation, and (4) Emperipolesis (active penetration of intact lymphocytes into hepatocytes).',
    optionRationales: {
      A: 'Correct. Interface hepatitis + plasma cell-predominant infiltrate + hepatocyte rosettes/emperipolesis is the histological hallmark of AIH.',
      B: 'Granulomatous bile duct destruction is typical of Primary Biliary Cholangitis (PBC).',
      C: 'Steatosis with Mallory bodies and neutrophils describes alcoholic/non-alcoholic steatohepatitis (NASH).',
      D: 'Concentric "onion-skin" fibrosis defines Primary Sclerosing Cholangitis (PSC).'
    },
    keyTakeaway: 'Liver histology in AIH characteristically shows interface hepatitis, plasma cell-rich portal infiltrates, and hepatocyte rosettes.',
    sourcePageRef: 'Pages 45–46, Q3',
    difficulty: 'High Yield',
    tags: ['Liver Biopsy', 'Interface Hepatitis', 'Plasma Cells', 'AIH Pathology']
  },
  {
    id: 'aih_q4',
    topicId: 'autoimmune_hepatitis',
    topicTitle: 'Autoimmune Hepatitis (AIH)',
    questionNumber: 4,
    clinicalVignette: 'A 38-year-old woman is diagnosed with Type 1 AIH (ALT 640 IU/L, IgG elevated, typical biopsy). What is the standard first-line pharmacological regimen for inducing and maintaining disease remission in Autoimmune Hepatitis?',
    options: [
      { id: 'A', text: 'Interferon-alpha plus ribavirin' },
      { id: 'B', text: 'Ursodeoxycholic acid (UDCA) monotherapy' },
      { id: 'C', text: 'Prednisolone (or Budesonide in non-cirrhotic patients) combined with Azathioprine' },
      { id: 'D', text: 'Infliximab monotherapy' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Prednisolone (or Budesonide in non-cirrhotic patients) combined with Azathioprine',
    explanation: 'The established first-line therapy for AIH is oral Prednisolone (or oral Budesonide in non-cirrhotic patients) combined with Azathioprine (a purine synthesis inhibitor). This combination achieves biochemical remission in >80% of patients while allowing rapid corticosteroid dose-tapering to minimize steroid-related adverse effects. Azathioprine is continued as long-term maintenance monotherapy.',
    optionRationales: {
      A: 'Interferons stimulate the immune system and can precipitate fatal fulminant liver failure in AIH.',
      B: 'Ursodeoxycholic acid is first-line for Primary Biliary Cholangitis (PBC), not AIH.',
      C: 'Correct. Prednisolone (or budesonide) plus Azathioprine is the standard of care for AIH induction and maintenance.',
      D: 'TNF-alpha inhibitors like infliximab are not first-line and carry severe hepatotoxicity risks.'
    },
    keyTakeaway: 'First-line therapy for AIH is Prednisolone (or Budesonide) plus Azathioprine, transitioned to Azathioprine maintenance.',
    sourcePageRef: 'Page 46, Q4',
    difficulty: 'High Yield',
    tags: ['AIH Treatment', 'Prednisolone', 'Azathioprine', 'Budesonide']
  },
  {
    id: 'aih_q5',
    topicId: 'autoimmune_hepatitis',
    topicTitle: 'Autoimmune Hepatitis (AIH)',
    questionNumber: 5,
    clinicalVignette: 'Prior to initiating Azathioprine in a patient with newly diagnosed Autoimmune Hepatitis, which enzyme activity or genotype should be tested to avoid severe, potentially fatal drug-induced myelosuppression?',
    options: [
      { id: 'A', text: 'Glucose-6-phosphate dehydrogenase (G6PD)' },
      { id: 'B', text: 'Thiopurine S-methyltransferase (TPMT) and/or NUDT15' },
      { id: 'C', text: 'Dihydropyrimidine dehydrogenase (DPD)' },
      { id: 'D', text: 'CYP2C19' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Thiopurine S-methyltransferase (TPMT) and/or NUDT15',
    explanation: 'Azathioprine is converted to 6-mercaptopurine, which is inactivated by Thiopurine S-Methyltransferase (TPMT). Patients with homozygous or heterozygous TPMT deficiency (or NUDT15 variants) preferentially shunt 6-MP into toxic 6-thioguanine nucleotides (6-TGN), causing life-threatening bone marrow aplasia and profound pancytopenia. Pre-treatment TPMT testing is mandatory.',
    optionRationales: {
      A: 'G6PD deficiency causes acute hemolytic anemia when exposed to oxidant drugs (rasburicase, primaquine, dapsone).',
      B: 'Correct. TPMT and NUDT15 testing prevents fatal myelosuppression before starting Azathioprine.',
      C: 'DPD testing is performed before 5-fluorouracil / capecitabine chemotherapy.',
      D: 'CYP2C19 metabolizes clopidogrel and PPIs.'
    },
    keyTakeaway: 'Always measure TPMT activity/genotype before starting Azathioprine to prevent fatal bone marrow suppression.',
    sourcePageRef: 'Page 46, Q5',
    difficulty: 'High Yield',
    tags: ['TPMT', 'Azathioprine', 'Pharmacogenomics', 'Myelosuppression']
  },

  // ----------------------------------------------------
  // INVESTIGATION OF CHRONIC DIARRHEA (Pages 49-51)
  // ----------------------------------------------------
  {
    id: 'cd_q1',
    topicId: 'chronic_diarrhea',
    topicTitle: 'Investigation of Chronic Diarrhea',
    questionNumber: 1,
    clinicalVignette: 'A 42-year-old woman presents with a 4-month history of watery diarrhea (6–8 bowel movements/day). When she fasts for 24 hours prior to a colonoscopy, her diarrhea completely ceases. Fecal analysis shows: Stool Na⁺: 35 mmol/L, Stool K⁺: 25 mmol/L, Measured stool osmolality: 290 mOsm/kg. What is the calculated fecal osmotic gap, and what type of chronic diarrhea does this represent?',
    options: [
      { id: 'A', text: 'Fecal osmotic gap = 170 mOsm/kg; Osmotic diarrhea' },
      { id: 'B', text: 'Fecal osmotic gap = 30 mOsm/kg; Secretory diarrhea' },
      { id: 'C', text: 'Fecal osmotic gap = 0 mOsm/kg; Motility disorder' },
      { id: 'D', text: 'Fecal osmotic gap = 50 mOsm/kg; Inflammatory diarrhea' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Fecal osmotic gap = 170 mOsm/kg; Osmotic diarrhea',
    explanation: 'Fecal Osmotic Gap is calculated as: 290 – 2 × (Stool Na + Stool K). Here: 290 – 2 × (35 + 25) = 290 – 120 = 170 mOsm/kg. An osmotic gap > 100–125 mOsm/kg defines Osmotic Diarrhea (caused by unabsorbed luminal solutes, such as lactose, malabsorption, or osmotic laxatives). Crucially, osmotic diarrhea characteristically ceases during fasting, confirming the diagnosis.',
    optionRationales: {
      A: 'Correct. Osmotic gap is 170 mOsm/kg (>100 mOsm/kg) and cessation with fasting is pathognomonic for osmotic diarrhea.',
      B: 'Secretory diarrhea has an osmotic gap < 50 mOsm/kg and persists during fasting.',
      C: 'Motility disorders typically have normal osmotic gaps.',
      D: 'Inflammatory diarrhea features blood, mucus, and elevated fecal calprotectin.'
    },
    keyTakeaway: 'Fecal osmotic gap > 100 mOsm/kg that resolves upon fasting is diagnostic of Osmotic Diarrhea.',
    sourcePageRef: 'Pages 49–50, Q1',
    difficulty: 'High Yield',
    tags: ['Chronic Diarrhea', 'Fecal Osmotic Gap', 'Osmotic vs Secretory', 'Gastroenterology']
  },
  {
    id: 'cd_q2',
    topicId: 'chronic_diarrhea',
    topicTitle: 'Investigation of Chronic Diarrhea',
    questionNumber: 2,
    clinicalVignette: 'A 55-year-old man presents with voluminous, watery diarrhea (3 L/day) that continues unabated during a 48-hour fast and wakes him from sleep at night. Stool electrolytes show: Stool Na⁺: 95 mmol/L, Stool K⁺: 40 mmol/L. Fecal osmotic gap is calculated at 20 mOsm/kg (<50 mOsm/kg). What is the mechanism of this diarrhea, and which underlying condition should be investigated?',
    options: [
      { id: 'A', text: 'Osmotic diarrhea; Lactose intolerance' },
      { id: 'B', text: 'Secretory diarrhea; Neuroendocrine tumor (e.g., VIPoma, carcinoid, Zollinger-Ellison) or microscopic colitis' },
      { id: 'C', text: 'Exudative diarrhea; Ulcerative colitis' },
      { id: 'D', text: 'Factitious diarrhea; Ingestion of polyethylene glycol' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Secretory diarrhea; Neuroendocrine tumor (e.g., VIPoma, carcinoid, Zollinger-Ellison) or microscopic colitis',
    explanation: 'A low fecal osmotic gap (<50 mOsm/kg), nocturnal diarrhea, high stool volume (>1 L/day), and persistence despite fasting are classic hallmarks of Secretory Diarrhea. Secretory diarrhea is caused by active mucosal chloride/water secretion or inhibition of sodium absorption, driven by bacterial toxins, enterohormones (VIPoma / WDHA syndrome, gastrinoma, carcinoid), microscopic colitis, or bile acid malabsorption.',
    optionRationales: {
      A: 'Osmotic diarrhea has a high osmotic gap (>100 mOsm/kg) and ceases with fasting.',
      B: 'Correct. Low osmotic gap (<50 mOsm/kg) + persistence with fasting = Secretory diarrhea (VIPoma, carcinoid, microscopic colitis).',
      C: 'Exudative diarrhea presents with blood, pus, and mucosal friability.',
      D: 'Polyethylene glycol causes osmotic diarrhea with a high osmotic gap.'
    },
    keyTakeaway: 'Secretory diarrhea features a low fecal osmotic gap (<50 mOsm/kg), persists during fasting, and causes nocturnal diarrhea.',
    sourcePageRef: 'Page 50, Q2',
    difficulty: 'High Yield',
    tags: ['Secretory Diarrhea', 'VIPoma', 'Nocturnal Diarrhea', 'Electrolytes']
  },
  {
    id: 'cd_q3',
    topicId: 'chronic_diarrhea',
    topicTitle: 'Investigation of Chronic Diarrhea',
    questionNumber: 3,
    clinicalVignette: 'A 30-year-old woman presents with chronic bloating, steatorrhea (pale, foul-smelling, floating stools), iron-deficiency anemia, and an itchy, vesicular skin eruption on her elbows and knees (dermatitis herpetiformis). What is the single most sensitive and specific initial serological test for Celiac Disease?',
    options: [
      { id: 'A', text: 'Serum anti-gliadin antibodies (AGA)' },
      { id: 'B', text: 'Serum IgA Anti-Tissue Transglutaminase (anti-tTG) alongside Total Serum IgA' },
      { id: 'C', text: 'Fecal calprotectin' },
      { id: 'D', text: 'Serum anti-parietal cell antibodies' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Serum IgA Anti-Tissue Transglutaminase (anti-tTG) alongside Total Serum IgA',
    explanation: 'Serum IgA Anti-Tissue Transglutaminase (anti-tTG IgA) is the gold standard first-line serological screening test for celiac disease (sensitivity and specificity >95–98%). Total serum IgA must always be measured concurrently because selective IgA deficiency is 10–15 times more common in celiac disease, which would produce a false-negative IgA anti-tTG result (in which case IgG anti-tTG or IgG-DGP is used).',
    optionRationales: {
      A: 'Native anti-gliadin antibodies (AGA) have poor sensitivity and specificity and are obsolete.',
      B: 'Correct. IgA anti-tTG combined with total serum IgA is the first-line screening test for celiac disease.',
      C: 'Fecal calprotectin is a marker of neutrophilic intestinal inflammation (IBD), not celiac-specific.',
      D: 'Anti-parietal cell antibodies are found in autoimmune atrophic gastritis (pernicious anemia).'
    },
    keyTakeaway: 'IgA Anti-Tissue Transglutaminase (anti-tTG) with total serum IgA is the gold standard initial screening test for Celiac Disease.',
    sourcePageRef: 'Pages 50–51, Q3',
    difficulty: 'High Yield',
    tags: ['Celiac Disease', 'Anti-tTG IgA', 'Dermatitis Herpetiformis', 'Malabsorption']
  },
  {
    id: 'cd_q4',
    topicId: 'chronic_diarrhea',
    topicTitle: 'Investigation of Chronic Diarrhea',
    questionNumber: 4,
    clinicalVignette: 'A 28-year-old man presents with chronic crampy lower abdominal pain, recurrent non-bloody loose stools, and significant flatulence for 6 months. He has no nocturnal symptoms, no weight loss, no anemia, and normal inflammatory markers. Stool testing for Fecal Calprotectin is requested. What is the clinical utility of Fecal Calprotectin in evaluating chronic diarrhea?',
    options: [
      { id: 'A', text: 'It identifies the specific bacterial pathogen causing dysentery' },
      { id: 'B', text: 'It is a stable biomarker of neutrophilic mucosal inflammation that reliably differentiates Inflammatory Bowel Disease (IBD) from functional Irritable Bowel Syndrome (IBS)' },
      { id: 'C', text: 'It directly measures pancreatic exocrine elastase secretion' },
      { id: 'D', text: 'It measures the rate of colonic bile acid reabsorption' }
    ],
    correctOption: 'B',
    correctAnswerText: 'It is a stable biomarker of neutrophilic mucosal inflammation that reliably differentiates Inflammatory Bowel Disease (IBD) from functional Irritable Bowel Syndrome (IBS)',
    explanation: 'Calprotectin is a calcium-binding protein released by activated neutrophils shedding into the intestinal lumen. A low fecal calprotectin (<50 ug/g) has an extremely high negative predictive value (>95%) for mucosal inflammation, effectively ruling out Inflammatory Bowel Disease (Crohn\'s/UC) and avoiding unnecessary colonoscopy in suspected Irritable Bowel Syndrome (IBS).',
    optionRationales: {
      A: 'Fecal calprotectin indicates inflammation, not pathogen-specific identification (stool culture/PCR does).',
      B: 'Correct. Fecal calprotectin reliably differentiates inflammatory intestinal disease (IBD) from non-inflammatory functional disorders (IBS).',
      C: 'Fecal elastase-1 measures pancreatic exocrine insufficiency.',
      D: 'SeHCAT retention test evaluates bile acid malabsorption.'
    },
    keyTakeaway: 'Fecal Calprotectin is a sensitive stool biomarker of intestinal neutrophilic inflammation that differentiates IBD from IBS.',
    sourcePageRef: 'Page 51, Q4',
    difficulty: 'High Yield',
    tags: ['Fecal Calprotectin', 'IBD vs IBS', 'Biomarkers', 'Chronic Diarrhea']
  },
  {
    id: 'cd_q5',
    topicId: 'chronic_diarrhea',
    topicTitle: 'Investigation of Chronic Diarrhea',
    questionNumber: 5,
    clinicalVignette: 'A 65-year-old woman presents with chronic, watery, non-bloody diarrhea of 6 months duration. Colonoscopy shows completely normal-appearing colonic mucosa from cecum to rectum. However, random mucosal biopsies taken throughout the colon reveal a thickened subepithelial collagen band (>10 µm) beneath the surface epithelium and an intraepithelial lymphocytic infiltrate. What is the diagnosis?',
    options: [
      { id: 'A', text: 'Collagenous Colitis (Microscopic Colitis)' },
      { id: 'B', text: 'Ulcerative Colitis in endoscopic remission' },
      { id: 'C', text: 'Pseudomembranous Colitis' },
      { id: 'D', text: 'Melanosis Coli' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Collagenous Colitis (Microscopic Colitis)',
    explanation: 'Microscopic Colitis (subtyped into Collagenous Colitis and Lymphocytic Colitis) is a major cause of chronic watery diarrhea in middle-aged and elderly patients (often triggered by NSAIDs, PPIs, or SSRIs). The endoscopic appearance of the colonic mucosa is completely normal, but microscopic histology reveals diagnostic subepithelial collagen bands (>10 um thickness) in collagenous colitis or >20 intraepithelial lymphocytes per 100 enterocytes in lymphocytic colitis. First-line treatment is oral Budesonide.',
    optionRationales: {
      A: 'Correct. Normal colonoscopic appearance with a thickened subepithelial collagen band on biopsy defines Collagenous Colitis.',
      B: 'Ulcerative colitis features mucosal distortion, crypt abscesses, and architectural destruction.',
      C: 'Pseudomembranous colitis shows yellow-white mucosal plaques on colonoscopy.',
      D: 'Melanosis coli shows dark brown mucosal pigmentation from chronic anthraquinone laxative abuse.'
    },
    keyTakeaway: 'Microscopic (Collagenous) Colitis presents with chronic watery diarrhea, a normal-appearing colonoscopy, and a thickened subepithelial collagen band on biopsy.',
    sourcePageRef: 'Page 51, Q5',
    difficulty: 'High Yield',
    tags: ['Microscopic Colitis', 'Collagenous Colitis', 'Budesonide', 'Biopsy']
  },

  // ----------------------------------------------------
  // ASSESSMENT OF DEHYDRATION (Pages 53-54)
  // ----------------------------------------------------
  {
    id: 'dehyd_q1',
    topicId: 'dehydration_assessment',
    topicTitle: 'Assessment of Dehydration',
    questionNumber: 1,
    clinicalVignette: 'A 4-year-old child is brought to the clinic with acute watery diarrhea and vomiting for 24 hours. On assessment: the child is irritable, eyes are sunken, tears are absent, drinks eagerly when offered water, and skin pinch on the abdomen goes back slowly (taking 1–2 seconds). According to WHO classification, what degree of dehydration is present, and what is the appropriate treatment plan?',
    options: [
      { id: 'A', text: 'No Dehydration; WHO Plan A (home fluids and zinc)' },
      { id: 'B', text: 'Some (Moderate) Dehydration; WHO Plan B (Oral Rehydration Salts 75 mL/kg over 4 hours)' },
      { id: 'C', text: 'Severe Dehydration; WHO Plan C (Immediate IV Ringer\'s Lactate 100 mL/kg)' },
      { id: 'D', text: 'Hypernatremic dehydration; high-flow oxygen only' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Some (Moderate) Dehydration; WHO Plan B (Oral Rehydration Salts 75 mL/kg over 4 hours)',
    explanation: 'Under the WHO IMCI guidelines, "Some Dehydration" is diagnosed when 2 or more of the following signs are present: (1) Restless/irritable, (2) Sunken eyes, (3) Drinks eagerly/thirsty, (4) Skin pinch goes back slowly (<2 sec). Treatment is WHO Plan B: 75 mL/kg of low-osmolarity Oral Rehydration Solution (ORS) administered orally under supervision over a 4-hour period, followed by reassessment.',
    optionRationales: {
      A: 'Plan A is for children with diarrhea but no clinical signs of dehydration.',
      B: 'Correct. Irritability + sunken eyes + thirsty + slow skin pinch defines WHO Some Dehydration treated with Plan B (ORS 75 mL/kg in 4h).',
      C: 'Plan C (IV fluids) is reserved for Severe Dehydration (lethargic/unconscious, unable to drink, skin pinch very slow >2 sec).',
      D: 'High-flow oxygen does not correct volume deficits.'
    },
    keyTakeaway: 'WHO "Some Dehydration" (irritable, sunken eyes, thirsty, slow skin pinch) is treated with Plan B: supervised ORS 75 mL/kg over 4 hours.',
    sourcePageRef: 'Pages 53–54, Q1',
    difficulty: 'High Yield',
    tags: ['WHO Dehydration', 'Plan B', 'Oral Rehydration Salts', 'Pediatric Fluid Resuscitation']
  },
  {
    id: 'dehyd_q2',
    topicId: 'dehydration_assessment',
    topicTitle: 'Assessment of Dehydration',
    questionNumber: 2,
    clinicalVignette: 'An 18-month-old infant with cholera presents with severe profuse rice-water diarrhea. On examination: the infant is lethargic and floppy, eyes are deeply sunken, tears absent, unable to drink, radial pulse is feeble, and abdominal skin pinch goes back very slowly (taking >2 seconds). What is the immediate fluid resuscitation strategy according to WHO Plan C?',
    options: [
      { id: 'A', text: 'Give 100 mL/kg IV Ringer\'s Lactate (or normal saline): 30 mL/kg in the first 30 minutes (1 hour for infants <1 yr), followed by 70 mL/kg over 2.5 hours (5 hours for infants <1 yr)' },
      { id: 'B', text: 'Give 500 mL of 5% Dextrose bolus over 10 minutes' },
      { id: 'C', text: 'Administer ORS via nasogastric tube at 10 mL/kg/hr' },
      { id: 'D', text: 'Give broad-spectrum antibiotics and wait 6 hours before fluid therapy' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Give 100 mL/kg IV Ringer\'s Lactate (or normal saline): 30 mL/kg in the first 30 minutes (1 hour for infants <1 yr), followed by 70 mL/kg over 2.5 hours (5 hours for infants <1 yr)',
    explanation: 'The infant exhibits signs of Severe Dehydration / Hypovolemic Shock (lethargic, unable to drink, very slow skin pinch >2s, feeble pulse). WHO Plan C mandates immediate IV resuscitation with 100 mL/kg of Ringer\'s Lactate (or Normal Saline): for patients >= 1 year, give 30 mL/kg over 30 minutes, then 70 mL/kg over 2.5 hours (total 3 hours).',
    optionRationales: {
      A: 'Correct. WHO Plan C specifies 100 mL/kg IV Ringer\'s Lactate divided into 30 mL/kg rapid bolus followed by 70 mL/kg infusion.',
      B: 'Pure 5% Dextrose contains no electrolytes and will cause fatal cerebral edema and acute hyponatremia.',
      C: 'Nasogastric ORS is second-line only if IV access is completely impossible and patient is transported to an IV facility.',
      D: 'Delaying fluid resuscitation in cholera shock results in death within hours.'
    },
    keyTakeaway: 'Severe dehydration in children requires emergent WHO Plan C: 100 mL/kg IV Ringer\'s Lactate divided into rapid and maintenance phases.',
    sourcePageRef: 'Page 54, Q2',
    difficulty: 'High Yield',
    tags: ['Severe Dehydration', 'WHO Plan C', 'Ringer Lactate', 'Cholera Resuscitation']
  },
  {
    id: 'dehyd_q3',
    topicId: 'dehydration_assessment',
    topicTitle: 'Assessment of Dehydration',
    questionNumber: 3,
    clinicalVignette: 'Why is low-osmolarity Oral Rehydration Solution (reduced-osmolarity ORS, 245 mOsm/L) recommended over the original 1975 WHO ORS formulation (311 mOsm/L) for non-cholera diarrheal dehydration?',
    options: [
      { id: 'A', text: 'It has higher glucose concentration to provide more calories' },
      { id: 'B', text: 'Reduced sodium and glucose osmolarity reduces stool output, decreases vomiting, and reduces the need for unscheduled IV therapy' },
      { id: 'C', text: 'It completely eliminates the need for zinc supplementation' },
      { id: 'D', text: 'It can be given intravenously' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Reduced sodium and glucose osmolarity reduces stool output, decreases vomiting, and reduces the need for unscheduled IV therapy',
    explanation: 'The original 1975 WHO ORS (osmolarity 311 mOsm/L) occasionally induced osmotic diarrhea in non-cholera viral gastroenteritis. The modernized low-osmolarity ORS (245 mOsm/L: Na+ 75 mmol/L, Glucose 75 mmol/L) optimizes the coupled SGLT-1 sodium-glucose cotransport mechanism while avoiding hypertonic luminal water draw, reducing stool output by 20%, reducing vomiting by 30%, and decreasing the need for IV infusions by 33%.',
    optionRationales: {
      A: 'Low-osmolarity ORS actually reduces glucose concentration (from 111 to 75 mmol/L).',
      B: 'Correct. Reduced osmolarity (245 mOsm/L) significantly reduces stool volume, vomiting frequency, and IV hydration requirements.',
      C: 'Zinc supplementation (20 mg/day for 10–14 days) remains mandatory alongside ORS.',
      D: 'ORS is strictly an enteral (oral/NG) solution and must never be infused intravenously.'
    },
    keyTakeaway: 'Low-osmolarity ORS (245 mOsm/L) optimizes SGLT-1 transport, reducing stool output, vomiting, and IV fluid requirements.',
    sourcePageRef: 'Page 54, Q3',
    difficulty: 'High Yield',
    tags: ['Low-Osmolarity ORS', 'SGLT-1', 'Diarrhea Management', 'Pediatrics']
  },
  {
    id: 'dehyd_q4',
    topicId: 'dehydration_assessment',
    topicTitle: 'Assessment of Dehydration',
    questionNumber: 4,
    clinicalVignette: 'A 78-year-old woman in a nursing home is brought to the hospital with acute confusion, dry mucous membranes, and longitudinal tongue furrows. Serum sodium is 158 mmol/L, BUN is 48 mg/dL, and creatinine is 1.8 mg/dL (BUN/Cr ratio > 25:1). What type of dehydration does this represent, and why must the fluid deficit be corrected slowly?',
    options: [
      { id: 'A', text: 'Isotonic dehydration; rapid bolus normal saline' },
      { id: 'B', text: 'Hypernatremic (hypertonic) dehydration; overly rapid water replacement can cause cerebral edema and herniation' },
      { id: 'C', text: 'Hyponatremic dehydration; rapid 3% hypertonic saline' },
      { id: 'D', text: 'Pseudodehydration due to hyperglycemia' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Hypernatremic (hypertonic) dehydration; overly rapid water replacement can cause cerebral edema and herniation',
    explanation: 'In elderly individuals with impaired thirst mechanisms or lack of water access, pure water loss exceeds sodium loss, producing Hypernatremic Dehydration (serum Na > 150 mmol/L, elevated BUN/Cr ratio). In hypernatremia, brain cells synthesize intracellular idiogenic osmoles to defend cell volume. Overly rapid correction of serum sodium (>10–12 mmol/L per 24 hours) causes rapid water influx into brain cells, precipitating fatal Cerebral Edema, seizures, and uncal herniation.',
    optionRationales: {
      A: 'Serum sodium of 158 mmol/L confirms hypertonic, not isotonic dehydration.',
      B: 'Correct. Hypernatremic dehydration must be corrected slowly (<=10-12 mmol/L per 24h) to avoid fatal cerebral edema.',
      C: 'The patient has hypernatremia, not hyponatremia.',
      D: 'This is true hypernatremic dehydration with prerenal azotemia.'
    },
    keyTakeaway: 'Hypernatremic dehydration requires gradual free-water correction (max 10–12 mmol/L drop per 24 hours) to prevent cerebral edema.',
    sourcePageRef: 'Page 54, Q4',
    difficulty: 'High Yield',
    tags: ['Hypernatremic Dehydration', 'Free Water Deficit', 'Cerebral Edema', 'Geriatric Fluid Management']
  },
  {
    id: 'dehyd_q5',
    topicId: 'dehydration_assessment',
    topicTitle: 'Assessment of Dehydration',
    questionNumber: 5,
    clinicalVignette: 'Which clinical examination sign is recognized as the single most reliable bedside physical indicator of hypovolemia and extracellular volume depletion in elderly patients?',
    options: [
      { id: 'A', text: 'Skin turgor on the dorsum of the hand' },
      { id: 'B', text: 'Dry mucous membranes (dryness of the mouth and tongue) and longitudinal tongue furrows' },
      { id: 'C', text: 'Peripheral pitting pedal edema' },
      { id: 'D', text: 'Elevated jugular venous pressure' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Dry mucous membranes (dryness of the mouth and tongue) and longitudinal tongue furrows',
    explanation: 'In elderly adults, loss of dermal elastin and subcutaneous fat makes skin turgor testing (especially on the hand or forearm) notoriously unreliable, often showing false-positive tenting. Examination of oral mucous membranes (dryness at the junction of the hard and soft palate) and longitudinal tongue furrows has the highest sensitivity, specificity, and positive predictive value for true volume depletion in geriatric patients.',
    optionRationales: {
      A: 'Skin turgor on the back of the hand is falsely prolonged in normal aging due to loss of dermal elasticity.',
      B: 'Correct. Dry oral mucous membranes and longitudinal tongue furrows are the most reliable clinical signs of dehydration in the elderly.',
      C: 'Pedal edema indicates venous insufficiency, heart failure, or fluid overload.',
      D: 'Elevated JVP indicates right heart strain or hypervolemia.'
    },
    keyTakeaway: 'In elderly patients, dry mucous membranes and longitudinal tongue furrows are far more reliable indicators of dehydration than skin turgor.',
    sourcePageRef: 'Page 54, Q5',
    difficulty: 'Core Clinical',
    tags: ['Geriatric Dehydration', 'Tongue Furrows', 'Clinical Signs', 'Physical Exam']
  },

  // ----------------------------------------------------
  // INTERPRETATION OF LUMBAR PUNCTURE / CSF ANALYSIS (Pages 56-57)
  // ----------------------------------------------------
  {
    id: 'lp_q1',
    topicId: 'lp_csf_analysis',
    topicTitle: 'Interpretation of Lumbar Puncture / CSF Analysis',
    questionNumber: 1,
    clinicalVignette: 'A 24-year-old university student is brought to the emergency department with a 12-hour history of severe headache, high fever (39.5°C), neck stiffness, and photophobia. Lumbar puncture is performed. CSF analysis reveals: Opening pressure: 320 mmH₂O (Elevated), Appearance: Turbid / Purulent, WBC: 4,500/µL with 92% Neutrophils (Polymorphonuclear cells), Protein: 2.8 g/L (Markedly elevated), Glucose: 0.8 mmol/L (Simultaneous blood glucose: 6.0 mmol/L; CSF-to-blood glucose ratio = 0.13), Gram stain: Gram-negative diplococci. What is the diagnosis?',
    options: [
      { id: 'A', text: 'Viral (Aseptic) Meningitis' },
      { id: 'B', text: 'Acute Bacterial Meningitis (Neisseria meningitidis)' },
      { id: 'C', text: 'Tuberculous Meningitis' },
      { id: 'D', text: 'Fungal (Cryptococcal) Meningitis' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Acute Bacterial Meningitis (Neisseria meningitidis)',
    explanation: 'The CSF profile is classic for Acute Bacterial Meningitis: (1) Marked neutrophilic pleocytosis (>1000/uL, >80% PMNs), (2) Markedly elevated protein (>1-2 g/L), (3) Severely low CSF glucose with CSF:blood ratio < 0.40, (4) High opening pressure (>250 mmH2O), and (5) Gram-negative diplococci identifying Neisseria meningitidis (meningococcus). Immediate IV Ceftriaxone + Dexamethasone is indicated.',
    optionRationales: {
      A: 'Viral meningitis shows lymphocytic pleocytosis (<500/uL), normal glucose (ratio >0.6), and normal or mildly elevated protein.',
      B: 'Correct. Turbid CSF + neutrophil pleocytosis + low glucose ratio (0.13) + Gram-negative diplococci = Neisseria meningitidis meningitis.',
      C: 'Tuberculous meningitis shows lymphocytic pleocytosis, very high protein (>2-5 g/L), low glucose, and web-like clot formation.',
      D: 'Cryptococcal meningitis shows lymphocytic predominance and positive India ink / cryptococcal antigen.'
    },
    keyTakeaway: 'Acute Bacterial Meningitis CSF is purulent with neutrophilic pleocytosis, high protein, and a CSF-to-blood glucose ratio < 0.40.',
    sourcePageRef: 'Pages 56–57, Q1',
    difficulty: 'High Yield',
    tags: ['Bacterial Meningitis', 'Neisseria meningitidis', 'CSF Analysis', 'Lumbar Puncture']
  },
  {
    id: 'lp_q2',
    topicId: 'lp_csf_analysis',
    topicTitle: 'Interpretation of Lumbar Puncture / CSF Analysis',
    questionNumber: 2,
    clinicalVignette: 'A 38-year-old HIV-positive patient presents with subacute headache, low-grade fever, weight loss, and cranial nerve VI palsy. Lumbar puncture demonstrates: Opening pressure: 340 mmH₂O, Appearance: Clear with a delicate "cobweb" clot forming upon standing, WBC: 280/µL with 85% Lymphocytes, Protein: 3.5 g/L (Markedly elevated), Glucose: 1.2 mmol/L (Blood glucose: 5.5 mmol/L; CSF-to-blood ratio = 0.22), Acid-fast stain: Positive for acid-fast bacilli. What is the diagnosis?',
    options: [
      { id: 'A', text: 'Herpes Simplex Virus Encephalitis' },
      { id: 'B', text: 'Tuberculous (TB) Meningitis' },
      { id: 'C', text: 'Multiple Sclerosis flare' },
      { id: 'D', text: 'Guillain-Barré Syndrome' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Tuberculous (TB) Meningitis',
    explanation: 'Tuberculous Meningitis characteristically presents with: (1) Lymphocytic-predominant pleocytosis (100–500/uL), (2) Extremely high protein (often 1.5–5.0+ g/L due to dense gelatinous basal exudates), (3) Markedly reduced glucose (CSF:blood ratio < 0.30), (4) Markedly elevated opening pressure, and (5) "Spiderweb/cobweb" clot formation due to high fibrinogen content in stagnant fluid.',
    optionRationales: {
      A: 'HSV encephalitis shows lymphocytic pleocytosis and normal/mildly low glucose with prominent RBCs and temporal lobe changes on MRI.',
      B: 'Correct. Cobweb clot + lymphocytic pleocytosis + very high protein + very low glucose + AFB = Tuberculous Meningitis.',
      C: 'Multiple Sclerosis CSF shows oligoclonal bands with normal opening pressure, normal glucose, and mild mononuclear pleocytosis.',
      D: 'Guillain-Barré syndrome shows albuminocytological dissociation (high protein with zero or <10 WBCs).'
    },
    keyTakeaway: 'Tuberculous meningitis CSF exhibits lymphocytic pleocytosis, very high protein, very low glucose, and a pathognomonic cobweb/pellicle clot.',
    sourcePageRef: 'Page 57, Q2',
    difficulty: 'High Yield',
    tags: ['Tuberculous Meningitis', 'Cobweb Clot', 'Lymphocytic Pleocytosis', 'CSF Protein']
  },
  {
    id: 'lp_q3',
    topicId: 'lp_csf_analysis',
    topicTitle: 'Interpretation of Lumbar Puncture / CSF Analysis',
    questionNumber: 3,
    clinicalVignette: 'A 28-year-old woman presents with ascending symmetrical weakness and areflexia in all four limbs 2 weeks after a diarrheal illness caused by Campylobacter jejuni. Lumbar puncture is performed on day 7 of motor symptoms. CSF analysis reveals: Opening pressure: 140 mmH₂O (Normal), Appearance: Clear, WBC count: 2/µL (Normal), Protein: 1.8 g/L (Markedly elevated), Glucose: 3.5 mmol/L (Normal). What is this classic CSF phenomenon called, and what is the underlying diagnosis?',
    options: [
      { id: 'A', text: 'Froin syndrome; Spinal cord tumor' },
      { id: 'B', text: 'Albuminocytological dissociation; Guillain-Barré Syndrome (Acute Inflammatory Demyelinating Polyradiculoneuropathy)' },
      { id: 'C', text: 'Pleocytosis; Viral polyneuropathy' },
      { id: 'D', text: 'Bacterial meningitis in partial remission' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Albuminocytological dissociation; Guillain-Barré Syndrome (Acute Inflammatory Demyelinating Polyradiculoneuropathy)',
    explanation: 'The combination of markedly elevated CSF protein (>0.45–2.0+ g/L) with a normal CSF white blood cell count (<5/uL) is known as "Albuminocytological Dissociation". It is the pathognomonic laboratory hallmark of Guillain-Barré Syndrome (GBS / AIDP). It results from inflammatory breakdown of the blood-nerve barrier at the proximal spinal nerve roots without a cellular meningeal inflammatory response.',
    optionRationales: {
      A: 'Froin syndrome refers to xanthochromic, rapidly coagulating CSF with extreme protein (>5-10 g/L) below a complete spinal block.',
      B: 'Correct. High CSF protein with normal cell count defines albuminocytological dissociation in Guillain-Barré Syndrome.',
      C: 'Pleocytosis means elevated white blood cells in CSF, which is explicitly absent here.',
      D: 'Bacterial meningitis shows hundreds-to-thousands of neutrophils.'
    },
    keyTakeaway: 'Albuminocytological dissociation (markedly elevated protein with normal cell count) is the hallmark of Guillain-Barré Syndrome.',
    sourcePageRef: 'Page 57, Q3',
    difficulty: 'High Yield',
    tags: ['Guillain-Barre Syndrome', 'Albuminocytological Dissociation', 'CSF Protein', 'AIDP']
  },
  {
    id: 'lp_q4',
    topicId: 'lp_csf_analysis',
    topicTitle: 'Interpretation of Lumbar Puncture / CSF Analysis',
    questionNumber: 4,
    clinicalVignette: 'A 50-year-old woman presents with sudden, catastrophic "thunderclap" headache ("worst headache of my life"). Non-contrast head CT performed 18 hours after symptom onset is reported as normal/equivocal. Lumbar puncture is performed. How do you definitively distinguish true Subarachnoid Hemorrhage (SAH) from a "traumatic (bloody) tap" on CSF analysis?',
    options: [
      { id: 'A', text: 'Traumatic tap has higher opening pressure than subarachnoid hemorrhage' },
      { id: 'B', text: 'True SAH shows persistent blood across serial tubes (Tube 1 to Tube 4) and presence of Xanthochromia (yellowish supernatant on centrifugation detected by spectrophotometry), whereas a traumatic tap shows clearing of blood in consecutive tubes and clear supernatant' },
      { id: 'C', text: 'Traumatic tap causes severe hypoglycemia in CSF' },
      { id: 'D', text: 'True SAH has a normal protein level while traumatic tap has elevated protein' }
    ],
    correctOption: 'B',
    correctAnswerText: 'True SAH shows persistent blood across serial tubes (Tube 1 to Tube 4) and presence of Xanthochromia (yellowish supernatant on centrifugation detected by spectrophotometry), whereas a traumatic tap shows clearing of blood in consecutive tubes and clear supernatant',
    explanation: 'Differentiating SAH from a traumatic tap relies on two key findings: (1) Clearing: in a traumatic tap, RBC counts drop markedly from tube 1 to tube 4, whereas in true SAH, RBC counts remain consistently elevated across all tubes; and (2) Xanthochromia: in true SAH, RBCs undergo in vivo lysis over >6–12 hours, releasing oxyhemoglobin and bilirubin, creating a yellowish centrifuged supernatant (detected by spectrophotometry). Traumatic taps have a crystal-clear supernatant after centrifugation.',
    optionRationales: {
      A: 'Opening pressure is often elevated in SAH due to impaired arachnoid villi resorption.',
      B: 'Correct. Persistent RBC counts across tubes 1–4 and xanthochromia on spectrophotometry confirm true Subarachnoid Hemorrhage.',
      C: 'Traumatic tap does not consume CSF glucose.',
      D: 'Both SAH and traumatic tap elevate CSF protein (due to serum plasma entry).'
    },
    keyTakeaway: 'Subarachnoid hemorrhage is differentiated from traumatic tap by lack of RBC clearing across serial tubes and spectrophotometric Xanthochromia.',
    sourcePageRef: 'Page 57, Q4',
    difficulty: 'High Yield',
    tags: ['Subarachnoid Hemorrhage', 'Xanthochromia', 'Traumatic Tap', 'Thunderclap Headache']
  },
  {
    id: 'lp_q5',
    topicId: 'lp_csf_analysis',
    topicTitle: 'Interpretation of Lumbar Puncture / CSF Analysis',
    questionNumber: 5,
    clinicalVignette: 'A 32-year-old man with suspected acute meningitis has an LP planned. Which of the following clinical signs or history features represents an absolute indication to perform a Non-Contrast Head CT scan BEFORE lumbar puncture to rule out brain herniation?',
    options: [
      { id: 'A', text: 'Fever alone (>38.5°C)' },
      { id: 'B', text: 'Papilledema, new focal neurological deficits, new-onset seizures, or severely impaired level of consciousness (GCS < 12)' },
      { id: 'C', text: 'Neck stiffness and positive Kernig\'s sign' },
      { id: 'D', text: 'Mild photophobia' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Papilledema, new focal neurological deficits, new-onset seizures, or severely impaired level of consciousness (GCS < 12)',
    explanation: 'Performing an LP in the presence of an intracranial space-occupying lesion or severe cerebral edema creates a pressure gradient that can precipitate fatal uncal or transtentorial brain herniation. Mandatory indications for Head CT before LP include: (1) Papilledema on funduscopy, (2) Focal neurological deficits (e.g. hemiparesis, dilated non-reactive pupil), (3) New-onset seizures within 1 week, (4) Moderate-to-severe altered mental status (GCS < 12), and (5) Severe immunocompromised state.',
    optionRationales: {
      A: 'Isolated fever without focal signs is expected in meningitis and does not require pre-LP CT.',
      B: 'Correct. Papilledema, focal neurological deficits, recent seizures, and low GCS mandate pre-LP head CT to prevent brain herniation.',
      C: 'Meningeal signs are classic for meningitis and do not mandate CT in the absence of focal deficits.',
      D: 'Mild photophobia is standard in meningitis and is not a contraindication to immediate LP.'
    },
    keyTakeaway: 'In suspected meningitis, perform a Head CT prior to LP if papilledema, focal neurological deficits, new seizures, or GCS < 12 are present.',
    sourcePageRef: 'Page 57, Q5',
    difficulty: 'High Yield',
    tags: ['Lumbar Puncture Safety', 'Head CT Indications', 'Brain Herniation', 'Meningitis Protocol']
  }
];
