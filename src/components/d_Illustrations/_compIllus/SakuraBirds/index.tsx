import React from "react"

import { SFlowers0, SFlowers1, SFlowers2 } from "./style"

interface SakuraBirdsProps {
  data: JSX.Element[][]
}

const SakuraBirds = ({ data }: SakuraBirdsProps) => {
  return (
    <>
      <SFlowers0>{data[0]}</SFlowers0>
      <SFlowers1>{data[1]}</SFlowers1>
      <SFlowers2>{data[2]}</SFlowers2>
    </>
  )
}

export default SakuraBirds
