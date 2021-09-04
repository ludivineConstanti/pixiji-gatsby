import React from "react"
import PropTypes from "prop-types"

import STitle, { SSquareTitle } from "./STitle"

const vSquareTitle = {
  initial: { width: "1%", left: 0 },
  animate: {
    scaleX: [0, 100, 0],
    left: ["100%", "50%", "0%"],
    transition: {
      duration: 0.5,
    },
  },
}

const vTitle = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 0.25 } },
  exit: { opacity: 0, x: -150, transition: { duration: 0.25 } },
}

const Title = ({ text }) => {
  return (
    <STitle variants={vTitle}>
      <SSquareTitle variants={vSquareTitle} />
      {text}
    </STitle>
  )
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
}

Title.defaultProps = {}

// == Export
export default Title
