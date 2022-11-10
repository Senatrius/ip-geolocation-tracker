import { createGlobalStyle } from "styled-components";

export const Colors = {
  lightGray: "hsl(0, 0%, 59%)",
  darkGray: "hsl(0, 0%, 17%)"
}

export const TextSizes = {
  large: '1.625rem',
  medium: '1.125rem',
  small: '0.75rem',
  x_small: '0.625rem'
}

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Rubik', sans-serif;
  }

  input {
    font-family: inherit;
    font-size: inherit;
  }
`