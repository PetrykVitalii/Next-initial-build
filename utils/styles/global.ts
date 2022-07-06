import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

import {
  ITextColors,
  IDividerColors,
  IInputsColors,
  IBackgroundsColors,
  IIconsColors,
  IButtonsColors,
  IOverlaysColors,
  textColors,
  dividerColors,
  inputsColors,
  backgroundsColors,
  iconsColors,
  buttonsColors,
  overlaysColors,
} from '@/utils/styles/colors';
import fontSize, { IFontSize } from '@/utils/styles/fontSize';
import {
  IFontFamily,
  fontFamily,
} from '@/utils/styles/fonts';
import { fontInter } from '@/utils/styles/mixins';

export const GlobalStyle = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    font-family: 'Gilroy', 'Inter', 'Thonburi', 'Noto Sans SC';
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    line-height: inherit;

    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }
  }

  html,
  body,
  #root,
  #portal {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  #root {
    color: ${textColors.Main};
    caret-color: ${textColors.Main};
    background-color: ${backgroundsColors.Second};
    min-height: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  pre {
    font-family: 'Gilroy', 'Inter', 'Thonburi', 'Noto Sans SC';
    margin: 0;
    padding: 0;
  }

  input, textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    ::placeholder {
      ${fontInter}
    }
  }

  input {
    :disabled {
      background-color: inherit;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

  .shimmer {
    background: #f6f7f8;
    background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
    background-repeat: no-repeat;
    background-size: 500px 500px;
    display: inline-block;
    position: relative;

    -webkit-animation-duration: 1s;
    -webkit-animation-fill-mode: forwards;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-name: placeholderShimmer;
    -webkit-animation-timing-function: linear;
  }

  .shimmer-off {
    background: #f6f7f8;
  }

  @-webkit-keyframes placeholderShimmer {
    0% {
      background-position: -468px 0;
    }

    100% {
      background-position: 468px 0;
    }
  }
`;

export interface ITheme {
  colors: {
    textColors: ITextColors,
    dividerColors: IDividerColors,
    inputsColors: IInputsColors,
    backgroundsColors: IBackgroundsColors,
    iconsColors: IIconsColors,
    buttonsColors: IButtonsColors,
    overlaysColors: IOverlaysColors,
  }
  fontSize: IFontSize;
  fontFamily: IFontFamily;
}

export const theme: ITheme = {
  colors: {
    textColors,
    dividerColors,
    inputsColors,
    backgroundsColors,
    iconsColors,
    buttonsColors,
    overlaysColors,
  },
  fontSize,
  fontFamily,
};
