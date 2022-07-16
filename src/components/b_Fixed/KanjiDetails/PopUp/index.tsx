import React from "react"

import { useAppSelector } from "src/store"
import { SWrapper, SBackgroundColor } from "./style"
import { AnimatePresence } from "src/models/basics"

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
    <AnimatePresence exitBeforeEnter={true}>
      {isVisible && (
        <SWrapper
          variants={variants}
          initial="initial"
          animate="animate"
          exit="initial"
        >
          <SBackgroundColor style={{ border: `2px solid ${colorMainL1}` }}>
            {text}
          </SBackgroundColor>
        </SWrapper>
      )}
    </AnimatePresence>
  )
}

export default PopUp
