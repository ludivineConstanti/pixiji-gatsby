import styled from "styled-components"
import { motion } from "framer-motion"

interface Attrs {
  s: { color: string; columnStart: number; rowStart: number; size: number }
}

export default styled(motion.div).attrs<Attrs>(props => ({
  style: {
    backgroundColor: props.s.color,
    gridColumnStart: props.s.columnStart,
    gridRowStart: props.s.rowStart,
    gridColumnEnd: `span ${props.s.size}`,
    gridRowEnd: `span ${props.s.size}`,
  },
}))<Attrs>``
