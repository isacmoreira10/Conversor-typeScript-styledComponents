import 'styled-components'
import { DefaultThemes } from '../styles/themes/Default'

type ThemeType = typeof DefaultThemes

declare module 'styled-components' {
    export interface DefaultThemes extends ThemeType { }
}