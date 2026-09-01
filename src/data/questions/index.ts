import { Question } from '../../types';
import { RESPIRATORY_CRITICAL_QUESTIONS } from './respiratory_critical';
import { ENDOCRINOLOGY_QUESTIONS } from './endocrinology_metabolism';
import { CARDIO_RENAL_QUESTIONS } from './cardio_renal';
import { EMERGENCY_TOXICOLOGY_QUESTIONS } from './emergency_toxicology';
import { GASTRO_NEURO_RHEUM_QUESTIONS } from './gastro_neuro_rheum';
import { CLINICAL_SPECIALTIES_QUESTIONS } from './clinical_specialties';
import { INFECTIOUS_ENDO_QUESTIONS } from './infectious_endo';
import { PROCEDURES_MISC_QUESTIONS } from './procedures_misc';

// Merge all question collections, deduplicating by question ID
const rawQuestions: Question[] = [
  ...ENDOCRINOLOGY_QUESTIONS,
  ...RESPIRATORY_CRITICAL_QUESTIONS,
  ...CARDIO_RENAL_QUESTIONS,
  ...EMERGENCY_TOXICOLOGY_QUESTIONS,
  ...GASTRO_NEURO_RHEUM_QUESTIONS,
  ...CLINICAL_SPECIALTIES_QUESTIONS,
  ...INFECTIOUS_ENDO_QUESTIONS,
  ...PROCEDURES_MISC_QUESTIONS,
];

const questionMap = new Map<string, Question>();
for (const q of rawQuestions) {
  questionMap.set(q.id, q);
}

export const ALL_QUESTIONS: Question[] = Array.from(questionMap.values());

export const getQuestionsByTopic = (topicId: string): Question[] => {
  return ALL_QUESTIONS.filter((q) => q.topicId === topicId);
};

export const getQuestionById = (id: string): Question | undefined => {
  return ALL_QUESTIONS.find((q) => q.id === id);
};

export const getMockExamQuestions = (count: number = 30): Question[] => {
  const shuffled = [...ALL_QUESTIONS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const getTopicQuestionCount = (topicId: string): number => {
  return ALL_QUESTIONS.filter((q) => q.topicId === topicId).length;
};
