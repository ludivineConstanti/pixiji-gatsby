import React from "react"
import PropTypes from "prop-types"

import { SButton, SLink } from "./SButton"
import { strokeWidth } from "src/styles/g"

const ButtonWrapper = ({ buttonType, path, size, children }) => {
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
      border: `${strokeWidth} solid rgba(255, 255, 255, 1)`,
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
      {buttonType ? (
        <SButton
          type={buttonType}
          variants={vLink}
          initial="initial"
          animate="animate"
          exit="exit"
          whileHover="whileHover"
          s={{ size }}
        >
          {children}
        </SButton>
      ) : (
        <SLink
          to={path}
          variants={vLink}
          initial="initial"
          animate="animate"
          exit="exit"
          whileHover="whileHover"
          s={{ size }}
        >
          {children}
        </SLink>
      )}
    </>
  )
}

ButtonWrapper.propTypes = {
  buttonType: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
    .isRequired,
  path: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
}

export default ButtonWrapper
