import React from "react"

import ButtonInText from "src/components/e_Interactives/ButtonInText"
import Title from "src/components/f_Statics/Title"
import TextWrapper from "src/components/f_Statics/TextWrapper"
import { SText, SLink } from "./STextWithTitle"

const vText = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0, transition: { delay: 0.25 } },
  exit: { opacity: 0, x: -250, transition: { duration: 0.25 } },
}

interface TextWithTitleProps {
  title: string
  text: (string | { text: string; link: string; path: string })[]
  button?: boolean | { text: string; path: string }
  children?: JSX.Element | JSX.Element[]
}

const TextWithTitle = ({
  title,
  text,
  button = false,
  children,
}: TextWithTitleProps) => {
  return (
    <TextWrapper>
      <Title text={title} />
      {text.map((e, i) => (
        <SText variants={vText} key={`textWithTitlePElement${i}`}>
          {e.text ? (
            <>
              {e.text}{" "}
              <SLink href={e.path} target="_blank" rel="noreferrer">
                {e.link}
              </SLink>
            </>
          ) : (
            e
          )}
        </SText>
      ))}
      {button && <ButtonInText text={button.text} path={button.path} />}
      {children}
    </TextWrapper>
  )
}

// == Export
export default TextWithTitle
