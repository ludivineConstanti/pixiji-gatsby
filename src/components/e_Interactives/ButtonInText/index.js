import React from "react"
import PropTypes from "prop-types"
import { motion } from "framer-motion"

import Arrow from "src/components/e_Interactives/Arrow"
import { tBInTFontSize, tBInTLetterSpacing } from "src/styles/typo"
import { buttonArrowHT, buttonArrowHX } from "src/styles/animation"
import { SText } from "./SButtonInText"
import ButtonWrapper from "./ButtonWrapper"

const vText = {
  initial: { fontSize: 0, letterSpacing: 0 },
  animate: {
    fontSize: tBInTFontSize,
    letterSpacing: `${tBInTLetterSpacing}px`,
    transition: { delay: 0.15 },
  },
  exit: {
    fontSize: 0,
    letterSpacing: 0,
    transition: { delay: 0.15, duration: 0.15 },
  },
  whileHover: {
    x: -buttonArrowHX,
    letterSpacing: `${tBInTLetterSpacing + 1}px`,
    transition: buttonArrowHT,
  },
}

const MArrow = motion(Arrow)

const vArrow = {
  whileHover: {
    x: -buttonArrowHX,
    transition: buttonArrowHT,
  },
}

const ButtonInText = ({ text, path, buttonType }) => {
  return (
    <ButtonWrapper buttonType={buttonType} path={path}>
      <SText variants={vText}>{text}</SText>
      <MArrow variants={vArrow} isWhite />
    </ButtonWrapper>
  )
}

ButtonInText.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string,
  buttonType: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
}

ButtonInText.defaultProps = {
  buttonType: false,
  path: "",
}

export default ButtonInText
