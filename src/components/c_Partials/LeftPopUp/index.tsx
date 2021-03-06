import React from "react"
import { CSSProp } from "styled-components"

import { AnimatePresence } from "src/models/basics"
import SWrapper, { SContent, variants } from "./style"

interface LeftPopUpProps {
  children: JSX.Element
  isShowing: boolean
  visibleChild?: JSX.Element
  customStyle?: CSSProp
  onWheel?: (e: React.WheelEvent) => void
  setRef?: (e: HTMLElement) => void
}

const LeftPopUp = ({
  children,
  isShowing,
  visibleChild = null,
  customStyle = "",
  onWheel,
  setRef,
}: LeftPopUpProps) => {
  return (
    <SWrapper
      onWheel={e => {
        if (onWheel) {
          onWheel(e)
        }
      }}
    >
      <AnimatePresence exitBeforeEnter={true}>
        {isShowing && (
          <SContent
            variants={variants}
            initial="initial"
            animate="animate"
            exit="initial"
            s={{ customStyle }}
            ref={e => {
              if (setRef) {
                setRef(e)
              }
            }}
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
