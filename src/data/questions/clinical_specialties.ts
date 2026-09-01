import { Question } from '../../types';

export const CLINICAL_SPECIALTIES_QUESTIONS: Question[] = [
  // ----------------------------------------------------
  // TYPES & USE OF SAMPLE BOTTLES (Pages 8-10)
  // ----------------------------------------------------
  {
    id: 'sb_q1',
    topicId: 'sample_bottles',
    topicTitle: 'Types & Use of Sample Bottles',
    questionNumber: 1,
    clinicalVignette: 'A 45-year-old man presents to the medical outpatient clinic with progressive jaundice, easy bruising, abdominal distension, and recurrent nosebleeds. On examination, he has palmar erythema, spider naevi, and ascites, raising suspicion of chronic liver disease with impaired coagulation. The physician requests Prothrombin Time (PT), Activated Partial Thromboplastin Time (aPTT), and International Normalized Ratio (INR) to assess his clotting function. Which blood collection tube should be used for these investigations?',
    options: [
      { id: 'A', text: 'Purple/Lavender cap EDTA tube' },
      { id: 'B', text: 'Grey cap fluoride oxalate tube' },
      { id: 'C', text: 'Light blue cap sodium citrate tube' },
      { id: 'D', text: 'Green cap heparin tube' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Light blue cap sodium citrate tube',
    explanation: 'Coagulation studies (PT, aPTT, INR, thrombin time, fibrinogen, D-dimer, and factor assays) must always be collected in a light blue cap tube containing 3.2% (0.109 M) buffered sodium citrate. Sodium citrate reversibly binds ionized calcium (a critical cofactor in both the intrinsic and extrinsic clotting cascades). In the laboratory, calcium is added back to initiate the clotting cascade in an automated analyzer. The tube must be filled to exactly the 9:1 blood-to-anticoagulant ratio line.',
    optionRationales: {
      A: 'EDTA irreversibly binds calcium and damages clotting factor V and VIII assays.',
      B: 'Grey tubes contain sodium fluoride/potassium oxalate for glucose preservation.',
      C: 'Correct. Light blue cap (3.2% sodium citrate) is the standard tube for all coagulation and clotting studies.',
      D: 'Heparin accelerates antithrombin III, which inhibits thrombin and invalidates PT/aPTT.'
    },
    keyTakeaway: 'Coagulation studies (PT, aPTT, INR, D-dimer) require a light blue cap 3.2% sodium citrate tube filled precisely to the 9:1 blood-to-anticoagulant ratio mark.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Sample Bottles', 'Sodium Citrate', 'Coagulation Studies', 'PT/INR', 'Phlebotomy']
  },
  {
    id: 'sb_q2',
    topicId: 'sample_bottles',
    topicTitle: 'Types & Use of Sample Bottles',
    questionNumber: 2,
    clinicalVignette: 'A 30-year-old obese woman with a family history of diabetes has a borderline fasting blood glucose level. The physician requests an Oral Glucose Tolerance Test (OGTT) to confirm the diagnosis. Which blood collection tube is used for collecting blood samples during the OGTT?',
    options: [
      { id: 'A', text: 'Purple/Lavender cap EDTA tube' },
      { id: 'B', text: 'Grey cap fluoride oxalate tube' },
      { id: 'C', text: 'Light blue cap sodium citrate tube' },
      { id: 'D', text: 'Green cap sodium heparin tube' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Grey cap fluoride oxalate tube',
    explanation: 'Blood glucose testing (including fasting glucose and OGTT series) requires collection into a grey cap tube containing sodium fluoride and potassium oxalate. Sodium fluoride acts as an enolase inhibitor, blocking the glycolytic pathway in erythrocytes and leukocytes. Without an antiglycolytic agent, red blood cells consume glucose at a rate of 5–7% per hour (approx. 10 mg/dL/hour) at room temperature, resulting in falsely low glucose readings.',
    optionRationales: {
      A: 'EDTA tubes do not inhibit glycolysis, leading to in vitro glucose degradation.',
      B: 'Correct. Grey cap tubes contain sodium fluoride (enolase inhibitor) to prevent in vitro glycolysis during glucose and OGTT testing.',
      C: 'Light blue tubes are for coagulation studies.',
      D: 'Green cap heparin tubes do not halt glycolysis unless centrifuged and separated immediately.'
    },
    keyTakeaway: 'Grey cap tubes contain sodium fluoride to inhibit enolase and preserve glucose concentrations during glucose tolerance testing.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Sample Bottles', 'Fluoride Oxalate', 'OGTT', 'Glycolysis Inhibition']
  },
  {
    id: 'sb_q3',
    topicId: 'sample_bottles',
    topicTitle: 'Types & Use of Sample Bottles',
    questionNumber: 3,
    clinicalVignette: 'A 28-year-old woman presents with a 3-month history of fatigue, dizziness, and heavy menstrual bleeding. The physician requests a Complete Blood Count (CBC) to evaluate for anaemia. Which blood collection tube should be used?',
    options: [
      { id: 'A', text: 'Grey cap fluoride oxalate tube' },
      { id: 'B', text: 'Light blue cap sodium citrate tube' },
      { id: 'C', text: 'Gold cap serum separator tube' },
      { id: 'D', text: 'Purple/Lavender cap EDTA tube' }
    ],
    correctOption: 'D',
    correctAnswerText: 'Purple/Lavender cap EDTA tube',
    explanation: 'A Complete Blood Count (CBC / FBC), blood film for morphology, erythrocyte sedimentation rate (ESR), hemoglobin electrophoresis, and blood grouping require blood collected into a purple/lavender cap tube containing dipotassium or tripotassium EDTA (K2-EDTA or K3-EDTA). EDTA prevents coagulation by chelating divalent calcium ions while optimally preserving red cell, white cell, and platelet morphology without cellular distortion or clumping.',
    optionRationales: {
      A: 'Fluoride oxalate lyses red cells and distorts morphology.',
      B: 'Sodium citrate causes liquid dilution (1:9) and alters cell counts.',
      C: 'Gold cap tubes contain clot activators and gel separator to produce serum, not whole blood for CBC.',
      D: 'Correct. Purple/lavender cap EDTA tubes prevent clotting and preserve cell morphology for Complete Blood Count.'
    },
    keyTakeaway: 'Purple/Lavender cap EDTA tubes are used for CBC, differential, blood film, and Hb electrophoresis because they preserve cellular morphology.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Sample Bottles', 'EDTA', 'CBC', 'Hematology', 'Phlebotomy']
  },
  {
    id: 'sb_q4',
    topicId: 'sample_bottles',
    topicTitle: 'Types & Use of Sample Bottles',
    questionNumber: 4,
    clinicalVignette: 'A medical officer requests a Complete Blood Count (CBC) for a patient with suspected anaemia. After collection, the laboratory scientist notices that the EDTA tube is only half-filled. What is the likely effect of this error on the test results?',
    options: [
      { id: 'A', text: 'Formation of fibrin strands due to inadequate clotting' },
      { id: 'B', text: 'Prolongation of Prothrombin Time (PT)' },
      { id: 'C', text: 'Excess EDTA relative to blood, causing cellular shrinkage and inaccurate cell indices' },
      { id: 'D', text: 'Increased blood glucose concentration due to continued glycolysis' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Excess EDTA relative to blood, causing cellular shrinkage and inaccurate cell indices',
    explanation: 'When an EDTA tube is underfilled (e.g. less than half full), the relative concentration of potassium EDTA salt is excessively high compared to blood volume. This creates a hypertonic extracellular environment, drawing water out of erythrocytes (osmotic cellular shrinkage). This artifact falsely decreases the Mean Corpuscular Volume (MCV) and Hematocrit (HCT), artificially elevates the Mean Corpuscular Hemoglobin Concentration (MCHC), and alters platelet counts.',
    optionRationales: {
      A: 'Fibrin strands form if blood is under-mixed, not simply from excess EDTA.',
      B: 'PT is measured in sodium citrate tubes, not EDTA.',
      C: 'Correct. Excess EDTA in underfilled tubes causes osmotic erythrocyte shrinkage, falsely lowering MCV and hematocrit.',
      D: 'EDTA does not increase glucose.'
    },
    keyTakeaway: 'Underfilling an EDTA tube leads to hypertonic cellular shrinkage, falsely depressing MCV and hematocrit while artificially elevating MCHC.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Sample Bottles', 'EDTA Artifact', 'Underfilled Tube', 'MCV', 'Laboratory Medicine']
  },
  {
    id: 'sb_q5',
    topicId: 'sample_bottles',
    topicTitle: 'Types & Use of Sample Bottles',
    questionNumber: 5,
    clinicalVignette: 'A 65-year-old man presents with suspected chronic lymphocytic leukaemia. Blood is collected into an EDTA tube, but the peripheral blood film is prepared 12 hours later. What effect can this delay have on the blood film?',
    options: [
      { id: 'A', text: 'Increased platelet aggregation with complete preservation of cell morphology' },
      { id: 'B', text: 'Increased serum clot formation' },
      { id: 'C', text: 'Increased glucose concentration within the specimen' },
      { id: 'D', text: 'Deterioration of blood cell morphology, making interpretation less reliable' }
    ],
    correctOption: 'D',
    correctAnswerText: 'Deterioration of blood cell morphology, making interpretation less reliable',
    explanation: 'Blood films should ideally be prepared within 1 to 4 hours of blood collection in EDTA. Prolonged storage in liquid EDTA (>4–12 hours) leads to degenerative morphologic changes: neutrophil vacuolization, pyknosis, nuclear swelling/lobulation, lymphocyte disintegration into "smudge/basket cells" or "smear cells", and erythrocyte crenation (echinocytes). This significant degradation impairs diagnostic reliability in suspected hematologic malignancies.',
    optionRationales: {
      A: 'Morphology deteriorates over 12 hours rather than being preserved.',
      B: 'EDTA prevents clot formation.',
      C: 'Glucose decreases over time due to ongoing in vitro cellular metabolism.',
      D: 'Correct. Delayed slide preparation (>4-12 hours) causes cellular swelling, vacuolation, smudge cells, and artifactual morphological deterioration.'
    },
    keyTakeaway: 'Peripheral blood smears must be made within 1–4 hours of collection; prolonged EDTA exposure causes nuclear degeneration, vacuolation, and fragile smudge cells.',
    sourcePageRef: '',
    difficulty: 'Core Clinical',
    tags: ['Peripheral Blood Film', 'Smudge Cells', 'EDTA Artifact', 'Hematology Delay']
  },

  // ----------------------------------------------------
  // MEDICAL PRESCRIPTION OF DIETS (Pages 18-20)
  // ----------------------------------------------------
  {
    id: 'diet_q1',
    topicId: 'medical_prescription_diets',
    topicTitle: 'Medical Prescription of Diets',
    questionNumber: 1,
    clinicalVignette: 'Which of the following is the most important principle in prescribing a therapeutic diet for a hospitalized medical patient?',
    options: [
      { id: 'A', text: 'The diet should be identical for all patients with the same medical diagnosis' },
      { id: 'B', text: 'The diet should be individualized according to the patient\'s clinical and nutritional status' },
      { id: 'C', text: 'The diet should contain as little fat as possible in all clinical conditions' },
      { id: 'D', text: 'Dietary prescription should be based solely on laboratory test results without clinical assessment' }
    ],
    correctOption: 'B',
    correctAnswerText: 'The diet should be individualized according to the patient\'s clinical and nutritional status',
    explanation: 'The cardinal principle of medical nutrition therapy is individualization. A therapeutic dietary prescription must consider the patient’s primary medical condition, co-morbidities, nutritional status (BMI, sarcopenia, micronutrient deficiencies), metabolic requirements, renal/hepatic functional reserve, chewing/swallowing capabilities, and cultural/religious preferences.',
    optionRationales: {
      A: 'Rigid uniform diets ignore individual metabolic needs and comorbidities.',
      B: 'Correct. Therapeutic diets must be tailored to the individual\'s clinical, metabolic, and nutritional status.',
      C: 'Fat is an essential macronutrient and fat restriction is not universally appropriate.',
      D: 'Dietary therapy requires holistic clinical assessment, not isolated lab numbers.'
    },
    keyTakeaway: 'Therapeutic diet prescriptions must be customized to the patient\'s clinical status, nutritional state, comorbidities, and metabolic demands.',
    sourcePageRef: '',
    difficulty: 'Core Clinical',
    tags: ['Clinical Nutrition', 'Therapeutic Diets', 'Diet Prescription']
  },
  {
    id: 'diet_q2',
    topicId: 'medical_prescription_diets',
    topicTitle: 'Medical Prescription of Diets',
    questionNumber: 2,
    clinicalVignette: 'A 58-year-old man presents with chronic hypertension and congestive cardiac failure with dependent pedal edema. Which dietary modification is most appropriate to help reduce fluid overload and maintain cardiovascular stability?',
    options: [
      { id: 'A', text: 'High-sodium diet' },
      { id: 'B', text: 'High-protein diet' },
      { id: 'C', text: 'Low-sodium diet' },
      { id: 'D', text: 'High-purine diet' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Low-sodium diet',
    explanation: 'Sodium is the primary extracellular cation determining osmotic volume. Excessive dietary sodium intake causes fluid retention, expands circulating plasma volume, increases cardiac preload and afterload, and precipitates acute heart failure decompensation. Restricting sodium intake (typically <2,000 mg/day or <5 g NaCl/day) diminishes extracellular fluid accumulation and improves diuretic efficacy.',
    optionRationales: {
      A: 'High sodium causes water retention and worsens congestion.',
      B: 'High protein does not reduce intravascular fluid overload.',
      C: 'Correct. Low-sodium diet (<2 g sodium/day) reduces fluid retention and myocardial workload in heart failure.',
      D: 'High purine increases uric acid and risks gout.'
    },
    keyTakeaway: 'Sodium restriction (<2 g sodium / <5 g salt daily) is the cornerstone dietary modification to prevent fluid overload in heart failure and hypertension.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Heart Failure Diet', 'Low-Sodium', 'Cardiovascular Nutrition', 'Fluid Overload']
  },
  {
    id: 'diet_q3',
    topicId: 'medical_prescription_diets',
    topicTitle: 'Medical Prescription of Diets',
    questionNumber: 3,
    clinicalVignette: 'Which of the following meals is the best example of an appropriate low-sodium choice for a hypertensive patient?',
    options: [
      { id: 'A', text: 'Salted fish cooked with stock-cube-seasoned tomato stew' },
      { id: 'B', text: 'Instant noodles cooked with full flavour-sachet seasoning' },
      { id: 'C', text: 'Fresh fish cooked with fresh vegetables and minimal added salt' },
      { id: 'D', text: 'Processed meat slices served with commercially canned vegetable soup' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Fresh fish cooked with fresh vegetables and minimal added salt',
    explanation: 'Fresh, unprocessed fish and fresh vegetables naturally contain minimal sodium. In contrast, commercially processed foods, salted/cured fish, bouillon seasoning cubes (e.g. Maggi/Knorr cubes), instant noodles, and canned soups are packed with enormous concentrations of sodium chloride and monosodium glutamate (MSG).',
    optionRationales: {
      A: 'Salted fish and bouillon seasoning cubes contain massive amounts of sodium.',
      B: 'Instant noodle flavor packets typically contain >1,500–2,000 mg of sodium per serving.',
      C: 'Correct. Fresh unprocessed fish and vegetables prepared with fresh herbs and minimal salt provide an optimal low-sodium meal.',
      D: 'Processed deli meats and canned soups are major sources of hidden dietary sodium.'
    },
    keyTakeaway: 'Fresh, unprocessed foods seasoned with herbs rather than bouillon cubes or processed meats represent ideal low-sodium choices.',
    sourcePageRef: '',
    difficulty: 'Core Clinical',
    tags: ['Low-Sodium Meal', 'Hypertension Diet', 'Processed Foods']
  },
  {
    id: 'diet_q4',
    topicId: 'medical_prescription_diets',
    topicTitle: 'Medical Prescription of Diets',
    questionNumber: 4,
    clinicalVignette: 'A patient with severe dysphagia following an acute ischemic stroke is unable to safely chew or swallow solid food. Which dietary modification is most appropriate to prevent aspiration pneumonia while maintaining oral intake?',
    options: [
      { id: 'A', text: 'Low-fat diet' },
      { id: 'B', text: 'High-energy diet' },
      { id: 'C', text: 'Low-protein diet' },
      { id: 'D', text: 'Pureed/texture-modified diet' }
    ],
    correctOption: 'D',
    correctAnswerText: 'Pureed/texture-modified diet',
    explanation: 'Pharyngeal phase dysphagia post-stroke impairs the swallow reflex, airway closure, and cough reflex, putting patients at high risk of choking and life-threatening aspiration pneumonia. Transitioning to a pureed, smooth, cohesive, texture-modified diet (along with thickened fluids according to IDDSI standards) minimizes the risk of bolus fragmentation and tracheobronchial aspiration.',
    optionRationales: {
      A: 'Fat content does not alter swallowing safety.',
      B: 'Caloric density does not protect against physical bolus aspiration.',
      C: 'Protein reduction is not indicated and worsens muscle wasting.',
      D: 'Correct. Texture-modified / pureed diets with thickened liquids prevent aspiration pneumonia in post-stroke dysphagia.'
    },
    keyTakeaway: 'Texture-modified, pureed diets and thickened fluids are mandatory in post-stroke dysphagia to prevent fatal aspiration pneumonia.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Stroke Dysphagia', 'Pureed Diet', 'Aspiration Pneumonia', 'IDDSI']
  },
  {
    id: 'diet_q5',
    topicId: 'medical_prescription_diets',
    topicTitle: 'Medical Prescription of Diets',
    questionNumber: 5,
    clinicalVignette: 'Which of the following patients is most likely to benefit from a high-energy, high-protein diet?',
    options: [
      { id: 'A', text: 'A severely malnourished patient with increased nutritional requirements' },
      { id: 'B', text: 'An obese patient undergoing weight reduction' },
      { id: 'C', text: 'A patient with uncomplicated hypertension and normal BMI' },
      { id: 'D', text: 'A patient with an acute attack of gout' }
    ],
    correctOption: 'A',
    correctAnswerText: 'A severely malnourished patient with increased nutritional requirements',
    explanation: 'Patients with severe malnutrition, advanced cancer cachexia, extensive thermal burns, major surgical trauma, or chronic catabolic wasting (tuberculosis, HIV) have markedly elevated basal metabolic rates and negative nitrogen balance. A high-energy, high-protein diet (1.5–2.0 g protein/kg/day and 30–35 kcal/kg/day) is essential to promote tissue repair, reverse muscle wasting, and restore immune competence.',
    optionRationales: {
      A: 'Correct. Severe malnutrition and hypercatabolic states require high-energy, high-protein nutritional supplementation.',
      B: 'Obese weight reduction requires a calorie-controlled, hypocaloric diet.',
      C: 'Uncomplicated hypertension requires DASH/low-sodium diet, not high-calorie feeding.',
      D: 'Acute gout requires purine restriction, not high-protein overload.'
    },
    keyTakeaway: 'High-energy, high-protein diets are indicated in severe malnutrition and hypercatabolic states to restore nitrogen balance and support tissue healing.',
    sourcePageRef: '',
    difficulty: 'Core Clinical',
    tags: ['High-Protein Diet', 'Malnutrition', 'Catabolism', 'Clinical Nutrition']
  },

  // ----------------------------------------------------
  // INDICATION & COMPLICATIONS OF BLOOD TRANSFUSION (Pages 28-30)
  // ----------------------------------------------------
  {
    id: 'bt_q1',
    topicId: 'blood_transfusion',
    topicTitle: 'Indication & Complications of Blood Transfusion',
    questionNumber: 1,
    clinicalVignette: 'A 72-year-old man presents with melena and dizziness. After receiving 2 L of isotonic crystalloid, his blood pressure is 118/74 mmHg and pulse is 88 beats per minute. He has no chest pain or shortness of breath. There is no evidence of ongoing active bleeding. His hemoglobin is 8.6 g/dL, platelet count is 210 × 10⁹/L, and INR is 1.1. Which of the following is the most appropriate next step in management?',
    options: [
      { id: 'A', text: 'Transfuse 1 unit of fresh frozen plasma' },
      { id: 'B', text: 'Transfuse 1 unit of packed red blood cells' },
      { id: 'C', text: 'Monitor the patient closely and treat the underlying cause without transfusion' },
      { id: 'D', text: 'Administer intravenous iron only' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Monitor the patient closely and treat the underlying cause without transfusion',
    explanation: 'Modern transfusion guidelines (AABB, TRICC trial) recommend a restrictive red blood cell transfusion strategy for hemodynamically stable hospitalized adult patients without active bleeding or acute coronary syndrome. In such patients, the transfusion trigger threshold is hemoglobin < 7.0 g/dL (or < 8.0 g/dL in preexisting cardiovascular disease or orthopedic surgery). Because this patient is stable with Hb 8.6 g/dL and no active bleeding, PRBC transfusion is NOT indicated.',
    optionRationales: {
      A: 'FFP is only indicated for active bleeding with coagulopathy (INR > 1.5–2.0); his INR is normal (1.1).',
      B: 'PRBC transfusion is unnecessary at Hb 8.6 g/dL in a stable non-bleeding patient and exposes him to risks without clinical benefit.',
      C: 'Correct. Restrictive transfusion threshold (Hb < 7.0–8.0 g/dL) applies; monitor vitals and investigate the bleeding source.',
      D: 'IV iron alone does not replace acute blood loss and monitoring is the core strategy.'
    },
    keyTakeaway: 'In hemodynamically stable patients without ongoing active bleeding, red cell transfusion is withheld when hemoglobin is >= 7.0–8.0 g/dL (restrictive strategy).',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Blood Transfusion', 'Restrictive Strategy', 'Transfusion Trigger', 'Hemoglobin']
  },
  {
    id: 'bt_q2',
    topicId: 'blood_transfusion',
    topicTitle: 'Indication & Complications of Blood Transfusion',
    questionNumber: 2,
    clinicalVignette: 'A 55-year-old man with decompensated cirrhosis presents with severe hematemesis. On endoscopy, active bleeding from esophageal varices is noted. Laboratory results show: Hemoglobin 8.1 g/dL, Platelets 180 × 10⁹/L, and INR 2.4. He continues to bleed despite endoscopic band ligation. Which blood component is most specifically indicated to address his elevated INR and coagulopathy?',
    options: [
      { id: 'A', text: 'Packed red blood cells' },
      { id: 'B', text: 'Platelet concentrate' },
      { id: 'C', text: 'Fresh frozen plasma (FFP)' },
      { id: 'D', text: 'Cryoprecipitate' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Fresh frozen plasma (FFP)',
    explanation: 'Fresh Frozen Plasma (FFP) contains all soluble coagulation cascade factors (including prothrombin, factor V, VII, IX, X, XI, and fibrinogen). In a patient with active life-threatening hemorrhage and documented coagulopathy (INR 2.4, significantly > 1.5), FFP (dose 10–15 mL/kg) is specifically indicated to replace deficient hepatic clotting factors and promote clot formation.',
    optionRationales: {
      A: 'PRBCs restore oxygen carrying capacity but contain no plasma clotting factors.',
      B: 'Platelet count is normal (180k), so platelet transfusion is not indicated.',
      C: 'Correct. Fresh Frozen Plasma contains all coagulation factors and is indicated for active bleeding with prolonged INR.',
      D: 'Cryoprecipitate is specifically for hypofibrinogenemia (<100 mg/dL), factor VIII, or von Willebrand factor deficiency.'
    },
    keyTakeaway: 'Fresh Frozen Plasma (FFP) is indicated in actively bleeding patients with significant coagulopathy (INR > 1.5–2.0) to replace soluble clotting factors.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['FFP', 'Coagulopathy', 'Cirrhosis', 'Variceal Bleed', 'INR Correction']
  },
  {
    id: 'bt_q3',
    topicId: 'blood_transfusion',
    topicTitle: 'Indication & Complications of Blood Transfusion',
    questionNumber: 3,
    clinicalVignette: 'A 67-year-old man with end-stage renal disease and heart failure is transfused 2 units of packed red blood cells for symptomatic anemia. Near the end of the second unit, he develops severe dyspnea, orthopnea, tachycardia, hypertension (BP 185/105 mmHg), elevated jugular venous pressure, and diffuse bilateral pulmonary crackles. Chest X-ray demonstrates cardiomegaly and alveolar pulmonary edema. What is the most likely diagnosis?',
    options: [
      { id: 'A', text: 'Transfusion-Related Acute Lung Injury (TRALI)' },
      { id: 'B', text: 'Transfusion-Associated Circulatory Overload (TACO)' },
      { id: 'C', text: 'Acute hemolytic transfusion reaction' },
      { id: 'D', text: 'Anaphylactic transfusion reaction' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Transfusion-Associated Circulatory Overload (TACO)',
    explanation: 'Transfusion-Associated Circulatory Overload (TACO) occurs when blood product infusion exceeds the cardiovascular system\'s capacity, leading to hydrostatic pulmonary edema. Key differentiating features from TRALI include: hypertension (elevated BP), elevated JVP, cardiomegaly on CXR, and response to diuretics. TRALI typically presents with normotension or hypotension, normal JVP, fever, and non-cardiogenic pulmonary edema mediated by antineutrophil antibodies.',
    optionRationales: {
      A: 'TRALI is non-cardiogenic pulmonary edema with normal JVP and normal/low blood pressure.',
      B: 'Correct. Acute hypertension, elevated JVP, cardiomegaly, and pulmonary edema in a heart failure/CKD patient define TACO.',
      C: 'Acute hemolytic reaction causes fever, flank pain, hemoglobinuria, DIC, and hypotension.',
      D: 'Anaphylaxis causes bronchospasm, stridor, urticaria, and profound hypotension.'
    },
    keyTakeaway: 'TACO presents with acute respiratory distress, hypertension, elevated JVP, and cardiogenic pulmonary edema following blood transfusion in susceptible patients.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['TACO', 'TRALI', 'Transfusion Complications', 'Pulmonary Edema', 'Fluid Overload']
  },
  {
    id: 'bt_q4',
    topicId: 'blood_transfusion',
    topicTitle: 'Indication & Complications of Blood Transfusion',
    questionNumber: 4,
    clinicalVignette: 'A 58-year-old woman with severe community-acquired pneumonia and known coronary artery disease presents with Hb 6.9 g/dL. She receives 1 unit of packed red blood cells. A repeat hemoglobin is 7.8 g/dL. Her dyspnea has significantly improved, vitals are stable, and she has no chest pain or active bleeding. Which of the following is the most appropriate next step?',
    options: [
      { id: 'A', text: 'Transfuse another unit because hemoglobin is below 10 g/dL' },
      { id: 'B', text: 'Transfuse another unit because of underlying pneumonia' },
      { id: 'C', text: 'Withhold further transfusion and continue treatment of the underlying disease' },
      { id: 'D', text: 'Administer fresh frozen plasma' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Withhold further transfusion and continue treatment of the underlying disease',
    explanation: 'Single-unit transfusion strategy ("transfuse one unit and reassess") is recommended in non-bleeding patients. Once the initial unit raises the hemoglobin to near the target threshold (7.0–8.0 g/dL) and symptoms of tissue hypoxia resolve, further transfusions should be withheld. Routine multi-unit transfusion to arbitrary targets (>10 g/dL) exposes patients to unnecessary risks of alloimmunization, infection, and TACO without proven benefit.',
    optionRationales: {
      A: 'Targeting Hb > 10 g/dL in stable hospitalized patients provides no clinical benefit and increases mortality and fluid overload.',
      B: 'Pneumonia alone is not an indication for liberal transfusion.',
      C: 'Correct. Single-unit transfusion raised Hb to 7.8 g/dL with symptom resolution; withhold further blood and continue medical therapy.',
      D: 'FFP has no role without active bleeding and coagulopathy.'
    },
    keyTakeaway: 'Practice "single-unit transfusion and reassess"; once symptoms resolve and hemoglobin reaches 7.0–8.0 g/dL, withhold further transfusions.',
    sourcePageRef: '',
    difficulty: 'Core Clinical',
    tags: ['Single Unit Transfusion', 'Restrictive Strategy', 'Blood Stewardship']
  },
  {
    id: 'bt_q5',
    topicId: 'blood_transfusion',
    topicTitle: 'Indication & Complications of Blood Transfusion',
    questionNumber: 5,
    clinicalVignette: 'A 40-year-old woman with severe postpartum hemorrhage continues to bleed despite receiving 4 units of packed red blood cells and 2 units of fresh frozen plasma. Her fibrinogen concentration is 70 mg/dL (normal: 200–400 mg/dL). Which blood component is the most concentrated and specific source of fibrinogen to correct her hypofibrinogenemia?',
    options: [
      { id: 'A', text: 'Packed red blood cells' },
      { id: 'B', text: 'Platelet concentrate' },
      { id: 'C', text: 'Cryoprecipitate' },
      { id: 'D', text: 'Normal saline' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Cryoprecipitate',
    explanation: 'Cryoprecipitate is the cold-insoluble fraction of plasma prepared from thawing FFP. It is uniquely rich in Fibrinogen (approx. 150–250 mg per unit), Factor VIII, von Willebrand Factor (vWF), Factor XIII, and Fibronectin. In massive hemorrhage where fibrinogen falls below 100–150 mg/dL (<1.0–1.5 g/L), cryoprecipitate (typically 10 units pooled) provides rapid, concentrated fibrinogen replacement in a small volume (100–150 mL), avoiding volume overload.',
    optionRationales: {
      A: 'PRBCs contain no fibrinogen.',
      B: 'Platelet concentrate provides platelets, not concentrated fibrinogen.',
      C: 'Correct. Cryoprecipitate is the most concentrated source of fibrinogen for severe hypofibrinogenemia (<100 mg/dL).',
      D: 'Normal saline dilutes existing clotting factors, worsening coagulopathy.'
    },
    keyTakeaway: 'Cryoprecipitate is specifically indicated to rapidly replace fibrinogen in severe hemorrhage when plasma fibrinogen is < 100–150 mg/dL.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Cryoprecipitate', 'Fibrinogen', 'Massive Transfusion', 'Coagulopathy']
  },

  // ----------------------------------------------------
  // TYPES & INDICATIONS OF BIOPSY NEEDLES (Pages 51-52)
  // ----------------------------------------------------
  {
    id: 'bn_q1',
    topicId: 'biopsy_needles',
    topicTitle: 'Types & Indications of Biopsy Needles',
    questionNumber: 1,
    clinicalVignette: 'A 45-year-old man presents with a large exudative pleural effusion. Suspected etiologies include tuberculous pleurisy and pleural malignancy. The clinical team decides to perform a closed pleural biopsy to obtain parietal pleural tissue for histology and culture. Which specialized biopsy needle is traditionally used for closed pleural biopsy?',
    options: [
      { id: 'A', text: 'Menghini needle' },
      { id: 'B', text: 'Jamshidi needle' },
      { id: 'C', text: 'Abrams needle' },
      { id: 'D', text: 'Tru-cut needle' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Abrams needle',
    explanation: 'The Abrams needle (and Cope needle) is a specialized closed pleural biopsy needle featuring an outer cannula with a deep lateral cutting notch and an inner rotating cutting stylet. When inserted into the pleural space and hooked onto the parietal pleura on the superior rib border, the inner cylinder is rotated to guillotine a piece of parietal pleura while simultaneously allowing fluid aspiration.',
    optionRationales: {
      A: 'Menghini needle is a suction-aspiration needle used for liver biopsy.',
      B: 'Jamshidi needle is a sturdy cylindrical needle used for bone marrow trephine biopsy.',
      C: 'Correct. Abrams needle (and Cope needle) is the classic specialized tool for closed parietal pleural biopsy.',
      D: 'Tru-cut needle is a side-notch core cutting needle used for solid organs (kidney, prostate, breast).'
    },
    keyTakeaway: 'The Abrams needle is specifically designed with a lateral hook-notch mechanism for closed parietal pleural biopsies in exudative effusions.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Biopsy Needles', 'Abrams Needle', 'Pleural Biopsy', 'Procedures']
  },
  {
    id: 'bn_q2',
    topicId: 'biopsy_needles',
    topicTitle: 'Types & Indications of Biopsy Needles',
    questionNumber: 2,
    clinicalVignette: 'A 52-year-old woman with chronic hepatitis B infection is undergoing percutaneous liver biopsy for staging of hepatic fibrosis and assessment of disease activity. The proceduralist chooses a 1-second suction-aspiration technique. Which biopsy needle operates using this rapid suction mechanism?',
    options: [
      { id: 'A', text: 'Abrams needle' },
      { id: 'B', text: 'Jamshidi needle' },
      { id: 'C', text: 'Menghini needle' },
      { id: 'D', text: 'Tru-cut needle' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Menghini needle',
    explanation: 'The Menghini needle is a thin-walled, beveled biopsy needle designed for rapid suction-aspiration parenchymal liver biopsy ("1-second technique"). Negative pressure is created in an attached pre-loaded syringe filled with saline; the needle is rapidly thrust into the liver parenchyma and withdrawn in under one second, drawing a clean core of hepatic tissue into the lumen and minimizing intra-abdominal bleeding risk.',
    optionRationales: {
      A: 'Abrams needle is for closed pleural biopsy.',
      B: 'Jamshidi needle is for bone marrow core biopsies.',
      C: 'Correct. The Menghini needle uses a rapid suction-aspiration technique for percutaneous liver parenchymal biopsy.',
      D: 'Tru-cut needles use a mechanical sliding cutting sheath, requiring multiple steps.'
    },
    keyTakeaway: 'The Menghini needle operates via rapid suction-aspiration for percutaneous liver biopsies, taking under one second to procure a tissue core.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Biopsy Needles', 'Menghini Needle', 'Liver Biopsy', 'Procedures']
  }
];
