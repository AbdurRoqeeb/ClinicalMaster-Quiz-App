import { Topic } from '../types';

export const CLINICAL_TOPICS: Topic[] = [
  {
    id: 'acute_severe_asthma',
    title: 'Management of Acute Severe Asthmatic Attack',
    category: 'Emergency & Critical Care',
    description: 'Recognition of life-threatening asthma, "silent chest", ABG interpretation in asthma, IV magnesium sulfate mechanism, and target SpO2 in pregnancy.',
    questionCount: 5,
    pageRange: '',
    colorTheme: 'teal',
    iconName: 'Wind',
    highYieldConcepts: [
      'Silent chest indicates exhaustion & imminent respiratory arrest',
      'Normal PaCO2 in severe tachypneic asthma signals impending muscle fatigue',
      'IV Magnesium blocks intracellular calcium influx in bronchial smooth muscle',
      'Pregnancy target SpO2 is strictly 94–98%',
      'Lethargy/bradycardia with absent breath sounds demands immediate ETT intubation'
    ]
  },
  {
    id: 'hypoglycemia_management',
    title: 'Management of Hypoglycemia',
    category: 'Endocrinology & Metabolism',
    description: 'The Rule of 15s, Whipple\'s triad, distinguishing insulinoma vs factitious insulin (C-peptide), hypoglycemia in CKD, and emergency glucagon in rural settings.',
    questionCount: 5,
    pageRange: '',
    colorTheme: 'amber',
    iconName: 'Activity',
    highYieldConcepts: [
      'Rule of 15: 15g rapidly absorbed carbohydrate, recheck in 15 minutes',
      'Exogenous insulin: high insulin + suppressed C-peptide',
      'Whipple\'s Triad: Symptoms + low glucose + relief upon glucose administration',
      'CKD reduces renal clearance of insulin -> requires target adjustment',
      'Unconscious hypoglycemic patient without IV access requires IM/SC glucagon'
    ]
  },
  {
    id: 'snake_bites',
    title: 'Management of Snake Bites',
    category: 'Infectious Diseases & Toxicology',
    description: 'Myotoxic vs hemotoxic vs neurotoxic envenoming, 20-minute whole blood clotting test (20WBCT), NSAID avoidance in coagulopathy, compartment syndrome vs arterial pulse, and rhabdomyolysis hydration.',
    questionCount: 5,
    pageRange: '',
    colorTheme: 'emerald',
    iconName: 'ShieldAlert',
    highYieldConcepts: [
      'Elevated CK + myalgia + dark urine (myoglobinuria) = Myotoxic envenoming',
      'Initial antivenom dose (10 vials) given regardless of mild local swelling or stable vitals',
      'Avoid NSAIDs (Ibuprofen) in hemotoxic/viper bites due to platelet impairment',
      'Palpable distal pulses do not rule out acute compartment syndrome',
      'Positive dipstick for blood with few RBCs on microscopy indicates myoglobinuria'
    ]
  },
  {
    id: 'sample_bottles',
    title: 'Types & Use of Sample Bottles',
    category: 'Diagnostics & Therapeutics',
    description: 'Tube additives, color coding, coagulation profiles (Light Blue/Citrate), OGTT/Glycolysis inhibition (Grey/Fluoride), CBC (Purple/EDTA), underfilling artifacts, and delayed film prep.',
    questionCount: 5,
    pageRange: '',
    colorTheme: 'blue',
    iconName: 'FlaskConical',
    highYieldConcepts: [
      'Light blue cap (Sodium Citrate) for PT, aPTT, INR clotting studies',
      'Grey cap (Fluoride Oxalate) inhibits enolase/glycolysis for glucose & OGTT',
      'Purple/Lavender (EDTA) chelates calcium for hematology & CBC',
      'Half-filled EDTA tubes cause hypertonicity, cell shrinkage & inaccurate cell indices',
      'Delayed blood film (>2-4h) causes smear cells, smudge cells & morphological artifacts'
    ]
  },
  {
    id: 'glycemic_index_load',
    title: 'Glycaemic Index & Glycaemic Load',
    category: 'Endocrinology & Metabolism',
    description: 'Postprandial glycemic excursions, Advanced Glycation End-products (AGEs), high-fiber low-GI dietary substitution in T2DM/NAFLD, gestational diabetes, and meal composition.',
    questionCount: 5,
    pageRange: '',
    colorTheme: 'orange',
    iconName: 'Utensils',
    highYieldConcepts: [
      'Replace refined carbs with high-fiber low-GI foods to blunt postprandial surges',
      'Postprandial hyperglycemia drives Advanced Glycation End-products (AGEs) & oxidative stress',
      'Low-GI diets improve insulin sensitivity in NAFLD and metabolic syndrome',
      'In GDM, low-GI maintains maternal-fetal nutrition without causing hyperinsulinism',
      'Fat, protein, and dietary fiber slow gastric emptying, blunting glycemic peaks'
    ]
  },
  {
    id: 'antihypertensive_drugs',
    title: 'Synopsis of Antihypertensive Drugs',
    category: 'Cardiovascular Medicine',
    description: 'Hemodynamic mechanisms, CCB edema resolution by ACEi, alpha-blocker first-dose syncope, beta-blocker + non-DHP CCB heart block, hydralazine lupus, and renal artery stenosis AKI.',
    questionCount: 5,
    pageRange: '',
    colorTheme: 'rose',
    iconName: 'HeartPulse',
    highYieldConcepts: [
      'ACE inhibitors dilate post-capillary venules, relieving CCB precapillary transudation edema',
      'Doxazosin causes profound first-dose orthostatic hypotension and syncope',
      'Combining Verapamil/Diltiazem + Metoprolol triggers severe AV nodal block & bradycardia',
      'Hydralazine causes drug-induced lupus erythematosus (DILE) with anti-histone antibodies',
      'ACE inhibitors dilate efferent arterioles, dropping glomerular filtration pressure in bilateral RAS'
    ]
  },
  {
    id: 'abg_interpretation',
    title: 'Interpretation of Arterial Blood Gases',
    category: 'Nephrology & Acid-Base',
    description: 'Systematic acid-base analysis: acute vs chronic disorders, uncompensated vs fully compensated metabolic alkalosis, PE respiratory alkalosis, COPD acute-on-chronic acidosis, and opioid hypoventilation.',
    questionCount: 5,
    pageRange: '',
    colorTheme: 'cyan',
    iconName: 'ActivitySquare',
    highYieldConcepts: [
      'Persistent vomiting -> Uncompensated metabolic alkalosis (pH >7.45, HCO3 >26, PaCO2 normal)',
      'Pulmonary embolism hyperventilation -> Uncompensated respiratory alkalosis (low PaCO2)',
      'Acute opioid overdose -> Acute uncompensated respiratory acidosis (high PaCO2, normal HCO3)',
      'Stable chronic COPD -> Fully compensated respiratory acidosis (pH normal 7.36, high PaCO2, high HCO3)',
      'Renal compensation for respiratory acidosis takes 3–5 days to elevate serum bicarbonate'
    ]
  },
  {
    id: 'medical_prescription_diets',
    title: 'Medical Prescription of Diets',
    category: 'Diagnostics & Therapeutics',
    description: 'Individualization of nutrition, sodium restriction in heart failure, stroke dysphagia pureed textures, and high-energy high-protein nutrition in severe wasting.',
    questionCount: 5,
    pageRange: '',
    colorTheme: 'lime',
    iconName: 'Apple',
    highYieldConcepts: [
      'Therapeutic diets must be strictly individualized to clinical and nutritional status',
      'Heart failure & hypertension mandate low-sodium regimens (<2g Na/day)',
      'Fresh unprocessed fish/vegetables without added bouillon cubes provide ideal low-sodium intake',
      'Post-stroke pharyngeal dysphagia requires pureed/texture-modified foods to prevent aspiration',
      'Malnourished catabolic patients need high-energy, high-protein nutritional supplementation'
    ]
  },
  {
    id: 'siadh',
    title: 'Syndrome of Inappropriate ADH (SIADH)',
    category: 'Endocrinology & Metabolism',
    description: 'Euvolemic hyponatremia, small cell lung cancer ectopic AVP, aquaporin-2 insertion, hypertonic saline for seizures, osmotic demyelination syndrome risk, and cerebral salt wasting differentiation.',
    questionCount: 5,
    pageRange: '',
    colorTheme: 'indigo',
    iconName: 'Droplets',
    highYieldConcepts: [
      'Central hilar mass + hyponatremia + concentrated urine = Ectopic AVP from Small Cell Lung Cancer',
      'AVP binds V2 receptors -> persistent apical membrane insertion of Aquaporin-2 channels',
      'Severe acute symptomatic hyponatremia (seizure) -> 3% hypertonic saline bolus',
      'Rapid sodium correction (>8-10 mmol/L in 24h) causes Osmotic Demyelination Syndrome (quadriparesis)',
      'Cerebral Salt Wasting presents with true hypovolemia, orthostatic hypotension, and high urine sodium'
    ]
  },
  {
    id: 'diabetes_insipidus',
    title: 'Diabetes Insipidus (DI)',
    category: 'Endocrinology & Metabolism',
    description: 'Central DI vs Nephrogenic DI vs Primary Polydipsia, water deprivation test protocols, desmopressin response, lithium toxicity mechanism, and medullary wash-out.',
    questionCount: 5,
    pageRange: '',
    colorTheme: 'sky',
    iconName: 'GlassWater',
    highYieldConcepts: [
      'Post-neurosurgery polyuria with >50% rise in urine osmolality post-DDAVP = Central DI',
      'Failure of urine osmolality to rise after water deprivation AND after DDAVP = Nephrogenic DI',
      'Supervised water deprivation alone concentrating urine (>600 mOsm/kg) = Primary Polydipsia',
      'Lithium inhibits glycogen synthase kinase-3beta, impairing AQP2 trafficking in collecting ducts',
      'Prolonged polyuria washes out the renal medullary hypertonic osmotic gradient'
    ]
  },
  {
    id: 'malaria_management',
    title: 'Management of Malaria',
    category: 'Infectious Diseases & Toxicology',
    description: 'Severe falciparum protocols, IV artesunate criteria for treatment failure, delayed post-artesunate hemolytic anemia (PADH), concurrent bacterial sepsis shock, and post-cerebral malaria ACT selection.',
    questionCount: 5,
    pageRange: '',
    colorTheme: 'red',
    iconName: 'Bug',
    highYieldConcepts: [
      'Treatment failure: clinical deterioration with rising parasitemia despite parenteral therapy',
      'Post-Artesunate Delayed Hemolysis (PADH) occurs 1-3 weeks post-treatment with low haptoglobin',
      'Persistent shock in severe malaria frequently signals concurrent Gram-negative bacterial sepsis',
      'Avoid mefloquine-containing ACTs following cerebral malaria due to neuropsychiatric risks',
      'Refractory hyperkalemia/acidosis/fluid overload in malarial AKI mandates urgent Renal Replacement Therapy'
    ]
  },
  {
    id: 'blood_transfusion',
    title: 'Indication & Complications of Blood Transfusion',
    category: 'Diagnostics & Therapeutics',
    description: 'Restrictive transfusion triggers (Hb 7-8 g/dL), active coagulopathy correction with FFP, Transfusion-Associated Circulatory Overload (TACO) vs TRALI, and Cryoprecipitate for hypofibrinogenemia.',
    questionCount: 5,
    pageRange: '',
    colorTheme: 'crimson',
    iconName: 'Flame',
    highYieldConcepts: [
      'Hemodynamically stable non-bleeding patients: restrictive transfusion threshold (Hb < 7.0–8.0 g/dL)',
      'Active bleeding with elevated INR in cirrhosis: Fresh Frozen Plasma (FFP)',
      'CKD patient with dyspnea, elevated JVP & pulmonary edema post-transfusion = TACO',
      'Once target hemoglobin is achieved and symptoms resolve, withhold further transfusions',
      'Severe bleeding with Fibrinogen < 100 mg/dL (<1.0 g/L) requires Cryoprecipitate'
    ]
  },
  {
    id: 'ecg_electrolytes',
    title: 'ECG Features of Electrolyte Derangements',
    category: 'Cardiovascular Medicine',
    description: 'Hyperkalemia action potential depolarization, Prominent U waves in hypokalemia, Shortened QT in hypercalcemia, ST segment prolongation in hypocalcemia, and IV Calcium gluconate.',
    questionCount: 5,
    pageRange: '',
    colorTheme: 'violet',
    iconName: 'Zap',
    highYieldConcepts: [
      'Hyperkalemia causes baseline resting membrane depolarization -> inactivation of fast Na+ channels',
      'Chlorthalidone-induced hypokalemia causes flattened T waves with prominent U waves',
      'Hypercalcemia accelerates cardiac repolarization, producing a shortened QT interval',
      'Hypocalcemia lengthens Phase 2 plateau, prolonging the ST segment and QTc interval',
      'Widened QRS with peaked T waves demands immediate IV Calcium Gluconate for membrane stabilization'
    ]
  },
  {
    id: 'sepsis_management',
    title: 'Synopsis of Sepsis Management',
    category: 'Emergency & Critical Care',
    description: 'Hour-1 Sepsis Bundle, IV hydrocortisone in refractory vasopressor shock, surgical source control in hollow viscus perforation, refractory hyperkalemic shock dialysis, and anastomotic leaks.',
    questionCount: 5,
    pageRange: '',
    colorTheme: 'purple',
    iconName: 'AlertOctagon',
    highYieldConcepts: [
      'Sepsis resuscitation priority: immediate broad-spectrum IV antibiotics and crystalloid resuscitation',
      'Septic shock refractory to escalating noradrenaline doses requires stress-dose IV Hydrocortisone',
      'Gastrointestinal perforation requires emergent surgical source control; antibiotics alone fail',
      'Oliguric septic AKI with refractory hyperkalemia (7.1 mmol/L) demands urgent RRT',
      'Secondary deterioration 4 days post-op indicates an uncontrolled surgical source / anastomotic leak'
    ]
  },
  {
    id: 'respiratory_failure',
    title: 'Management of Respiratory Failure',
    category: 'Emergency & Critical Care',
    description: 'COPD exacerbation BiPAP indications, hazards of unmonitored high-flow O2 in chronic CO2 retainers, Acute-on-Chronic Type 2 classification, NIV contraindications (copious secretions), and post-extubation BiPAP.',
    questionCount: 5,
    pageRange: '',
    colorTheme: 'cyan',
    iconName: 'Lungs',
    highYieldConcepts: [
      'Persistent respiratory acidosis in COPD (pH < 7.35, PaCO2 elevated) warrants Non-Invasive Ventilation (NIV)',
      'CO2 retainers given high-flow O2: titrate down immediately to target 88–92% and check urgent ABG',
      'Low pH + high PaCO2 + compensatory high HCO3 (>30) = Acute-on-Chronic Type 2 Respiratory Failure',
      'Copious secretions with inability to clear/protect airway is a strict contraindication to NIV',
      'High-risk extubation patients benefit from preventative post-extubation BiPAP/CPAP'
    ]
  },
  {
    id: 'upper_gi_bleeding',
    title: 'Management of Upper GI Bleeding',
    category: 'Gastroenterology & Hepatology',
    description: 'Active spurting peptic ulcer dual endoscopic hemostasis, wide-bore IV resuscitation, Terlipressin & prophylactic antibiotics in variceal bleeds, rescue Sengstaken-Blakemore to TIPS, and endoscopy timing within 24h.',
    questionCount: 5,
    pageRange: '',
    colorTheme: 'rose',
    iconName: 'Stethoscope',
    highYieldConcepts: [
      'Spurting duodenal ulcer requires dual endoscopic hemostasis (clip/thermal) + high-dose IV PPI bolus',
      'Acute massive hematemesis/melena priority: ABC resuscitation with two wide-bore IV cannulae (14/16G)',
      'Suspected variceal bleed: start Vasoactive drugs (Terlipressin) + IV Ceftriaxone before endoscopy',
      'Refractory variceal bleeding temporarily tamponaded by Sengstaken-Blakemore requires salvage TIPS',
      'Stabilized non-variceal upper GI bleeding should undergo endoscopy within 24 hours of presentation'
    ]
  },
  {
    id: 'diabetic_foot_ulcers',
    title: 'Investigation of Diabetic Foot Ulcers',
    category: 'Endocrinology & Metabolism',
    description: 'Probe-to-bone test & MRI for osteomyelitis, Ankle-Brachial Index (ABI) false elevation (>1.4) in Monckeberg medial sclerosis, deep tissue biopsy vs superficial swabs, 10g monofilament, and CT angiography.',
    questionCount: 5,
    pageRange: '',
    colorTheme: 'amber',
    iconName: 'Footprints',
    highYieldConcepts: [
      'Positive probe-to-bone test with high inflammatory markers warrants MRI foot for osteomyelitis',
      'ABI > 1.30–1.40 indicates Medial Arterial Calcification (incompressible arteries), masking severe PAD',
      'Microbiology must be obtained from deep tissue biopsy/curettage after cleansing, never superficial swabs',
      '10-g Semmes-Weinstein monofilament is the gold standard for assessing loss of protective sensation (LOPS)',
      'Severe ischemic ulcer with low ABI (<0.4) requires CT Angiography for vascular roadmapping'
    ]
  },
  {
    id: 'ai_tech_diabetes',
    title: 'Use of Technology & AI in Diabetes Management',
    category: 'Endocrinology & Metabolism',
    description: 'Smart connected insulin pens tracking "Insulin on Board" (IOB) to prevent dose stacking, CGM trajectory rate-of-change AI predictions, Telemedicine platforms, digital adherence logs, and sensor lag verification.',
    questionCount: 5,
    pageRange: '',
    colorTheme: 'emerald',
    iconName: 'Cpu',
    highYieldConcepts: [
      'Smart insulin pens calculate Active Insulin on Board (IOB) to prevent lethal insulin stacking',
      'AI predictive algorithms analyze historical rate-of-change and glucose trajectory vectors',
      'Telemedicine facilitates asynchronous remote titration of insulin in rural underserved areas',
      'Digital memory pens automatically record injection timestamps and dosage units to enhance adherence',
      'Asymptomatic CGM hypoglycemia alerts must be verified with capillary finger-stick blood glucose'
    ]
  },
  {
    id: 'adrenaline_in_medicine',
    title: 'Use of Adrenaline in Medicine',
    category: 'Emergency & Critical Care',
    description: 'Severe asthma escalation role, IM adrenaline dosing & 5-minute repeat in anaphylaxis, immediate defibrillation vs adrenaline timing in VF arrest, Atropine for unstable bradycardia, and nebulized adrenaline in croup.',
    questionCount: 5,
    pageRange: '',
    colorTheme: 'red',
    iconName: 'Syringe',
    highYieldConcepts: [
      'Adrenaline is reserved for life-threatening acute asthma; standard care remains beta-2 agonists & steroids',
      'Refractory anaphylactic shock at 5 minutes warrants immediate repeat Intramuscular (IM) Adrenaline',
      'Ventricular Fibrillation (VF) cardiac arrest: immediate Defibrillation precedes all drugs',
      'Unstable symptomatic high-grade AV block / bradycardia initial drug is IV Atropine (0.5–1mg)',
      'Severe pediatric croup with resting inspiratory stridor & chest indrawing requires Nebulized Adrenaline'
    ]
  },
  {
    id: 'hyperkalemia_management',
    title: 'Management of Hyperkalaemia',
    category: 'Nephrology & Acid-Base',
    description: 'Insulin-dextrose Na+/K+ ATPase stimulation, IV calcium gluconate cardiac membrane antagonism, emergency hemodialysis in anuric renal failure, DKA hyperkalemia management, and RAASi preservation strategies.',
    questionCount: 5,
    pageRange: '',
    colorTheme: 'indigo',
    iconName: 'Flame',
    highYieldConcepts: [
      'Insulin binds receptors to stimulate Na+/K+ ATPase, driving potassium from ECF into ICF',
      'Peaked T waves and widened QRS require immediate IV Calcium Gluconate (cardiac membrane stabilizer)',
      'Refractory hyperkalemia in anuric acute renal failure requires urgent emergency Hemodialysis',
      'In DKA, total body potassium is depleted; IV calcium protects heart while insulin shifts K+ and clears ketones',
      'Stable chronic mild-to-moderate hyperkalemia on RAASi: correct reversible factors rather than stopping lifesaving drugs'
    ]
  },
  {
    id: 'tetanus_management',
    title: 'Management of Tetanus',
    category: 'Infectious Diseases & Toxicology',
    description: 'Prognostic indicators (age, incubation period <7d, onset period <48h), Cephalic tetanus from otitis media with CN VII palsy, and environmental control (quiet, darkened isolation room).',
    questionCount: 3,
    pageRange: '',
    colorTheme: 'purple',
    iconName: 'ShieldMinus',
    highYieldConcepts: [
      'Poorest prognosis: advanced age, incubation period < 7 days, and onset period (symptoms to spasm) < 48h',
      'Cephalic tetanus follows head wounds/otitis media, causes cranial nerve VII palsy, and carries high mortality',
      'Reflex tetanic spasms are triggered by sensory stimuli; care requires a quiet, isolated, darkened room'
    ]
  },
  {
    id: 'biopsy_needles',
    title: 'Types & Indications of Biopsy Needles',
    category: 'Diagnostics & Therapeutics',
    description: 'Abrams needle for closed pleural biopsy, Menghini suction needle for percutaneous liver biopsy, Tru-cut core cutting needles, and Jamshidi bone marrow aspiration needles.',
    questionCount: 2,
    pageRange: '',
    colorTheme: 'slate',
    iconName: 'Pin',
    highYieldConcepts: [
      'Abrams needle is classically used for closed pleural biopsy in exudative pleural effusions (TB / malignancy)',
      'Menghini needle operates by rapid suction-aspiration for parenchymal liver biopsies'
    ]
  },
  {
    id: 'stroke_imaging',
    title: 'Comparison of CT Scan & MRI in Stroke Management',
    category: 'Emergency & Critical Care',
    description: 'Non-contrast CT brain as rapid initial scan to exclude hemorrhage, Diffusion-Weighted MRI (DWI) for posterior fossa/early ischemia, DWI-FLAIR mismatch in wake-up strokes, post-tPA CT for hemorrhage, and basal ganglia ICH.',
    questionCount: 5,
    pageRange: '',
    colorTheme: 'blue',
    iconName: 'Scan',
    highYieldConcepts: [
      'Suspected acute stroke: Non-contrast CT Brain is the mandatory first-line test to rule out hemorrhage',
      'Normal early CT in acute posterior fossa stroke (vertigo/ataxia) requires Brain MRI with DWI',
      'DWI-FLAIR mismatch (positive DWI, negative FLAIR) identifies ischemic tissue eligible for reperfusion in unknown-onset stroke',
      'Neurological decline post-thrombolysis demands immediate non-contrast CT Brain to rule out intracranial hemorrhage',
      'Acute hyperdense lesion in the basal ganglia with surrounding mass effect indicates Intracerebral Hemorrhage (ICH)'
    ]
  },
  {
    id: 'dialysis_modalities',
    title: 'Types & Indications of Dialysis',
    category: 'Nephrology & Acid-Base',
    description: 'Acute ethylene glycol (antifreeze) toxicity hemodialysis, uremic pericardial friction rub urgent dialysis, Peritoneal dialysis contraindications post-laparotomy, Continuous Renal Replacement Therapy (CRRT) in septic shock, and refractory hyperkalemia.',
    questionCount: 5,
    pageRange: '',
    colorTheme: 'teal',
    iconName: 'Filter',
    highYieldConcepts: [
      'Toxic alcohol ingestion (ethylene glycol / methanol) with high anion gap metabolic acidosis requires urgent Hemodialysis',
      'Uremic pericarditis (friction rub in CKD) is a definitive indication for urgent Dialysis (avoid anticoagulants)',
      'Recent open abdominal surgery / peritonitis is a major contraindication to Peritoneal Dialysis',
      'Hemodynamically unstable patients in septic shock on high-dose vasopressors require CRRT (CVVH/CVVHD)',
      'Hyperkalemia refractory to calcium, insulin-dextrose, and salbutamol necessitates urgent Hemodialysis'
    ]
  },
  {
    id: 'erectile_dysfunction',
    title: 'Management of Erectile Dysfunction',
    category: 'Endocrinology & Metabolism',
    description: 'Psychogenic ED sympathetic overactivity with preserved nocturnal erections, Second-line Intracavernosal Alprostadil (PGE1) after PDE-5i failure, and First-line oral Sildenafil criteria.',
    questionCount: 3,
    pageRange: '',
    colorTheme: 'violet',
    iconName: 'UserCheck',
    highYieldConcepts: [
      'Performance anxiety triggers excessive sympathetic tone, producing arteriolar vasoconstriction despite normal nocturnal erections',
      'Diabetic patients failing maximum oral PDE-5 inhibitors should be transitioned to Intracavernosal Alprostadil injections',
      'First-line oral pharmacological therapy in patients with vascular risk factors (without nitrate use) is a PDE-5 inhibitor (Sildenafil)'
    ]
  },
  {
    id: 'pmos_pcos',
    title: 'PMOS (Polycystic Ovarian Syndrome)',
    category: 'Endocrinology & Metabolism',
    description: 'Insulin resistance causing acanthosis nigricans, hyperinsulinemia-driven theca cell androgen excess, Letrozole (aromatase inhibitor) as first-line ovulation induction, and follicular arrest causing anovulatory infertility.',
    questionCount: 4,
    pageRange: '',
    colorTheme: 'fuchsia',
    iconName: 'Sparkles',
    highYieldConcepts: [
      'Acanthosis nigricans is a direct cutaneous manifestation of severe peripheral Insulin Resistance',
      'Hyperinsulinemia stimulates ovarian theca cells to overproduce androgens and suppresses SHBG synthesis',
      'Letrozole (aromatase inhibitor) is now the first-line pharmacological agent for ovulation induction in PCOS/PMOS',
      'Chronic anovulation stems from premature follicular growth arrest and failure to select a dominant follicle'
    ]
  },
  {
    id: 'thyroid_storm',
    title: 'Management of Thyroid Storms',
    category: 'Endocrinology & Metabolism',
    description: 'Multimodal therapy, pulmonary edema & heart failure management, plasma exchange / emergency surgery rescue therapy, beta-blocker cardiac collapse in thyrotoxic cardiomyopathy, and treating concurrent precipitating sepsis.',
    questionCount: 4,
    pageRange: '',
    colorTheme: 'rose',
    iconName: 'Flame',
    highYieldConcepts: [
      'Development of severe heart failure/pulmonary edema in thyroid storm requires ICU stabilization while managing precipitants',
      'Refractory storm failing antithyroid medications, iodine, and steroids requires Therapeutic Plasma Exchange or Thyroidectomy',
      'Severe thyrotoxic dilated cardiomyopathy relies on high sympathetic tone; abrupt high-dose beta-blockade can cause cardiogenic shock',
      'When bacteremia/sepsis precipitates thyroid storm, treat both simultaneously with broad-spectrum antibiotics and storm therapy'
    ]
  },
  {
    id: 'myxedema_coma',
    title: 'Management of Hypothyroidism Coma (Myxedema Coma)',
    category: 'Endocrinology & Metabolism',
    description: 'Depressed central respiratory chemosensitivity, Levothyroxine (IV T4) with stress-dose hydrocortisone, SIADH-like free water impairment with 3% saline for seizures, secondary central hypopituitarism steroid rule, and avoiding IV T3 in CAD.',
    questionCount: 5,
    pageRange: '',
    colorTheme: 'blue',
    iconName: 'ThermometerSnowflake',
    highYieldConcepts: [
      'Severe hypothermia and hypoventilation stem from blunted neural responsiveness to hypoxia and hypercapnia',
      'Circulatory failure in myxedema coma requires IV Levothyroxine (T4) + stress steroids + cautious vasopressors',
      'Severe hyponatremic seizures in myxedema require bolus 3% hypertonic saline to correct cerebral edema',
      'Low free T4 with inappropriately normal/low TSH = Central hypothyroidism; ALWAYS give stress steroids BEFORE T4 to prevent adrenal crisis',
      'Avoid high-dose IV Liothyronine (T3) in elderly cardiac patients to prevent fatal arrhythmias and acute myocardial infarction'
    ]
  },
  {
    id: 'drug_poisoning',
    title: 'Principles of Managing Drug Poisoning',
    category: 'Infectious Diseases & Toxicology',
    description: 'Urinary alkalinization for salicylates, airway protection before decontamination, hemodialysis criteria in low-Vd toxicities, Atropine + Pralidoxime in organophosphates, and Naloxone in opioid overdoses.',
    questionCount: 5,
    pageRange: '',
    colorTheme: 'emerald',
    iconName: 'ShieldAlert',
    highYieldConcepts: [
      'Urinary alkalinization (IV sodium bicarbonate, target urine pH 7.5–8.5) ion-traps salicylate to accelerate renal clearance',
      'Airway protection via endotracheal intubation must strictly precede any gastrointestinal decontamination in obtunded patients',
      'Hemodialysis effectively removes toxins with low molecular weight, low volume of distribution (<1 L/kg), and low protein binding',
      'Organophosphate toxicity requires high-dose IV Atropine (muscarinic reversal) combined with Pralidoxime (cholinesterase reactivation)',
      'Opioid toxidrome with respiratory depression (RR < 10/min, pinpoint pupils) requires prompt IV/IM Naloxone and ventilatory support'
    ]
  },
  {
    id: 'hypopituitarism',
    title: 'Hypopituitarism',
    category: 'Endocrinology & Metabolism',
    description: 'Postpartum pituitary necrosis (Sheehan syndrome) lack of pigmentation (ACTH deficiency), preserved aldosterone via RAAS in secondary adrenal crisis, mandatory glucocorticoid before thyroid replacement, lab diagnosis, and pituitary stalk disruption.',
    questionCount: 5,
    pageRange: '',
    colorTheme: 'purple',
    iconName: 'Crown',
    highYieldConcepts: [
      'Sheehan syndrome lacks hyperpigmentation because ACTH/POMC secretion is deficient (unlike primary Addison disease)',
      'Serum potassium remains normal in secondary adrenal crisis because aldosterone is preserved by the RAAS axis',
      'Mandatory hormone replacement order: initiate Glucocorticoids FIRST before starting Thyroid hormone to avoid precipitating adrenal crisis',
      'Secondary hypothyroidism is defined by low Free T4 accompanied by inappropriately normal or low TSH',
      'Pituitary stalk infundibulum transection causes combined central DI (loss of posterior hormones) and anterior panhypopituitarism'
    ]
  },
  {
    id: 'acute_mi_investigation',
    title: 'Investigation of Acute Myocardial Infarction',
    category: 'Cardiovascular Medicine',
    description: 'Serial high-sensitivity cardiac troponin delta dynamics in NSTEMI, Myocardial Injury vs true Type 1 MI in critical illness, and immediate 12-lead ECG as priority diagnostic step.',
    questionCount: 3,
    pageRange: '',
    colorTheme: 'red',
    iconName: 'Heart',
    highYieldConcepts: [
      'Initial normal hs-cTn in early presentation (<2-3h) mandates repeat serial testing at 1–3h to detect dynamic rise/fall',
      'Elevated troponin in severe pneumonia reflects non-ischemic Myocardial Injury (supply/demand mismatch), not acute plaque rupture MI',
      'Acute retrosternal chest pain evaluation priority: obtain a 12-lead ECG within 10 minutes of arrival'
    ]
  },
  {
    id: 'antibiotic_principles',
    title: 'Principles of Antibiotic Use',
    category: 'Infectious Diseases & Toxicology',
    description: 'Culture-directed antibiotic de-escalation, withholding antibiotics in viral URTIs, rational empiric therapy in severe CAP, renal dose adjustments in CKD, and selective antimicrobial pressure mechanisms.',
    questionCount: 5,
    pageRange: '',
    colorTheme: 'emerald',
    iconName: 'ShieldCheck',
    highYieldConcepts: [
      'Once pathogen susceptibilities return, de-escalate from broad-spectrum IV to narrow-spectrum oral antibiotics',
      'Viral upper respiratory tract infections (negative strep test) require symptomatic supportive care without antibiotics',
      'Empiric therapy in community-acquired pneumonia is warranted immediately when bacterial infection is likely and delay causes harm',
      'Hydrophilic antibiotics cleared by glomerular filtration must have dosages or intervals adjusted for eGFR/creatinine clearance',
      'Antibiotic overuse exerts selective evolutionary pressure, allowing resistant bacteria to survive, dominate, and proliferate'
    ]
  },
  {
    id: 'steroid_prescribing',
    title: 'Indications for Steroid Use & Steroid Equivalent Doses',
    category: 'Endocrinology & Metabolism',
    description: 'Immediate IV Hydrocortisone in acute adrenal crisis, Steroid Equivalence calculations (Prednisolone 40mg = Methylprednisolone 32mg), DEXA screening for glucocorticoid-induced osteoporosis, Fludrocortisone in primary adrenal failure, and HPA axis tapering rules.',
    questionCount: 5,
    pageRange: '',
    colorTheme: 'amber',
    iconName: 'Pill',
    highYieldConcepts: [
      'Acute Addisonian crisis (hypotension, vomiting, hyponatremia/hyperkalemia) requires STAT IV Hydrocortisone 100 mg',
      'Steroid equivalence ratio: Prednisolone 5 mg = Methylprednisolone 4 mg (40 mg Prednisolone = 32 mg IV Methylprednisolone)',
      'Long-term systemic corticosteroid therapy (>3 months) requires DEXA bone mineral density scanning for osteoporosis',
      'Primary adrenal failure with persistent hyperkalemia and salt-wasting requires daily Fludrocortisone mineralocorticoid replacement',
      'Steroids taken >3 weeks cause Hypothalamic-Pituitary-Adrenal (HPA) axis suppression and must be tapered gradually'
    ]
  },
  {
    id: 'bacterial_meningitis',
    title: 'Management of Bacterial Meningitis',
    category: 'Infectious Diseases & Toxicology',
    description: 'CSF analysis (neutrophilic pleocytosis, low glucose ratio), Adjunctive Dexamethasone timing with first antibiotic dose, blood cultures + empiric antibiotics before CT/LP in focal deficits, DIC/purpura fulminans, and Abducens (CN VI) palsy.',
    questionCount: 5,
    pageRange: '',
    colorTheme: 'purple',
    iconName: 'Brain',
    highYieldConcepts: [
      'CSF neutrophilic pleocytosis (>1000/uL with >80% PMNs) + high protein + low glucose is diagnostic of bacterial meningitis',
      'Dexamethasone (10 mg IV) should be administered prior to or concurrently with the first dose of IV antibiotics in pneumococcal meningitis',
      'In patients with focal neurological deficits or altered GCS, draw blood cultures and start IV antibiotics immediately BEFORE brain CT and LP',
      'Meningococcemia with purpuric non-blanching rash and prolonged PT/aPTT indicates Disseminated Intravascular Coagulation (DIC)',
      'Sixth cranial nerve (abducens) palsy with lateral rectus weakness and diplopia is a classic false localizing sign of elevated intracranial pressure'
    ]
  },
  {
    id: 'basic_life_support',
    title: 'Basic Life Support (BLS)',
    category: 'Emergency & Critical Care',
    description: 'Immediate EMS activation and AED retrieval in adult unresponsiveness with agonal gasping, immediate defibrillation for VF, 2-minute compressor rotation to prevent fatigue, CPR + AED prioritization in opioid cardiac arrest, and rescue breathing in respiratory arrest.',
    questionCount: 5,
    pageRange: '',
    colorTheme: 'rose',
    iconName: 'HeartPulse',
    highYieldConcepts: [
      'Unresponsive adult with absent/agonal breathing requires immediate EMS activation and AED retrieval before starting CPR',
      'When the AED announces "Shock advised", deliver the shock and immediately resume chest compressions without pausing for pulse checks',
      'Chest compression quality degrades rapidly after 1–2 minutes; rotate CPR compressors every 2 minutes (or every 5 cycles)',
      'In suspected opioid-induced cardiac arrest, high-quality CPR and early defibrillation take precedence over naloxone administration',
      'Unresponsive patient in respiratory arrest with a palpable pulse: provide rescue ventilation (1 breath every 5–6 seconds) and consider naloxone'
    ]
  }
];
