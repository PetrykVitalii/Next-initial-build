export enum LANGUAGES {
  EN = 'EN',
  SG = 'SG',
  ID = 'ID',
  TH = 'TH',
  ZH = 'ZH',
  PH = 'PH',
  VN = 'VN',
}

export interface LanguageState {
  ln: LANGUAGES;
}

export type LanguagesEnumValues = keyof typeof LANGUAGES;
