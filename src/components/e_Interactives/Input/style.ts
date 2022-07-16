import styled from "styled-components"
import { motion } from "framer-motion"

import { strokeWidth } from "src/styles/g"
import { tInput, tInputPlaceholder, tInputLabel } from "src/styles/typo"

export const vInput = {
  initial: {
    x: 500,
    width: "0%",
  },
  animate: {
    x: 0,
    width: "100%",
  },
  exit: {
    x: -250,
    width: "0%",
  },
}

// initial css before comes in
export default styled(motion.input)<{ s: { isLast: boolean } }>`
  ${tInput}
  border: ${strokeWidth}px solid white;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.15);
  margin-bottom: ${props => (props.s.isLast ? 0 : "16px")};
  padding: 12px;
  ::placeholder {
    ${tInputPlaceholder}
  }
`

export const vLabel = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.25 },
  },
  exit: {
    opacity: 0,
    x: -250,
    transition: { duration: 0.25 },
  },
}

export const SLabel = styled(motion.label)`
  ${tInputLabel}
  display: block;
  padding-bottom: 4px;
`
