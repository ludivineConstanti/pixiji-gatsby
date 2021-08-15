import { createGlobalStyle } from "styled-components"

import { resetStyle } from "./resetStyle"
import { customStyle } from "./customStyle"

/* http://meyerweb.com/eric/tools/css/reset/ v2.0 | 20110126 */
export const GlobalStyle = createGlobalStyle`
${resetStyle}
${customStyle}
`
