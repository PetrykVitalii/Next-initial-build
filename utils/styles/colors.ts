export interface ITextColors {
  Primary: string;
  Main: string;
  White: string;
  SecondForBlack: string;
  Second: string;
  Placeholder: string;
  PlaceholderForBlack: string;
  // not in styleguide
  Green: string;
  Yellow: string;
  Black: string;
  Blue: string;
  Grey: string;
  Red: string;
  DarkRed: string;
  DeepBlue: string;
  DarkGrey: string;
}

export interface IDividerColors {
  Messages: string;
  Main: string;
  Sidebar: string;
  MessagesForBlack: string;
  MainForBlack: string;
  // not in styleguide
  LightGrey: string;
  Grey: string;
}

export interface IInputsColors {
  Main: string;
  Second: string;
  MainForDark: string;
  SecondForDark: string;
  // not in styleguide
  Error: string;
  Focus: string;
  Disabled: string;
  Placeholder: string;
  // not in styleguide
  Transparent: string;
}

export interface IBackgroundsColors {
  Main: string;
  Main40: string;
  Second: string;
  SecondTwo: string;
  MainForDark: string;
  SecondForDark: string;
  Blue: string;
  Yellow: string;
  Green: string;
  Red: string;
  DeepBlue: string;
  Orange: string;
  Grey: string;
  GreyForStroke: string;
  Tabs: string;
  PrimaryButton: string;
  // not in styleguide
  DarkGrey: string;
  Transparent: string;
  DarkGray: string;
  Dark: string;
  GreyForMessage: string;
  LightYellow: string;
}

export interface IIconsColors {
  LightGrey: string;
  DarkGrey: string;
  LightGreyForDark: string;
  DarkGreyForDark: string;
  Primary: string;
  Second: string;
  SecondForDark: string;
  Blue: string;
  Yellow: string;
  Green: string;
  Red: string;
  DeepBlue: string;
  Orange: string;
  Black: string;
  White: string;
  GreyForMessage: string;
}

export interface IButtonsColors {
  Primary: string;
  Second: string;
  SecondTwo: string;
  SecondThree: string;
  TextButton: string;
  TextButtonTwo: string;
}

export interface IOverlaysColors {
  LightMode: string;
  DarkMode: string;
}

export interface IAvatarColors {
  PastelBlue: string;
  PastelYellow: string;
  PastelGreen: string;
  PastelRed: string;
  PastelPurple: string;
  PastelOrange: string;
  Content: string;
}

export interface INotificationColors {
  Primary: string;
  Dark: string;
}

export const textColors: ITextColors = {
  Primary: '#FF474D',
  Main: '#212121',
  White: '#FFFFFF',
  SecondForBlack: '#717071',
  Second: '#5C5C5C',
  Placeholder: '#BDBDBD',
  PlaceholderForBlack: '#616161',
  // not in styleguide
  Green: '#5CC99C',
  Yellow: '#FFA300',
  Black: '#000000',
  Blue: '#3D9AFF',
  Grey: '#B3B4B5',
  Red: '#E52222',
  DarkRed: '#D61414',
  DeepBlue: '#004EE7',
  DarkGrey: '#3E3E3E',
};

export const dividerColors: IDividerColors = {
  Messages: '#212121',
  Main: '#F3F4F5',
  Sidebar: '#D2D2D2',
  MessagesForBlack: '#FFFFFF',
  MainForBlack: '##0A090C',
  LightGrey: '#E8E8E8',
  Grey: '#B3B4B5',
};

export const inputsColors: IInputsColors = {
  Main: '#FFFFFF',
  Second: '#F3F4F5',
  MainForDark: '#1E1D1E',
  SecondForDark: '#212121',
  // not in styleguide
  Error: '#FF474D',
  Focus: '#D2D2D2',
  Disabled: '#F9F9FA',
  Placeholder: '#BDBDBD',
  Transparent: 'transparent',
};

export const backgroundsColors: IBackgroundsColors = {
  Main: '#F3F4F5',
  Main40: 'rgba(243, 244, 245, 0.4);',
  Second: '#FFFFFF',
  SecondTwo: '#F9FAFA',
  MainForDark: '#0A090C',
  SecondForDark: '#1E1D1E',
  Blue: '#B5D5FF',
  Yellow: '#FFE0A4',
  Green: '#C5EDDC',
  Red: '#FFA6A6',
  DeepBlue: '#D0D2FF',
  Orange: '#FFBF9A',
  Grey: '#D2D2D2',
  GreyForStroke: '#E8E8E8',
  Tabs: '#EDEFF2',
  PrimaryButton: '#FFF0F1',
  DarkGrey: '#ECECEC',
  Transparent: 'transparent',
  DarkGray: '#ECECEC',
  Dark: '#212121',
  GreyForMessage: '#E0E0E1',
  LightYellow: '#FEAA22',
};

export const iconsColors: IIconsColors = {
  LightGrey: '#D2D2D2',
  DarkGrey: '#B3B4B5',
  LightGreyForDark: '#434344',
  DarkGreyForDark: '#535355',
  Primary: '#FF474D',
  Second: '#8D8D8D',
  SecondForDark: '#717071',
  Blue: '#3D9AFF',
  Black: '#212121',
  Yellow: '#FEAA22',
  Green: '#5CC99C',
  Red: '#E52222',
  DeepBlue: '#004EE7',
  Orange: '#FE7122',
  White: '#FFFFFF',
  GreyForMessage: '#5C5C5C',
};

export const buttonsColors: IButtonsColors = {
  Primary: '#FF474D',
  Second: '#FFFFFF',
  SecondTwo: '#D2D2D2',
  SecondThree: '#F3F4F5',
  TextButton: '#B3B4B5',
  TextButtonTwo: '#212121',
};

export const overlaysColors: IOverlaysColors = {
  LightMode: '#212121',
  DarkMode: '#1E1D1E',
};

export const avatarColors: IAvatarColors = {
  PastelBlue: '#D7E8FF',
  PastelYellow: '#FFEACD',
  PastelGreen: '#DEF4EB',
  PastelRed: '#FFD7D7',
  PastelPurple: '#E7E7FC',
  PastelOrange: '##FFE3D3',
  Content: 'content',
};

export const notificationColors: INotificationColors = {
  Primary: '#fa4353',
  Dark: '#212121',
};
