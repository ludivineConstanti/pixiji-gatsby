import React, { useEffect, useState } from "react"

import SProgressSquare from "./SProgressSquare"

interface ProgressSquareProps {
  squareNum: number
  currentQuestion: number
}

const ProgressSquare = ({
  squareNum,
  currentQuestion,
}: ProgressSquareProps) => {
  const [vProgressSquare, setVProgressSquare] = useState({
    initial: { scale: 0, margin: 0 },
    animate: { scale: 1, margin: "4px 16px" },
  })

  // animate when the question number changes
  useEffect(() => {
    if (squareNum === currentQuestion) {
      setVProgressSquare({
        ...vProgressSquare,
        animate: { ...vProgressSquare.animate, scale: 2 },
      })
    } else if (squareNum === currentQuestion - 1) {
      setVProgressSquare({
        ...vProgressSquare,
        animate: { ...vProgressSquare.animate, scale: 1 },
      })
    }
  }, [currentQuestion])

  return (
    <SProgressSquare
      s={{ isDone: squareNum <= currentQuestion }}
      variants={vProgressSquare}
      initial="initial"
      animate="animate"
      exit="initial"
    />
  )
}

export default ProgressSquare
