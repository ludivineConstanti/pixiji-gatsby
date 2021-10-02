import React from "react"

import SInput, { SLabel } from "./SInput"

interface InputProps {
  isLast?: boolean
  placeholder: string
  type?: "text" | "email" | "password"
  label: string
}

const Input = ({
  isLast = false,
  placeholder,
  type = "text",
  label,
}: InputProps) => (
  <>
    <SLabel htmlFor={label}>{label}:</SLabel>
    <SInput type={type} placeholder={placeholder} s={{ isLast }} id={label} />
  </>
)

export default Input
