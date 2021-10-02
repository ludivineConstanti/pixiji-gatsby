import styled from "styled-components"
import { motion } from "framer-motion"

import { zImenu, contentMenuWidth, breakPointD } from "src/styles/g"

export const variants = {
  initial: { left: `calc((${contentMenuWidth} + 10px) * -1)` },
  animate: { left: 0 },
}

// initial css before comes in transition
export default styled.div`
  z-index: ${zImenu};
  position: fixed;
`
export const SContent = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: white;
  ${breakPointD} {
    width: ${contentMenuWidth};
  }
`
