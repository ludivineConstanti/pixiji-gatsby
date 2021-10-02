import React from "react"
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
import { buttonTypeProp, sizeProp } from "./_common"

const MArrow = motion(Arrow)

const vArrow = {
  whileHover: {
    x: -buttonArrowHX,
    transition: buttonArrowHT,
  },
}

interface ButtonInTextProps {
  text: string
  path?: string
  buttonType?: buttonTypeProp
  size?: sizeProp
}

const ButtonInText = ({
  text,
  path = "",
  buttonType = "",
  size = "",
}: ButtonInTextProps) => {
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

export default ButtonInText
