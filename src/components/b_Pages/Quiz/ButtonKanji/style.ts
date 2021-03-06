import styled from "styled-components"
import { motion } from "framer-motion"

import { strokeWidth, buttonKanjiSize, breakPointT } from "src/styles/g"
import { tQuizButtonKanji } from "src/styles/typo"

// initial css before comes in transition
export default styled(motion.button)<{
  s: { isWrong: boolean; cheating: boolean; colorMain: string }
}>`
  position: relative;
  ${tQuizButtonKanji}
  outline: ${props =>
    props.s.isWrong
      ? `${strokeWidth}px solid rgba(255, 255, 255, 0.25)`
      : props.s.cheating
      ? `${strokeWidth * 1.5}px solid rgba(255, 255, 255, 1)`
      : `${strokeWidth}px solid rgba(255, 255, 255, 1)`};
  color: ${props =>
    props.s.isWrong ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 1)"};
  font-size: 18px;
  background-color: ${props => props.s.colorMain};
  width: 100%;
  padding-top: 100%;
  ${breakPointT} {
    width: ${buttonKanjiSize};
    height: ${buttonKanjiSize};
  }
`

export const SText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
