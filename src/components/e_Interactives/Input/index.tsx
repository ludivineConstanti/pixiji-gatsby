import React from "react"

import SInput, { SLabel, vInput, vLabel } from "./style"

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
    <SLabel
      variants={vLabel}
      initial="initial"
      animate="animate"
      exit="exit"
      htmlFor={label}
    >
      {label}:
    </SLabel>
    <SInput
      variants={vInput}
      initial="initial"
      animate="animate"
      exit="exit"
      type={type}
      placeholder={placeholder}
      s={{ isLast }}
      id={label}
    />
  </>
)

export default Input
