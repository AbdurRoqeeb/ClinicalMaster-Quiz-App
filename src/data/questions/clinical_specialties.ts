import { Question } from '../../types';

export const CLINICAL_SPECIALTIES_QUESTIONS: Question[] = [
  // ----------------------------------------------------
  // MANAGEMENT OF MALARIA (Pages 25-28)
  // ----------------------------------------------------
  {
    id: 'mal_q1',
    topicId: 'malaria_management',
    topicTitle: 'Management of Malaria',
    questionNumber: 1,
    clinicalVignette: 'A 28-year-old woman is admitted with severe falciparum malaria and receives intravenous artesunate. After 48 hours of therapy, she remains febrile and her peripheral blood parasite density has increased from 4% to 7%. Which of the following is the most appropriate next step in management?',
    options: [
      { id: 'A', text: 'Continue IV artesunate at the same dose and observe for another 48 hours' },
      { id: 'B', text: 'Switch immediately to second-line parenteral therapy (e.g., IV quinine infusion with cardiac monitoring)' },
      { id: 'C', text: 'Add oral chloroquine to the IV artesunate regimen' },
      { id: 'D', text: 'Discontinue antimalarial therapy and start broad-spectrum antibiotics alone' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Switch immediately to second-line parenteral therapy (e.g., IV quinine infusion with cardiac monitoring)',
    explanation: 'A rise in parasitemia (from 4% to 7%) and persistent clinical failure after 48 hours of compliant parenteral artesunate therapy meets criteria for early antimalarial treatment failure / artesunate resistance. The patient must be immediately transitioned to an alternative second-line parenteral regimen, specifically intravenous Quinine infusion with continuous ECG/cardiac monitoring and blood glucose checks (to detect quinine-induced hypoglycemia and QT prolongation).',
    optionRationales: {
      A: 'Continuing a failing regimen in severe falciparum malaria leads to progressive multi-organ failure and death.',
      B: 'Correct. Treatment failure on first-line IV artesunate mandates an immediate switch to parenteral quinine with cardiac monitoring.',
      C: 'P. falciparum has widespread high-level chloroquine resistance across sub-Saharan Africa.',
      D: 'Antimalarial therapy cannot be discontinued during acute falciparum parasitemia.'
    },
    keyTakeaway: 'Clinical and parasitological failure on IV artesunate warrants an immediate transition to IV Quinine with cardiac and glucose monitoring.',
    sourcePageRef: 'Pages 25–26, Q1',
    difficulty: 'High Yield',
    tags: ['Severe Malaria', 'Artesunate Failure', 'IV Quinine', 'Parasitology']
  },
  {
    id: 'mal_q2',
    topicId: 'malaria_management',
    topicTitle: 'Management of Malaria',
    questionNumber: 2,
    clinicalVignette: 'A 34-year-old male traveller successfully treated for severe falciparum malaria with IV artesunate is discharged on oral artemether-lumefantrine. Fourteen days later, he returns with severe fatigue, dark urine, and pallor. Laboratory testing reveals: Hemoglobin 5.4 g/dL (was 11.2 g/dL at discharge), Reticulocyte count 8%, Total bilirubin 4.2 mg/dL (unconjugated 3.6 mg/dL), Serum haptoglobin undetectable, and Blood smear negative for malaria parasites. What is the diagnosis?',
    options: [
      { id: 'A', text: 'Recrudescent malaria infection' },
      { id: 'B', text: 'Post-Artesunate Delayed Hemolysis (PADH)' },
      { id: 'C', text: 'Autoimmune thrombocytopenic purpura' },
      { id: 'D', text: 'Aplastic crisis secondary to parvovirus B19' },
      { id: 'E', text: 'G6PD deficiency triggered by lumefantrine' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Post-Artesunate Delayed Hemolysis (PADH)',
    explanation: 'Post-Artesunate Delayed Hemolysis (PADH) is a recognized immunological/mechanical complication occurring 1 to 3 weeks after parenteral artesunate therapy for severe hyperparasitemic malaria. Artesunate causes the spleen to "pit" and expel dead parasites from red blood cells ("once-parasitized erythrocytes" / "pitted RBCs"). These damaged erythrocytes have a shortened lifespan and undergo accelerated splenic destruction days-to-weeks later, causing delayed hemolytic anemia with low haptoglobin and reticulocytosis.',
    optionRationales: {
      A: 'Smear is explicitly negative for malaria parasites.',
      B: 'Correct. Delayed hemolytic anemia 1–3 weeks post-IV artesunate with absent parasites defines PADH.',
      C: 'This is an erythrocyte hemolysis syndrome, not isolated thrombocytopenia.',
      D: 'Aplastic crisis causes reticulocytopenia (<0.1%), whereas reticulocytes here are 8%.',
      E: 'Lumefantrine does not provoke oxidant hemolysis in G6PD deficiency (unlike primaquine).'
    },
    keyTakeaway: 'Post-Artesunate Delayed Hemolysis (PADH) causes hemolytic anemia and low haptoglobin 1–3 weeks after IV artesunate therapy.',
    sourcePageRef: 'Page 26, Q2',
    difficulty: 'High Yield',
    tags: ['PADH', 'Artesunate', 'Delayed Hemolysis', 'Severe Malaria']
  },
  {
    id: 'mal_q3',
    topicId: 'malaria_management',
    topicTitle: 'Management of Malaria',
    questionNumber: 3,
    clinicalVignette: 'A 5-year-old boy is admitted with cerebral malaria and severe metabolic acidosis (deep breathing, Kussmaul respirations). Despite 24 hours of IV artesunate and normal glucose levels, he develops persistent refractory hypotension and cold extremities. Which common co-morbidity must be urgently suspected and treated in children with severe malaria and shock?',
    options: [
      { id: 'A', text: 'Concurrent invasive bacterial bacteremia / sepsis (e.g., non-typhoidal Salmonella or Gram-negative bacilli)' },
      { id: 'B', text: 'Acute viral myocarditis' },
      { id: 'C', text: 'Primary adrenal hypoplasia' },
      { id: 'D', text: 'Hypervitaminosis A' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Concurrent invasive bacterial bacteremia / sepsis (e.g., non-typhoidal Salmonella or Gram-negative bacilli)',
    explanation: 'Severe falciparum malaria compromises the gut mucosal barrier, leading to high rates (up to 15–20%) of concurrent invasive Non-Typhoidal Salmonella (NTS) and Gram-negative bacterial bacteremia / septic shock in children. Guidelines strongly recommend empirical broad-spectrum parenteral antibiotics (e.g., IV Ceftriaxone) in all children presenting with severe malaria, acidosis, shock, or clinical deterioration.',
    optionRationales: {
      A: 'Correct. Bacterial co-infection (especially Non-Typhoidal Salmonella) frequently complicates severe pediatric malaria and causes refractory shock.',
      B: 'Viral myocarditis is an uncommon sporadic entity.',
      C: 'Primary adrenal hypoplasia is a rare congenital disorder.',
      D: 'Hypervitaminosis A does not cause acute distributive shock.'
    },
    keyTakeaway: 'Children with severe malaria and circulatory shock require empirical broad-spectrum antibiotics (IV Ceftriaxone) for concurrent Gram-negative bacteremia.',
    sourcePageRef: 'Pages 26–27, Q3',
    difficulty: 'High Yield',
    tags: ['Cerebral Malaria', 'Bacterial Co-Infection', 'Salmonella', 'Septic Shock']
  },
  {
    id: 'mal_q4',
    topicId: 'malaria_management',
    topicTitle: 'Management of Malaria',
    questionNumber: 4,
    clinicalVignette: 'A 40-year-old man recovers from cerebral malaria after 3 days of IV artesunate. He is now fully conscious, tolerating oral intake, and needs a full oral Artemisinin-based Combination Therapy (ACT) to complete his 3-day course. Which oral ACT should be avoided in patients who have just recovered from cerebral malaria or have active psychiatric illness?',
    options: [
      { id: 'A', text: 'Artemether-Lumefantrine' },
      { id: 'B', text: 'Artesunate-Amodiaquine' },
      { id: 'C', text: 'Artesunate-Mefloquine' },
      { id: 'D', text: 'Dihydroartemisinin-Piperaquine' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Artesunate-Mefloquine',
    explanation: 'Mefloquine is known for neuropsychiatric adverse effects, including severe anxiety, depression, hallucinations, psychosis, sleep disturbances, and acute encephalopathy. Therefore, Artesunate-Mefloquine is strictly contraindicated in patients with a history of seizures, active psychiatric disorders, or patients who have just recovered from cerebral malaria.',
    optionRationales: {
      A: 'Artemether-lumefantrine is the preferred, safe first-line oral ACT following cerebral malaria.',
      B: 'Artesunate-amodiaquine is acceptable and lacks specific neurotoxicity.',
      C: 'Correct. Mefloquine carries severe neuropsychiatric toxicity risks and must be avoided post-cerebral malaria.',
      D: 'Dihydroartemisinin-piperaquine is a safe alternative.'
    },
    keyTakeaway: 'Mefloquine-containing ACT regimens are contraindicated following cerebral malaria due to neuropsychiatric toxicity.',
    sourcePageRef: 'Page 27, Q4',
    difficulty: 'Core Clinical',
    tags: ['Mefloquine', 'Cerebral Malaria', 'ACT Regimens', 'Neuropsychiatric Contraindications']
  },
  {
    id: 'mal_q5',
    topicId: 'malaria_management',
    topicTitle: 'Management of Malaria',
    questionNumber: 5,
    clinicalVignette: 'A 45-year-old man with severe malaria develops oliguria (<20 mL/hr) and profound metabolic acidosis. Serum creatinine is 580 µmol/L and serum potassium is 7.1 mmol/L. What is the definitive management for this severe complication of malaria?',
    options: [
      { id: 'A', text: 'High-dose loop diuretics (IV Furosemide 500 mg bolus)' },
      { id: 'B', text: 'Fluid boluses of 3 L normal saline over 1 hour' },
      { id: 'C', text: 'Urgent Renal Replacement Therapy (Hemodialysis or Hemofiltration)' },
      { id: 'D', text: 'Oral sodium bicarbonate tablets' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Urgent Renal Replacement Therapy (Hemodialysis or Hemofiltration)',
    explanation: 'Acute Kidney Injury (malarial nephropathy) occurs in up to 10–40% of adult severe falciparum malaria cases due to microvascular sequestration of parasitized RBCs, acute tubular necrosis, and intravascular hemolysis (blackwater fever). In the presence of severe oliguria, uremia, hyperkalemia (7.1 mmol/L), or refractory acidosis, urgent Renal Replacement Therapy (Hemodialysis) is life-saving and drastically reduces mortality.',
    optionRationales: {
      A: 'Loop diuretics do not improve renal recovery or survival in established ATN and waste valuable time.',
      B: 'Fluid overload in malarial AKI precipitates fatal non-cardiogenic pulmonary edema.',
      C: 'Correct. Emergent Hemodialysis is the definitive modality for malarial AKI with life-threatening hyperkalemia and uremia.',
      D: 'Oral bicarbonate is ineffective in acute anuric renal failure.'
    },
    keyTakeaway: 'Malarial acute kidney injury with severe hyperkalemia, refractory acidosis, or anuria requires urgent Renal Replacement Therapy.',
    sourcePageRef: 'Pages 27–28, Q5',
    difficulty: 'High Yield',
    tags: ['Malarial Nephropathy', 'Hemodialysis', 'Acute Tubular Necrosis', 'Severe Malaria']
  },

  // ----------------------------------------------------
  // INDICATION & COMPLICATIONS OF BLOOD TRANSFUSION (Pages 28-30)
  // ----------------------------------------------------
  {
    id: 'bt_q1',
    topicId: 'blood_transfusion',
    topicTitle: 'Indication & Complications of Blood Transfusion',
    questionNumber: 1,
    clinicalVignette: 'A 64-year-old man with stable coronary artery disease is admitted for elective total hip arthroplasty. On postoperative day 1, his hemoglobin is 7.6 g/dL. He is entirely asymptomatic, hemodynamically stable (BP 128/76 mmHg, HR 72 bpm), and walking with assistance. According to restrictive blood transfusion guidelines, what is the most appropriate management regarding blood transfusion?',
    options: [
      { id: 'A', text: 'Transfuse 2 units of packed red blood cells immediately to achieve a target hemoglobin >10 g/dL' },
      { id: 'B', text: 'Withhold blood transfusion; monitor clinically and provide oral iron supplementation if indicated' },
      { id: 'C', text: 'Transfuse 1 unit of whole blood' },
      { id: 'D', text: 'Administer recombinant erythropoietin stat' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Withhold blood transfusion; monitor clinically and provide oral iron supplementation if indicated',
    explanation: 'Modern evidence-based guidelines (AABB / TRICC trial) recommend a "restrictive transfusion strategy" for hospitalized, hemodynamically stable patients: transfusion of packed red blood cells is indicated only when hemoglobin falls below 7.0 g/dL (or below 8.0 g/dL in symptomatic cardiovascular disease / orthopedic surgery). Because this patient is stable, asymptomatic, and Hb is 7.6 g/dL, transfusion should be withheld.',
    optionRationales: {
      A: 'Liberal transfusion (target Hb >10 g/dL) provides no clinical benefit and increases transfusion-related morbidity.',
      B: 'Correct. Restrictive transfusion threshold (Hb < 7–8 g/dL) avoids unnecessary transfusions in stable asymptomatic patients.',
      C: 'Whole blood is not indicated for stable postoperative anemia.',
      D: 'Erythropoietin takes weeks to stimulate erythropoiesis and has no role in acute postoperative management.'
    },
    keyTakeaway: 'A restrictive transfusion strategy (withholding transfusion for Hb > 7.0–8.0 g/dL in asymptomatic stable patients) reduces morbidity and mortality.',
    sourcePageRef: 'Page 28, Q1',
    difficulty: 'High Yield',
    tags: ['Restrictive Transfusion', 'Hemoglobin Threshold', 'AABB Guidelines', 'Transfusion Medicine']
  },
  {
    id: 'bt_q2',
    topicId: 'blood_transfusion',
    topicTitle: 'Indication & Complications of Blood Transfusion',
    questionNumber: 2,
    clinicalVignette: 'A 50-year-old woman with decompensated alcoholic cirrhosis presents with active hematemesis. Her PT is 28 seconds (INR 2.4), aPTT is 58 seconds, and platelets are 85,000/µL. In addition to PRBCs for volume and oxygen delivery, which blood product is specifically indicated to correct multiple coagulation factor deficiencies in active bleeding?',
    options: [
      { id: 'A', text: 'Fresh Frozen Plasma (FFP)' },
      { id: 'B', text: 'Platelet concentrate' },
      { id: 'C', text: 'Granulocyte concentrate' },
      { id: 'D', text: 'Albumin 20%' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Fresh Frozen Plasma (FFP)',
    explanation: 'Fresh Frozen Plasma (FFP) contains all soluble coagulation factors and fibrinogen. It is indicated for the replacement of multiple coagulation factor deficiencies in actively bleeding patients or patients undergoing urgent invasive procedures with elevated PT/INR or aPTT.',
    optionRationales: {
      A: 'Correct. FFP replaces multiple clotting factors in active bleeding coagulopathy with elevated INR.',
      B: 'Platelet concentrate is indicated for severe thrombocytopenia (<50,000/uL with active bleeding).',
      C: 'Granulocyte concentrates are reserved for rare refractory neutropenic fungal infections.',
      D: 'Albumin expands volume but contains zero clotting factors.'
    },
    keyTakeaway: 'Fresh Frozen Plasma (FFP) is indicated to correct multiple clotting factor deficiencies in actively bleeding patients with coagulopathy.',
    sourcePageRef: 'Pages 28–29, Q2',
    difficulty: 'Core Clinical',
    tags: ['Fresh Frozen Plasma', 'FFP', 'Coagulopathy', 'Active Hemorrhage']
  },
  {
    id: 'bt_q3',
    topicId: 'blood_transfusion',
    topicTitle: 'Indication & Complications of Blood Transfusion',
    questionNumber: 3,
    clinicalVignette: 'A 72-year-old woman with stage 4 CKD and ischemic cardiomyopathy receives 2 units of packed red blood cells over 2 hours for symptomatic anemia. Near the end of the second unit, she develops acute severe dyspnea, tachypnea, orthopnea, and hypertension (BP 185/100 mmHg). Examination shows elevated JVP, bilateral diffuse lung crackles, and an S3 gallop. Echocardiogram shows elevated left atrial filling pressures. What is the diagnosis?',
    options: [
      { id: 'A', text: 'Transfusion-Related Acute Lung Injury (TRALI)' },
      { id: 'B', text: 'Transfusion-Associated Circulatory Overload (TACO)' },
      { id: 'C', text: 'Acute hemolytic transfusion reaction' },
      { id: 'D', text: 'Anaphylactic transfusion reaction' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Transfusion-Associated Circulatory Overload (TACO)',
    explanation: 'This presentation (acute pulmonary edema, severe hypertension, elevated JVP, S3 gallop, response to diuretics in a patient with cardiac/renal compromise) is diagnostic of Transfusion-Associated Circulatory Overload (TACO). In contrast, TRALI is non-cardiogenic pulmonary edema with normal or low JVP, hypotension, fever, and leukopenia, caused by donor anti-HLA/HNA antibodies attacking recipient pulmonary endothelium.',
    optionRationales: {
      A: 'TRALI is non-cardiogenic pulmonary edema with normal/low JVP, hypotension, and fever.',
      B: 'Correct. Hydrostatic pulmonary edema + hypertension + elevated JVP + S3 gallop = TACO.',
      C: 'Acute hemolytic reactions present with flank pain, fever, hemoglobinuria, DIC, and shock.',
      D: 'Anaphylaxis presents with bronchospasm, angioedema, urticaria, and hypotension.'
    },
    keyTakeaway: 'TACO causes hydrostatic pulmonary edema, hypertension, and elevated JVP during/after rapid blood transfusion, treated with diuretics.',
    sourcePageRef: 'Page 29, Q3',
    difficulty: 'High Yield',
    tags: ['TACO vs TRALI', 'Circulatory Overload', 'Pulmonary Edema', 'Transfusion Complications']
  },
  {
    id: 'bt_q4',
    topicId: 'blood_transfusion',
    topicTitle: 'Indication & Complications of Blood Transfusion',
    questionNumber: 4,
    clinicalVignette: 'A 32-year-old trauma patient with massive pelvic hemorrhage receives 10 units of packed red blood cells. Laboratory evaluation reveals: Platelets 45,000/µL, INR 2.1, and Plasma Fibrinogen 65 mg/dL (0.65 g/L; normal > 150–200 mg/dL). Which specialized blood component is the most concentrated source of fibrinogen to treat this severe hypofibrinogenemia?',
    options: [
      { id: 'A', text: 'Packed Red Blood Cells' },
      { id: 'B', text: 'Cryoprecipitate' },
      { id: 'C', text: 'Unfractionated Heparin' },
      { id: 'D', text: 'Normal saline infusion' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Cryoprecipitate',
    explanation: 'Cryoprecipitate is prepared by thawing FFP at 1–6°C and collecting the cold-insoluble precipitate. It contains high concentrations of Fibrinogen (Factor I, ~150–250 mg per unit), Factor VIII, von Willebrand Factor (vWF), and Factor XIII. It is the blood component of choice for treating hypofibrinogenemia (<100–150 mg/dL) in massive hemorrhage, trauma, or DIC.',
    optionRationales: {
      A: 'PRBCs provide red cells and zero clotting factors.',
      B: 'Correct. Cryoprecipitate is rich in Fibrinogen, Factor VIII, and vWF, making it first-line for severe hypofibrinogenemia (<100 mg/dL).',
      C: 'Heparin is an anticoagulant that would exacerbate massive bleeding.',
      D: 'Normal saline dilutes clotting factors and worsens hypofibrinogenemia.'
    },
    keyTakeaway: 'Cryoprecipitate provides concentrated Fibrinogen and is the treatment of choice for severe hypofibrinogenemia (<100–150 mg/dL) during massive hemorrhage.',
    sourcePageRef: 'Pages 29–30, Q4',
    difficulty: 'High Yield',
    tags: ['Cryoprecipitate', 'Fibrinogen', 'Hypofibrinogenemia', 'Massive Transfusion']
  },
  {
    id: 'bt_q5',
    topicId: 'blood_transfusion',
    topicTitle: 'Indication & Complications of Blood Transfusion',
    questionNumber: 5,
    clinicalVignette: 'A 28-year-old woman receives a unit of PRBCs. Five minutes into the transfusion, she complains of severe burning pain along the infusion vein, intense flank/back pain, chills, and shortness of breath. Temperature is 39.1°C, BP drops from 120/80 to 75/40 mmHg, and freshly voided urine in her Foley catheter is dark burgundy red. What is the immediate sequence of actions?',
    options: [
      { id: 'A', text: 'Slow the transfusion to half rate and give oral paracetamol' },
      { id: 'B', text: 'Stop the transfusion immediately, maintain IV access with normal saline, check clerical identity, and send blood/urine samples for hemolysis workup' },
      { id: 'C', text: 'Continue transfusion and give IV furosemide' },
      { id: 'D', text: 'Administer broad-spectrum antibiotics and resume transfusion' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Stop the transfusion immediately, maintain IV access with normal saline, check clerical identity, and send blood/urine samples for hemolysis workup',
    explanation: 'This describes an Acute Hemolytic Transfusion Reaction (AHTR), most commonly caused by ABO incompatibility due to clerical error. Preformed recipient IgM antibodies bind donor RBC antigens, activating the complement cascade (intravascular hemolysis, flank pain, hemoglobinuria, hypotension, and DIC). The immediate mandatory action is: (1) STOP transfusion instantly, (2) keep IV line open with fresh normal saline, (3) verify patient identity against unit labels, and (4) send blood/urine for repeat crossmatch, direct Coombs test, and free hemoglobin.',
    optionRationales: {
      A: 'Slowing the infusion in acute ABO hemolysis causes lethal massive intravascular hemolysis and renal failure.',
      B: 'Correct. Immediate cessation of transfusion, IV fluid maintenance, and clerical/laboratory investigation is mandatory.',
      C: 'Continuing the transfusion will result in fatal circulatory collapse and acute renal failure.',
      D: 'Antibiotics do not treat immune ABO incompatibility.'
    },
    keyTakeaway: 'Acute hemolytic transfusion reaction requires immediate cessation of transfusion, IV fluid support, and clerical/laboratory verification.',
    sourcePageRef: 'Page 30, Q5',
    difficulty: 'High Yield',
    tags: ['Acute Hemolytic Reaction', 'ABO Incompatibility', 'Transfusion Emergency', 'Hemoglobinuria']
  },

  // ----------------------------------------------------
  // MANAGEMENT OF TETANUS (Pages 49-50)
  // ----------------------------------------------------
  {
    id: 'tet_q1',
    topicId: 'tetanus_management',
    topicTitle: 'Management of Tetanus',
    questionNumber: 1,
    clinicalVignette: 'A 68-year-old unimmunized farmer sustains a deep puncture wound to his foot contaminated with animal manure 4 days ago. He presents with trismus (lockjaw), risus sardonicus, and painful reflex muscle spasms triggered by light and touch. Which of the following clinical features is associated with the poorest prognosis in tetanus (highest mortality)?',
    options: [
      { id: 'A', text: 'Incubation period < 7 days and period of onset (first symptom to first reflex spasm) < 48 hours' },
      { id: 'B', text: 'Incubation period > 14 days and period of onset > 7 days' },
      { id: 'C', text: 'Young adult age (20–30 years)' },
      { id: 'D', text: 'Absence of autonomic instability' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Incubation period < 7 days and period of onset (first symptom to first reflex spasm) < 48 hours',
    explanation: 'According to the Patel-Joag and Ablett clinical grading scales for tetanus, the strongest predictors of poor prognosis and high mortality are: (1) Short incubation period (< 7 days from injury to first symptom), (2) Short period of onset (< 48 hours from initial symptom like trismus to first generalized reflex spasm), (3) Extremes of age (neonates and elderly >60 years), and (4) Development of autonomic nervous system dysfunction (labile hypertension, tachycardia, hyperpyrexia).',
    optionRationales: {
      A: 'Correct. Incubation period <7 days and onset period <48h indicate massive toxin load and poor prognosis.',
      B: 'Longer incubation (>14d) and longer onset periods indicate milder disease with good prognosis.',
      C: 'Young adults have lower mortality compared to neonates and the elderly.',
      D: 'Absence of autonomic instability is a favorable prognostic feature.'
    },
    keyTakeaway: 'Short incubation period (<7 days) and short onset period (<48 hours) are the classic poor prognostic indicators in generalized tetanus.',
    sourcePageRef: 'Pages 49–50, Q1',
    difficulty: 'High Yield',
    tags: ['Tetanus', 'Prognostic Indicators', 'Incubation Period', 'Period of Onset']
  },
  {
    id: 'tet_q2',
    topicId: 'tetanus_management',
    topicTitle: 'Management of Tetanus',
    questionNumber: 2,
    clinicalVignette: 'A 9-year-old child presents with chronic suppurative otitis media and develops ipsilateral lower motor neuron facial nerve palsy (facial asymmetry) along with trismus and difficulty swallowing. What specialized form of tetanus is this, and what is its clinical significance?',
    options: [
      { id: 'A', text: 'Neonatal tetanus' },
      { id: 'B', text: 'Cephalic tetanus; carries high mortality due to rapid involvement of bulbar and respiratory muscles' },
      { id: 'C', text: 'Local tetanus of the upper limb' },
      { id: 'D', text: 'Subacute tetanus with excellent prognosis' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Cephalic tetanus; carries high mortality due to rapid involvement of bulbar and respiratory muscles',
    explanation: 'Cephalic tetanus is a rare, severe localized form of tetanus occurring after head/neck injuries or chronic otitis media. Clostridium tetani produces tetanospasmin that ascends cranial nerves, characteristically presenting with cranial nerve palsies (most commonly CN VII facial palsy, or CN III, IV, VI, IX, X) combined with trismus. It frequently generalizes and carries an exceptionally high mortality rate due to early laryngeal spasm and bulbar respiratory failure.',
    optionRationales: {
      A: 'Neonatal tetanus occurs via umbilical cord contamination in newborns of unimmunized mothers.',
      B: 'Correct. Cephalic tetanus follows head trauma/otitis media, causes cranial nerve palsies (CN VII), and carries high mortality.',
      C: 'Local tetanus of an extremity causes persistent muscle rigidity confined to that limb.',
      D: 'Cephalic tetanus is severe and high-risk, not subacute or benign.'
    },
    keyTakeaway: 'Cephalic tetanus follows head wounds or otitis media, presents with cranial nerve palsies (CN VII) and trismus, and carries high mortality.',
    sourcePageRef: 'Page 50, Q2',
    difficulty: 'High Yield',
    tags: ['Cephalic Tetanus', 'Facial Palsy', 'Otitis Media', 'Tetanospasmin']
  },
  {
    id: 'tet_q3',
    topicId: 'tetanus_management',
    topicTitle: 'Management of Tetanus',
    questionNumber: 3,
    clinicalVignette: 'A patient with moderate-to-severe generalized tetanus is admitted to the medical ward. Why is it essential to nurse the patient in a quiet, isolated, darkened room with minimal physical disturbance and clustering of nursing interventions?',
    options: [
      { id: 'A', text: 'To prevent secondary airborne transmission to other patients' },
      { id: 'B', text: 'Because reflex tetanic spasms and autonomic storms are easily provoked by trivial auditory, visual, or tactile sensory stimuli' },
      { id: 'C', text: 'To allow continuous phototherapy' },
      { id: 'D', text: 'Because tetanospasmin is inactivated by darkness' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Because reflex tetanic spasms and autonomic storms are easily provoked by trivial auditory, visual, or tactile sensory stimuli',
    explanation: 'Tetanospasmin retrogradely travels to inhibitory interneurons (Renshaw cells) in the spinal cord and brainstem, blocking the vesicular release of GABA and glycine. This loss of central inhibition creates profound hyperexcitability where trivial external sensory stimuli (loud sounds, bright lights, sudden touch, cold drafts) trigger violent reflex tetanic muscle spasms, laryngeal spasm, and autonomic storms.',
    optionRationales: {
      A: 'Tetanus is not contagious and cannot be transmitted person-to-person via airborne droplets.',
      B: 'Correct. Tetanic reflex spasms are triggered by sensory stimuli; nursing in a quiet, dark environment prevents life-threatening spasms.',
      C: 'Phototherapy is used for neonatal hyperbilirubinemia, not tetanus.',
      D: 'Darkness has no direct chemical neutralizing effect on the toxin.'
    },
    keyTakeaway: 'Tetanus patients must be nursed in a quiet, darkened room because minor auditory, tactile, or visual stimuli trigger violent reflex spasms.',
    sourcePageRef: 'Page 50, Q3',
    difficulty: 'Core Clinical',
    tags: ['Tetanus Nursing Care', 'Reflex Spasms', 'Environmental Control', 'Sensory Triggers']
  },

  // ----------------------------------------------------
  // TYPES & INDICATIONS OF BIOPSY NEEDLES (Page 51)
  // ----------------------------------------------------
  {
    id: 'bn_q1',
    topicId: 'biopsy_needles',
    topicTitle: 'Types & Indications of Biopsy Needles',
    questionNumber: 1,
    clinicalVignette: 'A 42-year-old man presents with a large unilateral exudative pleural effusion suspicious for tuberculous pleurisy. Which specialized biopsy needle has a retractable cutting hook mechanism designed for performing closed percutaneous pleural biopsy?',
    options: [
      { id: 'A', text: 'Abrams needle (or Cope needle)' },
      { id: 'B', text: 'Menghini needle' },
      { id: 'C', text: 'Jamshidi needle' },
      { id: 'D', text: 'Vim-Silverman needle' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Abrams needle (or Cope needle)',
    explanation: 'The Abrams Needle (and Cope needle) is classically designed for closed percutaneous pleural biopsy. It consists of an outer cannula with a blunt tip and a lateral cutting notch/hook. Once inserted into the fluid-filled pleural space, the needle is pulled back until the hook catches the parietal pleura, and the inner cutting cylinder is rotated to shear off a specimen of parietal pleura for histological and microbiological examination (e.g., diagnosing tuberculous pleuritis or malignant pleural mesothelioma).',
    optionRationales: {
      A: 'Correct. Abrams needle is the classic instrument for closed percutaneous pleural biopsy.',
      B: 'Menghini needle is a suction needle for percutaneous liver biopsy.',
      C: 'Jamshidi needle is used for bone marrow aspiration and core trephine biopsy.',
      D: 'Vim-Silverman needle is a split-prong needle historically used for solid organ/prostate biopsy.'
    },
    keyTakeaway: 'The Abrams needle is the dedicated instrument for closed percutaneous parietal pleural biopsy in exudative pleural effusions.',
    sourcePageRef: 'Page 51, Q1',
    difficulty: 'High Yield',
    tags: ['Abrams Needle', 'Pleural Biopsy', 'Tuberculous Pleurisy', 'Instruments']
  },
  {
    id: 'bn_q2',
    topicId: 'biopsy_needles',
    topicTitle: 'Types & Indications of Biopsy Needles',
    questionNumber: 2,
    clinicalVignette: 'A 55-year-old woman with chronic hepatitis B and elevated transaminases is scheduled for a percutaneous parenchymal liver biopsy. Which needle utilizes a rapid "1-second suction-aspiration" technique to obtain a cylindrical core of hepatic parenchyma?',
    options: [
      { id: 'A', text: 'Menghini needle' },
      { id: 'B', text: 'Abrams needle' },
      { id: 'C', text: 'Jamshidi needle' },
      { id: 'D', text: 'Spinal needle (Quincke)' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Menghini needle',
    explanation: 'The Menghini Needle is a dedicated suction-based biopsy needle used for percutaneous liver biopsy. It features a beveled cutting tip with an internal locking nail (to prevent aspirated tissue from being sucked into the syringe). A syringe creates negative pressure, and the needle is rapidly thrust into and withdrawn from the liver parenchyma within 1 second during full expiration ("1-second liver biopsy technique"), minimizing respiratory tearing and hemorrhagic complications.',
    optionRationales: {
      A: 'Correct. Menghini needle operates by rapid 1-second suction-aspiration for percutaneous liver biopsies.',
      B: 'Abrams needle is used for pleural biopsy.',
      C: 'Jamshidi needle is used for bone marrow trephine biopsy.',
      D: 'Quincke spinal needle is used for lumbar puncture / CSF access.'
    },
    keyTakeaway: 'The Menghini needle uses a rapid suction-aspiration technique for percutaneous liver biopsy.',
    sourcePageRef: 'Page 51, Q2',
    difficulty: 'High Yield',
    tags: ['Menghini Needle', 'Liver Biopsy', 'Suction Technique', 'Instruments']
  },

  // ----------------------------------------------------
  // COMPARISON OF CT SCAN & MRI IN STROKE MANAGEMENT (Pages 52-53)
  // ----------------------------------------------------
  {
    id: 'stroke_q1',
    topicId: 'stroke_imaging',
    topicTitle: 'Comparison of CT Scan & MRI in Stroke Management',
    questionNumber: 1,
    clinicalVignette: 'A 65-year-old man presents with sudden-onset right-sided hemiplegia and expressive aphasia 75 minutes ago. What is the mandatory, primary first-line neuroimaging modality that must be acquired immediately upon hospital arrival, and what is its principal clinical objective?',
    options: [
      { id: 'A', text: 'Diffusion-Weighted MRI (DWI); to measure the exact core infarct volume' },
      { id: 'B', text: 'Non-Contrast Computed Tomography (NCCT) Brain; to rapidly exclude acute intracerebral hemorrhage prior to thrombolytic therapy' },
      { id: 'C', text: 'Conventional digital subtraction cerebral angiography' },
      { id: 'D', text: 'Positron Emission Tomography (PET) scan' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Non-Contrast Computed Tomography (NCCT) Brain; to rapidly exclude acute intracerebral hemorrhage prior to thrombolytic therapy',
    explanation: 'In acute stroke within the potential thrombolysis window (<4.5 hours), Non-Contrast CT Brain (NCCT) is the worldwide standard first-line neuroimaging. Its paramount, indispensable goal is rapid exclusion of acute Intracerebral Hemorrhage (ICH, which appears as hyperdense bright white blood) and large established territory infarctions before administering IV thrombolytic therapy (Alteplase/Tenecteplase).',
    optionRationales: {
      A: 'MRI DWI is more sensitive for acute ischemia, but NCCT is faster, widely accessible, and standard for emergency triage.',
      B: 'Correct. NCCT Brain is the mandatory first-line test to rule out acute intracranial hemorrhage before IV thrombolysis.',
      C: 'Catheter angiography is invasive and reserved for mechanical thrombectomy, not initial triage.',
      D: 'PET imaging has no role in emergency stroke triage.'
    },
    keyTakeaway: 'Non-Contrast CT Brain is the mandatory initial imaging in acute stroke, performed primarily to rule out hemorrhage prior to thrombolysis.',
    sourcePageRef: 'Page 52, Q1',
    difficulty: 'High Yield',
    tags: ['Acute Stroke', 'NCCT Brain', 'Intracerebral Hemorrhage', 'Thrombolysis Triage']
  },
  {
    id: 'stroke_q2',
    topicId: 'stroke_imaging',
    topicTitle: 'Comparison of CT Scan & MRI in Stroke Management',
    questionNumber: 2,
    clinicalVignette: 'A 58-year-old woman presents with acute severe vertigo, ataxia, vomiting, and dysphagia. A non-contrast head CT performed 2 hours after symptom onset shows no abnormalities. Why is Brain MRI with Diffusion-Weighted Imaging (DWI) significantly superior to CT scan in this clinical scenario?',
    options: [
      { id: 'A', text: 'CT scan has beam-hardening artifacts from dense petrous temporal bones and poor spatial resolution for acute posterior fossa (brainstem/cerebellar) infarctions' },
      { id: 'B', text: 'CT scan cannot detect bone' },
      { id: 'C', text: 'MRI uses ionizing radiation that enhances posterior fossa tissue' },
      { id: 'D', text: 'DWI only detects chronic old infarctions' }
    ],
    correctOption: 'A',
    correctAnswerText: 'CT scan has beam-hardening artifacts from dense petrous temporal bones and poor spatial resolution for acute posterior fossa (brainstem/cerebellar) infarctions',
    explanation: 'Non-contrast CT is notoriously insensitive (>50–70% false negative rate) for acute infarctions in the Posterior Fossa (brainstem, pons, cerebellum) due to dense "beam-hardening" streak artifacts cast by the surrounding petrous and occipital skull bones. MRI with Diffusion-Weighted Imaging (DWI) has supreme spatial resolution, is unaffected by bone beam-hardening, and detects acute cytotoxic edema in the brainstem/cerebellum within minutes.',
    optionRationales: {
      A: 'Correct. Bone beam-hardening artifacts obscure the posterior fossa on CT; MRI DWI is vastly superior for brainstem/cerebellar strokes.',
      B: 'CT excels at bone visualization.',
      C: 'MRI uses magnetic fields and radiofrequency waves, not ionizing radiation.',
      D: 'DWI specifically detects acute cytotoxic edema within minutes of ischemia.'
    },
    keyTakeaway: 'MRI with DWI is vastly superior to CT for detecting acute posterior fossa (brainstem and cerebellar) ischemic strokes.',
    sourcePageRef: 'Pages 52–53, Q2',
    difficulty: 'High Yield',
    tags: ['Posterior Fossa Stroke', 'DWI MRI', 'Beam-Hardening Artifact', 'Brainstem Ischemia']
  },
  {
    id: 'stroke_q3',
    topicId: 'stroke_imaging',
    topicTitle: 'Comparison of CT Scan & MRI in Stroke Management',
    questionNumber: 3,
    clinicalVignette: 'A 70-year-old man goes to bed normal at 22:00 and wakes up at 06:00 with left-sided hemiparesis ("wake-up stroke" / unknown time of onset). Emergency Brain MRI demonstrates a high-signal lesion on Diffusion-Weighted Imaging (DWI) in the right middle cerebral artery territory, but Fluid-Attenuated Inversion Recovery (FLAIR) imaging is completely normal in the same territory ("DWI-FLAIR mismatch"). What is the clinical significance of this finding?',
    options: [
      { id: 'A', text: 'It proves the stroke occurred more than 24 hours ago' },
      { id: 'B', text: 'It indicates the ischemic core is very young (<4.5 hours old), making the patient eligible for IV thrombolysis despite unknown symptom onset time' },
      { id: 'C', text: 'It confirms an intracranial hemorrhage' },
      { id: 'D', text: 'It indicates irreversible pan-necrosis with zero salvageable penumbra' }
    ],
    correctOption: 'B',
    correctAnswerText: 'It indicates the ischemic core is very young (<4.5 hours old), making the patient eligible for IV thrombolysis despite unknown symptom onset time',
    explanation: 'Cytotoxic edema causes restricted water diffusion visible on DWI within minutes of ischemic onset, whereas vasogenic edema and parenchymal signal hyperintensity take 4 to 6 hours to become visible on FLAIR sequences. A positive DWI with a negative FLAIR ("DWI-FLAIR Mismatch") proves that the ischemic stroke is hyperacute (<4.5 hours old). According to landmark clinical trials (WAKE-UP trial), these patients benefit safely from IV thrombolysis.',
    optionRationales: {
      A: 'A stroke >4.5–6 hours old would show prominent hyperintensity on both DWI and FLAIR.',
      B: 'Correct. DWI-FLAIR mismatch establishes hyperacute ischemia (<4.5h), qualifying wake-up stroke patients for IV thrombolytic therapy.',
      C: 'Hemorrhage is seen on GRE/SWI sequences.',
      D: 'DWI-FLAIR mismatch proves tissue was very recently ischemic with large salvageable potential.'
    },
    keyTakeaway: 'DWI-FLAIR mismatch (positive DWI, negative FLAIR) identifies hyperacute ischemic stroke (<4.5h) eligible for thrombolysis in wake-up strokes.',
    sourcePageRef: 'Page 53, Q3',
    difficulty: 'High Yield',
    tags: ['Wake-Up Stroke', 'DWI-FLAIR Mismatch', 'Thrombolysis', 'Neuroimaging']
  },
  {
    id: 'stroke_q4',
    topicId: 'stroke_imaging',
    topicTitle: 'Comparison of CT Scan & MRI in Stroke Management',
    questionNumber: 4,
    clinicalVignette: 'A 60-year-old woman receives IV alteplase for acute ischemic stroke. Two hours into post-thrombolytic monitoring, she suddenly develops a severe headache, acute vomiting, and her GCS drops from 14 to 8. Her BP surges to 200/110 mmHg. What is the immediate neuroimaging step?',
    options: [
      { id: 'A', text: 'Repeat urgent non-contrast CT Brain immediately to evaluate for symptomatic post-thrombolytic Intracerebral Hemorrhage (sICH)' },
      { id: 'B', text: 'Schedule an elective MRI for next morning' },
      { id: 'C', text: 'Perform a lumbar puncture' },
      { id: 'D', text: 'EEG monitoring' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Repeat urgent non-contrast CT Brain immediately to evaluate for symptomatic post-thrombolytic Intracerebral Hemorrhage (sICH)',
    explanation: 'Sudden neurological deterioration (headache, vomiting, GCS drop >= 2 points, hypertension) during or following IV thrombolysis is a red-flag sign of symptomatic post-thrombolytic Intracerebral Hemorrhage (sICH, occurring in ~3–6% of cases). The infusion must be halted immediately, and an emergent repeat Non-Contrast CT Brain obtained stat to confirm hemorrhage and guide emergency reversal (cryoprecipitate, tranexamic acid, platelets).',
    optionRationales: {
      A: 'Correct. Immediate repeat NCCT Brain is required to detect hemorrhagic transformation and initiate emergent coagulopathy reversal.',
      B: 'Elective MRI delays critical life-saving hematoma reversal.',
      C: 'Lumbar puncture in a coagulopathic thrombolyzed patient is dangerous and does not diagnose intracerebral hemorrhage.',
      D: 'EEG does not evaluate acute structural hemorrhage.'
    },
    keyTakeaway: 'Neurological deterioration post-thrombolysis demands immediate cessation of tPA and an emergent Non-Contrast CT Brain to rule out sICH.',
    sourcePageRef: 'Page 53, Q4',
    difficulty: 'High Yield',
    tags: ['Symptomatic Hemorrhage', 'sICH', 'Alteplase Complication', 'Emergency CT']
  },
  {
    id: 'stroke_q5',
    topicId: 'stroke_imaging',
    topicTitle: 'Comparison of CT Scan & MRI in Stroke Management',
    questionNumber: 5,
    clinicalVignette: 'A 72-year-old hypertensive man presents with sudden-onset left hemiplegia and stupor. Non-contrast CT Brain shows a 45 mL well-circumscribed, high-attenuation (hyperdense, 60–80 Hounsfield units) homogeneous mass in the right putamen and internal capsule with surrounding hypodense vasogenic edema and midline shift. What is the diagnosis?',
    options: [
      { id: 'A', text: 'Acute hypertensive basal ganglia Intracerebral Hemorrhage (ICH)' },
      { id: 'B', text: 'Acute ischemic infarct in MCA territory' },
      { id: 'C', text: 'Glioblastoma multiforme' },
      { id: 'D', text: 'Multiple sclerosis plaque' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Acute hypertensive basal ganglia Intracerebral Hemorrhage (ICH)',
    explanation: 'On non-contrast CT, acute un-clotted extravasated blood contains concentrated hemoglobin with high electron density, appearing as a characteristic bright white / hyperdense region (60–80 Hounsfield units). In chronic hypertensive patients, rupture of Charcot-Bouchard microaneurysms in lenticulostriate penetrating arteries classically causes parenchymal Intracerebral Hemorrhage in the basal ganglia (putamen/internal capsule).',
    optionRationales: {
      A: 'Correct. Hyperdense lesion in the putamen/internal capsule on NCCT is pathognomonic for acute hypertensive intracerebral hemorrhage.',
      B: 'Acute ischemic infarction appears hypodense (dark) or normal early on CT.',
      C: 'Glioblastoma shows irregular ring enhancement with necrotic center on contrast imaging.',
      D: 'MS plaques are non-mass lesions in periventricular white matter.'
    },
    keyTakeaway: 'Acute intracerebral hemorrhage appears as a hyperdense (bright white, 60–80 HU) mass on non-contrast CT, classically in the basal ganglia in hypertension.',
    sourcePageRef: 'Page 53, Q5',
    difficulty: 'High Yield',
    tags: ['Intracerebral Hemorrhage', 'Basal Ganglia', 'Hounsfield Units', 'Hyperdensity']
  },

  // ----------------------------------------------------
  // MANAGEMENT OF ERECTILE DYSFUNCTION (Pages 56-57)
  // ----------------------------------------------------
  {
    id: 'ed_q1',
    topicId: 'erectile_dysfunction',
    topicTitle: 'Management of Erectile Dysfunction',
    questionNumber: 1,
    clinicalVignette: 'A 28-year-old man presents with inability to achieve an erection during intercourse with his partner for the past 4 months. He has no vascular risk factors and takes no medications. Detailed history reveals that he has normal, rigid early-morning and nocturnal penile tumescence (nocturnal erections) and normal erections during masturbation. Physical examination is entirely normal. What is the primary etiology of this patient\'s erectile dysfunction?',
    options: [
      { id: 'A', text: 'Severe cavernous arterial insufficiency' },
      { id: 'B', text: 'Psychogenic erectile dysfunction (performance anxiety)' },
      { id: 'C', text: 'Primary hypogonadism' },
      { id: 'D', text: 'Autonomic neuropathy' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Psychogenic erectile dysfunction (performance anxiety)',
    explanation: 'The preservation of spontaneous nocturnal and early-morning erections, as well as normal erections during masturbation, demonstrates that the neurovascular and cavernosal anatomy are fully intact. Sudden onset of erectile failure confined to sexual intercourse in a young healthy male is classic for Psychogenic Erectile Dysfunction (driven by performance anxiety and sympathetic adrenergic vasoconstriction).',
    optionRationales: {
      A: 'Arterial disease causes progressive loss of all erections, including nocturnal tumescence.',
      B: 'Correct. Preserved nocturnal erections with situational failure during intercourse is pathognomonic for psychogenic ED.',
      C: 'Hypogonadism causes loss of libido and loss of nocturnal erections with low morning testosterone.',
      D: 'Neuropathy impairs reflexive and nocturnal erections.'
    },
    keyTakeaway: 'Preservation of nocturnal/morning erections confirms intact neurovascular anatomy and points to Psychogenic Erectile Dysfunction.',
    sourcePageRef: 'Page 56, Q1',
    difficulty: 'High Yield',
    tags: ['Erectile Dysfunction', 'Psychogenic ED', 'Nocturnal Erections', 'Performance Anxiety']
  },
  {
    id: 'ed_q2',
    topicId: 'erectile_dysfunction',
    topicTitle: 'Management of Erectile Dysfunction',
    questionNumber: 2,
    clinicalVignette: 'A 58-year-old diabetic man with a 10-year history of erectile dysfunction has failed maximum doses of oral Sildenafil and Tadalafil. He has no Peyronie\'s disease. What is the recommended second-line pharmacological therapy for erectile dysfunction following oral PDE-5 inhibitor failure?',
    options: [
      { id: 'A', text: 'Intracavernosal injection of Prostaglandin E1 (Alprostadil)' },
      { id: 'B', text: 'Oral testosterone in a patient with normal serum testosterone' },
      { id: 'C', text: 'Penile prosthesis implantation as immediate second line' },
      { id: 'D', text: 'Oral herbal supplements' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Intracavernosal injection of Prostaglandin E1 (Alprostadil)',
    explanation: 'When oral phosphodiesterase-5 (PDE-5) inhibitors fail or are contraindicated, second-line therapy is Intracavernosal Injection (ICI) or intraurethral suppository of Alprostadil (Prostaglandin E1 / PGE1), either alone or in combination with phentolamine and papaverine (Trimix). PGE1 directly stimulates adenylate cyclase and intracellular cAMP, causing cavernous smooth muscle relaxation independent of nitric oxide synthesis.',
    optionRationales: {
      A: 'Correct. Intracavernosal Alprostadil (PGE1) injection is the established second-line therapy after PDE-5i failure.',
      B: 'Testosterone supplementation is ineffective and unjustified in eugonadal men with normal testosterone levels.',
      C: 'Penile prosthesis (inflatable/malleable implant) is third-line surgical therapy when pharmacological modalities fail.',
      D: 'Herbal supplements lack efficacy and frequently contain unregulated contaminants.'
    },
    keyTakeaway: 'Intracavernosal Alprostadil (Prostaglandin E1) is the standard second-line treatment for erectile dysfunction refractory to oral PDE-5 inhibitors.',
    sourcePageRef: 'Pages 56–57, Q2',
    difficulty: 'High Yield',
    tags: ['Alprostadil', 'Intracavernosal Injection', 'PDE-5 Failure', 'PGE1']
  },
  {
    id: 'ed_q3',
    topicId: 'erectile_dysfunction',
    topicTitle: 'Management of Erectile Dysfunction',
    questionNumber: 3,
    clinicalVignette: 'A 62-year-old man with hypertension and coronary artery disease taking daily Isosorbide Mononitrate and sublingual Nitroglycerin for stable angina asks for a prescription of Sildenafil for erectile dysfunction. Why is the co-administration of Sildenafil and organic nitrates strictly contraindicated?',
    options: [
      { id: 'A', text: 'Sildenafil accelerates the metabolic breakdown of nitrates' },
      { id: 'B', text: 'Synergistic accumulation of cyclic GMP causes profound, life-threatening systemic vasodilation, refractory hypotension, and cardiac arrest' },
      { id: 'C', text: 'Nitrates block the absorption of sildenafil from the stomach' },
      { id: 'D', text: 'The combination induces acute hypercalcemic crisis' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Synergistic accumulation of cyclic GMP causes profound, life-threatening systemic vasodilation, refractory hypotension, and cardiac arrest',
    explanation: 'Nitrates donate nitric oxide (NO) which activates guanylate cyclase, increasing intracellular cyclic GMP (cGMP). Sildenafil and other PDE-5 inhibitors block the enzyme that degrades cGMP. When co-administered, massive synergistic accumulation of cGMP causes profound systemic arterial and venous vasodilation, severe unmanageable hypotension, coronary hypoperfusion, myocardial infarction, and death.',
    optionRationales: {
      A: 'PDE-5 inhibitors do not accelerate nitrate metabolism.',
      B: 'Correct. Synergistic cGMP accumulation causes catastrophic systemic vasodilation, fatal hypotension, and shock.',
      C: 'Nitrates do not impair sildenafil absorption.',
      D: 'Calcium metabolism is not involved in cGMP-mediated vasodilation.'
    },
    keyTakeaway: 'Co-administration of PDE-5 inhibitors (Sildenafil) and Nitrates is strictly contraindicated due to catastrophic synergistic cGMP accumulation and fatal hypotension.',
    sourcePageRef: 'Page 57, Q3',
    difficulty: 'High Yield',
    tags: ['Sildenafil', 'Nitrates Contraindication', 'cGMP', 'Hypotension']
  },

  // ----------------------------------------------------
  // PRINCIPLES OF ANTIBIOTIC USE (Pages 67-70)
  // ----------------------------------------------------
  {
    id: 'abx_q1',
    topicId: 'antibiotic_principles',
    topicTitle: 'Principles of Antibiotic Use',
    questionNumber: 1,
    clinicalVignette: 'A 58-year-old man is admitted with severe sepsis secondary to pyelonephritis and started empirically on IV Meropenem and Vancomycin. On day 3, urine and blood cultures grow Escherichia coli sensitive to Ceftriaxone, Ciprofloxacin, and Meropenem, but resistant to Ampicillin. He is clinically improving and afebrile. According to antimicrobial stewardship principles, what is the best next step in management?',
    options: [
      { id: 'A', text: 'Continue Meropenem and Vancomycin for 14 full days to ensure complete eradication' },
      { id: 'B', text: 'De-escalate therapy: discontinue Vancomycin and switch Meropenem to targeted narrow-spectrum IV Ceftriaxone or oral Ciprofloxacin' },
      { id: 'C', text: 'Add an aminoglycoside (Gentamicin) for synergy' },
      { id: 'D', text: 'Discontinue all antibiotics immediately since he is afebrile' }
    ],
    correctOption: 'B',
    correctAnswerText: 'De-escalate therapy: discontinue Vancomycin and switch Meropenem to targeted narrow-spectrum IV Ceftriaxone or oral Ciprofloxacin',
    explanation: 'Antimicrobial stewardship dictates that once definitive microbiological culture and susceptibility results return, broad-spectrum empiric antibiotics (e.g., Vancomycin + Meropenem) must be "de-escalated" (streamlined) to the narrowest-spectrum, targeted, least-toxic agent (such as IV Ceftriaxone or step-down oral Ciprofloxacin). This reduces selective pressure for multidrug-resistant pathogens (C. diff, MRSA, VRE) and minimizes toxicity and cost.',
    optionRationales: {
      A: 'Continuing broad-spectrum carbapenems and vancomycin unnecessarily breeds superinfections and resistance.',
      B: 'Correct. Culture-directed de-escalation to narrow-spectrum targeted antibiotics is a core stewardship principle.',
      C: 'Aminoglycoside addition adds nephrotoxicity without clinical benefit in fully sensitive E. coli.',
      D: 'Bacteremic pyelonephritis requires completion of a tailored 7–10 day course.'
    },
    keyTakeaway: 'Antimicrobial stewardship mandates culture-directed de-escalation from broad-spectrum empiric therapy to targeted narrow-spectrum antibiotics.',
    sourcePageRef: 'Pages 67–68, Q1',
    difficulty: 'High Yield',
    tags: ['Antimicrobial Stewardship', 'De-Escalation', 'Antibiotic Principles', 'Pyelonephritis']
  },
  {
    id: 'abx_q2',
    topicId: 'antibiotic_principles',
    topicTitle: 'Principles of Antibiotic Use',
    questionNumber: 2,
    clinicalVignette: 'A 21-year-old university student presents with a 3-day history of clear rhinorrhea, sore throat, sneezing, and dry cough. She is afebrile, pharynx is mildly erythematous without exudates, and lungs are clear. Rapid antigen test for Group A Streptococcus is negative. She asks for a prescription of Azithromycin or Amoxicillin. What is the most appropriate management?',
    options: [
      { id: 'A', text: 'Prescribe Azithromycin 500 mg daily for 3 days' },
      { id: 'B', text: 'Prescribe Amoxicillin-Clavulanate for 7 days' },
      { id: 'C', text: 'Reassure the patient, explain that upper respiratory viral infections do not respond to antibiotics, and recommend symptomatic supportive treatment (hydration, paracetamol, saline nasal sprays)' },
      { id: 'D', text: 'Order a chest CT scan' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Reassure the patient, explain that upper respiratory viral infections do not respond to antibiotics, and recommend symptomatic supportive treatment (hydration, paracetamol, saline nasal sprays)',
    explanation: 'The vast majority (>90–95%) of acute uncomplicated upper respiratory tract infections (rhinorrhea, pharyngitis, cough) are caused by viruses (rhinoviruses, coronaviruses, adenoviruses). Antibiotics do not alter the clinical course, hasten recovery, or prevent bacterial superinfections, but expose patients to adverse drug reactions (allergy, diarrhea) and drive community antimicrobial resistance. Management is reassurance and symptomatic supportive care.',
    optionRationales: {
      A: 'Azithromycin has zero efficacy against viral pathogens and causes macrolide resistance.',
      B: 'Amoxicillin-clavulanate is unnecessary and frequently causes diarrhea and clavulanate hepatotoxicity.',
      C: 'Correct. Reassurance and symptomatic therapy without antibiotics is the standard of care for viral URTI.',
      D: 'Chest CT is unjustified radiation for simple coryza.'
    },
    keyTakeaway: 'Uncomplicated viral upper respiratory tract infections require symptomatic care alone; antibiotics provide no benefit and promote resistance.',
    sourcePageRef: 'Page 68, Q2',
    difficulty: 'Core Clinical',
    tags: ['Viral URTI', 'Inappropriate Antibiotics', 'Antimicrobial Stewardship', 'Symptomatic Care']
  },
  {
    id: 'abx_q3',
    topicId: 'antibiotic_principles',
    topicTitle: 'Principles of Antibiotic Use',
    questionNumber: 3,
    clinicalVignette: 'A 74-year-old man with stage 4 CKD (eGFR 22 mL/min/1.73m²) is admitted with severe hospital-acquired pneumonia and is prescribed IV Vancomycin and IV Amikacin. Why is therapeutic drug monitoring (TDM) and renal dosage adjustment essential for hydrophilic antibiotics like vancomycin and aminoglycosides in renal impairment?',
    options: [
      { id: 'A', text: 'Hydrophilic antibiotics are cleared primarily by glomerular filtration; accumulation causes severe dose-dependent nephrotoxicity and ototoxicity' },
      { id: 'B', text: 'Hydrophilic antibiotics are metabolized exclusively by hepatic CYP3A4' },
      { id: 'C', text: 'Renal impairment causes rapid enzymatic destruction of antibiotics in plasma' },
      { id: 'D', text: 'Renal impairment prevents gastrointestinal absorption' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Hydrophilic antibiotics are cleared primarily by glomerular filtration; accumulation causes severe dose-dependent nephrotoxicity and ototoxicity',
    explanation: 'Hydrophilic antibiotics (Aminoglycosides, Vancomycin, Beta-lactams, Colistin) have small volumes of distribution and are cleared almost exclusively by renal Glomerular Filtration. In renal impairment (low GFR), their elimination half-life is dramatically prolonged, leading to drug accumulation and high trough levels that trigger severe dose-dependent Nephrotoxicity (acute tubular necrosis) and irreversible Ototoxicity (vestibular and cochlear damage). Doses and dosing intervals must be adjusted using TDM.',
    optionRationales: {
      A: 'Correct. Hydrophilic antibiotics rely on renal clearance; accumulation in CKD causes severe nephrotoxicity and ototoxicity.',
      B: 'Lipophilic antibiotics (macrolides, fluoroquinolones, rifampin) are metabolized hepatically, not aminoglycosides.',
      C: 'Renal impairment prolongs half-life, not accelerates destruction.',
      D: 'These agents are administered intravenously.'
    },
    keyTakeaway: 'Hydrophilic antibiotics (vancomycin, aminoglycosides) are cleared renally and require TDM and dose adjustment in CKD to prevent nephro- and ototoxicity.',
    sourcePageRef: 'Pages 68–69, Q3',
    difficulty: 'High Yield',
    tags: ['Pharmacokinetics', 'Renal Dose Adjustment', 'Therapeutic Drug Monitoring', 'Vancomycin']
  },
  {
    id: 'abx_q4',
    topicId: 'antibiotic_principles',
    topicTitle: 'Principles of Antibiotic Use',
    questionNumber: 4,
    clinicalVignette: 'How does the biological mechanism of "selective antimicrobial pressure" drive the emergence and dissemination of multidrug-resistant bacteria (such as MRSA, ESBL, and CRE) in hospital environments?',
    options: [
      { id: 'A', text: 'Antibiotics directly mutate the bacterial DNA to create new resistance genes' },
      { id: 'B', text: 'Widespread antibiotic exposure eliminates susceptible competing microflora, allowing pre-existing resistant mutants or horizontally acquired resistance plasmids to survive, proliferate, and dominate the ecological niche' },
      { id: 'C', text: 'Antibiotics stimulate the patient\'s immune cells to produce bacterial resistance factors' },
      { id: 'D', text: 'Bacteria absorb antibiotics and use them as nutrient sources' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Widespread antibiotic exposure eliminates susceptible competing microflora, allowing pre-existing resistant mutants or horizontally acquired resistance plasmids to survive, proliferate, and dominate the ecological niche',
    explanation: 'Antibiotics do not directly create mutations; rather, Darwinian natural selection operates when antibiotics are applied. The antibiotic kills drug-susceptible wild-type bacteria (eliminating competition and "colonization resistance"), leaving behind surviving mutant or plasmid-bearing bacteria (carrying beta-lactamases, efflux pumps, target mutations). These resistant clones multiply unchecked, colonize host tissues, and transmit resistance genes horizontally via plasmids/transposons.',
    optionRationales: {
      A: 'Antibiotics exert selective survival pressure; they are not direct mutagenic chemical agents.',
      B: 'Correct. Antibiotics eliminate susceptible competitors, enabling resistant mutants to proliferate and dominate.',
      C: 'Host immune cells do not synthesize bacterial resistance factors.',
      D: 'Resistance mechanisms inactivate or pump out antibiotics, not metabolize them as food.'
    },
    keyTakeaway: 'Selective antimicrobial pressure eliminates susceptible flora, allowing resistant bacterial strains to survive, multiply, and disseminate.',
    sourcePageRef: 'Page 69, Q4',
    difficulty: 'Core Clinical',
    tags: ['Antimicrobial Resistance', 'Selective Pressure', 'Evolutionary Biology', 'ESBL']
  },
  {
    id: 'abx_q5',
    topicId: 'antibiotic_principles',
    topicTitle: 'Principles of Antibiotic Use',
    questionNumber: 5,
    clinicalVignette: 'A 68-year-old man is admitted with severe Community-Acquired Pneumonia (CURB-65 score = 3: confused, urea 8.5 mmol/L, RR 34/min, BP 85/55 mmHg). Blood and sputum cultures are drawn immediately. When should empiric broad-spectrum antibiotic therapy be initiated in this patient?',
    options: [
      { id: 'A', text: 'Wait 48–72 hours until culture and susceptibility results return' },
      { id: 'B', text: 'Initiate empirical intravenous broad-spectrum combination antibiotic therapy (e.g., Ceftriaxone plus Azithromycin) immediately within 1 hour of hospital arrival' },
      { id: 'C', text: 'Give oral paracetamol only until fever exceeds 40°C' },
      { id: 'D', text: 'Administer antifungals only' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Initiate empirical intravenous broad-spectrum combination antibiotic therapy (e.g., Ceftriaxone plus Azithromycin) immediately within 1 hour of hospital arrival',
    explanation: 'In severe bacterial infections with high mortality risks (severe CAP, septic shock, bacterial meningitis), empiric broad-spectrum antibiotic therapy must be administered promptly within the "Golden Hour" (within 1 hour of recognition) after drawing blood cultures. Delaying antibiotic administration until microbiological culture confirmation results in progressive septic shock and significant excess mortality.',
    optionRationales: {
      A: 'Waiting 48–72 hours for cultures in severe CAP with septic shock leads to overwhelming bacteremic death.',
      B: 'Correct. Immediate empiric broad-spectrum IV antibiotics within 1 hour is standard of care for severe CAP / sepsis.',
      C: 'Paracetamol does not treat bacterial alveolar consolidation or bacteremia.',
      D: 'Community pneumonia is overwhelmingly bacterial (Streptococcus pneumoniae, atypicals).'
    },
    keyTakeaway: 'In severe bacterial pneumonia and sepsis, initiate empiric broad-spectrum antibiotics within 1 hour of arrival after taking cultures.',
    sourcePageRef: 'Pages 69–70, Q5',
    difficulty: 'High Yield',
    tags: ['Empiric Antibiotics', 'Severe CAP', 'Golden Hour', 'Sepsis Resuscitation']
  },

  // ----------------------------------------------------
  // INDICATIONS FOR STEROID USE & STEROID EQUIVALENT DOSES (Pages 70-72)
  // ----------------------------------------------------
  {
    id: 'ster_q1',
    topicId: 'steroid_prescribing',
    topicTitle: 'Indications for Steroid Use & Steroid Equivalent Doses',
    questionNumber: 1,
    clinicalVignette: 'A 32-year-old woman with known Addison\'s disease develops severe gastroenteritis with vomiting and diarrhea. She presents to the emergency department in shock: BP 70/40 mmHg, pulse 124 bpm, lethargic, with serum Na⁺ 124 mmol/L and K⁺ 6.4 mmol/L. What is the immediate life-saving pharmacological intervention?',
    options: [
      { id: 'A', text: 'Oral fludrocortisone 0.1 mg' },
      { id: 'B', text: 'Immediate intravenous bolus of Hydrocortisone 100 mg alongside rapid normal saline fluid resuscitation' },
      { id: 'C', text: 'Oral prednisone 5 mg' },
      { id: 'D', text: 'IV Dexamethasone 0.5 mg in 24 hours' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Immediate intravenous bolus of Hydrocortisone 100 mg alongside rapid normal saline fluid resuscitation',
    explanation: 'Acute Adrenal (Addisonian) Crisis is a life-threatening medical emergency presenting with refractory shock, hyponatremia, and hyperkalemia. The immediate treatment is: (1) STAT IV Hydrocortisone (100 mg bolus, followed by 100–200 mg/day continuous infusion or 50 mg IV q6h), and (2) aggressive IV volume resuscitation with isotonic 0.9% Normal Saline with 5% Dextrose (to correct hypovolemia and hypoglycemia). At high doses (>=100 mg), hydrocortisone exerts sufficient mineralocorticoid activity that additional fludrocortisone is unnecessary acutely.',
    optionRationales: {
      A: 'Oral medications cannot be absorbed during active vomiting and work too slowly in circulatory collapse.',
      B: 'Correct. IV Hydrocortisone 100 mg bolus plus normal saline fluid resuscitation is the gold standard for acute adrenal crisis.',
      C: 'Oral low-dose prednisone is inadequate for acute Addisonian shock.',
      D: 'Dexamethasone lacks mineralocorticoid activity and 0.5 mg is too low a dose.'
    },
    keyTakeaway: 'Acute Addisonian crisis requires immediate IV Hydrocortisone (100 mg bolus) and aggressive 0.9% normal saline fluid resuscitation.',
    sourcePageRef: 'Page 70, Q1',
    difficulty: 'High Yield',
    tags: ['Adrenal Crisis', 'IV Hydrocortisone', 'Addison Disease', 'Emergency Endocrinology']
  },
  {
    id: 'ster_q2',
    topicId: 'steroid_prescribing',
    topicTitle: 'Indications for Steroid Use & Steroid Equivalent Doses',
    questionNumber: 2,
    clinicalVignette: 'A patient with severe Crohn\'s disease is maintained on oral Prednisolone 40 mg daily. The patient is admitted for emergency bowel resection and cannot take oral medications. The surgical team needs to convert the oral prednisolone dose to an equivalent dose of intravenous Methylprednisolone. Based on standard glucocorticoid potency equivalence, what is the exact equivalent IV dose of Methylprednisolone?',
    options: [
      { id: 'A', text: '40 mg IV' },
      { id: 'B', text: '32 mg IV' },
      { id: 'C', text: '20 mg IV' },
      { id: 'D', text: '80 mg IV' }
    ],
    correctOption: 'B',
    correctAnswerText: '32 mg IV',
    explanation: 'Standard glucocorticoid anti-inflammatory equivalent dosing ratios are: Hydrocortisone 20 mg = Prednisolone 5 mg = Methylprednisolone 4 mg = Dexamethasone 0.75 mg. Therefore, the conversion ratio between Prednisolone and Methylprednisolone is 5:4 (Methylprednisolone is 1.25x more potent). For a 40 mg Prednisolone dose: (40 mg / 5) * 4 = 32 mg of IV Methylprednisolone.',
    optionRationales: {
      A: '40 mg IV would be a 25% overdose of methylprednisolone.',
      B: 'Correct. Prednisolone 5 mg = Methylprednisolone 4 mg. Thus, 40 mg Prednisolone = 32 mg IV Methylprednisolone.',
      C: '20 mg IV would represent an under-dose (equivalent to only 25 mg prednisolone).',
      D: '80 mg IV is double the required dose.'
    },
    keyTakeaway: 'Glucocorticoid equivalence ratio: 5 mg Prednisolone = 4 mg Methylprednisolone (40 mg Prednisolone = 32 mg Methylprednisolone).',
    sourcePageRef: 'Pages 70–71, Q2',
    difficulty: 'High Yield',
    tags: ['Steroid Equivalence', 'Prednisolone', 'Methylprednisolone', 'Dose Calculation']
  },
  {
    id: 'ster_q3',
    topicId: 'steroid_prescribing',
    topicTitle: 'Indications for Steroid Use & Steroid Equivalent Doses',
    questionNumber: 3,
    clinicalVignette: 'A 55-year-old woman with polymyalgia rheumatica is prescribed oral Prednisolone 15 mg daily for an anticipated duration of at least 12 months. Which baseline preventive investigation and prophylactic co-prescription should be ordered at the initiation of long-term glucocorticoid therapy?',
    options: [
      { id: 'A', text: 'Baseline Dual-Energy X-ray Absorptiometry (DEXA) scan, alongside Calcium, Vitamin D, and an oral Bisphosphonate (e.g., Alendronate) for bone protection' },
      { id: 'B', text: 'Routine thyroid ultrasound' },
      { id: 'C', text: 'Prophylactic broad-spectrum antibiotics' },
      { id: 'D', text: 'High-dose potassium supplements' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Baseline Dual-Energy X-ray Absorptiometry (DEXA) scan, alongside Calcium, Vitamin D, and an oral Bisphosphonate (e.g., Alendronate) for bone protection',
    explanation: 'Glucocorticoid-Induced Osteoporosis (GIOP) is the most common form of secondary osteoporosis, occurring rapidly within the first 3–6 months of steroid therapy due to osteoblast inhibition, osteoclast stimulation, and reduced intestinal calcium absorption. Guidelines mandate: (1) Baseline DEXA bone density scan, (2) Lifestyle measures (smoking cessation, weight-bearing exercise), and (3) Prophylactic Calcium (1000–1200 mg/d), Vitamin D (800–2000 IU/d), and an oral Bisphosphonate (Alendronate/Risedronate) in patients at moderate-to-high fracture risk.',
    optionRationales: {
      A: 'Correct. DEXA scan plus Calcium, Vitamin D, and Bisphosphonate prophylaxis prevents rapid glucocorticoid-induced bone loss.',
      B: 'Steroids do not cause focal thyroid nodules.',
      C: 'Routine broad-spectrum antibiotic prophylaxis is inappropriate and causes resistance.',
      D: 'Potassium is indicated for mineralocorticoid-induced hypokalemia, not universal baseline prophylaxis in PMR.'
    },
    keyTakeaway: 'Long-term systemic glucocorticoids (>3 months) mandate fracture risk assessment with DEXA and prophylaxis with Calcium, Vitamin D, and Bisphosphonates.',
    sourcePageRef: 'Page 71, Q3',
    difficulty: 'High Yield',
    tags: ['Glucocorticoid Osteoporosis', 'DEXA Scan', 'Bisphosphonates', 'Steroid Complications']
  },
  {
    id: 'ster_q4',
    topicId: 'steroid_prescribing',
    topicTitle: 'Indications for Steroid Use & Steroid Equivalent Doses',
    questionNumber: 4,
    clinicalVignette: 'A patient with confirmed primary adrenal insufficiency (Addison\'s disease) is maintained on oral hydrocortisone (20 mg in the morning, 10 mg at 14:00). Despite good compliance, she suffers from chronic postural dizziness, salt craving, low blood pressure (95/60 mmHg), and borderline hyperkalemia (K⁺ 5.2 mmol/L). What essential hormone replacement is missing from her regimen?',
    options: [
      { id: 'A', text: 'Fludrocortisone (mineralocorticoid replacement)' },
      { id: 'B', text: 'Levothyroxine' },
      { id: 'C', text: 'Estrogen replacement' },
      { id: 'D', text: 'Growth hormone' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Fludrocortisone (mineralocorticoid replacement)',
    explanation: 'In Primary Adrenal Insufficiency (Addison\'s disease), all layers of the adrenal cortex are destroyed, causing deficiency of BOTH glucocorticoids (cortisol) and mineralocorticoids (aldosterone). While physiological doses of oral hydrocortisone replace cortisol, they provide insufficient mineralocorticoid potency to maintain sodium retention and blood pressure. Daily oral Fludrocortisone (0.05–0.2 mg daily) is mandatory to prevent salt-wasting, postural hypotension, and hyperkalemia.',
    optionRationales: {
      A: 'Correct. Primary adrenal failure mandates daily Fludrocortisone to replace lost aldosterone and restore sodium balance.',
      B: 'Levothyroxine is indicated only if autoimmune hypothyroidism (Schmidt syndrome) is documented.',
      C: 'Estrogen does not correct salt-wasting or orthostatic hypotension.',
      D: 'Growth hormone is not indicated.'
    },
    keyTakeaway: 'Primary adrenal insufficiency (Addison disease) requires combined Glucocorticoid (Hydrocortisone) AND Mineralocorticoid (Fludrocortisone) replacement.',
    sourcePageRef: 'Pages 71–72, Q4',
    difficulty: 'High Yield',
    tags: ['Fludrocortisone', 'Mineralocorticoid', 'Addison Disease', 'Salt Wasting']
  },
  {
    id: 'ster_q5',
    topicId: 'steroid_prescribing',
    topicTitle: 'Indications for Steroid Use & Steroid Equivalent Doses',
    questionNumber: 5,
    clinicalVignette: 'A 45-year-old man with severe asthma has been taking Prednisolone 30 mg daily for 6 weeks. His asthma is now fully controlled on inhaled corticosteroids. Why is it strictly contraindicated to abruptly discontinue his systemic prednisolone without a gradual dose taper?',
    options: [
      { id: 'A', text: 'Abrupt withdrawal will trigger severe hypercalcemia' },
      { id: 'B', text: 'Exogenous corticosteroids suppress the hypothalamic-pituitary-adrenal (HPA) axis via negative feedback; abrupt cessation causes acute secondary adrenal crisis due to adrenal cortical atrophy' },
      { id: 'C', text: 'Abrupt withdrawal accelerates renal elimination of inhaled steroids' },
      { id: 'D', text: 'It causes acute thyroid storm' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Exogenous corticosteroids suppress the hypothalamic-pituitary-adrenal (HPA) axis via negative feedback; abrupt cessation causes acute secondary adrenal crisis due to adrenal cortical atrophy',
    explanation: 'Systemic glucocorticoids taken at supraphysiological doses (>5–7.5 mg prednisone equivalent daily) for more than 3 weeks cause profound negative feedback inhibition of hypothalamic CRH and pituitary ACTH secretion. This leads to disuse atrophy of the adrenal zona fasciculata and reticularis. Abrupt cessation removes exogenous cortisol while the atrophic adrenals cannot immediately secrete endogenous cortisol, precipitating a life-threatening Acute Adrenal Crisis (hypotension, vomiting, shock).',
    optionRationales: {
      A: 'Adrenal crisis causes shock and electrolyte imbalance, not primary hypercalcemia.',
      B: 'Correct. Supraphysiological steroids >3 weeks cause HPA axis suppression and adrenal atrophy; tapering is mandatory to prevent adrenal crisis.',
      C: 'Inhaled steroid clearance is independent of systemic withdrawal.',
      D: 'Adrenal withdrawal does not cause hyperthyroid crisis.'
    },
    keyTakeaway: 'Systemic steroids taken for >3 weeks cause HPA axis suppression; gradual tapering is mandatory to allow adrenal recovery and prevent adrenal crisis.',
    sourcePageRef: 'Page 72, Q5',
    difficulty: 'High Yield',
    tags: ['HPA Axis Suppression', 'Steroid Tapering', 'Secondary Adrenal Crisis', 'Adrenal Atrophy']
  }
];
