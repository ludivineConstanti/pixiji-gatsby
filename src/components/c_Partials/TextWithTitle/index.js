// == Import npm
import React from "react"
import PropTypes from "prop-types"

// == Import
import ButtonInText from "src/components/e_Interactives/ButtonInText"
import Title from "src/components/f_Statics/Title"
import TextWrapper from "src/components/f_Statics/TextWrapper"
import { SText, SLink } from "./STextWithTitle"

const vText = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0, transition: { delay: 0.25 } },
  exit: { opacity: 0, x: -250, transition: { duration: 0.25 } },
}

const TextWithTitle = ({ title, text, button, children }) => {
  return (
    <TextWrapper>
      <Title text={title} />
      {
        // eslint-disable-next-line react/no-array-index-key
        text.map((e, i) => (
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
        ))
      }
      {button && <ButtonInText text={button.text} path={button.path} />}
      {children}
    </TextWrapper>
  )
}

TextWithTitle.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.array.isRequired,
  button: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
}

TextWithTitle.defaultProps = {
  button: false,
}

// == Export
export default TextWithTitle
