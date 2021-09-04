import styled from "styled-components"
import { motion } from "framer-motion"

import { breakPointT, buttonWidth } from "src/styles/g"
import { tTitle } from "src/styles/typo"

export default styled(motion.h1)`
  ${tTitle}
  margin-bottom: 24px;
  margin-right: calc(${buttonWidth} / 2);
  position: relative;
  ${breakPointT} {
    margin-right: 0;
  }
`

export const SSquareTitle = styled(motion.div)`
  position: absolute;
  height: 100%;
  background-color: white;
`
