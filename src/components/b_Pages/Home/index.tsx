import React, { useMemo, memo } from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  kanjisArrFormatter,
  getKanjisNum,
} from "src/helpers/formatters/kanjisArrFormatter"
import PageWithText from "src/components/c_Partials/PageWithText"
import RabbitOnMoon from "src/components/d_Illustrations/_compIllus/RabbitOnMoon"
import {
  arrIllu,
  colorIllu,
} from "src/components/d_Illustrations/_data/rabbitOnMoon"

const Home = () => {
  const { allKanjisJson } = useStaticQuery(graphql`
    query {
      allKanjisJson {
        ...kanjisJsonFragmentForIllustrations
      }
    }
  `)

  const kanjisArr = useMemo(
    () => kanjisArrFormatter(allKanjisJson.nodes, getKanjisNum(arrIllu)),
    []
  )

  return (
    <>
      <PageWithText
        illu={{
          kanjisArr,
          renderIllu: data => <RabbitOnMoon data={data} />,
          arrDataIllu: {
            arrIllu,
            colorIllu,
          },
        }}
        textWithTitle={{
          title: "Pixiji",
          text: [
            "This website is born from the thought that kanjis (Chinese characters that are used in the Japanese writing system) would work well with pixel art.",
          ],
        }}
        buttonBig={{ text: "next", path: "/read-me" }}
      />
    </>
  )
}

export default memo(Home)
