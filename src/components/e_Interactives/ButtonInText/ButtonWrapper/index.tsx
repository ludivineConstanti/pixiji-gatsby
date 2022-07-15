import React from "react"

import { SButton, SLink } from "./SButton"
import { strokeWidth } from "src/styles/g"
import { sizeProp } from "../_common"

interface ButtonWrapperProps {
  children: JSX.Element | JSX.Element[]
  path?: string
  size?: sizeProp
  onClick?: () => void
}

const ButtonWrapper = ({
  path,
  size,
  children,
  onClick,
}: ButtonWrapperProps) => {
  const vLink = {
    initial: {
      x: 500,
      width: "0%",
      padding: 0,
      border: "0px solid #FFF",
    },
    animate: {
      x: 0,
      width: size === "small" ? "160px" : "100%",
      padding: size === "small" ? "8px" : "24px",
      border: `${strokeWidth}px solid rgba(255, 255, 255, 1)`,
      transition: { delay: 0.3 },
    },
    exit: {
      x: -250,
      width: "0%",
      padding: 0,
      border: "0px solid #FFF",
    },
  }
  return (
    <>
      {path ? (
        <SLink
          to={path}
          variants={vLink}
          initial="initial"
          animate="animate"
          exit="exit"
          whileHover="whileHover"
          s={{ size }}
          onClick={onClick}
        >
          {children}
        </SLink>
      ) : (
        <SButton
          type="submit"
          variants={vLink}
          initial="initial"
          animate="animate"
          exit="exit"
          whileHover="whileHover"
          s={{ size }}
          onClick={onClick}
        >
          {children}
        </SButton>
      )}
    </>
  )
}

export default ButtonWrapper
