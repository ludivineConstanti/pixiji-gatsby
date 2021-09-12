import styled from "styled-components"
import { motion } from "framer-motion"
import { Link } from "gatsby"

import { tMenuLink } from "src/styles/typo"

// initial css before comes in transition
const commonStyle = `
${tMenuLink}
color: ${props => props.s.colorMainL1};
margin: 6px;
width: 100%;
display: flex;
align-items: center;
`

export default styled(motion(Link))`
  ${commonStyle}
`

export const SMenuButton = styled(motion.button)`
  ${commonStyle}
`
