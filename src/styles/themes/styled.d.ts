import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secundary: string

      grey: string
      lightGrey: string
      darkGrey: string
      darkestGrey: string
      blue: string
      red: string
    }
    fonts: {
      regular: string
      medium: string
      bold: string
    }
  }
}
