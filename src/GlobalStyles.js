// src/styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, select {
    font-family: 'Poppins', 'Roboto', Arial, sans-serif;
    background-color: #111;
    color: #333;
  }

  h1, h2, h3, {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
  }

  button {
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyles;
