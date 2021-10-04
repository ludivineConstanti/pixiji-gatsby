import React from "react"

import {
  SSeaweedSmall,
  SSeaweedBig,
  SSeaTurtleSmall,
  SSeaTurtleBig,
} from "./SSeaTurtles"

interface SSeaTurtlesProps {
  data: JSX.Element[][]
}

const SeaTurtles = ({ data }: SSeaTurtlesProps) => {
  return (
    <>
      <SSeaweedSmall>{data[0]}</SSeaweedSmall>
      <SSeaweedBig>{data[1]}</SSeaweedBig>
      <SSeaTurtleSmall>{data[2]}</SSeaTurtleSmall>
      <SSeaTurtleBig>{data[3]}</SSeaTurtleBig>
    </>
  )
}

export default SeaTurtles
