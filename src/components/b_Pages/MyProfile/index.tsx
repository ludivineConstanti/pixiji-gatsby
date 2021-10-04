import React, { useMemo } from "react"

import {
  kanjisArrFormatter,
  getKanjisNum,
} from "src/helpers/formatters/kanjisArrFormatter"
import PageWithText from "src/components/c_Partials/PageWithText"
import SeaTurtles from "src/components/d_Illustrations/_compIllus/SeaTurtles"
import {
  arrIllu,
  colorIllu,
} from "src/components/d_Illustrations/_data/seaTurtles"
import { useAppSelector } from "src/store"

const MyProfile = () => {
  const quizzesSlug = useAppSelector(state => state.quiz.currentSlug)

  const kanjisArr = useMemo(
    () => kanjisArrFormatter(getKanjisNum(arrIllu)),
    [arrIllu]
  )

  return (
    <>
      <PageWithText
        illu={{
          kanjisArr,
          renderIllu: data => <SeaTurtles data={data} />,
          arrDataIllu: { arrIllu, colorIllu },
        }}
        textWithTitle={{
          title: "My profile",
          text: [
            "The informations for the quizzes and their answers was taken from wikipedia and jisho.org.",
            "The illustrations are self-made.",
          ],
        }}
        buttonBig={{ text: "Quizzes", path: `/quizzes/${quizzesSlug}` }}
      />
    </>
  )
}

export default MyProfile
