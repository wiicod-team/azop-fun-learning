import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Suggestion {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly status?: string;
  readonly suggestionscol: string;
  constructor(init: ModelInit<Suggestion>);
  static copyOf(source: Suggestion, mutator: (draft: MutableModel<Suggestion>) => MutableModel<Suggestion> | void): Suggestion;
}

export declare class User {
  readonly id: string;
  readonly first_name?: string; 
  readonly last_name?: string;
  readonly avatar?: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Tribe {
  readonly id: string;
  readonly name: string;
  readonly symbol?: string;
  readonly description?: string;
  readonly localization?: string;
  readonly tribescol?: string;
  constructor(init: ModelInit<Tribe>);
  static copyOf(source: Tribe, mutator: (draft: MutableModel<Tribe>) => MutableModel<Tribe> | void): Tribe;
}

export declare class Custom {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
  constructor(init: ModelInit<Custom>);
  static copyOf(source: Custom, mutator: (draft: MutableModel<Custom>) => MutableModel<Custom> | void): Custom;
}

export declare class Proverb {
  readonly id: string;
  readonly title: string;
  readonly meaning: string;
  readonly content: string;
  readonly track?: string;
  constructor(init: ModelInit<Proverb>);
  static copyOf(source: Proverb, mutator: (draft: MutableModel<Proverb>) => MutableModel<Proverb> | void): Proverb;
}

export declare class Son {
  readonly id: string;
  readonly title: string;
  readonly lyric: string;
  readonly sons: string;
  constructor(init: ModelInit<Son>);
  static copyOf(source: Son, mutator: (draft: MutableModel<Son>) => MutableModel<Son> | void): Son;
}

export declare class Language {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  constructor(init: ModelInit<Language>);
  static copyOf(source: Language, mutator: (draft: MutableModel<Language>) => MutableModel<Language> | void): Language;
}

export declare class Question {
  readonly id: string;
  readonly question_template: string;
  readonly answers: string;
  readonly status: string;
  readonly questionscol: string;
  constructor(init: ModelInit<Question>);
  static copyOf(source: Question, mutator: (draft: MutableModel<Question>) => MutableModel<Question> | void): Question;
}

export declare class Alphabet {
  readonly id: string;
  readonly symbols: string;
  readonly sons: string;
  readonly order: string;
  constructor(init: ModelInit<Alphabet>);
  static copyOf(source: Alphabet, mutator: (draft: MutableModel<Alphabet>) => MutableModel<Alphabet> | void): Alphabet;
}

export declare class Dictionary {
  readonly id: string;
  readonly name: string;
  readonly words: string;
  constructor(init: ModelInit<Dictionary>);
  static copyOf(source: Dictionary, mutator: (draft: MutableModel<Dictionary>) => MutableModel<Dictionary> | void): Dictionary;
}

export declare class Sentence {
  readonly id: string;
  readonly sentence: string;
  readonly translations: string;
  readonly track: string;
  readonly sentencescol: string;
  constructor(init: ModelInit<Sentence>);
  static copyOf(source: Sentence, mutator: (draft: MutableModel<Sentence>) => MutableModel<Sentence> | void): Sentence;
}

export declare class Name {
  readonly id: string;
  readonly name: string;
  readonly gender: string;
  readonly signification: string;
  constructor(init: ModelInit<Name>);
  static copyOf(source: Name, mutator: (draft: MutableModel<Name>) => MutableModel<Name> | void): Name;
}

export declare class Legend {
  readonly id: string;
  readonly name: string;
  readonly surname: string;
  readonly birthdate: string;
  readonly picture: string;
  constructor(init: ModelInit<Legend>);
  static copyOf(source: Legend, mutator: (draft: MutableModel<Legend>) => MutableModel<Legend> | void): Legend;
}

export declare class History {
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly start_at?: string;
  readonly end_at?: string;
  constructor(init: ModelInit<History>);
  static copyOf(source: History, mutator: (draft: MutableModel<History>) => MutableModel<History> | void): History;
}