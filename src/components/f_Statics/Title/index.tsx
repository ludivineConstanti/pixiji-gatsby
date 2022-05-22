import React from "react"

import STitle, { SSquareTitle } from "./style"

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

interface TitleProps {
  text: string
}

const Title = ({ text }: TitleProps) => {
  return (
    <STitle variants={vTitle}>
      <SSquareTitle variants={vSquareTitle} />
      {text}
    </STitle>
  )
}

export default Title
