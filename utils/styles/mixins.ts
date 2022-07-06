import { css } from 'styled-components';
import vars from '@/utils/styles/var';

/* screen size mixins */
export const largeDesktop = `(min-width: ${vars.screen_width.desktop3}px)`;

export const desktop = `(max-width: ${vars.screen_width.desktop3 - 1}px)`;
export const onlyDesktop = `(min-width: ${vars.screen_width.desktop2}px) and (max-width: ${vars.screen_width.desktop3 - 1}px)`;

export const smallDesktop = `(max-width: ${vars.screen_width.desktop2 - 1}px)`;
export const onlySmallDesktop = `(min-width: ${vars.screen_width.desktop}px) and (max-width: ${vars.screen_width.desktop2 - 1}px)`;

export const tablet = `(max-width: ${vars.screen_width.desktop - 1}px)`;
export const onlyTablet = `(min-width: ${vars.screen_width.tablet}px) and (max-width: ${vars.screen_width.desktop - 1}px)`;

export const minTablet = `(min-width: ${vars.screen_width.desktop}px)`;
export const mobile = `(max-width: ${vars.screen_width.tablet - 1}px)`;
export const onlyMobile = `(min-width: ${vars.screen_width.mobile}px) and (max-width: ${vars.screen_width.tablet - 1}px)`;

/* helper mixins */
export const messageBorder = css`
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 16px;
`;

export const senderMessageBorder = css`
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom-left-radius:16px;
  border-bottom-right-radius: 0px;
`;

export const singleLine = css`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const linebreak = css`
  white-space: pre-line;
  word-break: break-word;
`;

export const lineClamp = (maxLine: number = 2) => maxLine && css`
  word-wrap: white-space;
  word-break: break-word;

  @supports (-webkit-line-clamp: ${maxLine}) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: initial;
    display: -webkit-box;
    -webkit-line-clamp: ${maxLine};
    -webkit-box-orient: vertical;
  }
`;

export const resetLineClamp = (maxLine: number = 2) => maxLine && css`
  word-wrap: initial;
  word-break: initial;

  @supports (-webkit-line-clamp: ${maxLine}) {
    overflow: initial;
    text-overflow: initial;
    white-space: initial;
    display: -webkit-box;
    -webkit-line-clamp: initial;
    -webkit-box-orient: initial;
  }
`;

export const imageSharpen = css`
  image-rendering: crisp-edges;
  image-rendering: -moz-crisp-edges;          /* Firefox */
  image-rendering: -o-crisp-edges;            /* Opera */
  image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming)*/
  -ms-interpolation-mode: nearest-neighbor;   /* IE (non-standard property) */
`;

export const disableElement = css`
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const customScrollbar = css`
  scrollbar-width: thin;

  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-track {
    scrollbar-width: 1px;
    background: ${({ theme }) => theme.colors.dividerColors.Sidebar};
    color: ${({ theme }) => theme.colors.dividerColors.Sidebar};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 100px;
    scrollbar-width: 3px;
    height: 40px;
    background: ${({ theme }) => theme.colors.dividerColors.Messages};
    color: ${({ theme }) => theme.colors.dividerColors.Messages};
  }

  ::-webkit-scrollbar {
    display: flex;
  }
`;

export const fontGilroy = css`
  font-family: 'Gilroy', 'Thonburi', 'Noto Sans SC', sans-serif;
`;

export const fontInter = css`
  font-family: 'Inter', 'Thonburi', 'Noto Sans SC', sans-serif;
`;
