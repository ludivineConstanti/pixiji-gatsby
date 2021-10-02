import styled from "styled-components"
import { motion } from "framer-motion"

import { tButtonInText, tButtonSmallInText } from "src/styles/typo"

export const SText = styled(motion.p)<{ s: { size: string } }>`
  ${p => (p.s.size === "small" ? tButtonSmallInText : tButtonInText)}
  margin-right: 12px;
`
