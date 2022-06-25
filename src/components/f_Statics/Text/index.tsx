import React from "react"

import { SText } from "./style"

const vText = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0, transition: { delay: 0.25 } },
  exit: { opacity: 0, x: -250, transition: { duration: 0.25 } },
}

interface TextProps {
  children?: JSX.Element | JSX.Element[] | string
}

const Text = ({ children }: TextProps) => {
  return <SText variants={vText}>{children}</SText>
}

export default Text
