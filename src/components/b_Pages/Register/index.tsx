import React, { useMemo, useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { useAppDispatch, useAppSelector } from "src/store"
import {
  kanjisArrFormatter,
  getKanjisNum,
} from "src/helpers/formatters/kanjisArrFormatter"
import Illu from "src/components/d_Illustrations/Illu"
import SakuraBirds from "src/components/d_Illustrations/_compIllus/SakuraBirds"
import {
  arrIllu,
  colorIllu,
} from "src/components/d_Illustrations/_data/sakuraBirds"
import TextWrapper from "src/components/f_Statics/TextWrapper"
import Text from "src/components/f_Statics/Text"
import ButtonInText from "src/components/e_Interactives/ButtonInText"
import { KanjisJsonFragmentForIllustrationsProps } from "src/models/models"
import DefaultState from "./DefaultState"
import { updateEmail } from "src/reducer/slices/globalSlice"

interface QueryProps {
  allKanjisJson: KanjisJsonFragmentForIllustrationsProps
}

const Register = () => {
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

  const kanjisArr = useMemo(
    () => kanjisArrFormatter(allKanjisJson.nodes, getKanjisNum(arrIllu)),
    []
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
        arrDataIllu={{ arrIllu, colorIllu }}
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
