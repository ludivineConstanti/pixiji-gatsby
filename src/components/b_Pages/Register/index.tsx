import React, { useMemo, useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { useAppDispatch, useAppSelector } from "src/store"
import {
  kanjisArrFormatter,
  getKanjisNum,
} from "src/helpers/formatters/kanjisArrFormatter"
import Illu from "src/components/d_Illustrations/Illu"
import SakuraBirds from "src/components/d_Illustrations/_compIllus/SakuraBirds"
import TextWrapper from "src/components/f_Statics/TextWrapper"
import Text from "src/components/f_Statics/Text"
import ButtonInText from "src/components/e_Interactives/ButtonInText"
import {
  KanjisJsonFragmentForIllustrationsProps,
  IlluQueryProps,
} from "src/models/models"
import DefaultState from "./DefaultState"
import { updateEmail } from "src/reducer/slices/globalSlice"
import { illuColors } from "src/models/constants"

interface QueryProps {
  allKanjisJson: KanjisJsonFragmentForIllustrationsProps
  allSakuraBirdsJson: IlluQueryProps
}

const Register = () => {
  const { allKanjisJson, allSakuraBirdsJson } =
    useStaticQuery<QueryProps>(graphql`
      query {
        allKanjisJson {
          ...kanjisJsonFragmentForIllustrations
        }
        allSakuraBirdsJson {
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

  const dispatch = useAppDispatch()

  const [isLoggedInOnFirstVisit, setIsLoggedInOnFirstVisit] = useState(false)
  const email = useAppSelector(state => state.global.email)

  const kanjisArr = useMemo(
    () =>
      kanjisArrFormatter(
        allKanjisJson.nodes,
        getKanjisNum(allSakuraBirdsJson.nodes)
      ),
    [allKanjisJson, allSakuraBirdsJson]
  )

  useEffect(() => {
    if (email) {
      setIsLoggedInOnFirstVisit(true)
    }
  }, [])

  return (
    <>
      <Illu
        kanjisArr={kanjisArr}
        renderIllu={data => <SakuraBirds data={data} />}
        arrDataIllu={{
          arrIllu: allSakuraBirdsJson.nodes,
          colorIllu: illuColors.sakuraBirds.background,
        }}
      />
      {email && isLoggedInOnFirstVisit ? (
        <TextWrapper>
          <Text>You can not register a new account while being logged in.</Text>
          <ButtonInText
            text="Logout"
            onClick={() => {
              dispatch(updateEmail(""))
            }}
          />
        </TextWrapper>
      ) : (
        <DefaultState />
      )}
    </>
  )
}

export default Register
