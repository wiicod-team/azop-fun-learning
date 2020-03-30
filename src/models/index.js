// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Suggestion, User, Tribe, Custom, Proverb, Son, Language, Question, Alphabet, Dictionary, Sentence, Name, Legend, History } = initSchema(schema);

export {
  Suggestion,
  User,
  Tribe,
  Custom,
  Proverb,
  Son,
  Language,
  Question,
  Alphabet,
  Dictionary,
  Sentence,
  Name,
  Legend,
  History
};