import React, { useState, useEffect, useMemo } from "react"
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
import { paths } from "src/models/constants"
import DefaultState from "./DefaultState"
import DeleteAccount from "./DeleteAccount"
import UpdateEmail from "./UpdateEmail"
import UpdatePassword from "./UpdatePassword"
import { uiStateOptions } from "./basics"

const MyProfile = () => {
  const { allKanjisJson } = useStaticQuery(graphql`
    query {
      allKanjisJson {
        ...kanjisJsonFragmentForIllustrations
      }
    }
  `)

  const email = useAppSelector(state => state.global.email)

  const [isLoggedOutOnFirstVisit, setIsLoggedOutOnFirstVisit] = useState(false)
  const [uiState, setUiState] = useState(uiStateOptions.default)

  const kanjisArr = useMemo(
    () => kanjisArrFormatter(allKanjisJson.nodes, getKanjisNum(arrIllu)),
    [arrIllu]
  )

  useEffect(() => {
    if (!email) {
      setIsLoggedOutOnFirstVisit(true)
    }
  }, [])

  return (
    <>
      <Illu
        kanjisArr={kanjisArr}
        renderIllu={data => <SeaTurtles data={data} />}
        arrDataIllu={{ arrIllu, colorIllu }}
      />
      {!email && isLoggedOutOnFirstVisit ? (
        <TextWrapper>
          <Text>You need to be logged in to access this page.</Text>
          <ButtonInText text="Login" path={paths.login} />
          <ButtonInText text="Register" path={paths.register} />
        </TextWrapper>
      ) : (
        <>
          {uiState === uiStateOptions.default && (
            <DefaultState setUiState={setUiState} />
          )}
          {uiState === uiStateOptions.updateEmail && (
            <UpdateEmail setUiState={setUiState} />
          )}
          {uiState === uiStateOptions.updatePassword && (
            <UpdatePassword setUiState={setUiState} />
          )}
          {uiState === uiStateOptions.deleteAccount && (
            <DeleteAccount setUiState={setUiState} />
          )}
        </>
      )}
    </>
  )
}

export default MyProfile
