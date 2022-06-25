import styled from "styled-components"
import { motion } from "framer-motion"

import { sidePadding } from "../basics"

export const SWrapper = styled(motion.div)`
  position: absolute;
  line-height: 20px;
  font-size: 15px;
  margin-right: ${sidePadding}px;
  transform-origin: top left;
`

export const SBackgroundColor = styled.div`
  padding: ${sidePadding}px;
  background-color: white;
`
