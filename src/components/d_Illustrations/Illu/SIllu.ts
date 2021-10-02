import styled from "styled-components"
import { motion } from "framer-motion"

import { zIAppBackground } from "src/styles/g"

const background = `
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: ${zIAppBackground};
`

export const SPColorMain = styled.div<{ s: { color: string } }>`
  width: 100%;
  ${background}
  background-color: ${props => props.s.color};
`

export const SColorMain = styled(motion.div)<{ s: { color: string } }>`
  ${background}
  background-color: ${props => props.s.color};
`
