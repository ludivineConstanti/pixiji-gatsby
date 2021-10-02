import styled from "styled-components"
import { motion } from "framer-motion"

import { tText } from "src/styles/typo"

export const SText = styled(motion.p)`
  ${tText}
  margin-bottom: 8px;
`

export const SLink = styled(motion.a)`
  border-bottom: 1px solid white;
`
