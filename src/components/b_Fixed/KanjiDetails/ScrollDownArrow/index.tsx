import React from "react"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"

import { useAppSelector } from "src/store"
import { buttonWidth } from "src/styles/g"
import { Subtitle } from "../style"
import { buttonArrowHT, buttonArrowHX } from "src/styles/animation"
import Arrow from "src/components/e_interactives/arrow"

const MArrow = motion(Arrow)

const Wrapper = styled(motion.div)`
  height: ${buttonWidth};
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`

const Text = styled(Subtitle)`
  color: white;
`

const vArrow = {
  initial: { borderStyle: "none" },
  animate: { borderStyle: "solid" },
  exit: { borderStyle: "none" },
  whileHover: {
    y: buttonArrowHX,
    transition: buttonArrowHT,
  },
}

const variants = {
  initial: { y: 250, opacity: 0 },
  animate: { y: 0, opacity: 1 },
}

interface ScrollDownArrowProps {
  isVisible: boolean
  onClick: () => void
}

const ScrollDownArrow = ({ isVisible, onClick }: ScrollDownArrowProps) => {
  const colorMainL1 = useAppSelector(state => state.global.color.lighter)
  return (
    <AnimatePresence exitBeforeEnter>
      {isVisible && (
        <Wrapper
          onClick={onClick}
          style={{ backgroundColor: colorMainL1 }}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="initial"
          whileHover="whileHover"
        >
          <Text>Scroll down</Text>
          <MArrow variants={vArrow} isWhite={true} pointsToward="bottom" />
          <span id="wrapper-bottom" />
        </Wrapper>
      )}
    </AnimatePresence>
  )
}

export default ScrollDownArrow
