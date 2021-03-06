import React, { useMemo, useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  kanjisArrFormatter,
  getKanjisNum,
} from "src/helpers/formatters/kanjisArrFormatter"
import { useAppDispatch, useAppSelector } from "src/store"
import ButtonInText from "src/components/e_Interactives/ButtonInText"
import Illu from "src/components/d_Illustrations/Illu"
import Text from "src/components/f_Statics/Text"
import TextWrapper from "src/components/f_Statics/TextWrapper"
import RedPanda from "src/components/d_Illustrations/_compIllus/RedPanda"
import {
  arrIllu,
  colorIllu,
} from "src/components/d_Illustrations/_data/redPanda"
import { KanjisJsonFragmentForIllustrationsProps } from "src/models/models"
import { updateEmail } from "src/reducer/slices/globalSlice"
import DefaultState from "./DefaultState"

interface QueryProps {
  allKanjisJson: KanjisJsonFragmentForIllustrationsProps
}

const Login = () => {
  const { allKanjisJson } = useStaticQuery<QueryProps>(graphql`
    query {
      allKanjisJson {
        ...kanjisJsonFragmentForIllustrations
      }
    }
  `)

  const dispatch = useAppDispatch()

  const [isLoggedInOnFirstVisit, setIsLoggedInOnFirstVisit] = useState(false)
  const email = useAppSelector(state => state.global.email)

  const kanjisArr = useMemo(() => {
    const kanjisNum = getKanjisNum(arrIllu)
    return kanjisArrFormatter(allKanjisJson.nodes, kanjisNum)
  }, [])

  useEffect(() => {
    if (email) {
      setIsLoggedInOnFirstVisit(true)
    }
  }, [])

  return (
    <>
      <Illu
        kanjisArr={kanjisArr}
        renderIllu={data => <RedPanda data={data} />}
        arrDataIllu={{ arrIllu, colorIllu }}
      />
      {email && isLoggedInOnFirstVisit ? (
        <TextWrapper>
          <Text>You're already logged in!</Text>
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

export default Login
