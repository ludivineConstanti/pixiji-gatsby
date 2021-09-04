import styled from "styled-components"
import { motion } from "framer-motion"

import { strokeWidth } from "src/styles/g"
import { tInput, tInputPlaceholder, tInputLabel } from "src/styles/typo"

// initial css before comes in
export default styled.input`
  ${tInput}
  border: ${strokeWidth} solid white;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.15);
  margin-bottom: ${props => (props.s.isLast ? 0 : "16px")};
  padding: 12px;
  ::placeholder {
    ${tInputPlaceholder}
  }
`

export const SLabel = styled.label`
  ${tInputLabel}
  display: block;
  padding-bottom: 4px;
`
