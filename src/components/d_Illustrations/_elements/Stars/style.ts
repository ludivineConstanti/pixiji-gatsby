import styled from "styled-components"
import { motion } from "framer-motion"

import {
  squareUnitM,
  squareUnitT,
  squareUnit,
  breakPointT,
  breakPointD,
} from "src/styles/g"

interface Attrs {
  s: {
    color: string
    size: number
    top: number
    left: number
  }
}

export const SStar = styled(motion.div).attrs<Attrs>(props => ({
  style: {
    backgroundColor: props.s.color,
    height: `calc(${squareUnitM} * ${props.s.size})`,
    width: `calc(${squareUnitM} * ${props.s.size})`,
    top: `${props.s.top}vh`,
    left: `${props.s.left}vw`,
  },
}))<Attrs>`
  position: absolute;
  ${breakPointT} {
    height: calc(${squareUnitT} * ${props => props.s.size});
    width: calc(${squareUnitT} * ${props => props.s.size});
  }
  ${breakPointD} {
    height: calc(${squareUnit} * ${props => props.s.size});
    width: calc(${squareUnit} * ${props => props.s.size});
  }
`

export const SStarContainer = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: fixed;
`
