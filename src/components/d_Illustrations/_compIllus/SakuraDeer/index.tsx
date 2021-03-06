import React from "react"

import IlluGround from "src/components/d_Illustrations/_elements/IlluGround"
import IlluDecoOnGround from "src/components/d_Illustrations/_elements/IlluDecoOnGround"
import { STree0, STree1, STree2P1, STree2P2, SDeer } from "./style"

interface SakuraDeerProps {
  data: JSX.Element[][]
  kanjis: number
  numKanjis: number[]
}

const SakuraDeer = ({ data, kanjis, numKanjis }: SakuraDeerProps) => {
  const trunkColor = "#510909"
  return (
    <>
      <IlluGround color="#9B3471" />
      <IlluDecoOnGround
        color={trunkColor}
        side="right"
        margin={[46]}
        width={2}
        height={10}
        touchGround={true}
        kanjis={kanjis}
        isOnNum={numKanjis[0]}
      />
      <STree0>{data[0]}</STree0>
      <IlluDecoOnGround
        color={trunkColor}
        side="right"
        margin={[38]}
        width={2}
        height={20}
        touchGround={true}
        kanjis={kanjis}
        isOnNum={numKanjis[1]}
      />
      <STree1>{data[1]}</STree1>
      <IlluDecoOnGround
        color={trunkColor}
        side="right"
        margin={[8]}
        width={2}
        height={25}
        touchGround={true}
        kanjis={kanjis}
        isOnNum={numKanjis[3]}
      />
      <STree2P1>{data[2]}</STree2P1>
      <STree2P2>{data[3]}</STree2P2>
      <SDeer>{data[4]}</SDeer>
    </>
  )
}

export default SakuraDeer
