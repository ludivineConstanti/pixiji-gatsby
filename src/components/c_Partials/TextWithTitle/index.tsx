import React from "react"

import ButtonInText from "src/components/e_Interactives/ButtonInText"
import Title from "src/components/f_Statics/Title"
import TextWrapper from "src/components/f_Statics/TextWrapper"
import { SLink } from "./style"
import Text from "src/components/f_Statics/Text"

interface TextWithTitleProps {
  title: string
  text: (string | { text: string; link: string; path: string })[]
  button?: false | { text: string; path: string }
  children?: JSX.Element
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
        <Text key={`textWithTitlePElement${i}`}>
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
        </Text>
      ))}
      {button && <ButtonInText text={button.text} path={button.path} />}
      {children}
    </TextWrapper>
  )
}

// == Export
export default TextWithTitle
