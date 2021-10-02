import React from "react"

import SIlluDecoOnGround from "./SIlluDecoOnGround"

interface IlluOnGroundProps {
  color: string
  side: "right" | "left"
  margin: number[]
  width: number
  height: number
  touchGround?: boolean
  isOnNum: number
  kanjis: number
}

const IlluOnGround = ({
  color,
  side,
  margin,
  width,
  height,
  touchGround = false,
  isOnNum,
  kanjis,
}: IlluOnGroundProps) => {
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

export default IlluOnGround
