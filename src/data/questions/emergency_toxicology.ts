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
    clinicalVignette: 'A 50-year-old farmer develops generalized muscle pain and dark urine following a snakebite. Laboratory testing reveals a serum creatine kinase (CK) of 28,000 U/L, potassium of 6.0 mmol/L, and a rapidly rising serum creatinine. His baseline coagulation profile (PT/INR and aPTT) is completely normal. Which of the following venom effects best accounts for this combination of clinical and laboratory findings?',
    options: [
      { id: 'A', text: 'Predominantly haemotoxic envenoming with secondary intravascular bleeding' },
      { id: 'B', text: 'Predominantly neurotoxic envenoming complicated by renal hypoperfusion' },
      { id: 'C', text: 'Predominantly myotoxic envenoming with secondary acute kidney injury' },
      { id: 'D', text: 'Predominantly cytotoxic envenoming causing isolated glomerular injury' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Predominantly myotoxic envenoming with secondary acute kidney injury',
    explanation: 'Certain snake venoms (such as sea snakes, Hydrophiidae, and specific Australasian and South American vipers) contain potent myotoxins (phospholipase A2 myotoxins) that induce widespread skeletal muscle necrosis (rhabdomyolysis). This releases massive amounts of myoglobin, creatine kinase (CK > 20,000 U/L), and potassium into circulation. Myoglobin precipitates in the renal tubules in an acidic environment, generating ferrihemate casts, lipid peroxidation, and acute tubular necrosis (myoglobinuric acute kidney injury). Coagulation parameters remain normal in pure myotoxic envenomation.',
    optionRationales: {
      A: 'Haemotoxic envenoming (e.g., Echis ocellatus) produces consumption coagulopathy (VICC) with prolonged PT/INR, low fibrinogen, and spontaneous bleeding, which is not present here.',
      B: 'Neurotoxic envenoming typically causes descending motor paralysis (ptosis, bulbar palsy, respiratory arrest) without massive CK elevation.',
      C: 'Correct. Severe myalgia, CK 28,000 U/L, dark urine (myoglobinuria), hyperkalemia, and AKI with normal coagulation define myotoxic envenomation.',
      D: 'Cytotoxins cause extensive local tissue necrosis and blistering, not selective rhabdomyolysis with intact coagulation.'
    },
    keyTakeaway: 'Snake venom-induced myotoxicity manifests with severe generalized myalgia, massive CK elevation, myoglobinuria (dark urine), hyperkalemia, and secondary acute tubular necrosis.',
    sourcePageRef: 'Page 6, Q1',
    difficulty: 'High Yield',
    tags: ['Snake Bite', 'Myotoxicity', 'Rhabdomyolysis', 'AKI', 'Creatine Kinase']
  },
  {
    id: 'snake_q2',
    topicId: 'snake_bites',
    topicTitle: 'Management of Snake Bites',
    questionNumber: 2,
    clinicalVignette: 'A 43-year-old farmer presents 7 hours after a snakebite sustained while working in a rice field. He has progressive swelling of the bitten limb and bleeding from the gums. His blood pressure is 118/72 mmHg and pulse is 102 beats/min. A 20-minute whole blood clotting test (20WBCT) is incoagulable (liquid at 20 minutes). He has not yet received antivenom. The hospital stocks a polyvalent antivenom whose manufacturer recommends an initial starting dose of 10 vials for adults with systemic envenoming. Which of the following is the most appropriate initial management?',
    options: [
      { id: 'A', text: 'Administer 10 vials immediately and reassess clinically and repeat coagulation profile after 6 hours' },
      { id: 'B', text: 'Administer 5 vials initially because the patient is hemodynamically stable' },
      { id: 'C', text: 'Administer 10 vials only after cross-matching blood because correction of coagulopathy is the immediate priority' },
      { id: 'D', text: 'Administer 20 vials initially because the presence of local swelling indicates severe envenoming' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Administer 10 vials immediately and reassess clinically and repeat coagulation profile after 6 hours',
    explanation: 'Systemic envenoming is unequivocally confirmed by spontaneous systemic bleeding (gingival hemorrhage) and an incoagulable 20-minute whole blood clotting test (20WBCT). When indicated, the full recommended starting dose of antivenom (10 vials) must be administered intravenously immediately without reduction for blood pressure stability and without delaying for blood cross-matching. The patient should then be reassessed, and the 20WBCT repeated at 6 hours; if coagulopathy persists, a repeat dose is administered.',
    optionRationales: {
      A: 'Correct. Administer the full 10-vial manufacturer recommended dose immediately, followed by serial clinical and 20WBCT monitoring.',
      B: 'Starting doses should not be halved or reduced for stable vitals when systemic coagulopathy is present.',
      C: 'Antivenom must never be delayed to wait for blood cross-matching; antivenom neutralizes unbound circulating venom directly.',
      D: 'Arbitrarily doubling the initial dose without prior reassessment increases adverse reaction risk without proven added efficacy.'
    },
    keyTakeaway: 'The full recommended initial antivenom dose must be given promptly once systemic envenomation or coagulopathy is established, followed by serial coagulation reassessment at 6 hours.',
    sourcePageRef: 'Pages 6–7, Q2',
    difficulty: 'Core Clinical',
    tags: ['Snake Bite', 'Antivenom Dosing', '20WBCT', 'VICC', 'Protocol']
  },
  {
    id: 'snake_q3',
    topicId: 'snake_bites',
    topicTitle: 'Management of Snake Bites',
    questionNumber: 3,
    clinicalVignette: 'A 50-year-old man with suspected viper envenomation has severe, distressing limb pain. His 20-minute whole blood clotting test (20WBCT) is incoagulable, and he has mild gingival bleeding. Which of the following analgesic agents should be strictly avoided in this patient?',
    options: [
      { id: 'A', text: 'Oral Paracetamol (Acetaminophen)' },
      { id: 'B', text: 'Intravenous or Oral Ibuprofen (Non-Steroidal Anti-inflammatory Drugs)' },
      { id: 'C', text: 'Intravenous Morphine' },
      { id: 'D', text: 'Oral Tramadol' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Intravenous or Oral Ibuprofen (Non-Steroidal Anti-inflammatory Drugs)',
    explanation: 'Non-steroidal anti-inflammatory drugs (NSAIDs) such as ibuprofen, diclofenac, ketorolac, naproxen, and aspirin inhibit platelet cyclooxygenase-1 (COX-1), impairing platelet thromboxane A2 synthesis and platelet aggregation. In the setting of viper envenomation with venom-induced consumption coagulopathy (VICC) and an incoagulable 20WBCT, NSAIDs severely exacerbate bleeding diathesis and increase the risk of catastrophic gastrointestinal and intracranial hemorrhage. Paracetamol and opioids (tramadol, morphine) do not impair platelet function or coagulation and are safe.',
    optionRationales: {
      A: 'Paracetamol is safe and recommended as first-line mild analgesic in snakebite coagulopathy.',
      B: 'Correct. NSAIDs impair platelet function and exacerbate venom-induced coagulopathy and bleeding.',
      C: 'Morphine provides excellent severe pain control without compromising clotting factors or platelets.',
      D: 'Tramadol is a safe opioid agonist for moderate pain in venomous coagulopathic bites.'
    },
    keyTakeaway: 'NSAIDs are strictly contraindicated in venomous snakebites with coagulopathy because they impair platelet aggregation and worsen hemorrhage risk.',
    sourcePageRef: 'Page 7, Q3',
    difficulty: 'High Yield',
    tags: ['Snake Bite', 'Analgesia', 'Contraindications', 'NSAIDs', 'Coagulopathy']
  },
  {
    id: 'snake_q4',
    topicId: 'snake_bites',
    topicTitle: 'Management of Snake Bites',
    questionNumber: 4,
    clinicalVignette: 'A 46-year-old cattle rearer develops severe pain and swelling of the lower limb after a snakebite. Six hours after admission, the limb is extremely tense, swollen, and tender. He exhibits exquisite pain on passive extension of the toes and reports new-onset numbness and paresthesias over the foot. The dorsalis pedis pulse remains easily palpable. Which of the following best explains why the presence of a palpable arterial pulse does NOT exclude the diagnosis of acute compartment syndrome?',
    options: [
      { id: 'A', text: 'Venous obstruction produces loss of distal arterial pulses before neurological symptoms occur' },
      { id: 'B', text: 'Snake venom causes isolated arterial vasoconstriction without affecting tissue pressure' },
      { id: 'C', text: 'Distal pulses are routinely absent only after antivenom administration' },
      { id: 'D', text: 'Intracompartmental tissue pressure exceeds microvascular capillary perfusion pressure long before exceeding systolic arterial pressure' }
    ],
    correctOption: 'D',
    correctAnswerText: 'Intracompartmental tissue pressure exceeds microvascular capillary perfusion pressure long before exceeding systolic arterial pressure',
    explanation: 'Acute compartment syndrome occurs when elevated intracompartmental pressure (>30 mmHg or within 30 mmHg of diastolic blood pressure) exceeds capillary perfusion pressure, causing microvascular collapse, tissue ischemia, and severe neuropathic pain with passive stretch and paresthesia. Because systolic blood pressure (e.g. 120 mmHg) is significantly higher than tissue capillary closing pressure, large conduit arterial flow and palpable distal pulses are preserved until late, irreversible gangrenous stages. Pulselessness is a late and unreliable sign.',
    optionRationales: {
      A: 'Neurological symptoms and ischemic pain occur first; loss of distal pulses occurs very late.',
      B: 'Venom cytotoxic enzymes cause capillary permeability, edema, and marked tissue pressure elevation.',
      C: 'Antivenom does not cause loss of pulses.',
      D: 'Correct. Intracompartmental pressure causes tissue ischemia and capillary collapse long before exceeding systolic arterial pressure, so palpable pulses are commonly preserved.'
    },
    keyTakeaway: 'The presence of palpable distal pulses does NOT rule out acute compartment syndrome; pain out of proportion and pain on passive muscle stretch are the earliest sensitive clinical signs.',
    sourcePageRef: 'Pages 7–8, Q4',
    difficulty: 'Core Clinical',
    tags: ['Compartment Syndrome', 'Snake Bite', 'Pathophysiology', 'Physical Exam']
  },
  {
    id: 'snake_q5',
    topicId: 'snake_bites',
    topicTitle: 'Management of Snake Bites',
    questionNumber: 5,
    clinicalVignette: 'A 44-year-old farmer presents with severe generalized muscle tenderness and dark brownish urine 12 hours after a snakebite. A urine dipstick examination is strongly positive (4+) for "blood/heme", but microscopic examination of the centrifuged urine sediment reveals only 1 to 2 red blood cells per high-power field. Serum creatine kinase (CK) is 15,000 U/L. Which of the following is the most appropriate immediate management strategy?',
    options: [
      { id: 'A', text: 'Empirical oral ciprofloxacin for presumed acute hemorrhagic urinary tract infection' },
      { id: 'B', text: 'Immediate packed red blood cell transfusion because the urine represents gross hematuria' },
      { id: 'C', text: 'Aggressive intravenous crystalloid fluid resuscitation (3–4 L/24h) with close monitoring of urine output and renal function' },
      { id: 'D', text: 'Strict fluid restriction to prevent renal tubular swelling and pulmonary congestion' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Aggressive intravenous crystalloid fluid resuscitation (3–4 L/24h) with close monitoring of urine output and renal function',
    explanation: 'The discordance between a strongly positive dipstick for "heme/blood" (which reacts with both hemoglobin and myoglobin) and the absence of intact red blood cells on urine microscopy, in the setting of severe myalgia and CK 15,000 U/L, is the classic pathognomonic finding of myoglobinuria from rhabdomyolysis. Aggressive IV fluid resuscitation (titrated to maintain urine output of 2–3 mL/kg/h) is the cornerstone of therapy to dilute myoglobin, prevent intratubular ferrihemate cast precipitation, and prevent acute kidney injury.',
    optionRationales: {
      A: 'This is myoglobinuria from snakebite rhabdomyolysis, not a bacterial urinary tract infection.',
      B: 'Transfusion is not indicated for isolated myoglobinuria without active hemorrhagic anemia.',
      C: 'Correct. Aggressive crystalloid hydration prevents myoglobin cast deposition and acute tubular necrosis in rhabdomyolysis.',
      D: 'Fluid restriction in active rhabdomyolysis accelerates renal cast precipitation and causes acute renal failure.'
    },
    keyTakeaway: 'A positive urine dipstick for heme with few/no RBCs on microscopy indicates myoglobinuria from rhabdomyolysis; treatment requires immediate aggressive intravenous fluid resuscitation.',
    sourcePageRef: 'Page 8, Q5',
    difficulty: 'High Yield',
    tags: ['Myoglobinuria', 'Rhabdomyolysis', 'Hydration', 'Snake Bite', 'AKI']
  },

  // ----------------------------------------------------
  // MANAGEMENT OF TETANUS (Pages 49-50)
  // ----------------------------------------------------
  {
    id: 'tet_q1',
    topicId: 'tetanus_management',
    topicTitle: 'Management of Tetanus',
    questionNumber: 1,
    clinicalVignette: 'A 68-year-old unimmunized farmer sustains a dirty puncture wound from a rusted nail while working in a barn. Three days later, he presents with severe lockjaw (trismus), painful neck spasms, and autonomic instability (labile blood pressure and tachycardia). Alongside wound debridement and human tetanus immunoglobulin (HTIG), which antibiotic regimen is preferred as first-line therapy for eradicating Clostridium tetani vegetative cells in the wound?',
    options: [
      { id: 'A', text: 'Intravenous Metronidazole 500 mg every 6 to 8 hours' },
      { id: 'B', text: 'Intramuscular Penicillin G 2 to 4 million units every 4 hours' },
      { id: 'C', text: 'Oral Ciprofloxacin 500 mg twice daily' },
      { id: 'D', text: 'Intravenous Gentamicin 5 mg/kg once daily' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Intravenous Metronidazole 500 mg every 6 to 8 hours',
    explanation: 'Intravenous Metronidazole (500 mg IV q6–8h for 7–10 days) is the antimicrobial agent of choice for eradicating vegetative Clostridium tetani at the infection site. While Penicillin G was used historically, penicillin is a competitive antagonist of GABAA receptors and can theoretically worsen muscular spasms and neuroexcitation. Metronidazole penetrates anaerobic necrotic tissues effectively, has no GABA-antagonistic properties, and is associated with reduced mortality and shorter hospital stays compared to penicillin.',
    optionRationales: {
      A: 'Correct. IV Metronidazole is first-line because it eradicates C. tetani without GABA antagonism.',
      B: 'Penicillin G is a GABA antagonist and can exacerbate muscle spasms in tetanus.',
      C: 'Fluoroquinolones have poor anaerobic activity against Clostridium species.',
      D: 'Aminoglycosides are inactive against obligate anaerobes like Clostridium tetani.'
    },
    keyTakeaway: 'Metronidazole is the preferred antibiotic for tetanus because Penicillin G is a GABA antagonist that can exacerbate muscular spasms.',
    sourcePageRef: 'Page 49, Q1',
    difficulty: 'High Yield',
    tags: ['Tetanus', 'Metronidazole', 'Pharmacology', 'GABA Antagonism', 'Clostridium tetani']
  },
  {
    id: 'tet_q2',
    topicId: 'tetanus_management',
    topicTitle: 'Management of Tetanus',
    questionNumber: 2,
    clinicalVignette: 'A 9-year-old child presents with chronic left ear discharge and develops difficulty opening his mouth, stiffness in the neck, and risus sardonicus without history of limb trauma. The physician diagnoses otogenic tetanus. Which is the most appropriate initial pharmacological choice for controlling skeletal muscle rigidity and spasms in generalized tetanus?',
    options: [
      { id: 'A', text: 'Oral Baclofen monotherapy' },
      { id: 'B', text: 'Intravenous Benzodiazepines (e.g., Diazepam infusion or Midazolam) titrated to muscle relaxation without respiratory compromise' },
      { id: 'C', text: 'Immediate administration of non-depolarizing neuromuscular blockade (e.g., Vecuronium) without sedation' },
      { id: 'D', text: 'Oral Chlorpromazine monotherapy' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Intravenous Benzodiazepines (e.g., Diazepam infusion or Midazolam) titrated to muscle relaxation without respiratory compromise',
    explanation: 'Intravenous Benzodiazepines (such as Diazepam or Midazolam) represent the first-line mainstay for controlling muscle stiffness, spasms, and reflex rigidity in tetanus. Benzodiazepines act as central GABAA receptor allosteric modulators, enhancing GABA-mediated inhibitory neurotransmission to overcome the blockade of glycine and GABA release caused by the tetanospasmin neurotoxin. They also provide valuable sedation and amnesia.',
    optionRationales: {
      A: 'Oral baclofen has slow and unpredictable absorption; intrathecal baclofen is reserved for refractory ICU cases.',
      B: 'Correct. IV Benzodiazepines (Diazepam/Midazolam) are first-line agents to overcome tetanospasmin GABA blockade and control spasms.',
      C: 'Neuromuscular blockers should only be used in intubated and mechanically ventilated patients with adequate deep sedation.',
      D: 'Chlorpromazine is only an adjunct; monotherapy does not adequately control life-threatening tetanic spasms.'
    },
    keyTakeaway: 'Intravenous Benzodiazepines (Diazepam / Midazolam) are the primary first-line agents for controlling muscle spasms and rigidity in tetanus.',
    sourcePageRef: 'Pages 49–50, Q2',
    difficulty: 'High Yield',
    tags: ['Tetanus', 'Spasm Control', 'Benzodiazepines', 'Diazepam', 'GABAA']
  },
  {
    id: 'tet_q3',
    topicId: 'tetanus_management',
    topicTitle: 'Management of Tetanus',
    questionNumber: 3,
    clinicalVignette: 'A patient with moderate-to-severe generalized tetanus is admitted to the intensive care unit. During the second week of illness, he develops marked autonomic instability characterized by episodes of extreme hypertension (BP 210/120 mmHg) alternating with hypotension (BP 80/50 mmHg), profuse diaphoresis, and fluctuating supraventricular tachycardias. Which pharmacological agent is most effective for stabilizing this severe sympathetic autonomic storm in tetanus?',
    options: [
      { id: 'A', text: 'High-dose Epinephrine infusion' },
      { id: 'B', text: 'Intravenous Magnesium Sulfate infusion' },
      { id: 'C', text: 'Pure high-dose non-selective beta-blocker (Propranolol) without alpha-blockade' },
      { id: 'D', text: 'Sublingual Nifedipine immediate release' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Intravenous Magnesium Sulfate infusion',
    explanation: 'Autonomic dysfunction (sympathetic overactivity / autonomic storm) in severe tetanus is mediated by disinhibition of sympathetic preganglionic neurons, leading to massive catecholamine release. Intravenous Magnesium Sulfate is the gold-standard agent for autonomic control: it acts as a physiological calcium antagonist, blocks presynaptic catecholamine release from sympathetic nerve terminals and the adrenal medulla, reduces vascular tone, and sedates neuromuscular junctions without inducing direct myocardial depression or unopposed alpha-vasoconstriction.',
    optionRationales: {
      A: 'Epinephrine is a sympathetic agonist and would aggravate hypertensive crises and tachyarrhythmias.',
      B: 'Correct. IV Magnesium sulfate blocks catecholamine release and acts as a vasodilator and spasmolytic agent in autonomic storm.',
      C: 'Unchecked beta-blockade (without alpha-blockade) can precipitate acute pulmonary edema and cardiogenic shock due to unopposed alpha-adrenergic vasoconstriction.',
      D: 'Short-acting nifedipine causes unpredictable precipitous hypotension and reflex tachycardia.'
    },
    keyTakeaway: 'Intravenous Magnesium Sulfate is the drug of choice for managing sympathetic autonomic hyperactivity (labile BP, tachycardia, diaphoresis) in severe tetanus.',
    sourcePageRef: 'Page 50, Q3',
    difficulty: 'Core Clinical',
    tags: ['Tetanus', 'Autonomic Storm', 'Magnesium Sulfate', 'Sympathetic Overactivity']
  },

  // ----------------------------------------------------
  // MANAGEMENT OF MALARIA (Pages 25-28)
  // ----------------------------------------------------
  {
    id: 'mal_q1',
    topicId: 'malaria_management',
    topicTitle: 'Management of Malaria',
    questionNumber: 1,
    clinicalVignette: 'A 28-year-old woman is admitted with severe falciparum malaria and receives intravenous artesunate. After 48 hours of compliant parenteral therapy, she remains persistently febrile and her peripheral blood parasite density has increased from 4% to 7%. Which of the following is the most appropriate next step in management?',
    options: [
      { id: 'A', text: 'Continue IV artesunate at the same dose and observe for another 48 hours' },
      { id: 'B', text: 'Switch immediately to second-line parenteral therapy (e.g., IV quinine infusion with cardiac and glucose monitoring)' },
      { id: 'C', text: 'Add oral chloroquine to the IV artesunate regimen' },
      { id: 'D', text: 'Discontinue antimalarial therapy and start broad-spectrum antibiotics alone' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Switch immediately to second-line parenteral therapy (e.g., IV quinine infusion with cardiac and glucose monitoring)',
    explanation: 'A rise in parasitemia (from 4% to 7%) and persistent clinical failure after 48 hours of parenteral artesunate therapy indicates early antimalarial treatment failure / artesunate resistance. The patient must be immediately switched to an alternative parenteral regimen, specifically intravenous Quinine infusion (with a loading dose of 20 mg salt/kg in 5% dextrose over 4 hours, followed by maintenance 10 mg/kg q8h) under continuous cardiac monitoring (for QT prolongation) and frequent blood glucose checks (to detect quinine-induced hyperinsulinemic hypoglycemia).',
    optionRationales: {
      A: 'Continuing a failing regimen in severe falciparum malaria leads to progressive multi-organ failure and death.',
      B: 'Correct. Treatment failure on first-line IV artesunate mandates an immediate switch to parenteral quinine with cardiac and glucose monitoring.',
      C: 'P. falciparum has widespread high-level chloroquine resistance across sub-Saharan Africa.',
      D: 'Antimalarial therapy cannot be discontinued during active falciparum parasitemia.'
    },
    keyTakeaway: 'Clinical and parasitological failure on IV artesunate warrants an immediate transition to IV Quinine with cardiac and blood glucose monitoring.',
    sourcePageRef: 'Pages 25–26, Q1',
    difficulty: 'High Yield',
    tags: ['Severe Malaria', 'Artesunate Failure', 'IV Quinine', 'Parasitology']
  },
  {
    id: 'mal_q2',
    topicId: 'malaria_management',
    topicTitle: 'Management of Malaria',
    questionNumber: 2,
    clinicalVignette: 'A 34-year-old male traveler successfully treated for severe falciparum malaria with IV artesunate is discharged on oral artemether-lumefantrine. Fourteen days later, he returns with severe fatigue, dark urine, and marked scleral jaundice. Laboratory testing reveals: Hemoglobin 5.4 g/dL (was 11.2 g/dL at discharge), Reticulocyte count 8%, Total bilirubin 4.2 mg/dL (unconjugated 3.6 mg/dL), Serum haptoglobin undetectable, and Blood smear negative for malaria parasites. What is the most likely diagnosis?',
    options: [
      { id: 'A', text: 'Recrudescent falciparum malaria infection' },
      { id: 'B', text: 'Post-Artesunate Delayed Hemolysis (PADH)' },
      { id: 'C', text: 'Autoimmune thrombocytopenic purpura' },
      { id: 'D', text: 'Aplastic crisis secondary to parvovirus B19 infection' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Post-Artesunate Delayed Hemolysis (PADH)',
    explanation: 'Post-Artesunate Delayed Hemolysis (PADH) is a recognized immunological/mechanical complication occurring 1 to 3 weeks after parenteral artesunate therapy for severe hyperparasitemic malaria. Artesunate causes the spleen to "pit" and expel dead parasites from red blood cells ("once-parasitized erythrocytes" / "pitted RBCs"). These damaged erythrocytes return to circulation with a shortened lifespan and undergo accelerated splenic destruction days-to-weeks later, causing delayed hemolytic anemia with low haptoglobin and reticulocytosis.',
    optionRationales: {
      A: 'The blood smear is explicitly negative for malaria parasites.',
      B: 'Correct. Delayed hemolytic anemia 1–3 weeks post-IV artesunate with absent parasites defines PADH.',
      C: 'This is an erythrocyte hemolysis syndrome, not isolated thrombocytopenia.',
      D: 'Aplastic crisis causes reticulocytopenia (<0.1%), whereas reticulocytes here are 8%.'
    },
    keyTakeaway: 'Post-Artesunate Delayed Hemolysis (PADH) causes hemolytic anemia, low haptoglobin, and reticulocytosis 1–3 weeks after IV artesunate therapy.',
    sourcePageRef: 'Page 26, Q2',
    difficulty: 'High Yield',
    tags: ['PADH', 'Artesunate', 'Delayed Hemolysis', 'Severe Malaria']
  },
  {
    id: 'mal_q3',
    topicId: 'malaria_management',
    topicTitle: 'Management of Malaria',
    questionNumber: 3,
    clinicalVignette: 'A 5-year-old boy is admitted with cerebral malaria and severe metabolic acidosis (deep acidotic Kussmaul respirations). Despite 24 hours of IV artesunate and normal blood glucose levels, he develops persistent refractory hypotension, weak pulses, and cold extremities. Which common co-morbidity must be urgently suspected and treated in children with severe malaria and circulatory shock?',
    options: [
      { id: 'A', text: 'Concurrent invasive bacterial bacteremia / sepsis (e.g., non-typhoidal Salmonella or Gram-negative bacilli)' },
      { id: 'B', text: 'Acute viral myocarditis' },
      { id: 'C', text: 'Primary adrenal hypoplasia' },
      { id: 'D', text: 'Hypervitaminosis A toxicity' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Concurrent invasive bacterial bacteremia / sepsis (e.g., non-typhoidal Salmonella or Gram-negative bacilli)',
    explanation: 'Severe falciparum malaria compromises the gut mucosal barrier, leading to high rates (up to 15–20%) of concurrent invasive Non-Typhoidal Salmonella (NTS) and Gram-negative bacterial bacteremia / septic shock in children. Guidelines strongly recommend empirical broad-spectrum parenteral antibiotics (e.g., IV Ceftriaxone or Cefotaxime) in all children presenting with severe malaria, acidosis, shock, or clinical deterioration.',
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
    clinicalVignette: 'A 40-year-old man recovers from cerebral malaria after 3 days of IV artesunate. He is now fully conscious, tolerating oral intake, and needs a full oral Artemisinin-based Combination Therapy (ACT) to complete his eradication course. Which oral ACT should be strictly avoided in patients who have just recovered from cerebral malaria or have active psychiatric illness?',
    options: [
      { id: 'A', text: 'Artemether-Lumefantrine' },
      { id: 'B', text: 'Artesunate-Amodiaquine' },
      { id: 'C', text: 'Artesunate-Mefloquine' },
      { id: 'D', text: 'Dihydroartemisinin-Piperaquine' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Artesunate-Mefloquine',
    explanation: 'Mefloquine is associated with significant central nervous system adverse effects, including severe anxiety, depression, hallucinations, psychosis, nightmares, and encephalopathy. In patients who have suffered cerebral malaria (where the blood-brain barrier is disrupted and central nervous system vulnerability is heightened) or individuals with pre-existing psychiatric disorders or epilepsy, Mefloquine is strictly contraindicated. Artemether-Lumefantrine or Dihydroartemisinin-Piperaquine are preferred.',
    optionRationales: {
      A: 'Artemether-Lumefantrine has an excellent neuro-safety profile and is first-line.',
      B: 'Artesunate-Amodiaquine is acceptable, though amodiaquine can cause GI distress/neutropenia.',
      C: 'Correct. Mefloquine carries neuro-psychiatric toxicity and is contraindicated following cerebral malaria.',
      D: 'Dihydroartemisinin-Piperaquine is effective and well tolerated.'
    },
    keyTakeaway: 'Artesunate-Mefloquine is contraindicated in patients with a history of neuropsychiatric disorders or those recovering from cerebral malaria.',
    sourcePageRef: 'Page 27, Q4',
    difficulty: 'Core Clinical',
    tags: ['Malaria', 'Mefloquine', 'Neuropsychiatric Contraindications', 'ACT']
  },
  {
    id: 'mal_q5',
    topicId: 'malaria_management',
    topicTitle: 'Management of Malaria',
    questionNumber: 5,
    clinicalVignette: 'A 45-year-old man with severe falciparum malaria develops acute kidney injury (creatinine 4.8 mg/dL, oliguria). He is treated with IV artesunate. Which of the following statements regarding dose adjustment of IV artesunate in patients with severe renal or hepatic impairment is correct according to WHO guidelines?',
    options: [
      { id: 'A', text: 'Artesunate dose must be reduced by 50% immediately in severe renal impairment' },
      { id: 'B', text: 'Artesunate is entirely excreted unchanged by the kidneys and requires hemodialysis clearance' },
      { id: 'C', text: 'No dosage reduction of intravenous artesunate is required in patients with renal or hepatic impairment' },
      { id: 'D', text: 'Artesunate should be replaced with chloroquine in the presence of oliguria' }
    ],
    correctOption: 'C',
    correctAnswerText: 'No dosage reduction of intravenous artesunate is required in patients with renal or hepatic impairment',
    explanation: 'Intravenous Artesunate is rapidly converted by blood esterases to its active metabolite, dihydroartemisinin (DHA), which is cleared primarily through hepatic glucuronidation (UGT1A9/UGT2B7) into inactive metabolites. Because artesunate has a wide therapeutic index and severe malaria is an immediately life-threatening emergency, WHO guidelines explicitly state that NO dose adjustments are needed for renal impairment, hemodialysis, or hepatic dysfunction.',
    optionRationales: {
      A: 'Reducing the artesunate dose increases mortality in severe malaria; dose reduction is NOT recommended.',
      B: 'Artesunate is metabolized by esterases and glucuronidation, not cleared unchanged by renal filtration.',
      C: 'Correct. WHO guidelines confirm no dosage adjustments for IV artesunate in renal or hepatic failure.',
      D: 'Chloroquine is ineffective and toxic in severe falciparum malaria.'
    },
    keyTakeaway: 'No dosage adjustment of intravenous artesunate is required in patients with acute kidney injury or hepatic impairment.',
    sourcePageRef: 'Pages 27–28, Q5',
    difficulty: 'Core Clinical',
    tags: ['Artesunate', 'Pharmacokinetics', 'Renal Impairment', 'Severe Malaria', 'WHO Guidelines']
  }
];
