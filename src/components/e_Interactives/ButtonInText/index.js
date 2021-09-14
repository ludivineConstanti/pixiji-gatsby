import React from "react"
import PropTypes from "prop-types"
import { motion } from "framer-motion"

import Arrow from "src/components/e_Interactives/Arrow"
import {
  tBInTFontSize,
  tbInTSmallFontSize,
  tBInTLetterSpacing,
} from "src/styles/typo"
import { buttonArrowHT, buttonArrowHX } from "src/styles/animation"
import { SText } from "./SButtonInText"
import ButtonWrapper from "./ButtonWrapper"

const MArrow = motion(Arrow)

const vArrow = {
  whileHover: {
    x: -buttonArrowHX,
    transition: buttonArrowHT,
  },
}

const ButtonInText = ({ text, path, buttonType, size }) => {
  const vText = {
    initial: { fontSize: 0, letterSpacing: 0 },
    animate: {
      fontSize: size === "small" ? tbInTSmallFontSize : tBInTFontSize,
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
  return (
    <ButtonWrapper buttonType={buttonType} path={path} size={size}>
      <SText variants={vText} s={{ size }}>
        {text}
      </SText>
      <MArrow variants={vArrow} isWhite size={size} />
    </ButtonWrapper>
  )
}

ButtonInText.propTypes = {
  text: PropTypes.string.isRequired,
  buttonType: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  path: PropTypes.string,
  size: PropTypes.string,
}

ButtonInText.defaultProps = {
  buttonType: false,
  path: "",
  size: "",
}

export default ButtonInText
