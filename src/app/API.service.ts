/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateUserInput = {
  id?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  avatar?: string | null;
  suggestions?: Array<SuggestionInput | null> | null;
  tribes?: Array<TribeUserInput | null> | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  _version?: number | null;
};

export type SuggestionInput = {
  id: string;
  title: string;
  description: string;
  status?: SUGGESTION_STATUS | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export enum SUGGESTION_STATUS {
  NEW = "NEW",
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED"
}

export type TribeUserInput = {
  id: string;
  tribeId?: string | null;
  userId?: string | null;
  tribeName?: string | null;
  userName?: string | null;
  role: TRIBE_ROLE;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export enum TRIBE_ROLE {
  TCHINDA = "TCHINDA",
  NOTABLE = "NOTABLE",
  BOMBOCK = "BOMBOCK"
}

export type ModelUserConditionInput = {
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  avatar?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export enum QUESTION_TYPE {
  TEXT = "TEXT",
  IMAGE = "IMAGE",
  AUDIO = "AUDIO",
  VIDEO = "VIDEO"
}

export enum FILE_TYPE {
  TXT = "TXT",
  PNG = "PNG",
  JPG = "JPG",
  MP3 = "MP3",
  OGG = "OGG",
  WAV = "WAV",
  WEBM = "WEBM",
  MPEG = "MPEG",
  AVI = "AVI",
  FLV = "FLV",
  MOV = "MOV",
  MP4 = "MP4",
  M4V = "M4V"
}

export enum QUESTION_TEMPLATE {
  DEFINITION = "DEFINITION",
  TRANSLATION = "TRANSLATION",
  INTEPRETATION = "INTEPRETATION"
}

export enum ANSWER_STATUS {
  NEW = "NEW",
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED"
}

export enum QUESTION_STATUS {
  NEW = "NEW",
  PENDING = "PENDING",
  ANSWERED = "ANSWERED",
  CLOSED = "CLOSED"
}

export type UpdateUserInput = {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  avatar?: string | null;
  suggestions?: Array<SuggestionInput | null> | null;
  tribes?: Array<TribeUserInput | null> | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  _version?: number | null;
};

export type DeleteUserInput = {
  id?: string | null;
  _version?: number | null;
};

export type CreateTribeInput = {
  id?: string | null;
  name: string;
  symbol?: FileInput | null;
  description?: string | null;
  country?: CountryInput | null;
  localization?: Array<GeoPositionInput | null> | null;
  users?: Array<TribeUserInput | null> | null;
  customs?: Array<CustomInput | null> | null;
  proverbs?: Array<ProverbInput | null> | null;
  songs?: Array<SongInput | null> | null;
  names?: Array<NameInput | null> | null;
  languages?: Array<LanguageInput | null> | null;
  legends?: Array<LegendInput | null> | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  _version?: number | null;
};

export type FileInput = {
  type?: FILE_TYPE | null;
  url?: string | null;
  size?: number | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type CountryInput = {
  id: string;
  name: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type GeoPositionInput = {
  lat: number;
  long: number;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type CustomInput = {
  id: string;
  tribeID: string;
  type?: CUSTOM_TYPE | null;
  title: string;
  description?: string | null;
  status?: CUSTOM_STATUS | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export enum CUSTOM_TYPE {
  MARRIAGE = "MARRIAGE",
  BIRTH = "BIRTH",
  DEATH = "DEATH"
}

export enum CUSTOM_STATUS {
  NEW = "NEW",
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED"
}

export type ProverbInput = {
  id: string;
  tribeID: string;
  title: string;
  meaning: string;
  content: string;
  track?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type SongInput = {
  id: string;
  tribeID: string;
  title: string;
  lyric: string;
  songs: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type NameInput = {
  id: string;
  tribeID: string;
  name: string;
  gender: string;
  signification: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type LanguageInput = {
  id: string;
  tribeID: string;
  name: string;
  description: string;
  alphabets?: Array<AlphabetInput | null> | null;
  dictionaries?: Array<DictionaryInput | null> | null;
  sentences?: Array<SentenceInput | null> | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type AlphabetInput = {
  id: string;
  languageID: string;
  letters?: Array<LetterInput | null> | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type LetterInput = {
  id: string;
  symbol: string;
  order: number;
  pronociation?: FileInput | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DictionaryInput = {
  id: string;
  languageID: string;
  name: string;
  words?: Array<WordInput | null> | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type WordInput = {
  id: string;
  title: string;
  prononciation?: FileInput | null;
  meaning: string;
  picture?: FileInput | null;
  usages?: Array<SentenceInput | null> | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type SentenceInput = {
  id: string;
  languageID: string;
  languageName?: string | null;
  title: string;
  translations?: string | null;
  track: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type LegendInput = {
  id: string;
  name: string;
  surname: string;
  birthdate: string;
  picture: string;
  tribeIds?: Array<string> | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelTribeConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelTribeConditionInput | null> | null;
  or?: Array<ModelTribeConditionInput | null> | null;
  not?: ModelTribeConditionInput | null;
};

export type UpdateTribeInput = {
  id: string;
  name?: string | null;
  symbol?: FileInput | null;
  description?: string | null;
  country?: CountryInput | null;
  localization?: Array<GeoPositionInput | null> | null;
  users?: Array<TribeUserInput | null> | null;
  customs?: Array<CustomInput | null> | null;
  proverbs?: Array<ProverbInput | null> | null;
  songs?: Array<SongInput | null> | null;
  names?: Array<NameInput | null> | null;
  languages?: Array<LanguageInput | null> | null;
  legends?: Array<LegendInput | null> | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  _version?: number | null;
};

export type DeleteTribeInput = {
  id?: string | null;
  _version?: number | null;
};

export type CreateQuestionInput = {
  id?: string | null;
  title: string;
  type: QUESTION_TYPE;
  asset?: FileInput | null;
  languageID: string;
  question_template: QUESTION_TEMPLATE;
  answers: Array<AnswerInput | null>;
  status: QUESTION_STATUS;
  user?: UserInput | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  _version?: number | null;
};

export type AnswerInput = {
  id: string;
  status?: ANSWER_STATUS | null;
  type: QUESTION_TYPE;
  title: string;
  vote?: number | null;
  user?: UserInput | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type UserInput = {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  avatar?: string | null;
  suggestions?: Array<SuggestionInput | null> | null;
  tribes?: Array<TribeUserInput | null> | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ModelQuestionConditionInput = {
  title?: ModelStringInput | null;
  type?: ModelQUESTION_TYPEInput | null;
  languageID?: ModelIDInput | null;
  question_template?: ModelQUESTION_TEMPLATEInput | null;
  status?: ModelQUESTION_STATUSInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelQuestionConditionInput | null> | null;
  or?: Array<ModelQuestionConditionInput | null> | null;
  not?: ModelQuestionConditionInput | null;
};

export type ModelQUESTION_TYPEInput = {
  eq?: QUESTION_TYPE | null;
  ne?: QUESTION_TYPE | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelQUESTION_TEMPLATEInput = {
  eq?: QUESTION_TEMPLATE | null;
  ne?: QUESTION_TEMPLATE | null;
};

export type ModelQUESTION_STATUSInput = {
  eq?: QUESTION_STATUS | null;
  ne?: QUESTION_STATUS | null;
};

export type UpdateQuestionInput = {
  id: string;
  title?: string | null;
  type?: QUESTION_TYPE | null;
  asset?: FileInput | null;
  languageID?: string | null;
  question_template?: QUESTION_TEMPLATE | null;
  answers?: Array<AnswerInput | null> | null;
  status?: QUESTION_STATUS | null;
  user?: UserInput | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  _version?: number | null;
};

export type DeleteQuestionInput = {
  id?: string | null;
  _version?: number | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  avatar?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelTribeFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelTribeFilterInput | null> | null;
  or?: Array<ModelTribeFilterInput | null> | null;
  not?: ModelTribeFilterInput | null;
};

export type ModelQuestionFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  type?: ModelQUESTION_TYPEInput | null;
  languageID?: ModelIDInput | null;
  question_template?: ModelQUESTION_TEMPLATEInput | null;
  status?: ModelQUESTION_STATUSInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelQuestionFilterInput | null> | null;
  or?: Array<ModelQuestionFilterInput | null> | null;
  not?: ModelQuestionFilterInput | null;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  firstName: string | null;
  lastName: string | null;
  avatar: string | null;
  suggestions: Array<{
    __typename: "Suggestion";
    id: string;
    title: string;
    description: string;
    status: SUGGESTION_STATUS | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  tribes: Array<{
    __typename: "TribeUser";
    id: string;
    tribeId: string | null;
    userId: string | null;
    tribeName: string | null;
    userName: string | null;
    role: TRIBE_ROLE;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  questions: Array<{
    __typename: "Question";
    id: string;
    title: string;
    type: QUESTION_TYPE;
    asset: {
      __typename: "File";
      type: FILE_TYPE | null;
      url: string | null;
      size: number | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null;
    languageID: string;
    question_template: QUESTION_TEMPLATE;
    answers: Array<{
      __typename: "Answer";
      id: string;
      status: ANSWER_STATUS | null;
      type: QUESTION_TYPE;
      title: string;
      vote: number | null;
      user: {
        __typename: "User";
        id: string;
        firstName: string | null;
        lastName: string | null;
        avatar: string | null;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null>;
    status: QUESTION_STATUS;
    user: {
      __typename: "User";
      id: string;
      firstName: string | null;
      lastName: string | null;
      avatar: string | null;
      suggestions: Array<{
        __typename: "Suggestion";
        id: string;
        title: string;
        description: string;
        status: SUGGESTION_STATUS | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      tribes: Array<{
        __typename: "TribeUser";
        id: string;
        tribeId: string | null;
        userId: string | null;
        tribeName: string | null;
        userName: string | null;
        role: TRIBE_ROLE;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      questions: Array<{
        __typename: "Question";
        id: string;
        title: string;
        type: QUESTION_TYPE;
        languageID: string;
        question_template: QUESTION_TEMPLATE;
        status: QUESTION_STATUS;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      owner: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    owner: string | null;
  } | null> | null;
  createdAt: string | null;
  updatedAt: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  owner: string | null;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  firstName: string | null;
  lastName: string | null;
  avatar: string | null;
  suggestions: Array<{
    __typename: "Suggestion";
    id: string;
    title: string;
    description: string;
    status: SUGGESTION_STATUS | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  tribes: Array<{
    __typename: "TribeUser";
    id: string;
    tribeId: string | null;
    userId: string | null;
    tribeName: string | null;
    userName: string | null;
    role: TRIBE_ROLE;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  questions: Array<{
    __typename: "Question";
    id: string;
    title: string;
    type: QUESTION_TYPE;
    asset: {
      __typename: "File";
      type: FILE_TYPE | null;
      url: string | null;
      size: number | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null;
    languageID: string;
    question_template: QUESTION_TEMPLATE;
    answers: Array<{
      __typename: "Answer";
      id: string;
      status: ANSWER_STATUS | null;
      type: QUESTION_TYPE;
      title: string;
      vote: number | null;
      user: {
        __typename: "User";
        id: string;
        firstName: string | null;
        lastName: string | null;
        avatar: string | null;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null>;
    status: QUESTION_STATUS;
    user: {
      __typename: "User";
      id: string;
      firstName: string | null;
      lastName: string | null;
      avatar: string | null;
      suggestions: Array<{
        __typename: "Suggestion";
        id: string;
        title: string;
        description: string;
        status: SUGGESTION_STATUS | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      tribes: Array<{
        __typename: "TribeUser";
        id: string;
        tribeId: string | null;
        userId: string | null;
        tribeName: string | null;
        userName: string | null;
        role: TRIBE_ROLE;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      questions: Array<{
        __typename: "Question";
        id: string;
        title: string;
        type: QUESTION_TYPE;
        languageID: string;
        question_template: QUESTION_TEMPLATE;
        status: QUESTION_STATUS;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      owner: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    owner: string | null;
  } | null> | null;
  createdAt: string | null;
  updatedAt: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  owner: string | null;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  firstName: string | null;
  lastName: string | null;
  avatar: string | null;
  suggestions: Array<{
    __typename: "Suggestion";
    id: string;
    title: string;
    description: string;
    status: SUGGESTION_STATUS | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  tribes: Array<{
    __typename: "TribeUser";
    id: string;
    tribeId: string | null;
    userId: string | null;
    tribeName: string | null;
    userName: string | null;
    role: TRIBE_ROLE;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  questions: Array<{
    __typename: "Question";
    id: string;
    title: string;
    type: QUESTION_TYPE;
    asset: {
      __typename: "File";
      type: FILE_TYPE | null;
      url: string | null;
      size: number | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null;
    languageID: string;
    question_template: QUESTION_TEMPLATE;
    answers: Array<{
      __typename: "Answer";
      id: string;
      status: ANSWER_STATUS | null;
      type: QUESTION_TYPE;
      title: string;
      vote: number | null;
      user: {
        __typename: "User";
        id: string;
        firstName: string | null;
        lastName: string | null;
        avatar: string | null;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null>;
    status: QUESTION_STATUS;
    user: {
      __typename: "User";
      id: string;
      firstName: string | null;
      lastName: string | null;
      avatar: string | null;
      suggestions: Array<{
        __typename: "Suggestion";
        id: string;
        title: string;
        description: string;
        status: SUGGESTION_STATUS | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      tribes: Array<{
        __typename: "TribeUser";
        id: string;
        tribeId: string | null;
        userId: string | null;
        tribeName: string | null;
        userName: string | null;
        role: TRIBE_ROLE;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      questions: Array<{
        __typename: "Question";
        id: string;
        title: string;
        type: QUESTION_TYPE;
        languageID: string;
        question_template: QUESTION_TEMPLATE;
        status: QUESTION_STATUS;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      owner: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    owner: string | null;
  } | null> | null;
  createdAt: string | null;
  updatedAt: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  owner: string | null;
};

export type CreateTribeMutation = {
  __typename: "Tribe";
  id: string;
  name: string;
  symbol: {
    __typename: "File";
    type: FILE_TYPE | null;
    url: string | null;
    size: number | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
  description: string | null;
  country: {
    __typename: "Country";
    id: string;
    name: string;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
  localization: Array<{
    __typename: "GeoPosition";
    lat: number;
    long: number;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  tribes: Array<{
    __typename: "Tribe";
    id: string;
    name: string;
    symbol: {
      __typename: "File";
      type: FILE_TYPE | null;
      url: string | null;
      size: number | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null;
    description: string | null;
    country: {
      __typename: "Country";
      id: string;
      name: string;
      createdAt: string | null;
      updatedAt: string | null;
    } | null;
    localization: Array<{
      __typename: "GeoPosition";
      lat: number;
      long: number;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    tribes: Array<{
      __typename: "Tribe";
      id: string;
      name: string;
      symbol: {
        __typename: "File";
        type: FILE_TYPE | null;
        url: string | null;
        size: number | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null;
      description: string | null;
      country: {
        __typename: "Country";
        id: string;
        name: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null;
      localization: Array<{
        __typename: "GeoPosition";
        lat: number;
        long: number;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      tribes: Array<{
        __typename: "Tribe";
        id: string;
        name: string;
        description: string | null;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
      } | null> | null;
      users: Array<{
        __typename: "TribeUser";
        id: string;
        tribeId: string | null;
        userId: string | null;
        tribeName: string | null;
        userName: string | null;
        role: TRIBE_ROLE;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      customs: Array<{
        __typename: "Custom";
        id: string;
        tribeID: string;
        type: CUSTOM_TYPE | null;
        title: string;
        description: string | null;
        status: CUSTOM_STATUS | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      proverbs: Array<{
        __typename: "Proverb";
        id: string;
        tribeID: string;
        title: string;
        meaning: string;
        content: string;
        track: string | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      songs: Array<{
        __typename: "Song";
        id: string;
        tribeID: string;
        title: string;
        lyric: string;
        songs: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      names: Array<{
        __typename: "Name";
        id: string;
        tribeID: string;
        name: string;
        gender: string;
        signification: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      languages: Array<{
        __typename: "Language";
        id: string;
        tribeID: string;
        name: string;
        description: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      legends: Array<{
        __typename: "Legend";
        id: string;
        name: string;
        surname: string;
        birthdate: string;
        picture: string;
        tribeIds: Array<string> | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
    } | null> | null;
    users: Array<{
      __typename: "TribeUser";
      id: string;
      tribeId: string | null;
      userId: string | null;
      tribeName: string | null;
      userName: string | null;
      role: TRIBE_ROLE;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    customs: Array<{
      __typename: "Custom";
      id: string;
      tribeID: string;
      type: CUSTOM_TYPE | null;
      title: string;
      description: string | null;
      status: CUSTOM_STATUS | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    proverbs: Array<{
      __typename: "Proverb";
      id: string;
      tribeID: string;
      title: string;
      meaning: string;
      content: string;
      track: string | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    songs: Array<{
      __typename: "Song";
      id: string;
      tribeID: string;
      title: string;
      lyric: string;
      songs: string;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    names: Array<{
      __typename: "Name";
      id: string;
      tribeID: string;
      name: string;
      gender: string;
      signification: string;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    languages: Array<{
      __typename: "Language";
      id: string;
      tribeID: string;
      name: string;
      description: string;
      questions: Array<{
        __typename: "Question";
        id: string;
        title: string;
        type: QUESTION_TYPE;
        languageID: string;
        question_template: QUESTION_TEMPLATE;
        status: QUESTION_STATUS;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null> | null;
      alphabets: Array<{
        __typename: "Alphabet";
        id: string;
        languageID: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      dictionaries: Array<{
        __typename: "Dictionary";
        id: string;
        languageID: string;
        name: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      sentences: Array<{
        __typename: "Sentence";
        id: string;
        languageID: string;
        languageName: string | null;
        title: string;
        translations: string | null;
        track: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    legends: Array<{
      __typename: "Legend";
      id: string;
      name: string;
      surname: string;
      birthdate: string;
      picture: string;
      tribeIds: Array<string> | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    createdAt: string | null;
    updatedAt: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
  } | null> | null;
  users: Array<{
    __typename: "TribeUser";
    id: string;
    tribeId: string | null;
    userId: string | null;
    tribeName: string | null;
    userName: string | null;
    role: TRIBE_ROLE;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  customs: Array<{
    __typename: "Custom";
    id: string;
    tribeID: string;
    type: CUSTOM_TYPE | null;
    title: string;
    description: string | null;
    status: CUSTOM_STATUS | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  proverbs: Array<{
    __typename: "Proverb";
    id: string;
    tribeID: string;
    title: string;
    meaning: string;
    content: string;
    track: string | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  songs: Array<{
    __typename: "Song";
    id: string;
    tribeID: string;
    title: string;
    lyric: string;
    songs: string;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  names: Array<{
    __typename: "Name";
    id: string;
    tribeID: string;
    name: string;
    gender: string;
    signification: string;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  languages: Array<{
    __typename: "Language";
    id: string;
    tribeID: string;
    name: string;
    description: string;
    questions: Array<{
      __typename: "Question";
      id: string;
      title: string;
      type: QUESTION_TYPE;
      asset: {
        __typename: "File";
        type: FILE_TYPE | null;
        url: string | null;
        size: number | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null;
      languageID: string;
      question_template: QUESTION_TEMPLATE;
      answers: Array<{
        __typename: "Answer";
        id: string;
        status: ANSWER_STATUS | null;
        type: QUESTION_TYPE;
        title: string;
        vote: number | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null>;
      status: QUESTION_STATUS;
      user: {
        __typename: "User";
        id: string;
        firstName: string | null;
        lastName: string | null;
        avatar: string | null;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null;
      createdAt: string | null;
      updatedAt: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      owner: string | null;
    } | null> | null;
    alphabets: Array<{
      __typename: "Alphabet";
      id: string;
      languageID: string;
      letters: Array<{
        __typename: "Letter";
        id: string;
        symbol: string;
        order: number;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    dictionaries: Array<{
      __typename: "Dictionary";
      id: string;
      languageID: string;
      name: string;
      words: Array<{
        __typename: "Word";
        id: string;
        title: string;
        meaning: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    sentences: Array<{
      __typename: "Sentence";
      id: string;
      languageID: string;
      languageName: string | null;
      title: string;
      translations: string | null;
      track: string;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  legends: Array<{
    __typename: "Legend";
    id: string;
    name: string;
    surname: string;
    birthdate: string;
    picture: string;
    tribeIds: Array<string> | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  createdAt: string | null;
  updatedAt: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
};

export type UpdateTribeMutation = {
  __typename: "Tribe";
  id: string;
  name: string;
  symbol: {
    __typename: "File";
    type: FILE_TYPE | null;
    url: string | null;
    size: number | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
  description: string | null;
  country: {
    __typename: "Country";
    id: string;
    name: string;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
  localization: Array<{
    __typename: "GeoPosition";
    lat: number;
    long: number;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  tribes: Array<{
    __typename: "Tribe";
    id: string;
    name: string;
    symbol: {
      __typename: "File";
      type: FILE_TYPE | null;
      url: string | null;
      size: number | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null;
    description: string | null;
    country: {
      __typename: "Country";
      id: string;
      name: string;
      createdAt: string | null;
      updatedAt: string | null;
    } | null;
    localization: Array<{
      __typename: "GeoPosition";
      lat: number;
      long: number;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    tribes: Array<{
      __typename: "Tribe";
      id: string;
      name: string;
      symbol: {
        __typename: "File";
        type: FILE_TYPE | null;
        url: string | null;
        size: number | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null;
      description: string | null;
      country: {
        __typename: "Country";
        id: string;
        name: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null;
      localization: Array<{
        __typename: "GeoPosition";
        lat: number;
        long: number;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      tribes: Array<{
        __typename: "Tribe";
        id: string;
        name: string;
        description: string | null;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
      } | null> | null;
      users: Array<{
        __typename: "TribeUser";
        id: string;
        tribeId: string | null;
        userId: string | null;
        tribeName: string | null;
        userName: string | null;
        role: TRIBE_ROLE;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      customs: Array<{
        __typename: "Custom";
        id: string;
        tribeID: string;
        type: CUSTOM_TYPE | null;
        title: string;
        description: string | null;
        status: CUSTOM_STATUS | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      proverbs: Array<{
        __typename: "Proverb";
        id: string;
        tribeID: string;
        title: string;
        meaning: string;
        content: string;
        track: string | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      songs: Array<{
        __typename: "Song";
        id: string;
        tribeID: string;
        title: string;
        lyric: string;
        songs: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      names: Array<{
        __typename: "Name";
        id: string;
        tribeID: string;
        name: string;
        gender: string;
        signification: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      languages: Array<{
        __typename: "Language";
        id: string;
        tribeID: string;
        name: string;
        description: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      legends: Array<{
        __typename: "Legend";
        id: string;
        name: string;
        surname: string;
        birthdate: string;
        picture: string;
        tribeIds: Array<string> | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
    } | null> | null;
    users: Array<{
      __typename: "TribeUser";
      id: string;
      tribeId: string | null;
      userId: string | null;
      tribeName: string | null;
      userName: string | null;
      role: TRIBE_ROLE;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    customs: Array<{
      __typename: "Custom";
      id: string;
      tribeID: string;
      type: CUSTOM_TYPE | null;
      title: string;
      description: string | null;
      status: CUSTOM_STATUS | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    proverbs: Array<{
      __typename: "Proverb";
      id: string;
      tribeID: string;
      title: string;
      meaning: string;
      content: string;
      track: string | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    songs: Array<{
      __typename: "Song";
      id: string;
      tribeID: string;
      title: string;
      lyric: string;
      songs: string;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    names: Array<{
      __typename: "Name";
      id: string;
      tribeID: string;
      name: string;
      gender: string;
      signification: string;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    languages: Array<{
      __typename: "Language";
      id: string;
      tribeID: string;
      name: string;
      description: string;
      questions: Array<{
        __typename: "Question";
        id: string;
        title: string;
        type: QUESTION_TYPE;
        languageID: string;
        question_template: QUESTION_TEMPLATE;
        status: QUESTION_STATUS;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null> | null;
      alphabets: Array<{
        __typename: "Alphabet";
        id: string;
        languageID: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      dictionaries: Array<{
        __typename: "Dictionary";
        id: string;
        languageID: string;
        name: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      sentences: Array<{
        __typename: "Sentence";
        id: string;
        languageID: string;
        languageName: string | null;
        title: string;
        translations: string | null;
        track: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    legends: Array<{
      __typename: "Legend";
      id: string;
      name: string;
      surname: string;
      birthdate: string;
      picture: string;
      tribeIds: Array<string> | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    createdAt: string | null;
    updatedAt: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
  } | null> | null;
  users: Array<{
    __typename: "TribeUser";
    id: string;
    tribeId: string | null;
    userId: string | null;
    tribeName: string | null;
    userName: string | null;
    role: TRIBE_ROLE;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  customs: Array<{
    __typename: "Custom";
    id: string;
    tribeID: string;
    type: CUSTOM_TYPE | null;
    title: string;
    description: string | null;
    status: CUSTOM_STATUS | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  proverbs: Array<{
    __typename: "Proverb";
    id: string;
    tribeID: string;
    title: string;
    meaning: string;
    content: string;
    track: string | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  songs: Array<{
    __typename: "Song";
    id: string;
    tribeID: string;
    title: string;
    lyric: string;
    songs: string;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  names: Array<{
    __typename: "Name";
    id: string;
    tribeID: string;
    name: string;
    gender: string;
    signification: string;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  languages: Array<{
    __typename: "Language";
    id: string;
    tribeID: string;
    name: string;
    description: string;
    questions: Array<{
      __typename: "Question";
      id: string;
      title: string;
      type: QUESTION_TYPE;
      asset: {
        __typename: "File";
        type: FILE_TYPE | null;
        url: string | null;
        size: number | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null;
      languageID: string;
      question_template: QUESTION_TEMPLATE;
      answers: Array<{
        __typename: "Answer";
        id: string;
        status: ANSWER_STATUS | null;
        type: QUESTION_TYPE;
        title: string;
        vote: number | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null>;
      status: QUESTION_STATUS;
      user: {
        __typename: "User";
        id: string;
        firstName: string | null;
        lastName: string | null;
        avatar: string | null;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null;
      createdAt: string | null;
      updatedAt: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      owner: string | null;
    } | null> | null;
    alphabets: Array<{
      __typename: "Alphabet";
      id: string;
      languageID: string;
      letters: Array<{
        __typename: "Letter";
        id: string;
        symbol: string;
        order: number;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    dictionaries: Array<{
      __typename: "Dictionary";
      id: string;
      languageID: string;
      name: string;
      words: Array<{
        __typename: "Word";
        id: string;
        title: string;
        meaning: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    sentences: Array<{
      __typename: "Sentence";
      id: string;
      languageID: string;
      languageName: string | null;
      title: string;
      translations: string | null;
      track: string;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  legends: Array<{
    __typename: "Legend";
    id: string;
    name: string;
    surname: string;
    birthdate: string;
    picture: string;
    tribeIds: Array<string> | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  createdAt: string | null;
  updatedAt: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
};

export type DeleteTribeMutation = {
  __typename: "Tribe";
  id: string;
  name: string;
  symbol: {
    __typename: "File";
    type: FILE_TYPE | null;
    url: string | null;
    size: number | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
  description: string | null;
  country: {
    __typename: "Country";
    id: string;
    name: string;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
  localization: Array<{
    __typename: "GeoPosition";
    lat: number;
    long: number;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  tribes: Array<{
    __typename: "Tribe";
    id: string;
    name: string;
    symbol: {
      __typename: "File";
      type: FILE_TYPE | null;
      url: string | null;
      size: number | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null;
    description: string | null;
    country: {
      __typename: "Country";
      id: string;
      name: string;
      createdAt: string | null;
      updatedAt: string | null;
    } | null;
    localization: Array<{
      __typename: "GeoPosition";
      lat: number;
      long: number;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    tribes: Array<{
      __typename: "Tribe";
      id: string;
      name: string;
      symbol: {
        __typename: "File";
        type: FILE_TYPE | null;
        url: string | null;
        size: number | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null;
      description: string | null;
      country: {
        __typename: "Country";
        id: string;
        name: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null;
      localization: Array<{
        __typename: "GeoPosition";
        lat: number;
        long: number;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      tribes: Array<{
        __typename: "Tribe";
        id: string;
        name: string;
        description: string | null;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
      } | null> | null;
      users: Array<{
        __typename: "TribeUser";
        id: string;
        tribeId: string | null;
        userId: string | null;
        tribeName: string | null;
        userName: string | null;
        role: TRIBE_ROLE;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      customs: Array<{
        __typename: "Custom";
        id: string;
        tribeID: string;
        type: CUSTOM_TYPE | null;
        title: string;
        description: string | null;
        status: CUSTOM_STATUS | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      proverbs: Array<{
        __typename: "Proverb";
        id: string;
        tribeID: string;
        title: string;
        meaning: string;
        content: string;
        track: string | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      songs: Array<{
        __typename: "Song";
        id: string;
        tribeID: string;
        title: string;
        lyric: string;
        songs: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      names: Array<{
        __typename: "Name";
        id: string;
        tribeID: string;
        name: string;
        gender: string;
        signification: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      languages: Array<{
        __typename: "Language";
        id: string;
        tribeID: string;
        name: string;
        description: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      legends: Array<{
        __typename: "Legend";
        id: string;
        name: string;
        surname: string;
        birthdate: string;
        picture: string;
        tribeIds: Array<string> | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
    } | null> | null;
    users: Array<{
      __typename: "TribeUser";
      id: string;
      tribeId: string | null;
      userId: string | null;
      tribeName: string | null;
      userName: string | null;
      role: TRIBE_ROLE;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    customs: Array<{
      __typename: "Custom";
      id: string;
      tribeID: string;
      type: CUSTOM_TYPE | null;
      title: string;
      description: string | null;
      status: CUSTOM_STATUS | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    proverbs: Array<{
      __typename: "Proverb";
      id: string;
      tribeID: string;
      title: string;
      meaning: string;
      content: string;
      track: string | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    songs: Array<{
      __typename: "Song";
      id: string;
      tribeID: string;
      title: string;
      lyric: string;
      songs: string;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    names: Array<{
      __typename: "Name";
      id: string;
      tribeID: string;
      name: string;
      gender: string;
      signification: string;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    languages: Array<{
      __typename: "Language";
      id: string;
      tribeID: string;
      name: string;
      description: string;
      questions: Array<{
        __typename: "Question";
        id: string;
        title: string;
        type: QUESTION_TYPE;
        languageID: string;
        question_template: QUESTION_TEMPLATE;
        status: QUESTION_STATUS;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null> | null;
      alphabets: Array<{
        __typename: "Alphabet";
        id: string;
        languageID: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      dictionaries: Array<{
        __typename: "Dictionary";
        id: string;
        languageID: string;
        name: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      sentences: Array<{
        __typename: "Sentence";
        id: string;
        languageID: string;
        languageName: string | null;
        title: string;
        translations: string | null;
        track: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    legends: Array<{
      __typename: "Legend";
      id: string;
      name: string;
      surname: string;
      birthdate: string;
      picture: string;
      tribeIds: Array<string> | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    createdAt: string | null;
    updatedAt: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
  } | null> | null;
  users: Array<{
    __typename: "TribeUser";
    id: string;
    tribeId: string | null;
    userId: string | null;
    tribeName: string | null;
    userName: string | null;
    role: TRIBE_ROLE;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  customs: Array<{
    __typename: "Custom";
    id: string;
    tribeID: string;
    type: CUSTOM_TYPE | null;
    title: string;
    description: string | null;
    status: CUSTOM_STATUS | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  proverbs: Array<{
    __typename: "Proverb";
    id: string;
    tribeID: string;
    title: string;
    meaning: string;
    content: string;
    track: string | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  songs: Array<{
    __typename: "Song";
    id: string;
    tribeID: string;
    title: string;
    lyric: string;
    songs: string;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  names: Array<{
    __typename: "Name";
    id: string;
    tribeID: string;
    name: string;
    gender: string;
    signification: string;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  languages: Array<{
    __typename: "Language";
    id: string;
    tribeID: string;
    name: string;
    description: string;
    questions: Array<{
      __typename: "Question";
      id: string;
      title: string;
      type: QUESTION_TYPE;
      asset: {
        __typename: "File";
        type: FILE_TYPE | null;
        url: string | null;
        size: number | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null;
      languageID: string;
      question_template: QUESTION_TEMPLATE;
      answers: Array<{
        __typename: "Answer";
        id: string;
        status: ANSWER_STATUS | null;
        type: QUESTION_TYPE;
        title: string;
        vote: number | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null>;
      status: QUESTION_STATUS;
      user: {
        __typename: "User";
        id: string;
        firstName: string | null;
        lastName: string | null;
        avatar: string | null;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null;
      createdAt: string | null;
      updatedAt: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      owner: string | null;
    } | null> | null;
    alphabets: Array<{
      __typename: "Alphabet";
      id: string;
      languageID: string;
      letters: Array<{
        __typename: "Letter";
        id: string;
        symbol: string;
        order: number;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    dictionaries: Array<{
      __typename: "Dictionary";
      id: string;
      languageID: string;
      name: string;
      words: Array<{
        __typename: "Word";
        id: string;
        title: string;
        meaning: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    sentences: Array<{
      __typename: "Sentence";
      id: string;
      languageID: string;
      languageName: string | null;
      title: string;
      translations: string | null;
      track: string;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  legends: Array<{
    __typename: "Legend";
    id: string;
    name: string;
    surname: string;
    birthdate: string;
    picture: string;
    tribeIds: Array<string> | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  createdAt: string | null;
  updatedAt: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
};

export type CreateQuestionMutation = {
  __typename: "Question";
  id: string;
  title: string;
  type: QUESTION_TYPE;
  asset: {
    __typename: "File";
    type: FILE_TYPE | null;
    url: string | null;
    size: number | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
  languageID: string;
  question_template: QUESTION_TEMPLATE;
  answers: Array<{
    __typename: "Answer";
    id: string;
    status: ANSWER_STATUS | null;
    type: QUESTION_TYPE;
    title: string;
    vote: number | null;
    user: {
      __typename: "User";
      id: string;
      firstName: string | null;
      lastName: string | null;
      avatar: string | null;
      suggestions: Array<{
        __typename: "Suggestion";
        id: string;
        title: string;
        description: string;
        status: SUGGESTION_STATUS | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      tribes: Array<{
        __typename: "TribeUser";
        id: string;
        tribeId: string | null;
        userId: string | null;
        tribeName: string | null;
        userName: string | null;
        role: TRIBE_ROLE;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      questions: Array<{
        __typename: "Question";
        id: string;
        title: string;
        type: QUESTION_TYPE;
        languageID: string;
        question_template: QUESTION_TEMPLATE;
        status: QUESTION_STATUS;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      owner: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null>;
  status: QUESTION_STATUS;
  user: {
    __typename: "User";
    id: string;
    firstName: string | null;
    lastName: string | null;
    avatar: string | null;
    suggestions: Array<{
      __typename: "Suggestion";
      id: string;
      title: string;
      description: string;
      status: SUGGESTION_STATUS | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    tribes: Array<{
      __typename: "TribeUser";
      id: string;
      tribeId: string | null;
      userId: string | null;
      tribeName: string | null;
      userName: string | null;
      role: TRIBE_ROLE;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    questions: Array<{
      __typename: "Question";
      id: string;
      title: string;
      type: QUESTION_TYPE;
      asset: {
        __typename: "File";
        type: FILE_TYPE | null;
        url: string | null;
        size: number | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null;
      languageID: string;
      question_template: QUESTION_TEMPLATE;
      answers: Array<{
        __typename: "Answer";
        id: string;
        status: ANSWER_STATUS | null;
        type: QUESTION_TYPE;
        title: string;
        vote: number | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null>;
      status: QUESTION_STATUS;
      user: {
        __typename: "User";
        id: string;
        firstName: string | null;
        lastName: string | null;
        avatar: string | null;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null;
      createdAt: string | null;
      updatedAt: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      owner: string | null;
    } | null> | null;
    createdAt: string | null;
    updatedAt: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    owner: string | null;
  } | null;
  createdAt: string | null;
  updatedAt: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  owner: string | null;
};

export type UpdateQuestionMutation = {
  __typename: "Question";
  id: string;
  title: string;
  type: QUESTION_TYPE;
  asset: {
    __typename: "File";
    type: FILE_TYPE | null;
    url: string | null;
    size: number | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
  languageID: string;
  question_template: QUESTION_TEMPLATE;
  answers: Array<{
    __typename: "Answer";
    id: string;
    status: ANSWER_STATUS | null;
    type: QUESTION_TYPE;
    title: string;
    vote: number | null;
    user: {
      __typename: "User";
      id: string;
      firstName: string | null;
      lastName: string | null;
      avatar: string | null;
      suggestions: Array<{
        __typename: "Suggestion";
        id: string;
        title: string;
        description: string;
        status: SUGGESTION_STATUS | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      tribes: Array<{
        __typename: "TribeUser";
        id: string;
        tribeId: string | null;
        userId: string | null;
        tribeName: string | null;
        userName: string | null;
        role: TRIBE_ROLE;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      questions: Array<{
        __typename: "Question";
        id: string;
        title: string;
        type: QUESTION_TYPE;
        languageID: string;
        question_template: QUESTION_TEMPLATE;
        status: QUESTION_STATUS;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      owner: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null>;
  status: QUESTION_STATUS;
  user: {
    __typename: "User";
    id: string;
    firstName: string | null;
    lastName: string | null;
    avatar: string | null;
    suggestions: Array<{
      __typename: "Suggestion";
      id: string;
      title: string;
      description: string;
      status: SUGGESTION_STATUS | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    tribes: Array<{
      __typename: "TribeUser";
      id: string;
      tribeId: string | null;
      userId: string | null;
      tribeName: string | null;
      userName: string | null;
      role: TRIBE_ROLE;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    questions: Array<{
      __typename: "Question";
      id: string;
      title: string;
      type: QUESTION_TYPE;
      asset: {
        __typename: "File";
        type: FILE_TYPE | null;
        url: string | null;
        size: number | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null;
      languageID: string;
      question_template: QUESTION_TEMPLATE;
      answers: Array<{
        __typename: "Answer";
        id: string;
        status: ANSWER_STATUS | null;
        type: QUESTION_TYPE;
        title: string;
        vote: number | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null>;
      status: QUESTION_STATUS;
      user: {
        __typename: "User";
        id: string;
        firstName: string | null;
        lastName: string | null;
        avatar: string | null;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null;
      createdAt: string | null;
      updatedAt: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      owner: string | null;
    } | null> | null;
    createdAt: string | null;
    updatedAt: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    owner: string | null;
  } | null;
  createdAt: string | null;
  updatedAt: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  owner: string | null;
};

export type DeleteQuestionMutation = {
  __typename: "Question";
  id: string;
  title: string;
  type: QUESTION_TYPE;
  asset: {
    __typename: "File";
    type: FILE_TYPE | null;
    url: string | null;
    size: number | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
  languageID: string;
  question_template: QUESTION_TEMPLATE;
  answers: Array<{
    __typename: "Answer";
    id: string;
    status: ANSWER_STATUS | null;
    type: QUESTION_TYPE;
    title: string;
    vote: number | null;
    user: {
      __typename: "User";
      id: string;
      firstName: string | null;
      lastName: string | null;
      avatar: string | null;
      suggestions: Array<{
        __typename: "Suggestion";
        id: string;
        title: string;
        description: string;
        status: SUGGESTION_STATUS | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      tribes: Array<{
        __typename: "TribeUser";
        id: string;
        tribeId: string | null;
        userId: string | null;
        tribeName: string | null;
        userName: string | null;
        role: TRIBE_ROLE;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      questions: Array<{
        __typename: "Question";
        id: string;
        title: string;
        type: QUESTION_TYPE;
        languageID: string;
        question_template: QUESTION_TEMPLATE;
        status: QUESTION_STATUS;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      owner: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null>;
  status: QUESTION_STATUS;
  user: {
    __typename: "User";
    id: string;
    firstName: string | null;
    lastName: string | null;
    avatar: string | null;
    suggestions: Array<{
      __typename: "Suggestion";
      id: string;
      title: string;
      description: string;
      status: SUGGESTION_STATUS | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    tribes: Array<{
      __typename: "TribeUser";
      id: string;
      tribeId: string | null;
      userId: string | null;
      tribeName: string | null;
      userName: string | null;
      role: TRIBE_ROLE;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    questions: Array<{
      __typename: "Question";
      id: string;
      title: string;
      type: QUESTION_TYPE;
      asset: {
        __typename: "File";
        type: FILE_TYPE | null;
        url: string | null;
        size: number | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null;
      languageID: string;
      question_template: QUESTION_TEMPLATE;
      answers: Array<{
        __typename: "Answer";
        id: string;
        status: ANSWER_STATUS | null;
        type: QUESTION_TYPE;
        title: string;
        vote: number | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null>;
      status: QUESTION_STATUS;
      user: {
        __typename: "User";
        id: string;
        firstName: string | null;
        lastName: string | null;
        avatar: string | null;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null;
      createdAt: string | null;
      updatedAt: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      owner: string | null;
    } | null> | null;
    createdAt: string | null;
    updatedAt: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    owner: string | null;
  } | null;
  createdAt: string | null;
  updatedAt: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  owner: string | null;
};

export type SyncUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    firstName: string | null;
    lastName: string | null;
    avatar: string | null;
    suggestions: Array<{
      __typename: "Suggestion";
      id: string;
      title: string;
      description: string;
      status: SUGGESTION_STATUS | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    tribes: Array<{
      __typename: "TribeUser";
      id: string;
      tribeId: string | null;
      userId: string | null;
      tribeName: string | null;
      userName: string | null;
      role: TRIBE_ROLE;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    questions: Array<{
      __typename: "Question";
      id: string;
      title: string;
      type: QUESTION_TYPE;
      asset: {
        __typename: "File";
        type: FILE_TYPE | null;
        url: string | null;
        size: number | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null;
      languageID: string;
      question_template: QUESTION_TEMPLATE;
      answers: Array<{
        __typename: "Answer";
        id: string;
        status: ANSWER_STATUS | null;
        type: QUESTION_TYPE;
        title: string;
        vote: number | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null>;
      status: QUESTION_STATUS;
      user: {
        __typename: "User";
        id: string;
        firstName: string | null;
        lastName: string | null;
        avatar: string | null;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null;
      createdAt: string | null;
      updatedAt: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      owner: string | null;
    } | null> | null;
    createdAt: string | null;
    updatedAt: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    owner: string | null;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  firstName: string | null;
  lastName: string | null;
  avatar: string | null;
  suggestions: Array<{
    __typename: "Suggestion";
    id: string;
    title: string;
    description: string;
    status: SUGGESTION_STATUS | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  tribes: Array<{
    __typename: "TribeUser";
    id: string;
    tribeId: string | null;
    userId: string | null;
    tribeName: string | null;
    userName: string | null;
    role: TRIBE_ROLE;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  questions: Array<{
    __typename: "Question";
    id: string;
    title: string;
    type: QUESTION_TYPE;
    asset: {
      __typename: "File";
      type: FILE_TYPE | null;
      url: string | null;
      size: number | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null;
    languageID: string;
    question_template: QUESTION_TEMPLATE;
    answers: Array<{
      __typename: "Answer";
      id: string;
      status: ANSWER_STATUS | null;
      type: QUESTION_TYPE;
      title: string;
      vote: number | null;
      user: {
        __typename: "User";
        id: string;
        firstName: string | null;
        lastName: string | null;
        avatar: string | null;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null>;
    status: QUESTION_STATUS;
    user: {
      __typename: "User";
      id: string;
      firstName: string | null;
      lastName: string | null;
      avatar: string | null;
      suggestions: Array<{
        __typename: "Suggestion";
        id: string;
        title: string;
        description: string;
        status: SUGGESTION_STATUS | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      tribes: Array<{
        __typename: "TribeUser";
        id: string;
        tribeId: string | null;
        userId: string | null;
        tribeName: string | null;
        userName: string | null;
        role: TRIBE_ROLE;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      questions: Array<{
        __typename: "Question";
        id: string;
        title: string;
        type: QUESTION_TYPE;
        languageID: string;
        question_template: QUESTION_TEMPLATE;
        status: QUESTION_STATUS;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      owner: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    owner: string | null;
  } | null> | null;
  createdAt: string | null;
  updatedAt: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  owner: string | null;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    firstName: string | null;
    lastName: string | null;
    avatar: string | null;
    suggestions: Array<{
      __typename: "Suggestion";
      id: string;
      title: string;
      description: string;
      status: SUGGESTION_STATUS | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    tribes: Array<{
      __typename: "TribeUser";
      id: string;
      tribeId: string | null;
      userId: string | null;
      tribeName: string | null;
      userName: string | null;
      role: TRIBE_ROLE;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    questions: Array<{
      __typename: "Question";
      id: string;
      title: string;
      type: QUESTION_TYPE;
      asset: {
        __typename: "File";
        type: FILE_TYPE | null;
        url: string | null;
        size: number | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null;
      languageID: string;
      question_template: QUESTION_TEMPLATE;
      answers: Array<{
        __typename: "Answer";
        id: string;
        status: ANSWER_STATUS | null;
        type: QUESTION_TYPE;
        title: string;
        vote: number | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null>;
      status: QUESTION_STATUS;
      user: {
        __typename: "User";
        id: string;
        firstName: string | null;
        lastName: string | null;
        avatar: string | null;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null;
      createdAt: string | null;
      updatedAt: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      owner: string | null;
    } | null> | null;
    createdAt: string | null;
    updatedAt: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    owner: string | null;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type SyncTribesQuery = {
  __typename: "ModelTribeConnection";
  items: Array<{
    __typename: "Tribe";
    id: string;
    name: string;
    symbol: {
      __typename: "File";
      type: FILE_TYPE | null;
      url: string | null;
      size: number | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null;
    description: string | null;
    country: {
      __typename: "Country";
      id: string;
      name: string;
      createdAt: string | null;
      updatedAt: string | null;
    } | null;
    localization: Array<{
      __typename: "GeoPosition";
      lat: number;
      long: number;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    tribes: Array<{
      __typename: "Tribe";
      id: string;
      name: string;
      symbol: {
        __typename: "File";
        type: FILE_TYPE | null;
        url: string | null;
        size: number | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null;
      description: string | null;
      country: {
        __typename: "Country";
        id: string;
        name: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null;
      localization: Array<{
        __typename: "GeoPosition";
        lat: number;
        long: number;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      tribes: Array<{
        __typename: "Tribe";
        id: string;
        name: string;
        description: string | null;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
      } | null> | null;
      users: Array<{
        __typename: "TribeUser";
        id: string;
        tribeId: string | null;
        userId: string | null;
        tribeName: string | null;
        userName: string | null;
        role: TRIBE_ROLE;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      customs: Array<{
        __typename: "Custom";
        id: string;
        tribeID: string;
        type: CUSTOM_TYPE | null;
        title: string;
        description: string | null;
        status: CUSTOM_STATUS | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      proverbs: Array<{
        __typename: "Proverb";
        id: string;
        tribeID: string;
        title: string;
        meaning: string;
        content: string;
        track: string | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      songs: Array<{
        __typename: "Song";
        id: string;
        tribeID: string;
        title: string;
        lyric: string;
        songs: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      names: Array<{
        __typename: "Name";
        id: string;
        tribeID: string;
        name: string;
        gender: string;
        signification: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      languages: Array<{
        __typename: "Language";
        id: string;
        tribeID: string;
        name: string;
        description: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      legends: Array<{
        __typename: "Legend";
        id: string;
        name: string;
        surname: string;
        birthdate: string;
        picture: string;
        tribeIds: Array<string> | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
    } | null> | null;
    users: Array<{
      __typename: "TribeUser";
      id: string;
      tribeId: string | null;
      userId: string | null;
      tribeName: string | null;
      userName: string | null;
      role: TRIBE_ROLE;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    customs: Array<{
      __typename: "Custom";
      id: string;
      tribeID: string;
      type: CUSTOM_TYPE | null;
      title: string;
      description: string | null;
      status: CUSTOM_STATUS | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    proverbs: Array<{
      __typename: "Proverb";
      id: string;
      tribeID: string;
      title: string;
      meaning: string;
      content: string;
      track: string | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    songs: Array<{
      __typename: "Song";
      id: string;
      tribeID: string;
      title: string;
      lyric: string;
      songs: string;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    names: Array<{
      __typename: "Name";
      id: string;
      tribeID: string;
      name: string;
      gender: string;
      signification: string;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    languages: Array<{
      __typename: "Language";
      id: string;
      tribeID: string;
      name: string;
      description: string;
      questions: Array<{
        __typename: "Question";
        id: string;
        title: string;
        type: QUESTION_TYPE;
        languageID: string;
        question_template: QUESTION_TEMPLATE;
        status: QUESTION_STATUS;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null> | null;
      alphabets: Array<{
        __typename: "Alphabet";
        id: string;
        languageID: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      dictionaries: Array<{
        __typename: "Dictionary";
        id: string;
        languageID: string;
        name: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      sentences: Array<{
        __typename: "Sentence";
        id: string;
        languageID: string;
        languageName: string | null;
        title: string;
        translations: string | null;
        track: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    legends: Array<{
      __typename: "Legend";
      id: string;
      name: string;
      surname: string;
      birthdate: string;
      picture: string;
      tribeIds: Array<string> | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    createdAt: string | null;
    updatedAt: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type GetTribeQuery = {
  __typename: "Tribe";
  id: string;
  name: string;
  symbol: {
    __typename: "File";
    type: FILE_TYPE | null;
    url: string | null;
    size: number | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
  description: string | null;
  country: {
    __typename: "Country";
    id: string;
    name: string;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
  localization: Array<{
    __typename: "GeoPosition";
    lat: number;
    long: number;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  tribes: Array<{
    __typename: "Tribe";
    id: string;
    name: string;
    symbol: {
      __typename: "File";
      type: FILE_TYPE | null;
      url: string | null;
      size: number | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null;
    description: string | null;
    country: {
      __typename: "Country";
      id: string;
      name: string;
      createdAt: string | null;
      updatedAt: string | null;
    } | null;
    localization: Array<{
      __typename: "GeoPosition";
      lat: number;
      long: number;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    tribes: Array<{
      __typename: "Tribe";
      id: string;
      name: string;
      symbol: {
        __typename: "File";
        type: FILE_TYPE | null;
        url: string | null;
        size: number | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null;
      description: string | null;
      country: {
        __typename: "Country";
        id: string;
        name: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null;
      localization: Array<{
        __typename: "GeoPosition";
        lat: number;
        long: number;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      tribes: Array<{
        __typename: "Tribe";
        id: string;
        name: string;
        description: string | null;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
      } | null> | null;
      users: Array<{
        __typename: "TribeUser";
        id: string;
        tribeId: string | null;
        userId: string | null;
        tribeName: string | null;
        userName: string | null;
        role: TRIBE_ROLE;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      customs: Array<{
        __typename: "Custom";
        id: string;
        tribeID: string;
        type: CUSTOM_TYPE | null;
        title: string;
        description: string | null;
        status: CUSTOM_STATUS | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      proverbs: Array<{
        __typename: "Proverb";
        id: string;
        tribeID: string;
        title: string;
        meaning: string;
        content: string;
        track: string | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      songs: Array<{
        __typename: "Song";
        id: string;
        tribeID: string;
        title: string;
        lyric: string;
        songs: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      names: Array<{
        __typename: "Name";
        id: string;
        tribeID: string;
        name: string;
        gender: string;
        signification: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      languages: Array<{
        __typename: "Language";
        id: string;
        tribeID: string;
        name: string;
        description: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      legends: Array<{
        __typename: "Legend";
        id: string;
        name: string;
        surname: string;
        birthdate: string;
        picture: string;
        tribeIds: Array<string> | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
    } | null> | null;
    users: Array<{
      __typename: "TribeUser";
      id: string;
      tribeId: string | null;
      userId: string | null;
      tribeName: string | null;
      userName: string | null;
      role: TRIBE_ROLE;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    customs: Array<{
      __typename: "Custom";
      id: string;
      tribeID: string;
      type: CUSTOM_TYPE | null;
      title: string;
      description: string | null;
      status: CUSTOM_STATUS | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    proverbs: Array<{
      __typename: "Proverb";
      id: string;
      tribeID: string;
      title: string;
      meaning: string;
      content: string;
      track: string | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    songs: Array<{
      __typename: "Song";
      id: string;
      tribeID: string;
      title: string;
      lyric: string;
      songs: string;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    names: Array<{
      __typename: "Name";
      id: string;
      tribeID: string;
      name: string;
      gender: string;
      signification: string;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    languages: Array<{
      __typename: "Language";
      id: string;
      tribeID: string;
      name: string;
      description: string;
      questions: Array<{
        __typename: "Question";
        id: string;
        title: string;
        type: QUESTION_TYPE;
        languageID: string;
        question_template: QUESTION_TEMPLATE;
        status: QUESTION_STATUS;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null> | null;
      alphabets: Array<{
        __typename: "Alphabet";
        id: string;
        languageID: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      dictionaries: Array<{
        __typename: "Dictionary";
        id: string;
        languageID: string;
        name: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      sentences: Array<{
        __typename: "Sentence";
        id: string;
        languageID: string;
        languageName: string | null;
        title: string;
        translations: string | null;
        track: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    legends: Array<{
      __typename: "Legend";
      id: string;
      name: string;
      surname: string;
      birthdate: string;
      picture: string;
      tribeIds: Array<string> | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    createdAt: string | null;
    updatedAt: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
  } | null> | null;
  users: Array<{
    __typename: "TribeUser";
    id: string;
    tribeId: string | null;
    userId: string | null;
    tribeName: string | null;
    userName: string | null;
    role: TRIBE_ROLE;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  customs: Array<{
    __typename: "Custom";
    id: string;
    tribeID: string;
    type: CUSTOM_TYPE | null;
    title: string;
    description: string | null;
    status: CUSTOM_STATUS | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  proverbs: Array<{
    __typename: "Proverb";
    id: string;
    tribeID: string;
    title: string;
    meaning: string;
    content: string;
    track: string | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  songs: Array<{
    __typename: "Song";
    id: string;
    tribeID: string;
    title: string;
    lyric: string;
    songs: string;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  names: Array<{
    __typename: "Name";
    id: string;
    tribeID: string;
    name: string;
    gender: string;
    signification: string;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  languages: Array<{
    __typename: "Language";
    id: string;
    tribeID: string;
    name: string;
    description: string;
    questions: Array<{
      __typename: "Question";
      id: string;
      title: string;
      type: QUESTION_TYPE;
      asset: {
        __typename: "File";
        type: FILE_TYPE | null;
        url: string | null;
        size: number | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null;
      languageID: string;
      question_template: QUESTION_TEMPLATE;
      answers: Array<{
        __typename: "Answer";
        id: string;
        status: ANSWER_STATUS | null;
        type: QUESTION_TYPE;
        title: string;
        vote: number | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null>;
      status: QUESTION_STATUS;
      user: {
        __typename: "User";
        id: string;
        firstName: string | null;
        lastName: string | null;
        avatar: string | null;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null;
      createdAt: string | null;
      updatedAt: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      owner: string | null;
    } | null> | null;
    alphabets: Array<{
      __typename: "Alphabet";
      id: string;
      languageID: string;
      letters: Array<{
        __typename: "Letter";
        id: string;
        symbol: string;
        order: number;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    dictionaries: Array<{
      __typename: "Dictionary";
      id: string;
      languageID: string;
      name: string;
      words: Array<{
        __typename: "Word";
        id: string;
        title: string;
        meaning: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    sentences: Array<{
      __typename: "Sentence";
      id: string;
      languageID: string;
      languageName: string | null;
      title: string;
      translations: string | null;
      track: string;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  legends: Array<{
    __typename: "Legend";
    id: string;
    name: string;
    surname: string;
    birthdate: string;
    picture: string;
    tribeIds: Array<string> | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  createdAt: string | null;
  updatedAt: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
};

export type ListTribesQuery = {
  __typename: "ModelTribeConnection";
  items: Array<{
    __typename: "Tribe";
    id: string;
    name: string;
    symbol: {
      __typename: "File";
      type: FILE_TYPE | null;
      url: string | null;
      size: number | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null;
    description: string | null;
    country: {
      __typename: "Country";
      id: string;
      name: string;
      createdAt: string | null;
      updatedAt: string | null;
    } | null;
    localization: Array<{
      __typename: "GeoPosition";
      lat: number;
      long: number;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    tribes: Array<{
      __typename: "Tribe";
      id: string;
      name: string;
      symbol: {
        __typename: "File";
        type: FILE_TYPE | null;
        url: string | null;
        size: number | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null;
      description: string | null;
      country: {
        __typename: "Country";
        id: string;
        name: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null;
      localization: Array<{
        __typename: "GeoPosition";
        lat: number;
        long: number;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      tribes: Array<{
        __typename: "Tribe";
        id: string;
        name: string;
        description: string | null;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
      } | null> | null;
      users: Array<{
        __typename: "TribeUser";
        id: string;
        tribeId: string | null;
        userId: string | null;
        tribeName: string | null;
        userName: string | null;
        role: TRIBE_ROLE;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      customs: Array<{
        __typename: "Custom";
        id: string;
        tribeID: string;
        type: CUSTOM_TYPE | null;
        title: string;
        description: string | null;
        status: CUSTOM_STATUS | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      proverbs: Array<{
        __typename: "Proverb";
        id: string;
        tribeID: string;
        title: string;
        meaning: string;
        content: string;
        track: string | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      songs: Array<{
        __typename: "Song";
        id: string;
        tribeID: string;
        title: string;
        lyric: string;
        songs: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      names: Array<{
        __typename: "Name";
        id: string;
        tribeID: string;
        name: string;
        gender: string;
        signification: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      languages: Array<{
        __typename: "Language";
        id: string;
        tribeID: string;
        name: string;
        description: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      legends: Array<{
        __typename: "Legend";
        id: string;
        name: string;
        surname: string;
        birthdate: string;
        picture: string;
        tribeIds: Array<string> | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
    } | null> | null;
    users: Array<{
      __typename: "TribeUser";
      id: string;
      tribeId: string | null;
      userId: string | null;
      tribeName: string | null;
      userName: string | null;
      role: TRIBE_ROLE;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    customs: Array<{
      __typename: "Custom";
      id: string;
      tribeID: string;
      type: CUSTOM_TYPE | null;
      title: string;
      description: string | null;
      status: CUSTOM_STATUS | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    proverbs: Array<{
      __typename: "Proverb";
      id: string;
      tribeID: string;
      title: string;
      meaning: string;
      content: string;
      track: string | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    songs: Array<{
      __typename: "Song";
      id: string;
      tribeID: string;
      title: string;
      lyric: string;
      songs: string;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    names: Array<{
      __typename: "Name";
      id: string;
      tribeID: string;
      name: string;
      gender: string;
      signification: string;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    languages: Array<{
      __typename: "Language";
      id: string;
      tribeID: string;
      name: string;
      description: string;
      questions: Array<{
        __typename: "Question";
        id: string;
        title: string;
        type: QUESTION_TYPE;
        languageID: string;
        question_template: QUESTION_TEMPLATE;
        status: QUESTION_STATUS;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null> | null;
      alphabets: Array<{
        __typename: "Alphabet";
        id: string;
        languageID: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      dictionaries: Array<{
        __typename: "Dictionary";
        id: string;
        languageID: string;
        name: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      sentences: Array<{
        __typename: "Sentence";
        id: string;
        languageID: string;
        languageName: string | null;
        title: string;
        translations: string | null;
        track: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    legends: Array<{
      __typename: "Legend";
      id: string;
      name: string;
      surname: string;
      birthdate: string;
      picture: string;
      tribeIds: Array<string> | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    createdAt: string | null;
    updatedAt: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type SyncQuestionsQuery = {
  __typename: "ModelQuestionConnection";
  items: Array<{
    __typename: "Question";
    id: string;
    title: string;
    type: QUESTION_TYPE;
    asset: {
      __typename: "File";
      type: FILE_TYPE | null;
      url: string | null;
      size: number | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null;
    languageID: string;
    question_template: QUESTION_TEMPLATE;
    answers: Array<{
      __typename: "Answer";
      id: string;
      status: ANSWER_STATUS | null;
      type: QUESTION_TYPE;
      title: string;
      vote: number | null;
      user: {
        __typename: "User";
        id: string;
        firstName: string | null;
        lastName: string | null;
        avatar: string | null;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null>;
    status: QUESTION_STATUS;
    user: {
      __typename: "User";
      id: string;
      firstName: string | null;
      lastName: string | null;
      avatar: string | null;
      suggestions: Array<{
        __typename: "Suggestion";
        id: string;
        title: string;
        description: string;
        status: SUGGESTION_STATUS | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      tribes: Array<{
        __typename: "TribeUser";
        id: string;
        tribeId: string | null;
        userId: string | null;
        tribeName: string | null;
        userName: string | null;
        role: TRIBE_ROLE;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      questions: Array<{
        __typename: "Question";
        id: string;
        title: string;
        type: QUESTION_TYPE;
        languageID: string;
        question_template: QUESTION_TEMPLATE;
        status: QUESTION_STATUS;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      owner: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    owner: string | null;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type GetQuestionQuery = {
  __typename: "Question";
  id: string;
  title: string;
  type: QUESTION_TYPE;
  asset: {
    __typename: "File";
    type: FILE_TYPE | null;
    url: string | null;
    size: number | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
  languageID: string;
  question_template: QUESTION_TEMPLATE;
  answers: Array<{
    __typename: "Answer";
    id: string;
    status: ANSWER_STATUS | null;
    type: QUESTION_TYPE;
    title: string;
    vote: number | null;
    user: {
      __typename: "User";
      id: string;
      firstName: string | null;
      lastName: string | null;
      avatar: string | null;
      suggestions: Array<{
        __typename: "Suggestion";
        id: string;
        title: string;
        description: string;
        status: SUGGESTION_STATUS | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      tribes: Array<{
        __typename: "TribeUser";
        id: string;
        tribeId: string | null;
        userId: string | null;
        tribeName: string | null;
        userName: string | null;
        role: TRIBE_ROLE;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      questions: Array<{
        __typename: "Question";
        id: string;
        title: string;
        type: QUESTION_TYPE;
        languageID: string;
        question_template: QUESTION_TEMPLATE;
        status: QUESTION_STATUS;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      owner: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null>;
  status: QUESTION_STATUS;
  user: {
    __typename: "User";
    id: string;
    firstName: string | null;
    lastName: string | null;
    avatar: string | null;
    suggestions: Array<{
      __typename: "Suggestion";
      id: string;
      title: string;
      description: string;
      status: SUGGESTION_STATUS | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    tribes: Array<{
      __typename: "TribeUser";
      id: string;
      tribeId: string | null;
      userId: string | null;
      tribeName: string | null;
      userName: string | null;
      role: TRIBE_ROLE;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    questions: Array<{
      __typename: "Question";
      id: string;
      title: string;
      type: QUESTION_TYPE;
      asset: {
        __typename: "File";
        type: FILE_TYPE | null;
        url: string | null;
        size: number | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null;
      languageID: string;
      question_template: QUESTION_TEMPLATE;
      answers: Array<{
        __typename: "Answer";
        id: string;
        status: ANSWER_STATUS | null;
        type: QUESTION_TYPE;
        title: string;
        vote: number | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null>;
      status: QUESTION_STATUS;
      user: {
        __typename: "User";
        id: string;
        firstName: string | null;
        lastName: string | null;
        avatar: string | null;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null;
      createdAt: string | null;
      updatedAt: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      owner: string | null;
    } | null> | null;
    createdAt: string | null;
    updatedAt: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    owner: string | null;
  } | null;
  createdAt: string | null;
  updatedAt: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  owner: string | null;
};

export type ListQuestionsQuery = {
  __typename: "ModelQuestionConnection";
  items: Array<{
    __typename: "Question";
    id: string;
    title: string;
    type: QUESTION_TYPE;
    asset: {
      __typename: "File";
      type: FILE_TYPE | null;
      url: string | null;
      size: number | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null;
    languageID: string;
    question_template: QUESTION_TEMPLATE;
    answers: Array<{
      __typename: "Answer";
      id: string;
      status: ANSWER_STATUS | null;
      type: QUESTION_TYPE;
      title: string;
      vote: number | null;
      user: {
        __typename: "User";
        id: string;
        firstName: string | null;
        lastName: string | null;
        avatar: string | null;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null>;
    status: QUESTION_STATUS;
    user: {
      __typename: "User";
      id: string;
      firstName: string | null;
      lastName: string | null;
      avatar: string | null;
      suggestions: Array<{
        __typename: "Suggestion";
        id: string;
        title: string;
        description: string;
        status: SUGGESTION_STATUS | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      tribes: Array<{
        __typename: "TribeUser";
        id: string;
        tribeId: string | null;
        userId: string | null;
        tribeName: string | null;
        userName: string | null;
        role: TRIBE_ROLE;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      questions: Array<{
        __typename: "Question";
        id: string;
        title: string;
        type: QUESTION_TYPE;
        languageID: string;
        question_template: QUESTION_TEMPLATE;
        status: QUESTION_STATUS;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      owner: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    owner: string | null;
  } | null> | null;
  nextToken: string | null;
  startedAt: number | null;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  firstName: string | null;
  lastName: string | null;
  avatar: string | null;
  suggestions: Array<{
    __typename: "Suggestion";
    id: string;
    title: string;
    description: string;
    status: SUGGESTION_STATUS | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  tribes: Array<{
    __typename: "TribeUser";
    id: string;
    tribeId: string | null;
    userId: string | null;
    tribeName: string | null;
    userName: string | null;
    role: TRIBE_ROLE;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  questions: Array<{
    __typename: "Question";
    id: string;
    title: string;
    type: QUESTION_TYPE;
    asset: {
      __typename: "File";
      type: FILE_TYPE | null;
      url: string | null;
      size: number | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null;
    languageID: string;
    question_template: QUESTION_TEMPLATE;
    answers: Array<{
      __typename: "Answer";
      id: string;
      status: ANSWER_STATUS | null;
      type: QUESTION_TYPE;
      title: string;
      vote: number | null;
      user: {
        __typename: "User";
        id: string;
        firstName: string | null;
        lastName: string | null;
        avatar: string | null;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null>;
    status: QUESTION_STATUS;
    user: {
      __typename: "User";
      id: string;
      firstName: string | null;
      lastName: string | null;
      avatar: string | null;
      suggestions: Array<{
        __typename: "Suggestion";
        id: string;
        title: string;
        description: string;
        status: SUGGESTION_STATUS | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      tribes: Array<{
        __typename: "TribeUser";
        id: string;
        tribeId: string | null;
        userId: string | null;
        tribeName: string | null;
        userName: string | null;
        role: TRIBE_ROLE;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      questions: Array<{
        __typename: "Question";
        id: string;
        title: string;
        type: QUESTION_TYPE;
        languageID: string;
        question_template: QUESTION_TEMPLATE;
        status: QUESTION_STATUS;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      owner: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    owner: string | null;
  } | null> | null;
  createdAt: string | null;
  updatedAt: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  owner: string | null;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  firstName: string | null;
  lastName: string | null;
  avatar: string | null;
  suggestions: Array<{
    __typename: "Suggestion";
    id: string;
    title: string;
    description: string;
    status: SUGGESTION_STATUS | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  tribes: Array<{
    __typename: "TribeUser";
    id: string;
    tribeId: string | null;
    userId: string | null;
    tribeName: string | null;
    userName: string | null;
    role: TRIBE_ROLE;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  questions: Array<{
    __typename: "Question";
    id: string;
    title: string;
    type: QUESTION_TYPE;
    asset: {
      __typename: "File";
      type: FILE_TYPE | null;
      url: string | null;
      size: number | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null;
    languageID: string;
    question_template: QUESTION_TEMPLATE;
    answers: Array<{
      __typename: "Answer";
      id: string;
      status: ANSWER_STATUS | null;
      type: QUESTION_TYPE;
      title: string;
      vote: number | null;
      user: {
        __typename: "User";
        id: string;
        firstName: string | null;
        lastName: string | null;
        avatar: string | null;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null>;
    status: QUESTION_STATUS;
    user: {
      __typename: "User";
      id: string;
      firstName: string | null;
      lastName: string | null;
      avatar: string | null;
      suggestions: Array<{
        __typename: "Suggestion";
        id: string;
        title: string;
        description: string;
        status: SUGGESTION_STATUS | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      tribes: Array<{
        __typename: "TribeUser";
        id: string;
        tribeId: string | null;
        userId: string | null;
        tribeName: string | null;
        userName: string | null;
        role: TRIBE_ROLE;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      questions: Array<{
        __typename: "Question";
        id: string;
        title: string;
        type: QUESTION_TYPE;
        languageID: string;
        question_template: QUESTION_TEMPLATE;
        status: QUESTION_STATUS;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      owner: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    owner: string | null;
  } | null> | null;
  createdAt: string | null;
  updatedAt: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  owner: string | null;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  firstName: string | null;
  lastName: string | null;
  avatar: string | null;
  suggestions: Array<{
    __typename: "Suggestion";
    id: string;
    title: string;
    description: string;
    status: SUGGESTION_STATUS | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  tribes: Array<{
    __typename: "TribeUser";
    id: string;
    tribeId: string | null;
    userId: string | null;
    tribeName: string | null;
    userName: string | null;
    role: TRIBE_ROLE;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  questions: Array<{
    __typename: "Question";
    id: string;
    title: string;
    type: QUESTION_TYPE;
    asset: {
      __typename: "File";
      type: FILE_TYPE | null;
      url: string | null;
      size: number | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null;
    languageID: string;
    question_template: QUESTION_TEMPLATE;
    answers: Array<{
      __typename: "Answer";
      id: string;
      status: ANSWER_STATUS | null;
      type: QUESTION_TYPE;
      title: string;
      vote: number | null;
      user: {
        __typename: "User";
        id: string;
        firstName: string | null;
        lastName: string | null;
        avatar: string | null;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null>;
    status: QUESTION_STATUS;
    user: {
      __typename: "User";
      id: string;
      firstName: string | null;
      lastName: string | null;
      avatar: string | null;
      suggestions: Array<{
        __typename: "Suggestion";
        id: string;
        title: string;
        description: string;
        status: SUGGESTION_STATUS | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      tribes: Array<{
        __typename: "TribeUser";
        id: string;
        tribeId: string | null;
        userId: string | null;
        tribeName: string | null;
        userName: string | null;
        role: TRIBE_ROLE;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      questions: Array<{
        __typename: "Question";
        id: string;
        title: string;
        type: QUESTION_TYPE;
        languageID: string;
        question_template: QUESTION_TEMPLATE;
        status: QUESTION_STATUS;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      owner: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    owner: string | null;
  } | null> | null;
  createdAt: string | null;
  updatedAt: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  owner: string | null;
};

export type OnCreateTribeSubscription = {
  __typename: "Tribe";
  id: string;
  name: string;
  symbol: {
    __typename: "File";
    type: FILE_TYPE | null;
    url: string | null;
    size: number | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
  description: string | null;
  country: {
    __typename: "Country";
    id: string;
    name: string;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
  localization: Array<{
    __typename: "GeoPosition";
    lat: number;
    long: number;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  tribes: Array<{
    __typename: "Tribe";
    id: string;
    name: string;
    symbol: {
      __typename: "File";
      type: FILE_TYPE | null;
      url: string | null;
      size: number | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null;
    description: string | null;
    country: {
      __typename: "Country";
      id: string;
      name: string;
      createdAt: string | null;
      updatedAt: string | null;
    } | null;
    localization: Array<{
      __typename: "GeoPosition";
      lat: number;
      long: number;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    tribes: Array<{
      __typename: "Tribe";
      id: string;
      name: string;
      symbol: {
        __typename: "File";
        type: FILE_TYPE | null;
        url: string | null;
        size: number | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null;
      description: string | null;
      country: {
        __typename: "Country";
        id: string;
        name: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null;
      localization: Array<{
        __typename: "GeoPosition";
        lat: number;
        long: number;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      tribes: Array<{
        __typename: "Tribe";
        id: string;
        name: string;
        description: string | null;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
      } | null> | null;
      users: Array<{
        __typename: "TribeUser";
        id: string;
        tribeId: string | null;
        userId: string | null;
        tribeName: string | null;
        userName: string | null;
        role: TRIBE_ROLE;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      customs: Array<{
        __typename: "Custom";
        id: string;
        tribeID: string;
        type: CUSTOM_TYPE | null;
        title: string;
        description: string | null;
        status: CUSTOM_STATUS | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      proverbs: Array<{
        __typename: "Proverb";
        id: string;
        tribeID: string;
        title: string;
        meaning: string;
        content: string;
        track: string | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      songs: Array<{
        __typename: "Song";
        id: string;
        tribeID: string;
        title: string;
        lyric: string;
        songs: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      names: Array<{
        __typename: "Name";
        id: string;
        tribeID: string;
        name: string;
        gender: string;
        signification: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      languages: Array<{
        __typename: "Language";
        id: string;
        tribeID: string;
        name: string;
        description: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      legends: Array<{
        __typename: "Legend";
        id: string;
        name: string;
        surname: string;
        birthdate: string;
        picture: string;
        tribeIds: Array<string> | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
    } | null> | null;
    users: Array<{
      __typename: "TribeUser";
      id: string;
      tribeId: string | null;
      userId: string | null;
      tribeName: string | null;
      userName: string | null;
      role: TRIBE_ROLE;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    customs: Array<{
      __typename: "Custom";
      id: string;
      tribeID: string;
      type: CUSTOM_TYPE | null;
      title: string;
      description: string | null;
      status: CUSTOM_STATUS | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    proverbs: Array<{
      __typename: "Proverb";
      id: string;
      tribeID: string;
      title: string;
      meaning: string;
      content: string;
      track: string | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    songs: Array<{
      __typename: "Song";
      id: string;
      tribeID: string;
      title: string;
      lyric: string;
      songs: string;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    names: Array<{
      __typename: "Name";
      id: string;
      tribeID: string;
      name: string;
      gender: string;
      signification: string;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    languages: Array<{
      __typename: "Language";
      id: string;
      tribeID: string;
      name: string;
      description: string;
      questions: Array<{
        __typename: "Question";
        id: string;
        title: string;
        type: QUESTION_TYPE;
        languageID: string;
        question_template: QUESTION_TEMPLATE;
        status: QUESTION_STATUS;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null> | null;
      alphabets: Array<{
        __typename: "Alphabet";
        id: string;
        languageID: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      dictionaries: Array<{
        __typename: "Dictionary";
        id: string;
        languageID: string;
        name: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      sentences: Array<{
        __typename: "Sentence";
        id: string;
        languageID: string;
        languageName: string | null;
        title: string;
        translations: string | null;
        track: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    legends: Array<{
      __typename: "Legend";
      id: string;
      name: string;
      surname: string;
      birthdate: string;
      picture: string;
      tribeIds: Array<string> | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    createdAt: string | null;
    updatedAt: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
  } | null> | null;
  users: Array<{
    __typename: "TribeUser";
    id: string;
    tribeId: string | null;
    userId: string | null;
    tribeName: string | null;
    userName: string | null;
    role: TRIBE_ROLE;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  customs: Array<{
    __typename: "Custom";
    id: string;
    tribeID: string;
    type: CUSTOM_TYPE | null;
    title: string;
    description: string | null;
    status: CUSTOM_STATUS | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  proverbs: Array<{
    __typename: "Proverb";
    id: string;
    tribeID: string;
    title: string;
    meaning: string;
    content: string;
    track: string | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  songs: Array<{
    __typename: "Song";
    id: string;
    tribeID: string;
    title: string;
    lyric: string;
    songs: string;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  names: Array<{
    __typename: "Name";
    id: string;
    tribeID: string;
    name: string;
    gender: string;
    signification: string;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  languages: Array<{
    __typename: "Language";
    id: string;
    tribeID: string;
    name: string;
    description: string;
    questions: Array<{
      __typename: "Question";
      id: string;
      title: string;
      type: QUESTION_TYPE;
      asset: {
        __typename: "File";
        type: FILE_TYPE | null;
        url: string | null;
        size: number | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null;
      languageID: string;
      question_template: QUESTION_TEMPLATE;
      answers: Array<{
        __typename: "Answer";
        id: string;
        status: ANSWER_STATUS | null;
        type: QUESTION_TYPE;
        title: string;
        vote: number | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null>;
      status: QUESTION_STATUS;
      user: {
        __typename: "User";
        id: string;
        firstName: string | null;
        lastName: string | null;
        avatar: string | null;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null;
      createdAt: string | null;
      updatedAt: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      owner: string | null;
    } | null> | null;
    alphabets: Array<{
      __typename: "Alphabet";
      id: string;
      languageID: string;
      letters: Array<{
        __typename: "Letter";
        id: string;
        symbol: string;
        order: number;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    dictionaries: Array<{
      __typename: "Dictionary";
      id: string;
      languageID: string;
      name: string;
      words: Array<{
        __typename: "Word";
        id: string;
        title: string;
        meaning: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    sentences: Array<{
      __typename: "Sentence";
      id: string;
      languageID: string;
      languageName: string | null;
      title: string;
      translations: string | null;
      track: string;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  legends: Array<{
    __typename: "Legend";
    id: string;
    name: string;
    surname: string;
    birthdate: string;
    picture: string;
    tribeIds: Array<string> | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  createdAt: string | null;
  updatedAt: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateTribeSubscription = {
  __typename: "Tribe";
  id: string;
  name: string;
  symbol: {
    __typename: "File";
    type: FILE_TYPE | null;
    url: string | null;
    size: number | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
  description: string | null;
  country: {
    __typename: "Country";
    id: string;
    name: string;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
  localization: Array<{
    __typename: "GeoPosition";
    lat: number;
    long: number;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  tribes: Array<{
    __typename: "Tribe";
    id: string;
    name: string;
    symbol: {
      __typename: "File";
      type: FILE_TYPE | null;
      url: string | null;
      size: number | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null;
    description: string | null;
    country: {
      __typename: "Country";
      id: string;
      name: string;
      createdAt: string | null;
      updatedAt: string | null;
    } | null;
    localization: Array<{
      __typename: "GeoPosition";
      lat: number;
      long: number;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    tribes: Array<{
      __typename: "Tribe";
      id: string;
      name: string;
      symbol: {
        __typename: "File";
        type: FILE_TYPE | null;
        url: string | null;
        size: number | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null;
      description: string | null;
      country: {
        __typename: "Country";
        id: string;
        name: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null;
      localization: Array<{
        __typename: "GeoPosition";
        lat: number;
        long: number;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      tribes: Array<{
        __typename: "Tribe";
        id: string;
        name: string;
        description: string | null;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
      } | null> | null;
      users: Array<{
        __typename: "TribeUser";
        id: string;
        tribeId: string | null;
        userId: string | null;
        tribeName: string | null;
        userName: string | null;
        role: TRIBE_ROLE;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      customs: Array<{
        __typename: "Custom";
        id: string;
        tribeID: string;
        type: CUSTOM_TYPE | null;
        title: string;
        description: string | null;
        status: CUSTOM_STATUS | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      proverbs: Array<{
        __typename: "Proverb";
        id: string;
        tribeID: string;
        title: string;
        meaning: string;
        content: string;
        track: string | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      songs: Array<{
        __typename: "Song";
        id: string;
        tribeID: string;
        title: string;
        lyric: string;
        songs: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      names: Array<{
        __typename: "Name";
        id: string;
        tribeID: string;
        name: string;
        gender: string;
        signification: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      languages: Array<{
        __typename: "Language";
        id: string;
        tribeID: string;
        name: string;
        description: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      legends: Array<{
        __typename: "Legend";
        id: string;
        name: string;
        surname: string;
        birthdate: string;
        picture: string;
        tribeIds: Array<string> | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
    } | null> | null;
    users: Array<{
      __typename: "TribeUser";
      id: string;
      tribeId: string | null;
      userId: string | null;
      tribeName: string | null;
      userName: string | null;
      role: TRIBE_ROLE;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    customs: Array<{
      __typename: "Custom";
      id: string;
      tribeID: string;
      type: CUSTOM_TYPE | null;
      title: string;
      description: string | null;
      status: CUSTOM_STATUS | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    proverbs: Array<{
      __typename: "Proverb";
      id: string;
      tribeID: string;
      title: string;
      meaning: string;
      content: string;
      track: string | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    songs: Array<{
      __typename: "Song";
      id: string;
      tribeID: string;
      title: string;
      lyric: string;
      songs: string;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    names: Array<{
      __typename: "Name";
      id: string;
      tribeID: string;
      name: string;
      gender: string;
      signification: string;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    languages: Array<{
      __typename: "Language";
      id: string;
      tribeID: string;
      name: string;
      description: string;
      questions: Array<{
        __typename: "Question";
        id: string;
        title: string;
        type: QUESTION_TYPE;
        languageID: string;
        question_template: QUESTION_TEMPLATE;
        status: QUESTION_STATUS;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null> | null;
      alphabets: Array<{
        __typename: "Alphabet";
        id: string;
        languageID: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      dictionaries: Array<{
        __typename: "Dictionary";
        id: string;
        languageID: string;
        name: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      sentences: Array<{
        __typename: "Sentence";
        id: string;
        languageID: string;
        languageName: string | null;
        title: string;
        translations: string | null;
        track: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    legends: Array<{
      __typename: "Legend";
      id: string;
      name: string;
      surname: string;
      birthdate: string;
      picture: string;
      tribeIds: Array<string> | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    createdAt: string | null;
    updatedAt: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
  } | null> | null;
  users: Array<{
    __typename: "TribeUser";
    id: string;
    tribeId: string | null;
    userId: string | null;
    tribeName: string | null;
    userName: string | null;
    role: TRIBE_ROLE;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  customs: Array<{
    __typename: "Custom";
    id: string;
    tribeID: string;
    type: CUSTOM_TYPE | null;
    title: string;
    description: string | null;
    status: CUSTOM_STATUS | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  proverbs: Array<{
    __typename: "Proverb";
    id: string;
    tribeID: string;
    title: string;
    meaning: string;
    content: string;
    track: string | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  songs: Array<{
    __typename: "Song";
    id: string;
    tribeID: string;
    title: string;
    lyric: string;
    songs: string;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  names: Array<{
    __typename: "Name";
    id: string;
    tribeID: string;
    name: string;
    gender: string;
    signification: string;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  languages: Array<{
    __typename: "Language";
    id: string;
    tribeID: string;
    name: string;
    description: string;
    questions: Array<{
      __typename: "Question";
      id: string;
      title: string;
      type: QUESTION_TYPE;
      asset: {
        __typename: "File";
        type: FILE_TYPE | null;
        url: string | null;
        size: number | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null;
      languageID: string;
      question_template: QUESTION_TEMPLATE;
      answers: Array<{
        __typename: "Answer";
        id: string;
        status: ANSWER_STATUS | null;
        type: QUESTION_TYPE;
        title: string;
        vote: number | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null>;
      status: QUESTION_STATUS;
      user: {
        __typename: "User";
        id: string;
        firstName: string | null;
        lastName: string | null;
        avatar: string | null;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null;
      createdAt: string | null;
      updatedAt: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      owner: string | null;
    } | null> | null;
    alphabets: Array<{
      __typename: "Alphabet";
      id: string;
      languageID: string;
      letters: Array<{
        __typename: "Letter";
        id: string;
        symbol: string;
        order: number;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    dictionaries: Array<{
      __typename: "Dictionary";
      id: string;
      languageID: string;
      name: string;
      words: Array<{
        __typename: "Word";
        id: string;
        title: string;
        meaning: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    sentences: Array<{
      __typename: "Sentence";
      id: string;
      languageID: string;
      languageName: string | null;
      title: string;
      translations: string | null;
      track: string;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  legends: Array<{
    __typename: "Legend";
    id: string;
    name: string;
    surname: string;
    birthdate: string;
    picture: string;
    tribeIds: Array<string> | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  createdAt: string | null;
  updatedAt: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteTribeSubscription = {
  __typename: "Tribe";
  id: string;
  name: string;
  symbol: {
    __typename: "File";
    type: FILE_TYPE | null;
    url: string | null;
    size: number | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
  description: string | null;
  country: {
    __typename: "Country";
    id: string;
    name: string;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
  localization: Array<{
    __typename: "GeoPosition";
    lat: number;
    long: number;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  tribes: Array<{
    __typename: "Tribe";
    id: string;
    name: string;
    symbol: {
      __typename: "File";
      type: FILE_TYPE | null;
      url: string | null;
      size: number | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null;
    description: string | null;
    country: {
      __typename: "Country";
      id: string;
      name: string;
      createdAt: string | null;
      updatedAt: string | null;
    } | null;
    localization: Array<{
      __typename: "GeoPosition";
      lat: number;
      long: number;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    tribes: Array<{
      __typename: "Tribe";
      id: string;
      name: string;
      symbol: {
        __typename: "File";
        type: FILE_TYPE | null;
        url: string | null;
        size: number | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null;
      description: string | null;
      country: {
        __typename: "Country";
        id: string;
        name: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null;
      localization: Array<{
        __typename: "GeoPosition";
        lat: number;
        long: number;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      tribes: Array<{
        __typename: "Tribe";
        id: string;
        name: string;
        description: string | null;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
      } | null> | null;
      users: Array<{
        __typename: "TribeUser";
        id: string;
        tribeId: string | null;
        userId: string | null;
        tribeName: string | null;
        userName: string | null;
        role: TRIBE_ROLE;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      customs: Array<{
        __typename: "Custom";
        id: string;
        tribeID: string;
        type: CUSTOM_TYPE | null;
        title: string;
        description: string | null;
        status: CUSTOM_STATUS | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      proverbs: Array<{
        __typename: "Proverb";
        id: string;
        tribeID: string;
        title: string;
        meaning: string;
        content: string;
        track: string | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      songs: Array<{
        __typename: "Song";
        id: string;
        tribeID: string;
        title: string;
        lyric: string;
        songs: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      names: Array<{
        __typename: "Name";
        id: string;
        tribeID: string;
        name: string;
        gender: string;
        signification: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      languages: Array<{
        __typename: "Language";
        id: string;
        tribeID: string;
        name: string;
        description: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      legends: Array<{
        __typename: "Legend";
        id: string;
        name: string;
        surname: string;
        birthdate: string;
        picture: string;
        tribeIds: Array<string> | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
    } | null> | null;
    users: Array<{
      __typename: "TribeUser";
      id: string;
      tribeId: string | null;
      userId: string | null;
      tribeName: string | null;
      userName: string | null;
      role: TRIBE_ROLE;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    customs: Array<{
      __typename: "Custom";
      id: string;
      tribeID: string;
      type: CUSTOM_TYPE | null;
      title: string;
      description: string | null;
      status: CUSTOM_STATUS | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    proverbs: Array<{
      __typename: "Proverb";
      id: string;
      tribeID: string;
      title: string;
      meaning: string;
      content: string;
      track: string | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    songs: Array<{
      __typename: "Song";
      id: string;
      tribeID: string;
      title: string;
      lyric: string;
      songs: string;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    names: Array<{
      __typename: "Name";
      id: string;
      tribeID: string;
      name: string;
      gender: string;
      signification: string;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    languages: Array<{
      __typename: "Language";
      id: string;
      tribeID: string;
      name: string;
      description: string;
      questions: Array<{
        __typename: "Question";
        id: string;
        title: string;
        type: QUESTION_TYPE;
        languageID: string;
        question_template: QUESTION_TEMPLATE;
        status: QUESTION_STATUS;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null> | null;
      alphabets: Array<{
        __typename: "Alphabet";
        id: string;
        languageID: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      dictionaries: Array<{
        __typename: "Dictionary";
        id: string;
        languageID: string;
        name: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      sentences: Array<{
        __typename: "Sentence";
        id: string;
        languageID: string;
        languageName: string | null;
        title: string;
        translations: string | null;
        track: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    legends: Array<{
      __typename: "Legend";
      id: string;
      name: string;
      surname: string;
      birthdate: string;
      picture: string;
      tribeIds: Array<string> | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    createdAt: string | null;
    updatedAt: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
  } | null> | null;
  users: Array<{
    __typename: "TribeUser";
    id: string;
    tribeId: string | null;
    userId: string | null;
    tribeName: string | null;
    userName: string | null;
    role: TRIBE_ROLE;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  customs: Array<{
    __typename: "Custom";
    id: string;
    tribeID: string;
    type: CUSTOM_TYPE | null;
    title: string;
    description: string | null;
    status: CUSTOM_STATUS | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  proverbs: Array<{
    __typename: "Proverb";
    id: string;
    tribeID: string;
    title: string;
    meaning: string;
    content: string;
    track: string | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  songs: Array<{
    __typename: "Song";
    id: string;
    tribeID: string;
    title: string;
    lyric: string;
    songs: string;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  names: Array<{
    __typename: "Name";
    id: string;
    tribeID: string;
    name: string;
    gender: string;
    signification: string;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  languages: Array<{
    __typename: "Language";
    id: string;
    tribeID: string;
    name: string;
    description: string;
    questions: Array<{
      __typename: "Question";
      id: string;
      title: string;
      type: QUESTION_TYPE;
      asset: {
        __typename: "File";
        type: FILE_TYPE | null;
        url: string | null;
        size: number | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null;
      languageID: string;
      question_template: QUESTION_TEMPLATE;
      answers: Array<{
        __typename: "Answer";
        id: string;
        status: ANSWER_STATUS | null;
        type: QUESTION_TYPE;
        title: string;
        vote: number | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null>;
      status: QUESTION_STATUS;
      user: {
        __typename: "User";
        id: string;
        firstName: string | null;
        lastName: string | null;
        avatar: string | null;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null;
      createdAt: string | null;
      updatedAt: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      owner: string | null;
    } | null> | null;
    alphabets: Array<{
      __typename: "Alphabet";
      id: string;
      languageID: string;
      letters: Array<{
        __typename: "Letter";
        id: string;
        symbol: string;
        order: number;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    dictionaries: Array<{
      __typename: "Dictionary";
      id: string;
      languageID: string;
      name: string;
      words: Array<{
        __typename: "Word";
        id: string;
        title: string;
        meaning: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    sentences: Array<{
      __typename: "Sentence";
      id: string;
      languageID: string;
      languageName: string | null;
      title: string;
      translations: string | null;
      track: string;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  legends: Array<{
    __typename: "Legend";
    id: string;
    name: string;
    surname: string;
    birthdate: string;
    picture: string;
    tribeIds: Array<string> | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null> | null;
  createdAt: string | null;
  updatedAt: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateQuestionSubscription = {
  __typename: "Question";
  id: string;
  title: string;
  type: QUESTION_TYPE;
  asset: {
    __typename: "File";
    type: FILE_TYPE | null;
    url: string | null;
    size: number | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
  languageID: string;
  question_template: QUESTION_TEMPLATE;
  answers: Array<{
    __typename: "Answer";
    id: string;
    status: ANSWER_STATUS | null;
    type: QUESTION_TYPE;
    title: string;
    vote: number | null;
    user: {
      __typename: "User";
      id: string;
      firstName: string | null;
      lastName: string | null;
      avatar: string | null;
      suggestions: Array<{
        __typename: "Suggestion";
        id: string;
        title: string;
        description: string;
        status: SUGGESTION_STATUS | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      tribes: Array<{
        __typename: "TribeUser";
        id: string;
        tribeId: string | null;
        userId: string | null;
        tribeName: string | null;
        userName: string | null;
        role: TRIBE_ROLE;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      questions: Array<{
        __typename: "Question";
        id: string;
        title: string;
        type: QUESTION_TYPE;
        languageID: string;
        question_template: QUESTION_TEMPLATE;
        status: QUESTION_STATUS;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      owner: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null>;
  status: QUESTION_STATUS;
  user: {
    __typename: "User";
    id: string;
    firstName: string | null;
    lastName: string | null;
    avatar: string | null;
    suggestions: Array<{
      __typename: "Suggestion";
      id: string;
      title: string;
      description: string;
      status: SUGGESTION_STATUS | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    tribes: Array<{
      __typename: "TribeUser";
      id: string;
      tribeId: string | null;
      userId: string | null;
      tribeName: string | null;
      userName: string | null;
      role: TRIBE_ROLE;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    questions: Array<{
      __typename: "Question";
      id: string;
      title: string;
      type: QUESTION_TYPE;
      asset: {
        __typename: "File";
        type: FILE_TYPE | null;
        url: string | null;
        size: number | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null;
      languageID: string;
      question_template: QUESTION_TEMPLATE;
      answers: Array<{
        __typename: "Answer";
        id: string;
        status: ANSWER_STATUS | null;
        type: QUESTION_TYPE;
        title: string;
        vote: number | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null>;
      status: QUESTION_STATUS;
      user: {
        __typename: "User";
        id: string;
        firstName: string | null;
        lastName: string | null;
        avatar: string | null;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null;
      createdAt: string | null;
      updatedAt: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      owner: string | null;
    } | null> | null;
    createdAt: string | null;
    updatedAt: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    owner: string | null;
  } | null;
  createdAt: string | null;
  updatedAt: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  owner: string | null;
};

export type OnUpdateQuestionSubscription = {
  __typename: "Question";
  id: string;
  title: string;
  type: QUESTION_TYPE;
  asset: {
    __typename: "File";
    type: FILE_TYPE | null;
    url: string | null;
    size: number | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
  languageID: string;
  question_template: QUESTION_TEMPLATE;
  answers: Array<{
    __typename: "Answer";
    id: string;
    status: ANSWER_STATUS | null;
    type: QUESTION_TYPE;
    title: string;
    vote: number | null;
    user: {
      __typename: "User";
      id: string;
      firstName: string | null;
      lastName: string | null;
      avatar: string | null;
      suggestions: Array<{
        __typename: "Suggestion";
        id: string;
        title: string;
        description: string;
        status: SUGGESTION_STATUS | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      tribes: Array<{
        __typename: "TribeUser";
        id: string;
        tribeId: string | null;
        userId: string | null;
        tribeName: string | null;
        userName: string | null;
        role: TRIBE_ROLE;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      questions: Array<{
        __typename: "Question";
        id: string;
        title: string;
        type: QUESTION_TYPE;
        languageID: string;
        question_template: QUESTION_TEMPLATE;
        status: QUESTION_STATUS;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      owner: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null>;
  status: QUESTION_STATUS;
  user: {
    __typename: "User";
    id: string;
    firstName: string | null;
    lastName: string | null;
    avatar: string | null;
    suggestions: Array<{
      __typename: "Suggestion";
      id: string;
      title: string;
      description: string;
      status: SUGGESTION_STATUS | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    tribes: Array<{
      __typename: "TribeUser";
      id: string;
      tribeId: string | null;
      userId: string | null;
      tribeName: string | null;
      userName: string | null;
      role: TRIBE_ROLE;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    questions: Array<{
      __typename: "Question";
      id: string;
      title: string;
      type: QUESTION_TYPE;
      asset: {
        __typename: "File";
        type: FILE_TYPE | null;
        url: string | null;
        size: number | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null;
      languageID: string;
      question_template: QUESTION_TEMPLATE;
      answers: Array<{
        __typename: "Answer";
        id: string;
        status: ANSWER_STATUS | null;
        type: QUESTION_TYPE;
        title: string;
        vote: number | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null>;
      status: QUESTION_STATUS;
      user: {
        __typename: "User";
        id: string;
        firstName: string | null;
        lastName: string | null;
        avatar: string | null;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null;
      createdAt: string | null;
      updatedAt: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      owner: string | null;
    } | null> | null;
    createdAt: string | null;
    updatedAt: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    owner: string | null;
  } | null;
  createdAt: string | null;
  updatedAt: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  owner: string | null;
};

export type OnDeleteQuestionSubscription = {
  __typename: "Question";
  id: string;
  title: string;
  type: QUESTION_TYPE;
  asset: {
    __typename: "File";
    type: FILE_TYPE | null;
    url: string | null;
    size: number | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
  languageID: string;
  question_template: QUESTION_TEMPLATE;
  answers: Array<{
    __typename: "Answer";
    id: string;
    status: ANSWER_STATUS | null;
    type: QUESTION_TYPE;
    title: string;
    vote: number | null;
    user: {
      __typename: "User";
      id: string;
      firstName: string | null;
      lastName: string | null;
      avatar: string | null;
      suggestions: Array<{
        __typename: "Suggestion";
        id: string;
        title: string;
        description: string;
        status: SUGGESTION_STATUS | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      tribes: Array<{
        __typename: "TribeUser";
        id: string;
        tribeId: string | null;
        userId: string | null;
        tribeName: string | null;
        userName: string | null;
        role: TRIBE_ROLE;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      questions: Array<{
        __typename: "Question";
        id: string;
        title: string;
        type: QUESTION_TYPE;
        languageID: string;
        question_template: QUESTION_TEMPLATE;
        status: QUESTION_STATUS;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null> | null;
      createdAt: string | null;
      updatedAt: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      owner: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null>;
  status: QUESTION_STATUS;
  user: {
    __typename: "User";
    id: string;
    firstName: string | null;
    lastName: string | null;
    avatar: string | null;
    suggestions: Array<{
      __typename: "Suggestion";
      id: string;
      title: string;
      description: string;
      status: SUGGESTION_STATUS | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    tribes: Array<{
      __typename: "TribeUser";
      id: string;
      tribeId: string | null;
      userId: string | null;
      tribeName: string | null;
      userName: string | null;
      role: TRIBE_ROLE;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    questions: Array<{
      __typename: "Question";
      id: string;
      title: string;
      type: QUESTION_TYPE;
      asset: {
        __typename: "File";
        type: FILE_TYPE | null;
        url: string | null;
        size: number | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null;
      languageID: string;
      question_template: QUESTION_TEMPLATE;
      answers: Array<{
        __typename: "Answer";
        id: string;
        status: ANSWER_STATUS | null;
        type: QUESTION_TYPE;
        title: string;
        vote: number | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null>;
      status: QUESTION_STATUS;
      user: {
        __typename: "User";
        id: string;
        firstName: string | null;
        lastName: string | null;
        avatar: string | null;
        createdAt: string | null;
        updatedAt: string | null;
        _version: number;
        _deleted: boolean | null;
        _lastChangedAt: number;
        owner: string | null;
      } | null;
      createdAt: string | null;
      updatedAt: string | null;
      _version: number;
      _deleted: boolean | null;
      _lastChangedAt: number;
      owner: string | null;
    } | null> | null;
    createdAt: string | null;
    updatedAt: string | null;
    _version: number;
    _deleted: boolean | null;
    _lastChangedAt: number;
    owner: string | null;
  } | null;
  createdAt: string | null;
  updatedAt: string | null;
  _version: number;
  _deleted: boolean | null;
  _lastChangedAt: number;
  owner: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
          __typename
          id
          firstName
          lastName
          avatar
          suggestions {
            __typename
            id
            title
            description
            status
            createdAt
            updatedAt
          }
          tribes {
            __typename
            id
            tribeId
            userId
            tribeName
            userName
            role
            createdAt
            updatedAt
          }
          questions {
            __typename
            id
            title
            type
            asset {
              __typename
              type
              url
              size
              createdAt
              updatedAt
            }
            languageID
            question_template
            answers {
              __typename
              id
              status
              type
              title
              vote
              user {
                __typename
                id
                firstName
                lastName
                avatar
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
            }
            status
            user {
              __typename
              id
              firstName
              lastName
              avatar
              suggestions {
                __typename
                id
                title
                description
                status
                createdAt
                updatedAt
              }
              tribes {
                __typename
                id
                tribeId
                userId
                tribeName
                userName
                role
                createdAt
                updatedAt
              }
              questions {
                __typename
                id
                title
                type
                languageID
                question_template
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(
    input: UpdateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
        updateUser(input: $input, condition: $condition) {
          __typename
          id
          firstName
          lastName
          avatar
          suggestions {
            __typename
            id
            title
            description
            status
            createdAt
            updatedAt
          }
          tribes {
            __typename
            id
            tribeId
            userId
            tribeName
            userName
            role
            createdAt
            updatedAt
          }
          questions {
            __typename
            id
            title
            type
            asset {
              __typename
              type
              url
              size
              createdAt
              updatedAt
            }
            languageID
            question_template
            answers {
              __typename
              id
              status
              type
              title
              vote
              user {
                __typename
                id
                firstName
                lastName
                avatar
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
            }
            status
            user {
              __typename
              id
              firstName
              lastName
              avatar
              suggestions {
                __typename
                id
                title
                description
                status
                createdAt
                updatedAt
              }
              tribes {
                __typename
                id
                tribeId
                userId
                tribeName
                userName
                role
                createdAt
                updatedAt
              }
              questions {
                __typename
                id
                title
                type
                languageID
                question_template
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(
    input: DeleteUserInput,
    condition?: ModelUserConditionInput
  ): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
        deleteUser(input: $input, condition: $condition) {
          __typename
          id
          firstName
          lastName
          avatar
          suggestions {
            __typename
            id
            title
            description
            status
            createdAt
            updatedAt
          }
          tribes {
            __typename
            id
            tribeId
            userId
            tribeName
            userName
            role
            createdAt
            updatedAt
          }
          questions {
            __typename
            id
            title
            type
            asset {
              __typename
              type
              url
              size
              createdAt
              updatedAt
            }
            languageID
            question_template
            answers {
              __typename
              id
              status
              type
              title
              vote
              user {
                __typename
                id
                firstName
                lastName
                avatar
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
            }
            status
            user {
              __typename
              id
              firstName
              lastName
              avatar
              suggestions {
                __typename
                id
                title
                description
                status
                createdAt
                updatedAt
              }
              tribes {
                __typename
                id
                tribeId
                userId
                tribeName
                userName
                role
                createdAt
                updatedAt
              }
              questions {
                __typename
                id
                title
                type
                languageID
                question_template
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateTribe(
    input: CreateTribeInput,
    condition?: ModelTribeConditionInput
  ): Promise<CreateTribeMutation> {
    const statement = `mutation CreateTribe($input: CreateTribeInput!, $condition: ModelTribeConditionInput) {
        createTribe(input: $input, condition: $condition) {
          __typename
          id
          name
          symbol {
            __typename
            type
            url
            size
            createdAt
            updatedAt
          }
          description
          country {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          localization {
            __typename
            lat
            long
            createdAt
            updatedAt
          }
          tribes {
            __typename
            id
            name
            symbol {
              __typename
              type
              url
              size
              createdAt
              updatedAt
            }
            description
            country {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            localization {
              __typename
              lat
              long
              createdAt
              updatedAt
            }
            tribes {
              __typename
              id
              name
              symbol {
                __typename
                type
                url
                size
                createdAt
                updatedAt
              }
              description
              country {
                __typename
                id
                name
                createdAt
                updatedAt
              }
              localization {
                __typename
                lat
                long
                createdAt
                updatedAt
              }
              tribes {
                __typename
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              users {
                __typename
                id
                tribeId
                userId
                tribeName
                userName
                role
                createdAt
                updatedAt
              }
              customs {
                __typename
                id
                tribeID
                type
                title
                description
                status
                createdAt
                updatedAt
              }
              proverbs {
                __typename
                id
                tribeID
                title
                meaning
                content
                track
                createdAt
                updatedAt
              }
              songs {
                __typename
                id
                tribeID
                title
                lyric
                songs
                createdAt
                updatedAt
              }
              names {
                __typename
                id
                tribeID
                name
                gender
                signification
                createdAt
                updatedAt
              }
              languages {
                __typename
                id
                tribeID
                name
                description
                createdAt
                updatedAt
              }
              legends {
                __typename
                id
                name
                surname
                birthdate
                picture
                tribeIds
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            users {
              __typename
              id
              tribeId
              userId
              tribeName
              userName
              role
              createdAt
              updatedAt
            }
            customs {
              __typename
              id
              tribeID
              type
              title
              description
              status
              createdAt
              updatedAt
            }
            proverbs {
              __typename
              id
              tribeID
              title
              meaning
              content
              track
              createdAt
              updatedAt
            }
            songs {
              __typename
              id
              tribeID
              title
              lyric
              songs
              createdAt
              updatedAt
            }
            names {
              __typename
              id
              tribeID
              name
              gender
              signification
              createdAt
              updatedAt
            }
            languages {
              __typename
              id
              tribeID
              name
              description
              questions {
                __typename
                id
                title
                type
                languageID
                question_template
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              alphabets {
                __typename
                id
                languageID
                createdAt
                updatedAt
              }
              dictionaries {
                __typename
                id
                languageID
                name
                createdAt
                updatedAt
              }
              sentences {
                __typename
                id
                languageID
                languageName
                title
                translations
                track
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            legends {
              __typename
              id
              name
              surname
              birthdate
              picture
              tribeIds
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          users {
            __typename
            id
            tribeId
            userId
            tribeName
            userName
            role
            createdAt
            updatedAt
          }
          customs {
            __typename
            id
            tribeID
            type
            title
            description
            status
            createdAt
            updatedAt
          }
          proverbs {
            __typename
            id
            tribeID
            title
            meaning
            content
            track
            createdAt
            updatedAt
          }
          songs {
            __typename
            id
            tribeID
            title
            lyric
            songs
            createdAt
            updatedAt
          }
          names {
            __typename
            id
            tribeID
            name
            gender
            signification
            createdAt
            updatedAt
          }
          languages {
            __typename
            id
            tribeID
            name
            description
            questions {
              __typename
              id
              title
              type
              asset {
                __typename
                type
                url
                size
                createdAt
                updatedAt
              }
              languageID
              question_template
              answers {
                __typename
                id
                status
                type
                title
                vote
                createdAt
                updatedAt
              }
              status
              user {
                __typename
                id
                firstName
                lastName
                avatar
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            alphabets {
              __typename
              id
              languageID
              letters {
                __typename
                id
                symbol
                order
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            dictionaries {
              __typename
              id
              languageID
              name
              words {
                __typename
                id
                title
                meaning
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            sentences {
              __typename
              id
              languageID
              languageName
              title
              translations
              track
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          legends {
            __typename
            id
            name
            surname
            birthdate
            picture
            tribeIds
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTribeMutation>response.data.createTribe;
  }
  async UpdateTribe(
    input: UpdateTribeInput,
    condition?: ModelTribeConditionInput
  ): Promise<UpdateTribeMutation> {
    const statement = `mutation UpdateTribe($input: UpdateTribeInput!, $condition: ModelTribeConditionInput) {
        updateTribe(input: $input, condition: $condition) {
          __typename
          id
          name
          symbol {
            __typename
            type
            url
            size
            createdAt
            updatedAt
          }
          description
          country {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          localization {
            __typename
            lat
            long
            createdAt
            updatedAt
          }
          tribes {
            __typename
            id
            name
            symbol {
              __typename
              type
              url
              size
              createdAt
              updatedAt
            }
            description
            country {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            localization {
              __typename
              lat
              long
              createdAt
              updatedAt
            }
            tribes {
              __typename
              id
              name
              symbol {
                __typename
                type
                url
                size
                createdAt
                updatedAt
              }
              description
              country {
                __typename
                id
                name
                createdAt
                updatedAt
              }
              localization {
                __typename
                lat
                long
                createdAt
                updatedAt
              }
              tribes {
                __typename
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              users {
                __typename
                id
                tribeId
                userId
                tribeName
                userName
                role
                createdAt
                updatedAt
              }
              customs {
                __typename
                id
                tribeID
                type
                title
                description
                status
                createdAt
                updatedAt
              }
              proverbs {
                __typename
                id
                tribeID
                title
                meaning
                content
                track
                createdAt
                updatedAt
              }
              songs {
                __typename
                id
                tribeID
                title
                lyric
                songs
                createdAt
                updatedAt
              }
              names {
                __typename
                id
                tribeID
                name
                gender
                signification
                createdAt
                updatedAt
              }
              languages {
                __typename
                id
                tribeID
                name
                description
                createdAt
                updatedAt
              }
              legends {
                __typename
                id
                name
                surname
                birthdate
                picture
                tribeIds
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            users {
              __typename
              id
              tribeId
              userId
              tribeName
              userName
              role
              createdAt
              updatedAt
            }
            customs {
              __typename
              id
              tribeID
              type
              title
              description
              status
              createdAt
              updatedAt
            }
            proverbs {
              __typename
              id
              tribeID
              title
              meaning
              content
              track
              createdAt
              updatedAt
            }
            songs {
              __typename
              id
              tribeID
              title
              lyric
              songs
              createdAt
              updatedAt
            }
            names {
              __typename
              id
              tribeID
              name
              gender
              signification
              createdAt
              updatedAt
            }
            languages {
              __typename
              id
              tribeID
              name
              description
              questions {
                __typename
                id
                title
                type
                languageID
                question_template
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              alphabets {
                __typename
                id
                languageID
                createdAt
                updatedAt
              }
              dictionaries {
                __typename
                id
                languageID
                name
                createdAt
                updatedAt
              }
              sentences {
                __typename
                id
                languageID
                languageName
                title
                translations
                track
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            legends {
              __typename
              id
              name
              surname
              birthdate
              picture
              tribeIds
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          users {
            __typename
            id
            tribeId
            userId
            tribeName
            userName
            role
            createdAt
            updatedAt
          }
          customs {
            __typename
            id
            tribeID
            type
            title
            description
            status
            createdAt
            updatedAt
          }
          proverbs {
            __typename
            id
            tribeID
            title
            meaning
            content
            track
            createdAt
            updatedAt
          }
          songs {
            __typename
            id
            tribeID
            title
            lyric
            songs
            createdAt
            updatedAt
          }
          names {
            __typename
            id
            tribeID
            name
            gender
            signification
            createdAt
            updatedAt
          }
          languages {
            __typename
            id
            tribeID
            name
            description
            questions {
              __typename
              id
              title
              type
              asset {
                __typename
                type
                url
                size
                createdAt
                updatedAt
              }
              languageID
              question_template
              answers {
                __typename
                id
                status
                type
                title
                vote
                createdAt
                updatedAt
              }
              status
              user {
                __typename
                id
                firstName
                lastName
                avatar
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            alphabets {
              __typename
              id
              languageID
              letters {
                __typename
                id
                symbol
                order
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            dictionaries {
              __typename
              id
              languageID
              name
              words {
                __typename
                id
                title
                meaning
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            sentences {
              __typename
              id
              languageID
              languageName
              title
              translations
              track
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          legends {
            __typename
            id
            name
            surname
            birthdate
            picture
            tribeIds
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTribeMutation>response.data.updateTribe;
  }
  async DeleteTribe(
    input: DeleteTribeInput,
    condition?: ModelTribeConditionInput
  ): Promise<DeleteTribeMutation> {
    const statement = `mutation DeleteTribe($input: DeleteTribeInput!, $condition: ModelTribeConditionInput) {
        deleteTribe(input: $input, condition: $condition) {
          __typename
          id
          name
          symbol {
            __typename
            type
            url
            size
            createdAt
            updatedAt
          }
          description
          country {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          localization {
            __typename
            lat
            long
            createdAt
            updatedAt
          }
          tribes {
            __typename
            id
            name
            symbol {
              __typename
              type
              url
              size
              createdAt
              updatedAt
            }
            description
            country {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            localization {
              __typename
              lat
              long
              createdAt
              updatedAt
            }
            tribes {
              __typename
              id
              name
              symbol {
                __typename
                type
                url
                size
                createdAt
                updatedAt
              }
              description
              country {
                __typename
                id
                name
                createdAt
                updatedAt
              }
              localization {
                __typename
                lat
                long
                createdAt
                updatedAt
              }
              tribes {
                __typename
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              users {
                __typename
                id
                tribeId
                userId
                tribeName
                userName
                role
                createdAt
                updatedAt
              }
              customs {
                __typename
                id
                tribeID
                type
                title
                description
                status
                createdAt
                updatedAt
              }
              proverbs {
                __typename
                id
                tribeID
                title
                meaning
                content
                track
                createdAt
                updatedAt
              }
              songs {
                __typename
                id
                tribeID
                title
                lyric
                songs
                createdAt
                updatedAt
              }
              names {
                __typename
                id
                tribeID
                name
                gender
                signification
                createdAt
                updatedAt
              }
              languages {
                __typename
                id
                tribeID
                name
                description
                createdAt
                updatedAt
              }
              legends {
                __typename
                id
                name
                surname
                birthdate
                picture
                tribeIds
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            users {
              __typename
              id
              tribeId
              userId
              tribeName
              userName
              role
              createdAt
              updatedAt
            }
            customs {
              __typename
              id
              tribeID
              type
              title
              description
              status
              createdAt
              updatedAt
            }
            proverbs {
              __typename
              id
              tribeID
              title
              meaning
              content
              track
              createdAt
              updatedAt
            }
            songs {
              __typename
              id
              tribeID
              title
              lyric
              songs
              createdAt
              updatedAt
            }
            names {
              __typename
              id
              tribeID
              name
              gender
              signification
              createdAt
              updatedAt
            }
            languages {
              __typename
              id
              tribeID
              name
              description
              questions {
                __typename
                id
                title
                type
                languageID
                question_template
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              alphabets {
                __typename
                id
                languageID
                createdAt
                updatedAt
              }
              dictionaries {
                __typename
                id
                languageID
                name
                createdAt
                updatedAt
              }
              sentences {
                __typename
                id
                languageID
                languageName
                title
                translations
                track
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            legends {
              __typename
              id
              name
              surname
              birthdate
              picture
              tribeIds
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          users {
            __typename
            id
            tribeId
            userId
            tribeName
            userName
            role
            createdAt
            updatedAt
          }
          customs {
            __typename
            id
            tribeID
            type
            title
            description
            status
            createdAt
            updatedAt
          }
          proverbs {
            __typename
            id
            tribeID
            title
            meaning
            content
            track
            createdAt
            updatedAt
          }
          songs {
            __typename
            id
            tribeID
            title
            lyric
            songs
            createdAt
            updatedAt
          }
          names {
            __typename
            id
            tribeID
            name
            gender
            signification
            createdAt
            updatedAt
          }
          languages {
            __typename
            id
            tribeID
            name
            description
            questions {
              __typename
              id
              title
              type
              asset {
                __typename
                type
                url
                size
                createdAt
                updatedAt
              }
              languageID
              question_template
              answers {
                __typename
                id
                status
                type
                title
                vote
                createdAt
                updatedAt
              }
              status
              user {
                __typename
                id
                firstName
                lastName
                avatar
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            alphabets {
              __typename
              id
              languageID
              letters {
                __typename
                id
                symbol
                order
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            dictionaries {
              __typename
              id
              languageID
              name
              words {
                __typename
                id
                title
                meaning
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            sentences {
              __typename
              id
              languageID
              languageName
              title
              translations
              track
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          legends {
            __typename
            id
            name
            surname
            birthdate
            picture
            tribeIds
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTribeMutation>response.data.deleteTribe;
  }
  async CreateQuestion(
    input: CreateQuestionInput,
    condition?: ModelQuestionConditionInput
  ): Promise<CreateQuestionMutation> {
    const statement = `mutation CreateQuestion($input: CreateQuestionInput!, $condition: ModelQuestionConditionInput) {
        createQuestion(input: $input, condition: $condition) {
          __typename
          id
          title
          type
          asset {
            __typename
            type
            url
            size
            createdAt
            updatedAt
          }
          languageID
          question_template
          answers {
            __typename
            id
            status
            type
            title
            vote
            user {
              __typename
              id
              firstName
              lastName
              avatar
              suggestions {
                __typename
                id
                title
                description
                status
                createdAt
                updatedAt
              }
              tribes {
                __typename
                id
                tribeId
                userId
                tribeName
                userName
                role
                createdAt
                updatedAt
              }
              questions {
                __typename
                id
                title
                type
                languageID
                question_template
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
          }
          status
          user {
            __typename
            id
            firstName
            lastName
            avatar
            suggestions {
              __typename
              id
              title
              description
              status
              createdAt
              updatedAt
            }
            tribes {
              __typename
              id
              tribeId
              userId
              tribeName
              userName
              role
              createdAt
              updatedAt
            }
            questions {
              __typename
              id
              title
              type
              asset {
                __typename
                type
                url
                size
                createdAt
                updatedAt
              }
              languageID
              question_template
              answers {
                __typename
                id
                status
                type
                title
                vote
                createdAt
                updatedAt
              }
              status
              user {
                __typename
                id
                firstName
                lastName
                avatar
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateQuestionMutation>response.data.createQuestion;
  }
  async UpdateQuestion(
    input: UpdateQuestionInput,
    condition?: ModelQuestionConditionInput
  ): Promise<UpdateQuestionMutation> {
    const statement = `mutation UpdateQuestion($input: UpdateQuestionInput!, $condition: ModelQuestionConditionInput) {
        updateQuestion(input: $input, condition: $condition) {
          __typename
          id
          title
          type
          asset {
            __typename
            type
            url
            size
            createdAt
            updatedAt
          }
          languageID
          question_template
          answers {
            __typename
            id
            status
            type
            title
            vote
            user {
              __typename
              id
              firstName
              lastName
              avatar
              suggestions {
                __typename
                id
                title
                description
                status
                createdAt
                updatedAt
              }
              tribes {
                __typename
                id
                tribeId
                userId
                tribeName
                userName
                role
                createdAt
                updatedAt
              }
              questions {
                __typename
                id
                title
                type
                languageID
                question_template
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
          }
          status
          user {
            __typename
            id
            firstName
            lastName
            avatar
            suggestions {
              __typename
              id
              title
              description
              status
              createdAt
              updatedAt
            }
            tribes {
              __typename
              id
              tribeId
              userId
              tribeName
              userName
              role
              createdAt
              updatedAt
            }
            questions {
              __typename
              id
              title
              type
              asset {
                __typename
                type
                url
                size
                createdAt
                updatedAt
              }
              languageID
              question_template
              answers {
                __typename
                id
                status
                type
                title
                vote
                createdAt
                updatedAt
              }
              status
              user {
                __typename
                id
                firstName
                lastName
                avatar
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateQuestionMutation>response.data.updateQuestion;
  }
  async DeleteQuestion(
    input: DeleteQuestionInput,
    condition?: ModelQuestionConditionInput
  ): Promise<DeleteQuestionMutation> {
    const statement = `mutation DeleteQuestion($input: DeleteQuestionInput!, $condition: ModelQuestionConditionInput) {
        deleteQuestion(input: $input, condition: $condition) {
          __typename
          id
          title
          type
          asset {
            __typename
            type
            url
            size
            createdAt
            updatedAt
          }
          languageID
          question_template
          answers {
            __typename
            id
            status
            type
            title
            vote
            user {
              __typename
              id
              firstName
              lastName
              avatar
              suggestions {
                __typename
                id
                title
                description
                status
                createdAt
                updatedAt
              }
              tribes {
                __typename
                id
                tribeId
                userId
                tribeName
                userName
                role
                createdAt
                updatedAt
              }
              questions {
                __typename
                id
                title
                type
                languageID
                question_template
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
          }
          status
          user {
            __typename
            id
            firstName
            lastName
            avatar
            suggestions {
              __typename
              id
              title
              description
              status
              createdAt
              updatedAt
            }
            tribes {
              __typename
              id
              tribeId
              userId
              tribeName
              userName
              role
              createdAt
              updatedAt
            }
            questions {
              __typename
              id
              title
              type
              asset {
                __typename
                type
                url
                size
                createdAt
                updatedAt
              }
              languageID
              question_template
              answers {
                __typename
                id
                status
                type
                title
                vote
                createdAt
                updatedAt
              }
              status
              user {
                __typename
                id
                firstName
                lastName
                avatar
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteQuestionMutation>response.data.deleteQuestion;
  }
  async SyncUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncUsersQuery> {
    const statement = `query SyncUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncUsers(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            firstName
            lastName
            avatar
            suggestions {
              __typename
              id
              title
              description
              status
              createdAt
              updatedAt
            }
            tribes {
              __typename
              id
              tribeId
              userId
              tribeName
              userName
              role
              createdAt
              updatedAt
            }
            questions {
              __typename
              id
              title
              type
              asset {
                __typename
                type
                url
                size
                createdAt
                updatedAt
              }
              languageID
              question_template
              answers {
                __typename
                id
                status
                type
                title
                vote
                createdAt
                updatedAt
              }
              status
              user {
                __typename
                id
                firstName
                lastName
                avatar
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncUsersQuery>response.data.syncUsers;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          firstName
          lastName
          avatar
          suggestions {
            __typename
            id
            title
            description
            status
            createdAt
            updatedAt
          }
          tribes {
            __typename
            id
            tribeId
            userId
            tribeName
            userName
            role
            createdAt
            updatedAt
          }
          questions {
            __typename
            id
            title
            type
            asset {
              __typename
              type
              url
              size
              createdAt
              updatedAt
            }
            languageID
            question_template
            answers {
              __typename
              id
              status
              type
              title
              vote
              user {
                __typename
                id
                firstName
                lastName
                avatar
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
            }
            status
            user {
              __typename
              id
              firstName
              lastName
              avatar
              suggestions {
                __typename
                id
                title
                description
                status
                createdAt
                updatedAt
              }
              tribes {
                __typename
                id
                tribeId
                userId
                tribeName
                userName
                role
                createdAt
                updatedAt
              }
              questions {
                __typename
                id
                title
                type
                languageID
                question_template
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            firstName
            lastName
            avatar
            suggestions {
              __typename
              id
              title
              description
              status
              createdAt
              updatedAt
            }
            tribes {
              __typename
              id
              tribeId
              userId
              tribeName
              userName
              role
              createdAt
              updatedAt
            }
            questions {
              __typename
              id
              title
              type
              asset {
                __typename
                type
                url
                size
                createdAt
                updatedAt
              }
              languageID
              question_template
              answers {
                __typename
                id
                status
                type
                title
                vote
                createdAt
                updatedAt
              }
              status
              user {
                __typename
                id
                firstName
                lastName
                avatar
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async SyncTribes(
    filter?: ModelTribeFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncTribesQuery> {
    const statement = `query SyncTribes($filter: ModelTribeFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncTribes(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            name
            symbol {
              __typename
              type
              url
              size
              createdAt
              updatedAt
            }
            description
            country {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            localization {
              __typename
              lat
              long
              createdAt
              updatedAt
            }
            tribes {
              __typename
              id
              name
              symbol {
                __typename
                type
                url
                size
                createdAt
                updatedAt
              }
              description
              country {
                __typename
                id
                name
                createdAt
                updatedAt
              }
              localization {
                __typename
                lat
                long
                createdAt
                updatedAt
              }
              tribes {
                __typename
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              users {
                __typename
                id
                tribeId
                userId
                tribeName
                userName
                role
                createdAt
                updatedAt
              }
              customs {
                __typename
                id
                tribeID
                type
                title
                description
                status
                createdAt
                updatedAt
              }
              proverbs {
                __typename
                id
                tribeID
                title
                meaning
                content
                track
                createdAt
                updatedAt
              }
              songs {
                __typename
                id
                tribeID
                title
                lyric
                songs
                createdAt
                updatedAt
              }
              names {
                __typename
                id
                tribeID
                name
                gender
                signification
                createdAt
                updatedAt
              }
              languages {
                __typename
                id
                tribeID
                name
                description
                createdAt
                updatedAt
              }
              legends {
                __typename
                id
                name
                surname
                birthdate
                picture
                tribeIds
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            users {
              __typename
              id
              tribeId
              userId
              tribeName
              userName
              role
              createdAt
              updatedAt
            }
            customs {
              __typename
              id
              tribeID
              type
              title
              description
              status
              createdAt
              updatedAt
            }
            proverbs {
              __typename
              id
              tribeID
              title
              meaning
              content
              track
              createdAt
              updatedAt
            }
            songs {
              __typename
              id
              tribeID
              title
              lyric
              songs
              createdAt
              updatedAt
            }
            names {
              __typename
              id
              tribeID
              name
              gender
              signification
              createdAt
              updatedAt
            }
            languages {
              __typename
              id
              tribeID
              name
              description
              questions {
                __typename
                id
                title
                type
                languageID
                question_template
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              alphabets {
                __typename
                id
                languageID
                createdAt
                updatedAt
              }
              dictionaries {
                __typename
                id
                languageID
                name
                createdAt
                updatedAt
              }
              sentences {
                __typename
                id
                languageID
                languageName
                title
                translations
                track
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            legends {
              __typename
              id
              name
              surname
              birthdate
              picture
              tribeIds
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncTribesQuery>response.data.syncTribes;
  }
  async GetTribe(id: string): Promise<GetTribeQuery> {
    const statement = `query GetTribe($id: ID!) {
        getTribe(id: $id) {
          __typename
          id
          name
          symbol {
            __typename
            type
            url
            size
            createdAt
            updatedAt
          }
          description
          country {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          localization {
            __typename
            lat
            long
            createdAt
            updatedAt
          }
          tribes {
            __typename
            id
            name
            symbol {
              __typename
              type
              url
              size
              createdAt
              updatedAt
            }
            description
            country {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            localization {
              __typename
              lat
              long
              createdAt
              updatedAt
            }
            tribes {
              __typename
              id
              name
              symbol {
                __typename
                type
                url
                size
                createdAt
                updatedAt
              }
              description
              country {
                __typename
                id
                name
                createdAt
                updatedAt
              }
              localization {
                __typename
                lat
                long
                createdAt
                updatedAt
              }
              tribes {
                __typename
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              users {
                __typename
                id
                tribeId
                userId
                tribeName
                userName
                role
                createdAt
                updatedAt
              }
              customs {
                __typename
                id
                tribeID
                type
                title
                description
                status
                createdAt
                updatedAt
              }
              proverbs {
                __typename
                id
                tribeID
                title
                meaning
                content
                track
                createdAt
                updatedAt
              }
              songs {
                __typename
                id
                tribeID
                title
                lyric
                songs
                createdAt
                updatedAt
              }
              names {
                __typename
                id
                tribeID
                name
                gender
                signification
                createdAt
                updatedAt
              }
              languages {
                __typename
                id
                tribeID
                name
                description
                createdAt
                updatedAt
              }
              legends {
                __typename
                id
                name
                surname
                birthdate
                picture
                tribeIds
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            users {
              __typename
              id
              tribeId
              userId
              tribeName
              userName
              role
              createdAt
              updatedAt
            }
            customs {
              __typename
              id
              tribeID
              type
              title
              description
              status
              createdAt
              updatedAt
            }
            proverbs {
              __typename
              id
              tribeID
              title
              meaning
              content
              track
              createdAt
              updatedAt
            }
            songs {
              __typename
              id
              tribeID
              title
              lyric
              songs
              createdAt
              updatedAt
            }
            names {
              __typename
              id
              tribeID
              name
              gender
              signification
              createdAt
              updatedAt
            }
            languages {
              __typename
              id
              tribeID
              name
              description
              questions {
                __typename
                id
                title
                type
                languageID
                question_template
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              alphabets {
                __typename
                id
                languageID
                createdAt
                updatedAt
              }
              dictionaries {
                __typename
                id
                languageID
                name
                createdAt
                updatedAt
              }
              sentences {
                __typename
                id
                languageID
                languageName
                title
                translations
                track
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            legends {
              __typename
              id
              name
              surname
              birthdate
              picture
              tribeIds
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          users {
            __typename
            id
            tribeId
            userId
            tribeName
            userName
            role
            createdAt
            updatedAt
          }
          customs {
            __typename
            id
            tribeID
            type
            title
            description
            status
            createdAt
            updatedAt
          }
          proverbs {
            __typename
            id
            tribeID
            title
            meaning
            content
            track
            createdAt
            updatedAt
          }
          songs {
            __typename
            id
            tribeID
            title
            lyric
            songs
            createdAt
            updatedAt
          }
          names {
            __typename
            id
            tribeID
            name
            gender
            signification
            createdAt
            updatedAt
          }
          languages {
            __typename
            id
            tribeID
            name
            description
            questions {
              __typename
              id
              title
              type
              asset {
                __typename
                type
                url
                size
                createdAt
                updatedAt
              }
              languageID
              question_template
              answers {
                __typename
                id
                status
                type
                title
                vote
                createdAt
                updatedAt
              }
              status
              user {
                __typename
                id
                firstName
                lastName
                avatar
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            alphabets {
              __typename
              id
              languageID
              letters {
                __typename
                id
                symbol
                order
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            dictionaries {
              __typename
              id
              languageID
              name
              words {
                __typename
                id
                title
                meaning
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            sentences {
              __typename
              id
              languageID
              languageName
              title
              translations
              track
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          legends {
            __typename
            id
            name
            surname
            birthdate
            picture
            tribeIds
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTribeQuery>response.data.getTribe;
  }
  async ListTribes(
    filter?: ModelTribeFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTribesQuery> {
    const statement = `query ListTribes($filter: ModelTribeFilterInput, $limit: Int, $nextToken: String) {
        listTribes(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            symbol {
              __typename
              type
              url
              size
              createdAt
              updatedAt
            }
            description
            country {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            localization {
              __typename
              lat
              long
              createdAt
              updatedAt
            }
            tribes {
              __typename
              id
              name
              symbol {
                __typename
                type
                url
                size
                createdAt
                updatedAt
              }
              description
              country {
                __typename
                id
                name
                createdAt
                updatedAt
              }
              localization {
                __typename
                lat
                long
                createdAt
                updatedAt
              }
              tribes {
                __typename
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              users {
                __typename
                id
                tribeId
                userId
                tribeName
                userName
                role
                createdAt
                updatedAt
              }
              customs {
                __typename
                id
                tribeID
                type
                title
                description
                status
                createdAt
                updatedAt
              }
              proverbs {
                __typename
                id
                tribeID
                title
                meaning
                content
                track
                createdAt
                updatedAt
              }
              songs {
                __typename
                id
                tribeID
                title
                lyric
                songs
                createdAt
                updatedAt
              }
              names {
                __typename
                id
                tribeID
                name
                gender
                signification
                createdAt
                updatedAt
              }
              languages {
                __typename
                id
                tribeID
                name
                description
                createdAt
                updatedAt
              }
              legends {
                __typename
                id
                name
                surname
                birthdate
                picture
                tribeIds
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            users {
              __typename
              id
              tribeId
              userId
              tribeName
              userName
              role
              createdAt
              updatedAt
            }
            customs {
              __typename
              id
              tribeID
              type
              title
              description
              status
              createdAt
              updatedAt
            }
            proverbs {
              __typename
              id
              tribeID
              title
              meaning
              content
              track
              createdAt
              updatedAt
            }
            songs {
              __typename
              id
              tribeID
              title
              lyric
              songs
              createdAt
              updatedAt
            }
            names {
              __typename
              id
              tribeID
              name
              gender
              signification
              createdAt
              updatedAt
            }
            languages {
              __typename
              id
              tribeID
              name
              description
              questions {
                __typename
                id
                title
                type
                languageID
                question_template
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              alphabets {
                __typename
                id
                languageID
                createdAt
                updatedAt
              }
              dictionaries {
                __typename
                id
                languageID
                name
                createdAt
                updatedAt
              }
              sentences {
                __typename
                id
                languageID
                languageName
                title
                translations
                track
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            legends {
              __typename
              id
              name
              surname
              birthdate
              picture
              tribeIds
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTribesQuery>response.data.listTribes;
  }
  async SyncQuestions(
    filter?: ModelQuestionFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncQuestionsQuery> {
    const statement = `query SyncQuestions($filter: ModelQuestionFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncQuestions(filter: $filter, limit: $limit, nextToken: $nextToken, lastSync: $lastSync) {
          __typename
          items {
            __typename
            id
            title
            type
            asset {
              __typename
              type
              url
              size
              createdAt
              updatedAt
            }
            languageID
            question_template
            answers {
              __typename
              id
              status
              type
              title
              vote
              user {
                __typename
                id
                firstName
                lastName
                avatar
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
            }
            status
            user {
              __typename
              id
              firstName
              lastName
              avatar
              suggestions {
                __typename
                id
                title
                description
                status
                createdAt
                updatedAt
              }
              tribes {
                __typename
                id
                tribeId
                userId
                tribeName
                userName
                role
                createdAt
                updatedAt
              }
              questions {
                __typename
                id
                title
                type
                languageID
                question_template
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncQuestionsQuery>response.data.syncQuestions;
  }
  async GetQuestion(id: string): Promise<GetQuestionQuery> {
    const statement = `query GetQuestion($id: ID!) {
        getQuestion(id: $id) {
          __typename
          id
          title
          type
          asset {
            __typename
            type
            url
            size
            createdAt
            updatedAt
          }
          languageID
          question_template
          answers {
            __typename
            id
            status
            type
            title
            vote
            user {
              __typename
              id
              firstName
              lastName
              avatar
              suggestions {
                __typename
                id
                title
                description
                status
                createdAt
                updatedAt
              }
              tribes {
                __typename
                id
                tribeId
                userId
                tribeName
                userName
                role
                createdAt
                updatedAt
              }
              questions {
                __typename
                id
                title
                type
                languageID
                question_template
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
          }
          status
          user {
            __typename
            id
            firstName
            lastName
            avatar
            suggestions {
              __typename
              id
              title
              description
              status
              createdAt
              updatedAt
            }
            tribes {
              __typename
              id
              tribeId
              userId
              tribeName
              userName
              role
              createdAt
              updatedAt
            }
            questions {
              __typename
              id
              title
              type
              asset {
                __typename
                type
                url
                size
                createdAt
                updatedAt
              }
              languageID
              question_template
              answers {
                __typename
                id
                status
                type
                title
                vote
                createdAt
                updatedAt
              }
              status
              user {
                __typename
                id
                firstName
                lastName
                avatar
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetQuestionQuery>response.data.getQuestion;
  }
  async ListQuestions(
    filter?: ModelQuestionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListQuestionsQuery> {
    const statement = `query ListQuestions($filter: ModelQuestionFilterInput, $limit: Int, $nextToken: String) {
        listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            type
            asset {
              __typename
              type
              url
              size
              createdAt
              updatedAt
            }
            languageID
            question_template
            answers {
              __typename
              id
              status
              type
              title
              vote
              user {
                __typename
                id
                firstName
                lastName
                avatar
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
            }
            status
            user {
              __typename
              id
              firstName
              lastName
              avatar
              suggestions {
                __typename
                id
                title
                description
                status
                createdAt
                updatedAt
              }
              tribes {
                __typename
                id
                tribeId
                userId
                tribeName
                userName
                role
                createdAt
                updatedAt
              }
              questions {
                __typename
                id
                title
                type
                languageID
                question_template
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListQuestionsQuery>response.data.listQuestions;
  }
  OnCreateUserListener: Observable<OnCreateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser($owner: String) {
        onCreateUser(owner: $owner) {
          __typename
          id
          firstName
          lastName
          avatar
          suggestions {
            __typename
            id
            title
            description
            status
            createdAt
            updatedAt
          }
          tribes {
            __typename
            id
            tribeId
            userId
            tribeName
            userName
            role
            createdAt
            updatedAt
          }
          questions {
            __typename
            id
            title
            type
            asset {
              __typename
              type
              url
              size
              createdAt
              updatedAt
            }
            languageID
            question_template
            answers {
              __typename
              id
              status
              type
              title
              vote
              user {
                __typename
                id
                firstName
                lastName
                avatar
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
            }
            status
            user {
              __typename
              id
              firstName
              lastName
              avatar
              suggestions {
                __typename
                id
                title
                description
                status
                createdAt
                updatedAt
              }
              tribes {
                __typename
                id
                tribeId
                userId
                tribeName
                userName
                role
                createdAt
                updatedAt
              }
              questions {
                __typename
                id
                title
                type
                languageID
                question_template
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`
    )
  ) as Observable<OnCreateUserSubscription>;

  OnUpdateUserListener: Observable<OnUpdateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser($owner: String) {
        onUpdateUser(owner: $owner) {
          __typename
          id
          firstName
          lastName
          avatar
          suggestions {
            __typename
            id
            title
            description
            status
            createdAt
            updatedAt
          }
          tribes {
            __typename
            id
            tribeId
            userId
            tribeName
            userName
            role
            createdAt
            updatedAt
          }
          questions {
            __typename
            id
            title
            type
            asset {
              __typename
              type
              url
              size
              createdAt
              updatedAt
            }
            languageID
            question_template
            answers {
              __typename
              id
              status
              type
              title
              vote
              user {
                __typename
                id
                firstName
                lastName
                avatar
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
            }
            status
            user {
              __typename
              id
              firstName
              lastName
              avatar
              suggestions {
                __typename
                id
                title
                description
                status
                createdAt
                updatedAt
              }
              tribes {
                __typename
                id
                tribeId
                userId
                tribeName
                userName
                role
                createdAt
                updatedAt
              }
              questions {
                __typename
                id
                title
                type
                languageID
                question_template
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`
    )
  ) as Observable<OnUpdateUserSubscription>;

  OnDeleteUserListener: Observable<OnDeleteUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser($owner: String) {
        onDeleteUser(owner: $owner) {
          __typename
          id
          firstName
          lastName
          avatar
          suggestions {
            __typename
            id
            title
            description
            status
            createdAt
            updatedAt
          }
          tribes {
            __typename
            id
            tribeId
            userId
            tribeName
            userName
            role
            createdAt
            updatedAt
          }
          questions {
            __typename
            id
            title
            type
            asset {
              __typename
              type
              url
              size
              createdAt
              updatedAt
            }
            languageID
            question_template
            answers {
              __typename
              id
              status
              type
              title
              vote
              user {
                __typename
                id
                firstName
                lastName
                avatar
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
            }
            status
            user {
              __typename
              id
              firstName
              lastName
              avatar
              suggestions {
                __typename
                id
                title
                description
                status
                createdAt
                updatedAt
              }
              tribes {
                __typename
                id
                tribeId
                userId
                tribeName
                userName
                role
                createdAt
                updatedAt
              }
              questions {
                __typename
                id
                title
                type
                languageID
                question_template
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`
    )
  ) as Observable<OnDeleteUserSubscription>;

  OnCreateTribeListener: Observable<OnCreateTribeSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateTribe {
        onCreateTribe {
          __typename
          id
          name
          symbol {
            __typename
            type
            url
            size
            createdAt
            updatedAt
          }
          description
          country {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          localization {
            __typename
            lat
            long
            createdAt
            updatedAt
          }
          tribes {
            __typename
            id
            name
            symbol {
              __typename
              type
              url
              size
              createdAt
              updatedAt
            }
            description
            country {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            localization {
              __typename
              lat
              long
              createdAt
              updatedAt
            }
            tribes {
              __typename
              id
              name
              symbol {
                __typename
                type
                url
                size
                createdAt
                updatedAt
              }
              description
              country {
                __typename
                id
                name
                createdAt
                updatedAt
              }
              localization {
                __typename
                lat
                long
                createdAt
                updatedAt
              }
              tribes {
                __typename
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              users {
                __typename
                id
                tribeId
                userId
                tribeName
                userName
                role
                createdAt
                updatedAt
              }
              customs {
                __typename
                id
                tribeID
                type
                title
                description
                status
                createdAt
                updatedAt
              }
              proverbs {
                __typename
                id
                tribeID
                title
                meaning
                content
                track
                createdAt
                updatedAt
              }
              songs {
                __typename
                id
                tribeID
                title
                lyric
                songs
                createdAt
                updatedAt
              }
              names {
                __typename
                id
                tribeID
                name
                gender
                signification
                createdAt
                updatedAt
              }
              languages {
                __typename
                id
                tribeID
                name
                description
                createdAt
                updatedAt
              }
              legends {
                __typename
                id
                name
                surname
                birthdate
                picture
                tribeIds
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            users {
              __typename
              id
              tribeId
              userId
              tribeName
              userName
              role
              createdAt
              updatedAt
            }
            customs {
              __typename
              id
              tribeID
              type
              title
              description
              status
              createdAt
              updatedAt
            }
            proverbs {
              __typename
              id
              tribeID
              title
              meaning
              content
              track
              createdAt
              updatedAt
            }
            songs {
              __typename
              id
              tribeID
              title
              lyric
              songs
              createdAt
              updatedAt
            }
            names {
              __typename
              id
              tribeID
              name
              gender
              signification
              createdAt
              updatedAt
            }
            languages {
              __typename
              id
              tribeID
              name
              description
              questions {
                __typename
                id
                title
                type
                languageID
                question_template
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              alphabets {
                __typename
                id
                languageID
                createdAt
                updatedAt
              }
              dictionaries {
                __typename
                id
                languageID
                name
                createdAt
                updatedAt
              }
              sentences {
                __typename
                id
                languageID
                languageName
                title
                translations
                track
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            legends {
              __typename
              id
              name
              surname
              birthdate
              picture
              tribeIds
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          users {
            __typename
            id
            tribeId
            userId
            tribeName
            userName
            role
            createdAt
            updatedAt
          }
          customs {
            __typename
            id
            tribeID
            type
            title
            description
            status
            createdAt
            updatedAt
          }
          proverbs {
            __typename
            id
            tribeID
            title
            meaning
            content
            track
            createdAt
            updatedAt
          }
          songs {
            __typename
            id
            tribeID
            title
            lyric
            songs
            createdAt
            updatedAt
          }
          names {
            __typename
            id
            tribeID
            name
            gender
            signification
            createdAt
            updatedAt
          }
          languages {
            __typename
            id
            tribeID
            name
            description
            questions {
              __typename
              id
              title
              type
              asset {
                __typename
                type
                url
                size
                createdAt
                updatedAt
              }
              languageID
              question_template
              answers {
                __typename
                id
                status
                type
                title
                vote
                createdAt
                updatedAt
              }
              status
              user {
                __typename
                id
                firstName
                lastName
                avatar
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            alphabets {
              __typename
              id
              languageID
              letters {
                __typename
                id
                symbol
                order
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            dictionaries {
              __typename
              id
              languageID
              name
              words {
                __typename
                id
                title
                meaning
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            sentences {
              __typename
              id
              languageID
              languageName
              title
              translations
              track
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          legends {
            __typename
            id
            name
            surname
            birthdate
            picture
            tribeIds
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<OnCreateTribeSubscription>;

  OnUpdateTribeListener: Observable<OnUpdateTribeSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTribe {
        onUpdateTribe {
          __typename
          id
          name
          symbol {
            __typename
            type
            url
            size
            createdAt
            updatedAt
          }
          description
          country {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          localization {
            __typename
            lat
            long
            createdAt
            updatedAt
          }
          tribes {
            __typename
            id
            name
            symbol {
              __typename
              type
              url
              size
              createdAt
              updatedAt
            }
            description
            country {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            localization {
              __typename
              lat
              long
              createdAt
              updatedAt
            }
            tribes {
              __typename
              id
              name
              symbol {
                __typename
                type
                url
                size
                createdAt
                updatedAt
              }
              description
              country {
                __typename
                id
                name
                createdAt
                updatedAt
              }
              localization {
                __typename
                lat
                long
                createdAt
                updatedAt
              }
              tribes {
                __typename
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              users {
                __typename
                id
                tribeId
                userId
                tribeName
                userName
                role
                createdAt
                updatedAt
              }
              customs {
                __typename
                id
                tribeID
                type
                title
                description
                status
                createdAt
                updatedAt
              }
              proverbs {
                __typename
                id
                tribeID
                title
                meaning
                content
                track
                createdAt
                updatedAt
              }
              songs {
                __typename
                id
                tribeID
                title
                lyric
                songs
                createdAt
                updatedAt
              }
              names {
                __typename
                id
                tribeID
                name
                gender
                signification
                createdAt
                updatedAt
              }
              languages {
                __typename
                id
                tribeID
                name
                description
                createdAt
                updatedAt
              }
              legends {
                __typename
                id
                name
                surname
                birthdate
                picture
                tribeIds
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            users {
              __typename
              id
              tribeId
              userId
              tribeName
              userName
              role
              createdAt
              updatedAt
            }
            customs {
              __typename
              id
              tribeID
              type
              title
              description
              status
              createdAt
              updatedAt
            }
            proverbs {
              __typename
              id
              tribeID
              title
              meaning
              content
              track
              createdAt
              updatedAt
            }
            songs {
              __typename
              id
              tribeID
              title
              lyric
              songs
              createdAt
              updatedAt
            }
            names {
              __typename
              id
              tribeID
              name
              gender
              signification
              createdAt
              updatedAt
            }
            languages {
              __typename
              id
              tribeID
              name
              description
              questions {
                __typename
                id
                title
                type
                languageID
                question_template
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              alphabets {
                __typename
                id
                languageID
                createdAt
                updatedAt
              }
              dictionaries {
                __typename
                id
                languageID
                name
                createdAt
                updatedAt
              }
              sentences {
                __typename
                id
                languageID
                languageName
                title
                translations
                track
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            legends {
              __typename
              id
              name
              surname
              birthdate
              picture
              tribeIds
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          users {
            __typename
            id
            tribeId
            userId
            tribeName
            userName
            role
            createdAt
            updatedAt
          }
          customs {
            __typename
            id
            tribeID
            type
            title
            description
            status
            createdAt
            updatedAt
          }
          proverbs {
            __typename
            id
            tribeID
            title
            meaning
            content
            track
            createdAt
            updatedAt
          }
          songs {
            __typename
            id
            tribeID
            title
            lyric
            songs
            createdAt
            updatedAt
          }
          names {
            __typename
            id
            tribeID
            name
            gender
            signification
            createdAt
            updatedAt
          }
          languages {
            __typename
            id
            tribeID
            name
            description
            questions {
              __typename
              id
              title
              type
              asset {
                __typename
                type
                url
                size
                createdAt
                updatedAt
              }
              languageID
              question_template
              answers {
                __typename
                id
                status
                type
                title
                vote
                createdAt
                updatedAt
              }
              status
              user {
                __typename
                id
                firstName
                lastName
                avatar
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            alphabets {
              __typename
              id
              languageID
              letters {
                __typename
                id
                symbol
                order
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            dictionaries {
              __typename
              id
              languageID
              name
              words {
                __typename
                id
                title
                meaning
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            sentences {
              __typename
              id
              languageID
              languageName
              title
              translations
              track
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          legends {
            __typename
            id
            name
            surname
            birthdate
            picture
            tribeIds
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<OnUpdateTribeSubscription>;

  OnDeleteTribeListener: Observable<OnDeleteTribeSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTribe {
        onDeleteTribe {
          __typename
          id
          name
          symbol {
            __typename
            type
            url
            size
            createdAt
            updatedAt
          }
          description
          country {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          localization {
            __typename
            lat
            long
            createdAt
            updatedAt
          }
          tribes {
            __typename
            id
            name
            symbol {
              __typename
              type
              url
              size
              createdAt
              updatedAt
            }
            description
            country {
              __typename
              id
              name
              createdAt
              updatedAt
            }
            localization {
              __typename
              lat
              long
              createdAt
              updatedAt
            }
            tribes {
              __typename
              id
              name
              symbol {
                __typename
                type
                url
                size
                createdAt
                updatedAt
              }
              description
              country {
                __typename
                id
                name
                createdAt
                updatedAt
              }
              localization {
                __typename
                lat
                long
                createdAt
                updatedAt
              }
              tribes {
                __typename
                id
                name
                description
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
              }
              users {
                __typename
                id
                tribeId
                userId
                tribeName
                userName
                role
                createdAt
                updatedAt
              }
              customs {
                __typename
                id
                tribeID
                type
                title
                description
                status
                createdAt
                updatedAt
              }
              proverbs {
                __typename
                id
                tribeID
                title
                meaning
                content
                track
                createdAt
                updatedAt
              }
              songs {
                __typename
                id
                tribeID
                title
                lyric
                songs
                createdAt
                updatedAt
              }
              names {
                __typename
                id
                tribeID
                name
                gender
                signification
                createdAt
                updatedAt
              }
              languages {
                __typename
                id
                tribeID
                name
                description
                createdAt
                updatedAt
              }
              legends {
                __typename
                id
                name
                surname
                birthdate
                picture
                tribeIds
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
            }
            users {
              __typename
              id
              tribeId
              userId
              tribeName
              userName
              role
              createdAt
              updatedAt
            }
            customs {
              __typename
              id
              tribeID
              type
              title
              description
              status
              createdAt
              updatedAt
            }
            proverbs {
              __typename
              id
              tribeID
              title
              meaning
              content
              track
              createdAt
              updatedAt
            }
            songs {
              __typename
              id
              tribeID
              title
              lyric
              songs
              createdAt
              updatedAt
            }
            names {
              __typename
              id
              tribeID
              name
              gender
              signification
              createdAt
              updatedAt
            }
            languages {
              __typename
              id
              tribeID
              name
              description
              questions {
                __typename
                id
                title
                type
                languageID
                question_template
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              alphabets {
                __typename
                id
                languageID
                createdAt
                updatedAt
              }
              dictionaries {
                __typename
                id
                languageID
                name
                createdAt
                updatedAt
              }
              sentences {
                __typename
                id
                languageID
                languageName
                title
                translations
                track
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            legends {
              __typename
              id
              name
              surname
              birthdate
              picture
              tribeIds
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          users {
            __typename
            id
            tribeId
            userId
            tribeName
            userName
            role
            createdAt
            updatedAt
          }
          customs {
            __typename
            id
            tribeID
            type
            title
            description
            status
            createdAt
            updatedAt
          }
          proverbs {
            __typename
            id
            tribeID
            title
            meaning
            content
            track
            createdAt
            updatedAt
          }
          songs {
            __typename
            id
            tribeID
            title
            lyric
            songs
            createdAt
            updatedAt
          }
          names {
            __typename
            id
            tribeID
            name
            gender
            signification
            createdAt
            updatedAt
          }
          languages {
            __typename
            id
            tribeID
            name
            description
            questions {
              __typename
              id
              title
              type
              asset {
                __typename
                type
                url
                size
                createdAt
                updatedAt
              }
              languageID
              question_template
              answers {
                __typename
                id
                status
                type
                title
                vote
                createdAt
                updatedAt
              }
              status
              user {
                __typename
                id
                firstName
                lastName
                avatar
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            alphabets {
              __typename
              id
              languageID
              letters {
                __typename
                id
                symbol
                order
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            dictionaries {
              __typename
              id
              languageID
              name
              words {
                __typename
                id
                title
                meaning
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
            }
            sentences {
              __typename
              id
              languageID
              languageName
              title
              translations
              track
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          legends {
            __typename
            id
            name
            surname
            birthdate
            picture
            tribeIds
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`
    )
  ) as Observable<OnDeleteTribeSubscription>;

  OnCreateQuestionListener: Observable<
    OnCreateQuestionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateQuestion($owner: String) {
        onCreateQuestion(owner: $owner) {
          __typename
          id
          title
          type
          asset {
            __typename
            type
            url
            size
            createdAt
            updatedAt
          }
          languageID
          question_template
          answers {
            __typename
            id
            status
            type
            title
            vote
            user {
              __typename
              id
              firstName
              lastName
              avatar
              suggestions {
                __typename
                id
                title
                description
                status
                createdAt
                updatedAt
              }
              tribes {
                __typename
                id
                tribeId
                userId
                tribeName
                userName
                role
                createdAt
                updatedAt
              }
              questions {
                __typename
                id
                title
                type
                languageID
                question_template
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
          }
          status
          user {
            __typename
            id
            firstName
            lastName
            avatar
            suggestions {
              __typename
              id
              title
              description
              status
              createdAt
              updatedAt
            }
            tribes {
              __typename
              id
              tribeId
              userId
              tribeName
              userName
              role
              createdAt
              updatedAt
            }
            questions {
              __typename
              id
              title
              type
              asset {
                __typename
                type
                url
                size
                createdAt
                updatedAt
              }
              languageID
              question_template
              answers {
                __typename
                id
                status
                type
                title
                vote
                createdAt
                updatedAt
              }
              status
              user {
                __typename
                id
                firstName
                lastName
                avatar
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`
    )
  ) as Observable<OnCreateQuestionSubscription>;

  OnUpdateQuestionListener: Observable<
    OnUpdateQuestionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateQuestion($owner: String) {
        onUpdateQuestion(owner: $owner) {
          __typename
          id
          title
          type
          asset {
            __typename
            type
            url
            size
            createdAt
            updatedAt
          }
          languageID
          question_template
          answers {
            __typename
            id
            status
            type
            title
            vote
            user {
              __typename
              id
              firstName
              lastName
              avatar
              suggestions {
                __typename
                id
                title
                description
                status
                createdAt
                updatedAt
              }
              tribes {
                __typename
                id
                tribeId
                userId
                tribeName
                userName
                role
                createdAt
                updatedAt
              }
              questions {
                __typename
                id
                title
                type
                languageID
                question_template
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
          }
          status
          user {
            __typename
            id
            firstName
            lastName
            avatar
            suggestions {
              __typename
              id
              title
              description
              status
              createdAt
              updatedAt
            }
            tribes {
              __typename
              id
              tribeId
              userId
              tribeName
              userName
              role
              createdAt
              updatedAt
            }
            questions {
              __typename
              id
              title
              type
              asset {
                __typename
                type
                url
                size
                createdAt
                updatedAt
              }
              languageID
              question_template
              answers {
                __typename
                id
                status
                type
                title
                vote
                createdAt
                updatedAt
              }
              status
              user {
                __typename
                id
                firstName
                lastName
                avatar
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`
    )
  ) as Observable<OnUpdateQuestionSubscription>;

  OnDeleteQuestionListener: Observable<
    OnDeleteQuestionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteQuestion($owner: String) {
        onDeleteQuestion(owner: $owner) {
          __typename
          id
          title
          type
          asset {
            __typename
            type
            url
            size
            createdAt
            updatedAt
          }
          languageID
          question_template
          answers {
            __typename
            id
            status
            type
            title
            vote
            user {
              __typename
              id
              firstName
              lastName
              avatar
              suggestions {
                __typename
                id
                title
                description
                status
                createdAt
                updatedAt
              }
              tribes {
                __typename
                id
                tribeId
                userId
                tribeName
                userName
                role
                createdAt
                updatedAt
              }
              questions {
                __typename
                id
                title
                type
                languageID
                question_template
                status
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
          }
          status
          user {
            __typename
            id
            firstName
            lastName
            avatar
            suggestions {
              __typename
              id
              title
              description
              status
              createdAt
              updatedAt
            }
            tribes {
              __typename
              id
              tribeId
              userId
              tribeName
              userName
              role
              createdAt
              updatedAt
            }
            questions {
              __typename
              id
              title
              type
              asset {
                __typename
                type
                url
                size
                createdAt
                updatedAt
              }
              languageID
              question_template
              answers {
                __typename
                id
                status
                type
                title
                vote
                createdAt
                updatedAt
              }
              status
              user {
                __typename
                id
                firstName
                lastName
                avatar
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
                owner
              }
              createdAt
              updatedAt
              _version
              _deleted
              _lastChangedAt
              owner
            }
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
            owner
          }
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
      }`
    )
  ) as Observable<OnDeleteQuestionSubscription>;
}
