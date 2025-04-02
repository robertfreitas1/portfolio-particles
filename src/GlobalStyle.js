import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #0a0a0a;
    color: white;
    font-family: Arial, sans-serif;
  }
`;

export default GlobalStyle;
