import styled from "styled-components"
import { motion } from "framer-motion"

import {
  zIquestion,
  contentL,
  buttonKanjiSize,
  buttonKanjiSizeGap,
  breakPointT,
  breakPointD,
} from "src/styles/g"
import { tText } from "src/styles/typo"

// initial css before comes in transition
export default styled.main`
  z-index: ${zIquestion};
  ${contentL}
`

export const SText = styled.h2`
  ${tText}
  margin-bottom: 24px;
`

export const SOptions = styled(motion.div)`
  display: grid;
  width: 100%;
  height: auto;
  grid-template: repeat(3, 1fr) / repeat(4, 1fr);
  gap: ${buttonKanjiSizeGap};
  ${breakPointT} {
    width: auto;
    grid-template-columns: repeat(4, ${buttonKanjiSize});
  }
  ${breakPointD} {
    grid-template-columns: repeat(3, ${buttonKanjiSize});
  }
`
