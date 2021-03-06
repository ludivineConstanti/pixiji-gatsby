import React from "react"

import Stars from "src/components/d_Illustrations/_elements/Stars"
import { orangeL2 } from "src/components/d_Illustrations/_data/cloudDragon"
import { SCloudTop, SDragon, SCloudDragon, SCloudBL, SCloudBR } from "./style"

interface CloudDragonProps {
  data: JSX.Element[][]
}

const CloudDragon = ({ data }: CloudDragonProps) => (
  <>
    <Stars color={orangeL2} />
    <SCloudTop>{data[0]}</SCloudTop>
    <SDragon>{data[1]}</SDragon>
    <SCloudDragon>{data[2]}</SCloudDragon>
    <SCloudBL>{data[3]}</SCloudBL>
    <SCloudBR>{data[4]}</SCloudBR>
  </>
)

export default CloudDragon
