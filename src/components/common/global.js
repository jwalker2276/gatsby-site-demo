import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    // Primaries
    --red-lightest: hsla(4,90%,95%,1);
    --red-light: hsla(4,83%,75%,1);
    --red-base: hsla(4,77%,48%,1);
    --red-dark: hsla(4,84%,35%,1);
    --red-darkest: hsla(4,81%,11%,1);
    // Neutrals
    --neut-lightest: hsla(4,15%,98%,1);
    --neut-lighter: hsla(4,4%,94%,1);
    --neut-light: hsla(4,4%,82%,1);
    --neut-base: hsla(4,2%,48%,1);
    --neut-dark: hsla(4,2%,15%,1);
    --neut-darkest: hsla(4,2%,11%,1);
    --shadow: hsla(4,11%,11%, .2);
    --highlight: hsla(4,15%,98%,.2);
    // Text
    --heading-dark: var(--neut-darkest);
    --body-dark: var(--neut-darkest);
    --body-light: var(--neut-lightest);
    --body-light-t: hsla(4,27%,98%,.90);
  }

  body {
    margin: 0px;
    padding: 0px;
    height: 100%;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
