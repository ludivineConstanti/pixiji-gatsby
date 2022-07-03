import styled from "styled-components"
import { motion } from "framer-motion"

import { zIMainSquare } from "src/styles/g"
import { tMSquareInfos, tMSquareKanji } from "src/styles/typo"

interface Attrs {
  s: {
    position: string
    color: string
    columnStart: number
    rowStart: number
    size: number
  }
}

export default styled(motion.div).attrs<Attrs>(props => ({
  style: {
    transformOrigin: props.s.position,
    backgroundColor: props.s.color,
    gridColumnStart: props.s.columnStart,
    gridRowStart: props.s.rowStart,
    gridColumnEnd: `span ${props.s.size}`,
    gridRowEnd: `span ${props.s.size}`,
  },
}))<Attrs>`
  z-index: ${zIMainSquare};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
`

const textHidden = `
  display: none;
  opacity: 0;
`

export const SInfos = styled(motion.span)`
  ${tMSquareInfos}
  ${textHidden}
  text-align: center;
`

export const SKanji = styled(motion.span)`
  ${tMSquareKanji}
`
