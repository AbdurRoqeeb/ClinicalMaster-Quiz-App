import { Question } from '../../types';

export const INFECTIOUS_ENDO_QUESTIONS: Question[] = [
  // ----------------------------------------------------
  // MANAGEMENT OF URINARY TRACT INFECTIONS (Pages 25-28)
  // ----------------------------------------------------
  {
    id: 'uti_q1',
    topicId: 'urinary_tract_infections',
    topicTitle: 'Management of Urinary Tract Infections',
    questionNumber: 1,
    clinicalVignette: 'A 28-year-old previously healthy woman presents with a 2-day history of dysuria, urinary frequency, and suprapubic discomfort. She has no fever, flank pain, nausea, vomiting, or vaginal discharge. A urine dipstick confirms positive leukocyte esterase and nitrites. Which of the following is the most appropriate first-line empirical oral therapy?',
    options: [
      { id: 'A', text: 'Ciprofloxacin 500 mg BD for 7 days' },
      { id: 'B', text: 'Nitrofurantoin monohydrate/macrocrystals 100 mg BD for 5 days' },
      { id: 'C', text: 'Amoxicillin 500 mg TDS for 7 days' },
      { id: 'D', text: 'Intravenous ceftriaxone 1 g single dose' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Nitrofurantoin monohydrate/macrocrystals 100 mg BD for 5 days',
    explanation: 'In uncomplicated acute bacterial cystitis in non-pregnant women, international guidelines (IDSA, European Association of Urology) recommend first-line therapy with Nitrofurantoin (100 mg BD for 5 days), Fosfomycin trometamol (3 g single oral dose), or Pivmecillinam (400 mg TDS for 3–5 days). Fluoroquinolones (ciprofloxacin) are reserved for complicated UTIs or pyelonephritis due to toxicity risks and antimicrobial stewardship, while amoxicillin has unacceptably high E. coli resistance rates (>50%).',
    optionRationales: {
      A: 'Fluoroquinolones should not be used as first-line for uncomplicated cystitis due to adverse effects (tendinitis, aortic dissection, C. diff) and resistance.',
      B: 'Correct. Nitrofurantoin (100 mg BD for 5 days) is a first-line guideline-recommended agent for acute uncomplicated cystitis.',
      C: 'Amoxicillin alone is ineffective due to widespread high beta-lactamase resistance among uropathogens.',
      D: 'IV ceftriaxone is an unnecessary parenteral antibiotic for mild uncomplicated cystitis.'
    },
    keyTakeaway: 'Nitrofurantoin (5 days) or Fosfomycin (single dose) is first-line empirical oral therapy for acute uncomplicated lower UTI in non-pregnant females.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['UTI', 'Acute Cystitis', 'Nitrofurantoin', 'Antibiotic Stewardship', 'First-Line Therapy']
  },
  {
    id: 'uti_q2',
    topicId: 'urinary_tract_infections',
    topicTitle: 'Management of Urinary Tract Infections',
    questionNumber: 2,
    clinicalVignette: 'A 24-year-old primigravida at 14 weeks gestation attends a routine antenatal clinic. She is completely asymptomatic. Routine clean-catch midstream urine culture demonstrates Escherichia coli (>10⁵ CFU/mL) sensitive to cefuroxime and nitrofurantoin. What is the most appropriate management?',
    options: [
      { id: 'A', text: 'Reassure the patient and do not prescribe antibiotics because she is asymptomatic' },
      { id: 'B', text: 'Treat with appropriate oral antibiotics (e.g. Nitrofurantoin or Cefuroxime) and perform a repeat test-of-cure urine culture after completing therapy' },
      { id: 'C', text: 'Advise increased water intake and cranberry juice as sole therapy' },
      { id: 'D', text: 'Prescribe oral ciprofloxacin for 14 days' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Treat with appropriate oral antibiotics (e.g. Nitrofurantoin or Cefuroxime) and perform a repeat test-of-cure urine culture after completing therapy',
    explanation: 'Asymptomatic bacteriuria (ASB) in pregnancy is one of the few strict indications for screening and mandatory treatment. Physiological urinary stasis, ureteral dilation, and progesterone-mediated smooth muscle relaxation predispose to bacterial ascent; untreated ASB carries a 20–40% risk of progressing to acute pyelonephritis, preterm labor, and low birth weight. Safe oral antibiotics (Cefuroxime, Amoxicillin-clavulanate, or Nitrofurantoin in 1st/2nd trimesters) must be prescribed followed by a test-of-cure urine culture 1–2 weeks later.',
    optionRationales: {
      A: 'Asymptomatic bacteriuria in pregnancy must always be treated to prevent severe maternal pyelonephritis and fetal morbidity.',
      B: 'Correct. Screen and treat asymptomatic bacteriuria in pregnancy with pregnancy-safe antibiotics, followed by a test of cure.',
      C: 'Cranberry juice has no therapeutic efficacy for established bacteriuria in pregnancy.',
      D: 'Fluoroquinolones (ciprofloxacin) are contraindicated in pregnancy due to fetal cartilage arthropathy.'
    },
    keyTakeaway: 'Asymptomatic bacteriuria in pregnancy must always be treated with pregnancy-safe antibiotics to prevent pyelonephritis and preterm delivery.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Pregnancy UTI', 'Asymptomatic Bacteriuria', 'Pyelonephritis Prevention', 'Obstetrics']
  },
  {
    id: 'uti_q3',
    topicId: 'urinary_tract_infections',
    topicTitle: 'Management of Urinary Tract Infections',
    questionNumber: 3,
    clinicalVignette: 'A 29-year-old woman presents with sudden onset of high-grade fever (39.2°C), severe right flank pain, rigors, nausea, and costovertebral angle tenderness. Urinalysis reveals pyuria, bacteriuria, and white blood cell casts. She is hemodynamically stable and able to tolerate oral fluids and medications. What is the most appropriate outpatient empirical therapy?',
    options: [
      { id: 'A', text: 'Oral nitrofurantoin 100 mg BD for 5 days' },
      { id: 'B', text: 'Oral ciprofloxacin 500 mg BD for 7 days (or oral levofloxacin 750 mg daily for 5 days)' },
      { id: 'C', text: 'Oral fosfomycin 3 g single dose' },
      { id: 'D', text: 'Topical vaginal estrogen cream' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Oral ciprofloxacin 500 mg BD for 7 days (or oral levofloxacin 750 mg daily for 5 days)',
    explanation: 'The presence of high fever, costovertebral angle tenderness, and white blood cell casts establishes acute uncomplicated pyelonephritis. Unlike nitrofurantoin and fosfomycin (which do not achieve therapeutic parenchymal renal tissue concentrations and are strictly contraindicated in upper UTI), fluoroquinolones (oral Ciprofloxacin 500 mg BD for 7 days or Levofloxacin 750 mg daily for 5 days) achieve excellent renal parenchymal penetration and are the preferred outpatient oral agents when local resistance is <10%.',
    optionRationales: {
      A: 'Nitrofurantoin does not penetrate renal parenchyma and is contraindicated in pyelonephritis.',
      B: 'Correct. Oral fluoroquinolones (Ciprofloxacin/Levofloxacin) achieve high renal tissue levels and are first-line for outpatient pyelonephritis.',
      C: 'Fosfomycin achieves bladder concentration only and is ineffective for renal parenchymal infection.',
      D: 'Vaginal estrogen is for postmenopausal atrophic vaginitis, not acute pyelonephritis.'
    },
    keyTakeaway: 'Nitrofurantoin and fosfomycin must NEVER be used for pyelonephritis; oral fluoroquinolones (ciprofloxacin) achieve high renal parenchymal penetration.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Acute Pyelonephritis', 'Ciprofloxacin', 'WBC Casts', 'Renal Parenchymal Penetration']
  },
  {
    id: 'uti_q4',
    topicId: 'urinary_tract_infections',
    topicTitle: 'Management of Urinary Tract Infections',
    questionNumber: 4,
    clinicalVignette: 'An 82-year-old woman in a long-term care facility has an indwelling Foley catheter for chronic urinary retention. A routine surveillance urine culture grows >10⁵ CFU/mL of Pseudomonas aeruginosa. She has no fever, flank pain, altered mental status, or systemic symptoms. Urinalysis shows pyuria. What is the most appropriate management?',
    options: [
      { id: 'A', text: 'Administer intravenous meropenem for 14 days' },
      { id: 'B', text: 'Administer oral ciprofloxacin for 10 days' },
      { id: 'C', text: 'No antibiotic therapy is indicated; routine screening and treatment of catheter-associated asymptomatic bacteriuria should be avoided' },
      { id: 'D', text: 'Daily bladder irrigation with chlorhexidine solution' }
    ],
    correctOption: 'C',
    correctAnswerText: 'No antibiotic therapy is indicated; routine screening and treatment of catheter-associated asymptomatic bacteriuria should be avoided',
    explanation: 'Nearly 100% of patients with long-term indwelling urinary catheters develop bacterial colonization and pyuria within 30 days (catheter-associated asymptomatic bacteriuria, CA-ASB). International guidelines (IDSA) strongly advise AGAINST screening for or treating asymptomatic bacteriuria or pyuria in catheterized patients without systemic symptoms or pregnancy. Treating CA-ASB does not prevent future infections, but drives multi-drug resistant organisms (MDROs) and Clostridioides difficile colitis.',
    optionRationales: {
      A: 'Meropenem for asymptomatic colonization causes severe multi-drug resistance.',
      B: 'Fluoroquinolones should never be given for asymptomatic colonization.',
      C: 'Correct. Do not treat catheter-associated asymptomatic bacteriuria in the absence of systemic signs of infection.',
      D: 'Bladder irrigations cause chemical cystitis and are not recommended.'
    },
    keyTakeaway: 'Do not treat catheter-associated asymptomatic bacteriuria (CA-ASB); antibiotic treatment does not improve outcomes and drives antimicrobial resistance.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Catheter-Associated UTI', 'CA-ASB', 'Antibiotic Stewardship', 'Geriatrics']
  },
  {
    id: 'uti_q5',
    topicId: 'urinary_tract_infections',
    topicTitle: 'Management of Urinary Tract Infections',
    questionNumber: 5,
    clinicalVignette: 'A 55-year-old man presents with perineal aching pain, fever (38.8°C), dysuria, and urinary hesitancy. On gentle digital rectal examination, his prostate is exquisitely tender, hot, and boggy. Clean-catch urine culture grows Escherichia coli. What is the recommended duration of antibiotic therapy for acute bacterial prostatitis?',
    options: [
      { id: 'A', text: 'Single-dose oral fosfomycin' },
      { id: 'B', text: '3 days of oral trimethoprim-sulfamethoxazole' },
      { id: 'C', text: '2 to 4 weeks (14–28 days) of an oral fluoroquinolone (e.g. Ciprofloxacin or Levofloxacin)' },
      { id: 'D', text: '6 months of continuous low-dose prophylaxis' }
    ],
    correctOption: 'C',
    correctAnswerText: '2 to 4 weeks (14–28 days) of an oral fluoroquinolone (e.g. Ciprofloxacin or Levofloxacin)',
    explanation: 'Acute bacterial prostatitis presents with fever, dysuria, pelvic/perineal pain, and an exquisitely tender, swollen prostate. Because the blood-prostate barrier limits penetration of most hydrophilic antimicrobials into prostatic stroma, lipid-soluble antibiotics (Fluoroquinolones like ciprofloxacin/levofloxacin, or high-dose TMP-SMX) that achieve high prostatic tissue levels are required. To ensure complete bacterial eradication and prevent transition into chronic bacterial prostatitis or prostatic abscess, treatment must be continued for a minimum of 2 to 4 weeks (14–28 days).',
    optionRationales: {
      A: 'Fosfomycin single dose is for uncomplicated cystitis and fails in prostatitis.',
      B: 'Short-course 3-day regimens lead to treatment failure and chronic relapsing prostatitis.',
      C: 'Correct. Prostatic tissue penetration requires 2 to 4 weeks (14–28 days) of a lipid-soluble fluoroquinolone or TMP-SMX.',
      D: '6 months is unnecessarily prolonged for acute uncomplicated bacterial prostatitis.'
    },
    keyTakeaway: 'Acute bacterial prostatitis requires 2 to 4 weeks (14–28 days) of a fluoroquinolone or TMP-SMX to achieve adequate prostatic penetration and prevent chronicity.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Acute Prostatitis', 'Ciprofloxacin', 'Prostatic Penetration', 'Antibiotic Duration']
  },

  // ----------------------------------------------------
  // MANAGEMENT OF FEVER IN RETURNING TRAVELER (Pages 43-46)
  // ----------------------------------------------------
  {
    id: 'trav_q1',
    topicId: 'fever_in_traveler',
    topicTitle: 'Management of Fever in Returning Traveler',
    questionNumber: 1,
    clinicalVignette: 'A 34-year-old business executive presents with high fevers, rigors, headache, and myalgias 9 days after returning from a 2-week trip to Nigeria. He took no chemoprophylaxis. On examination, he is febrile (39.5°C), tachycardic, and has mild splenomegaly. What is the single most urgent, essential diagnostic investigation that must be performed immediately?',
    options: [
      { id: 'A', text: 'Stool microscopy for ova, cysts, and parasites' },
      { id: 'B', text: 'Urgent thick and thin blood films for malaria parasites (and malaria rapid diagnostic test)' },
      { id: 'C', text: 'Serology for Dengue virus IgM' },
      { id: 'D', text: 'Abdominal ultrasound for amoebic liver abscess' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Urgent thick and thin blood films for malaria parasites (and malaria rapid diagnostic test)',
    explanation: 'Any febrile traveler returning from a malaria-endemic region (especially Sub-Saharan Africa) must be considered to have severe Plasmodium falciparum malaria until proven otherwise. Falciparum malaria can progress from mild febrile illness to coma, ARDS, multi-organ failure, and death within 24–48 hours. Urgent thick blood film (for high sensitivity parasite detection) and thin blood film (for species identification and % parasitemia quantification), supplemented by rapid diagnostic antigen tests (RDTs), is the mandatory STAT investigation.',
    optionRationales: {
      A: 'Stool examination is non-urgent and does not evaluate acute life-threatening febrile parasitemia.',
      B: 'Correct. Urgent thick and thin blood films (and malaria RDT) must be performed immediately in any febrile traveler from an endemic zone.',
      C: 'Dengue serology takes time and Dengue is rarely immediately fatal compared to P. falciparum in non-immune adults.',
      D: 'Ultrasound has no role in the immediate evaluation of acute malaria.'
    },
    keyTakeaway: 'Fever in a traveler returning from a malaria-endemic zone is Plasmodium falciparum malaria until definitively excluded by urgent thick and thin blood films.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Malaria', 'Returning Traveler', 'Thick and Thin Films', 'Plasmodium falciparum', 'Emergency']
  },
  {
    id: 'trav_q2',
    topicId: 'fever_in_traveler',
    topicTitle: 'Management of Fever in Returning Traveler',
    questionNumber: 2,
    clinicalVignette: 'A 28-year-old woman returned from Ghana 5 days ago. Thick and thin blood films confirm Plasmodium falciparum malaria with 8% parasitaemia. She is confused, oliguric, jaundiced, and has a blood glucose of 2.2 mmol/L (39.6 mg/dL). Which of the following is the first-line treatment of choice for severe malaria?',
    options: [
      { id: 'A', text: 'Oral artemether-lumefantrine' },
      { id: 'B', text: 'Oral chloroquine' },
      { id: 'C', text: 'Intravenous artesunate (at 0, 12, and 24 hours, then once daily)' },
      { id: 'D', text: 'Intramuscular mefloquine' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Intravenous artesunate (at 0, 12, and 24 hours, then once daily)',
    explanation: 'This patient meets criteria for Severe Plasmodium falciparum malaria (parasitemia >2%, impaired consciousness/cerebral malaria, hypoglycemia, jaundice, and renal impairment). According to WHO guidelines and large randomized trials (SEAQUAMAT and AQUAMAT), Intravenous Artesunate (2.4 mg/kg IV at 0, 12, and 24 hours, then daily until oral intake is tolerated) significantly reduces mortality compared to IV quinine. Once the patient can swallow and clinical improvement occurs, a full 3-day oral ACT course is completed.',
    optionRationales: {
      A: 'Oral ACTs are for uncomplicated malaria; patients with severe malaria/altered mental status require IV therapy.',
      B: 'Chloroquine has near-universal P. falciparum resistance worldwide and is strictly contraindicated.',
      C: 'Correct. Intravenous artesunate is the definitive WHO first-line therapy for severe falciparum malaria.',
      D: 'IM mefloquine has high neuropsychiatric toxicity and is not used for severe malaria.'
    },
    keyTakeaway: 'Intravenous Artesunate is the WHO first-line treatment of choice for severe Plasmodium falciparum malaria, superior in mortality reduction to IV quinine.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Severe Malaria', 'IV Artesunate', 'Cerebral Malaria', 'WHO Guidelines']
  },
  {
    id: 'trav_q3',
    topicId: 'fever_in_traveler',
    topicTitle: 'Management of Fever in Returning Traveler',
    questionNumber: 3,
    clinicalVignette: 'A 26-year-old backpacker presents with a 6-day history of step-ladder rising fever, dull frontal headache, constipation, dry cough, and abdominal discomfort 12 days after returning from rural South Asia. On examination, temperature is 39.8°C, pulse is 72 beats per minute (relative bradycardia / Faget sign), and faint, blanching salmon-colored macules are noted on his trunk. What is the most likely diagnosis?',
    options: [
      { id: 'A', text: 'Enteric fever (Typhoid / Paratyphoid fever)' },
      { id: 'B', text: 'Yellow fever' },
      { id: 'C', text: 'Acute hepatitis A' },
      { id: 'D', text: 'Dengue hemorrhagic fever' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Enteric fever (Typhoid / Paratyphoid fever)',
    explanation: 'Enteric (Typhoid/Paratyphoid) fever, caused by Salmonella enterica serovars Typhi or Paratyphi, classically presents in travelers from endemic regions (South Asia) with: a step-ladder rising fever, frontal headache, constipation (or "pea-soup" diarrhea later), relative bradycardia (Faget sign: pulse rate disproportionately low for high fever), abdominal pain, and faint erythematous macules on the abdomen/trunk ("rose spots"). Blood cultures taken in the 1st week are positive in 60–80% of cases.',
    optionRationales: {
      A: 'Correct. Step-ladder fever, relative bradycardia (Faget sign), rose spots, and abdominal symptoms following travel to South Asia define Enteric (Typhoid) fever.',
      B: 'Yellow fever presents with acute biphasic illness, severe jaundice, and hemorrhagic shock in unvaccinated travelers.',
      C: 'Hepatitis A presents with marked jaundice, dark urine, and markedly elevated transaminases (>1000 IU/L).',
      D: 'Dengue presents with acute saddleback fever, "break-bone" arthralgias, retro-orbital pain, and rash.'
    },
    keyTakeaway: 'Step-ladder fever, relative bradycardia (Faget sign), and transient blanching rose spots on the trunk in a traveler from South Asia indicate Enteric (Typhoid) fever.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Enteric Fever', 'Typhoid', 'Faget Sign', 'Rose Spots', 'Salmonella Typhi']
  },
  {
    id: 'trav_q4',
    topicId: 'fever_in_traveler',
    topicTitle: 'Management of Fever in Returning Traveler',
    questionNumber: 4,
    clinicalVignette: 'A 29-year-old tourist returns from Thailand with acute high fevers, severe retro-orbital headache, debilitating diffuse myalgias and arthralgias ("break-bone fever"), and a diffuse maculopapular blanching rash. Complete blood count reveals leukopenia (WBC 2.1 × 10⁹/L) and thrombocytopenia (platelets 65 × 10⁹/L). Which viral pathogen is the most likely cause?',
    options: [
      { id: 'A', text: 'Dengue virus' },
      { id: 'B', text: 'Rabies virus' },
      { id: 'C', text: 'Ebola virus' },
      { id: 'D', text: 'Lassa virus' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Dengue virus',
    explanation: 'Dengue fever (transmitted by daytime-biting Aedes aegypti mosquitoes) is the most common cause of acute fever in travelers returning from Southeast Asia, the Caribbean, and Latin America. It classically features acute onset of high fever, retro-orbital pain, intense musculoskeletal pain ("breakbone fever"), maculopapular rash ("islands of white in a sea of red"), profound leukopenia, and thrombocytopenia. Diagnosis in the first 5 days is confirmed by Dengue NS1 antigen testing.',
    optionRationales: {
      A: 'Correct. Retro-orbital pain, severe arthralgias ("breakbone"), rash, leukopenia, and thrombocytopenia after travel to Thailand define Dengue virus infection.',
      B: 'Rabies presents with hydrophobia, agitation, and encephalopathy following an animal bite.',
      C: 'Ebola is a filovirus causing severe hemorrhagic fever restricted to equatorial Africa.',
      D: 'Lassa virus causes hemorrhagic fever in West Africa with mucosal bleeding and hearing loss.'
    },
    keyTakeaway: 'Dengue virus causes high fever, retro-orbital headache, severe arthralgias/myalgias, rash, leukopenia, and thrombocytopenia in travelers returning from Southeast Asia.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Dengue Virus', 'Breakbone Fever', 'Leukopenia', 'Thrombocytopenia', 'Aedes Mosquito']
  },
  {
    id: 'trav_q5',
    topicId: 'fever_in_traveler',
    topicTitle: 'Management of Fever in Returning Traveler',
    questionNumber: 5,
    clinicalVignette: 'A 27-year-old male traveler presents with high fever, chills, and headache 6 weeks after swimming and rafting in Lake Malawi. Laboratory results reveal marked peripheral blood eosinophilia (eosinophils 2.8 × 10⁹/L). Blood films for malaria are negative. What is the most likely diagnosis?',
    options: [
      { id: 'A', text: 'Acute Schistosomiasis (Katayama fever)' },
      { id: 'B', text: 'Typhoid fever' },
      { id: 'C', text: 'Acute dengue fever' },
      { id: 'D', text: 'Meningococcal meningitis' }
    ],
    correctOption: 'A',
    correctAnswerText: 'Acute Schistosomiasis (Katayama fever)',
    explanation: 'Acute Schistosomiasis (Katayama fever) is an immune complex reaction occurring 2 to 8 weeks after freshwater exposure (swimming, kayaking in Lake Malawi or other African freshwater bodies) infested with Schistosoma cercariae. As schistosomulae mature into adult worms and lay eggs, the massive antigen release triggers a serum sickness-like syndrome: high fevers, rigors, dry cough, urticaria, hepatosplenomegaly, and dramatic peripheral eosinophilia. Praziquantel is the treatment, repeated in 4–6 weeks.',
    optionRationales: {
      A: 'Correct. Freshwater swimming in Africa (Lake Malawi) followed 2–8 weeks later by fever, urticaria, cough, and marked eosinophilia defines Katayama fever.',
      B: 'Typhoid fever causes eosinopenia, not marked eosinophilia.',
      C: 'Dengue causes leukopenia and thrombocytopenia, not profound eosinophilia.',
      D: 'Meningitis presents with neutrophilic leukocytosis and meningism.'
    },
    keyTakeaway: 'Freshwater exposure in Africa (e.g. Lake Malawi) followed by fever, urticaria, and marked eosinophilia is pathognomonic for Katayama fever (acute schistosomiasis).',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Katayama Fever', 'Acute Schistosomiasis', 'Eosinophilia', 'Lake Malawi', 'Parasitology']
  },

  // ----------------------------------------------------
  // INVESTIGATION OF THYROID DISORDERS (Pages 64-67)
  // ----------------------------------------------------
  {
    id: 'thy_q1',
    topicId: 'thyroid_disorders',
    topicTitle: 'Investigation of Thyroid Disorders',
    questionNumber: 1,
    clinicalVignette: 'A 32-year-old woman presents with anxiety, palpitations, heat intolerance, weight loss, and bilateral proptosis with lid retraction. On examination, she has a diffusely enlarged, non-tender goiter with an audible vascular bruit. Which serum antibody is most pathogenic and definitive in confirming Graves\' disease?',
    options: [
      { id: 'A', text: 'Anti-thyroglobulin (anti-Tg) antibody' },
      { id: 'B', text: 'Anti-thyroid peroxidase (anti-TPO) antibody' },
      { id: 'C', text: 'Thyrotropin receptor antibody (TRAb / TSI)' },
      { id: 'D', text: 'Anti-nuclear antibody (ANA)' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Thyrotropin receptor antibody (TRAb / TSI)',
    explanation: 'Thyrotropin receptor antibodies (TRAb), specifically Thyroid-Stimulating Immunoglobulins (TSI), are the pathogenic autoantibodies that bind to and activate the TSH receptor on thyroid follicular cells, autonomously stimulating cyclic AMP generation, excess T3/T4 synthesis, and diffuse glandular hyperplasia. TRAb is present in >95% of patients with Graves\' disease and also activates TSH receptors on retro-orbital fibroblasts, driving Graves\' ophthalmopathy (proptosis).',
    optionRationales: {
      A: 'Anti-Tg antibodies are non-specific and found in Hashimoto\'s thyroiditis and thyroid cancer.',
      B: 'Anti-TPO is predominantly elevated in Hashimoto\'s thyroiditis and secondary in Graves\'.',
      C: 'Correct. TSH receptor antibodies (TRAb/TSI) directly stimulate follicular cells and confirm Graves\' disease.',
      D: 'ANA is a general autoimmune marker not specific to thyroid disease.'
    },
    keyTakeaway: 'Thyrotropin receptor antibodies (TRAb / TSI) are pathogenic stimulating antibodies diagnostic of Graves\' disease and drive both hyperthyroidism and orbitopathy.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Graves Disease', 'TRAb', 'TSI', 'Hyperthyroidism', 'Thyroid Antibodies']
  },
  {
    id: 'thy_q2',
    topicId: 'thyroid_disorders',
    topicTitle: 'Investigation of Thyroid Disorders',
    questionNumber: 2,
    clinicalVignette: 'A 50-year-old woman attends a health check. She feels well and has no fatigue, weight changes, or palpitations. Serum testing reveals: TSH 7.8 mIU/L (elevated, normal 0.4–4.0 mIU/L), Free T4 15.2 pmol/L (normal 10–22 pmol/L), and Free T3 4.8 pmol/L (normal 3.1–6.8 pmol/L). Which of the following is the most accurate diagnostic classification?',
    options: [
      { id: 'A', text: 'Overt primary hypothyroidism' },
      { id: 'B', text: 'Subclinical hypothyroidism' },
      { id: 'C', text: 'Subclinical hyperthyroidism' },
      { id: 'D', text: 'Secondary (central) hypothyroidism' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Subclinical hypothyroidism',
    explanation: 'Subclinical hypothyroidism is defined biochemically as an elevated serum TSH concentration in the presence of normal circulating Free T4 and Free T3 concentrations. It represents early or mild thyroid functional failure where subtle anterior pituitary upregulation of TSH maintains euthyroid circulating peripheral thyroid hormone concentrations.',
    optionRationales: {
      A: 'Overt primary hypothyroidism requires an elevated TSH accompanied by a depressed Free T4 (< normal).',
      B: 'Correct. Elevated TSH with normal Free T4 and Free T3 defines subclinical hypothyroidism.',
      C: 'Subclinical hyperthyroidism is defined by a suppressed/undetectable TSH (<0.1) with normal Free T4/T3.',
      D: 'Central hypothyroidism is characterized by a low or inappropriately normal TSH with low Free T4.'
    },
    keyTakeaway: 'Elevated serum TSH with normal Free T4 and Free T3 defines subclinical hypothyroidism.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Subclinical Hypothyroidism', 'TSH', 'Free T4', 'Endocrinology']
  },
  {
    id: 'thy_q3',
    topicId: 'thyroid_disorders',
    topicTitle: 'Investigation of Thyroid Disorders',
    questionNumber: 3,
    clinicalVignette: 'A 38-year-old woman presents with palpitations, tremors, and a painful, exquisitely tender anterior neck mass 2 weeks after recovering from an upper respiratory tract viral infection. Serum TSH is <0.01 mIU/L and Free T4 is elevated. A 24-hour radioactive iodine uptake (RAIU) scan demonstrates markedly suppressed, near-zero tracer uptake (<1%) across the thyroid bed. What is the most likely diagnosis?',
    options: [
      { id: 'A', text: 'Graves\' disease' },
      { id: 'B', text: 'Toxic multinodular goiter' },
      { id: 'C', text: 'Subacute granulomatous (de Quervain\'s) thyroiditis' },
      { id: 'D', text: 'Toxic solitary adenoma' }
    ],
    correctOption: 'C',
    correctAnswerText: 'Subacute granulomatous (de Quervain\'s) thyroiditis',
    explanation: 'Subacute granulomatous (de Quervain\'s) thyroiditis is a post-viral inflammatory destruction of thyroid follicular cells. The damaged follicles release pre-formed thyroid hormones into the bloodstream, creating a transient thyrotoxic phase with high Free T4 and suppressed TSH. Because the follicular cells are inflamed and damaged rather than actively synthesizing new hormone, the 24-hour Radioactive Iodine Uptake (RAIU) is near-zero (<1%). In contrast, Graves\' disease and toxic nodular goiter demonstrate high/elevated RAIU.',
    optionRationales: {
      A: 'Graves\' disease features high diffuse radioactive iodine uptake (>35–50%) and a non-tender goiter.',
      B: 'Toxic MNG shows patchy areas of high and low tracer uptake on scintigraphy.',
      C: 'Correct. Post-viral neck pain and tenderness, thyrotoxic labs, and near-zero (<1%) radioactive iodine uptake define de Quervain\'s thyroiditis.',
      D: 'Toxic adenoma shows a single focal "hot" nodule with suppression of the rest of the gland.'
    },
    keyTakeaway: 'Subacute granulomatous (de Quervain\'s) thyroiditis presents with a painful, tender goiter, elevated Free T4, and near-zero (<1%) radioactive iodine uptake.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['De Quervain Thyroiditis', 'RAIU', 'Subacute Thyroiditis', 'Thyrotoxicosis', 'Neck Pain']
  },
  {
    id: 'thy_q4',
    topicId: 'thyroid_disorders',
    topicTitle: 'Investigation of Thyroid Disorders',
    questionNumber: 4,
    clinicalVignette: 'A 46-year-old woman is found to have a solitary 1.8-cm palpable thyroid nodule in the right lobe during a routine exam. Serum TSH is normal (1.8 mIU/L). Thyroid ultrasound reveals a solid, hypoechoic nodule with irregular margins, taller-than-wide shape, and punctate microcalcifications (ACR TI-RADS 5). What is the next most appropriate investigation?',
    options: [
      { id: 'A', text: 'Radioactive iodine uptake scan' },
      { id: 'B', text: 'Ultrasound-guided fine needle aspiration (FNA) biopsy' },
      { id: 'C', text: 'Reassurance and repeat ultrasound in 2 years' },
      { id: 'D', text: 'Empirical high-dose levothyroxine suppression therapy' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Ultrasound-guided fine needle aspiration (FNA) biopsy',
    explanation: 'In a patient with a non-functioning thyroid nodule (normal TSH) that exhibits high-risk suspicious ultrasound features (hypoechogenicity, irregular microlobulated margins, microcalcifications, taller-than-wide geometry; TI-RADS 5 or ATA high suspicion >=1.0 cm), Ultrasound-guided Fine Needle Aspiration (FNA) cytology is the mandatory diagnostic procedure of choice to assess for thyroid malignancy (e.g. papillary thyroid carcinoma) using the Bethesda Classification System.',
    optionRationales: {
      A: 'Radioactive iodine scans are indicated when TSH is suppressed (<0.1) to find "hot" nodules; when TSH is normal, FNA is needed.',
      B: 'Correct. Ultrasound-guided FNA biopsy is the gold-standard investigation for suspicious (TI-RADS 5 >= 1 cm) thyroid nodules.',
      C: 'High-risk suspicious nodules require immediate cytology, not prolonged delayed observation.',
      D: 'Levothyroxine suppression therapy is obsolete, ineffective, and causes osteoporosis/arrhythmias.'
    },
    keyTakeaway: 'Suspicious thyroid nodules (TI-RADS 5, >=1.0 cm, normal TSH) mandate ultrasound-guided Fine Needle Aspiration (FNA) biopsy for cytopathology.',
    sourcePageRef: '',
    difficulty: 'High Yield',
    tags: ['Thyroid Nodule', 'Fine Needle Aspiration', 'FNA', 'TI-RADS', 'Papillary Carcinoma']
  },
  {
    id: 'thy_q5',
    topicId: 'thyroid_disorders',
    topicTitle: 'Investigation of Thyroid Disorders',
    questionNumber: 5,
    clinicalVignette: 'A 45-year-old woman presents with cold intolerance, constipation, weight gain, and dry coarse skin. Serum TSH is 28.5 mIU/L (markedly elevated) and Free T4 is 5.2 pmol/L (depressed). High titers of anti-thyroid peroxidase (anti-TPO) antibodies are detected. What is the underlying diagnosis and first-line replacement therapy?',
    options: [
      { id: 'A', text: 'Graves\' disease; treated with Carbimazole' },
      { id: 'B', text: 'Hashimoto\'s (autoimmune) thyroiditis; treated with oral Levothyroxine (T4)' },
      { id: 'C', text: 'Subacute thyroiditis; treated with Prednisolone' },
      { id: 'D', text: 'Pituitary macroadenoma; treated with Transsphenoidal surgery' }
    ],
    correctOption: 'B',
    correctAnswerText: 'Hashimoto\'s (autoimmune) thyroiditis; treated with oral Levothyroxine (T4)',
    explanation: 'Hashimoto\'s (chronic autoimmune) thyroiditis is the leading cause of primary overt hypothyroidism in iodine-sufficient regions. It is characterized by autoimmune lymphocytic infiltration of the thyroid, high circulating anti-TPO antibodies (>90%) and anti-Tg antibodies, elevated TSH, and low Free T4. The standard, evidence-based replacement therapy is synthetic oral Levothyroxine (L-T4), dosed at approximately 1.6 µg/kg/day, taken on an empty stomach 30–60 minutes before breakfast.',
    optionRationales: {
      A: 'Graves\' causes hyperthyroidism with low TSH and high Free T4.',
      B: 'Correct. High anti-TPO with primary hypothyroid labs confirms Hashimoto\'s thyroiditis; first-line therapy is oral Levothyroxine.',
      C: 'Subacute thyroiditis is self-limiting and anti-TPO negative.',
      D: 'Pituitary macroadenoma causes secondary hypothyroidism with low TSH.'
    },
    keyTakeaway: 'Hashimoto\'s thyroiditis (high anti-TPO, elevated TSH, low FT4) is the most common cause of primary hypothyroidism and is treated with oral Levothyroxine.',
    sourcePageRef: '',
    difficulty: 'Core Clinical',
    tags: ['Hashimoto Thyroiditis', 'Levothyroxine', 'Anti-TPO', 'Hypothyroidism', 'Endocrinology']
  }
];
