import styled from "styled-components"
import { motion } from "framer-motion"

import {
  buttonWidth,
  buttonMenuIconSize,
  strokeWidth,
  breakPointD,
  zImenu,
} from "src/styles/g"

// initial css before comes in transition
export default styled(motion.button)`
  z-index: ${zImenu};
  height: calc(${buttonWidth} / 2);
  width: calc(${buttonWidth} / 2);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  ${breakPointD} {
    left: 0;
  }
`

export const SIconContainer = styled.div`
  height: calc(${buttonMenuIconSize} / 2);
  width: calc(${buttonMenuIconSize} / 2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const SIconStroke = styled(motion.div)<{ s: { colorMain: string } }>`
  height: ${strokeWidth}px;
  background-color: ${props => props.s.colorMain};
`
