import React from "react"

import Stars from "src/components/d_Illustrations/_elements/Stars"
import IlluGround from "src/components/d_Illustrations/_elements/IlluGround"
import IlluDecoOnGround from "src/components/d_Illustrations/_elements/IlluDecoOnGround"
import { vBackgroundText } from "src/styles/animation"
import { colorMoon } from "src/components/d_Illustrations/_data/kaguyaHime"
import {
  bambooColors,
  SMoon,
  SHime,
  bSettings,
  SBackgroundColor,
} from "./style"

interface KaguyaHimeProps {
  data: JSX.Element[][]
  kanjis: number
  totalKanjis: number
}

const KaguyaHime = ({ data, kanjis, totalKanjis }: KaguyaHimeProps) => (
  <>
    <Stars color={colorMoon} />
    <IlluGround color={bambooColors[2]} />
    {bSettings.map((bamboo, i) => (
      <IlluDecoOnGround
        key={`bamboo${i}`}
        color={bamboo.color}
        side={bamboo.side}
        margin={[bamboo.margin]}
        width={2}
        touchGround={true}
        height={100}
        kanjis={kanjis}
        isOnNum={totalKanjis}
      />
    ))}
    <SMoon>{data[0]}</SMoon>
    <SHime>{data[1]}</SHime>
    <SBackgroundColor
      variants={vBackgroundText}
      initial="initial"
      animate="animate"
      exit="exit"
    />
  </>
)

export default KaguyaHime
