import React from "react"
import { motion, AnimatePresence } from "framer-motion"

import { useAppSelector } from "src/store"
import { buttonArrowHT, buttonArrowHX } from "src/styles/animation"
import Arrow from "src/components/e_interactives/Arrow"
import { SWrapper, SWrapperArrow } from "./style"

const MArrow = motion(Arrow)

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
  wrapperRef: HTMLElement
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const ScrollDownArrow = ({
  isVisible,
  wrapperRef,
  setIsVisible,
}: ScrollDownArrowProps) => {
  const colorMainL1 = useAppSelector(state => state.global.color.lighter)
  return (
    <AnimatePresence exitBeforeEnter={true}>
      {isVisible && (
        <SWrapper
          variants={variants}
          initial="initial"
          animate="animate"
          exit="initial"
          whileHover="whileHover"
          onClick={() => {
            if (wrapperRef) {
              wrapperRef.scrollTop = wrapperRef.scrollHeight
              setIsVisible(false)
            }
          }}
        >
          <SWrapperArrow style={{ backgroundColor: colorMainL1 }}>
            <MArrow variants={vArrow} isWhite={true} pointsToward="bottom" />
          </SWrapperArrow>
        </SWrapper>
      )}
    </AnimatePresence>
  )
}

export default ScrollDownArrow
