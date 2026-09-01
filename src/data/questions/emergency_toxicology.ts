import { Question } from '../../types';

export const EMERGENCY_TOXICOLOGY_QUESTIONS: Question[] = [
  // ----------------------------------------------------
  // MANAGEMENT OF SNAKE BITES (Pages 6-8)
  // ----------------------------------------------------
  {
    id: 'snake_q1',
    topicId: 'snake_bites',
    topicTitle: 'Management of Snake Bites',
    questionNumber: 1,
    clinicalVignette: 'A 50-year-old farmer develops generalized muscle pain and dark urine following snakebite. Laboratory testing reveals CK of 28,000 U/L, potassium of 6.0 mmol/L and rising creatinine. His coagulation profile is normal. Which of the following venom effects best accounts for the combination of findings?',
    options: [
      { id: 'A', text: 'Predominantly haemotoxic envenoming with secondary intravascular bleeding' },
      { id: 'B', text: 'Predominantly neurotoxic envenoming complicated by renal hypoperfusion' },
      { id: 'C', text: 'Predominantly myotoxic envenoming with secondary acute kidney injury' },
      { id: 'D', text: 'Predominantly cytotoxic envenoming causing isolated glomerular injury' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Predominantly myotoxic envenoming with secondary acute kidney injury',
    explanation: 'Certain snake venoms contain potent myotoxins (such as phospholipase A2 enzymes) that induce widespread skeletal muscle breakdown (rhabdomyolysis). This leads to massive release of creatine kinase (CK 28,000 U/L), potassium (6.0 mmol/L), and myoglobin into the circulation, causing dark urine (myoglobinuria). Myoglobin casts precipitate in renal tubules, leading to acute tubular necrosis and secondary acute kidney injury. Coagulation parameters remain completely normal in pure myotoxic envenoming.',
    optionRationales: {
      A: 'Haemotoxic venoms cause venom-induced consumption coagulopathy (prolonged PT/INR, low fibrinogen, active hemorrhage), which is absent here.',
      B: 'Neurotoxic venoms cause cranial nerve palsies and respiratory muscle paralysis, not massive CK release.',
      C: 'Correct. Severe myalgia, CK > 20,000 U/L, hyperkalemia, dark urine, and rising creatinine with normal coagulation define myotoxic envenomation.',
      D: 'Cytotoxins produce extensive local soft tissue necrosis and blistering, rather than isolated systemic rhabdomyolysis.'
    },
    keyTakeaway: 'Myotoxic snake envenomation produces severe generalized myalgia, massive CK elevation, myoglobinuria (dark urine), hyperkalemia, and secondary acute kidney injury.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Snake Bite', 'Myotoxicity', 'Rhabdomyolysis', 'AKI', 'Creatine Kinase']
  },
  {
    id: 'snake_q2',
    topicId: 'snake_bites',
    topicTitle: 'Management of Snake Bites',
    questionNumber: 2,
    clinicalVignette: 'A 43-year-old farmer presents 7 hours after a snakebite sustained while working in a rice field. He has progressive swelling of the bitten limb and bleeding from the gums. His BP is 118/72 mmHg and pulse is 102/min. A 20-minute whole blood clotting test is incoagulable. He has not received antivenom. The hospital has a polyvalent antivenom whose manufacturer recommends an initial dose of 10 vials for adults with systemic envenoming. Which of the following is the most appropriate management?',
    options: [
      { id: 'A', text: 'Administer 10 vials and reassess clinically and repeat coagulation profile' },
      { id: 'B', text: 'Administer 5 vials initially because the patient is haemodynamically stable' },
      { id: 'C', text: 'Administer 10 vials only after cross-matching blood because correction of coagulopathy is the immediate priority' },
      { id: 'D', text: 'Administer 20 vials initially because the presence of local swelling indicates severe envenoming' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Administer 10 vials and reassess clinically and repeat coagulation profile',
    explanation: 'Systemic envenomation is unequivocally confirmed by spontaneous systemic bleeding (gingival bleeding) and an incoagulable 20-minute whole blood clotting test (20WBCT). When systemic envenoming is present, the full manufacturer-recommended starting dose (10 vials) must be infused intravenously immediately without dose reduction for hemodynamic stability and without delaying for blood cross-matching. The patient should be reassessed clinically and the 20WBCT repeated at 6 hours; persistent coagulopathy warrants a repeat antivenom dose.',
    optionRationales: {
      A: 'Correct. Administer the full 10-vial manufacturer recommended dose immediately, followed by serial clinical and 20WBCT monitoring.',
      B: 'Starting doses should not be halved or reduced for stable vitals when systemic coagulopathy is present.',
      C: 'Antivenom must never be delayed to wait for blood cross-matching; antivenom neutralizes unbound circulating venom directly.',
      D: 'Arbitrarily doubling the initial dose without prior reassessment increases adverse reaction risk without proven added efficacy.'
    },
    keyTakeaway: 'The full recommended initial antivenom dose must be given promptly once systemic envenomation or coagulopathy is established, followed by serial coagulation reassessment at 6 hours.',
    sourcePageRef: '',
    difficulty: 'Core Clinical',
    tags: ['Snake Bite', 'Antivenom Dosing', '20WBCT', 'VICC', 'Protocol']
  },
  {
    id: 'snake_q3',
    topicId: 'snake_bites',
    topicTitle: 'Management of Snake Bites',
    questionNumber: 3,
    clinicalVignette: 'A 50-year-old man with suspected viper envenomation has severe limb pain. His 20WBCT is incoagulable and he has mild gingival bleeding. Which analgesic should generally be avoided?',
    options: [
      { id: 'A', text: 'Paracetamol' },
      { id: 'B', text: 'Ibuprofen' },
      { id: 'C', text: 'Morphine' },
      { id: 'D', text: 'Tramadol' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Ibuprofen',
    explanation: 'Non-steroidal anti-inflammatory drugs (NSAIDs) such as ibuprofen, diclofenac, and aspirin inhibit platelet cyclooxygenase-1 (COX-1), impairing platelet aggregation and damaging gastric mucosal defenses. In patients with venom-induced consumption coagulopathy (VICC) and an incoagulable 20WBCT, NSAIDs exacerbate the bleeding diathesis and dramatically increase the risk of catastrophic gastrointestinal and intracranial hemorrhage. Paracetamol (acetaminophen) and opioids (morphine, tramadol) are safe because they do not affect platelet aggregation or clotting cascade factors.',
    optionRationales: {
      A: 'Paracetamol does not impair platelet function or coagulation and is safe as a first-line mild analgesic.',
      B: 'Correct. Ibuprofen and other NSAIDs impair platelet function and worsen bleeding risk in venom-induced coagulopathy.',
      C: 'Morphine provides effective analgesia without compromising clotting factors or platelets.',
      D: 'Tramadol is a safe weak opioid agonist for moderate pain in venomous coagulopathic bites.'
    },
    keyTakeaway: 'NSAIDs are strictly contraindicated in venomous snakebites with coagulopathy because they impair platelet aggregation and worsen hemorrhage risk.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Snake Bite', 'Analgesia', 'Contraindications', 'NSAIDs', 'Coagulopathy']
  },
  {
    id: 'snake_q4',
    topicId: 'snake_bites',
    topicTitle: 'Management of Snake Bites',
    questionNumber: 4,
    clinicalVignette: 'A 46-year-old cattle rearer develops severe pain and swelling of the lower limb after snakebite. Six hours after admission, the limb is tense and painful. He has pain on passive extension of the toes and new paraesthesia. The dorsalis pedis pulse is palpable. Which of the following best explains why the presence of a palpable pulse does not exclude the suspected diagnosis?',
    options: [
      { id: 'A', text: 'Venous obstruction produces loss of distal arterial pulses before neurological symptoms' },
      { id: 'B', text: 'Snake venom causes isolated arterial vasoconstriction without affecting tissue pressure' },
      { id: 'C', text: 'Distal pulses are routinely absent only after antivenom administration' },
      { id: 'D', text: 'Arterial pressure may be preserved until relatively late in compartment syndrome' }
    ],
    correctOption: 'D',
    correctAnswerText: 'Arterial pressure may be preserved until relatively late in compartment syndrome',
    explanation: 'Acute compartment syndrome occurs when elevated intracompartmental tissue pressure exceeds microvascular capillary perfusion pressure, causing muscle and nerve ischemia. Because systolic conduit arterial pressure (typically 100–140 mmHg) is much higher than tissue capillary closing pressure (typically 30–40 mmHg), distal arterial pulses remain palpable until very late stages of gangrene and irreversible necrosis. Pain out of proportion to injury, pain on passive stretch, and paresthesias are the early cardinal diagnostic signs.',
    optionRationales: {
      A: 'Neurological symptoms and ischemic pain occur first; loss of distal pulses occurs very late.',
      B: 'Venom cytotoxic enzymes cause capillary permeability, edema, and marked tissue pressure elevation.',
      C: 'Antivenom does not cause loss of pulses.',
      D: 'Correct. Conduit arterial pressure is preserved long after microvascular capillary collapse occurs, so palpable pulses are commonly present.'
    },
    keyTakeaway: 'The presence of palpable distal pulses does NOT rule out acute compartment syndrome; pain out of proportion and pain on passive muscle stretch are the earliest sensitive clinical signs.',
    sourcePageRef: '',
    difficulty: 'Core Clinical',
    tags: ['Compartment Syndrome', 'Snake Bite', 'Pathophysiology', 'Physical Exam']
  },
  {
    id: 'snake_q5',
    topicId: 'snake_bites',
    topicTitle: 'Management of Snake Bites',
    questionNumber: 5,
    clinicalVignette: 'A 44-year-old farmer presents with severe myalgia and dark urine 12 hours after snakebite. Urine dipstick is strongly positive for blood, but microscopy shows very few red blood cells. CK is 15,000 U/L. Which of the following is the most appropriate immediate management strategy?',
    options: [
      { id: 'A', text: 'Empirical antibiotics for presumed urinary tract infection' },
      { id: 'B', text: 'Red-cell transfusion because the urine represents gross haematuria' },
      { id: 'C', text: 'Aggressive fluid therapy with close monitoring of renal function and electrolytes' },
      { id: 'D', text: 'Fluid restriction to prevent renal tubular obstruction' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Aggressive fluid therapy with close monitoring of renal function and electrolytes',
    explanation: 'The classic discordance of a dipstick strongly positive for "blood/heme" (which detects both hemoglobin and myoglobin) with very few/no intact red blood cells on urine microscopy, accompanied by severe muscle pain and CK 15,000 U/L, confirms myoglobinuria from rhabdomyolysis. Aggressive intravenous fluid therapy (titrated to maintain urine output of 2–3 mL/kg/h) is the cornerstone of management to flush renal tubules, dilute myoglobin, prevent ferrihemate cast precipitation, and protect against acute tubular necrosis.',
    optionRationales: {
      A: 'This is myoglobinuria from snakebite rhabdomyolysis, not a bacterial urinary tract infection.',
      B: 'Transfusion is not indicated for isolated myoglobinuria without active hemorrhagic anemia.',
      C: 'Correct. Aggressive crystalloid hydration prevents myoglobin cast deposition and acute tubular necrosis in rhabdomyolysis.',
      D: 'Fluid restriction in active rhabdomyolysis accelerates renal cast precipitation and causes acute renal failure.'
    },
    keyTakeaway: 'A positive urine dipstick for heme with few/no RBCs on microscopy indicates myoglobinuria from rhabdomyolysis; treatment requires immediate aggressive intravenous fluid resuscitation.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Myoglobinuria', 'Rhabdomyolysis', 'Hydration', 'Snake Bite', 'AKI']
  },

  // ----------------------------------------------------
  // MANAGEMENT OF MALARIA (Pages 25-28)
  // ----------------------------------------------------
  {
    id: 'mal_q1',
    topicId: 'malaria_management',
    topicTitle: 'Management of Malaria',
    questionNumber: 1,
    clinicalVignette: 'A 29-year-old man with severe falciparum malaria is treated with intravenous artesunate. His parasite density falls substantially, and his overall clinical condition improves. By day 4, he remains mildly febrile, with a parasite density of 0.3%, but is haemodynamically stable and tolerating oral medication. Which of the following findings would most strongly suggest treatment failure and warrant reassessment of the antimalarial regimen?',
    options: [
      { id: 'A', text: 'Persistent low-grade fever despite clinical improvement' },
      { id: 'B', text: 'Detectable parasitaemia during early clinical recovery' },
      { id: 'C', text: 'Clinical deterioration with a rising parasite density despite adequate therapy' },
      { id: 'D', text: 'Mild headache following recovery of consciousness' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Clinical deterioration with a rising parasite density despite adequate therapy',
    explanation: 'According to WHO malaria management guidelines, early treatment failure is defined by clinical deterioration or the development of danger signs accompanied by a rising parasite count despite adequate parenteral antimalarial therapy. Persistent low-grade fever or low residual parasitemia (e.g. 0.3%) during the first few days of recovery is common due to delayed cytokine clearance and clearance of dead circulating parasites, but true treatment failure requires clinical worsening with ascending parasitemia.',
    optionRationales: {
      A: 'Low-grade fever often persists during recovery due to inflammatory cytokine release and does not alone signify treatment failure.',
      B: 'Detectable parasitemia during early recovery is expected as dead parasites are cleared by the spleen.',
      C: 'Correct. Clinical deterioration combined with rising parasite density indicates antimalarial resistance or failure requiring regimen change.',
      D: 'Mild post-treatment headache is a common nonspecific post-febrile symptom.'
    },
    keyTakeaway: 'Antimalarial treatment failure is confirmed by clinical deterioration with rising parasite density despite compliant therapeutic dosing.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Severe Malaria', 'Artesunate Failure', 'WHO Guidelines', 'Treatment Failure']
  },
  {
    id: 'mal_q2',
    topicId: 'malaria_management',
    topicTitle: 'Management of Malaria',
    questionNumber: 2,
    clinicalVignette: 'A 24-year-old man was admitted with severe Plasmodium falciparum malaria and treated with intravenous artesunate followed by a complete oral antimalarial regimen. He made an uncomplicated recovery, with a haemoglobin concentration of 12.4 g/dL and no detectable parasitaemia at discharge. Ten days later, he presents with increasing fatigue, scleral icterus, and dark-coloured urine. His haemoglobin is now 7.1 g/dL. Laboratory evaluation shows an elevated indirect bilirubin and lactate dehydrogenase with a low haptoglobin concentration. Repeat blood film shows no malaria parasites. He has no evidence of active bleeding, and renal function is preserved. Which of the following is the most likely explanation for his current presentation?',
    options: [
      { id: 'A', text: 'Recrudescence of P. falciparum infection causing recurrent haemolysis' },
      { id: 'B', text: 'Delayed haemolytic anaemia associated with previous artesunate therapy' },
      { id: 'C', text: 'Acute haemolysis secondary to acquired glucose-6-phosphate dehydrogenase deficiency' },
      { id: 'D', text: 'Disseminated intravascular coagulation due to persistent severe malaria' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Delayed haemolytic anaemia associated with previous artesunate therapy',
    explanation: 'Post-Artesunate Delayed Hemolysis (PADH) is a well-described entity occurring 1 to 3 weeks following parenteral artesunate therapy for severe hyperparasitemic falciparum malaria. Artesunate rapidly kills intraerythrocytic parasites, and the spleen "pits" (expels) dead parasites, returning the damaged "once-parasitized erythrocytes" to the circulation. These pitted red blood cells have a significantly shortened lifespan and undergo synchronous splenic destruction 7–21 days later, resulting in hemolytic anemia, unconjugated hyperbilirubinemia, elevated LDH, and undetectable haptoglobin with absent parasitemia.',
    optionRationales: {
      A: 'Repeat blood smear is negative for malaria parasites, ruling out recrudescence.',
      B: 'Correct. Delayed hemolytic anemia 1–3 weeks post-artesunate with low haptoglobin and negative blood smear defines PADH.',
      C: 'G6PD deficiency is an inherited X-linked disorder, not an acquired deficiency.',
      D: 'DIC presents with coagulopathy, thrombocytopenia, and bleeding, not isolated delayed hemolysis.'
    },
    keyTakeaway: 'Post-Artesunate Delayed Hemolysis (PADH) manifests with Coombs-negative hemolytic anemia and low haptoglobin 1–3 weeks after parenteral artesunate therapy.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['PADH', 'Artesunate', 'Delayed Hemolysis', 'Severe Malaria']
  },
  {
    id: 'mal_q3',
    topicId: 'malaria_management',
    topicTitle: 'Management of Malaria',
    questionNumber: 3,
    clinicalVignette: 'A 40-year-old man with severe falciparum malaria develops persistent hypotension despite initial fluid resuscitation. His blood pressure is 78/46 mmHg, the respiratory rate is 32/min, the serum lactate is 6.2 mmol/L, and the temperature is 39.5°C. His lungs are clear on auscultation, and there is no evidence of external blood loss. Which of the following should be actively considered as a cause of his persistent shock in addition to severe malaria?',
    options: [
      { id: 'A', text: 'Concurrent bacterial sepsis' },
      { id: 'B', text: 'Acute adrenal insufficiency is the most likely cause' },
      { id: 'C', text: 'Dehydration as the sole explanation' },
      { id: 'D', text: 'Pulmonary embolism is the most likely cause' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Concurrent bacterial sepsis',
    explanation: 'Severe falciparum malaria causes intestinal mucosal ischemia and gut barrier breakdown, allowing bacterial translocation and a high incidence of concurrent secondary bacterial sepsis and bacteremia (frequently non-typhoidal Salmonella or enteric Gram-negative bacilli). When a patient with severe malaria presents with refractory hypotension, elevated lactate (>4 mmol/L), and septic shock that does not respond to fluid resuscitation, concurrent bacterial sepsis ("algid malaria") must be actively suspected and treated with broad-spectrum intravenous antibiotics (e.g. ceftriaxone) alongside antimalarials.',
    optionRationales: {
      A: 'Correct. Bacterial co-infection and sepsis frequently complicate severe malaria and cause refractory distributive shock.',
      B: 'Adrenal insufficiency can occur but bacterial sepsis is far more common in severe malaria shock.',
      C: 'The patient had persistent shock despite initial fluid resuscitation, indicating distributive shock beyond simple dehydration.',
      D: 'Clear lungs and high fever in severe malaria point to septic/distributive shock rather than PE.'
    },
    keyTakeaway: 'Persistent shock in severe falciparum malaria warrants immediate empiric broad-spectrum IV antibiotics for concurrent bacterial sepsis / bacteremia.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Severe Malaria', 'Bacterial Sepsis', 'Algid Malaria', 'Distributive Shock']
  },
  {
    id: 'mal_q4',
    topicId: 'malaria_management',
    topicTitle: 'Management of Malaria',
    questionNumber: 4,
    clinicalVignette: 'A 33-year-old man initially presents with severe malaria and impaired consciousness. After 48 hours of parenteral therapy, he is fully conscious and able to swallow. An ACT is being selected for his follow-on treatment. Which additional consideration is particularly relevant when selecting the oral regimen?',
    options: [
      { id: 'A', text: 'ACTs containing mefloquine should be avoided' },
      { id: 'B', text: 'All ACTs are contraindicated following cerebral malaria' },
      { id: 'C', text: 'Chloroquine should replace ACT' },
      { id: 'D', text: 'Oral treatment should be withheld until the parasite count reaches zero' }
    ],
    correctOption: 'A',
    correctAnswerText: 'ACTs containing mefloquine should be avoided',
    explanation: 'Mefloquine is known to cause significant neuropsychiatric adverse effects, including seizures, acute psychosis, severe anxiety, hallucinations, and sleep disturbances. In patients who have recently suffered from cerebral malaria or impaired consciousness, the blood-brain barrier is vulnerable and central nervous system excitability is altered. Therefore, mefloquine-containing regimens (e.g. Artesunate-Mefloquine) should be strictly avoided. Artemether-lumefantrine or Dihydroartemisinin-piperaquine are safe and preferred.',
    optionRationales: {
      A: 'Correct. Mefloquine carries neuropsychiatric toxicity and should be avoided in patients recovering from cerebral malaria.',
      B: 'ACTs are the mandatory first-line oral follow-on therapy once the patient can swallow.',
      C: 'Chloroquine is ineffective due to widespread falciparum resistance.',
      D: 'Oral follow-on treatment must be started as soon as the patient tolerates oral medication; waiting for zero count risks recrudescence.'
    },
    keyTakeaway: 'Artesunate-Mefloquine is avoided in patients recovering from cerebral malaria due to heightened risk of neuropsychiatric toxicity.',
    sourcePageRef: '',
    difficulty: 'Core Clinical',
    tags: ['Malaria', 'Mefloquine', 'Cerebral Malaria', 'ACT Selection']
  },
  {
    id: 'mal_q5',
    topicId: 'malaria_management',
    topicTitle: 'Management of Malaria',
    questionNumber: 5,
    clinicalVignette: 'A 57-year-old man with severe falciparum malaria has been receiving appropriate treatment. On day 3, his urine output falls substantially. Creatinine is 510 µmol/L, potassium is 6.7 mmol/L, and arterial pH is 7.12. He has already received appropriate emergency treatment for hyperkalaemia. His JVP is elevated, and lungs contain bilateral basal crackles. Which of the following is the best next step?',
    options: [
      { id: 'A', text: 'Give a further 2 L of isotonic saline' },
      { id: 'B', text: 'Administer high-dose furosemide' },
      { id: 'C', text: 'Initiate renal replacement therapy' },
      { id: 'D', text: 'Increase the dose of parenteral artesunate' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Initiate renal replacement therapy',
    explanation: 'The patient has developed severe acute kidney injury (creatinine 510 µmol/L) with multiple urgent life-threatening dialytic indications: refractory severe hyperkalemia (6.7 mmol/L despite medical shifting), severe uncompensated metabolic acidosis (pH 7.12), and hypervolemic pulmonary congestion (elevated JVP, bilateral crackles). In this setting, emergency Renal Replacement Therapy (hemodialysis or CRRT) is life-saving and mandatory.',
    optionRationales: {
      A: 'Additional fluid will worsen volume overload and precipitate fatal acute pulmonary edema.',
      B: 'Furosemide in anuric/oliguric severe AKI with acidosis will not provide adequate clearance and delays dialysis.',
      C: 'Correct. Refractory hyperkalemia, profound metabolic acidosis, and fluid overload in severe malaria AKI are definitive indications for immediate RRT.',
      D: 'Artesunate dose does not require adjustment in AKI, and increasing it will not treat acute hyperkalemic acidosis.'
    },
    keyTakeaway: 'Malarial acute kidney injury with refractory hyperkalemia, severe metabolic acidosis, and fluid overload mandates immediate renal replacement therapy.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Malarial AKI', 'Dialysis Indications', 'Hyperkalemia', 'Critical Care']
  },

  // ----------------------------------------------------
  // MANAGEMENT OF TETANUS (Pages 50-51)
  // ----------------------------------------------------
  {
    id: 'tet_q1',
    topicId: 'tetanus_management',
    topicTitle: 'Management of Tetanus',
    questionNumber: 1,
    clinicalVignette: 'A 72-year-old female with an unknown vaccination history presents with generalized muscle stiffness, diaphoresis, labile blood pressure, and sinus tachycardia. She developed trismus 24 hours after her initial symptom of general malaise. She is admitted to an intensive care unit. Which set of baseline factors in this patient’s presentation indicates the poorest overall prognosis?',
    options: [
      { id: 'A', text: 'Female sex and elevated blood pressure' },
      { id: 'B', text: 'Advanced age, short incubation period, and short onset time' },
      { id: 'C', text: 'Presence of trismus and autonomic diaphoresis' },
      { id: 'D', text: 'Unknown vaccination history and hyperreflexia' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Advanced age, short incubation period, and short onset time',
    explanation: 'In the Dakar and Patel & Joag prognostic classification systems for tetanus, the strongest predictors of poor prognosis and high mortality are: (1) advanced age (>60 years), (2) a short incubation period (<7 days from injury to first symptom), and (3) a short period of onset / period of progression (<48 hours from first symptom to first generalized spasm or trismus). Autonomic storms and older age compound the risk of respiratory failure and cardiovascular collapse.',
    optionRationales: {
      A: 'Sex is not a major prognostic determinant in tetanus scoring systems.',
      B: 'Correct. Advanced age, short incubation (<7 days), and short onset time (<48h) are classic predictors of high mortality.',
      C: 'Trismus is the universal presenting sign; it does not specifically distinguish mild from fatal disease without timing.',
      D: 'Unknown vaccination is a risk factor for acquiring disease, but short onset time and age determine clinical prognosis.'
    },
    keyTakeaway: 'Advanced age, short incubation period (<7 days), and short onset time (<48 hours) are the cardinal baseline indicators of poor prognosis in tetanus.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Tetanus', 'Prognostic Indicators', 'Incubation Period', 'Onset Time']
  },
  {
    id: 'tet_q2',
    topicId: 'tetanus_management',
    topicTitle: 'Management of Tetanus',
    questionNumber: 2,
    clinicalVignette: 'An 8-year-old boy is brought to the clinic after presenting with otitis media and a purulent discharge from his middle ear. Over the last 2 days, his mother noticed that he developed a asymmetrical facial droop and difficulty closing his left eye, along with masseter muscle tightness. On examination, cranial nerve VII weakness is confirmed. Which form of tetanus is this patient exhibiting, and what is its expected prognostic outcome?',
    options: [
      { id: 'A', text: 'Localized tetanus; excellent prognosis with localized recovery' },
      { id: 'B', text: 'Cephalic tetanus; poor prognosis and invariably fatal' },
      { id: 'C', text: 'Generalized tetanus; moderate prognosis depending on airway control' },
      { id: 'D', text: 'Neonatal tetanus; fatal without immediate exchange transfusion' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Cephalic tetanus; poor prognosis and invariably fatal',
    explanation: 'Cephalic tetanus is a rare, severe form of localized tetanus that follows head/neck injuries or chronic middle ear infections (otogenic tetanus). It involves the cranial nerves, most commonly cranial nerve VII (facial nerve palsy), along with trismus and dysphagia. Cephalic tetanus frequently progresses rapidly to generalized tetanus and respiratory failure and carries a notoriously poor prognosis with high mortality if not aggressively managed in an ICU.',
    optionRationales: {
      A: 'Isolated limb localized tetanus has a good prognosis, but cephalic tetanus involving cranial nerves has a very poor prognosis.',
      B: 'Correct. Cephalic tetanus arises from head/ear infections, involves CN VII, and carries a poor/grave prognosis.',
      C: 'This patient specifically exhibits cranial nerve involvement following otitis media, which defines cephalic tetanus.',
      D: 'Neonatal tetanus occurs in newborns following umbilical cord contamination, not in an 8-year-old.'
    },
    keyTakeaway: 'Cephalic tetanus involves cranial nerve VII following head/ear infections and carries a poor prognosis with high risk of progression to fatal spasms.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Cephalic Tetanus', 'Otitis Media', 'CN VII Palsy', 'Prognosis']
  },
  {
    id: 'tet_q3',
    topicId: 'tetanus_management',
    topicTitle: 'Management of Tetanus',
    questionNumber: 3,
    clinicalVignette: 'A 50-year-old man with established generalized tetanus is admitted to the medical high-dependency unit. He experiences frequent, painful generalized muscular spasms that are readily precipitated by ambient hospital noise and physical handling. Which nursing and medical environment setting is most vital to reduce the frequency of these reflex spasms?',
    options: [
      { id: 'A', text: 'Continuous high-flow nasal oxygen in a brightly lit observation bay' },
      { id: 'B', text: 'Frequent passive range-of-motion physical therapy every 2 hours' },
      { id: 'C', text: 'A quiet, isolated, darkened, and well-ventilated room' },
      { id: 'D', text: 'Placement in an open intensive care unit with continuous auditory alarm monitoring' }
    ],
    correctOption: 'C',
    correctAnswerText: 'A quiet, isolated, darkened, and well-ventilated room',
    explanation: 'In tetanus, the tetanospasmin toxin blocks inhibitory glycine and GABA release from Renshaw cells and spinal interneurons, leaving motor neurons in a state of extreme reflex hypersensitivity. Minimal sensory stimuli—such as loud noises, bright lights, sudden drafts, or physical touch—trigger severe, exhausting, and potentially fatal reflex muscle spasms and laryngospasm. Placing the patient in a quiet, isolated, darkened, and well-ventilated room with minimal handling and clustered nursing interventions is a fundamental pillar of conservative management.',
    optionRationales: {
      A: 'Bright lights and loud equipment stimulate reflex tetanic spasms.',
      B: 'Physical handling and manipulation provoke reflex spasms and must be minimized.',
      C: 'Correct. A quiet, darkened, isolated room minimizes external sensory stimuli that trigger reflex spasms.',
      D: 'Auditory alarms and open ICU bustle exacerbate muscular spasm frequency.'
    },
    keyTakeaway: 'Patients with generalized tetanus must be nursed in a quiet, isolated, darkened, and temperature-controlled room to prevent sensory-triggered reflex spasms.',
    sourcePageRef: '',
    difficulty: 'Core Clinical',
    tags: ['Tetanus', 'Nursing Care', 'Spasm Prevention', 'Sensory Isolation']
  },

  // ----------------------------------------------------
  // PRINCIPLES OF MANAGING DRUG POISONING (Pages 65-67)
  // ----------------------------------------------------
  {
    id: 'tox_q1',
    topicId: 'drug_poisoning',
    topicTitle: 'Principles of Managing Drug Poisoning',
    questionNumber: 1,
    clinicalVignette: 'A 28-year-old man presents with severe salicylate poisoning. He has tachypnea, tinnitus, confusion and metabolic abnormalities. Despite supportive treatment, his serum salicylate concentration remains dangerously high. Which intervention can enhance elimination of salicylate?',
    options: [
      { id: 'A', text: 'Urinary acidification' },
      { id: 'B', text: 'Urinary alkalinization' },
      { id: 'C', text: 'Activated charcoal only' },
      { id: 'D', text: 'Flumazenil' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Urinary alkalinization',
    explanation: 'Salicylate (aspirin) is a weak acid with a pKa of 3.0. In an acidic environment, it remains in the non-ionized, lipid-soluble state, which easily crosses the blood-brain barrier and is freely reabsorbed across renal tubular cells back into the systemic circulation. Administering intravenous Sodium Bicarbonate (to achieve a urine pH of 7.5–8.5 and systemic arterial pH of 7.45–7.55) "ion-traps" salicylate in its ionized form (salicylate anion) in the renal tubular lumen, preventing passive reabsorption and dramatically accelerating urinary excretion.',
    optionRationales: {
      A: 'Urinary acidification promotes tubular reabsorption and increases central nervous system penetration of salicylate, worsening toxicity.',
      B: 'Correct. Urinary alkalinization (target urine pH 7.5–8.5) ion-traps salicylate in renal tubules and enhances excretion.',
      C: 'Activated charcoal is useful early for gastrointestinal decontamination, but does not enhance systemic renal clearance.',
      D: 'Flumazenil is a benzodiazepine receptor antagonist with no role in salicylate poisoning.'
    },
    keyTakeaway: 'Urinary alkalinization with IV sodium bicarbonate (target urine pH 7.5–8.5) ion-traps salicylate and accelerates its renal elimination.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Toxicology', 'Salicylate Poisoning', 'Urinary Alkalinization', 'Ion Trapping']
  },
  {
    id: 'tox_q2',
    topicId: 'drug_poisoning',
    topicTitle: 'Principles of Managing Drug Poisoning',
    questionNumber: 2,
    clinicalVignette: 'A 30-year-old man is brought to the emergency department after ingesting an unknown quantity of sustained-release tablets. He is unconscious with a GCS of 6 and has inadequate spontaneous ventilation. Which of the following is the most appropriate approach?',
    options: [
      { id: 'A', text: 'Give activated charcoal immediately through a nasogastric tube without securing the airway' },
      { id: 'B', text: 'Induce vomiting' },
      { id: 'C', text: 'Secure the airway and provide appropriate supportive care before considering gastrointestinal decontamination' },
      { id: 'D', text: 'Perform gastric lavage without intubation' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Secure the airway and provide appropriate supportive care before considering gastrointestinal decontamination',
    explanation: 'The fundamental rule in emergency toxicology is "treat the patient, not the poison." In an unconscious patient with a Glasgow Coma Scale (GCS) score <= 8 and inadequate spontaneous ventilation, the loss of protective airway reflexes creates an extreme risk of catastrophic charcoal/gastric content pulmonary aspiration. Immediate endotracheal intubation and mechanical ventilatory support (ABC resuscitation) must take priority over all decontamination efforts. Gastrointestinal decontamination can only be considered once the airway is securely cuffed.',
    optionRationales: {
      A: 'Administering charcoal without securing an unprotected airway in a comatose patient carries high risk of fatal aspiration pneumonitis.',
      B: 'Inducing vomiting (e.g. ipecac) is strictly contraindicated in obtunded patients due to aspiration risk.',
      C: 'Correct. Immediate airway control (endotracheal intubation) and ventilatory support must precede any decontamination.',
      D: 'Gastric lavage without an endotracheal tube in an unconscious patient carries massive aspiration risk.'
    },
    keyTakeaway: 'Airway protection via endotracheal intubation must strictly precede any gastrointestinal decontamination in an unconscious poisoned patient.',
    sourcePageRef: '',
    difficulty: 'Core Clinical',
    tags: ['Toxicology', 'Airway Management', 'GCS', 'Decontamination Safety']
  },
  {
    id: 'tox_q3',
    topicId: 'drug_poisoning',
    topicTitle: 'Principles of Managing Drug Poisoning',
    questionNumber: 3,
    clinicalVignette: 'A 32-year-old man presents after taking a massive overdose of a drug that is highly water soluble, has a low molecular weight, a low volume of distribution, and limited protein binding. He develops severe toxicity despite supportive treatment. Which principle of poisoning management is most applicable?',
    options: [
      { id: 'A', text: 'Gastric lavage is always indicated' },
      { id: 'B', text: 'Hemodialysis may enhance toxin elimination' },
      { id: 'C', text: 'Activated charcoal is effective against all toxins' },
      { id: 'D', text: 'Urinary acidification should always be performed' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Hemodialysis may enhance toxin elimination',
    explanation: 'Extracorporeal toxin clearance via Intermittent Hemodialysis is most effective when a drug exhibits the classic pharmacokinetic profile: (1) low molecular weight (<500 Da), (2) high water solubility, (3) low volume of distribution (Vd < 1 L/kg, meaning the toxin remains largely in the intravascular/extracellular compartment), and (4) low protein binding (<50%). Classic examples of dialyzable poisons matching this profile include toxic alcohols (methanol, ethylene glycol), salicylates, lithium, theophylline, and valproate.',
    optionRationales: {
      A: 'Gastric lavage is rarely indicated and only within 1 hour of a life-threatening ingestion.',
      B: 'Correct. Low molecular weight, low volume of distribution, high water solubility, and low protein binding make a toxin ideal for hemodialysis.',
      C: 'Activated charcoal does not bind heavy metals, iron, lithium, cyanide, or toxic alcohols.',
      D: 'Urinary acidification is rarely used in modern clinical practice due to high risk of renal failure and worsening metabolic acidosis.'
    },
    keyTakeaway: 'Hemodialysis effectively eliminates poisons with low molecular weight, low volume of distribution (<1 L/kg), high water solubility, and low protein binding.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Toxicology', 'Hemodialysis', 'Extracorporeal Elimination', 'Pharmacokinetics']
  },
  {
    id: 'tox_q4',
    topicId: 'drug_poisoning',
    topicTitle: 'Principles of Managing Drug Poisoning',
    questionNumber: 4,
    clinicalVignette: 'A 40-year-old farmer presents with excessive salivation, lacrimation, vomiting, diarrhea, bronchorrhea, miosis and muscle fasciculations after pesticide exposure. Which treatment is most appropriate?',
    options: [
      { id: 'A', text: 'Naloxone' },
      { id: 'B', text: 'Atropine plus pralidoxime' },
      { id: 'C', text: 'N-acetylcysteine' },
      { id: 'D', text: 'Sodium bicarbonate' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Atropine plus pralidoxime',
    explanation: 'The clinical presentation of "SLUDGE/DUMBELS" (Salivation, Lacrimation, Urination, Diarrhea, GI cramping, Emesis, Bronchorrhea, Bradycardia, Miosis) combined with nicotinic fasciculations indicates acute Cholinergic Toxidrome from Organophosphate or Carbamate pesticide poisoning (acetylcholinesterase inhibition). Management requires: (1) high-dose IV Atropine (competitive muscarinic antagonist) titrated until pulmonary bronchorrhea and bronchospasm clear, plus (2) Pralidoxime (2-PAM, an oxime that reactivates phosphorylated acetylcholinesterase before irreversible "aging" occurs).',
    optionRationales: {
      A: 'Naloxone is an opioid receptor antagonist.',
      B: 'Correct. Atropine reverses life-threatening muscarinic bronchorrhea, and pralidoxime reactivates acetylcholinesterase.',
      C: 'N-acetylcysteine is the specific antidote for acetaminophen (paracetamol) hepatotoxicity.',
      D: 'Sodium bicarbonate is used for TCA overdose and salicylate alkalinization.'
    },
    keyTakeaway: 'Organophosphate poisoning requires IV Atropine to control lethal bronchorrhea alongside Pralidoxime (2-PAM) to reactivate acetylcholinesterase.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Organophosphates', 'Cholinergic Toxidrome', 'Atropine', 'Pralidoxime', 'Antidotes']
  },
  {
    id: 'tox_q5',
    topicId: 'drug_poisoning',
    topicTitle: 'Principles of Managing Drug Poisoning',
    questionNumber: 5,
    clinicalVignette: 'A 24-year-old man is brought to the emergency department 30 minutes after ingesting an unknown number of tablets during an argument. He is drowsy but responds to painful stimuli. BP is 110/70 mmHg, pulse 92/min, RR 8/min, and SpO₂ is 89% on room air. His pupils are pinpoint. Which of the following is the most appropriate immediate management?',
    options: [
      { id: 'A', text: 'Administer activated charcoal' },
      { id: 'B', text: 'Perform gastric lavage' },
      { id: 'C', text: 'Administer naloxone and support ventilation' },
      { id: 'D', text: 'Obtain a comprehensive toxicology screen' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Administer naloxone and support ventilation',
    explanation: 'The classic opioid toxidrome triad consists of: (1) central nervous system depression (drowsiness/coma), (2) severe respiratory depression (bradypnea, RR 8/min, hypoxemia SpO2 89%), and (3) miosis (pinpoint pupils). The immediate, life-saving therapeutic intervention is establishing airway oxygenation/bag-mask ventilation and administering Naloxone (a pure opioid mu-receptor competitive antagonist) IV or IM to restore adequate spontaneous ventilation.',
    optionRationales: {
      A: 'Giving charcoal to a patient with depressed consciousness and respiratory failure risks fatal pulmonary aspiration.',
      B: 'Gastric lavage carries severe risk of aspiration and is not indicated.',
      C: 'Correct. Ventilatory support with bag-valve-mask and IV/IM Naloxone is the immediate life-saving intervention for opioid hypoventilation.',
      D: 'Toxicology screens take hours and never delay acute antidotal resuscitation.'
    },
    keyTakeaway: 'Opioid toxidrome (coma, pinpoint pupils, respiratory depression) requires immediate ventilatory support and titrated IV/IM Naloxone.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Opioid Overdose', 'Naloxone', 'Respiratory Depression', 'Toxidromes']
  },

  // ----------------------------------------------------
  // MANAGEMENT OF BACTERIAL MENINGITIS (Pages 75-77)
  // ----------------------------------------------------
  {
    id: 'men_q1',
    topicId: 'bacterial_meningitis',
    topicTitle: 'Management of Bacterial Meningitis',
    questionNumber: 1,
    clinicalVignette: 'A 26-year-old woman presents with fever, headache and neck stiffness. Her CSF results are: WBC: 4,200 cells/µL; Neutrophils: 95%; Protein: 3.1 g/L; CSF glucose: 3.0 mmol/L; Serum glucose taken at the same time: 10 mmol/L; Opening pressure: markedly elevated. Which finding most strongly supports bacterial meningitis?',
    options: [
      { id: 'A', text: 'CSF glucose of 3.0 mmol/L' },
      { id: 'B', text: 'Elevated serum glucose' },
      { id: 'C', text: 'Neutrophilic pleocytosis' },
      { id: 'D', text: 'Elevated serum glucose with normal CSF glucose' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Neutrophilic pleocytosis',
    explanation: 'The hallmark diagnostic finding in acute bacterial (purulent) meningitis is a marked CSF pleocytosis (>1,000 cells/µL) with overwhelming polymorphonuclear neutrophil predominance (neutrophils > 80–90%). In viral meningitis, lymphocytes predominate. Furthermore, the CSF-to-serum glucose ratio is severely depressed (3.0 / 10 = 0.30, normal is >= 0.60) and protein is markedly elevated (3.1 g/L, normal <0.45 g/L), reflecting intense blood-brain barrier disruption and bacterial consumption.',
    optionRationales: {
      A: 'An absolute CSF glucose of 3.0 mmol/L must be interpreted relative to serum glucose (10 mmol/L, ratio 0.30), but neutrophilic pleocytosis is the most definitive cytological hallmark of bacterial infection.',
      B: 'Serum glucose elevation is a nonspecific systemic stress response.',
      C: 'Correct. Marked WBC elevation (4,200/µL) with 95% neutrophils (neutrophilic pleocytosis) strongly distinguishes bacterial meningitis from viral/aseptic etiologies.',
      D: 'The CSF glucose is actually low relative to serum glucose.'
    },
    keyTakeaway: 'Marked CSF pleocytosis with >80-90% neutrophils (neutrophilic pleocytosis) accompanied by low CSF:serum glucose ratio (<0.4) is diagnostic of acute bacterial meningitis.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Bacterial Meningitis', 'CSF Analysis', 'Neutrophilic Pleocytosis', 'Infectious Disease']
  },
  {
    id: 'men_q2',
    topicId: 'bacterial_meningitis',
    topicTitle: 'Management of Bacterial Meningitis',
    questionNumber: 2,
    clinicalVignette: 'A 45-year-old man presents with suspected bacterial meningitis. He is about to receive his first dose of IV antibiotics. Which statement regarding dexamethasone is most appropriate?',
    options: [
      { id: 'A', text: 'It should routinely replace antibiotics' },
      { id: 'B', text: 'It should only be started after culture results are available' },
      { id: 'C', text: 'It may be given with or just before the first antibiotic dose in appropriate suspected bacterial meningitis' },
      { id: 'D', text: 'It is contraindicated in all adults' }
    ],
    correctOption: 'C',
    correctAnswerText: 'It may be given with or just before the first antibiotic dose in appropriate suspected bacterial meningitis',
    explanation: 'Adjunctive Dexamethasone (10 mg IV every 6 hours for 4 days) significantly reduces hearing loss, neurological sequelae, and mortality in acute bacterial meningitis (especially Streptococcus pneumoniae). To be effective, dexamethasone must be administered 15–20 minutes prior to or concurrently with the first dose of parenteral antibiotics. Giving steroids after antibiotics have lysed bacteria does not prevent the massive inflammatory cascade triggered by cell wall endotoxin/peptidoglycan release.',
    optionRationales: {
      A: 'Dexamethasone is an anti-inflammatory adjunct; bactericidal antibiotics remain mandatory.',
      B: 'Waiting for culture results (24–48h) completely abrogates the protective anti-inflammatory benefit of early steroids.',
      C: 'Correct. Dexamethasone should be administered before or with the initial antibiotic dose in suspected adult bacterial meningitis.',
      D: 'Dexamethasone is recommended in high-income and standard emergency guidelines for adult pneumococcal/bacterial meningitis.'
    },
    keyTakeaway: 'Adjunctive IV Dexamethasone should be administered prior to or with the first antibiotic dose to suppress bacteriolysis-induced meningeal inflammation.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Bacterial Meningitis', 'Dexamethasone', 'Adjunctive Steroids', 'Pneumococcal Meningitis']
  },
  {
    id: 'men_q3',
    topicId: 'bacterial_meningitis',
    topicTitle: 'Management of Bacterial Meningitis',
    questionNumber: 3,
    clinicalVignette: 'A 24-year-old man presents with a 10-hour history of fever, severe headache, vomiting and neck stiffness. On examination, he is confused with a GCS of 11/15 and has a new right-sided weakness. Temperature is 39.5°C. What is the most appropriate immediate approach?',
    options: [
      { id: 'A', text: 'Perform lumbar puncture immediately' },
      { id: 'B', text: 'Perform lumbar puncture after giving analgesics' },
      { id: 'C', text: 'Obtain blood cultures, commence empirical IV antibiotics and arrange urgent brain imaging' },
      { id: 'D', text: 'Wait for the CT result before starting antibiotics' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Obtain blood cultures, commence empirical IV antibiotics and arrange urgent brain imaging',
    explanation: 'In suspected bacterial meningitis, the presence of focal neurological deficits (right-sided weakness) or altered level of consciousness (GCS 11/15) indicates risk of cerebral edema, space-occupying lesion, and imminent cerebral herniation during immediate lumbar puncture. In this high-risk setting: (1) draw blood cultures immediately, (2) start empirical intravenous antibiotics (e.g. Ceftriaxone + Vancomycin +/- Ampicillin) and dexamethasone without delay, and (3) perform a non-contrast head CT before lumbar puncture.',
    optionRationales: {
      A: 'Immediate LP without prior neuroimaging is contraindicated in the presence of focal neurological deficits and depressed GCS due to brain herniation risk.',
      B: 'Analgesia does not mitigate the physical herniation risk.',
      C: 'Correct. Draw blood cultures, administer empirical IV antibiotics immediately, and obtain head CT prior to performing LP.',
      D: 'Antibiotics must never be delayed while awaiting CT scanner availability; antibiotic delay significantly increases mortality.'
    },
    keyTakeaway: 'When focal neurological deficits or altered consciousness are present in suspected meningitis, draw blood cultures and start IV antibiotics immediately BEFORE obtaining a head CT and performing LP.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Meningitis Protocol', 'Herniation Risk', 'Head CT', 'Empirical Antibiotics']
  },
  {
    id: 'men_q4',
    topicId: 'bacterial_meningitis',
    topicTitle: 'Management of Bacterial Meningitis',
    questionNumber: 4,
    clinicalVignette: 'A 17-year-old boy presents with fever, headache, neck stiffness and a rapidly spreading non-blanching purpuric rash. He is confused, BP is 70/40 mmHg and capillary refill is 5 seconds. Laboratory results show: Platelets: 45 × 10⁹/L; PT: prolonged; aPTT: prolonged; Fibrinogen: low; D-dimer: markedly elevated. What is the most likely underlying complication?',
    options: [
      { id: 'A', text: 'Hemolytic uraemic syndrome' },
      { id: 'B', text: 'Disseminated intravascular coagulation' },
      { id: 'C', text: 'Thrombotic thrombocytopenic purpura' },
      { id: 'D', text: 'Immune thrombocytopenia' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Disseminated intravascular coagulation',
    explanation: 'Neisseria meningitidis (meningococcal disease) releases massive amounts of endotoxin (lipooligosaccharide), triggering systemic endothelial injury, widespread tissue factor activation, microvascular thrombosis, and secondary consumption of clotting factors and platelets (Purpura Fulminans). The classic laboratory quartet of severe thrombocytopenia (45k), prolonged PT, prolonged aPTT, low fibrinogen, and markedly elevated D-dimer confirms Disseminated Intravascular Coagulation (DIC).',
    optionRationales: {
      A: 'HUS causes hemolytic anemia and renal failure without broad coagulopathy (normal PT/aPTT).',
      B: 'Correct. Severe purpuric rash, shock, thrombocytopenia, prolonged PT/aPTT, low fibrinogen, and high D-dimer define DIC / purpura fulminans.',
      C: 'TTP presents with microangiopathic hemolytic anemia and fever with normal PT and aPTT.',
      D: 'ITP is an isolated autoimmune platelet destruction without coagulopathy, septic shock, or elevated D-dimer.'
    },
    keyTakeaway: 'Rapidly spreading non-blanching purpuric rash in meningococcal sepsis with thrombocytopenia, prolonged PT/aPTT, and low fibrinogen indicates severe DIC.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Meningococcemia', 'DIC', 'Purpura Fulminans', 'Coagulopathy', 'Sepsis']
  },
  {
    id: 'men_q5',
    topicId: 'bacterial_meningitis',
    topicTitle: 'Management of Bacterial Meningitis',
    questionNumber: 5,
    clinicalVignette: 'A 9-year-old child with bacterial meningitis develops a new-onset squint and diplopia during admission. Examination reveals impaired lateral movement of the affected eye. Which cranial nerve is most likely affected?',
    options: [
      { id: 'A', text: 'CN II' },
      { id: 'B', text: 'CN III' },
      { id: 'C', text: 'CN IV' },
      { id: 'D', text: 'CN VI' }
    ],
    correctOption: 'D',
    correctAnswerText: 'CN VI',
    explanation: 'Cranial nerve VI (abducens nerve) innervates the lateral rectus muscle, which is responsible for lateral abduction of the eye. CN VI has the longest intracranial subarachnoid course of any cranial nerve, traveling along the clivus and over the petrous temporal bone ridge. Due to its long anatomical course, it is uniquely susceptible to compression from elevated intracranial pressure (ICP) in bacterial meningitis, producing convergent stridor/squint and inability to abduct the affected eye (a classic "false localizing sign").',
    optionRationales: {
      A: 'CN II (optic nerve) mediates visual acuity and pupillary afferents, not ocular motility.',
      B: 'CN III palsy causes ptosis, "down-and-out" eye deviation, and a dilated unreactive pupil.',
      C: 'CN IV innervates superior oblique (inward and downward rotation; vertical diplopia).',
      D: 'Correct. Cranial nerve VI (abducens nerve) controls the lateral rectus; palsy impairs lateral eye abduction.'
    },
    keyTakeaway: 'Abducens nerve (CN VI) palsy causes impaired lateral eye movement and is the classic false localizing cranial neuropathy seen in elevated intracranial pressure from meningitis.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Bacterial Meningitis', 'CN VI Palsy', 'Abducens Nerve', 'False Localizing Sign']
  }
];
