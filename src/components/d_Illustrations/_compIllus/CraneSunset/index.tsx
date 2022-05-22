import React from "react"

import IlluGround from "src/components/d_Illustrations/_elements/IlluGround"
import {
  SSun,
  SCloudLeft,
  SCloudRight,
  SRockLeft,
  SBaby,
  SAdult,
  SRockRight,
} from "./style"

interface CraneSunsetProps {
  data: JSX.Element[][]
}

const CraneSunset = ({ data }: CraneSunsetProps) => (
  <>
    <SSun>{data[0]}</SSun>
    <SCloudLeft>{data[1]}</SCloudLeft>
    <SCloudRight>{data[2]}</SCloudRight>
    <SRockLeft>{data[3]}</SRockLeft>
    <SBaby>{data[4]}</SBaby>
    <SAdult>{data[5]}</SAdult>
    <SRockRight>{data[6]}</SRockRight>
    <IlluGround color="#398084" />
  </>
)

export default CraneSunset
