import styled from "styled-components"
import { Link } from "gatsby"
import { motion } from "framer-motion"

import { buttonKanjiSize } from "src/styles/g"

// initial css before comes in
const commonStyle = `
display: flex;
  margin-top: 24px;
  align-items: center;
  justify-content: flex-end;
  height: ${buttonKanjiSize};
  width: 100%;
`

export const SButton = styled(motion.button)`
  ${commonStyle}
  background-color: transparent;
`

export const SLink = styled(motion(Link))`
  ${commonStyle}
`
