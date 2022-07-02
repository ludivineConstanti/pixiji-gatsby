import React, { memo } from "react"

import ButtonBig from "src/components/e_Interactives/ButtonBig"
import TextWithTitle from "src/components/c_Partials/TextWithTitle"
import Illu from "src/components/d_Illustrations/Illu"
import { IlluProps } from "src/models/models"

interface PageWithTextProps {
  illu: IlluProps
  textWithTitle: {
    title: string
    text: (string | { text: string; link: string; path: string })[]
  }
  buttonBig: { text: string; path: string }
  children?: JSX.Element | JSX.Element[]
}

const PageWithText = ({
  illu,
  textWithTitle,
  buttonBig,
  children,
}: PageWithTextProps) => (
  <>
    <Illu
      kanjisArr={illu.kanjisArr}
      renderIllu={illu.renderIllu}
      arrDataIllu={illu.arrDataIllu}
    />
    <TextWithTitle title={textWithTitle.title} text={textWithTitle.text}>
      {children}
    </TextWithTitle>
    <ButtonBig text={buttonBig.text} path={buttonBig.path || ""} />
  </>
)

export default memo(PageWithText)
