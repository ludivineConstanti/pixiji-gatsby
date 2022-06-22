import React from "react"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"

import { sidePadding } from "../basics"
import { useAppSelector } from "src/store"

const Wrapper = styled(motion.div)`
  position: absolute;
  line-height: 20px;
  font-size: 15px;
  margin-right: ${sidePadding}px;
  transform-origin: top left;
`

const BackgroundColor = styled.div`
  padding: ${sidePadding}px;
  background-color: white;
`

const variants = {
  initial: { transform: "scale(0) translate(0, -100%)" },
  animate: { transform: "scale(1) translate(0, -100%)" },
}

interface PopUpProps {
  text: string
  isVisible: boolean
}

const PopUp = ({ text, isVisible }: PopUpProps) => {
  const colorMainL1 = useAppSelector(state => state.global.color.lighter)
  return (
    <AnimatePresence exitBeforeEnter>
      {isVisible && (
        <Wrapper
          variants={variants}
          initial="initial"
          animate="animate"
          exit="initial"
        >
          <BackgroundColor style={{ border: `2px solid ${colorMainL1}` }}>
            {text}
          </BackgroundColor>
        </Wrapper>
      )}
    </AnimatePresence>
  )
}

export default PopUp
