import 'styled-components';

import { ITheme } from '@/utils/styles/globafl';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
