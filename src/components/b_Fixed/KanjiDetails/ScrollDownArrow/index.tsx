import React from "react"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"

import { useAppSelector } from "src/store"
import { buttonArrowHT, buttonArrowHX } from "src/styles/animation"
import Arrow from "src/components/e_interactives/arrow"

const MArrow = motion(Arrow)

const offsetHeight = 500

const Wrapper = styled(motion.div)`
  width: 100%;
  position: absolute;
  bottom: -${offsetHeight}px;
  left: 0;
  display: flex;
  flex-direction: column;
  &:hover {
    cursor: pointer;
  }
`

const WrapperArrow = styled.div`
  padding: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
`

const BackgroundColor = styled.div`
  width: 100%;
  height: ${offsetHeight}px;
  position: relative;
  top: -5px;
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
  wrapperRef: HTMLElement
}

const ScrollDownArrow = ({ isVisible, wrapperRef }: ScrollDownArrowProps) => {
  const colorMainL1 = useAppSelector(state => state.global.color.lighter)
  return (
    <AnimatePresence exitBeforeEnter>
      {isVisible && (
        <Wrapper
          variants={variants}
          initial="initial"
          animate="animate"
          exit="initial"
          whileHover="whileHover"
          onClick={() => {
            if (wrapperRef) {
              console.log(
                wrapperRef,
                wrapperRef.scrollTop,
                wrapperRef.scrollHeight,
                wrapperRef.clientHeight,
                wrapperRef.clientWidth
              )
              wrapperRef.scrollTop = 100
              // window.scrollTo({ top: ref.scrollHeight })
              // ref.scrollTop(() => ref.scrollHeight)
            }
          }}
        >
          <WrapperArrow style={{ backgroundColor: colorMainL1 }}>
            <MArrow variants={vArrow} isWhite={true} pointsToward="bottom" />
            <span id="wrapper-bottom" />
          </WrapperArrow>
          <BackgroundColor style={{ backgroundColor: colorMainL1 }} />
        </Wrapper>
      )}
    </AnimatePresence>
  )
}

export default ScrollDownArrow
