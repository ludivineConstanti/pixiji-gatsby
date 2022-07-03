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
      <>
        {text.map((element, i) => (
          <Text key={`textWithTitlePElement${i}`}>
            {typeof element === "object" ? (
              <>
                {element.text}{" "}
                <SLink href={element.path} target="_blank" rel="noreferrer">
                  {element.link}
                </SLink>
              </>
            ) : (
              element
            )}
          </Text>
        ))}
      </>
      {button && <ButtonInText text={button.text} path={button.path} />}
      {children}
    </TextWrapper>
  )
}

// == Export
export default TextWithTitle
