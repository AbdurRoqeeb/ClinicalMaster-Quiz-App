import { Question } from '../../types';

export const EMERGENCY_TOXICOLOGY_QUESTIONS: Question[] = [
  // ----------------------------------------------------
  // SNAKE BITES IN MEDICINE (Pages 25-28)
  // ----------------------------------------------------
  {
    id: 'snake_q1',
    topicId: 'snake_bites',
    topicTitle: 'Snake Bites in Medicine',
    questionNumber: 1,
    clinicalVignette: 'A 28-year-old farmer in rural northern Nigeria is bitten on the right ankle by a carpet viper (Echis ocellatus). Two hours later, he presents to the local clinic with severe local swelling and continuous oozing of blood from the bite marks. A 20-minute whole-blood clotting test (20WBCT) is performed: the blood remains completely liquid after 20 minutes. Which venom component is primarily responsible for this clinical and laboratory presentation?',
    options: [
      { id: 'A', text: 'Phospholipase A2 causing neurotoxic presynaptic blockade' },
      { id: 'B', text: 'Procoagulant venom metalloproteinases inducing consumption coagulopathy (venom-induced consumption coagulopathy, VICC)' },
      { id: 'C', text: 'Cardiotoxic polypeptide causing AV block and myocardial depression' },
      { id: 'D', text: 'Hyaluronidase causing isolated dermal spreading without systemic effects' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Procoagulant venom metalloproteinases inducing consumption coagulopathy (venom-induced consumption coagulopathy, VICC)',
    explanation: 'Echis ocellatus (carpet viper / saw-scaled viper) is the most clinically significant venomous snake in West Africa. Its venom contains ecarin (a procoagulant prothrombin activator) and zinc metalloproteinases (hemorrhagins) that trigger massive, uncontrolled intravascular activation of the clotting cascade. This consumes fibrinogen and clotting factors, leading to severe Venom-Induced Consumption Coagulopathy (VICC), spontaneous systemic bleeding, and uncoagulable blood on 20WBCT.',
    optionRationales: {
      A: 'Phospholipase A2 neurotoxins (presynaptic beta-neurotoxins) are characteristic of elapids (mambas, cobras, kraits), causing flaccid paralysis.',
      B: 'Correct. Procoagulant enzymes and hemorrhagins in Echis venom trigger VICC and uncoagulable blood on 20WBCT.',
      C: 'Cardiotoxins are found in certain elapid venoms and do not cause primary consumption coagulopathy.',
      D: 'Hyaluronidase is a spreading factor present in many venoms, but does not induce VICC.'
    },
    keyTakeaway: 'Echis ocellatus (carpet viper) venom causes Venom-Induced Consumption Coagulopathy (VICC) diagnosed by an uncoagulable 20WBCT.',
    sourcePageRef: 'Pages 25–26, Q1',
    difficulty: 'High Yield',
    tags: ['Snake Bite', 'Echis ocellatus', 'VICC', '20WBCT', 'West Africa']
  },
  {
    id: 'snake_q2',
    topicId: 'snake_bites',
    topicTitle: 'Snake Bites in Medicine',
    questionNumber: 2,
    clinicalVignette: 'A 35-year-old plantation worker is bitten by a cobra. One hour later, he develops bilateral ptosis, diplopia, dysarthria, and difficulty swallowing secretions. Pupils are dilated and sluggish. Which of the following is the most appropriate next step in management alongside antivenom administration?',
    options: [
      { id: 'A', text: 'Perform immediate 20WBCT and give fresh frozen plasma' },
      { id: 'B', text: 'Secure the airway, monitor respiratory mechanics closely, and administer an anticholinesterase (neostigmine with atropine) trial if indicated' },
      { id: 'C', text: 'Apply a tight arterial tourniquet proximal to the bite site' },
      { id: 'D', text: 'Administer broad-spectrum antibiotics and observe for 24 hours' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Secure the airway, monitor respiratory mechanics closely, and administer an anticholinesterase (neostigmine with atropine) trial if indicated',
    explanation: 'Elapid (cobra/mamba) venom contains potent postsynaptic and presynaptic neurotoxins causing descending flaccid paralysis (cranial nerve palsies: ptosis, diplopia, bulbar palsy, followed by diaphragm paralysis). Immediate airway protection and mechanical ventilatory support are paramount. A trial of an anticholinesterase (IV Neostigmine preceded by Atropine to prevent muscarinic side effects) is indicated to test if neuromuscular transmission can be restored in postsynaptic neurotoxicity.',
    optionRationales: {
      A: 'Elapid envenomation is predominantly neurotoxic, not coagulopathic; FFP is ineffective.',
      B: 'Correct. Airway stabilization, respiratory monitoring, and a trial of Neostigmine + Atropine are life-saving.',
      C: 'Tight arterial tourniquets cause severe ischemic necrosis and limb gangrene and are contraindicated.',
      D: 'Antibiotics alone do not treat neurotoxin-mediated respiratory arrest.'
    },
    keyTakeaway: 'Neurotoxic elapid snake bites cause progressive descending flaccid paralysis; manage with airway protection, antivenom, and a trial of neostigmine + atropine.',
    sourcePageRef: 'Pages 26–27, Q2',
    difficulty: 'High Yield',
    tags: ['Snake Bite', 'Neurotoxicity', 'Neostigmine', 'Airway Management']
  },
  {
    id: 'snake_q3',
    topicId: 'snake_bites',
    topicTitle: 'Snake Bites in Medicine',
    questionNumber: 3,
    clinicalVignette: 'A 22-year-old man presents with a confirmed viper bite. Within 10 minutes of starting an intravenous infusion of reconstituted equine polyspecific antivenom, he develops widespread urticaria, wheezing, angioedema, and a drop in blood pressure from 120/80 to 75/45 mmHg. What is the immediate treatment of choice?',
    options: [
      { id: 'A', text: 'Slow the antivenom infusion and give oral paracetamol' },
      { id: 'B', text: 'Stop the antivenom infusion immediately and administer intramuscular adrenaline (epinephrine) 0.5 mg (1:1,000)' },
      { id: 'C', text: 'Administer IV hydrocortisone alone and continue the antivenom at full speed' },
      { id: 'D', text: 'Discontinue antivenom permanently and discharge the patient' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Stop the antivenom infusion immediately and administer intramuscular adrenaline (epinephrine) 0.5 mg (1:1,000)',
    explanation: 'Antivenom is composed of foreign equine/ovine immunoglobulins and frequently triggers acute severe early anaphylactic/anaphylactoid reactions (urticaria, bronchospasm, shock). The mandatory immediate management is to (1) STOP the antivenom infusion instantly, (2) administer Intramuscular Adrenaline (0.5 mg 1:1,000 in adults) into the anterolateral thigh, and (3) provide IV fluid resuscitation, oxygen, antihistamines, and corticosteroids.',
    optionRationales: {
      A: 'Slowing the infusion and giving paracetamol in anaphylactic shock will result in rapid death.',
      B: 'Correct. Immediate cessation of infusion and IM Adrenaline (1:1000) is the first-line lifesaving treatment for antivenom anaphylaxis.',
      C: 'Hydrocortisone takes hours to act and cannot reverse acute bronchospasm or vascular collapse.',
      D: 'Once anaphylaxis is successfully treated, antivenom must be restarted cautiously under adrenaline cover if systemic envenomation persists.'
    },
    keyTakeaway: 'Acute anaphylaxis during antivenom administration requires immediate cessation of the infusion and prompt administration of IM Adrenaline.',
    sourcePageRef: 'Page 27, Q3',
    difficulty: 'High Yield',
    tags: ['Antivenom Anaphylaxis', 'IM Adrenaline', 'Emergency Resuscitation']
  },
  {
    id: 'snake_q4',
    topicId: 'snake_bites',
    topicTitle: 'Snake Bites in Medicine',
    questionNumber: 4,
    clinicalVignette: 'A 40-year-old hunter presents 3 hours after a puff adder (Bitis arietans) bite to his right calf. The leg is severely swollen, tense, wooden-hard, and exquisitely painful on passive toe extension. Pedal pulses are weak. What complication has developed, and what is the definitive initial step in management?',
    options: [
      { id: 'A', text: 'Deep vein thrombosis; administer low-molecular-weight heparin' },
      { id: 'B', text: 'Compartment syndrome; administer adequate antivenom first and measure intracompartmental pressure before considering fasciotomy' },
      { id: 'C', text: 'Cellulitis; start IV vancomycin and apply hot compresses' },
      { id: 'D', text: 'Tetanus infection; give tetanus toxoid and muscle relaxants' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Compartment syndrome; administer adequate antivenom first and measure intracompartmental pressure before considering fasciotomy',
    explanation: 'Puff adder (Bitis arietans) venom contains cytotoxic enzymes causing massive local edema, myonecrosis, and bleeding, which can elevate intracompartmental pressure to cause true or pseudo-compartment syndrome. Standard surgical fasciotomy in an envenomated patient with uncorrected coagulopathy leads to catastrophic hemorrhage. Therefore, the essential first step is full antivenom administration to neutralize venom and correct coagulopathy, combined with intracompartmental pressure measurement.',
    optionRationales: {
      A: 'Anticoagulants are strictly contraindicated in cytotoxic/hemotoxic envenomation.',
      B: 'Correct. Antivenom reversal of venom action and coagulopathy is required before any surgical fasciotomy is undertaken.',
      C: 'This is venom cytotoxicity and compartment syndrome, not primary bacterial cellulitis.',
      D: 'Tetanus causes generalized spasms and trismus, not isolated tense calf compartment syndrome.'
    },
    keyTakeaway: 'Severe swelling and suspected compartment syndrome from snake bite require immediate antivenom therapy and pressure measurement before considering fasciotomy.',
    sourcePageRef: 'Pages 27–28, Q4',
    difficulty: 'High Yield',
    tags: ['Puff Adder', 'Compartment Syndrome', 'Fasciotomy Precautions', 'Cytotoxicity']
  },
  {
    id: 'snake_q5',
    topicId: 'snake_bites',
    topicTitle: 'Snake Bites in Medicine',
    questionNumber: 5,
    clinicalVignette: 'A community health worker asks for advice regarding first-aid practices for snake bite victims in rural villages before hospital arrival. Which of the following traditional first-aid measures is strongly contraindicated and proven to cause severe harm?',
    options: [
      { id: 'A', text: 'Immobilizing the bitten limb with a splint and keeping it at heart level' },
      { id: 'B', text: 'Reassuring the patient and transporting them immediately to a health facility' },
      { id: 'C', text: 'Making local incisions, applying suction ("black stone"), and placing tight arterial tourniquets' },
      { id: 'D', text: 'Removing constricting rings, bracelets, and footwear from the bitten extremity' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Making local incisions, applying suction ("black stone"), and placing tight arterial tourniquets',
    explanation: 'Harmful traditional first-aid practices—such as making incisions at the bite site, oral or mechanical suction, applying "black snake stones", potassium permanganate, herbal concoctions, electrical shocks, or tight arterial tourniquets—are strongly condemned by the WHO. They exacerbate bleeding, introduce severe secondary bacterial infections, accelerate tissue necrosis, and cause limb gangrene requiring amputation.',
    optionRationales: {
      A: 'Limb immobilization with a splint reduces lymphatic spread and is recommended.',
      B: 'Reassurance and rapid transport are the cornerstones of pre-hospital snake bite care.',
      C: 'Correct. Incisions, suction, snake stones, and arterial tourniquets are dangerous, ineffective, and cause severe harm.',
      D: 'Removing constricting jewelry/shoes prevents ischemic strangulation as swelling progresses.'
    },
    keyTakeaway: 'Harmful traditional first aid (incisions, suction, tourniquets, snake stones) is strongly contraindicated in snake bite management.',
    sourcePageRef: 'Page 28, Q5',
    difficulty: 'Core Clinical',
    tags: ['Snake Bite First Aid', 'Contraindicated Practices', 'WHO Guidelines']
  },

  // ----------------------------------------------------
  // MANAGEMENT OF ORGANOPHOSPHATE POISONING (Pages 28-30)
  // ----------------------------------------------------
  {
    id: 'op_q1',
    topicId: 'organophosphate_poisoning',
    topicTitle: 'Management of Organophosphate Poisoning',
    questionNumber: 1,
    clinicalVignette: 'A 24-year-old agricultural worker is brought to the emergency department 1 hour after accidentally spraying himself with an organophosphate insecticide. He is severely agitated, diaphoretic, and salivating profusely. On examination: BP 90/60 mmHg, HR 44 bpm, RR 28/min, SpO₂ 88% on room air. Bilateral diffuse coarse crackles and wheezes are heard on chest auscultation, and pupils are pinpoint (1 mm). What is the definitive initial therapeutic agent of choice, and what is the primary clinical endpoint for titrating this medication?',
    options: [
      { id: 'A', text: 'Pralidoxime (2-PAM); titrate until pupillary dilation reaches 6 mm' },
      { id: 'B', text: 'Atropine; titrate until clear lung fields (resolution of bronchorrhea and bronchospasm) and heart rate >80 bpm' },
      { id: 'C', text: 'Furosemide; titrate until crackles on auscultation resolve' },
      { id: 'D', text: 'Physostigmine; titrate until diaphoresis ceases' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Atropine; titrate until clear lung fields (resolution of bronchorrhea and bronchospasm) and heart rate >80 bpm',
    explanation: 'Organophosphates irreversibly inhibit acetylcholinesterase, causing massive accumulation of acetylcholine at muscarinic and nicotinic synapses. Death occurs primarily from "drowning in pulmonary secretions" (bronchorrhea, bronchospasm, and central respiratory depression). Atropine is a competitive muscarinic antagonist and the definitive life-saving antidote. It is doubled every 3–5 minutes (1–3 mg IV boluses) titrated specifically to the endpoints of atropinization: clear chest auscultation (dry tracheobronchial secretions), heart rate >80 bpm, and dry axillae.',
    optionRationales: {
      A: 'Pralidoxime reactivates acetylcholinesterase, but does not provide immediate muscarinic symptom relief; pupil size is an unreliable marker.',
      B: 'Correct. Atropine titrated to dry bronchial secretions (clear lung fields) and heart rate >80 bpm is the definitive primary resuscitation endpoint.',
      C: 'Crackles are caused by cholinergic bronchorrhea, not cardiogenic pulmonary edema; loop diuretics worsen hypovolemia.',
      D: 'Physostigmine is an acetylcholinesterase inhibitor that would be fatal.'
    },
    keyTakeaway: 'Atropine is the first-line antidote in organophosphate toxicity, titrated to endpoints of clear lungs (dry secretions) and heart rate >80 bpm.',
    sourcePageRef: 'Pages 28–29, Q1',
    difficulty: 'High Yield',
    tags: ['Organophosphate', 'Atropine', 'Atropinization Endpoints', 'Toxicology']
  },
  {
    id: 'op_q2',
    topicId: 'organophosphate_poisoning',
    topicTitle: 'Management of Organophosphate Poisoning',
    questionNumber: 2,
    clinicalVignette: 'An oxime (Pralidoxime / 2-PAM) is administered to a patient with severe organophosphate poisoning. Which biochemical process does pralidoxime facilitate, and why must it be administered before the phenomenon of "aging" occurs?',
    options: [
      { id: 'A', text: 'It competitively blocks postsynaptic nicotinic receptors before they are desensitized' },
      { id: 'B', text: 'It hydrolyzes the covalent organophosphate-acetylcholinesterase bond to regenerate active enzyme before dealkylation renders it permanently irreversible' },
      { id: 'C', text: 'It accelerates hepatic cytochrome P450 oxidation of organophosphates' },
      { id: 'D', text: 'It binds circulating free acetylcholine and accelerates its degradation in plasma' }
    ],
    correctOption: 'B',
    correctAnswerText: 'It hydrolyzes the covalent organophosphate-acetylcholinesterase bond to regenerate active enzyme before dealkylation renders it permanently irreversible',
    explanation: 'Pralidoxime (2-PAM) is an oxime reactivator of acetylcholinesterase (AChE). It binds to the organophosphate-inhibited enzyme and nucleophilically displaces the phosphate group, regenerating active AChE at nicotinic and muscarinic synapses. "Aging" is a non-enzymatic loss of an alkyl side chain (dealkylation) from the organophosphate moiety; once aging occurs, the bond becomes permanently irreversible and refractory to oxime reactivation.',
    optionRationales: {
      A: 'Pralidoxime is an enzyme reactivator, not a receptor antagonist.',
      B: 'Correct. Oximes nucleophilically regenerate AChE before aging (dealkylation) makes enzyme inhibition irreversible.',
      C: 'Oximes do not act by stimulating hepatic CYP450 oxidation.',
      D: 'Oximes act on AChE, not by free circulating acetylcholine binding.'
    },
    keyTakeaway: 'Pralidoxime reactivates phosphorylated acetylcholinesterase before non-enzymatic "aging" (dealkylation) permanently locks the enzyme.',
    sourcePageRef: 'Page 29, Q2',
    difficulty: 'High Yield',
    tags: ['Pralidoxime', '2-PAM', 'Enzyme Aging', 'Acetylcholinesterase']
  },
  {
    id: 'op_q3',
    topicId: 'organophosphate_poisoning',
    topicTitle: 'Management of Organophosphate Poisoning',
    questionNumber: 3,
    clinicalVignette: 'A 30-year-old woman recovers from the acute cholinergic crisis of organophosphate ingestion after treatment with atropine and pralidoxime. However, 36 hours later, while still in the medical ward, she suddenly develops bilateral facial weakness, neck muscle weakness (inability to lift head from pillow), proximal limb weakness, and respiratory distress without cholinergic signs. What is this secondary complication called?',
    options: [
      { id: 'A', text: 'Organophosphate-Induced Delayed Polyneuropathy (OPIDN)' },
      { id: 'B', text: 'Intermediate Syndrome (IMS)' },
      { id: 'C', text: 'Guillain-Barré Syndrome' },
      { id: 'D', text: 'Myasthenic Crisis' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Intermediate Syndrome (IMS)',
    explanation: 'Intermediate Syndrome (IMS) develops 24–96 hours after acute organophosphate ingestion, occurring after resolution of the initial acute cholinergic crisis but before delayed polyneuropathy. It is caused by persistent nicotinic neuromuscular junction receptor down-regulation and muscle weakness, characteristically presenting with neck flexor weakness, cranial nerve palsies (facial, extraocular), proximal limb weakness, and respiratory failure requiring mechanical ventilation.',
    optionRationales: {
      A: 'OPIDN occurs 2–4 weeks later due to neuropathy target esterase (NTE) inhibition, presenting as a distal sensory-motor axonopathy ("ginger paralysis").',
      B: 'Correct. Intermediate Syndrome appears 24–96 hours post-exposure with neck flexor, proximal limb, and respiratory muscle weakness.',
      C: 'Guillain-Barré syndrome is an autoimmune post-infectious demyelinating polyneuropathy.',
      D: 'Myasthenic crisis occurs in autoimmune Myasthenia Gravis with anti-AChR antibodies.'
    },
    keyTakeaway: 'Intermediate Syndrome (IMS) manifests 24–96 hours after organophosphate poisoning with neck flexor, proximal motor, and respiratory muscle failure.',
    sourcePageRef: 'Pages 29–30, Q3',
    difficulty: 'High Yield',
    tags: ['Intermediate Syndrome', 'Organophosphates', 'Neuromuscular Junction', 'Toxicology']
  },
  {
    id: 'op_q4',
    topicId: 'organophosphate_poisoning',
    topicTitle: 'Management of Organophosphate Poisoning',
    questionNumber: 4,
    clinicalVignette: 'A 45-year-old farmer is brought to the emergency department following acute dermal and inhalational exposure to an organophosphate compound. Before medical personnel initiate physical examination and intravenous therapy, which essential decontamination step must be carried out to prevent secondary contamination of healthcare providers?',
    options: [
      { id: 'A', text: 'Immediate gastric lavage with activated charcoal' },
      { id: 'B', text: 'Complete removal of contaminated clothing and copious washing of skin and hair with soap and water using personal protective equipment (PPE)' },
      { id: 'C', text: 'Application of topical steroid cream to the exposed areas' },
      { id: 'D', text: 'Immediate administration of high-flow oxygen via a non-rebreather mask' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Complete removal of contaminated clothing and copious washing of skin and hair with soap and water using personal protective equipment (PPE)',
    explanation: 'Organophosphates are highly lipid-soluble chemicals that are readily absorbed across intact skin and clothing. Healthcare workers are at severe risk of secondary toxic envenomation from off-gassing and skin contact. Immediate, complete removal of contaminated garments (disposed in biohazard bags) and thorough copious washing of the skin, hair, and nails with soap and copious water by staff wearing nitrile/neoprene PPE is mandatory.',
    optionRationales: {
      A: 'Gastric lavage is only for oral ingestions and does not protect staff from dermal off-gassing.',
      B: 'Correct. Complete decontamination with clothing removal and soap/water wash using PPE prevents continuous absorption and provider toxicity.',
      C: 'Steroid creams increase dermal vascular absorption of lipophilic toxins.',
      D: 'Oxygen is supportive care, but does not address ongoing toxic dermal absorption or team safety.'
    },
    keyTakeaway: 'Dermal organophosphate decontamination requires immediate removal of contaminated clothing and washing with soap and water by PPE-equipped staff.',
    sourcePageRef: 'Page 30, Q4',
    difficulty: 'Core Clinical',
    tags: ['Decontamination', 'Provider Safety', 'PPE', 'Organophosphates']
  },
  {
    id: 'op_q5',
    topicId: 'organophosphate_poisoning',
    topicTitle: 'Management of Organophosphate Poisoning',
    questionNumber: 5,
    clinicalVignette: 'A patient with severe organophosphate poisoning develops generalized tonic-clonic seizures despite initial atropine dosing. Which pharmacological class is the first-line treatment for controlling seizures and mitigating central nervous system injury in organophosphate toxicity?',
    options: [
      { id: 'A', text: 'Benzodiazepines (e.g., Diazepam or Midazolam)' },
      { id: 'B', text: 'Phenytoin' },
      { id: 'C', text: 'Haloperidol' },
      { id: 'D', text: 'Succinylcholine' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Benzodiazepines (e.g., Diazepam or Midazolam)',
    explanation: 'Centrally, excessive acetylcholine triggers glutamatergic hyperactivation and persistent seizure activity that produces severe ischemic neuronal injury. Atropine poorly crosses the blood-brain barrier at standard doses to stop seizures. Benzodiazepines (Diazepam, Midazolam) enhance GABA-A inhibitory neurotransmission, reliably terminating organophosphate-induced seizures, reducing central neurotoxicity, and decreasing mortality.',
    optionRationales: {
      A: 'Correct. Benzodiazepines (Diazepam/Midazolam) are the first-line anticonvulsants for organophosphate-induced seizures.',
      B: 'Phenytoin is ineffective for toxin-induced / cholinergic seizures.',
      C: 'Haloperidol lowers seizure threshold and worsens cardiac dysrhythmias (QT prolongation).',
      D: 'Succinylcholine is metabolized by plasma cholinesterase; in organophosphate toxicity, it causes prolonged paralysis and does not stop cortical seizures.'
    },
    keyTakeaway: 'Benzodiazepines (Diazepam / Midazolam) are the first-line anticonvulsant agents for organophosphate-induced seizures and central neuroprotection.',
    sourcePageRef: 'Page 30, Q5',
    difficulty: 'High Yield',
    tags: ['Seizures', 'Benzodiazepines', 'Diazepam', 'Organophosphates']
  },

  // ----------------------------------------------------
  // MANAGEMENT OF SHOCK (Pages 51-53)
  // ----------------------------------------------------
  {
    id: 'shock_q1',
    topicId: 'shock_management',
    topicTitle: 'Management of Shock',
    questionNumber: 1,
    clinicalVignette: 'A 60-year-old man presents with fever, hypotension (BP 75/45 mmHg), and altered mental status. He is diagnosed with septic shock. Despite receiving 30 mL/kg of IV crystalloid fluid, his mean arterial pressure (MAP) remains 55 mmHg. What is the first-line vasopressor of choice to restore perfusion pressure?',
    options: [
      { id: 'A', text: 'Dopamine' },
      { id: 'B', text: 'Noradrenaline (Norepinephrine)' },
      { id: 'C', text: 'Phenylephrine' },
      { id: 'D', text: 'Epinephrine' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Noradrenaline (Norepinephrine)',
    explanation: 'According to the Surviving Sepsis Campaign guidelines, Noradrenaline (Norepinephrine) is the definitive first-line vasopressor of choice for fluid-refractory septic shock. It provides potent alpha-1 vasoconstriction (restoring vascular tone and SVR) with modest beta-1 inotropic support, increasing MAP without excessive tachycardia or tachyarrhythmias compared to dopamine.',
    optionRationales: {
      A: 'Dopamine is associated with significantly higher rates of tachyarrhythmias and increased mortality in shock.',
      B: 'Correct. Noradrenaline (Norepinephrine) is the first-line vasopressor in septic shock to achieve a target MAP >= 65 mmHg.',
      C: 'Phenylephrine is a pure alpha-1 agonist with reflex bradycardia and lower cardiac output; used only when tachyarrhythmias prohibit noradrenaline.',
      D: 'Epinephrine is a second-line agent added when noradrenaline alone is insufficient.'
    },
    keyTakeaway: 'Noradrenaline (Norepinephrine) is the first-line vasopressor in septic shock to achieve and maintain a MAP >= 65 mmHg.',
    sourcePageRef: 'Pages 51–52, Q1',
    difficulty: 'High Yield',
    tags: ['Septic Shock', 'Noradrenaline', 'Vasopressors', 'Surviving Sepsis']
  },
  {
    id: 'shock_q2',
    topicId: 'shock_management',
    topicTitle: 'Management of Shock',
    questionNumber: 2,
    clinicalVignette: 'A 55-year-old woman is admitted following an anterior wall STEMI. She is cold, clammy, and confused. BP is 80/50 mmHg, HR is 115 bpm, and oxygen saturation is 89% on room air with bilateral diffuse pulmonary crackles and elevated JVP. Which hemodynamic profile is characteristic of this patient\'s type of shock?',
    options: [
      { id: 'A', text: 'Low Cardiac Output (CO), Low Systemic Vascular Resistance (SVR), Low Pulmonary Capillary Wedge Pressure (PCWP)' },
      { id: 'B', text: 'Low Cardiac Output (CO), High Systemic Vascular Resistance (SVR), High Pulmonary Capillary Wedge Pressure (PCWP)' },
      { id: 'C', text: 'High Cardiac Output (CO), Low Systemic Vascular Resistance (SVR), Low PCWP' },
      { id: 'D', text: 'Low CO, Low SVR, High PCWP' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Low Cardiac Output (CO), High Systemic Vascular Resistance (SVR), High Pulmonary Capillary Wedge Pressure (PCWP)',
    explanation: 'This patient has Cardiogenic Shock (myocardial pump failure post-MI with pulmonary edema). The classic hemodynamic profile of cardiogenic shock is: (1) severely reduced Cardiac Output / Cardiac Index (CO < 2.2 L/min/m2), (2) elevated left ventricular filling pressures (High PCWP > 15–18 mmHg), and (3) compensatory vasoconstriction (High SVR > 1200 dynes-sec/cm5).',
    optionRationales: {
      A: 'Low CO, low SVR, and low PCWP is not a standard isolated shock profile.',
      B: 'Correct. Cardiogenic shock features decreased CO, compensatory high SVR, and elevated PCWP/filling pressures.',
      C: 'High CO with low SVR is typical of warm distributive (septic) shock.',
      D: 'Neurogenic shock features low CO with low SVR and low filling pressures.'
    },
    keyTakeaway: 'Cardiogenic shock is characterized by Low Cardiac Output, High SVR (compensatory vasoconstriction), and Elevated PCWP.',
    sourcePageRef: 'Page 52, Q2',
    difficulty: 'High Yield',
    tags: ['Cardiogenic Shock', 'Hemodynamic Profile', 'PCWP', 'SVR']
  },
  {
    id: 'shock_q3',
    topicId: 'shock_management',
    topicTitle: 'Management of Shock',
    questionNumber: 3,
    clinicalVignette: 'A 24-year-old unrestrained driver involved in a high-speed motor vehicle collision is brought to the trauma center. He is pale, diaphoretic, and tachycardic (HR 135 bpm) with a BP of 78/40 mmHg. Focused Assessment with Sonography for Trauma (FAST) reveals free fluid in the peritoneal cavity. What is the fundamental principle of fluid resuscitation in this trauma patient?',
    options: [
      { id: 'A', text: 'Rapid infusion of 4 L of normal saline to achieve a normal blood pressure before surgery' },
      { id: 'B', text: 'Permissive hypotension (target SBP 80–90 mmHg / MAP 50–65 mmHg) with balanced blood component resuscitation (1:1:1 PRBCs, FFP, platelets) until surgical hemostasis' },
      { id: 'C', text: 'Administration of hydroxyethyl starch colloids as first line' },
      { id: 'D', text: 'High-dose vasopressor infusion without blood products' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Permissive hypotension (target SBP 80–90 mmHg / MAP 50–65 mmHg) with balanced blood component resuscitation (1:1:1 PRBCs, FFP, platelets) until surgical hemostasis',
    explanation: 'In non-compressible hemorrhagic shock, the "Damage Control Resuscitation" paradigm mandates: (1) Permissive hypotension (maintaining SBP 80–90 mmHg to prevent "popping the clot" while preserving vital organ perfusion), (2) limiting crystalloid infusions to prevent hemodilution and hypothermia, and (3) early 1:1:1 balanced transfusion of PRBCs, Fresh Frozen Plasma, and Platelets alongside rapid surgical damage control laparotomy.',
    optionRationales: {
      A: 'Aggressive large-volume crystalloid boluses dislodge provisional clots, dilute clotting factors, and increase mortality.',
      B: 'Correct. Permissive hypotension and 1:1:1 balanced blood component resuscitation constitute modern damage control resuscitation.',
      C: 'Synthetic colloids like hydroxyethyl starch cause severe acute kidney injury and coagulopathy.',
      D: 'Vasopressors in empty, un-resuscitated hemorrhagic shock cause profound splanchnic and peripheral ischemia.'
    },
    keyTakeaway: 'Damage Control Resuscitation in trauma utilizes permissive hypotension and balanced (1:1:1) blood product transfusion while proceeding to definitive surgical control.',
    sourcePageRef: 'Pages 52–53, Q3',
    difficulty: 'High Yield',
    tags: ['Hemorrhagic Shock', 'Damage Control Resuscitation', 'Permissive Hypotension', 'Massive Transfusion']
  },
  {
    id: 'shock_q4',
    topicId: 'shock_management',
    topicTitle: 'Management of Shock',
    questionNumber: 4,
    clinicalVignette: 'A 28-year-old construction worker falls from a height of 6 meters and suffers a complete cervical spinal cord transection at C5. In the emergency department, his BP is 75/40 mmHg and HR is 48 bpm. His extremities are warm and dry. What is the physiological mechanism underlying this patient\'s shock state?',
    options: [
      { id: 'A', text: 'Severe myocardial contusion causing primary pump failure' },
      { id: 'B', text: 'Disruption of sympathetic outflow leading to loss of vascular tone and unopposed vagal parasympathetic tone' },
      { id: 'C', text: 'Concealed retroperitoneal hemorrhage causing hypovolemia' },
      { id: 'D', text: 'Tension pneumothorax with mechanical obstruction of venous return' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Disruption of sympathetic outflow leading to loss of vascular tone and unopposed vagal parasympathetic tone',
    explanation: 'This describes Neurogenic Shock (a form of distributive shock occurring after high spinal cord injury above T6). Loss of descending sympathetic vasomotor and cardioaccelerator innervation (T1–L2) results in profound arterial and venous vasodilation (low SVR, warm extremities) combined with unopposed vagal parasympathetic tone causing inappropriate Bradycardia (HR 48 bpm) in the setting of severe hypotension.',
    optionRationales: {
      A: 'Myocardial contusion presents with tachycardia, elevated filling pressures, and cold extremities.',
      B: 'Correct. Disruption of sympathetic outflow causes loss of vasomotor tone (vasodilation) and unopposed vagal bradycardia.',
      C: 'Hemorrhagic shock produces compensatory intense tachycardia and cold, clammy vasoconstriction.',
      D: 'Tension pneumothorax produces tracheal deviation, absent breath sounds, jugular venous distension, and tachycardia.'
    },
    keyTakeaway: 'Neurogenic shock features the unique combination of severe hypotension with Bradycardia and warm extremities due to loss of sympathetic tone.',
    sourcePageRef: 'Page 53, Q4',
    difficulty: 'High Yield',
    tags: ['Neurogenic Shock', 'Spinal Cord Injury', 'Bradycardia', 'Distributive Shock']
  },
  {
    id: 'shock_q5',
    topicId: 'shock_management',
    topicTitle: 'Management of Shock',
    questionNumber: 5,
    clinicalVignette: 'A patient with severe septic shock remains hypotensive despite 4 L of balanced crystalloids, high-dose noradrenaline (0.4 µg/kg/min), and vasopressin (0.03 units/min). Serum lactate is 6.8 mmol/L. What adjunctive therapy is recommended by guidelines for refractory septic shock?',
    options: [
      { id: 'A', text: 'Intravenous Hydrocortisone (200 mg/day)' },
      { id: 'B', text: 'High-dose recombinant activated Protein C' },
      { id: 'C', text: 'Routine therapeutic plasma exchange' },
      { id: 'D', text: 'Bolus intravenous potassium chloride' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Intravenous Hydrocortisone (200 mg/day)',
    explanation: 'In septic shock refractory to adequate fluid resuscitation and escalating vasopressor therapy (noradrenaline >= 0.25 ug/kg/min), the Surviving Sepsis Campaign recommends initiating low-dose intravenous Hydrocortisone (200 mg/day, either as 50 mg IV q6h or continuous infusion). Glucocorticoids treat critical illness-related corticosteroid insufficiency (CIRCI), upregulate adrenergic receptors, restore vascular tone, and accelerate shock reversal.',
    optionRationales: {
      A: 'Correct. IV Hydrocortisone (200 mg/day) is the guideline-recommended therapy for refractory septic shock on high-dose vasopressors.',
      B: 'Activated Protein C (drotrecogin alfa) was withdrawn from the global market due to lack of efficacy and increased bleeding.',
      C: 'Plasma exchange is not routinely recommended for septic shock without specific indications (e.g. TTP).',
      D: 'Bolus IV potassium will precipitate immediate cardiac arrest.'
    },
    keyTakeaway: 'In vasopressor-refractory septic shock, intravenous Hydrocortisone (200 mg/day) is the evidence-based adjunctive therapy to hasten shock reversal.',
    sourcePageRef: 'Page 53, Q5',
    difficulty: 'High Yield',
    tags: ['Refractory Septic Shock', 'Hydrocortisone', 'Surviving Sepsis', 'CIRCI']
  }
];
