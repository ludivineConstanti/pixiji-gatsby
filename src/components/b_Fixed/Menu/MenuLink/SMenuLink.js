import styled from "styled-components"
import { motion } from "framer-motion"
import { Link } from "gatsby"

import { tMenuLink } from "src/styles/typo"

// initial css before comes in transition
export default styled(motion(Link))`
  ${tMenuLink}
  color: ${props => props.s.colorMainL1};
  margin: 6px;
  width: 100%;
  display: flex;
  align-items: center;
`
