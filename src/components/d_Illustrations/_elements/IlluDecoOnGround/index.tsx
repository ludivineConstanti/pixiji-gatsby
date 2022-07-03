import React from "react"

import SIlluDecoOnGround from "./style"

interface IlluDecoOnGroundProps {
  color: string
  side: "right" | "left"
  margin: (number | string)[]
  width: number
  height: number
  touchGround?: boolean
  isOnNum: number
  kanjis: number
}

const IlluDecoOnGround = ({
  color,
  side,
  margin,
  width,
  height,
  touchGround = false,
  isOnNum,
  kanjis,
}: IlluDecoOnGroundProps) => {
  const vIlluDecoOnGround = {
    initial: { scaleX: 0 },
    animateOn: { scaleX: 1 },
  }

  return (
    <SIlluDecoOnGround
      s={{
        color,
        side,
        margin,
        height,
        touchGround,
        width,
      }}
      variants={vIlluDecoOnGround}
      initial="initial"
      animate={isOnNum <= kanjis ? "animateOn" : "animateOff"}
      exit="initial"
    />
  )
}

export default IlluDecoOnGround
