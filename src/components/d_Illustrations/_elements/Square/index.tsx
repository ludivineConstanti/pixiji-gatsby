import React, { memo } from "react"

import SSquare from "./SSquare"
import { iVSquare } from "./animation"

interface SquareProps {
  size: number
  columnStart: number
  rowStart: number
  color: string
  kanjiIndex: number
  kanjisArrLength: number
}

const Square = ({
  size,
  columnStart,
  rowStart,
  color,
  kanjiIndex,
  kanjisArrLength,
}: SquareProps) => (
  <SSquare
    s={{
      color,
      size,
      columnStart,
      rowStart,
    }}
    variants={iVSquare}
    initial="initial"
    animate={kanjisArrLength > kanjiIndex ? "animateOn" : "animateOff"}
    whileHover={kanjisArrLength > kanjiIndex ? "whileHoverOn" : "whileHoverOff"}
    exit="initial"
  />
)

export default memo(Square)
