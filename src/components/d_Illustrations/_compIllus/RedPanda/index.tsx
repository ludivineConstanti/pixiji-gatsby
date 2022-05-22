import React, { memo } from "react"

import { SRedPanda } from "./style"
import Stars from "src/components/d_Illustrations/_elements/Stars"

interface RedPandaProps {
  data: JSX.Element[][]
}

const RedPanda = ({ data }: RedPandaProps) => {
  return (
    <>
      <Stars color="#FFE4DD" />
      <SRedPanda>{data[0]}</SRedPanda>
    </>
  )
}

export default memo(RedPanda)
