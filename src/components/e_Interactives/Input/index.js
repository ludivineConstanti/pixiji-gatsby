import React from "react"
import PropTypes from "prop-types"

import SInput, { SLabel } from "./SInput"

const Input = ({ isLast, placeholder, type, label }) => (
  <>
    <SLabel>{label}:</SLabel>
    <SInput type={type} placeholder={placeholder} s={{ isLast }} />
  </>
)

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  isLast: PropTypes.bool,
  type: PropTypes.string,
}

Input.defaultProps = {
  isLast: false,
  type: "text",
}

export default Input
