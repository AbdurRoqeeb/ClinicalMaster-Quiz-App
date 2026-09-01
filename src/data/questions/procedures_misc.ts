import { Question } from '../../types';

export const PROCEDURES_MISC_QUESTIONS: Question[] = [
  // ----------------------------------------------------
  // BONE MARROW ASPIRATION & BIOPSY (Pages 20-22)
  // ----------------------------------------------------
  {
    id: 'bm_q1',
    topicId: 'bone_marrow_aspiration',
    topicTitle: 'Bone Marrow Aspiration & Biopsy',
    questionNumber: 1,
    clinicalVignette: 'A 54-year-old woman is scheduled for a bone marrow aspiration and trephine biopsy to evaluate pancytopenia. What is the standard, safest, and most common anatomical site for performing this procedure in adults?',
    options: [
      { id: 'A', text: 'Anterior superior iliac spine (ASIS)' },
      { id: 'B', text: 'Sternum (manubrium)' },
      { id: 'C', text: 'Posterior superior iliac spine (PSIS) of the iliac crest' },
      { id: 'D', text: 'Proximal anterior tibia' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Posterior superior iliac spine (PSIS) of the iliac crest',
    explanation: 'The posterior superior iliac spine (PSIS) of the posterior iliac crest is the standard, preferred, and safest anatomical landmark for both bone marrow aspiration and trephine core biopsy in adult patients. It provides a generous marrow cavity with robust cortical thickness and is situated far away from major neurovascular structures or vital thoracic organs.',
    optionRationales: {
      A: 'The ASIS is used when the patient cannot lie prone or in lateral decubitus, but the cortical bone is harder and narrower than the PSIS.',
      B: 'The sternum is strictly limited to marrow aspiration only in selected adults; trephine biopsy of the sternum is absolutely contraindicated due to fatal risk of aortic puncture and cardiac tamponade.',
      C: 'Correct. The posterior superior iliac spine (PSIS) provides the safest anatomical site and yields both aspiration and trephine core specimens.',
      D: 'The proximal anterior tibia is used only in infants under 12–18 months of age.'
    },
    keyTakeaway: 'The posterior superior iliac spine (PSIS) of the iliac crest is the gold standard, safest site for both marrow aspiration and trephine biopsy in adults.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Bone Marrow Biopsy', 'PSIS', 'Trephine Biopsy', 'Hematology', 'Procedures']
  },
  {
    id: 'bm_q2',
    topicId: 'bone_marrow_aspiration',
    topicTitle: 'Bone Marrow Aspiration & Biopsy',
    questionNumber: 2,
    clinicalVignette: 'Which of the following procedural needle instruments is designed with a hollow cylindrical cutting tip to obtain an intact, cylindrical core of trabecular bone and hematopoietic architecture for trephine biopsy?',
    options: [
      { id: 'A', text: 'Salah needle' },
      { id: 'B', text: 'Klima needle' },
      { id: 'C', text: 'Jamshidi needle' },
      { id: 'D', text: 'Veress needle' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Jamshidi needle',
    explanation: 'The Jamshidi needle (and its modern modifications) is a sturdy, hollow, tapered cylindrical core needle featuring an inner stylet, an extraction cannula, and a razor-sharp cutting bevel. It is specifically designed to core out an intact cylindrical section of cortical-trabecular bone and underlying intact marrow architecture for trephine histologic analysis. Salah and Klima needles are exclusively aspiration needles with adjustable depth guards.',
    optionRationales: {
      A: 'Salah needle is an aspiration needle with an adjustable side screw guard.',
      B: 'Klima needle is an aspiration needle with a longitudinal bevel guard.',
      C: 'Correct. The Jamshidi needle is specifically engineered for bone marrow trephine core biopsy.',
      D: 'Veress needle is a spring-loaded insufflation needle used in laparoscopic surgery.'
    },
    keyTakeaway: 'The Jamshidi needle is the standard instrument used to obtain cylindrical bone marrow core trephine biopsy specimens.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Jamshidi Needle', 'Bone Marrow Trephine', 'Hematology Equipment', 'Instruments']
  },
  {
    id: 'bm_q3',
    topicId: 'bone_marrow_aspiration',
    topicTitle: 'Bone Marrow Aspiration & Biopsy',
    questionNumber: 3,
    clinicalVignette: 'A 60-year-old man with suspected primary myelofibrosis undergoes attempted bone marrow aspiration from the posterior iliac crest. Despite multiple attempts with adequate local anesthesia, no fluid or marrow particles can be aspirated ("dry tap"). What is the most appropriate next step to establish the diagnosis?',
    options: [
      { id: 'A', text: 'Attempt immediate sternal trephine biopsy' },
      { id: 'B', text: 'Obtain a bone marrow trephine core biopsy and prepare touch imprint (touch prep) cytology' },
      { id: 'C', text: 'Abandon the procedure and repeat aspiration in 1 year' },
      { id: 'D', text: 'Perform a lumbar puncture' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Obtain a bone marrow trephine core biopsy and prepare touch imprint (touch prep) cytology',
    explanation: 'A "dry tap" (inability to aspirate marrow fluid) typically results from extensive marrow replacement by reticulin fibrosis (primary myelofibrosis, hairy cell leukemia) or densely packed cellular sheets (acute leukemia, metastatic tumor). When a dry tap occurs, a Trephine Core Biopsy must be obtained, and Touch Imprint Cytology (gently rolling or pressing the fresh un-fixed core biopsy onto glass slides) must be performed immediately. Touch preps yield cytomorphological details identical to successful aspirate smears.',
    optionRationales: {
      A: 'Sternal trephine biopsy is absolutely contraindicated due to catastrophic risk of cardiac laceration.',
      B: 'Correct. Perform a trephine core biopsy and prepare touch imprints on glass slides to evaluate marrow architecture and cytomorphology.',
      C: 'A dry tap indicates severe underlying marrow pathology requiring immediate tissue diagnosis.',
      D: 'Lumbar puncture evaluates CSF, not marrow fibrosis.'
    },
    keyTakeaway: 'In a "dry tap" aspirate, obtaining a trephine core biopsy and touch imprint (touch prep) cytology is essential to diagnose myelofibrosis or marrow infiltration.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Dry Tap', 'Myelofibrosis', 'Touch Imprint Cytology', 'Trephine Biopsy']
  },
  {
    id: 'bm_q4',
    topicId: 'bone_marrow_aspiration',
    topicTitle: 'Bone Marrow Aspiration & Biopsy',
    questionNumber: 4,
    clinicalVignette: 'A hematologist performs a sternal marrow aspiration on an elderly patient. Which vital structure lies directly posterior to the manubrium sterni and is at immediate risk of fatal laceration if the sternal needle is advanced too deeply or if a trephine biopsy is improperly attempted?',
    options: [
      { id: 'A', text: 'Ascending aorta and pericardium' },
      { id: 'B', text: 'Inferior vena cava' },
      { id: 'C', text: 'Left renal artery' },
      { id: 'D', text: 'Thoracic duct and cisterna chyli' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Ascending aorta and pericardium',
    explanation: 'The manubrium of the sternum is only 0.5 to 1.0 cm thick in adults. Immediately posterior to the posterior table of the sternum lies the anterior mediastinum, ascending aorta, aortic arch, pericardium, and right ventricle. If a needle penetrates the posterior cortical plate (especially if a trephine needle is used), catastrophic arterial laceration, acute cardiac tamponade, or pneumomediastinum can result in instantaneous death.',
    optionRationales: {
      A: 'Correct. The ascending aorta, aortic arch, and pericardial sac lie immediately posterior to the sternal table.',
      B: 'IVC is in the lower abdomen/retroperitoneum.',
      C: 'Renal arteries lie at L1–L2 level in the retroperitoneum.',
      D: 'Cisterna chyli lies anterior to L1–L2 vertebrae.'
    },
    keyTakeaway: 'The ascending aorta and pericardium lie immediately posterior to the sternum; inadvertent posterior cortical puncture causes fatal cardiac tamponade.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Sternal Puncture', 'Anatomy', 'Aortic Laceration', 'Cardiac Tamponade', 'Complications']
  },
  {
    id: 'bm_q5',
    topicId: 'bone_marrow_aspiration',
    topicTitle: 'Bone Marrow Aspiration & Biopsy',
    questionNumber: 5,
    clinicalVignette: 'A 68-year-old man undergoes bone marrow biopsy for staging of diffuse large B-cell lymphoma. Following removal of the Jamshidi needle from the right PSIS, what is the most appropriate immediate post-procedure nursing and medical care?',
    options: [
      { id: 'A', text: 'Encourage immediate vigorous walking to relieve local gluteal muscle soreness' },
      { id: 'B', text: 'Apply direct manual pressure over the puncture site for several minutes, apply a sterile pressure dressing, and instruct the patient to lie supine for 30–60 minutes' },
      { id: 'C', text: 'Perform immediate wound exploration and suturing with 2-0 silk' },
      { id: 'D', text: 'Administer intravenous heparin immediately' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Apply direct manual pressure over the puncture site for several minutes, apply a sterile pressure dressing, and instruct the patient to lie supine for 30–60 minutes',
    explanation: 'After removing the bone marrow needle, direct firm manual compression with sterile gauze must be applied over the PSIS puncture site for 3 to 5 minutes (longer if coagulopathic) until active bleeding halts. A sterile pressure dressing is applied, and the patient is placed in the supine position for 30 to 60 minutes so that their own body weight exerts constant mechanical counter-pressure against the posterior iliac crest dressing, preventing retroperitoneal or gluteal hematoma formation.',
    optionRationales: {
      A: 'Immediate ambulation increases bleeding and hematoma risk.',
      B: 'Correct. Direct manual pressure, a pressure dressing, and supine rest with body-weight counterpressure prevent post-biopsy hematoma.',
      C: 'Marrow puncture wounds are small puncture sites that heal by secondary intention; formal suturing is not indicated.',
      D: 'Heparin induces severe retroperitoneal or gluteal bleeding.'
    },
    keyTakeaway: 'Direct manual pressure followed by a sterile pressure dressing and 30–60 minutes of supine body-weight compression is standard post-marrow biopsy care.',
    sourcePageRef: '',
    difficulty: 'Core Clinical',
    tags: ['Post-Procedure Care', 'Pressure Dressing', 'Hematoma Prevention', 'Hematology']
  },

  // ----------------------------------------------------
  // INTERCOSTAL CHEST TUBE INSERTION (Pages 22-25)
  // ----------------------------------------------------
  {
    id: 'ct_q1',
    topicId: 'intercostal_chest_tube',
    topicTitle: 'Intercostal Chest Tube Insertion',
    questionNumber: 1,
    clinicalVignette: 'A 24-year-old man presents with acute left-sided chest pain and dyspnea. Chest radiograph confirms a large left secondary spontaneous pneumothorax. The surgical team prepares for chest tube insertion (tube thoracostomy). What anatomical region is recognized as the "safe triangle" for intercostal chest drain insertion?',
    options: [
      { id: 'A', text: 'Second intercostal space in the midclavicular line' },
      { id: 'B', text: 'Bounded anteriorly by pectoralis major, posteriorly by latissimus dorsi, inferiorly by the 5th intercostal space (horizontal nipple line), and apex below the axilla' },
      { id: 'C', text: 'Eighth intercostal space in the posterior scapular line' },
      { id: 'D', text: 'Subxyphoid space bounded by the costal margin' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Bounded anteriorly by pectoralis major, posteriorly by latissimus dorsi, inferiorly by the 5th intercostal space (horizontal nipple line), and apex below the axilla',
    explanation: 'The British Thoracic Society (BTS) guidelines define the "safe triangle" for chest tube insertion. It is bounded anteriorly by the lateral border of Pectoralis major, posteriorly by the anterior border of Latissimus dorsi, inferiorly by the 5th intercostal space (level of the nipple or inframammary fold), and superiorly by the apex of the axilla. Inserting tubes within this zone avoids the internal mammary artery, long thoracic nerve, heart, major pectoral muscles, and diaphragm/subdiaphragmatic abdominal viscera.',
    optionRationales: {
      A: '2nd intercostal space midclavicular line is used for needle decompression of tension pneumothorax, but not the standard safe triangle for surgical chest drains.',
      B: 'Correct. The safe triangle is bounded by pectoralis major, latissimus dorsi, the 5th intercostal space (nipple level), and the axillary apex.',
      C: '8th intercostal space risks catastrophic splenic or hepatic laceration.',
      D: 'Subxyphoid is used for pericardiocentesis.'
    },
    keyTakeaway: 'The "safe triangle" is bounded by pectoralis major, latissimus dorsi, 5th intercostal space, and axillary apex; it prevents injury to the heart, great vessels, and diaphragm.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Safe Triangle', 'Chest Tube', 'Thoracostomy', 'British Thoracic Society', 'Anatomy']
  },
  {
    id: 'ct_q2',
    topicId: 'intercostal_chest_tube',
    topicTitle: 'Intercostal Chest Tube Insertion',
    questionNumber: 2,
    clinicalVignette: 'During the insertion of a chest tube in the 5th intercostal space within the safe triangle, where should the blunt dissection and needle/tube entry strictly be directed relative to the rib?',
    options: [
      { id: 'A', text: 'Immediately below the inferior border of the upper rib' },
      { id: 'B', text: 'Directly over the superior (upper) border of the lower rib' },
      { id: 'C', text: 'Precisely midway in the center of the intercostal space' },
      { id: 'D', text: 'Directly through the costal cartilage' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Directly over the superior (upper) border of the lower rib',
    explanation: 'The intercostal neurovascular bundle (Intercostal Vein, Artery, Nerve: VAN from superior to inferior) runs in the costal groove along the subcostal / inferior border of each rib. To prevent life-threatening intercostal arterial laceration, intractable hemothorax, or intercostal neural damage, all needles, trocars, forceps, and chest tubes must strictly pass directly over the Superior (upper) Border of the lower rib.',
    optionRationales: {
      A: 'Passing immediately under the inferior border directly lacerates the intercostal neurovascular bundle (VAN).',
      B: 'Correct. Always traverse directly over the superior border of the lower rib to avoid the subcostal neurovascular bundle.',
      C: 'Mid-space increases collateral intercostal vessel injury.',
      D: 'Penetrating costal cartilage causes severe pain and cartilage necrosis.'
    },
    keyTakeaway: 'Always introduce instruments and chest drains directly over the superior (upper) border of the lower rib to protect the subcostal neurovascular bundle (VAN).',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Intercostal Bundle', 'VAN', 'Rib Anatomy', 'Chest Tube Safety']
  },
  {
    id: 'ct_q3',
    topicId: 'intercostal_chest_tube',
    topicTitle: 'Intercostal Chest Tube Insertion',
    questionNumber: 3,
    clinicalVignette: 'A 30-year-old man undergoes chest drain placement for a post-traumatic hemopneumothorax. The chest tube is connected to an underwater seal drainage system. During spontaneous inspiration and expiration, the fluid level within the submerged underwater tube swings up and down. What is this phenomenon called and what does it indicate?',
    options: [
      { id: 'A', text: 'Continuous bubbling, indicating tube displacement into soft tissue' },
      { id: 'B', text: 'Fluid "swinging" or "tidaling", confirming patency of the tube within the pleural space' },
      { id: 'C', text: 'Tension hemothorax requiring immediate clamping' },
      { id: 'D', text: 'Re-expansion pulmonary edema' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Fluid "swinging" or "tidaling", confirming patency of the tube within the pleural space',
    explanation: 'The normal respiratory fluctuation of the fluid column inside the underwater seal tube is called "swinging" or "tidaling". During spontaneous inspiration, intrapleural pressure becomes more negative, drawing the fluid column upward; during expiration, intrapleural pressure rises, pushing the fluid column downward. Tidaling confirms that the drainage tube is patent, unblocked by blood clots, and situated freely inside the pleural cavity.',
    optionRationales: {
      A: 'Continuous bubbling indicates an active air leak or loose connection, not normal tidaling.',
      B: 'Correct. Swinging/tidaling reflects intrathoracic pressure fluctuations and confirms tube patency within the pleural space.',
      C: 'Tidaling is normal and clamping is contraindicated.',
      D: 'Re-expansion pulmonary edema causes cough, pink frothy sputum, and hypoxemia.'
    },
    keyTakeaway: 'Fluid column "swinging" or "tidaling" in the underwater seal drainage chamber confirms tube patency and correct positioning within the pleural cavity.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Underwater Seal', 'Tidaling', 'Chest Drain Monitoring', 'Pleural Dynamics']
  },
  {
    id: 'ct_q4',
    topicId: 'intercostal_chest_tube',
    topicTitle: 'Intercostal Chest Tube Insertion',
    questionNumber: 4,
    clinicalVignette: 'A 50-year-old man presents with a chronic, massive complete collapse of the right lung due to a large pleural effusion present for 3 weeks. A chest tube is inserted. What is the recommended maximum volume of fluid that should be drained in the first hour to avoid precipitating life-threatening re-expansion pulmonary edema (REPE)?',
    options: [
      { id: 'A', text: 'Drain the entire volume (e.g. 4–5 liters) as quickly as possible within 10 minutes' },
      { id: 'B', text: 'Limit initial drainage to 1.0 to 1.5 liters in the first hour, then drain intermittently' },
      { id: 'C', text: 'Maximum of 100 mL per 24 hours' },
      { id: 'D', text: 'Never allow more than 200 mL to be drained' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Limit initial drainage to 1.0 to 1.5 liters in the first hour, then drain intermittently',
    explanation: 'Rapid evacuation of large pleural effusions or long-standing pneumothoraces (>1.5 liters rapidly evacuated) abruptly drops intrapleural pressure and suddenly stretches chronically collapsed, hypoxic pulmonary capillaries. This triggers ischemia-reperfusion injury, endothelial disruption, and alveolar capillary leakage, leading to catastrophic Re-Expansion Pulmonary Edema (REPE). Drainage should be limited to 1.0–1.5 L initially, pausing drainage if the patient develops chest tightness, vasovagal symptoms, or persistent coughing.',
    optionRationales: {
      A: 'Draining 4–5 liters rapidly is the classic trigger for severe, potentially fatal re-expansion pulmonary edema.',
      B: 'Correct. Limit initial drainage to 1.0–1.5 L (or clamp if cough/chest discomfort occurs) to prevent re-expansion pulmonary edema.',
      C: '100 mL/24h is too restrictive and will not relieve respiratory distress.',
      D: '200 mL is inappropriately low for therapeutic thoracentesis.'
    },
    keyTakeaway: 'Limit initial drainage of pleural fluid to 1.0–1.5 L in the first hour to prevent life-threatening re-expansion pulmonary edema (REPE).',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Re-expansion Pulmonary Edema', 'REPE', 'Chest Drain Safety', 'Drainage Volume']
  },
  {
    id: 'ct_q5',
    topicId: 'intercostal_chest_tube',
    topicTitle: 'Intercostal Chest Tube Insertion',
    questionNumber: 5,
    clinicalVignette: 'Under which of the following circumstances is it dangerous and strictly contraindicated to clamp a functioning intercostal chest tube in a patient with a known ongoing air leak?',
    options: [
      { id: 'A', text: 'When the drainage bottle is being kept lower than the patient\'s chest' },
      { id: 'B', text: 'When the patient is receiving positive pressure mechanical ventilation or has an active air leak (bubbling)' },
      { id: 'C', text: 'During routine ambulation' },
      { id: 'D', text: 'Immediately after applying the underwater seal' }
    ],
    correctOption: 'B',
    correctAnswerText: 'When the patient is receiving positive pressure mechanical ventilation or has an active air leak (bubbling)',
    explanation: 'Clamping a chest tube in the presence of an active bronchopleural air leak (continuous bubbling) or while a patient is receiving positive-pressure mechanical ventilation traps escaping high-pressure alveolar air inside the rigid pleural cavity. As intrapleural pressure skyrockets, it rapidly precipitates a catastrophic Tension Pneumothorax with mediastinal shift, vena caval compression, obstructive shock, and cardiac arrest.',
    optionRationales: {
      A: 'Keeping the bottle lower than the chest prevents retrograde siphonage of fluid back into the chest.',
      B: 'Correct. Clamping a chest tube during positive-pressure ventilation or ongoing active air leak rapidly produces a fatal tension pneumothorax.',
      C: 'Routine ambulation does not require clamping; keep bottle below chest level.',
      D: 'Underwater seal should remain unclamped to allow drainage.'
    },
    keyTakeaway: 'Never clamp a chest tube in a patient with an active air leak or receiving positive pressure mechanical ventilation due to immediate risk of fatal tension pneumothorax.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Tension Pneumothorax', 'Chest Tube Clamping', 'Mechanical Ventilation', 'Air Leak Emergency']
  },

  // ----------------------------------------------------
  // LUMBAR PUNCTURE PROCEDURE (Pages 67-69)
  // ----------------------------------------------------
  {
    id: 'lp_q1',
    topicId: 'lumbar_puncture',
    topicTitle: 'Lumbar Puncture Procedure',
    questionNumber: 1,
    clinicalVignette: 'A 34-year-old woman is positioned in the left lateral decubitus position with hips and knees flexed for a diagnostic lumbar puncture. The physician palpates the superior borders of the iliac crests bilaterally and draws a virtual transverse line across the spine (Tuffier\'s line / intercristal line). Which vertebral level is intersected by this line?',
    options: [
      { id: 'A', text: 'T12–L1 interspace' },
      { id: 'B', text: 'L1–L2 interspace' },
      { id: 'C', text: 'L3–L4 interspace (or L4 spinous process)' },
      { id: 'D', text: 'L5–S1 interspace' }
    ],
    correctOption: 'C',
    correctAnswerText: 'L3–L4 interspace (or L4 spinous process)',
    explanation: 'Tuffier\'s line (the intercristal line), drawn between the highest points of the iliac crests, intersects the lumbar spine at the L4 spinous process or the L3–L4 interspace. Because the adult spinal cord terminates as the conus medullaris at the L1–L2 vertebral level, inserting the lumbar puncture spinal needle at the L3–L4 or L4–L5 interspace ensures safe access to the subarachnoid space (lumbar cistern containing cauda equina nerve roots) without risking spinal cord transfixion.',
    optionRationales: {
      A: 'T12–L1 contains the spinal cord/conus medullaris and puncture here risks permanent paraplegia.',
      B: 'L1–L2 is the anatomical termination of the conus medullaris in adults.',
      C: 'Correct. Tuffier\'s intercristal line marks the L4 vertebra / L3–L4 interspace, the safe zone for lumbar puncture.',
      D: 'L5–S1 is often difficult to access due to the sacral promontory.'
    },
    keyTakeaway: 'Tuffier\'s intercristal line marks the L3–L4 interspace, safely below the termination of the conus medullaris (L1–L2) in adults.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Lumbar Puncture', 'Tuffier Line', 'Conus Medullaris', 'Anatomy', 'Procedures']
  },
  {
    id: 'lp_q2',
    topicId: 'lumbar_puncture',
    topicTitle: 'Lumbar Puncture Procedure',
    questionNumber: 2,
    clinicalVignette: 'During a lumbar puncture via the midline approach, the spinal needle is slowly advanced through the tissue layers. Which anatomical structure provides the classic sudden "pop" or sudden loss of resistance immediately before the needle enters the epidural space, just prior to puncturing the dura-arachnoid membrane?',
    options: [
      { id: 'A', text: 'Supraspinous ligament' },
      { id: 'B', text: 'Ligamentum flavum' },
      { id: 'C', text: 'Pia mater' },
      { id: 'D', text: 'Posterior longitudinal ligament' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Ligamentum flavum',
    explanation: 'The anatomical trajectory in a midline lumbar puncture is: (1) Skin, (2) Subcutaneous tissue, (3) Supraspinous ligament, (4) Interspinous ligament, (5) Ligamentum Flavum, (6) Epidural space, (7) Dura mater, (8) Arachnoid mater, and into the Subarachnoid space. The ligamentum flavum is a dense, yellow, elastin-rich ligament that produces a distinct tactile "crunch" or sudden loss of resistance ("pop") as the needle traverses it into the epidural space.',
    optionRationales: {
      A: 'Supraspinous ligament provides initial superficial resistance without a distinct deep "pop".',
      B: 'Correct. Traversal of the dense ligamentum flavum produces the classic tactile "pop" before entering the epidural space.',
      C: 'Pia mater is intimately adherent to the spinal cord and is not penetrated.',
      D: 'Posterior longitudinal ligament lies anterior to the spinal cord on the vertebral bodies.'
    },
    keyTakeaway: 'The midline LP needle passes through skin, subcutaneous fat, supraspinous ligament, interspinous ligament, ligamentum flavum ("pop"), dura, and arachnoid mater.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Ligamentum Flavum', 'Spinal Layers', 'Lumbar Puncture', 'Tactile Pop']
  },
  {
    id: 'lp_q3',
    topicId: 'lumbar_puncture',
    topicTitle: 'Lumbar Puncture Procedure',
    questionNumber: 3,
    clinicalVignette: 'A 45-year-old man presents with fever, severe headache, confusion, and neck stiffness. On fundoscopy, bilateral blurred optic disc margins with loss of venous pulsations (papilloedema) are observed. He also has a new right-sided hemiparesis and dilated left pupil. What is the most important mandatory step before performing a lumbar puncture?',
    options: [
      { id: 'A', text: 'Perform immediate bedside LP in the seated position' },
      { id: 'B', text: 'Perform an emergency neuroimaging study (Head CT/MRI) to exclude an intracranial mass lesion or midline shift that could cause fatal cerebral herniation' },
      { id: 'C', text: 'Measure intraocular pressure with tonometry' },
      { id: 'D', text: 'Administer oral aspirin immediately' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Perform an emergency neuroimaging study (Head CT/MRI) to exclude an intracranial mass lesion or midline shift that could cause fatal cerebral herniation',
    explanation: 'Focal neurological deficits (hemiparesis, pupillary asymmetry), papilledema, new-onset seizures, or moderate-to-severe altered consciousness are strict indications for emergency non-contrast cranial CT before performing lumbar puncture. In the presence of an intracranial mass lesion or significant cerebral edema with lateral/midline shift, performing an LP drops spinal subarachnoid pressure, creating a massive craniospinal pressure gradient that triggers catastrophic brain herniation (uncal or tonsillar "coning") and immediate fatal brainstem compression.',
    optionRationales: {
      A: 'Immediate LP in the presence of focal signs and papilledema can trigger fatal uncal or tonsillar herniation.',
      B: 'Correct. Urgent CT head is mandatory to rule out mass effect/midline shift before LP when focal neurological signs or papilledema exist.',
      C: 'Tonometry assesses glaucoma, not intracranial mass effect.',
      D: 'Aspirin has no role in acute CNS infection with mass effect.'
    },
    keyTakeaway: 'Papilledema, focal neurological deficits, new seizures, or altered sensorium mandate cranial CT before lumbar puncture to rule out fatal brain herniation.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Brain Herniation', 'Coning', 'CT Before LP', 'Papilledema', 'Meningitis']
  },
  {
    id: 'lp_q4',
    topicId: 'lumbar_puncture',
    topicTitle: 'Lumbar Puncture Procedure',
    questionNumber: 4,
    clinicalVignette: 'A 28-year-old woman develops a severe, throbbing frontal-occipital headache 24 hours after an uneventful diagnostic lumbar puncture. The headache is markedly aggravated when standing or sitting upright and resolves completely when lying completely flat (orthostatic / post-dural puncture headache). Which procedural technique significantly reduces the incidence of this complication?',
    options: [
      { id: 'A', text: 'Using a wide-bore cutting needle (e.g. 18G Quincke)' },
      { id: 'B', text: 'Using a small-gauge, non-cutting pencil-point (atraumatic) needle (e.g. 25G Whitacre or Sprotte)' },
      { id: 'C', text: 'Advancing the needle perpendicular to the dural fibers with a cutting bevel' },
      { id: 'D', text: 'Aspirating CSF vigorously with a 20-mL syringe' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Using a small-gauge, non-cutting pencil-point (atraumatic) needle (e.g. 25G Whitacre or Sprotte)',
    explanation: 'Post-Dural Puncture Headache (PDPH) results from persistent leakage of cerebrospinal fluid through the dural-arachnoid puncture rent, causing intracranial CSF hypotension and downward traction on pain-sensitive meninges and cranial nerves. High-level evidence proves that using small-gauge (24–25G) atraumatic "pencil-point" needles (Whitacre or Sprotte) dramatically reduces PDPH rates (<2–5%) compared to large cutting needles (Quincke >15–30%) because pencil-point tips separate rather than transect dural elastic fibers.',
    optionRationales: {
      A: '18G Quincke cutting needles cause massive dural tears and high rates of PDPH (>30%).',
      B: 'Correct. Small-gauge atraumatic pencil-point needles (Whitacre/Sprotte) separate dural fibers and dramatically reduce post-LP headache.',
      C: 'Perpendicular cutting bevel orientation cuts across longitudinal dural fibers, creating larger persistent leaks.',
      D: 'Vigorous syringe suction causes nerve root injury and trauma.'
    },
    keyTakeaway: 'Using small-gauge (24–25G) atraumatic pencil-point needles (Whitacre/Sprotte) significantly reduces post-dural puncture headache (PDPH).',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['PDPH', 'Whitacre Needle', 'Pencil-Point Needle', 'Atraumatic Needle', 'Post-LP Headache']
  },
  {
    id: 'lp_q5',
    topicId: 'lumbar_puncture',
    topicTitle: 'Lumbar Puncture Procedure',
    questionNumber: 5,
    clinicalVignette: 'During a diagnostic lumbar puncture in a patient with suspected subarachnoid hemorrhage, blood-tinged CSF appears in the first collection tube. How can a "traumatic tap" (iatrogenic venous laceration) be differentiated from true pathological subarachnoid hemorrhage (SAH)?',
    options: [
      { id: 'A', text: 'In a traumatic tap, the CSF remains uniformly bloody across consecutive tubes 1 to 4 with xanthochromia' },
      { id: 'B', text: 'In a traumatic tap, the RBC count progressively clears from tube 1 to tube 4 and the supernatant after centrifugation is crystal clear (no xanthochromia)' },
      { id: 'C', text: 'A traumatic tap always has an opening pressure > 300 mmH2O' },
      { id: 'D', text: 'Traumatic taps show marked hypoglycorrhachia (CSF glucose < 1.0 mmol/L)' }
    ],
    correctOption: 'B',
    correctAnswerText: 'In a traumatic tap, the RBC count progressively clears from tube 1 to tube 4 and the supernatant after centrifugation is crystal clear (no xanthochromia)',
    explanation: 'In a traumatic tap, venous puncture of the epidural venous plexus causes heavy blood in tube 1 that progressively clears (significant decline in RBC count) by tube 3 or 4; furthermore, immediate centrifugation reveals a clear, water-like supernatant (absence of xanthochromia). In true Subarachnoid Hemorrhage, blood is uniformly distributed across all consecutive tubes, and centrifugation reveals Xanthochromia (pink/yellow supernatant caused by enzymatic breakdown of RBCs to oxyhemoglobin and bilirubin, confirmed by spectrophotometry).',
    optionRationales: {
      A: 'Uniform blood and xanthochromia define true subarachnoid hemorrhage.',
      B: 'Correct. Traumatic tap shows progressive clearance of RBCs from tube 1 to 4 and clear, non-xanthochromic centrifuged supernatant.',
      C: 'High opening pressure is characteristic of true SAH or intracranial hypertension.',
      D: 'Traumatic tap does not alter CSF glucose.'
    },
    keyTakeaway: 'Traumatic tap features progressive RBC clearing from tube 1 to 4 and clear supernatant; true SAH features uniform blood and xanthochromia on centrifugation.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Traumatic Tap', 'Subarachnoid Hemorrhage', 'Xanthochromia', 'CSF Analysis', 'Spectrophotometry']
  },

  // ----------------------------------------------------
  // MALE & FEMALE URETHRAL CATHETERIZATION (Pages 70-73)
  // ----------------------------------------------------
  {
    id: 'uc_q1',
    topicId: 'urethral_catheterization',
    topicTitle: 'Male & Female Urethral Catheterization',
    questionNumber: 1,
    clinicalVignette: 'A 68-year-old man with benign prostatic hyperplasia develops acute painful urinary retention with 900 mL on bladder scan. The intern prepares to insert a 16 Fr two-way Foley catheter. What is the most critical anatomical consideration and procedural step during male urethral catheterization to prevent urethral trauma?',
    options: [
      { id: 'A', text: 'Hold the penis at 30 degrees and inflate the retention balloon as soon as resistance is felt' },
      { id: 'B', text: 'Elevate the penis to 90 degrees (perpendicular to the body) to straighten the penoscrotal junction, instill 10–15 mL of sterile 2% lignocaine gel, and advance the catheter all the way to its bifurcation (the "Y-hub") before inflating the balloon' },
      { id: 'C', text: 'Advance the catheter without lubrication to maintain sterile grip' },
      { id: 'D', text: 'Inflate the retention balloon immediately upon seeing the first drop of urine at the tip' },
      { id: 'E', text: 'Force the catheter vigorously if resistance is met at the membranous urethra' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Elevate the penis to 90 degrees (perpendicular to the body) to straighten the penoscrotal junction, instill 10–15 mL of sterile 2% lignocaine gel, and advance the catheter all the way to its bifurcation (the "Y-hub") before inflating the balloon',
    explanation: 'The male urethra is 18–20 cm long with two anatomical curves: the penoscrotal junction (straightened by holding the penis perpendicular at 90°) and the fixed perineal/bulbar curve. Instilling 10–15 mL of 2% lignocaine gel provides anesthesia, hydrodistension, and lubrication. The golden rule of male catheterization is: ALWAYS advance the catheter entirely to its bifurcation (Y-junction) before inflating the balloon. Inflating within the prostatic/membranous urethra causes catastrophic urethral rupture, massive hemorrhage, and strictures.',
    optionRationales: {
      A: 'Inflating the balloon against resistance causes urethral rupture.',
      B: 'Correct. Elevating the penis to 90 degrees straightens the curve, and advancing to the Y-hub ensures the balloon is inside the bladder before inflation.',
      C: 'Unlubricated catheterization causes mucosal tearing and severe pain.',
      D: 'Urine may enter side-eyelets while the balloon remains in the prostatic urethra; always advance to the Y-hub first.',
      E: 'Forcing against resistance causes false passage creation.'
    },
    keyTakeaway: 'Always advance a male urinary catheter fully to its bifurcation (Y-hub) and observe urine before inflating the balloon to prevent traumatic urethral rupture.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Catheterization', 'Male Urethra', 'Urethral Trauma', 'Y-Hub Rule', 'Foley Catheter']
  },
  {
    id: 'uc_q2',
    topicId: 'urethral_catheterization',
    topicTitle: 'Male & Female Urethral Catheterization',
    questionNumber: 2,
    clinicalVignette: 'An uncircumcised 75-year-old male receives a Foley catheter for perioperative monitoring. Following successful catheter insertion and urine drainage, what crucial nursing step regarding the foreskin (prepuce) must be performed to avoid a severe urological complication?',
    options: [
      { id: 'A', text: 'Leave the foreskin retracted over the corona permanently' },
      { id: 'B', text: 'Clamp the foreskin with a sterile artery forceps' },
      { id: 'C', text: 'Promptly reduce (reposition) the foreskin forward over the glans penis into its normal anatomical position' },
      { id: 'D', text: 'Apply a tight circumferential dressing around the retracted prepuce' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Promptly reduce (reposition) the foreskin forward over the glans penis into its normal anatomical position',
    explanation: 'Failure to reduce (pull forward) the retracted foreskin back over the glans penis after catheterization results in Paraphimosis. The tight preputial ring acts as a venous tourniquet, causing progressive edema, severe pain, arterial compromise, and ischemic necrosis/gangrene of the glans penis.',
    optionRationales: {
      A: 'Leaving the prepuce retracted causes paraphimosis and penile glans ischemia.',
      B: 'Clamping causes severe tissue necrosis.',
      C: 'Correct. Always reduce the foreskin over the glans penis after catheterization to prevent paraphimosis.',
      D: 'Tight dressings aggravate penile edema and ischemia.'
    },
    keyTakeaway: 'Always reduce the retracted foreskin back over the glans penis immediately following catheterization to avoid paraphimosis and penile ischemia.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Paraphimosis', 'Foreskin Reduction', 'Catheterization Complications', 'Urology']
  },
  {
    id: 'uc_q3',
    topicId: 'urethral_catheterization',
    topicTitle: 'Male & Female Urethral Catheterization',
    questionNumber: 3,
    clinicalVignette: 'A 28-year-old polytrauma victim arrives in the emergency department following a high-speed motor vehicle collision. Primary survey reveals an unstable pelvic fracture. On secondary survey, blood is seen at the external urethral meatus, along with a perineal "butterfly" hematoma and a high-riding prostate on rectal exam. What is the most appropriate next step in urinary tract management?',
    options: [
      { id: 'A', text: 'Attempt forceful insertion of a 18 Fr Foley catheter' },
      { id: 'B', text: 'Do NOT attempt urethral catheterization; arrange urgent retrograde urethrography (RUG) to assess for urethral disruption' },
      { id: 'C', text: 'Insert a metal introducer stylet to guide catheterization' },
      { id: 'D', text: 'Perform immediate blind bedside percutaneous suprapubic cystostomy without imaging' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Do NOT attempt urethral catheterization; arrange urgent retrograde urethrography (RUG) to assess for urethral disruption',
    explanation: 'The classic triad of blood at the urethral meatus, perineal hematoma, and high-riding prostate in the setting of pelvic fracture indicates Posterior Urethral Rupture (membranous urethral disruption). Blind urethral catheterization is strictly contraindicated because it can convert a partial urethral tear into a complete transection, introduce infection into pelvic hematomas, and worsen hemorrhage. Retrograde Urethrography (RUG) is mandatory to evaluate urethral integrity before catheter placement (or suprapubic catheterization).',
    optionRationales: {
      A: 'Blind catheterization in suspected urethral disruption converts partial tears into complete transections.',
      B: 'Correct. Classic signs of urethral injury contraindicate blind catheterization; perform retrograde urethrography (RUG).',
      C: 'Metal introducers cause catastrophic false passages and severe pelvic hemorrhage.',
      D: 'Imaging-guided assessment is required before blind puncture in unstable pelvic fractures.'
    },
    keyTakeaway: 'Blood at the meatus, perineal hematoma, and pelvic fracture contraindicate blind urethral catheterization; perform Retrograde Urethrography (RUG).',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Urethral Rupture', 'Pelvic Fracture', 'Retrograde Urethrography', 'Trauma', 'Contraindications']
  },
  {
    id: 'uc_q4',
    topicId: 'urethral_catheterization',
    topicTitle: 'Male & Female Urethral Catheterization',
    questionNumber: 4,
    clinicalVignette: 'A nurse is catheterizing a 62-year-old female patient with chronic immobility and pelvic organ prolapse. The catheter is inserted 5 cm, but no urine drains, and upon closer inspection, the catheter is located inside the vaginal introitus. What is the correct protocol to handle this situation?',
    options: [
      { id: 'A', text: 'Withdraw the catheter from the vagina and immediately push it into the urethral meatus' },
      { id: 'B', text: 'Leave the misplaced catheter temporarily in the vagina as a visual anatomical landmark, obtain a new sterile catheter and gloves, locate the urethral meatus superiorly, and insert the fresh sterile catheter' },
      { id: 'C', text: 'Inflate the balloon inside the vagina to anchor it' },
      { id: 'D', text: 'Administer intravenous broad-spectrum antibiotics and abandon catheterization' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Leave the misplaced catheter temporarily in the vagina as a visual anatomical landmark, obtain a new sterile catheter and gloves, locate the urethral meatus superiorly, and insert the fresh sterile catheter',
    explanation: 'If a catheter is inadvertently placed into the vagina, it is heavily contaminated with vaginal microflora. It must NEVER be transferred from the vagina into the urethra (which would directly inoculate vaginal bacteria into the sterile bladder, causing severe urosepsis). The recommended practice is to leave the contaminated catheter in the vagina as a physical landmark to avoid repeat error, don fresh sterile gloves, obtain a new sterile catheter, identify the urethral meatus superior to the vaginal orifice (between the clitoris and introitus), insert the new catheter, and finally remove and discard the vaginal catheter.',
    optionRationales: {
      A: 'Re-using a contaminated vaginal catheter directly introduces vaginal flora into the urinary tract.',
      B: 'Correct. Leaving the misplaced catheter as an anatomical landmark and inserting a fresh sterile catheter into the urethral meatus maintains strict asepsis.',
      C: 'Inflating the balloon in the vagina causes vaginal trauma.',
      D: 'Immediate proper catheterization with sterile technique is indicated.'
    },
    keyTakeaway: 'If the vagina is inadvertently entered, leave the catheter as an anatomical guide, obtain a new sterile catheter, and cannulate the urethral meatus superiorly.',
    sourcePageRef: '',
    difficulty: 'Core Clinical',
    tags: ['Female Catheterization', 'Aseptic Technique', 'Vaginal Misplacement', 'Procedures']
  },
  {
    id: 'uc_q5',
    topicId: 'urethral_catheterization',
    topicTitle: 'Male & Female Urethral Catheterization',
    questionNumber: 5,
    clinicalVignette: 'Which of the following is an appropriate, evidence-based indication for long-term or indwelling urethral catheterization?',
    options: [
      { id: 'A', text: 'Routine management of urinary incontinence in an elderly nursing home resident for the convenience of nursing staff' },
      { id: 'B', text: 'Obtaining a routine urine specimen for urinalysis in a fully cooperative, continent patient' },
      { id: 'C', text: 'Relief of acute or chronic urinary retention, precise hourly output monitoring in critically ill patients, or healing of severe sacral pressure ulcers in incontinent patients' },
      { id: 'D', text: 'Routine replacement of physical examination in ambulatory patients' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Relief of acute or chronic urinary retention, precise hourly output monitoring in critically ill patients, or healing of severe sacral pressure ulcers in incontinent patients',
    explanation: 'CDC, IDSA, and international guidelines strictly restrict indwelling urinary catheterization to legitimate medical indications: (1) relief of acute or chronic urinary retention or obstruction, (2) precise hourly fluid balance measurement in critically ill ICU patients, (3) perioperative use in specific surgical procedures, (4) assistance in healing open Stage III/IV sacral/perineal pressure ulcers in incontinent patients, and (5) palliative comfort care in terminal illness. Using catheters for staff convenience or uncomplicated incontinence is inappropriate and causes avoidable CAUTI.',
    optionRationales: {
      A: 'Convenience of nursing staff is an inappropriate indication that causes widespread Catheter-Associated UTIs (CAUTI).',
      B: 'Continent patients should provide clean-catch midstream specimens.',
      C: 'Correct. Urinary retention, critical illness hemodynamic monitoring, and protection of stage III/IV sacral pressure ulcers are valid indications.',
      D: 'Catheters have no role in substituting routine clinical exam.'
    },
    keyTakeaway: 'Indwelling catheterization is restricted to valid medical indications (urinary retention, ICU output tracking, stage III/IV pressure ulcers) and never for staff convenience.',
    sourcePageRef: '',
    difficulty: 'Core Clinical',
    tags: ['Catheter Indications', 'CAUTI Prevention', 'CDC Guidelines', 'Patient Safety']
  }
];
