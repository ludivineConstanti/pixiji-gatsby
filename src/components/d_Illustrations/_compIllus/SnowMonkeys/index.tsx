import React from "react"

import IlluGround from "src/components/d_Illustrations/_elements/IlluGround"
import { SMonkeyLeft, SMonkeyRight, SRocks } from "./style"

interface SnowMonkeysProps {
  data: JSX.Element[][]
}

const SnowMonkeys = ({ data }: SnowMonkeysProps) => (
  <>
    <IlluGround color="#80ACAC" />
    <SMonkeyLeft>{data[0]}</SMonkeyLeft>
    <SMonkeyRight>{data[1]}</SMonkeyRight>
    <SRocks>{data[2]}</SRocks>
  </>
)

export default SnowMonkeys
