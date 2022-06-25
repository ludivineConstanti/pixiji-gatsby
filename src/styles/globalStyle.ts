import { createGlobalStyle } from "styled-components"

import { resetStyle } from "./resetStyle"
import { customStyle } from "./customStyle"

/* http://meyerweb.com/eric/tools/css/reset/ v2.0 | 20110126 */
export const GlobalStyle = createGlobalStyle`
${resetStyle}
${customStyle}

div {
  scroll-behavior: smooth;
}

// makes scrollbar invisible
-ms-overflow-style: none;
  scrollbar-width: none;
  scrollbar-color: rgba(255, 255, 255, 0) rgba(255, 255, 255, 0);
  scrollbar-width: thin;
  ::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
    width: 0px;
    height: 0px;
  }
`
