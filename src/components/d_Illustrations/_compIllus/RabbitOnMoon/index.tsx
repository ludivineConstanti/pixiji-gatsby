import React from "react"

import { SPlanet, SRabbit, SMoon } from "./style"
import Stars from "src/components/d_Illustrations/_elements/Stars"

interface RabbitOnMoonProps {
  data: JSX.Element[][]
}

const RabbitOnMoon = ({ data }: RabbitOnMoonProps) => (
  <>
    <Stars color="#FFF8BB" />
    <SPlanet height={10} width={10}>
      {data[0]}
    </SPlanet>
    <SRabbit>{data[1]}</SRabbit>
    <SMoon>{data[2]}</SMoon>
  </>
)

export default RabbitOnMoon
