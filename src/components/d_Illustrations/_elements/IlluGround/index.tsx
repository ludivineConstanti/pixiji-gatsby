import React from "react"

import SIlluGround from "./style"

interface CraneSunsetProps {
  color: string
}

const CraneSunset = ({ color }: CraneSunsetProps) => {
  const vIlluGround = {
    initial: { width: "0vw" },
    animate: { width: "100%" },
  }
  return (
    <SIlluGround
      s={{ color }}
      variants={vIlluGround}
      initial="initial"
      animate="animate"
      exit="initial"
    />
  )
}

export default CraneSunset
