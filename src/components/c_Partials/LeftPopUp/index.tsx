import React from "react"
import { CSSProp } from "styled-components"
import { AnimatePresence } from "framer-motion"

import SWrapper, { SContent, variants } from "./style"

interface LeftPopUpProps {
  children: JSX.Element
  isShowing: boolean
  visibleChild?: JSX.Element
  customStyle?: CSSProp
}

const LeftPopUp = ({
  children,
  isShowing,
  visibleChild = <></>,
  customStyle = "",
}: LeftPopUpProps) => {
  return (
    <SWrapper>
      <AnimatePresence exitBeforeEnter>
        {isShowing && (
          <SContent
            variants={variants}
            initial="initial"
            animate="animate"
            exit="initial"
            s={{ customStyle }}
          >
            {children}
          </SContent>
        )}
      </AnimatePresence>
      {visibleChild}
    </SWrapper>
  )
}

export default LeftPopUp
