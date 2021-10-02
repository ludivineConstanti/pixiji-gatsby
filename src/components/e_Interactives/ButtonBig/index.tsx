import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

import Arrow from "src/components/e_Interactives/Arrow"
import { buttonArrowHT, buttonArrowHX } from "src/styles/animation"
import SButtonBig, { SButton, SComment, SText } from "./SButtonBig"
import { useAppSelector } from "src/store"

const MArrow = motion(Arrow)

interface ButtonBigProps {
  comment?: string
  text: string
  onClick?: () => void
  colorButton?: string
  side?: "left" | "right"
  path?: string
  arrowDirection?: "left" | "right"
}

const ButtonBig = ({
  comment = "",
  text,
  onClick = () => {},
  colorButton = "white",
  side = "left",
  path = "",
  arrowDirection = "right",
}: ButtonBigProps) => {
  const colorMain = useAppSelector(state => state.global.color.main)

  const vButtonBig = {
    initial: { [side]: -200, color: "#FFF", transition: { duration: 0.25 } },
    animate: { [side]: 0, color: colorMain, transition: { duration: 0.25 } },
  }

  const vArrow = {
    initial: { borderStyle: "none" },
    animate: { borderStyle: "solid" },
    exit: { borderStyle: "none" },
    whileHover: {
      x: arrowDirection === "right" ? buttonArrowHX : -buttonArrowHX,
      transition: buttonArrowHT,
    },
  }

  const content = (
    <SButtonBig
      variants={vButtonBig}
      initial="initial"
      animate="animate"
      exit="initial"
      whileHover="whileHover"
      s={{ colorButton }}
    >
      <SComment>{comment}</SComment>
      <SText>{text}</SText>
      <MArrow
        variants={vArrow}
        pointsToward={arrowDirection}
        isWhite={colorButton !== "white"}
      />
    </SButtonBig>
  )

  return (
    <>
      {path ? (
        <Link to={path} aria-label={text}>
          {content}
        </Link>
      ) : (
        <SButton onClick={onClick} type="button" s={{ side }} aria-label={text}>
          {content}
        </SButton>
      )}
    </>
  )
}

// == Export
export default ButtonBig
