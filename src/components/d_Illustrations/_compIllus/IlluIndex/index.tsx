import React, { memo } from "react"

import RabbitOnMoon from "src/components/d_Illustrations/_compIllus/RabbitOnMoon"
import SnowMonkeys from "src/components/d_Illustrations/_compIllus/SnowMonkeys"
import CraneSunset from "src/components/d_Illustrations/_compIllus/CraneSunset"
import SakuraDeer from "src/components/d_Illustrations/_compIllus/SakuraDeer"
import SakuraBirds from "src/components/d_Illustrations/_compIllus/SakuraBirds"
import RedPanda from "src/components/d_Illustrations/_compIllus/RedPanda"
import KaguyaHime from "src/components/d_Illustrations/_compIllus/KaguyaHime"
import KodomoNoHi from "src/components/d_Illustrations/_compIllus/KodomoNoHi"
import CloudDragon from "src/components/d_Illustrations/_compIllus/CloudDragon"

interface IlluIndexProps {
  useCase: string
  kanjis: number
  index?: number
  data: JSX.Element[][]
  arrNumKanjis: number[]
}

const IlluIndex = ({
  useCase,
  index = 0,
  data,
  kanjis,
  arrNumKanjis,
}: IlluIndexProps) => {
  // naming with useCase and index is also used in the dataIndex in _data
  const illuObj = {
    home0: (
      <RabbitOnMoon
        data={data}
        kanjis={kanjis}
        totalKanjis={arrNumKanjis[arrNumKanjis.length - 1]}
      />
    ),
    readMe0: (
      <KodomoNoHi data={data} kanjis={kanjis} numKanjis={arrNumKanjis} />
    ),
    about0: (
      <KaguyaHime
        data={data}
        kanjis={kanjis}
        totalKanjis={arrNumKanjis[arrNumKanjis.length - 1]}
      />
    ),
    register0: <SakuraBirds data={data} />,
    login0: <RedPanda data={data} />,
    error4040: (
      <CloudDragon
        data={data}
        kanjis={kanjis}
        totalKanjis={arrNumKanjis[arrNumKanjis.length - 1]}
      />
    ),
    // tried with an array but didn't work, always returned the last element
    quiz0: <SnowMonkeys data={data} />,
    quiz1: <CraneSunset data={data} kanjis={kanjis} numKanjis={arrNumKanjis} />,
    quiz2: <SakuraDeer data={data} kanjis={kanjis} numKanjis={arrNumKanjis} />,
  }
  return illuObj[`${useCase}${index}`]
}

export default memo(IlluIndex)
