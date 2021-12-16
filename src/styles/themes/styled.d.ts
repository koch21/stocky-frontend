import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secundary: string

      gray: string
      lightGray: string
      darkGray: string
      darkestGray: string
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
