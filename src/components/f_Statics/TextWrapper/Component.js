import React from "react"
import PropTypes from "prop-types"

import STextWrapper, { SBackgroundColor } from "./STextWrapper"
import { vBackgroundText } from "src/styles/animation"

const TextWrapper = ({ colorMain, children }) => {
  return (
    <STextWrapper initial="initial" animate="animate" exit="exit">
      {children}
      <SBackgroundColor s={{ colorMain }} variants={vBackgroundText} />
    </STextWrapper>
  )
}

TextWrapper.propTypes = {
  colorMain: PropTypes.string.isRequired,
}

export default TextWrapper
