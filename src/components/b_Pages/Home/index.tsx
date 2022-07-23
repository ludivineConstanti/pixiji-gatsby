import React, { useMemo, memo } from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  kanjisArrFormatter,
  getKanjisNum,
} from "src/helpers/formatters/kanjisArrFormatter"
import PageWithText from "src/components/c_Partials/PageWithText"
import RabbitOnMoon from "src/components/d_Illustrations/_compIllus/RabbitOnMoon"
import { paths, colors } from "src/models/constants"
import {
  KanjisJsonFragmentForIllustrationsProps,
  IlluQueryProps,
} from "src/models/models"

interface QueryProps {
  allKanjisJson: KanjisJsonFragmentForIllustrationsProps
  allRabbitOnMoonJson: IlluQueryProps
}

const Home = () => {
  const { allKanjisJson, allRabbitOnMoonJson } =
    useStaticQuery<QueryProps>(graphql`
      query {
        allKanjisJson {
          ...kanjisJsonFragmentForIllustrations
        }
        allRabbitOnMoonJson {
          nodes {
            main
            color
            column
            indexIllu
            indexKanjiGroup
            row
            size
            position
          }
        }
      }
    `)

  const kanjisArr = useMemo(
    () =>
      kanjisArrFormatter(
        allKanjisJson.nodes,
        getKanjisNum(allRabbitOnMoonJson.nodes)
      ),
    []
  )

  return (
    <>
      <PageWithText
        illu={{
          kanjisArr,
          renderIllu: data => <RabbitOnMoon data={data} />,
          arrDataIllu: {
            arrIllu: allRabbitOnMoonJson.nodes,
            colorIllu: colors.rabbitOnMoon.background,
          },
        }}
        textWithTitle={{
          title: "Pixiji",
          text: [
            "This website is born from the thought that kanjis (Chinese characters that are used in the Japanese writing system) would work well with pixel art.",
          ],
        }}
        buttonBig={{ text: "next", path: paths.readMe }}
      />
    </>
  )
}

export default memo(Home)
