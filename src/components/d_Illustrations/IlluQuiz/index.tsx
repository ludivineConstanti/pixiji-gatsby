import React, { memo } from "react"

import Illu from "src/components/d_Illustrations/Illu"
import {
  arrSnowMonkeys,
  colorSnowMonkeys,
} from "src/components/d_Illustrations/_data/snowMonkeys"
import SnowMonkeys from "src/components/d_Illustrations/_compIllus/SnowMonkeys"
import {
  arrCraneSunset,
  colorCraneSunset,
} from "src/components/d_Illustrations/_data/craneSunset"
import CraneSunset from "src/components/d_Illustrations/_compIllus/CraneSunset"
import {
  arrSakuraDeer,
  colorSakuraDeer,
} from "src/components/d_Illustrations/_data/sakuraDeer"
import SakuraDeer from "src/components/d_Illustrations/_compIllus/SakuraDeer"
import { QuizIdOptions } from "src/models"

interface IlluQuizProps {
  currentQuizId: QuizIdOptions
  kanjisArr: number[]
}

const IlluQuiz = ({ currentQuizId, kanjisArr }: IlluQuizProps) => {
  if (currentQuizId === 1) {
    return (
      <Illu
        kanjisArr={kanjisArr}
        renderIllu={data => <SnowMonkeys data={data} />}
        arrDataIllu={{ arrIllu: arrSnowMonkeys, colorIllu: colorSnowMonkeys }}
      />
    )
  }
  if (currentQuizId === 2) {
    return (
      <Illu
        kanjisArr={kanjisArr}
        renderIllu={data => <CraneSunset data={data} />}
        arrDataIllu={{ arrIllu: arrCraneSunset, colorIllu: colorCraneSunset }}
      />
    )
  }
  return (
    <Illu
      kanjisArr={kanjisArr}
      renderIllu={(data, kanjis, arrNumKanjis) => (
        <SakuraDeer data={data} kanjis={kanjis} numKanjis={arrNumKanjis} />
      )}
      arrDataIllu={{ arrIllu: arrSakuraDeer, colorIllu: colorSakuraDeer }}
    />
  )
}

export default memo(IlluQuiz)
