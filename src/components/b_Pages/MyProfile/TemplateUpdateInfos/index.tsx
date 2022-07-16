import React from "react"

import ButtonBig from "src/components/e_Interactives/ButtonBig"
import TextWrapper from "src/components/f_Statics/TextWrapper"
import { uiStateOptions } from "../basics"

interface TemplateUpdateInfosProps {
  setUiState: (uiState: uiStateOptions) => void
  children: JSX.Element | JSX.Element[]
}

const TemplateUpdateInfos = ({
  setUiState,
  children,
}: TemplateUpdateInfosProps) => {
  return (
    <>
      <TextWrapper>{children}</TextWrapper>
      <ButtonBig
        text="Back"
        arrowDirection="left"
        onClick={() => {
          setUiState(uiStateOptions.default)
        }}
      />
    </>
  )
}

export default TemplateUpdateInfos
