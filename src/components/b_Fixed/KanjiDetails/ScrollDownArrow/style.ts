import { motion } from "framer-motion"
import styled from "styled-components"

export const SWrapper = styled(motion.div)`
  width: 100%;
  position: absolute;
  bottom: 0px;
  left: 0;
  display: flex;
  flex-direction: column;
  &:hover {
    cursor: pointer;
  }
`

export const SWrapperArrow = styled.div`
  padding: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
`
