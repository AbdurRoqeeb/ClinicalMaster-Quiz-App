import { Question } from '../../types';

export const ENDOCRINOLOGY_QUESTIONS: Question[] = [
  // ----------------------------------------------------
  // MANAGEMENT OF HYPOGLYCEMIA (Pages 4-6)
  // ----------------------------------------------------
  {
    id: 'hypo_q1',
    topicId: 'hypoglycemia_management',
    topicTitle: 'Management of Hypoglycemia',
    questionNumber: 1,
    clinicalVignette: 'A 28-year-old man with type 1 diabetes treated with insulin presents to the ER with sweating, tremor and palpitations. Random plasma glucose is 58 mg/dL (3.2 mmol/L). He is alert and able to swallow normally. Which is the most appropriate immediate management?',
    options: [
      { id: 'A', text: 'Give 15 g of rapidly absorbed carbohydrate and recheck glucose in 15 minutes' },
      { id: 'B', text: 'Give IV 50% dextrose immediately' },
      { id: 'C', text: 'Administer 1 mg IM glucagon' },
      { id: 'D', text: 'Give a high-protein meal' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Give 15 g of rapidly absorbed carbohydrate and recheck glucose in 15 minutes',
    explanation: 'According to the clinical "Rule of 15s", an alert, conscious patient with mild-to-moderate hypoglycemia who is able to safely swallow should receive 15–20 g of fast-acting simple carbohydrate (e.g., fruit juice, glucose tablets, 3-4 lumps of sugar) followed by a repeat capillary glucose measurement in 15 minutes.',
    optionRationales: {
      A: 'Correct. The Rule of 15 (15 g fast carb, recheck in 15 mins) is standard for conscious patients.',
      B: 'IV 50% dextrose is reserved for severe hypoglycemia in unconscious or non-swallowing patients due to hyperosmolar vein irritation.',
      C: 'Glucagon is indicated when the patient is unconscious or unable to swallow and IV access is unavailable.',
      D: 'Proteins and complex meals slow gastric absorption and delay acute glucose normalization.'
    },
    keyTakeaway: 'The Rule of 15 (15 g fast carbohydrate, recheck in 15 min) is the first-line treatment for conscious hypoglycemic patients.',
    sourcePageRef: 'Page 4, Q1',
    difficulty: 'High Yield',
    tags: ['Hypoglycemia', 'Rule of 15', 'Diabetes Management']
  },
  {
    id: 'hypo_q2',
    topicId: 'hypoglycemia_management',
    topicTitle: 'Management of Hypoglycemia',
    questionNumber: 2,
    clinicalVignette: 'A 35-year-old man with no history of diabetic symptoms presents with recurrent fasting episodes of confusion and sweating. During an episode, plasma glucose is 38 mg/dL, insulin is elevated and C-peptide is suppressed. Which is the most likely cause?',
    options: [
      { id: 'A', text: 'Insulinoma' },
      { id: 'B', text: 'Sulfonylurea ingestion' },
      { id: 'C', text: 'Exogenous insulin administration' },
      { id: 'D', text: 'Adrenal insufficiency' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Exogenous insulin administration',
    explanation: 'Endogenous proinsulin is cleaved in equimolar amounts into insulin and C-peptide. In an insulinoma or sulfonylurea ingestion, both insulin and C-peptide are elevated. When pharmaceutical (exogenous) insulin is administered, high circulating insulin suppresses endogenous beta-cell secretion, leading to elevated insulin with suppressed/undetectable C-peptide.',
    optionRationales: {
      A: 'Insulinoma causes elevated endogenous insulin along with high C-peptide and high proinsulin.',
      B: 'Sulfonylureas stimulate endogenous beta-cell release, elevating both insulin and C-peptide.',
      C: 'Correct. High insulin with suppressed C-peptide is diagnostic of exogenous (factitious) insulin administration.',
      D: 'Adrenal insufficiency causes hypoglycemia with low or suppressed insulin levels.'
    },
    keyTakeaway: 'Exogenous insulin causes hyperinsulinemic hypoglycemia with suppressed C-peptide, whereas insulinoma and sulfonylureas elevate both.',
    sourcePageRef: 'Page 4, Q2',
    difficulty: 'High Yield',
    tags: ['Hypoglycemia', 'C-Peptide', 'Insulinoma', 'Factitious Hypoglycemia']
  },
  {
    id: 'hypo_q3',
    topicId: 'hypoglycemia_management',
    topicTitle: 'Management of Hypoglycemia',
    questionNumber: 3,
    clinicalVignette: 'A 46-year-old man has repeated early-morning episodes of sweating, confusion and weakness that resolve after eating. During one episode, plasma glucose is 42 mg/dL. Which combination best represents the classic diagnostic framework for a hypoglycaemic disorder?',
    options: [
      { id: 'A', text: 'Hypoglycaemia + elevated HbA1c + ketonuria' },
      { id: 'B', text: 'Symptoms compatible with hypoglycaemia + documented low glucose + resolution after glucose correction' },
      { id: 'C', text: 'Low glucose + elevated insulin alone' },
      { id: 'D', text: 'Symptoms + normal glucose + elevated cortisol' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Symptoms compatible with hypoglycaemia + documented low glucose + resolution after glucose correction',
    explanation: 'This describes Whipple\'s Triad, the essential diagnostic framework for establishing true hypoglycemia: (1) Symptoms consistent with hypoglycemia (neuroglycopenic/autonomic), (2) Documented low plasma glucose concentration measured simultaneously, and (3) Prompt relief of symptoms after plasma glucose is raised.',
    optionRationales: {
      A: 'Elevated HbA1c and ketonuria indicate chronic hyperglycemia or DKA, not Whipple\'s triad.',
      B: 'Correct. Whipple\'s triad (symptoms + documented low glucose + resolution with glucose) is the gold standard diagnostic framework.',
      C: 'Low glucose and high insulin is a biochemical subtype, not the clinical diagnostic triad.',
      D: 'Symptoms with normal glucose represent pseudohypoglycemia.'
    },
    keyTakeaway: 'Whipple\'s Triad requires: symptoms of hypoglycemia, documented low plasma glucose, and symptom resolution upon glucose restoration.',
    sourcePageRef: 'Pages 4–5, Q3',
    difficulty: 'Core Clinical',
    tags: ['Whipple Triad', 'Hypoglycemia', 'Diagnostic Framework']
  },
  {
    id: 'hypo_q4',
    topicId: 'hypoglycemia_management',
    topicTitle: 'Management of Hypoglycemia',
    questionNumber: 4,
    clinicalVignette: 'A 72-year-old Nigerian woman with type 2 diabetes is treated with insulin and has stage 4 chronic kidney disease. She has experienced three episodes of nocturnal hypoglycaemia during the past month. Which is the most appropriate next step?',
    options: [
      { id: 'A', text: 'Intensify insulin therapy to improve HbA1c' },
      { id: 'B', text: 'Ignore the episodes because they occur during sleep' },
      { id: 'C', text: 'Reassess and modify her glucose-lowering regimen and glycaemic targets' },
      { id: 'D', text: 'Start a sulfonylurea' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Reassess and modify her glucose-lowering regimen and glycaemic targets',
    explanation: 'In advanced Chronic Kidney Disease (CKD stage 4/5), renal clearance of insulin and renal gluconeogenesis are markedly diminished, prolonging the half-life of circulating insulin and drastically increasing hypoglycemia risk. In elderly patients with CKD, glycemic targets should be relaxed (e.g., HbA1c 7.5–8.5%) and insulin doses down-titrated.',
    optionRationales: {
      A: 'Intensifying therapy would cause lethal nocturnal hypoglycemia in CKD.',
      B: 'Nocturnal hypoglycemia carries high risks of cardiac arrhythmias, sudden death, and cognitive decline.',
      C: 'Correct. Reduced renal clearance of insulin in CKD demands de-intensification and regimen adjustment.',
      D: 'Sulfonylureas accumulate in renal failure and would severely worsen recurrent hypoglycemia.'
    },
    keyTakeaway: 'In CKD, impaired renal insulin clearance increases hypoglycemia risk; glucose-lowering regimens and targets must be safely relaxed.',
    sourcePageRef: 'Page 5, Q4',
    difficulty: 'Core Clinical',
    tags: ['CKD', 'Hypoglycemia', 'Insulin Clearance', 'Elderly Care']
  },
  {
    id: 'hypo_q5',
    topicId: 'hypoglycemia_management',
    topicTitle: 'Management of Hypoglycemia',
    questionNumber: 5,
    clinicalVignette: 'A 64-year-old man with diabetes is brought unconscious to a rural health centre. His glucometer confirms severe hypoglycaemia. There is no IV cannula immediately available, but a trained health worker has access to glucagon. What is the best immediate intervention?',
    options: [
      { id: 'A', text: 'Wait for IV access before treating' },
      { id: 'B', text: 'Give oral glucose by mouth' },
      { id: 'C', text: 'Administer glucagon' },
      { id: 'D', text: 'Give subcutaneous insulin' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Administer glucagon',
    explanation: 'In an unconscious patient with severe hypoglycemia where intravenous access cannot be established immediately, intramuscular (IM) or subcutaneous (SC) Glucagon (1 mg) is the definitive emergency treatment of choice. Glucagon stimulates hepatic glycogenolysis, restoring glucose within 10–15 minutes.',
    optionRationales: {
      A: 'Delaying treatment to establish IV access causes prolonged neuroglycopenia and permanent brain injury.',
      B: 'Giving oral fluids/glucose to an unconscious patient is strictly contraindicated due to aspiration risk.',
      C: 'Correct. IM/SC Glucagon is the emergency standard when IV access is not immediately available in unconscious patients.',
      D: 'Insulin would be immediately fatal.'
    },
    keyTakeaway: 'In unconscious severe hypoglycemia without IV access, administer IM/SC Glucagon immediately; never give oral fluids to an unresponsive patient.',
    sourcePageRef: 'Pages 5–6, Q5',
    difficulty: 'High Yield',
    tags: ['Glucagon', 'Severe Hypoglycemia', 'Emergency', 'Rural Medicine']
  },

  // ----------------------------------------------------
  // GLYCAEMIC INDEX & GLYCAEMIC LOAD (Pages 11-13)
  // ----------------------------------------------------
  {
    id: 'gi_q1',
    topicId: 'glycemic_index_load',
    topicTitle: 'Glycaemic Index & Glycaemic Load',
    questionNumber: 1,
    clinicalVignette: 'A 56-year-old man is newly diagnosed with type 2 diabetes mellitus. His HbA1c is 8.2%. Fasting plasma glucose is 6.8 mmol/L, but 2-hour postprandial glucose is 16 mmol/L. He reports eating large amounts of white bread and sweetened beverages. Which dietary intervention is MOST appropriate?',
    options: [
      { id: 'A', text: 'Increase carbohydrate quantity but reduce fat intake' },
      { id: 'B', text: 'Increase intake of fruit juice to replace sugar' },
      { id: 'C', text: 'Replace refined carbohydrates with high-fibre, low-GI carbohydrate sources' },
      { id: 'D', text: 'Eat only foods with high glycaemic index before exercise' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Replace refined carbohydrates with high-fibre, low-GI carbohydrate sources',
    explanation: 'The patient exhibits exaggerated postprandial glucose excursions (16 mmol/L) driven by high-GI refined carbohydrates (white bread, sugary drinks). Replacing refined grains with minimally processed, high-fiber, low-glycemic index foods (whole grains, legumes, vegetables) slows carbohydrate digestion and blunts postprandial glucose spikes.',
    optionRationales: {
      A: 'Increasing carb quantity will further elevate postprandial glycemic excursions.',
      B: 'Fruit juices contain rapidly absorbed simple sugars with high GI and lack intact dietary fiber.',
      C: 'Correct. High-fiber, low-GI carbohydrates reduce postprandial spikes and improve insulin sensitivity.',
      D: 'High-GI foods before exercise will not address his chronic postprandial hyperglycemic profile.'
    },
    keyTakeaway: 'Replacing refined carbohydrates with high-fiber, low-GI sources flattens postprandial glycemic excursions in type 2 diabetes.',
    sourcePageRef: 'Page 11, Q1',
    difficulty: 'Core Clinical',
    tags: ['Glycemic Index', 'Diabetes Nutrition', 'Postprandial Hyperglycemia']
  },
  {
    id: 'gi_q2',
    topicId: 'glycemic_index_load',
    topicTitle: 'Glycaemic Index & Glycaemic Load',
    questionNumber: 2,
    clinicalVignette: 'A 62-year-old man with poorly controlled diabetes presents with an infected diabetic foot ulcer. His HbA1c is 10%. During dietary counselling, he asks why controlling his glucose peaks matters. Which mechanism links repeated postprandial hyperglycaemia to diabetic complications?',
    options: [
      { id: 'A', text: 'Formation of advanced glycation end products and oxidative stress' },
      { id: 'B', text: 'Increased insulin secretion permanently' },
      { id: 'C', text: 'Reduced inflammatory response' },
      { id: 'D', text: 'Increased glucose uptake by neurons' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Formation of advanced glycation end products and oxidative stress',
    explanation: 'Repeated postprandial glucose spikes accelerate non-enzymatic glycation of proteins, forming Advanced Glycation End-products (AGEs). AGEs bind to their receptor (RAGE) on vascular endothelium and macrophages, triggering excessive reactive oxygen species (ROS), oxidative stress, endothelial dysfunction, and microvascular/macrovascular damage.',
    optionRationales: {
      A: 'Correct. Postprandial glucose peaks drive AGE generation, oxidative stress, and vascular complications.',
      B: 'Chronic hyperglycemia causes beta-cell exhaustion and glucotoxicity, reducing insulin secretion.',
      C: 'Hyperglycemia promotes a pro-inflammatory state, not reduced inflammation.',
      D: 'Neuronal glucose uptake occurs via non-insulin-dependent GLUT3; intracellular sorbitol pathway flux causes cellular injury.'
    },
    keyTakeaway: 'Postprandial glycemic spikes accelerate the formation of Advanced Glycation End-products (AGEs) and reactive oxygen species, driving diabetic vasculopathy.',
    sourcePageRef: 'Page 11, Q2',
    difficulty: 'Core Clinical',
    tags: ['AGEs', 'Oxidative Stress', 'Diabetic Complications', 'Pathophysiology']
  },
  {
    id: 'gi_q3',
    topicId: 'glycemic_index_load',
    topicTitle: 'Glycaemic Index & Glycaemic Load',
    questionNumber: 3,
    clinicalVignette: 'A 48-year-old obese woman with metabolic syndrome is diagnosed with non-alcoholic fatty liver disease. She consumes large amounts of refined carbohydrates. Which dietary change is MOST likely to improve insulin resistance?',
    options: [
      { id: 'A', text: 'Increase high-GI snacks' },
      { id: 'B', text: 'Replace refined carbohydrates with minimally processed high-fibre carbohydrates' },
      { id: 'C', text: 'Avoid all proteins for the next 6 months' },
      { id: 'D', text: 'Increase portion sizes of low-GI foods indefinitely' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Replace refined carbohydrates with minimally processed high-fibre carbohydrates',
    explanation: 'Refined carbohydrates and high fructose intake stimulate hepatic de novo lipogenesis, worsening hepatic steatosis and peripheral insulin resistance. Replacing them with minimally processed, high-fiber carbohydrates promotes short-chain fatty acid production by gut microbiota, reduces insulin demand, and enhances insulin sensitivity in metabolic syndrome and NAFLD.',
    optionRationales: {
      A: 'High-GI snacks worsen insulin resistance and hepatic steatosis.',
      B: 'Correct. Minimally processed high-fiber carbohydrates improve hepatic insulin sensitivity and lipid metabolism.',
      C: 'Avoiding protein leads to muscle wasting and worse metabolic health.',
      D: 'Increasing portions indefinitely increases total glycemic load and causes weight gain.'
    },
    keyTakeaway: 'Minimally processed, high-fiber carbohydrates improve peripheral and hepatic insulin sensitivity in NAFLD and metabolic syndrome.',
    sourcePageRef: 'Page 12, Q3',
    difficulty: 'Core Clinical',
    tags: ['Metabolic Syndrome', 'NAFLD', 'Insulin Resistance', 'Nutrition']
  },
  {
    id: 'gi_q4',
    topicId: 'glycemic_index_load',
    topicTitle: 'Glycaemic Index & Glycaemic Load',
    questionNumber: 4,
    clinicalVignette: 'A 32-year-old pregnant woman develops gestational diabetes mellitus. She is advised dietary modification. Why are low-GI carbohydrates preferred?',
    options: [
      { id: 'A', text: 'They prevent all insulin requirements' },
      { id: 'B', text: 'They reduce postprandial glucose excursions without eliminating carbohydrates' },
      { id: 'C', text: 'They increase fetal glucose delivery' },
      { id: 'D', text: 'They completely prevent macrosomia' }
    ],
    correctOption: 'B',
    correctAnswerText: 'They reduce postprandial glucose excursions without eliminating carbohydrates',
    explanation: 'During pregnancy, carbohydrate elimination is harmful because maternal ketosis crosses the placenta and impairs fetal brain development. Low-GI diets are the preferred medical nutrition strategy because they blunt postprandial maternal glucose spikes (preventing fetal hyperinsulinism and macrosomia) while preserving adequate carbohydrate intake for fetal energy demands.',
    optionRationales: {
      A: 'Low-GI diets reduce insulin requirements but cannot eliminate them in all women.',
      B: 'Correct. Low-GI carbs blunt glucose excursions while providing essential maternal-fetal carbohydrate nutrition.',
      C: 'Excessive fetal glucose delivery leads to fetal hyperinsulinemia and macrosomia.',
      D: 'No diet completely guarantees elimination of macrosomia if other genetic/metabolic factors are present.'
    },
    keyTakeaway: 'In gestational diabetes, low-GI diets control postprandial maternal glucose without requiring unsafe carbohydrate restriction.',
    sourcePageRef: 'Page 12, Q4',
    difficulty: 'High Yield',
    tags: ['Gestational Diabetes', 'GDM', 'Nutrition in Pregnancy', 'Glycemic Index']
  },
  {
    id: 'gi_q5',
    topicId: 'glycemic_index_load',
    topicTitle: 'Glycaemic Index & Glycaemic Load',
    questionNumber: 5,
    clinicalVignette: 'A patient notices that his glucose rises sharply after breakfast but slowly after dinner despite similar carbohydrate amounts. Which factor may explain this difference?',
    options: [
      { id: 'A', text: 'Protein increases glucose absorption immediately' },
      { id: 'B', text: 'GI is fixed regardless of food combinations' },
      { id: 'C', text: 'Meal composition and preparation alter glycaemic response' },
      { id: 'D', text: 'All carbohydrates produce identical glucose curves' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Meal composition and preparation alter glycaemic response',
    explanation: 'The glycemic response to a meal depends not only on total carbohydrate grams, but also on co-ingested macronutrients (fat, protein, fiber), food preparation methods (cooking time, particle size, gelatinization of starch), and circadian variations in insulin sensitivity. Fat and protein delay gastric emptying, slowing carbohydrate absorption and flattening the glycemic curve.',
    optionRationales: {
      A: 'Protein delays gastric emptying and slows glucose absorption, rather than accelerating it.',
      B: 'GI is heavily modulated by mixed meal interactions and food preparation.',
      C: 'Correct. Co-ingested fat, protein, fiber, and food preparation alter the rate of gastric emptying and glycemic response.',
      D: 'Different carbohydrates and combinations produce markedly different glycemic curves.'
    },
    keyTakeaway: 'Meal composition (co-ingested protein, fat, fiber) and preparation methods modulate gastric emptying and glycemic response curves.',
    sourcePageRef: 'Pages 12–13, Q5',
    difficulty: 'Core Clinical',
    tags: ['Meal Composition', 'Gastric Emptying', 'Glycemic Load']
  },

  // ----------------------------------------------------
  // INVESTIGATION OF DIABETIC FOOT ULCERS (Pages 40-42)
  // ----------------------------------------------------
  {
    id: 'dfu_q1',
    topicId: 'diabetic_foot_ulcers',
    topicTitle: 'Investigation of Diabetic Foot Ulcers',
    questionNumber: 1,
    clinicalVignette: 'A 62-year-old man with a 15-year history of type 2 diabetes mellitus presents with a plantar ulcer beneath the first metatarsal head that has been present for 3 weeks. He has peripheral neuropathy and minimal pain. The ulcer is 2 cm deep, and a sterile metal probe contacts a hard structure at the base. There is no systemic toxicity. Laboratory studies show an ESR of 78 mm/hr and CRP of 42 mg/L. Plain radiographs show no definite bone destruction. Which of the following is the most appropriate next investigation?',
    options: [
      { id: 'A', text: 'Superficial wound swab' },
      { id: 'B', text: 'MRI of the foot' },
      { id: 'C', text: 'CT scan of the foot' },
      { id: 'D', text: 'Repeat plain radiograph in 6 months' }
    ],
    correctOption: 'B',
    correctAnswerText: 'MRI of the foot',
    explanation: 'A positive "probe-to-bone" test (PTB) combined with elevated ESR (>70 mm/hr) in a chronic diabetic ulcer has high sensitivity and positive predictive value for underlying osteomyelitis. Because plain radiographs take 2–3 weeks to manifest cortical demineralization, Magnetic Resonance Imaging (MRI) is the gold standard imaging modality for detecting early bone marrow edema and cortical destruction.',
    optionRationales: {
      A: 'Superficial swabs culture colonizing skin flora rather than the true pathogen causing bone infection.',
      B: 'Correct. MRI is the most sensitive and specific imaging modality for diagnosing early osteomyelitis.',
      C: 'CT shows cortical bone detail but is less sensitive than MRI for early bone marrow edema.',
      D: 'Waiting 6 months allows irreversible bone destruction and amputation risk.'
    },
    keyTakeaway: 'A positive probe-to-bone test with normal initial X-rays requires MRI of the foot to evaluate for early osteomyelitis.',
    sourcePageRef: 'Page 40, Q1',
    difficulty: 'High Yield',
    tags: ['Diabetic Foot Ulcer', 'Osteomyelitis', 'Probe-to-Bone', 'MRI']
  },
  {
    id: 'dfu_q2',
    topicId: 'diabetic_foot_ulcers',
    topicTitle: 'Investigation of Diabetic Foot Ulcers',
    questionNumber: 2,
    clinicalVignette: 'A 70-year-old woman with diabetes presents with a nonhealing ulcer over the lateral aspect of her foot. Examination reveals absent dorsalis pedis and posterior tibial pulses, shiny skin, and loss of hair over the lower leg. An ankle-brachial index is measured at 1.52. Which of the following best explains this result?',
    options: [
      { id: 'A', text: 'Severe peripheral arterial disease is unlikely' },
      { id: 'B', text: 'The patient has normal arterial perfusion' },
      { id: 'C', text: 'Medial arterial calcification has produced an incompressible artery' },
      { id: 'D', text: 'The ABI confirms critical limb ischaemia' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Medial arterial calcification has produced an incompressible artery',
    explanation: 'In long-standing diabetes and CKD, Mönckeberg medial calcific sclerosis causes stiffening and incompressibility of the tibial and pedal arteries. This leads to spuriously elevated ankle systolic pressures and an ABI > 1.30–1.40, masking severe underlying peripheral arterial disease. Alternative testing like Toe-Brachial Index (TBI) or transcutaneous oxygen pressure (TcPO2) must be used.',
    optionRationales: {
      A: 'Severe PAD is very likely given absent pulses and trophic skin changes; high ABI is a false negative artifact.',
      B: 'Perfusion is severely impaired despite the high ABI number.',
      C: 'Correct. Medial arterial calcification (Mönckeberg sclerosis) prevents arterial cuff collapse, producing falsely high ABI.',
      D: 'An ABI < 0.40 defines critical limb ischemia; ABI > 1.40 indicates incompressibility.'
    },
    keyTakeaway: 'An ABI > 1.40 in diabetes indicates Mönckeberg medial arterial calcification and non-compressible vessels, masking severe ischemia.',
    sourcePageRef: 'Pages 40–41, Q2',
    difficulty: 'High Yield',
    tags: ['ABI', 'Mönckeberg Sclerosis', 'Diabetic Vasculopathy', 'PAD']
  },
  {
    id: 'dfu_q3',
    topicId: 'diabetic_foot_ulcers',
    topicTitle: 'Investigation of Diabetic Foot Ulcers',
    questionNumber: 3,
    clinicalVignette: 'A 58-year-old man with poorly controlled diabetes presents with a foul-smelling ulcer on the plantar surface of his foot. The ulcer has surrounding erythema and purulent discharge. He is afebrile and hemodynamically stable. A superficial wound swab grows Pseudomonas aeruginosa. Which of the following is the best method for obtaining a microbiological specimen to guide antibiotic therapy?',
    options: [
      { id: 'A', text: 'Repeat superficial swab without cleaning the wound' },
      { id: 'B', text: 'Swab of intact skin adjacent to the ulcer' },
      { id: 'C', text: 'Deep tissue specimen obtained after cleansing and debridement' },
      { id: 'D', text: 'Blood culture only' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Deep tissue specimen obtained after cleansing and debridement',
    explanation: 'Superficial wound swabs invariably capture surface colonizers and biofilm organisms (like Pseudomonas or coagulase-negative staph) rather than true tissue pathogens. Guidelines (IWGDF/IDSA) mandate wound debridement and cleansing with sterile saline, followed by deep tissue biopsy or curettage of the ulcer base to guide antimicrobial therapy.',
    optionRationales: {
      A: 'Uncleaned superficial swabs culture non-pathogenic colonizing flora.',
      B: 'Swabbing adjacent skin does not identify the causative infectious agent in the wound bed.',
      C: 'Correct. Deep tissue biopsy or curettage from the cleansed ulcer base is the gold standard.',
      D: 'Blood cultures are only positive in systemic bacteremia/sepsis and are typically negative in localized ulcers.'
    },
    keyTakeaway: 'Microbiological specimens for diabetic foot infections must be obtained from deep tissue biopsy/curettage after wound cleansing.',
    sourcePageRef: 'Page 41, Q3',
    difficulty: 'Core Clinical',
    tags: ['Diabetic Foot', 'Microbiology', 'Tissue Biopsy', 'Wound Care']
  },
  {
    id: 'dfu_q4',
    topicId: 'diabetic_foot_ulcers',
    topicTitle: 'Investigation of Diabetic Foot Ulcers',
    questionNumber: 4,
    clinicalVignette: 'A 65-year-old man with diabetes presents with a chronic ulcer on the plantar surface of his foot. He has diminished sensation to a 10-g monofilament. Dorsalis pedis and posterior tibial pulses are palpable. His ankle-brachial index is 1.08. Which of the following investigations is most appropriate for assessing loss of protective sensation?',
    options: [
      { id: 'A', text: '128-Hz tuning fork only' },
      { id: 'B', text: '10-g monofilament testing' },
      { id: 'C', text: 'Ankle-brachial index' },
      { id: 'D', text: 'Electromyography as the routine initial test' }
    ],
    correctOption: 'B',
    correctAnswerText: '10-g monofilament testing',
    explanation: 'The 10-g Semmes-Weinstein monofilament is the single most validated, reproducible, and widely recommended clinical tool for identifying Loss of Protective Sensation (LOPS), which places diabetic patients at high risk for repetitive pressure ulceration.',
    optionRationales: {
      A: 'A 128-Hz tuning fork tests vibration sense (large myelinated fibers), but monofilament is the specific standard for protective pressure sensation.',
      B: 'Correct. 10-g monofilament examination is the gold standard bedside test for loss of protective sensation.',
      C: 'ABI assesses macrovascular arterial perfusion, not neurological sensation.',
      D: 'EMG/Nerve conduction studies are electrodiagnostic tests reserved for atypical or uncertain neuropathies, not routine bedside screening.'
    },
    keyTakeaway: 'The 10-g Semmes-Weinstein monofilament is the primary diagnostic instrument to detect Loss of Protective Sensation (LOPS).',
    sourcePageRef: 'Pages 41–42, Q4',
    difficulty: 'High Yield',
    tags: ['Diabetic Neuropathy', 'Monofilament', 'Loss of Protective Sensation']
  },
  {
    id: 'dfu_q5',
    topicId: 'diabetic_foot_ulcers',
    topicTitle: 'Investigation of Diabetic Foot Ulcers',
    questionNumber: 5,
    clinicalVignette: 'A 67-year-old man with diabetes presents with a painful ulcer on his great toe. The toe is cool and pale, and dorsalis pedis and posterior tibial pulses are absent. ABI is 0.38. The ulcer has necrotic tissue and has failed to heal despite appropriate wound care. Which of the following is the most appropriate next investigation to determine the vascular anatomy for possible revascularization?',
    options: [
      { id: 'A', text: 'HbA1c' },
      { id: 'B', text: 'Plain radiograph of the foot' },
      { id: 'C', text: 'CT angiography of the lower extremity' },
      { id: 'D', text: '10-g monofilament testing' }
    ],
    correctOption: 'C',
    correctAnswerText: 'CT angiography of the lower extremity',
    explanation: 'The patient has critical limb-threatening ischemia (severe pain, nonhealing necrotic ulcer, absent pulses, ABI 0.38 < 0.40). To plan endovascular intervention (angioplasty/stenting) or surgical bypass, anatomical vascular imaging is required. CT Angiography (or MR Angiography / Digital Subtraction Angiography) provides detailed arterial mapping from aorta to foot.',
    optionRationales: {
      A: 'HbA1c assesses glycemic control but gives zero information on vascular anatomy.',
      B: 'Plain X-rays assess bone, osteomyelitis, or gas, not arterial anatomy.',
      C: 'Correct. CT angiography provides high-resolution arterial mapping for surgical or endovascular revascularization.',
      D: 'Monofilament evaluates sensation and cannot guide vascular reconstruction.'
    },
    keyTakeaway: 'Critical limb ischemia (ABI < 0.40 with tissue loss) warrants non-invasive vascular mapping via CT Angiography or MRA prior to revascularization.',
    sourcePageRef: 'Page 42, Q5',
    difficulty: 'Core Clinical',
    tags: ['Critical Limb Ischemia', 'CT Angiography', 'Revascularization', 'PAD']
  },

  // ----------------------------------------------------
  // USE OF TECHNOLOGY & ARTIFICIAL INTELLIGENCE IN THE MANAGEMENT OF DIABETES (Pages 42-44)
  // ----------------------------------------------------
  {
    id: 'ai_q1',
    topicId: 'ai_tech_diabetes',
    topicTitle: 'Use of Technology & AI in Diabetes Management',
    questionNumber: 1,
    clinicalVignette: 'A patient with type 1 diabetes on multiple daily injection (MDI) therapy upgrades from standard syringes to a smart connected insulin pen. How does this technology primarily reduce the risk of severe hypoglycemia?',
    options: [
      { id: 'A', text: 'Tracking active insulin on board to prevent overlapping correction doses' },
      { id: 'B', text: 'Modulating needle insertion depth based on subcutaneous fat thickness' },
      { id: 'C', text: 'Automatically suppressing basal insulin absorption via local tissue cooling' },
      { id: 'D', text: 'Altering the chemical formulation of injected insulin inside the cartridge prior to delivery' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Tracking active insulin on board to prevent overlapping correction doses',
    explanation: 'Smart insulin pens calculate "Insulin on Board" (IOB)—the residual active insulin from prior bolus injections based on individualized pharmacodynamic decay curves. By displaying IOB, the smart pen bolus calculator prevents "insulin stacking" (taking repeated boluses before the previous dose has finished acting), a primary cause of severe hypoglycemia.',
    optionRationales: {
      A: 'Correct. Tracking active insulin on board (IOB) eliminates dose stacking and subsequent hypoglycemia.',
      B: 'Smart pens do not alter needle depth.',
      C: 'Smart pens do not cool local tissue.',
      D: 'Smart pens deliver standard commercial insulin formulations without chemical alterations.'
    },
    keyTakeaway: 'Smart connected insulin pens prevent hypoglycemia by tracking Insulin on Board (IOB) and eliminating lethal insulin stacking.',
    sourcePageRef: 'Pages 42–43, Q1',
    difficulty: 'High Yield',
    tags: ['Diabetes Tech', 'Smart Pen', 'Insulin on Board', 'Hypoglycemia Prevention']
  },
  {
    id: 'ai_q2',
    topicId: 'ai_tech_diabetes',
    topicTitle: 'Use of Technology & AI in Diabetes Management',
    questionNumber: 2,
    clinicalVignette: 'An AI-powered clinical decision support algorithm analyzes continuous glucose monitor data to predict nocturnal hypoglycemia. What primary data pattern does the algorithm leverage to generate alerts?',
    options: [
      { id: 'A', text: 'Patient self-reported quarterly HbA1c values.' },
      { id: 'B', text: 'Baseline systolic and diastolic blood pressure trends' },
      { id: 'C', text: 'Historical rate of change and trend trajectory of glucose' },
      { id: 'D', text: 'Single spot glucose measurement taken once daily.' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Historical rate of change and trend trajectory of glucose',
    explanation: 'Predictive low-glucose management algorithms utilize real-time continuous sensor readings, calculating the instantaneous first and second derivatives (rate of change in mg/dL/min and acceleration/deceleration) along with historical circadian patterns to forecast glucose levels 20–30 minutes into the future.',
    optionRationales: {
      A: 'Quarterly HbA1c provides a 3-month average and is useless for minute-to-minute nocturnal predictions.',
      B: 'Blood pressure trends do not provide predictive glucose kinetic data.',
      C: 'Correct. Glucose rate-of-change and trajectory vectors enable proactive predictive hypoglycemia alerts.',
      D: 'Single spot checks cannot capture trend direction or velocity.'
    },
    keyTakeaway: 'Predictive AI algorithms in CGM leverage glucose rate-of-change and trajectory vectors to issue early nocturnal hypoglycemia warnings.',
    sourcePageRef: 'Page 43, Q2',
    difficulty: 'Core Clinical',
    tags: ['CGM', 'Predictive AI', 'Nocturnal Hypoglycemia', 'Algorithms']
  },
  {
    id: 'ai_q3',
    topicId: 'ai_tech_diabetes',
    topicTitle: 'Use of Technology & AI in Diabetes Management',
    questionNumber: 3,
    clinicalVignette: 'A patient living in a rural community uploads his glucose readings and blood pressure measurements to a secure platform. His diabetes specialist reviews the information remotely and modifies his treatment without requiring an in-person visit. Which technology is primarily being utilized?',
    options: [
      { id: 'A', text: 'Telemedicine' },
      { id: 'B', text: 'Automated insulin delivery' },
      { id: 'C', text: 'CGM' },
      { id: 'D', text: 'Genomic screening' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Telemedicine',
    explanation: 'Telemedicine (specifically asynchronous remote patient monitoring and tele-consultation) allows health data transmission from rural or remote settings to centralized specialists for clinical decision-making, dose titration, and counseling without requiring physical travel.',
    optionRationales: {
      A: 'Correct. Remote transmission of physiological data and asynchronous clinical reviews exemplifies telemedicine.',
      B: 'Automated insulin delivery refers to closed-loop insulin pumps ("artificial pancreas"), not clinician tele-consults.',
      C: 'CGM is the sensor device, but the overarching communication platform and care delivery model is telemedicine.',
      D: 'Genomic screening involves DNA analysis for monogenic diabetes, unrelated to routine glucose log reviews.'
    },
    keyTakeaway: 'Remote transmission and specialist interpretation of home biometric data constitutes Telemedicine / Remote Patient Monitoring.',
    sourcePageRef: 'Pages 43–44, Q3',
    difficulty: 'Core Clinical',
    tags: ['Telemedicine', 'Digital Health', 'Remote Patient Monitoring']
  },
  {
    id: 'ai_q4',
    topicId: 'ai_tech_diabetes',
    topicTitle: 'Use of Technology & AI in Diabetes Management',
    questionNumber: 4,
    clinicalVignette: 'A patient with diabetes uses an electronic insulin pen that records the time and dose of every injection and transmits the information to a smartphone application. What is the principal benefit of this technology?',
    options: [
      { id: 'A', text: 'It produces insulin automatically' },
      { id: 'B', text: 'It improves tracking and adherence to insulin administration' },
      { id: 'C', text: 'It eliminates the need for glucose monitoring' },
      { id: 'D', text: 'It replaces HbA1c testing' }
    ],
    correctOption: 'B',
    correctAnswerText: 'It improves tracking and adherence to insulin administration',
    explanation: 'The primary clinical value of smart digital insulin pens is passive, objective digital logging of injection timestamps and units delivered. This eliminates patient recall bias, reveals missed mealtime boluses, enables accurate retrospective audit by clinicians, and enhances overall regimen adherence.',
    optionRationales: {
      A: 'Pens do not synthesize or produce insulin; they inject loaded cartridges.',
      B: 'Correct. Automated digital logging improves dosing accuracy, adherence, and identifies missed boluses.',
      C: 'Glucose monitoring remains essential to determine required insulin doses.',
      D: 'HbA1c testing remains the gold standard metric for long-term glycemic validation.'
    },
    keyTakeaway: 'Smart insulin pens automatically log dose timings and units, improving patient adherence and clinical oversight.',
    sourcePageRef: 'Page 44, Q4',
    difficulty: 'Core Clinical',
    tags: ['Smart Pen', 'Adherence', 'Diabetes Tech']
  },
  {
    id: 'ai_q5',
    topicId: 'ai_tech_diabetes',
    topicTitle: 'Use of Technology & AI in Diabetes Management',
    questionNumber: 5,
    clinicalVignette: 'A 68-year-old man with diabetes uses CGM. The device suddenly reports a glucose of 48 mg/dL. However, he is completely asymptomatic, alert, and eating normally. A finger-stick measurement shows 112 mg/dL. What is the best next step?',
    options: [
      { id: 'A', text: 'Administer IV dextrose immediately based solely on the CGM' },
      { id: 'B', text: 'Give glucagon' },
      { id: 'C', text: 'Repeat/confirm the glucose measurement and assess for CGM inaccuracy before altering therapy' },
      { id: 'D', text: 'Increase his basal insulin' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Repeat/confirm the glucose measurement and assess for CGM inaccuracy before altering therapy',
    explanation: 'Continuous Glucose Monitors measure interstitial fluid glucose, which has a 5–15 minute physiological lag compared to capillary blood. Furthermore, mechanical compression on the sensor during sleep or sitting ("compression lows") creates local tissue ischemia and falsely low interstitial glucose readings. Whenever CGM readings mismatch clinical symptoms, verification with capillary finger-stick blood glucose is mandatory before treating.',
    optionRationales: {
      A: 'Treating a false CGM value with IV dextrose will cause severe rebound hyperglycemia.',
      B: 'Glucagon is unnecessary and will induce severe nausea, vomiting, and hyperglycemia in a euglycemic patient.',
      C: 'Correct. Incongruent CGM readings must be confirmed by capillary finger-stick (assessing for compression artifacts or sensor error).',
      D: 'Increasing basal insulin would cause true subsequent hypoglycemia.'
    },
    keyTakeaway: 'When CGM values do not correlate with clinical symptoms, always verify with capillary finger-stick blood glucose before taking clinical action.',
    sourcePageRef: 'Page 44, Q5',
    difficulty: 'High Yield',
    tags: ['CGM', 'Compression Lows', 'Clinical Correlation', 'Sensor Lag']
  },

  // ----------------------------------------------------
  // SYNDROME OF INAPPROPRIATE ADH (SIADH) (Pages 20-22)
  // ----------------------------------------------------
  {
    id: 'siadh_q1',
    topicId: 'siadh',
    topicTitle: 'Syndrome of Inappropriate ADH (SIADH)',
    questionNumber: 1,
    clinicalVignette: 'A 67-year-old man is admitted with progressive headache, nausea, and confusion over the past 48 hours. He has a 50-pack-year smoking history and recently developed a chronic cough with unintentional weight loss. On examination, he is alert but disoriented to time. His mucous membranes are moist, blood pressure is 126/78 mmHg, pulse is 80/min, and there is no peripheral edema or orthostatic hypotension. Laboratory investigations reveal: Serum Na⁺: 117 mmol/L, Serum osmolality: 262 mOsm/kg, Urine osmolality: 610 mOsm/kg, Urine Na⁺: 52 mmol/L, Morning cortisol: Normal, TSH: Normal. A chest CT demonstrates a centrally located hilar mass. Which of the following best explains this patient\'s hyponatremia?',
    options: [
      { id: 'A', text: 'Increased renal sodium wasting due to reduced aldosterone secretion' },
      { id: 'B', text: 'Ectopic production of arginine vasopressin by malignant cells' },
      { id: 'C', text: 'Increased atrial natriuretic peptide secretion secondary to volume overload' },
      { id: 'D', text: 'Excessive water intake causing suppression of antidiuretic hormone secretion' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Ectopic production of arginine vasopressin by malignant cells.',
    explanation: 'The clinical picture is classic for SIADH: hypotonic hyponatremia (serum Na 117, Osm 262), inappropriately concentrated urine (Osm 610 > 100), high urine sodium (52 > 30), and clinical euvolemia (no edema, normal BP/HR, moist membranes) in a heavy smoker with a central hilar mass. Small cell lung carcinoma (SCLC) is famous for paraneoplastic ectopic synthesis and secretion of Arginine Vasopressin (AVP/ADH).',
    optionRationales: {
      A: 'Adrenal insufficiency is ruled out by normal morning cortisol and clinical euvolemia.',
      B: 'Correct. Small cell neuroendocrine lung carcinoma produces paraneoplastic ectopic AVP.',
      C: 'The patient is clinically euvolemic, not hypervolemic.',
      D: 'Primary polydipsia produces maximally dilute urine (urine Osm < 100 mOsm/kg).'
    },
    keyTakeaway: 'Euvolemic hypotonic hyponatremia with concentrated urine in a smoker with a central hilar mass indicates ectopic AVP from Small Cell Lung Cancer.',
    sourcePageRef: 'Page 20, Q1',
    difficulty: 'High Yield',
    tags: ['SIADH', 'Small Cell Lung Cancer', 'Paraneoplastic', 'Hyponatremia']
  },
  {
    id: 'siadh_q2',
    topicId: 'siadh',
    topicTitle: 'Syndrome of Inappropriate ADH (SIADH)',
    questionNumber: 2,
    clinicalVignette: 'A 63-year-old woman is evaluated for persistent hyponatremia. She reports drinking approximately 2 L of water daily. Examination shows no edema, no dehydration, and normal vital signs. Laboratory findings: Serum Na⁺: 123 mmol/L, Serum osmolality: 266 mOsm/kg, Urine osmolality: 650 mOsm/kg, Urine Na⁺: 46 mmol/L. Which physiological abnormality best explains these findings?',
    options: [
      { id: 'A', text: 'Persistent insertion of aquaporin-2 channels into collecting duct principal cells' },
      { id: 'B', text: 'Increased sodium reabsorption in the proximal tubule' },
      { id: 'C', text: 'Reduced urea production by the liver' },
      { id: 'D', text: 'Decreased activity of the Na⁺/K⁺ ATPase in the distal nephron' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Persistent insertion of aquaporin-2 channels into collecting duct principal cells',
    explanation: 'Arginine vasopressin (ADH) binds to V2 receptors on the basolateral membrane of principal cells in the renal medullary collecting ducts. This triggers a cAMP cascade stimulating the translocation and insertion of intracellular Aquaporin-2 (AQP2) water channels into the apical (luminal) membrane, causing unchecked water reabsorption and concentrated urine.',
    optionRationales: {
      A: 'Correct. Unregulated ADH activity causes continuous apical insertion of Aquaporin-2 channels, retaining free water.',
      B: 'In SIADH, subclinical volume expansion actually reduces proximal tubular sodium reabsorption (causing high urine Na).',
      C: 'Hepatic urea production is unaffected.',
      D: 'Na+/K+ ATPase dysfunction is not the primary driver of water retention in SIADH.'
    },
    keyTakeaway: 'ADH acts on renal collecting duct principal cells via V2 receptors to insert Aquaporin-2 water channels into apical membranes.',
    sourcePageRef: 'Page 21, Q2',
    difficulty: 'Core Clinical',
    tags: ['SIADH', 'Aquaporin-2', 'V2 Receptor', 'Renal Physiology']
  },
  {
    id: 'siadh_q3',
    topicId: 'siadh',
    topicTitle: 'Syndrome of Inappropriate ADH (SIADH)',
    questionNumber: 3,
    clinicalVignette: 'A 58-year-old man is admitted after a generalized tonic-clonic seizure. His serum sodium is 108 mmol/L. He is diagnosed with acute symptomatic SIAD. After stabilizing his airway, which of the following is the best next step in management?',
    options: [
      { id: 'A', text: 'Begin oral sodium chloride tablets immediately' },
      { id: 'B', text: 'Restrict fluids to 1 L/day only' },
      { id: 'C', text: 'Administer 3% hypertonic saline while closely monitoring serum sodium' },
      { id: 'D', text: 'Start hydrochlorothiazide to promote free-water excretion' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Administer 3% hypertonic saline while closely monitoring serum sodium.',
    explanation: 'Severe, life-threatening symptomatic hyponatremia presenting with seizures, coma, or respiratory depression requires emergent treatment with Intravenous 3% Hypertonic Saline (e.g., 100–150 mL bolus over 10–20 minutes, repeatable up to 3 times) to rapidly raise serum sodium by 4–6 mmol/L, thereby reversing cerebral edema and terminating seizures.',
    optionRationales: {
      A: 'Oral salt tablets act too slowly and cannot be given to a post-ictal patient.',
      B: 'Fluid restriction is appropriate for asymptomatic/chronic SIADH, but far too slow for active seizures.',
      C: 'Correct. IV 3% hypertonic saline is the emergency treatment for severe symptomatic hyponatremia with seizures.',
      D: 'Thiazide diuretics impair urinary diluting capacity and severely worsen hyponatremia.'
    },
    keyTakeaway: 'Severe acute symptomatic hyponatremia with seizures is a medical emergency treated with 3% hypertonic saline boluses.',
    sourcePageRef: 'Page 21, Q3',
    difficulty: 'High Yield',
    tags: ['Hypertonic Saline', 'Hyponatremic Seizure', 'SIADH', 'Emergency']
  },
  {
    id: 'siadh_q4',
    topicId: 'siadh',
    topicTitle: 'Syndrome of Inappropriate ADH (SIADH)',
    questionNumber: 4,
    clinicalVignette: 'A patient with chronic SIAD has serum sodium corrected from 109 mmol/L to 122 mmol/L within 8 hours. The treating physician becomes concerned about a serious neurological complication. Which clinical feature would most strongly support this diagnosis?',
    options: [
      { id: 'A', text: 'Progressive dysarthria and quadriparesis' },
      { id: 'B', text: 'Bilateral pedal edema' },
      { id: 'C', text: 'Kussmaul respirations' },
      { id: 'D', text: 'Hyperreflexia with clonus due to hypocalcemia' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Progressive dysarthria and quadriparesis.',
    explanation: 'Overly rapid correction of chronic hyponatremia (>8–10 mmol/L in 24 hours, or here 13 mmol/L in 8h) causes Osmotic Demyelination Syndrome (formerly Central Pontine Myelinolysis). The rapid extracellular hypertonicity draws water out of brain cells, causing pontine oligodendrocyte dehydration and demyelination, presenting days later with "locked-in" signs: dysarthria, dysphagia, spastic quadriparesis, and pseudobulbar palsy.',
    optionRationales: {
      A: 'Correct. Osmotic demyelination syndrome presents with pontine dysfunction: dysarthria, dysphagia, and spastic quadriparesis.',
      B: 'Pedal edema is a sign of fluid overload, not osmotic demyelination.',
      C: 'Kussmaul breathing is a respiratory compensation for severe metabolic acidosis (DKA).',
      D: 'Hypocalcemic tetany is not related to pontine osmotic myelinolysis.'
    },
    keyTakeaway: 'Rapid overcorrection of severe hyponatremia causes Osmotic Demyelination Syndrome, presenting with dysarthria, dysphagia, and quadriparesis.',
    sourcePageRef: 'Pages 21–22, Q4',
    difficulty: 'High Yield',
    tags: ['Osmotic Demyelination', 'Central Pontine Myelinolysis', 'Sodium Correction']
  },
  {
    id: 'siadh_q5',
    topicId: 'siadh',
    topicTitle: 'Syndrome of Inappropriate ADH (SIADH)',
    questionNumber: 5,
    clinicalVignette: 'A 69-year-old woman develops hyponatremia after a subarachnoid hemorrhage. She has Orthostatic hypotension, Dry mucous membranes, Tachycardia, and Elevated urine sodium. Which diagnosis is most likely?',
    options: [
      { id: 'A', text: 'SIAD' },
      { id: 'B', text: 'Cerebral salt wasting' },
      { id: 'C', text: 'Primary polydipsia' },
      { id: 'D', text: 'Diabetes insipidus' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Cerebral salt wasting',
    explanation: 'Cerebral Salt Wasting (CSW) occurs after intracranial trauma or subarachnoid hemorrhage due to excessive natriuretic peptide release (BNP/ANP) and sympathetic downregulation. Unlike SIADH (which is euvolemic), CSW features true hypovolemia (orthostatic hypotension, tachycardia, dry mucous membranes, hemoconcentration) accompanied by inappropriate renal sodium wasting. Treatment is volume and sodium repletion with isotonic/hypertonic saline, whereas fluid restriction is dangerous.',
    optionRationales: {
      A: 'SIADH is strictly euvolemic without orthostatic hypotension or dehydration signs.',
      B: 'Correct. Hyponatremia + high urine sodium + clinical hypovolemia/dehydration post-CNS injury = Cerebral Salt Wasting.',
      C: 'Primary polydipsia features dilute urine with low osmolality and hypervolemic/euvolemic state.',
      D: 'Diabetes insipidus causes hypernatremia and polyuria, not hyponatremia.'
    },
    keyTakeaway: 'Cerebral Salt Wasting causes hypovolemic hyponatremia with high urine sodium, distinguishing it from euvolemic SIADH.',
    sourcePageRef: 'Page 22, Q5',
    difficulty: 'High Yield',
    tags: ['Cerebral Salt Wasting', 'SIADH vs CSW', 'Subarachnoid Hemorrhage']
  },

  // ----------------------------------------------------
  // DIABETES INSIPIDUS (Pages 22-25)
  // ----------------------------------------------------
  {
    id: 'di_q1',
    topicId: 'diabetes_insipidus',
    topicTitle: 'Diabetes Insipidus (DI)',
    questionNumber: 1,
    clinicalVignette: 'A 34-year-old woman develops intense thirst and frequent urination several weeks after undergoing neurosurgical procedure. She produces approximately 7 L of urine daily. Serum sodium is 151 mmol/L, while urine osmolality is 85 mOsm/kg. After administration of desmopressin, urine osmolality increases to 620 mOsm/kg. Which of the following is the most likely underlying abnormality?',
    options: [
      { id: 'A', text: 'Impaired renal response to vasopressin' },
      { id: 'B', text: 'Reduced release of vasopressin from the posterior pituitary' },
      { id: 'C', text: 'Increased renal clearance of vasopressin' },
      { id: 'D', text: 'Increased production of vasopressin by the kidney' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Reduced release of vasopressin from the posterior pituitary',
    explanation: 'The patient presents with Central (Neurogenic) Diabetes Insipidus following neurosurgery. Pituitary stalk or hypothalamic damage leads to deficient synthesis/release of ADH. When exogenous desmopressin (DDAVP) is administered, the kidneys respond normally, causing a >50% increase in urine osmolality (here jumping from 85 to 620 mOsm/kg).',
    optionRationales: {
      A: 'Impaired renal response describes Nephrogenic DI, where DDAVP produces minimal or no change in urine osmolality.',
      B: 'Correct. Central DI is caused by deficient posterior pituitary vasopressin release that corrects with exogenous desmopressin.',
      C: 'Increased clearance is not the mechanism of post-surgical DI.',
      D: 'Vasopressin is produced in the hypothalamus, not the kidney.'
    },
    keyTakeaway: 'Central DI is characterized by deficient pituitary ADH release and a dramatic (>50%) increase in urine osmolality following desmopressin.',
    sourcePageRef: 'Pages 22–23, Q1',
    difficulty: 'High Yield',
    tags: ['Central DI', 'Desmopressin', 'Water Deprivation Test', 'Neurosurgery']
  },
  {
    id: 'di_q2',
    topicId: 'diabetes_insipidus',
    topicTitle: 'Diabetes Insipidus (DI)',
    questionNumber: 2,
    clinicalVignette: 'A 46-year-old man presents with polyuria and polydipsia. He has no history of neurosurgery or head trauma. His serum sodium is 146 mmol/L and urine osmolality is 120 mOsm/kg. A supervised water-deprivation test is performed, followed by administration of desmopressin. Test results: Baseline Urine Osm: 120 mOsm/kg; After water deprivation: 125 mOsm/kg; After desmopressin: 132 mOsm/kg. Which of the following is the most likely diagnosis?',
    options: [
      { id: 'A', text: 'Central diabetes insipidus' },
      { id: 'B', text: 'Nephrogenic diabetes insipidus' },
      { id: 'C', text: 'Primary polydipsia' },
      { id: 'D', text: 'Syndrome of inappropriate ADH' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Nephrogenic diabetes insipidus',
    explanation: 'In Nephrogenic Diabetes Insipidus, the renal collecting ducts are resistant to the action of vasopressin. As a result, urine fails to concentrate during water deprivation (remains < 300 mOsm/kg), and subsequent administration of exogenous desmopressin produces little to no increase in urine osmolality (<50% or <10% rise).',
    optionRationales: {
      A: 'Central DI responds to desmopressin with a marked (>50%) rise in urine osmolality.',
      B: 'Correct. Inability to concentrate urine during water deprivation AND failure to respond to desmopressin is diagnostic of Nephrogenic DI.',
      C: 'Primary polydipsia concentrates urine (>600 mOsm/kg) during water deprivation alone.',
      D: 'SIADH features concentrated urine (>300-600 mOsm/kg) and hyponatremia.'
    },
    keyTakeaway: 'Nephrogenic DI shows failure of urine to concentrate during water deprivation AND negligible response to desmopressin.',
    sourcePageRef: 'Page 23, Q2',
    difficulty: 'High Yield',
    tags: ['Nephrogenic DI', 'Desmopressin Test', 'Polyuria']
  },
  {
    id: 'di_q3',
    topicId: 'diabetes_insipidus',
    topicTitle: 'Diabetes Insipidus (DI)',
    questionNumber: 3,
    clinicalVignette: 'A 28-year-old woman presents with polyuria and polydipsia. She drinks approximately 8 L of water daily. Serum sodium is 138 mmol/L, and urine osmolality is 70 mOsm/kg. After supervised water deprivation, her urine osmolality increases to 650 mOsm/kg. Which of the following best explains her findings?',
    options: [
      { id: 'A', text: 'Impaired aquaporin-2 channel expression' },
      { id: 'B', text: 'Reduced secretion of arginine vasopressin' },
      { id: 'C', text: 'Renal resistance to arginine vasopressin' },
      { id: 'D', text: 'Chronic suppression of arginine vasopressin secretion due to excessive water intake' }
    ],
    correctOption: 'D',
    correctAnswerText: 'Chronic suppression of arginine vasopressin secretion due to excessive water intake',
    explanation: 'The patient has Primary (Psychogenic) Polydipsia. Excessive habitual fluid intake chronically suppresses hypothalamic osmoreceptors, reducing endogenous AVP secretion and producing dilute polyuria. During supervised water deprivation, plasma osmolality rises, triggering intact endogenous AVP release and allowing the normal kidneys to concentrate urine (>600 mOsm/kg).',
    optionRationales: {
      A: 'Aquaporin expression and response are fully intact (as proven by concentration to 650 mOsm/kg).',
      B: 'Endogenous AVP secretion is normal when stimulated by dehydration.',
      C: 'The kidneys show no resistance to vasopressin.',
      D: 'Correct. Excessive water intake chronically suppresses AVP, which restores normally upon water restriction.'
    },
    keyTakeaway: 'Primary Polydipsia is distinguished by normal urinary concentration (>600 mOsm/kg) during water deprivation alone.',
    sourcePageRef: 'Page 24, Q3',
    difficulty: 'Core Clinical',
    tags: ['Primary Polydipsia', 'Water Deprivation', 'Psychogenic Polydipsia']
  },
  {
    id: 'di_q4',
    topicId: 'diabetes_insipidus',
    topicTitle: 'Diabetes Insipidus (DI)',
    questionNumber: 4,
    clinicalVignette: 'A 62-year-old man with bipolar disorder develops severe polyuria several months after starting a long-term medication. His urine output is 6 L/day, serum sodium is 149 mmol/L, and urine osmolality is 110 mOsm/kg. Desmopressin produces only a small increase in urine osmolality. Which renal abnormality is most likely responsible?',
    options: [
      { id: 'A', text: 'Reduced glomerular filtration of sodium' },
      { id: 'B', text: 'Impaired insertion of aquaporin-2 channels into collecting-duct membranes' },
      { id: 'C', text: 'Increased sodium reabsorption in the proximal tubule' },
      { id: 'D', text: 'Excessive secretion of endogenous AVP' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Impaired insertion of aquaporin-2 channels into collecting-duct membranes',
    explanation: 'Lithium (used for bipolar disorder) enters collecting duct principal cells via epithelial sodium channels (ENaC) and inhibits glycogen synthase kinase-3beta (GSK-3b) and adenylate cyclase. This impairs AVP-stimulated cAMP signaling, blocking the trafficking and apical insertion of Aquaporin-2 water channels, leading to drug-induced nephrogenic DI.',
    optionRationales: {
      A: 'Glomerular sodium filtration is not the mechanism of lithium-induced polyuria.',
      B: 'Correct. Lithium blocks AVP-stimulated intracellular signaling, preventing Aquaporin-2 apical membrane insertion.',
      C: 'Proximal sodium reabsorption is not the primary site of lithium nephrogenic DI.',
      D: 'Endogenous AVP is typically elevated in nephrogenic DI as a compensatory response.'
    },
    keyTakeaway: 'Lithium toxicity causes nephrogenic diabetes insipidus by inhibiting Aquaporin-2 channel trafficking in principal collecting duct cells.',
    sourcePageRef: 'Page 24, Q4',
    difficulty: 'High Yield',
    tags: ['Lithium', 'Nephrogenic DI', 'Aquaporin-2', 'Bipolar Disorder']
  },
  {
    id: 'di_q5',
    topicId: 'diabetes_insipidus',
    topicTitle: 'Diabetes Insipidus (DI)',
    questionNumber: 5,
    clinicalVignette: 'A 41-year-old man is being evaluated for persistent polyuria. Laboratory studies show: Plasma osmolality: 305 mOsm/kg, Urine osmolality: 95 mOsm/kg, Serum sodium: 150 mmol/L. The patient has no access to excessive free water during testing. Plasma AVP concentration is appropriately elevated. Which of the following renal processes is most likely impaired?',
    options: [
      { id: 'A', text: 'Generation of the medullary osmotic gradient' },
      { id: 'B', text: 'Glucose reabsorption in the proximal tubule' },
      { id: 'C', text: 'Sodium reabsorption in the distal convoluted tubule' },
      { id: 'D', text: 'Potassium secretion in collecting-duct principal cells' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Generation of the medullary osmotic gradient',
    explanation: 'For water to be reabsorbed from the collecting ducts through aquaporin channels, two conditions are required: (1) functional AVP and aquaporin channels, and (2) a hypertonic medullary interstitial osmotic gradient (generated by the loop of Henle countercurrent multiplier and urea recycling). If the medullary gradient is washed out (due to chronic polyuria, loop diuretics, or interstitial disease), urine cannot be concentrated even when AVP is high.',
    optionRationales: {
      A: 'Correct. Loss of the hypertonic medullary osmotic gradient prevents water reabsorption despite high circulating AVP.',
      B: 'Proximal glucose reabsorption causes glucosuria, not pure nephrogenic water wasting.',
      C: 'Distal sodium reabsorption regulates blood pressure and calcium, not the deep medullary gradient.',
      D: 'Principal cell potassium secretion is regulated by aldosterone.'
    },
    keyTakeaway: 'Concentration of urine requires both intact AVP-aquaporin signaling and a preserved hypertonic renal medullary osmotic gradient.',
    sourcePageRef: 'Pages 24–25, Q5',
    difficulty: 'Advanced',
    tags: ['Medullary Osmotic Gradient', 'Renal Physiology', 'Countercurrent Multiplier']
  },

  // ----------------------------------------------------
  // PMOS (FORMERLY PCOS) (Pages 57-59)
  // ----------------------------------------------------
  {
    id: 'pmos_q1',
    topicId: 'pmos_pcos',
    topicTitle: 'PMOS (Polycystic Ovarian Syndrome)',
    questionNumber: 1,
    clinicalVignette: 'A 24-year-old woman presents with a 3-year history of irregular menstrual cycles and inability to conceive. Examination reveals obesity, hirsutism, and acanthosis nigricans. Pregnancy test is negative. Which of the following best explains the presence of acanthosis nigricans in this patient?',
    options: [
      { id: 'A', text: 'Excess estrogen production' },
      { id: 'B', text: 'Hyperprolactinaemia' },
      { id: 'C', text: 'Insulin resistance' },
      { id: 'D', text: 'Progesterone deficiency' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Insulin resistance',
    explanation: 'Acanthosis nigricans (velvety hyperpigmented cutaneous plaques in flexural folds) is a clinical cutaneous biomarker of severe peripheral Insulin Resistance. Compensatory hyperinsulinemia cross-reacts with insulin-like growth factor-1 (IGF-1) receptors on dermal fibroblasts and epidermal keratinocytes, inducing epidermal hyperplasia and hyperpigmentation.',
    optionRationales: {
      A: 'Excess estrogen causes endometrial hyperplasia, not acanthosis nigricans.',
      B: 'Hyperprolactinemia causes galactorrhea and hypogonadism.',
      C: 'Correct. Acanthosis nigricans is a direct hallmark of severe insulin resistance stimulating IGF-1 receptors.',
      D: 'Progesterone deficiency results in dysfunctional uterine bleeding.'
    },
    keyTakeaway: 'Acanthosis nigricans is a direct cutaneous manifestation of hyperinsulinemia and severe insulin resistance.',
    sourcePageRef: 'Pages 57–58, Q1',
    difficulty: 'High Yield',
    tags: ['PCOS', 'PMOS', 'Acanthosis Nigricans', 'Insulin Resistance']
  },
  {
    id: 'pmos_q2',
    topicId: 'pmos_pcos',
    topicTitle: 'PMOS (Polycystic Ovarian Syndrome)',
    questionNumber: 2,
    clinicalVignette: 'A 24-year-old woman presents with a 2-year history of irregular menstrual periods and progressive facial hair growth. She has gained 12 kg over the past 3 years. Physical examination reveals a BMI of 34 kg/m² and hyperpigmented velvety plaques on the posterior neck. Laboratory studies show elevated serum testosterone and normal prolactin and TSH levels. Which of the following is the most likely underlying mechanism responsible for this patient\'s condition?',
    options: [
      { id: 'A', text: 'Autoimmune destruction of ovarian follicle' },
      { id: 'B', text: 'Increased ovarian androgen production stimulated by hyperinsulinaemia' },
      { id: 'C', text: 'Deficiency of 21-hydroxylase enzyme' },
      { id: 'D', text: 'Excess ACTH secretion from the pituitary gland' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Increased ovarian androgen production stimulated by hyperinsulinaemia',
    explanation: 'In Polycystic Ovary Syndrome / PMOS, hyperinsulinemia directly synergizes with luteinizing hormone (LH) on ovarian theca cells, upregulating CYP17A1 and stimulating excess ovarian androgen (testosterone/androstenedione) production. Concurrently, hyperinsulinemia inhibits hepatic Sex Hormone-Binding Globulin (SHBG) synthesis, elevating free circulating testosterone.',
    optionRationales: {
      A: 'Autoimmune destruction causes primary ovarian insufficiency (premature ovarian failure with high FSH).',
      B: 'Correct. Hyperinsulinemia stimulates theca cell androgen synthesis and suppresses hepatic SHBG production.',
      C: '21-hydroxylase deficiency causes congenital adrenal hyperplasia (CAH), with elevated 17-hydroxyprogesterone.',
      D: 'Excess pituitary ACTH causes Cushing disease.'
    },
    keyTakeaway: 'Hyperinsulinemia drives ovarian theca cell androgen hypersecretion and reduces SHBG in PCOS/PMOS.',
    sourcePageRef: 'Page 58, Q2',
    difficulty: 'Core Clinical',
    tags: ['PCOS', 'Androgen Excess', 'Hyperinsulinemia', 'Theca Cells']
  },
  {
    id: 'pmos_q3',
    topicId: 'pmos_pcos',
    topicTitle: 'PMOS (Polycystic Ovarian Syndrome)',
    questionNumber: 3,
    clinicalVignette: 'A 29-year-old obese woman with PMOS wishes to conceive. Which medication is currently recommended as first-line pharmacological therapy for ovulation induction?',
    options: [
      { id: 'A', text: 'Metformin' },
      { id: 'B', text: 'Letrozole' },
      { id: 'C', text: 'Spironolactone' },
      { id: 'D', text: 'Combined oral contraceptive pill' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Letrozole',
    explanation: 'According to international evidence-based guidelines (ESHRE/ASRM), Letrozole (an oral non-steroidal aromatase inhibitor) is the first-line pharmacological agent for ovulation induction in women with anovulatory infertility due to PCOS/PMOS. It results in higher ovulation, pregnancy, and live birth rates compared to clomiphene citrate, particularly in obese women.',
    optionRationales: {
      A: 'Metformin improves insulin sensitivity but is inferior to letrozole as a sole agent for ovulation induction.',
      B: 'Correct. Letrozole is the gold standard first-line ovulation induction agent in PCOS/PMOS.',
      C: 'Spironolactone is an anti-androgen with teratogenic risks and is contraindicated when attempting conception.',
      D: 'COCPs are used for cycle regulation and hirsutism when contraception is desired, but prevent ovulation.'
    },
    keyTakeaway: 'Letrozole (aromatase inhibitor) is the first-line ovulation induction agent for anovulatory infertility in PCOS/PMOS.',
    sourcePageRef: 'Pages 58–59, Q3',
    difficulty: 'High Yield',
    tags: ['Letrozole', 'Ovulation Induction', 'Infertility', 'PCOS']
  },
  {
    id: 'pmos_q4',
    topicId: 'pmos_pcos',
    topicTitle: 'PMOS (Polycystic Ovarian Syndrome)',
    questionNumber: 4,
    clinicalVignette: 'A 28-year-old woman presents with infertility. She has irregular menstrual cycles occurring every 3–4 months. Ultrasound demonstrates multiple peripheral ovarian follicles. Which pathological process is primarily responsible for her infertility?',
    options: [
      { id: 'A', text: 'Endometrial fibrosis' },
      { id: 'B', text: 'Tubal occlusion' },
      { id: 'C', text: 'Follicular arrest leading to chronic anovulation' },
      { id: 'D', text: 'Reduced ovarian reserve' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Follicular arrest leading to chronic anovulation',
    explanation: 'In PCOS, the intra-ovarian hyperandrogenic and hyperinsulinemic milieu halts follicle maturation at the pre-antral and small antral stages (2–9 mm in diameter). Follicles fail to respond to normal FSH signals and cannot achieve dominant follicle selection, causing follicular arrest, peripheral follicular accumulation ("string of pearls"), and chronic anovulation.',
    optionRationales: {
      A: 'Endometrial fibrosis (Asherman syndrome) follows vigorous curettage or uterine infections.',
      B: 'Tubal occlusion is seen in pelvic inflammatory disease (PID) or endometriosis.',
      C: 'Correct. Premature follicular arrest and failure to select a dominant follicle causes chronic anovulation.',
      D: 'Ovarian reserve is typically increased (high AMH, high antral follicle count) in PCOS.'
    },
    keyTakeaway: 'Infertility in PCOS results from intraovarian androgen-mediated follicular growth arrest and chronic anovulation.',
    sourcePageRef: 'Page 59, Q4',
    difficulty: 'Core Clinical',
    tags: ['PCOS', 'Anovulation', 'Follicular Arrest', 'Infertility']
  },

  // ----------------------------------------------------
  // MANAGEMENT OF THYROID STORMS (Pages 59-61)
  // ----------------------------------------------------
  {
    id: 'ts_q1',
    topicId: 'thyroid_storm',
    topicTitle: 'Management of Thyroid Storms',
    questionNumber: 1,
    clinicalVignette: 'A 40-year-old man with thyroid storm is being managed with propranolol, propylthiouracil, hydrocortisone and Lugol\'s iodine. He subsequently develops worsening hypotension and severe pulmonary oedema. Which of the following is the most appropriate next step in management?',
    options: [
      { id: 'A', text: 'Increase the dose of propranolol' },
      { id: 'B', text: 'Continue propranolol and commence aspirin' },
      { id: 'C', text: 'Provide supportive management and treat the cardiovascular complication while addressing the precipitating cause' },
      { id: 'D', text: 'Stop corticosteroids and commence levothyroxine' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Provide supportive management and treat the cardiovascular complication while addressing the precipitating cause',
    explanation: 'Thyroid storm with decompensated heart failure and pulmonary edema represents severe thyrotoxic cardiomyopathy. Beta-blockers must be cautiously reduced or stopped if they are depressing cardiac output. The immediate priority is ICU supportive hemodynamic care (non-invasive ventilation, loop diuretics, inotropic/vasopressor support) and identifying/treating the precipitating factor (infection, trauma, noncompliance).',
    optionRationales: {
      A: 'Increasing beta-blockers in cardiogenic shock / acute pulmonary edema will precipitate complete cardiovascular collapse.',
      B: 'Aspirin is strictly contraindicated in thyroid storm because it displaces T4/T3 from thyroid-binding globulin (TBG).',
      C: 'Correct. Supportive hemodynamic management of pulmonary edema while treating the precipitant is paramount.',
      D: 'Levothyroxine is contraindicated in hyperthyroid crisis.'
    },
    keyTakeaway: 'Cardiovascular collapse in thyroid storm requires ICU supportive therapy, careful reassessment of beta-blockers, and treatment of precipitating triggers.',
    sourcePageRef: 'Pages 59–60, Q1',
    difficulty: 'Core Clinical',
    tags: ['Thyroid Storm', 'Cardiomyopathy', 'Pulmonary Edema', 'ICU Care']
  },
  {
    id: 'ts_q2',
    topicId: 'thyroid_storm',
    topicTitle: 'Management of Thyroid Storms',
    questionNumber: 2,
    clinicalVignette: 'A 29-year-old woman with previously undiagnosed Graves\' disease develops thyroid storm following severe pneumonia. Despite appropriate supportive care, a β-blocker, thionamide, iodine and corticosteroid therapy, she continues to deteriorate with severe multiorgan dysfunction. Which of the following is the most appropriate consideration at this stage?',
    options: [
      { id: 'A', text: 'Discontinue all antithyroid therapy and observe' },
      { id: 'B', text: 'Commence radioactive iodine therapy immediately' },
      { id: 'C', text: 'Consider specialist rescue therapy such as plasma exchange or emergency thyroidectomy' },
      { id: 'D', text: 'Administer aspirin to increase thyroid hormone clearance' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Consider specialist rescue therapy such as plasma exchange or emergency thyroidectomy',
    explanation: 'When thyroid storm is refractory to maximal standard medical therapy (thionamides, iodine, beta-blockade, glucocorticoids), specialist rescue therapies must be deployed. Therapeutic Plasma Exchange (plasmapheresis) rapidly removes circulating protein-bound T3/T4 and autoimmune antibodies. Once stabilized, emergent or urgent thyroidectomy offers definitive removal of the thyroid hormone source.',
    optionRationales: {
      A: 'Discontinuing therapy leads to 100% mortality in deteriorating multi-organ failure.',
      B: 'Radioactive iodine (RAI) induces acute radiation thyroiditis and massive hormone release, worsening the storm.',
      C: 'Correct. Therapeutic Plasma Exchange (TPE) and emergency thyroidectomy are established rescue therapies for refractory storm.',
      D: 'Aspirin displaces thyroid hormones from TBG and increases free toxic hormone levels.'
    },
    keyTakeaway: 'Refractory thyroid storm failing standard 4-drug therapy requires rescue Therapeutic Plasma Exchange (TPE) or emergency thyroidectomy.',
    sourcePageRef: 'Page 60, Q2',
    difficulty: 'High Yield',
    tags: ['Thyroid Storm', 'Plasmapheresis', 'Thyroidectomy', 'Refractory Crisis']
  },
  {
    id: 'ts_q3',
    topicId: 'thyroid_storm',
    topicTitle: 'Management of Thyroid Storms',
    questionNumber: 3,
    clinicalVignette: 'A patient with thyroid storm receives propranolol. Thirty minutes later, he becomes profoundly hypotensive, develops worsening pulmonary oedema and has a heart rate of 58/min. Before treatment, his echocardiogram showed severe systolic dysfunction. Which mechanism best explains his deterioration?',
    options: [
      { id: 'A', text: 'Acute iodine-induced hyperthyroidism' },
      { id: 'B', text: 'Sudden loss of sympathetic compensation in severe thyrotoxic cardiomyopathy' },
      { id: 'C', text: 'Increased T4-to-T3 conversion caused by propranolol' },
      { id: 'D', text: 'Acute adrenal stimulation caused by beta-blockade' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Sudden loss of sympathetic compensation in severe thyrotoxic cardiomyopathy',
    explanation: 'In severe high-output/tachycardia-induced thyrotoxic cardiomyopathy with low baseline ejection fraction, cardiac output is heavily dependent on elevated endogenous sympathetic tone and adrenergic drive. Administering non-selective beta-blockers abruptly removes this compensatory inotropic/chronotropic support, precipitating acute cardiogenic shock, severe bradycardia, and flash pulmonary edema.',
    optionRationales: {
      A: 'Iodine takes days to induce Jod-Basedow phenomena and is not the cause of rapid 30-minute collapse.',
      B: 'Correct. High sympathetic drive maintains borderline cardiac output in thyrotoxic heart failure; acute beta-blockade triggers sudden cardiogenic collapse.',
      C: 'Propranolol actually inhibits peripheral T4-to-T3 conversion.',
      D: 'Beta-blockade does not stimulate acute adrenal hormone secretion.'
    },
    keyTakeaway: 'Thyrotoxic cardiomyopathy depends on high sympathetic drive; aggressive beta-blockade can precipitate cardiogenic shock and pulmonary edema.',
    sourcePageRef: 'Pages 60–61, Q3',
    difficulty: 'High Yield',
    tags: ['Beta-Blockers', 'Thyrotoxic Cardiomyopathy', 'Cardiogenic Shock', 'Propranolol']
  },
  {
    id: 'ts_q4',
    topicId: 'thyroid_storm',
    topicTitle: 'Management of Thyroid Storms',
    questionNumber: 4,
    clinicalVignette: 'A 40-year-old woman presents with fever, hypotension, tachycardia and confusion. She has a history of Graves disease. She is suspected to have thyroid storm and is started on appropriate therapy. Blood cultures subsequently grow Escherichia coli. Which of the following is the most appropriate next step?',
    options: [
      { id: 'A', text: 'Stop thyroid-directed therapy because the diagnosis is sepsis' },
      { id: 'B', text: 'Treat the infection while continuing treatment for thyroid storm' },
      { id: 'C', text: 'Treat only the thyroid storm because infection is a secondary finding' },
      { id: 'D', text: 'Wait for thyroid hormone levels to normalize before giving antibiotics' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Treat the infection while continuing treatment for thyroid storm',
    explanation: 'Infection (such as Gram-negative urosepsis / bacteremia) is the most frequent trigger of thyroid storm in patients with underlying Graves\' disease or toxic multinodular goiter. Treatment must be aggressive on both fronts simultaneously: targeted antimicrobial therapy for the sepsis precipitant AND ongoing antithyroid regimen (thionamide, beta-blocker, steroids, iodine).',
    optionRationales: {
      A: 'Stopping storm therapy will lead to uncontrolled hypermetabolic storm and death.',
      B: 'Correct. Simultaneous treatment of the infectious precipitant (antibiotics) and thyroid storm is mandatory.',
      C: 'Failing to treat bacteremia will perpetuate sepsis, cytokine release, and refractory storm.',
      D: 'Delaying antibiotics in bacteremic sepsis significantly increases mortality.'
    },
    keyTakeaway: 'Infection is the classic trigger of thyroid storm; clinicians must aggressively treat both the precipitating infection and the thyroid storm concurrently.',
    sourcePageRef: 'Page 61, Q4',
    difficulty: 'Core Clinical',
    tags: ['Thyroid Storm', 'Sepsis Trigger', 'Infection', 'Dual Therapy']
  },

  // ----------------------------------------------------
  // MANAGEMENT OF HYPOTHYROIDISM COMA (MYXEDEMA COMA) (Pages 61-64)
  // ----------------------------------------------------
  {
    id: 'myx_q1',
    topicId: 'myxedema_coma',
    topicTitle: 'Management of Hypothyroidism Coma (Myxedema Coma)',
    questionNumber: 1,
    clinicalVignette: 'A 65-year-old woman with chronic untreated primary hypothyroidism is brought to the ICU with severe lethargy, a temperature of 31.8°C, and a respiratory rate of 6/min. Arterial blood gas on room air shows: pH 7.18, PaCO₂ 68 mmHg, and PaO₂ 52 mmHg. Which underlying physiological mechanism primarily accounts for her profound hypercapnic respiratory failure?',
    options: [
      { id: 'A', text: 'Reduced neural sensitivity of respiratory centers to hypercapnia and hypoxia' },
      { id: 'B', text: 'Progressive alveolar-capillary membrane thickening due to glycosaminoglycan deposition' },
      { id: 'C', text: 'Primary diaphragm weakness secondary to myxedematous infiltrate' },
      { id: 'D', text: 'Acute bronchospasm triggered by severe hypothermia' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Reduced neural sensitivity of respiratory centers to hypercapnia and hypoxia',
    explanation: 'In severe hypothyroidism and myxedema coma, profound thyroid hormone deficiency suppresses the metabolic activity of the central nervous system, leading to blunted central respiratory drive and decreased neural sensitivity of the medullary and carotid chemoreceptors to both hypoxia and hypercapnia.',
    optionRationales: {
      A: 'Correct. Decreased central ventilatory drive and blunted hypoxic/hypercapnic chemoreceptor sensitivity causes hypoventilation in myxedema coma.',
      B: 'Alveolar-capillary thickening causes diffusion limitation (hypoxia), not primary profound central hypoventilation.',
      C: 'Diaphragm weakness contributes secondarily, but central chemoreceptor depression is the primary neurological mechanism.',
      D: 'Hypothermia blunts metabolism rather than causing primary acute bronchospasm.'
    },
    keyTakeaway: 'Myxedema coma causes severe hypercapnic respiratory failure primarily via central depression of respiratory chemosensitivity.',
    sourcePageRef: 'Page 61, Q1',
    difficulty: 'High Yield',
    tags: ['Myxedema Coma', 'Hypoventilation', 'Central Drive', 'Hypercapnia']
  },
  {
    id: 'myx_q2',
    topicId: 'myxedema_coma',
    topicTitle: 'Management of Hypothyroidism Coma (Myxedema Coma)',
    questionNumber: 2,
    clinicalVignette: 'A 70-year-old man in myxedema coma remains hypotensive (BP 78/48 mmHg) despite intravenous volume expansion with 2 L of normal saline and high-dose stress-steroid coverage. Echocardiogram reveals a moderate pericardial effusion without tamponade and severe global hypokinesis. What is the most appropriate next step in managing his circulatory collapse?',
    options: [
      { id: 'A', text: 'Immediate pericardiocentesis' },
      { id: 'B', text: 'High-dose IV bolus of norepinephrine as sole therapy' },
      { id: 'C', text: 'Rapid intravenous administration of 100 µg Liothyronine (T3)' },
      { id: 'D', text: 'Initiation of IV levothyroxine (T4) alongside low-to-moderate dose vasopressors' }
    ],
    correctOption: 'D',
    correctAnswerText: 'Initiation of IV levothyroxine (T4) alongside low-to-moderate dose vasopressors',
    explanation: 'Circulatory collapse in myxedema coma stems from thyroid hormone deficit: decreased myocardial inotropy, bradycardia, and downregulation of vascular adrenergic receptors. Fluid expansion and steroids alone cannot restore tone without thyroid hormone replacement. Intravenous Levothyroxine (T4, loading dose 200–400 µg IV) restores vascular responsiveness and cardiac output, supported by low-to-moderate dose vasopressors.',
    optionRationales: {
      A: 'Echocardiogram explicitly ruled out cardiac tamponade; pericardiocentesis is unnecessary and carries procedural risk.',
      B: 'Vasopressors alone fail because alpha/beta receptors are uncoupled in the absence of thyroid hormone.',
      C: 'Bolus high-dose T3 (100 ug) in an elderly patient will induce fatal cardiac ischemia or arrhythmias.',
      D: 'Correct. IV Levothyroxine (T4) combined with cautious vasopressors addresses the underlying hormonal deficiency causing myocardial hypokinesis.'
    },
    keyTakeaway: 'Hypotension in myxedema coma is refractory to vasopressors until IV Levothyroxine (T4) is initiated to restore adrenergic receptor sensitivity.',
    sourcePageRef: 'Page 62, Q2',
    difficulty: 'High Yield',
    tags: ['Myxedema Coma', 'Levothyroxine', 'Circulatory Collapse', 'Inotropy']
  },
  {
    id: 'myx_q3',
    topicId: 'myxedema_coma',
    topicTitle: 'Management of Hypothyroidism Coma (Myxedema Coma)',
    questionNumber: 3,
    clinicalVignette: 'A patient admitted for myxedema coma has a serum sodium of 114 mEq/L and is currently obtunded. Fluid restriction was initiated, but the patient develops a generalized tonic-clonic seizure. Serum osmolality is 242 mOsm/kg, and urine sodium is 45 mEq/L. What is the underlying mechanism of this hyponatremia, and what is the immediate treatment?',
    options: [
      { id: 'A', text: 'Renal sodium wasting; administer hypertonic 3% saline 100 mL bolus' },
      { id: 'B', text: 'Impaired renal free water excretion due to elevated vasopressin (ADH); administer hypertonic 3% saline' },
      { id: 'C', text: 'True hypovolemic hyponatremia; administer 0.9% normal saline boluses' },
      { id: 'D', text: 'Translocational hyponatremia secondary to severe hyperlipidemia; no acute sodium correction needed' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Impaired renal free water excretion due to elevated vasopressin (ADH); administer hypertonic 3% saline',
    explanation: 'Hypothyroidism causes non-osmotic release of Arginine Vasopressin (ADH) and reduces GFR and tubular delivery to the diluting segment, impairing renal free water excretion (producing a SIADH-like state). When severe acute hyponatremia causes seizures, emergency administration of 3% hypertonic saline (100 mL bolus) is required to stop cerebral edema.',
    optionRationales: {
      A: 'The mechanism is water retention from elevated ADH, not primary renal salt wasting.',
      B: 'Correct. ADH-mediated impaired free water excretion causes hyponatremia; seizures mandate emergent 3% hypertonic saline.',
      C: 'Myxedema hyponatremia is primarily euvolemic/hypervolemic water excess, not hypovolemia.',
      D: 'This is true hypotonic hyponatremia (Osm 242) causing life-threatening seizures.'
    },
    keyTakeaway: 'Severe hyponatremia in myxedema coma is mediated by impaired free water clearance (elevated ADH) and requires 3% hypertonic saline when seizures occur.',
    sourcePageRef: 'Pages 62–63, Q3',
    difficulty: 'Core Clinical',
    tags: ['Myxedema Coma', 'Hyponatremia', 'Hypertonic Saline', 'Seizure']
  },
  {
    id: 'myx_q4',
    topicId: 'myxedema_coma',
    topicTitle: 'Management of Hypothyroidism Coma (Myxedema Coma)',
    questionNumber: 4,
    clinicalVignette: 'A 54-year-old man presents with typical clinical signs of myxedema coma following an orthopedic surgery. His baseline laboratory workup reveals: Free T4 0.2 ng/dL (Low), TSH 1.2 mIU/L (Normal), and morning Cortisol 3.1 µg/dL (Low). Imaging shows no previous history of thyroid disease. Which presentation scenario best explains this profile, and how does it change initial steroid dosing?',
    options: [
      { id: 'A', text: 'Primary autoimmune thyroiditis; standard steroid dosing is sufficient' },
      { id: 'B', text: 'Non-thyroidal illness syndrome; hold thyroid hormones and give high-dose steroids only' },
      { id: 'C', text: 'Central (panhypopituitarism) hypothyroidism; stress-dose steroids are mandatory prior to T4 replacement' },
      { id: 'D', text: 'Thyroid hormone resistance syndrome; give high-dose oral T3' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Central (panhypopituitarism) hypothyroidism; stress-dose steroids are mandatory prior to T4 replacement',
    explanation: 'Low free T4 (0.2) with an inappropriately normal/low TSH (1.2) establishes secondary (central) hypothyroidism. The concurrent low morning cortisol (3.1 ug/dL) confirms combined central hypopituitarism (ACTH + TSH deficiency). In all patients with suspected myxedema coma, IV stress-dose glucocorticoids (Hydrocortisone 100 mg q8h) MUST be given BEFORE or simultaneously with thyroid hormone, because thyroid replacement increases metabolic clearance of cortisol and will trigger fatal acute adrenal crisis.',
    optionRationales: {
      A: 'Primary hypothyroidism presents with markedly elevated TSH (>20–100 mIU/L).',
      B: 'Free T4 of 0.2 with clinical coma is overt central failure, not simple euthyroid sick syndrome.',
      C: 'Correct. Low FT4 + normal TSH + low cortisol = Central panhypopituitarism; stress steroids are mandatory prior to T4.',
      D: 'Thyroid hormone resistance features elevated free T4 with elevated/normal TSH.'
    },
    keyTakeaway: 'Central hypothyroidism features low Free T4 with inappropriately normal TSH; stress-dose corticosteroids must be given before thyroid hormone replacement.',
    sourcePageRef: 'Page 63, Q4',
    difficulty: 'High Yield',
    tags: ['Central Hypothyroidism', 'Panhypopituitarism', 'Stress Steroids', 'Adrenal Crisis Prevention']
  },
  {
    id: 'myx_q5',
    topicId: 'myxedema_coma',
    topicTitle: 'Management of Hypothyroidism Coma (Myxedema Coma)',
    questionNumber: 5,
    clinicalVignette: 'When formulating the thyroid hormone replacement strategy for an 82-year-old patient with myxedema coma and known ischemic heart disease, the clinical team debates combining IV Levothyroxine (T4) and IV Liothyronine (T3). Which physiological rationale supports restricting or avoiding IV T3 in this specific patient?',
    options: [
      { id: 'A', text: 'T3 is strictly inactive in peripheral tissues until converted back to T4' },
      { id: 'B', text: 'T3 has a long half-life (7 days), causing prolonged, uncontrolled inotropic surges' },
      { id: 'C', text: 'Rapid T3-induced spikes in intracellular metabolic demand can precipitate lethal myocardial ischemia or arrhythmias' },
      { id: 'D', text: 'T3 inhibits the peripheral clearance of exogenous hydrocortisone' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Rapid T3-induced spikes in intracellular metabolic demand can precipitate lethal myocardial ischemia or arrhythmias',
    explanation: 'Liothyronine (T3) is the biologically active thyroid hormone with immediate receptor binding and rapid cellular onset. In elderly patients or those with coronary artery disease, rapid administration of IV T3 precipitously surges myocardial oxygen consumption, heart rate, and contractility, which can trigger acute myocardial infarction, ventricular tachycardia, or cardiac arrest.',
    optionRationales: {
      A: 'T3 is the active hormone at nuclear thyroid receptors; T4 is the pro-hormone converted to T3.',
      B: 'T3 has a short half-life (~1 day), whereas T4 has a half-life of 7 days.',
      C: 'Correct. Rapid T3 spikes drastically increase myocardial oxygen demand and can precipitate fatal ischemia or arrhythmias.',
      D: 'T3 accelerates (not inhibits) steroid clearance.'
    },
    keyTakeaway: 'IV T3 is avoided or strictly restricted in elderly cardiac patients due to the risk of precipitating lethal myocardial ischemia or arrhythmias.',
    sourcePageRef: 'Pages 63–64, Q5',
    difficulty: 'Core Clinical',
    tags: ['Liothyronine', 'T3 vs T4', 'Cardiac Risk', 'Geriatric Endocrinology']
  },

  // ----------------------------------------------------
  // HYPOPITUITARISM (Pages 64-66)
  // ----------------------------------------------------
  {
    id: 'hypopit_q1',
    topicId: 'hypopituitarism',
    topicTitle: 'Hypopituitarism',
    questionNumber: 1,
    clinicalVignette: 'A 34-year-old woman presents with severe fatigue, inability to lactate, and persistent amenorrhea following a severe postpartum hemorrhage 6 months ago. Laboratory evaluation reveals secondary hypothyroidism and secondary adrenal insufficiency. Which mechanism explains why hyperpigmentation is typically absent in this patient?',
    options: [
      { id: 'A', text: 'Mineralocorticoid deficiency prevents melanocyte responsiveness' },
      { id: 'B', text: 'Elevated prolactin levels completely inhibit dermal melanocytes' },
      { id: 'C', text: 'Renin-Angitensin-Aldosteron axis failure prevents skin changes' },
      { id: 'D', text: 'Adrenocorticotropic hormone is markedly suppressed' }
    ],
    correctOption: 'D',
    correctAnswerText: 'Adrenocorticotropic hormone is markedly suppressed',
    explanation: 'The patient has Sheehan syndrome (postpartum ischemic necrosis of the anterior pituitary). In primary adrenal insufficiency (Addison\'s disease), low cortisol triggers massive ACTH and pro-opiomelanocortin (POMC) secretion from the pituitary; POMC contains alpha-MSH, causing diffuse hyperpigmentation. In secondary adrenal insufficiency (pituitary failure), ACTH/POMC secretion is deficient or absent, so skin hyperpigmentation does not occur (skin is pale/alabaster).',
    optionRationales: {
      A: 'Mineralocorticoids do not regulate melanocytes.',
      B: 'Prolactin is low in Sheehan syndrome due to lactotroph necrosis.',
      C: 'RAAS axis is preserved in secondary hypopituitarism.',
      D: 'Correct. Low pituitary ACTH/POMC synthesis prevents stimulation of dermal melanocyte MC1 receptors.'
    },
    keyTakeaway: 'Secondary adrenal insufficiency (hypopituitarism / Sheehan syndrome) lacks skin hyperpigmentation because pituitary ACTH/POMC secretion is deficient.',
    sourcePageRef: 'Page 64, Q1',
    difficulty: 'High Yield',
    tags: ['Sheehan Syndrome', 'Hypopituitarism', 'ACTH', 'Hyperpigmentation']
  },
  {
    id: 'hypopit_q2',
    topicId: 'hypopituitarism',
    topicTitle: 'Hypopituitarism',
    questionNumber: 2,
    clinicalVignette: 'A 45-year-old male with confirmed panhypopituitarism presents to the emergency department during an influenza infection with lethargy, fever, and a blood pressure of 82/50 mmHg. Serum potassium is 4.1 mEq/L (normal: 3.5–5.0 mEq/L). What is the primary pathophysiological reason for normal potassium levels in an acute Addisonian crisis of secondary origin?',
    options: [
      { id: 'A', text: 'Pro-opiomelanocortin cleavage increases distal tubular potassium secretion.' },
      { id: 'B', text: 'Cortisol deficiency enhances renal potassium excretion at the distal tubule.' },
      { id: 'C', text: 'ACTH deficiency upregulates Na+/K+-ATPase activity in principal cells.' },
      { id: 'D', text: 'Aldosterone secretion is independently maintained by renin and angiotensin II.' }
    ],
    correctOption: 'D',
    correctAnswerText: 'Aldosterone secretion is independently maintained by renin and angiotensin II.',
    explanation: 'In secondary adrenal insufficiency (hypopituitarism / ACTH deficiency), the adrenal zona glomerulosa remains intact because aldosterone secretion is regulated primarily by the Renin-Angiotensin-Aldosterone System (RAAS) and serum potassium, not pituitary ACTH. Because aldosterone maintains distal tubular sodium reabsorption and potassium secretion, hyperkalemia does not typically develop in secondary adrenal crisis.',
    optionRationales: {
      A: 'POMC cleavage does not directly regulate distal potassium excretion.',
      B: 'Cortisol deficiency does not increase potassium excretion.',
      C: 'ACTH deficiency does not upregulate principal cell ATPase.',
      D: 'Correct. Aldosterone secretion from the zona glomerulosa is preserved via the renin-angiotensin axis, preventing hyperkalemia.'
    },
    keyTakeaway: 'Secondary adrenal insufficiency presents with normal serum potassium because aldosterone regulation by RAAS is preserved.',
    sourcePageRef: 'Pages 64–65, Q2',
    difficulty: 'High Yield',
    tags: ['Secondary Adrenal Insufficiency', 'Aldosterone', 'RAAS', 'Potassium']
  },
  {
    id: 'hypopit_q3',
    topicId: 'hypopituitarism',
    topicTitle: 'Hypopituitarism',
    questionNumber: 3,
    clinicalVignette: 'A 52-year-old male undergoing evaluation for panhypopituitarism requires hormone replacement therapy. Laboratory testing confirms pan-anterior pituitary dysfunction. Which sequence of hormone replacement must be initiated first to prevent precipitating an acute crisis?',
    options: [
      { id: 'A', text: 'Thyroid hormone replacement prior to corticosteroid administration.' },
      { id: 'B', text: 'Glucocorticoids prior to thyroid hormone replacement.' },
      { id: 'C', text: 'Recombinant growth hormone prior to thyroid hormone replacement.' },
      { id: 'D', text: 'Gonadotropin therapy prior to glucocorticoid administration.' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Glucocorticoids prior to thyroid hormone replacement.',
    explanation: 'In panhypopituitarism, initiating thyroid hormone (levothyroxine) before establishing adequate glucocorticoid coverage increases the metabolic rate and accelerates the hepatic clearance of endogenous cortisol. In a cortisol-deficient patient, this precipitous drop in circulating cortisol will trigger an acute, potentially fatal Addisonian crisis.',
    optionRationales: {
      A: 'Giving thyroid hormone first can trigger a fatal adrenal crisis.',
      B: 'Correct. Glucocorticoids (hydrocortisone) MUST always be started several days before thyroid hormone replacement.',
      C: 'Growth hormone has no emergency stabilization role.',
      D: 'Gonadotropins are elective and secondary to adrenal/thyroid stabilization.'
    },
    keyTakeaway: 'Always replace Glucocorticoids FIRST before starting Thyroid hormone in panhypopituitarism to prevent precipitating an adrenal crisis.',
    sourcePageRef: 'Page 65, Q3',
    difficulty: 'High Yield',
    tags: ['Panhypopituitarism', 'Hormone Replacement Sequence', 'Glucocorticoids First']
  },
  {
    id: 'hypopit_q4',
    topicId: 'hypopituitarism',
    topicTitle: 'Hypopituitarism',
    questionNumber: 4,
    clinicalVignette: 'A 30-year-old female presents with fatigue and cold intolerance. Serum TSH is 2.1 mU/L (normal: 0.4–4.0 mU/L) and free T4 is 0.4 ng/dL (normal: 0.8–1.8 ng/dL). How is secondary hypothyroidism distinguished laboratory-wise from primary hypothyroidism?',
    options: [
      { id: 'A', text: 'Thyroid peroxidase antibodies are strongly positive.' },
      { id: 'B', text: 'Free T3 is elevated while TSH is unmeasurable.' },
      { id: 'C', text: 'Free T4 is low with normal or low TSH.' },
      { id: 'D', text: 'TSH markedly elevated while free T4 is normal.' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Free T4 is low with normal or low TSH.',
    explanation: 'In primary hypothyroidism (thyroid gland failure), loss of negative feedback causes a compensatory marked elevation in serum TSH (>10–100 mU/L). In secondary (central) hypothyroidism (pituitary/hypothalamic failure), the pituitary fails to secrete TSH, resulting in a low Free T4 accompanied by an inappropriately normal or low TSH concentration.',
    optionRationales: {
      A: 'TPO antibodies are characteristic of Hashimoto\'s autoimmune thyroiditis (primary hypothyroidism).',
      B: 'Elevated Free T3 with suppressed TSH defines thyrotoxicosis.',
      C: 'Correct. Low Free T4 with inappropriately normal or low TSH is the laboratory hallmark of central/secondary hypothyroidism.',
      D: 'Markedly elevated TSH with normal Free T4 defines subclinical primary hypothyroidism.'
    },
    keyTakeaway: 'Secondary hypothyroidism is diagnosed by a low Free T4 with an inappropriately normal or low TSH.',
    sourcePageRef: 'Page 65, Q4',
    difficulty: 'Core Clinical',
    tags: ['Secondary Hypothyroidism', 'TSH Interpretation', 'Pituitary Labs']
  },
  {
    id: 'hypopit_q5',
    topicId: 'hypopituitarism',
    topicTitle: 'Hypopituitarism',
    questionNumber: 5,
    clinicalVignette: 'A patient with a traumatic brain injury develops central diabetes insipidus combined with anterior hypopituitarism. Which anatomical region injury specifically disrupts both posterior hormone release and anterior trophic control?',
    options: [
      { id: 'A', text: 'Optic chiasm decussation.' },
      { id: 'B', text: 'Pituitary stalk infundibulum' },
      { id: 'C', text: 'Zona fasciculata of the adrenal gland.' },
      { id: 'D', text: 'Cavernous sinus lateral wall' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Pituitary stalk infundibulum',
    explanation: 'The pituitary stalk (infundibulum) connects the hypothalamus to the pituitary gland. It carries the hypothalamic-hypophyseal portal venous system (transporting releasing hormones to the anterior pituitary) AND the unmyelinated axons of the supraoptic and paraventricular nuclei (transporting ADH and oxytocin to the posterior pituitary). Transection of the stalk during trauma disrupts both systems, causing pan-anterior hypopituitarism and central diabetes insipidus.',
    optionRationales: {
      A: 'Optic chiasm injury causes bitemporal hemianopia without endocrine failure.',
      B: 'Correct. Pituitary stalk transection disrupts both portal hypophyseal vessels (anterior pituitary) and axonal tracts (posterior pituitary).',
      C: 'Zona fasciculata is in the adrenal cortex.',
      D: 'Cavernous sinus involvement affects cranial nerves III, IV, V1, V2, VI.'
    },
    keyTakeaway: 'Pituitary stalk infundibulum transection simultaneously disrupts anterior hypophyseal portal circulation and posterior axonal ADH delivery.',
    sourcePageRef: 'Pages 65–66, Q5',
    difficulty: 'Core Clinical',
    tags: ['Pituitary Stalk', 'Infundibulum', 'Traumatic Brain Injury', 'Anatomy']
  }
];
