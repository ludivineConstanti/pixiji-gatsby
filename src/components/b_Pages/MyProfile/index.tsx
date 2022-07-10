import React, { useMemo } from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  kanjisArrFormatter,
  getKanjisNum,
} from "src/helpers/formatters/kanjisArrFormatter"
import SeaTurtles from "src/components/d_Illustrations/_compIllus/SeaTurtles"
import {
  arrIllu,
  colorIllu,
} from "src/components/d_Illustrations/_data/seaTurtles"
import TextWrapper from "src/components/f_Statics/TextWrapper"
import Illu from "src/components/d_Illustrations/Illu"
import ButtonInText from "src/components/e_Interactives/ButtonInText"
import { useAppSelector } from "src/store"
import Text from "src/components/f_Statics/Text"

const MyProfile = () => {
  const { allKanjisJson } = useStaticQuery(graphql`
    query {
      allKanjisJson {
        ...kanjisJsonFragmentForIllustrations
      }
    }
  `)

  const email = useAppSelector(state => state.global.email)

  const kanjisArr = useMemo(
    () => kanjisArrFormatter(allKanjisJson.nodes, getKanjisNum(arrIllu)),
    [arrIllu]
  )

  return (
    <>
      <Illu
        kanjisArr={kanjisArr}
        renderIllu={data => <SeaTurtles data={data} />}
        arrDataIllu={{ arrIllu, colorIllu }}
      />
      <TextWrapper>
        <Text>{`Current email: ${email}`}</Text>
        <ButtonInText text="Update my email" buttonType="submit" />
        <ButtonInText text="Update my password" buttonType="submit" />
        <ButtonInText text="Delete my account" buttonType="submit" />
      </TextWrapper>
    </>
  )
}

export default MyProfile
