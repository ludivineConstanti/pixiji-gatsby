import styled from "styled-components"
import { motion } from "framer-motion"

import { buttonWidth } from "src/styles/g"

export default styled(motion.div)`
  position: fixed;
  right: 0;
  bottom: 0;
  height: ${buttonWidth};
  background-color: ${props => props.s.color};
`
