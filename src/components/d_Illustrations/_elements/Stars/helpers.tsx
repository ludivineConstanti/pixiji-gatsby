import React from "react"
import { useTransform, MotionValue } from "framer-motion"

import { SStar } from "./style"

export const createStar = (
  array: JSX.Element[],
  size: number,
  variants,
  key: string,
  color: string
) => {
  const top = Math.random() * 95
  const left = Math.random() * 95
  array.push(
    <SStar
      s={{
        size,
        color,
        top,
        left,
      }}
      variants={variants}
      key={key}
    />
  )
}

export const createVStar = (
  scaleArr: [number, number],
  colorArr: [string, string],
  mass: number
) => ({
  init: { scale: 0 },
  animate: {
    scale: scaleArr,
    backgroundColor: colorArr,
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      mass,
    },
  },
})

export const useCreateTranslate = (
  xOrY: MotionValue<number>,
  heightOrWidth: number,
  val: number
) => useTransform(xOrY, [0, heightOrWidth], [val, -val])
