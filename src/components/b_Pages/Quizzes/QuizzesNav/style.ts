import { Link } from "gatsby"
import styled from "styled-components"
import { motion } from "framer-motion"

import { buttonWidth, strokeWidth, breakPointD } from "src/styles/g"

// initial css before comes in transition
export default styled(motion.nav)<{
  s: { prevQuiz: number | boolean; nextQuiz: number | boolean }
}>`
  height: ${buttonWidth};
  display: flex;
  position: fixed;
  bottom: 0;
  left: ${props =>
    props.s.prevQuiz && props.s.nextQuiz
      ? "50%"
      : props.s.prevQuiz
      ? `calc(50% + ${buttonWidth} / 2)`
      : `calc(50% - ${buttonWidth} / 2)`};
  transform: translate(-50%, 0);
  align-items: center;
  ${breakPointD} {
    left: 50%;
  }
`

export const SNavSquare = styled(motion(Link))<{ s: { color: string } }>`
  border: ${strokeWidth}px solid #fff;
  height: 24px;
  width: 24px;
  background-color: ${props => props.s.color};
  margin: 16px;
`
