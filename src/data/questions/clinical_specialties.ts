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
    clinicalVignette: 'A 45-year-old man on warfarin therapy requires routine international normalized ratio (INR) and prothrombin time (PT) monitoring. Which vacuum blood collection tube (color and additive) must be used for accurate coagulation studies?',
    options: [
      { id: 'A', text: 'Purple / Lavender top (K2-EDTA)' },
      { id: 'B', text: 'Light Blue top (3.2% Buffered Sodium Citrate in a 9:1 blood-to-anticoagulant ratio)' },
      { id: 'C', text: 'Grey top (Sodium Fluoride / Potassium Oxalate)' },
      { id: 'D', text: 'Red / Gold top (Clot Activator / Serum Gel Separator)' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Light Blue top (3.2% Buffered Sodium Citrate in a 9:1 blood-to-anticoagulant ratio)',
    explanation: 'Light blue capped vacuum tubes contain 3.2% (0.109 M) buffered Sodium Citrate, which acts as a reversible calcium chelator. It is the universally mandated standard for all plasma coagulation studies (PT/INR, aPTT, D-dimer, fibrinogen, factor assays). Crucially, the tube must be filled exactly to the indicator mark to maintain a strict 9:1 blood-to-anticoagulant volume ratio; underfilling causes excess citrate to bind reagent calcium during testing, producing spuriously prolonged clotting times.',
    optionRationales: {
      A: 'EDTA irreversibly chelates calcium and inhibits clotting factor activity permanently; it cannot be used for PT/INR.',
      B: 'Correct. Light blue sodium citrate tube (3.2%, 9:1 ratio) is the standard for PT/INR and coagulation testing.',
      C: 'Grey top fluoride/oxalate is used for glucose and lactate.',
      D: 'Red/Gold tubes facilitate clotting for serum biochemistry, whereas coagulation testing requires unclotted citrated plasma.'
    },
    keyTakeaway: 'Light Blue capped tubes containing 3.2% Sodium Citrate (filled to a precise 9:1 blood-to-anticoagulant ratio) are required for PT/INR and coagulation tests.',
    sourcePageRef: 'Pages 8–9, Q1',
    difficulty: 'Core Clinical',
    tags: ['Sample Bottles', 'Sodium Citrate', 'Coagulation', 'PT/INR', 'Phlebotomy']
  },
  {
    id: 'sb_q2',
    topicId: 'sample_bottles',
    topicTitle: 'Types & Use of Sample Bottles',
    questionNumber: 2,
    clinicalVignette: 'A 52-year-old woman is scheduled for a 75g Oral Glucose Tolerance Test (OGTT) for suspected diabetes mellitus. The phlebotomy sample will be transported to a central laboratory 3 hours away. Which tube additive is specifically required to prevent in vitro glycolysis and ensure accurate plasma glucose determination?',
    options: [
      { id: 'A', text: 'Grey top tube containing Sodium Fluoride (glycolytic inhibitor) and Potassium Oxalate (anticoagulant)' },
      { id: 'B', text: 'Green top tube containing Lithium Heparin' },
      { id: 'C', text: 'Yellow / Gold top SST tube with silica particles' },
      { id: 'D', text: 'Purple top EDTA tube' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Grey top tube containing Sodium Fluoride (glycolytic inhibitor) and Potassium Oxalate (anticoagulant)',
    explanation: 'In unseparated whole blood at room temperature, erythrocytes and leukocytes metabolize glucose via the glycolytic pathway at an approximate rate of 5% to 7% per hour (up to 10 mg/dL/hour). Sodium Fluoride acts as a potent inhibitor of the glycolytic enzyme enolase (phosphopyruvate hydratase), arresting in vitro glycolysis and stabilizing glucose concentrations for up to 24 to 48 hours. Potassium oxalate acts as the anticoagulant. Grey top tubes are standard for glucose, lactate, and OGTT testing.',
    optionRationales: {
      A: 'Correct. Sodium fluoride inhibits enolase/glycolysis while potassium oxalate prevents coagulation.',
      B: 'Lithium heparin prevents clotting but does NOT inhibit enolase; ongoing cellular glycolysis will falsely lower glucose.',
      C: 'Gold SST tubes allow clot formation without glycolytic inhibition.',
      D: 'EDTA chelates calcium for hematology but does not arrest glucose consumption.'
    },
    keyTakeaway: 'Grey top tubes with Sodium Fluoride inhibit enolase and prevent in vitro glycolysis, preserving glucose accuracy during transit.',
    sourcePageRef: 'Page 9, Q2',
    difficulty: 'High Yield',
    tags: ['Sample Bottles', 'Fluoride Oxalate', 'Enolase Inhibition', 'OGTT', 'Glycolysis']
  },
  {
    id: 'sb_q3',
    topicId: 'sample_bottles',
    topicTitle: 'Types & Use of Sample Bottles',
    questionNumber: 3,
    clinicalVignette: 'A medical intern draws blood for a complete blood count (CBC / FBC) into a lavender-top (K2-EDTA) tube. The tube is filled only to 25% of its total designated capacity (underfilled). What spurious laboratory artifact will this underfilling cause on the automated hematology analyzer?',
    options: [
      { id: 'A', text: 'Spurious macrocytosis and elevated platelet count' },
      { id: 'B', text: 'Osmotic red blood cell shrinkage, falsely decreased MCV, and falsely decreased hematocrit (HCT)' },
      { id: 'C', text: 'Spurious elevation of white blood cell count' },
      { id: 'D', text: 'Spurious conversion of hemoglobin to methemoglobin' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Osmotic red blood cell shrinkage, falsely decreased MCV, and falsely decreased hematocrit (HCT)',
    explanation: 'When an EDTA tube is significantly underfilled, the concentration of the EDTA anticoagulant liquid/crystals relative to blood volume is excessively high. This hypertonic microenvironment draws intracellular water out of red blood cells via osmosis, causing erythrocyte shrinkage (crenation). Consequently, the automated analyzer reports a falsely low Mean Corpuscular Volume (MCV) and a falsely decreased calculated Hematocrit (HCT), with a spurious increase in Mean Corpuscular Hemoglobin Concentration (MCHC).',
    optionRationales: {
      A: 'Underfilling causes microcytic shrinkage, not macrocytosis.',
      B: 'Correct. Hypertonic excess EDTA causes osmotic red cell shrinkage, falsely lowering MCV and HCT.',
      C: 'WBC counts are not directly elevated by EDTA hypertonicity, though morphology may degrade.',
      D: 'EDTA does not oxidize hemoglobin to methemoglobin.'
    },
    keyTakeaway: 'Underfilled EDTA tubes create a hypertonic environment that shrinks red blood cells, causing falsely low MCV and hematocrit (HCT).',
    sourcePageRef: 'Pages 9–10, Q3',
    difficulty: 'Core Clinical',
    tags: ['EDTA Tube', 'Underfilling Artifact', 'MCV Artifact', 'Hematocrit', 'Phlebotomy']
  },
  {
    id: 'sb_q4',
    topicId: 'sample_bottles',
    topicTitle: 'Types & Use of Sample Bottles',
    questionNumber: 4,
    clinicalVignette: 'A venous blood specimen collected in an EDTA tube is left on a clinic bench in a warm tropical environment for 6 hours before a peripheral blood smear is prepared. Which morphological artifacts are expected on microscopic examination of the stained blood film?',
    options: [
      { id: 'A', text: 'Progressive crenation of erythrocytes, neutrophil nuclear lobulation degeneration (smudge/smear appearance), and cytoplasmic vacuolization' },
      { id: 'B', text: 'Instantaneous rupture of all platelets with pseudothrombocytosis' },
      { id: 'C', text: 'Transformation of all mature lymphocytes into atypical blast cells' },
      { id: 'D', text: 'Complete loss of erythrocyte hemoglobin staining' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Progressive crenation of erythrocytes, neutrophil nuclear lobulation degeneration (smudge/smear appearance), and cytoplasmic vacuolization',
    explanation: 'Delayed preparation of peripheral blood films from EDTA-anticoagulated blood (>2 to 4 hours, accelerated by warm ambient temperatures) produces characteristic in vitro cellular artifacts: red blood cells develop spicules and crenation (echinocytes), neutrophils display cytoplasmic vacuolation, nuclear pyknosis, karyorrhexis, and disintegration into smudge/smear cells, and platelets may clump or degenerate. Films should ideally be prepared within 1–2 hours of venipuncture.',
    optionRationales: {
      A: 'Correct. Delayed smear preparation causes red cell crenation, neutrophil vacuolation, and smudge cell artifacts.',
      B: 'Platelet disintegration does not cause uniform pseudothrombocytosis.',
      C: 'Mature lymphocytes do not dedifferentiate into neoplastic blast cells in vitro.',
      D: 'Hemoglobin staining remains intact; morphological shape and membrane architecture are what degrade.'
    },
    keyTakeaway: 'Delayed peripheral blood smear preparation in EDTA leads to red cell crenation (echinocytes), neutrophil vacuolization, and smudge cell artifacts.',
    sourcePageRef: 'Page 10, Q4',
    difficulty: 'High Yield',
    tags: ['Blood Smear Artifacts', 'EDTA Delay', 'Crenation', 'Smudge Cells', 'Hematology']
  },
  {
    id: 'sb_q5',
    topicId: 'sample_bottles',
    topicTitle: 'Types & Use of Sample Bottles',
    questionNumber: 5,
    clinicalVignette: 'During a multiple-tube phlebotomy draw for Blood Cultures, Coagulation Profile (PT/INR), Serum Chemistry (Electrolytes/Urea), and Full Blood Count (CBC), what is the correct Clinical and Laboratory Standards Institute (CLSI) "Order of Draw" to prevent cross-contamination of additives?',
    options: [
      { id: 'A', text: 'EDTA (Purple) -> Serum (Gold) -> Citrate (Light Blue) -> Blood Culture' },
      { id: 'B', text: 'Blood Culture bottles -> Sodium Citrate (Light Blue) -> Serum Tube (Red/Gold) -> Heparin (Green) -> EDTA (Purple) -> Fluoride Oxalate (Grey)' },
      { id: 'C', text: 'Fluoride (Grey) -> EDTA (Purple) -> Citrate (Light Blue) -> Serum (Gold)' },
      { id: 'D', text: 'Serum Tube -> EDTA -> Blood Culture -> Citrate' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Blood Culture bottles -> Sodium Citrate (Light Blue) -> Serum Tube (Red/Gold) -> Heparin (Green) -> EDTA (Purple) -> Fluoride Oxalate (Grey)',
    explanation: 'The CLSI standardized Order of Draw prevents cross-contamination of tube additives between collection tubes: 1. Blood culture bottles (sterile first to prevent skin flora/additive contamination); 2. Light Blue (Sodium Citrate - drawn before clot activators to avoid clotting activation); 3. Red / Gold SST (Clot activator / gel); 4. Green (Heparin); 5. Lavender / Purple (K2-EDTA - drawn late to avoid potassium and calcium-chelator carryover into chemistry tubes); 6. Grey (Fluoride/Oxalate).',
    optionRationales: {
      A: 'Drawing EDTA before serum causes severe spurious hyperkalemia and hypocalcemia in chemistry results.',
      B: 'Correct. Sterile Blood Cultures -> Light Blue (Citrate) -> Red/Gold (Serum) -> Green (Heparin) -> Purple (EDTA) -> Grey (Fluoride).',
      C: 'Grey tube has high potassium/oxalate and must always be drawn last.',
      D: 'Blood cultures must always be collected first to ensure sterility.'
    },
    keyTakeaway: 'The CLSI Order of Draw (Blood cultures -> Citrate -> Serum -> Heparin -> EDTA -> Fluoride) prevents additive cross-contamination.',
    sourcePageRef: 'Page 10, Q5',
    difficulty: 'High Yield',
    tags: ['Order of Draw', 'CLSI Protocol', 'Phlebotomy', 'Sample Bottles', 'Cross-Contamination']
  },

  // ----------------------------------------------------
  // MEDICAL PRESCRIPTION OF DIETS (Pages 18-20)
  // ----------------------------------------------------
  {
    id: 'diet_q1',
    topicId: 'medical_prescription_diets',
    topicTitle: 'Medical Prescription of Diets',
    questionNumber: 1,
    clinicalVignette: 'A 58-year-old man with stage 4 Chronic Kidney Disease (eGFR 22 mL/min/1.73m², serum potassium 5.2 mmol/L, serum phosphate 1.8 mmol/L) is seen in the nephrology clinic for dietary prescription. Which dietary modification is most appropriate to slow CKD progression and prevent uremic complications?',
    options: [
      { id: 'A', text: 'Very high-protein diet (1.5–2.0 g/kg/day) with unlimited dairy products' },
      { id: 'B', text: 'Moderate protein restriction (0.6–0.8 g/kg/day) with restriction of dietary phosphate, sodium (<2 g/day), and high-potassium foods' },
      { id: 'C', text: 'Ketogenic high-fat diet with unrestricted salt intake' },
      { id: 'D', text: 'Pure liquid fruit juice fast' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Moderate protein restriction (0.6–0.8 g/kg/day) with restriction of dietary phosphate, sodium (<2 g/day), and high-potassium foods',
    explanation: 'For non-dialysis dependent CKD stages 3 to 5, clinical practice guidelines (KDOQI / KDIGO) recommend moderate dietary protein restriction (0.6–0.8 g/kg body weight/day) to reduce nitrogenous waste burden, reduce intraglomerular hyperfiltration, and slow decline in GFR. This is coupled with sodium restriction (< 2,000 mg/day / < 5g NaCl) to control hypertension, phosphorus restriction (limiting dairy and inorganic food preservatives) to prevent mineral bone disorder, and potassium monitoring.',
    optionRationales: {
      A: 'High protein worsens intraglomerular hypertension, proteinuria, and accelerates renal functional decline.',
      B: 'Correct. Moderate protein restriction (0.6–0.8 g/kg/day) with sodium, phosphate, and potassium control slows CKD progression.',
      C: 'Unrestricted salt causes fluid overload, severe hypertension, and accelerated nephrosclerosis.',
      D: 'Fruit juice fasts contain massive potassium loads that trigger fatal hyperkalemic arrhythmias in stage 4 CKD.'
    },
    keyTakeaway: 'Non-dialysis CKD stage 3–5 requires moderate protein restriction (0.6–0.8 g/kg/day) plus sodium, phosphate, and potassium control.',
    sourcePageRef: 'Pages 18–19, Q1',
    difficulty: 'High Yield',
    tags: ['CKD Nutrition', 'Protein Restriction', 'Phosphate Restriction', 'Nephrology', 'Dietary Prescription']
  },
  {
    id: 'diet_q2',
    topicId: 'medical_prescription_diets',
    topicTitle: 'Medical Prescription of Diets',
    questionNumber: 2,
    clinicalVignette: 'A 62-year-old patient with New York Heart Association (NYHA) Class III Heart Failure with reduced Ejection Fraction (HFrEF 28%) is hospitalized for recurrent pulmonary congestion and bilateral pedal edema. In addition to guideline-directed medical therapy, what is the recommended dietary sodium and fluid prescription?',
    options: [
      { id: 'A', text: 'Sodium restriction to < 2,000 mg/day (2 g/day) and fluid restriction to 1.5–2.0 L/day in symptomatic/hyponatremic fluid overload' },
      { id: 'B', text: 'Sodium loading to 10 g/day to maintain renal perfusion pressure' },
      { id: 'C', text: 'Unrestricted fluid intake of > 4 L/day to flush the kidneys' },
      { id: 'D', text: 'Complete exclusion of all dietary proteins and carbohydrates' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Sodium restriction to < 2,000 mg/day (2 g/day) and fluid restriction to 1.5–2.0 L/day in symptomatic/hyponatremic fluid overload',
    explanation: 'In symptomatic moderate-to-severe heart failure (NYHA III/IV) with congestion and volume retention, sodium restriction (< 2,000 mg/day or < 2 g/day sodium, equivalent to ~5 g salt) is recommended to prevent neurohormonally mediated sodium and water retention. Modest fluid restriction (1.5 to 2.0 L/day) is indicated in patients with refractory congestion, persistent edema, or dilutional hyponatremia (serum Na < 130 mmol/L).',
    optionRationales: {
      A: 'Correct. Dietary sodium < 2 g/day and fluid 1.5–2.0 L/day reduce preload, pulmonary congestion, and peripheral edema.',
      B: 'Sodium loading triggers acute pulmonary edema and decompensation.',
      C: 'Excess fluid intake worsens volume overload and dilutional hyponatremia.',
      D: 'Caloric/protein malnutrition leads to cardiac cachexia and increased mortality.'
    },
    keyTakeaway: 'Heart failure with congestion requires dietary sodium restriction (< 2 g/day) and fluid restriction (1.5–2.0 L/day for hyponatremia/congestion).',
    sourcePageRef: 'Page 19, Q2',
    difficulty: 'Core Clinical',
    tags: ['Heart Failure', 'Sodium Restriction', 'Fluid Restriction', 'Cardiology', 'Dietary Prescription']
  },
  {
    id: 'diet_q3',
    topicId: 'medical_prescription_diets',
    topicTitle: 'Medical Prescription of Diets',
    questionNumber: 3,
    clinicalVignette: 'A 48-year-old man with decompensated liver cirrhosis and moderate ascites presents for nutritional optimization. On examination, he has marked temporal muscle wasting and reduced mid-arm muscle circumference (sarcopenia). Which nutritional strategy is guideline-recommended (EASL/ESPEN) to prevent starvation-induced muscle catabolism in cirrhotic patients?',
    options: [
      { id: 'A', text: 'Severe dietary protein restriction (<0.5 g/kg/day) to prevent hepatic encephalopathy' },
      { id: 'B', text: 'Frequent small meals with adequate protein intake (1.2–1.5 g/kg/day) and a mandatory late-evening complex carbohydrate snack' },
      { id: 'C', text: 'Intermittent prolonged fasting for 18 to 24 hours daily' },
      { id: 'D', text: 'High-sodium liquid diet' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Frequent small meals with adequate protein intake (1.2–1.5 g/kg/day) and a mandatory late-evening complex carbohydrate snack',
    explanation: 'Patients with cirrhosis have depleted hepatic glycogen stores and enter a state of "accelerated starvation" after just 6–8 hours of fasting, rapidly breaking down skeletal muscle for gluconeogenesis. Sarcopenia directly increases mortality, infection risk, and hepatic encephalopathy. Current guidelines explicitly advise AGAINST protein restriction; they recommend adequate protein (1.2–1.5 g/kg/day) and a mandatory late-evening carbohydrate/protein snack (LES) to shorten the overnight fasting interval and preserve muscle mass.',
    optionRationales: {
      A: 'Severe protein restriction causes severe muscle breakdown and worsens encephalopathy and mortality.',
      B: 'Correct. High protein (1.2–1.5 g/kg/day) plus a late-evening complex carbohydrate snack prevents catabolism and sarcopenia.',
      C: 'Prolonged fasting accelerates muscle proteolysis and gluconeogenesis.',
      D: 'High sodium exacerbates ascites and fluid retention.'
    },
    keyTakeaway: 'Cirrhosis patients require 1.2–1.5 g/kg/day protein and a mandatory late-evening complex carbohydrate snack to prevent accelerated starvation and sarcopenia.',
    sourcePageRef: 'Pages 19–20, Q3',
    difficulty: 'High Yield',
    tags: ['Cirrhosis Nutrition', 'Sarcopenia', 'Late-Evening Snack', 'Protein Intake', 'EASL Guidelines']
  },
  {
    id: 'diet_q4',
    topicId: 'medical_prescription_diets',
    topicTitle: 'Medical Prescription of Diets',
    questionNumber: 4,
    clinicalVignette: 'A 40-year-old man presents with acute podagra (excruciating pain, erythema, and swelling of the first metatarsophalangeal joint). Serum uric acid is 9.2 mg/dL. In addition to acute anti-inflammatory pharmacotherapy, which long-term dietary modification should be advised to reduce serum uric acid and prevent recurrent gout flares?',
    options: [
      { id: 'A', text: 'Limit purine-rich foods (organ meats, red meats, shellfish), eliminate high-fructose corn syrup/sweetened beverages, and restrict alcohol (especially beer)' },
      { id: 'B', text: 'Consume large quantities of beer and seafood daily' },
      { id: 'C', text: 'Strict restriction of all green leafy vegetables and low-fat dairy products' },
      { id: 'D', text: 'High-protein purine-rich ketogenic diet' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Limit purine-rich foods (organ meats, red meats, shellfish), eliminate high-fructose corn syrup/sweetened beverages, and restrict alcohol (especially beer)',
    explanation: 'Purines from dietary animal sources (organ meats, red meats, seafood) are metabolized directly into uric acid. High-fructose corn syrup accelerates hepatic ATP breakdown to AMP and uric acid. Alcohol (especially beer, rich in guanosine purines) generates lactic acid, which competes with urate for renal tubular excretion while stimulating urate synthesis. Conversely, low-fat dairy, vitamin C, and coffee have modest uricosuric and protective effects.',
    optionRationales: {
      A: 'Correct. Restricting purine meats, high-fructose corn syrup, and beer significantly lowers serum uric acid and gout flares.',
      B: 'Beer and seafood directly trigger severe hyperuricemia and recurrent attacks.',
      C: 'Low-fat dairy is uricosuric and protective against gout; purine-rich vegetables do not significantly increase gout risk.',
      D: 'Ketogenic diets generate ketoacids that inhibit renal uric acid clearance.'
    },
    keyTakeaway: 'Gout dietary management requires restricting purine-rich meats, beer, and fructose-sweetened drinks, while encouraging low-fat dairy and adequate hydration.',
    sourcePageRef: 'Page 20, Q4',
    difficulty: 'Core Clinical',
    tags: ['Gout', 'Hyperuricemia', 'Purines', 'Fructose', 'Dietary Prescription']
  },
  {
    id: 'diet_q5',
    topicId: 'medical_prescription_diets',
    topicTitle: 'Medical Prescription of Diets',
    questionNumber: 5,
    clinicalVignette: 'A 34-year-old woman is evaluated for refractory iron deficiency anemia and chronic bloating. Duodenal biopsy confirms Celiac Disease (Marsh III total villous atrophy). What is the mandatory, lifelong medical nutritional therapy for this condition?',
    options: [
      { id: 'A', text: 'Strict, lifelong exclusion of all gluten-containing grains (wheat, barley, rye) from the diet' },
      { id: 'B', text: 'Low-carbohydrate, high-fructose diet with wheat supplementation' },
      { id: 'C', text: 'Temporary 2-week exclusion of lactose only' },
      { id: 'D', text: 'High-fiber diet supplemented with concentrated wheat germ' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Strict, lifelong exclusion of all gluten-containing grains (wheat, barley, rye) from the diet',
    explanation: 'Celiac disease is a systemic autoimmune enteropathy triggered by the ingestion of gluten storage proteins (gliadins and glutenins in wheat, secalins in rye, hordeins in barley) in genetically predisposed individuals (HLA-DQ2 / HLA-DQ8). The only established and effective treatment is complete, strict, lifelong dietary elimination of gluten. Adherence leads to mucosal healing, resolution of malabsorption, and significant reduction in long-term risks such as enteropathy-associated T-cell lymphoma (EATL) and osteoporosis.',
    optionRationales: {
      A: 'Correct. Complete lifelong exclusion of wheat, barley, and rye is mandatory and curative for Celiac disease.',
      B: 'Wheat directly drives immune mucosal destruction in Celiac disease.',
      C: 'Secondary lactase deficiency may occur transiently due to villous blunting, but gluten exclusion is the primary lifelong requirement.',
      D: 'Wheat germ is concentrated in gluten and is toxic to celiac patients.'
    },
    keyTakeaway: 'The cornerstone of Celiac Disease therapy is strict, lifelong elimination of all gluten-containing grains (wheat, barley, rye).',
    sourcePageRef: 'Page 20, Q5',
    difficulty: 'High Yield',
    tags: ['Celiac Disease', 'Gluten-Free Diet', 'Enteropathy', 'Gastroenterology', 'Dietary Prescription']
  },

  // ----------------------------------------------------
  // INDICATION & COMPLICATIONS OF BLOOD TRANSFUSION (Pages 28-30)
  // ----------------------------------------------------
  {
    id: 'bt_q1',
    topicId: 'blood_transfusion',
    topicTitle: 'Indication & Complications of Blood Transfusion',
    questionNumber: 1,
    clinicalVignette: 'A 64-year-old man with stable coronary artery disease is admitted for elective hip replacement. Postoperatively on Day 2, his hemoglobin is 7.4 g/dL. He is entirely asymptomatic, hemodynamically stable (BP 125/75 mmHg, HR 72 bpm, SpO2 98%), and has no chest pain or dyspnea. According to international evidence-based transfusion guidelines (AABB / TRICC), what is the recommended transfusion strategy for this patient?',
    options: [
      { id: 'A', text: 'Transfuse 3 units of packed red blood cells immediately to achieve a target hemoglobin > 10.0 g/dL' },
      { id: 'B', text: 'Adopt a restrictive transfusion strategy (transfuse only if hemoglobin falls < 7.0–8.0 g/dL or if symptomatic)' },
      { id: 'C', text: 'Administer whole blood transfusion until hematocrit reaches 45%' },
      { id: 'D', text: 'Administer fresh frozen plasma alongside red cells to prevent dilutional coagulopathy' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Adopt a restrictive transfusion strategy (transfuse only if hemoglobin falls < 7.0–8.0 g/dL or if symptomatic)',
    explanation: 'Extensive randomized controlled trials (TRICC, FOCUS, TRISS) and international guidelines recommend a "restrictive transfusion strategy" (transfusion threshold of Hb < 7.0 g/dL for hemodynamically stable hospitalized adults, and Hb < 8.0 g/dL for patients undergoing orthopedic/cardiac surgery or with pre-existing cardiovascular disease). Restrictive strategies significantly reduce transfusion-related complications, viral transmission risk, circulatory overload, and all-cause mortality without compromising clinical outcomes.',
    optionRationales: {
      A: 'Liberal transfusion (target Hb > 10 g/dL) increases cardiovascular overload, infection rates, and mortality without clinical benefit.',
      B: 'Correct. A restrictive strategy (threshold Hb < 7–8 g/dL) is standard of care for stable postoperative patients.',
      C: 'Whole blood is not indicated for normovolemic postoperative anemia.',
      D: 'FFP is indicated only for active coagulopathic bleeding, not prophylactic addition to packed cells.'
    },
    keyTakeaway: 'A restrictive transfusion strategy (threshold Hb < 7.0 g/dL in general patients, < 8.0 g/dL in cardiovascular disease) is safer and equally effective compared to liberal transfusion.',
    sourcePageRef: 'Pages 28–29, Q1',
    difficulty: 'High Yield',
    tags: ['Blood Transfusion', 'Restrictive Strategy', 'Hemoglobin Threshold', 'AABB Guidelines']
  },
  {
    id: 'bt_q2',
    topicId: 'blood_transfusion',
    topicTitle: 'Indication & Complications of Blood Transfusion',
    questionNumber: 2,
    clinicalVignette: 'A 50-year-old woman receives a unit of packed red blood cells. Ten minutes into the transfusion (after approximately 30 mL infused), she develops acute back pain, fever (39.0°C), rigors, dyspnea, and red-colored urine. Her blood pressure drops from 125/80 to 75/45 mmHg. What is the immediate priority step in management?',
    options: [
      { id: 'A', text: 'Immediately stop the transfusion, maintain IV access with normal saline, check patient and blood unit identifiers, and notify the blood bank' },
      { id: 'B', text: 'Slow the transfusion rate by half and administer oral paracetamol' },
      { id: 'C', text: 'Administer IV furosemide and continue the transfusion to completion' },
      { id: 'D', text: 'Administer oral diphenhydramine and monitor vital signs every 30 minutes' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Immediately stop the transfusion, maintain IV access with normal saline, check patient and blood unit identifiers, and notify the blood bank',
    explanation: 'The presentation (acute fever, flank/back pain, hypotension, hemoglobinuria) is classic for an Acute Hemolytic Transfusion Reaction (AHTR), most commonly caused by ABO incompatibility due to clerical/labeling error. The immediate lifesaving actions are: 1. STOP the transfusion immediately; 2. Keep IV line open with 0.9% normal saline; 3. Re-check patient identity and blood bag labels; 4. Alert the blood bank and return the blood bag with fresh post-transfusion blood and urine samples; 5. Aggressive crystalloid hydration and osmotic diuresis to maintain renal blood flow and prevent renal failure.',
    optionRationales: {
      A: 'Correct. Stopping the transfusion immediately, infusing IV saline, checking identifiers, and sending samples to the blood bank is mandatory.',
      B: 'Slowing the infusion in AHTR allows more incompatible RBCs to enter, resulting in fatal shock and disseminated intravascular coagulation (DIC).',
      C: 'Furosemide alone without stopping transfusion will not prevent immune intravascular hemolysis.',
      D: 'Antihistamines are for mild allergic reactions (urticaria), not life-threatening hemolytic destruction.'
    },
    keyTakeaway: 'Acute hemolytic transfusion reaction (ABO mismatch) requires immediate cessation of transfusion, IV saline resuscitation, and urgent blood bank notification.',
    sourcePageRef: 'Page 29, Q2',
    difficulty: 'High Yield',
    tags: ['AHTR', 'ABO Incompatibility', 'Transfusion Reaction', 'Emergency Protocol']
  },
  {
    id: 'bt_q3',
    topicId: 'blood_transfusion',
    topicTitle: 'Indication & Complications of Blood Transfusion',
    questionNumber: 3,
    clinicalVignette: 'A 72-year-old woman with stage 4 CKD and ischemic cardiomyopathy receives 2 units of packed red blood cells over 2 hours for symptomatic anemia. Near the end of the second unit, she develops acute respiratory distress, orthopnea, bilateral coarse crepitations, hypertension (BP 185/105 mmHg), and an elevated Jugular Venous Pressure (JVP). Brain Natriuretic Peptide (BNP) is markedly elevated. Which transfusion complication is this, and what is the primary management?',
    options: [
      { id: 'A', text: 'Transfusion-Related Acute Lung Injury (TRALI); manage with aggressive crystalloid boluses' },
      { id: 'B', text: 'Transfusion-Associated Circulatory Overload (TACO); manage by stopping transfusion, upright positioning, oxygen, and IV loop diuretics (furosemide)' },
      { id: 'C', text: 'Anaphylactic transfusion reaction; manage with subcutaneous epinephrine alone' },
      { id: 'D', text: 'Septic transfusion reaction; manage with broad-spectrum antibiotics' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Transfusion-Associated Circulatory Overload (TACO); manage by stopping transfusion, upright positioning, oxygen, and IV loop diuretics (furosemide)',
    explanation: 'Transfusion-Associated Circulatory Overload (TACO) is hydrostatic pulmonary edema resulting from rapid infusion of blood products in patients with compromised cardiovascular or renal reserve. Key distinguishing features from TRALI include: hypertension (elevated BP), elevated JVP, positive fluid balance, wide pulse pressure, marked elevation of BNP/NT-proBNP, and rapid improvement following IV furosemide diuresis. In contrast, TRALI features normal/low BP, normal JVP, and is non-cardiogenic.',
    optionRationales: {
      A: 'TRALI is non-cardiogenic pulmonary edema with normal/low JVP and hypotension; fluid boluses in TACO worsen pulmonary congestion.',
      B: 'Correct. TACO is volume-overload hydrostatic pulmonary edema responsive to stopping transfusion, oxygen, and IV loop diuretics.',
      C: 'Anaphylaxis presents with wheezing, urticaria, angioedema, and hypotension, not fluid overload with elevated JVP.',
      D: 'Septic reactions cause high fever, rigors, and distributive vasodilatory shock.'
    },
    keyTakeaway: 'TACO presents with hypertension, elevated JVP, high BNP, and pulmonary edema; it responds rapidly to IV loop diuretics and sitting upright.',
    sourcePageRef: 'Pages 29–30, Q3',
    difficulty: 'High Yield',
    tags: ['TACO', 'TRALI Differentiation', 'Circulatory Overload', 'Diuretics', 'Cardiology']
  },
  {
    id: 'bt_q4',
    topicId: 'blood_transfusion',
    topicTitle: 'Indication & Complications of Blood Transfusion',
    questionNumber: 4,
    clinicalVignette: 'A 32-year-old trauma patient with massive hemorrhagic shock undergoes emergency surgery and receives 12 units of packed red blood cells over 2 hours. According to modern Massive Transfusion Protocols (MTP), what ratio of blood products (Packed Red Blood Cells : Fresh Frozen Plasma : Platelets) should be administered to prevent trauma-induced coagulopathy and dilutional thrombocytopenia?',
    options: [
      { id: 'A', text: '6 : 1 : 1 ratio' },
      { id: 'B', text: 'Balanced 1 : 1 : 1 ratio (1 unit PRBC : 1 unit FFP : 1 unit Platelets)' },
      { id: 'C', text: '10 : 0 : 0 ratio (PRBCs only until hemoglobin exceeds 12 g/dL)' },
      { id: 'D', text: '1 : 4 : 0 ratio' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Balanced 1 : 1 : 1 ratio (1 unit PRBC : 1 unit FFP : 1 unit Platelets)',
    explanation: 'The landmark PROPPR trial and international damage-control resuscitation guidelines demonstrated that a balanced 1:1:1 ratio (1 unit of Packed Red Blood Cells to 1 unit of Fresh Frozen Plasma to 1 unit of apheresis Platelets) in massive hemorrhage prevents dilutional coagulopathy, hypofibrinogenemia, and thrombocytopenia, significantly reducing 24-hour exsanguination mortality compared to red cell-predominant resuscitation.',
    optionRationales: {
      A: 'High red cell ratios without plasma/platelets produce severe dilutional coagulopathy and uncontrolled hemorrhage.',
      B: 'Correct. A 1:1:1 balanced ratio is the proven standard for massive transfusion protocols (MTP).',
      C: 'PRBC-only resuscitation dilutes clotting factors and platelets, leading to fatal trauma-induced coagulopathy.',
      D: 'Plasma-predominant resuscitation without adequate RBCs leads to critical tissue hypoxia.'
    },
    keyTakeaway: 'Massive Transfusion Protocol (MTP) requires a balanced 1:1:1 ratio (PRBC : FFP : Platelets) to prevent trauma coagulopathy and improve survival.',
    sourcePageRef: 'Page 30, Q4',
    difficulty: 'High Yield',
    tags: ['Massive Transfusion', 'MTP', 'Damage Control Resuscitation', '1:1:1 Ratio', 'Trauma']
  },
  {
    id: 'bt_q5',
    topicId: 'blood_transfusion',
    topicTitle: 'Indication & Complications of Blood Transfusion',
    questionNumber: 5,
    clinicalVignette: 'A 28-year-old woman receives a unit of PRBCs. Thirty minutes after transfusion starts, she develops a mild fever rise from 36.8°C to 38.0°C and mild chills, but has normal blood pressure (120/75 mmHg), normal heart rate, clear lungs, and no back pain or dark urine. A diagnosis of Febrile Non-Hemolytic Transfusion Reaction (FNHTR) is made. What is the underlying pathophysiological mechanism, and how can it be prevented in future transfusions?',
    options: [
      { id: 'A', text: 'ABO antibody-mediated complement activation; prevent with washed red cells' },
      { id: 'B', text: 'Recipient antibodies directed against donor human leukocyte antigens (HLA) / cytokines accumulated in storage; prevent with prestorage leukoreduction' },
      { id: 'C', text: 'Bacterial endotoxin contamination; prevent with prophylactic oral antibiotics' },
      { id: 'D', text: 'IgA deficiency with anti-IgA antibodies; prevent with irradiated blood products' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Recipient antibodies directed against donor human leukocyte antigens (HLA) / cytokines accumulated in storage; prevent with prestorage leukoreduction',
    explanation: 'Febrile Non-Hemolytic Transfusion Reaction (FNHTR) is defined as a temperature increase >= 1°C occurring during or shortly after transfusion without hemolysis. It is caused by: 1) Recipient preformed cytotoxic antibodies reacting against donor white blood cell HLA antigens, and 2) Bioactive pyrogenic cytokines (IL-1, IL-6, TNF-alpha) released by donor leukocytes during storage. Routine universal prestorage leukoreduction (filtration of WBCs) has dramatically reduced the incidence of FNHTR.',
    optionRationales: {
      A: 'ABO incompatibility causes acute hemolytic reaction, not benign FNHTR.',
      B: 'Correct. FNHTR is mediated by anti-HLA antibodies and donor leukocyte cytokines; prevented by prestorage leukoreduction.',
      C: 'Bacterial contamination causes high fever, septic shock, and severe hypotension.',
      D: 'Anti-IgA antibodies cause severe anaphylactic reactions with shock, not isolated fever.'
    },
    keyTakeaway: 'Febrile Non-Hemolytic Transfusion Reaction (FNHTR) is caused by anti-HLA antibodies and leukocyte cytokines; it is prevented by prestorage leukodepletion.',
    sourcePageRef: 'Page 30, Q5',
    difficulty: 'Core Clinical',
    tags: ['FNHTR', 'Leukoreduction', 'HLA Antibodies', 'Cytokines', 'Transfusion Reaction']
  },

  // ----------------------------------------------------
  // TYPES & INDICATIONS OF BIOPSY NEEDLES (Page 51)
  // ----------------------------------------------------
  {
    id: 'bn_q1',
    topicId: 'biopsy_needles',
    topicTitle: 'Types & Indications of Biopsy Needles',
    questionNumber: 1,
    clinicalVignette: 'A 42-year-old woman presents with a firm 2.5-cm palpable solitary breast mass. The surgical oncologist decides to perform a percutaneous cutting-needle core biopsy rather than fine needle aspiration (FNA). Which of the following is the primary diagnostic advantage of core needle biopsy (e.g., Tru-Cut needle) over fine needle aspiration?',
    options: [
      { id: 'A', text: 'Preserves intact tissue histological architecture, enabling differentiation between ductal carcinoma in situ (DCIS) and invasive carcinoma, as well as immunohistochemical receptor testing (ER/PR/HER2)' },
      { id: 'B', text: 'Completely eliminates the need for local anesthesia' },
      { id: 'C', text: 'Requires zero post-procedural compression because bleeding never occurs' },
      { id: 'D', text: 'Provides only single-cell cytological smears comparable to FNA' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Preserves intact tissue histological architecture, enabling differentiation between ductal carcinoma in situ (DCIS) and invasive carcinoma, as well as immunohistochemical receptor testing (ER/PR/HER2)',
    explanation: 'Core needle biopsy (Tru-Cut / automated spring-loaded cutting needle) obtains a cylindrical core of intact tissue, preserving histological architecture and basement membrane integrity. This allows definitive differentiation between in situ (e.g., DCIS) and invasive carcinoma (invasion through the basement membrane), histological grading, and robust immunohistochemical staining for hormone receptors (ER, PR) and HER2/neu. In contrast, FNA yields only isolated cells or clusters (cytology) cannot evaluate tissue architecture or invasion.',
    optionRationales: {
      A: 'Correct. Core needle biopsy preserves architecture to distinguish in situ from invasive cancer and allows receptor profiling.',
      B: 'Core biopsy requires local anesthesia (e.g., 1-2% lidocaine).',
      C: 'Core biopsy involves a cutting needle that requires post-biopsy manual pressure to prevent hematoma.',
      D: 'Core needle obtains intact histological tissue cores, not just cytology.'
    },
    keyTakeaway: 'Core needle biopsy (Tru-Cut) preserves tissue architecture to differentiate in situ from invasive cancer and allows immunohistochemical receptor profiling.',
    sourcePageRef: 'Page 51, Q1',
    difficulty: 'High Yield',
    tags: ['Biopsy Needles', 'Tru-Cut', 'Core Needle Biopsy', 'Histopathology', 'Breast Cancer']
  },
  {
    id: 'bn_q2',
    topicId: 'biopsy_needles',
    topicTitle: 'Types & Indications of Biopsy Needles',
    questionNumber: 2,
    clinicalVignette: 'A 55-year-old woman with suspected primary myelofibrosis and pancytopenia undergoes bone marrow examination. The hematologist utilizes a specialized hollow needle with a tapered cutting tip and internal stylet to obtain a solid core of trabecular bone and marrow tissue from the posterior superior iliac spine (PSIS). Which specialized needle is designed for this bone marrow trephine core biopsy?',
    options: [
      { id: 'A', text: 'Jamshidi needle' },
      { id: 'B', text: 'Klima needle' },
      { id: 'C', text: 'Salah needle' },
      { id: 'D', text: 'Vim-Silverman needle' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Jamshidi needle',
    explanation: 'The Jamshidi needle is the classic, standard disposable/reusable hollow-bore needle designed specifically for bone marrow trephine core biopsy (obtaining an intact cylinder of bone and marrow cavity tissue for histopathology and reticulin/collagen fibrosis grading). The Salah and Klima needles are designed primarily for liquid bone marrow aspiration (cytological aspirates), not bone trephine cores.',
    optionRationales: {
      A: 'Correct. The Jamshidi needle is the standard instrument for bone marrow trephine core biopsy.',
      B: 'Klima needle is used for bone marrow aspiration (liquid aspirate), usually sternal or iliac.',
      C: 'Salah needle is also an aspiration needle featuring an adjustable guard.',
      D: 'Vim-Silverman was historically used for soft tissue core biopsies (liver/kidney), not bone trephine.'
    },
    keyTakeaway: 'The Jamshidi needle is the standard needle used for bone marrow trephine core biopsies to assess cellularity, architecture, and marrow fibrosis.',
    sourcePageRef: 'Page 51, Q2',
    difficulty: 'High Yield',
    tags: ['Jamshidi Needle', 'Bone Marrow Biopsy', 'Trephine Biopsy', 'Hematology Needles']
  },

  // ----------------------------------------------------
  // MANAGEMENT OF ERECTILE DYSFUNCTION (Pages 56-57)
  // ----------------------------------------------------
  {
    id: 'ed_q1',
    topicId: 'erectile_dysfunction',
    topicTitle: 'Management of Erectile Dysfunction',
    questionNumber: 1,
    clinicalVignette: 'A 28-year-old man presents with sudden-onset inability to achieve and maintain erections during intercourse with his new partner over the past 2 months. He reports normal, firm nocturnal penile tumescence (spontaneous morning erections) and normal erections during masturbation. He takes no medications and has no cardiovascular risk factors. What is the most likely etiology of his erectile dysfunction?',
    options: [
      { id: 'A', text: 'Severe cavernous arterial insufficiency' },
      { id: 'B', text: 'Psychogenic erectile dysfunction (performance anxiety)' },
      { id: 'C', text: 'Diabetic autonomic neuropathy' },
      { id: 'D', text: 'Venous-occlusive dysfunction (venous leak)' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Psychogenic erectile dysfunction (performance anxiety)',
    explanation: 'The presence of intact, rigid nocturnal penile tumescence (morning erections) and normal erectile function during masturbation definitively confirms that the neurovascular and physiological mechanisms of erection are anatomically intact. Sudden onset in a young male with situational failure (normal masturbation, failure during partner intercourse) is the hallmark of psychogenic erectile dysfunction, commonly driven by performance anxiety, relationship stress, or situational depression.',
    optionRationales: {
      A: 'Arteriogenic ED is gradual in onset and impairs morning erections and masturbation equally.',
      B: 'Correct. Preserved nocturnal/masturbatory erections with sudden situational failure indicates psychogenic ED.',
      C: 'Diabetic neuropathy causes gradual, progressive loss of all erections including morning erections.',
      D: 'Venous leak causes failure to maintain rigidity in all sexual situations.'
    },
    keyTakeaway: 'Preserved spontaneous nocturnal and morning erections in erectile dysfunction indicates a psychogenic (rather than organic/vascular) etiology.',
    sourcePageRef: 'Page 56, Q1',
    difficulty: 'Core Clinical',
    tags: ['Erectile Dysfunction', 'Psychogenic ED', 'Nocturnal Penile Tumescence', 'Urology']
  },
  {
    id: 'ed_q2',
    topicId: 'erectile_dysfunction',
    topicTitle: 'Management of Erectile Dysfunction',
    questionNumber: 2,
    clinicalVignette: 'A 58-year-old man with a 10-year history of type 2 diabetes and hypertension complains of progressive erectile dysfunction over 2 years. He has tried lifestyle modifications without success. The physician considers prescribing oral Sildenafil (a PDE-5 inhibitor). Which medication in the patient\'s history represents an ABSOLUTE contraindication to PDE-5 inhibitor therapy?',
    options: [
      { id: 'A', text: 'Sublingual or long-acting Nitrates (e.g., Nitroglycerin, Isosorbide mononitrate/dinitrate)' },
      { id: 'B', text: 'ACE inhibitors (e.g., Lisinopril)' },
      { id: 'C', text: 'Metformin' },
      { id: 'D', text: 'HMG-CoA reductase inhibitors (e.g., Atorvastatin)' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Sublingual or long-acting Nitrates (e.g., Nitroglycerin, Isosorbide mononitrate/dinitrate)',
    explanation: 'Phosphodiesterase type 5 (PDE-5) inhibitors (Sildenafil, Tadalafil, Vardenafil) prevent the degradation of cyclic GMP (cGMP) in vascular smooth muscle cells. Nitrates act as nitric oxide (NO) donors, stimulating guanylate cyclase to synthesize cGMP. Combining PDE-5 inhibitors with nitrates produces massive, synergistic cGMP accumulation, leading to profound systemic vasodilation, catastrophic refractory hypotension, coronary hypoperfusion, and fatal myocardial infarction. Nitrates are an absolute contraindication.',
    optionRationales: {
      A: 'Correct. Concomitant use of PDE-5 inhibitors and organic nitrates causes life-threatening synergistic hypotension.',
      B: 'ACE inhibitors can be used with PDE-5 inhibitors with routine blood pressure monitoring.',
      C: 'Metformin has no adverse pharmacokinetic interaction with PDE-5 inhibitors.',
      D: 'Statins are safe and synergistic in improving endothelial function.'
    },
    keyTakeaway: 'Concomitant use of PDE-5 inhibitors (Sildenafil) and nitrates (Nitroglycerin/Isosorbide) is absolutely contraindicated due to catastrophic hypotension.',
    sourcePageRef: 'Pages 56–57, Q2',
    difficulty: 'High Yield',
    tags: ['PDE-5 Inhibitors', 'Sildenafil', 'Nitrates Contraindication', 'Hypotension', 'Pharmacology']
  },
  {
    id: 'ed_q3',
    topicId: 'erectile_dysfunction',
    topicTitle: 'Management of Erectile Dysfunction',
    questionNumber: 3,
    clinicalVignette: 'A 62-year-old man with hypertension and hyperlipidemia presents with erectile dysfunction. He reports experiencing retrosternal chest tightness when walking two flights of stairs or during moderate exertion. According to the Princeton Consensus Guidelines on Cardiovascular Risk and Sexual Activity, how should this patient be risk-stratified and managed regarding ED therapy?',
    options: [
      { id: 'A', text: 'Low cardiovascular risk; prescribe maximum dose sildenafil immediately without cardiac testing' },
      { id: 'B', text: 'Intermediate / High cardiovascular risk (unstable/exertional angina); defer sexual activity and ED pharmacotherapy until comprehensive cardiac evaluation and exercise treadmill testing are performed' },
      { id: 'C', text: 'Prescribe sublingual nitroglycerin to take simultaneously with sildenafil before sexual intercourse' },
      { id: 'D', text: 'Reassure that sexual activity carries zero metabolic or cardiovascular workload' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Intermediate / High cardiovascular risk (unstable/exertional angina); defer sexual activity and ED pharmacotherapy until comprehensive cardiac evaluation and exercise treadmill testing are performed',
    explanation: 'Sexual activity is equivalent to moderate physical exertion (approx. 3 to 4 METs, comparable to walking 1 mile in 20 min or climbing 2 flights of stairs). According to the Princeton III Consensus guidelines, patients with symptomatic exertional angina, recent MI, or uncontrolled arrhythmias are categorized into intermediate or high cardiovascular risk. In these patients, sexual activity and ED medications must be postponed until formal cardiology evaluation and stress testing establish cardiovascular safety.',
    optionRationales: {
      A: 'Exertional chest tightness indicates active coronary ischemia; prescribing sildenafil without evaluation is dangerous.',
      B: 'Correct. Defer sexual activity and ED treatment until cardiac evaluation and stress testing stratify ischemia risk.',
      C: 'Combining nitrates with sildenafil is strictly contraindicated.',
      D: 'Sexual activity requires significant metabolic workload (3-4 METs) and sympathetic surge.'
    },
    keyTakeaway: 'Patients with symptomatic exertional angina or high cardiovascular risk must undergo formal cardiac evaluation before initiating ED therapies.',
    sourcePageRef: 'Page 57, Q3',
    difficulty: 'High Yield',
    tags: ['Princeton Consensus', 'Cardiovascular Risk', 'Erectile Dysfunction', 'Exercise Stress Testing']
  },

  // ----------------------------------------------------
  // PRINCIPLES OF ANTIBIOTIC USE (Pages 67-70)
  // ----------------------------------------------------
  {
    id: 'abx_q1',
    topicId: 'antibiotic_principles',
    topicTitle: 'Principles of Antibiotic Use',
    questionNumber: 1,
    clinicalVignette: 'A 58-year-old man is admitted with severe hospital-acquired pneumonia. The clinical pharmacologist explains the difference between "time-dependent" and "concentration-dependent" bactericidal pharmacodynamics. Which of the following antimicrobial classes exhibits classic time-dependent bactericidal activity, where efficacy correlates with the percentage of time that free drug concentration exceeds the Minimum Inhibitory Concentration (%T > MIC)?',
    options: [
      { id: 'A', text: 'Aminoglycosides (e.g., Gentamicin, Amikacin)' },
      { id: 'B', text: 'Beta-lactams (e.g., Penicillins, Cephalosporins, Carbapenems)' },
      { id: 'C', text: 'Fluoroquinolones (e.g., Ciprofloxacin, Levofloxacin)' },
      { id: 'D', text: 'Lipopeptides (e.g., Daptomycin)' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Beta-lactams (e.g., Penicillins, Cephalosporins, Carbapenems)',
    explanation: 'Beta-lactam antibiotics (penicillins, cephalosporins, carbapenems, monobactams) exhibit time-dependent bactericidal killing. Their clinical efficacy depends primarily on the duration of time that free unbound serum drug levels remain above the pathogen\'s MIC (%T > MIC >= 40–70% of the dosing interval). Consequently, optimizing beta-lactams involves frequent dosing, continuous infusions, or extended infusions. In contrast, Aminoglycosides and Daptomycin exhibit concentration-dependent killing (Peak/MIC ratio and AUC/MIC).',
    optionRationales: {
      A: 'Aminoglycosides are concentration-dependent (Peak/MIC >= 8-10) with prolonged post-antibiotic effect.',
      B: 'Correct. Beta-lactams are time-dependent (%T > MIC).',
      C: 'Fluoroquinolones depend on the 24-hour AUC/MIC ratio.',
      D: 'Daptomycin exhibits concentration-dependent bactericidal action.'
    },
    keyTakeaway: 'Beta-lactams are time-dependent antimicrobials optimized when free drug concentrations exceed the MIC (%T > MIC) for 50–70% of the dosing interval.',
    sourcePageRef: 'Pages 67–68, Q1',
    difficulty: 'High Yield',
    tags: ['Pharmacodynamics', 'Time-Dependent', 'Beta-Lactams', 'MIC', 'Antibiotic Stewardship']
  },
  {
    id: 'abx_q2',
    topicId: 'antibiotic_principles',
    topicTitle: 'Principles of Antibiotic Use',
    questionNumber: 2,
    clinicalVignette: 'A 21-year-old university student presents with acute high fever, petechial rash, neck stiffness, and photophobia. The medical team initiates empirical intravenous Ceftriaxone 2 g q12h immediately after blood cultures and lumbar puncture. On Day 3, cerebrospinal fluid cultures grow fully penicillin-susceptible Neisseria meningitidis (MIC < 0.06 mg/L). What is the next principle of rational antibiotic stewardship to implement?',
    options: [
      { id: 'A', text: 'Continue broad-spectrum empirical Ceftriaxone for 6 weeks regardless of culture results' },
      { id: 'B', text: 'Add intravenous Vancomycin and Gentamicin to broaden coverage' },
      { id: 'C', text: 'De-escalate (streamline) therapy to narrow-spectrum targeted intravenous Benzylpenicillin (Penicillin G) based on confirmed microbiological sensitivities' },
      { id: 'D', text: 'Discontinue all antibiotics immediately because the culture has identified the organism' }
    ],
    correctOption: 'C',
    correctAnswerText: 'De-escalate (streamline) therapy to narrow-spectrum targeted intravenous Benzylpenicillin (Penicillin G) based on confirmed microbiological sensitivities',
    explanation: 'Antibiotic de-escalation (streamlining) is a fundamental pillar of antimicrobial stewardship. Once microbiological identification and antimicrobial susceptibility results become available (usually at 48–72 hours), broad-spectrum empirical therapy should be safely transitioned to the narrowest-spectrum, most effective, and least toxic targeted agent (in this case, high-dose IV Benzylpenicillin for penicillin-sensitive meningococcus) to reduce selective pressure for resistance, minimize collateral microbiome damage, and lower healthcare costs.',
    optionRationales: {
      A: 'Continuing unnecessarily broad empirical coverage drives antimicrobial resistance and C. difficile infection.',
      B: 'Adding vancomycin and gentamicin without indication is harmful overtreatment.',
      C: 'Correct. De-escalating from broad empirical therapy to targeted narrow-spectrum Penicillin G is optimal stewardship.',
      D: 'Antibiotics must be continued for the full targeted therapeutic course (typically 5-7 days for meningococcal meningitis).'
    },
    keyTakeaway: 'Antimicrobial stewardship mandates de-escalation from broad empirical coverage to narrow-spectrum targeted therapy once culture sensitivities return.',
    sourcePageRef: 'Pages 68–69, Q2',
    difficulty: 'Core Clinical',
    tags: ['De-escalation', 'Antibiotic Stewardship', 'Targeted Therapy', 'Meningitis', 'Sensitivities']
  },
  {
    id: 'abx_q3',
    topicId: 'antibiotic_principles',
    topicTitle: 'Principles of Antibiotic Use',
    questionNumber: 3,
    clinicalVignette: 'A 74-year-old man with stage 4 CKD (eGFR 20 mL/min/1.73m²) develops MRSA bacteremia and is prescribed intravenous Vancomycin. How should the dosage of Vancomycin be adjusted to ensure therapeutic efficacy while minimizing nephrotoxicity and ototoxicity?',
    options: [
      { id: 'A', text: 'Administer a standard weight-based loading dose (25–30 mg/kg) followed by extended interval maintenance dosing guided by Therapeutic Drug Monitoring (AUC24/MIC target 400–600 mg·h/L or trough monitoring)' },
      { id: 'B', text: 'Administer standard high doses every 6 hours without checking drug levels' },
      { id: 'C', text: 'Avoid loading dose entirely and give 500 mg once a month' },
      { id: 'D', text: 'Discontinue vancomycin completely as it cannot be used in renal insufficiency' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Administer a standard weight-based loading dose (25–30 mg/kg) followed by extended interval maintenance dosing guided by Therapeutic Drug Monitoring (AUC24/MIC target 400–600 mg·h/L or trough monitoring)',
    explanation: 'Vancomycin is cleared predominantly (>80–90%) by glomerular filtration. In renal impairment, a full weight-based loading dose (25–30 mg/kg) is still required to rapidly establish therapeutic tissue concentrations in severe infections, but subsequent maintenance doses and intervals must be adjusted (e.g. extended interval q24–48h) based on renal function and monitored via Therapeutic Drug Monitoring (TDM) to maintain an AUC24/MIC of 400–600 mg·h/L and avoid toxic accumulation causing acute kidney injury and ototoxicity.',
    optionRationales: {
      A: 'Correct. Give weight-based loading dose, extend maintenance interval, and guide therapy with AUC24/MIC drug monitoring.',
      B: 'Standard dosing every 6-12h without TDM in severe CKD leads to rapid supratherapeutic accumulation and nephrotoxicity.',
      C: 'Omission of loading dose leads to delayed therapeutic target achievement and treatment failure.',
      D: 'Vancomycin is the gold standard for MRSA and can be safely used in CKD with proper TDM.'
    },
    keyTakeaway: 'In renal impairment, hydrophilic drugs like Vancomycin require a standard weight-based loading dose followed by extended maintenance intervals guided by therapeutic drug monitoring (AUC/MIC).',
    sourcePageRef: 'Page 69, Q3',
    difficulty: 'High Yield',
    tags: ['Vancomycin', 'Renal Dosing', 'Therapeutic Drug Monitoring', 'TDM', 'AUC24/MIC']
  },
  {
    id: 'abx_q4',
    topicId: 'antibiotic_principles',
    topicTitle: 'Principles of Antibiotic Use',
    questionNumber: 4,
    clinicalVignette: 'How does the biological mechanism of "selective toxicity" allow modern antibacterial agents to destroy pathogenic bacteria while minimizing host human cellular damage?',
    options: [
      { id: 'A', text: 'By binding selectively to human nuclear DNA and stimulating host macrophage synthesis' },
      { id: 'B', text: 'By exploiting biochemical and structural differences unique to bacteria, such as the peptidoglycan cell wall, 70S bacterial ribosomes (30S/50S subunits), and bacterial DNA gyrase' },
      { id: 'C', text: 'By converting human cells into bacterial spore structures' },
      { id: 'D', text: 'By lowering the core body temperature to inhibit bacterial mitosis' }
    ],
    correctOption: 'B',
    correctAnswerText: 'By exploiting biochemical and structural differences unique to bacteria, such as the peptidoglycan cell wall, 70S bacterial ribosomes (30S/50S subunits), and bacterial DNA gyrase',
    explanation: 'Selective toxicity is the fundamental principle of antimicrobial chemotherapy: an ideal drug inhibits or destroys microbial pathogens without harming human host tissues. This is achieved by targeting biochemical structures or metabolic pathways unique to prokaryotes that are absent in eukaryotic cells: 1) Peptidoglycan cell wall synthesis (beta-lactams, glycopeptides - humans lack cell walls); 2) 70S bacterial ribosomes with 30S/50S subunits (aminoglycosides, macrolides, tetracyclines - humans have 80S cytosolic ribosomes); 3) Bacterial DNA gyrase/topoisomerase IV (fluoroquinolones); and 4) De novo folate synthesis (sulfonamides/trimethoprim).',
    optionRationales: {
      A: 'Targeting human nuclear DNA would cause severe host cytotoxicity and mutagenesis.',
      B: 'Correct. Selective toxicity targets unique prokaryotic features: peptidoglycan cell walls, 70S ribosomes, DNA gyrase, and folate pathways.',
      C: 'Human cells do not form bacterial spores.',
      D: 'Antibiotics do not act by manipulating body temperature.'
    },
    keyTakeaway: 'Selective toxicity exploits structural and biochemical differences between prokaryotes and eukaryotes (peptidoglycan wall, 70S ribosomes, DNA gyrase).',
    sourcePageRef: 'Pages 69–70, Q4',
    difficulty: 'Core Clinical',
    tags: ['Selective Toxicity', 'Pharmacology', 'Bacterial Targets', 'Ribosomes', 'Peptidoglycan']
  },
  {
    id: 'abx_q5',
    topicId: 'antibiotic_principles',
    topicTitle: 'Principles of Antibiotic Use',
    questionNumber: 5,
    clinicalVignette: 'A 68-year-old man is admitted with severe septic shock secondary to an intra-abdominal source (perforated diverticulitis). According to Surviving Sepsis Campaign guidelines, what is the recommended time window for initiating empirical broad-spectrum intravenous antimicrobial therapy?',
    options: [
      { id: 'A', text: 'Within 24 to 48 hours after all laparotomy pathology reports are finalized' },
      { id: 'B', text: 'Within 1 hour of recognition of sepsis or septic shock ("The Golden Hour") immediately after taking blood cultures' },
      { id: 'C', text: 'Only after the patient is discharged from the ICU to the general ward' },
      { id: 'D', text: 'Within 12 hours after starting enteral nutrition' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Within 1 hour of recognition of sepsis or septic shock ("The Golden Hour") immediately after taking blood cultures',
    explanation: 'In severe sepsis and septic shock, every hour of delay in administering appropriate intravenous antimicrobial therapy is associated with a measurable, significant increase in mortality (approximately 7–8% increase in mortality per hour of delay). The Surviving Sepsis Campaign explicitly recommends that appropriate broad-spectrum IV antimicrobials be initiated within the first hour of recognition ("The Golden Hour"), ideally immediately following prompt blood culture collection without delaying antimicrobial administration.',
    optionRationales: {
      A: 'A 24-48 hour delay is fatal in acute septic shock.',
      B: 'Correct. Administration of IV antibiotics within 1 hour ("The Golden Hour") is a lifesaving quality mandate in sepsis.',
      C: 'Antibiotics must be administered immediately in the emergency/ICU phase.',
      D: 'Nutrition timing has no bearing on immediate antimicrobial delivery.'
    },
    keyTakeaway: 'Broad-spectrum intravenous antibiotics must be administered within 1 hour ("The Golden Hour") of recognition of severe sepsis or septic shock.',
    sourcePageRef: 'Page 70, Q5',
    difficulty: 'High Yield',
    tags: ['Surviving Sepsis', 'Golden Hour', 'Sepsis Guidelines', 'Emergency Antibiotics']
  }
];
