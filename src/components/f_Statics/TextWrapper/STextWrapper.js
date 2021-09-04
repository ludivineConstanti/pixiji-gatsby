import styled from "styled-components"
import { motion } from "framer-motion"

import { contentL } from "src/styles/g"

// initial css before comes in transition
export default styled(motion.main)`
  ${contentL}
`

// local z-index
export const SBackgroundColor = styled(motion.div)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.s.colorMain};
  z-index: -1;
`
