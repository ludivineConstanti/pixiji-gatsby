import React from "react"
import PropTypes from "prop-types"

import { SButton, SLink } from "./SButton"
import { strokeWidth } from "src/styles/g"

const vLink = {
  initial: {
    x: 500,
    width: "0%",
    padding: 0,
    border: "0px solid #FFF",
  },
  animate: {
    x: 0,
    width: "100%",
    padding: "24px",
    border: `${strokeWidth} solid #FFF`,
    transition: { delay: 0.3 },
  },
  exit: {
    x: -250,
    width: "0%",
    padding: 0,
    border: "0px solid #FFF",
  },
}

const ButtonWrapper = ({ buttonType, path, children }) => {
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
}

export default ButtonWrapper
