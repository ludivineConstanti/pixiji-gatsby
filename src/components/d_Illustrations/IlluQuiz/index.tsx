import React, { memo } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Illu from "src/components/d_Illustrations/Illu"
import SnowMonkeys from "src/components/d_Illustrations/_compIllus/SnowMonkeys"
import CraneSunset from "src/components/d_Illustrations/_compIllus/CraneSunset"
import SakuraDeer from "src/components/d_Illustrations/_compIllus/SakuraDeer"
import { DataIlluProps } from "src/models/models"

const returnIlluFunction = (currentQuizId: number) => {
  if (currentQuizId === 1) {
    return data => <SnowMonkeys data={data} />
  }
  if (currentQuizId === 2) {
    return data => <CraneSunset data={data} />
  }
  return (data, kanjis, arrNumKanjis) => (
    <SakuraDeer data={data} kanjis={kanjis} numKanjis={arrNumKanjis} />
  )
}

interface QueryProps {
  allIlluQuizJson: { nodes: { color: string; data: DataIlluProps[] }[] }
}

interface IlluQuizProps {
  currentQuizId: number
  kanjisArr: number[]
}

const IlluQuiz = ({ currentQuizId, kanjisArr }: IlluQuizProps) => {
  const { allIlluQuizJson } = useStaticQuery<QueryProps>(graphql`
    query {
      allIlluQuizJson {
        nodes {
          color
          data {
            color
            column
            indexIllu
            indexKanjiGroup
            main
            position
            row
            size
          }
        }
      }
    }
  `)
  return (
    <Illu
      kanjisArr={kanjisArr}
      renderIllu={returnIlluFunction(currentQuizId)}
      arrDataIllu={{
        arrIllu: allIlluQuizJson.nodes[currentQuizId - 1].data,
        colorIllu: allIlluQuizJson.nodes[currentQuizId - 1].color,
      }}
    />
  )
}

export default memo(IlluQuiz)
