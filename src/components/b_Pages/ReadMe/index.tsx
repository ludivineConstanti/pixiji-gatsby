import React, { useMemo } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { useAppSelector } from "src/store"
import {
  kanjisArrFormatter,
  getKanjisNum,
} from "src/helpers/formatters/kanjisArrFormatter"
import KodomoNoHi from "src/components/d_Illustrations/_compIllus/KodomoNoHi"
import {
  arrIllu,
  colorIllu,
} from "src/components/d_Illustrations/_data/kodomoNoHi"
import PageWithText from "src/components/c_Partials/PageWithText"
import {
  KanjisJsonFragmentProps,
  AllQuizFragmentProps,
} from "src/models/models"

interface QueryProps {
  allKanjisJson: KanjisJsonFragmentProps
  allQuiz: AllQuizFragmentProps
}

const ReadMe = () => {
  const { allKanjisJson, allQuiz } = useStaticQuery<QueryProps>(graphql`
    query {
      allKanjisJson {
        ...kanjisJsonFragment
      }
      allQuiz {
        ...quizFragment
      }
    }
  `)

  const currentQuizId = useAppSelector(state => state.quiz.currentQuizId)
  const quizzesSlug = allQuiz.nodes.filter(
    data => data.quizId === currentQuizId
  )[0].slug

  const kanjisArr = useMemo(
    () => kanjisArrFormatter(allKanjisJson.nodes, getKanjisNum(arrIllu)),
    [arrIllu]
  )

  return (
    <>
      <PageWithText
        illu={{
          kanjisArr,
          renderIllu: (data, kanjis, arrNumKanjis) => (
            <KodomoNoHi data={data} kanjis={kanjis} numKanjis={arrNumKanjis} />
          ),
          arrDataIllu: { arrIllu, colorIllu },
        }}
        textWithTitle={{
          title: "Read me",
          text: [
            "This website was made as a portfolio project, therefore it has features (like the cheating buttons in the menu) that would usually not make sense, but facilitates its use.",
            {
              text: "You can learn more on",
              link: "the read me page of this project, on GitHub.",
              path: "https://github.com/ludivineConstanti/pixiji-gatsby#readme",
            },
          ],
        }}
        buttonBig={{ text: "next", path: `/quizzes/${quizzesSlug}` }}
      />
    </>
  )
}

export default ReadMe
