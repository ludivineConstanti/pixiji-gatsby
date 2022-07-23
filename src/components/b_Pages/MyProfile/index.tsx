import React, { useState, useEffect, useMemo } from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  kanjisArrFormatter,
  getKanjisNum,
} from "src/helpers/formatters/kanjisArrFormatter"
import SeaTurtles from "src/components/d_Illustrations/_compIllus/SeaTurtles"
import TextWrapper from "src/components/f_Statics/TextWrapper"
import Illu from "src/components/d_Illustrations/Illu"
import ButtonInText from "src/components/e_Interactives/ButtonInText"
import { useAppSelector } from "src/store"
import Text from "src/components/f_Statics/Text"
import DefaultState from "./DefaultState"
import DeleteAccount from "./DeleteAccount"
import UpdateEmail from "./UpdateEmail"
import UpdatePassword from "./UpdatePassword"
import { uiStateOptions } from "./basics"
import { paths, colors } from "src/models/constants"
import {
  KanjisJsonFragmentForIllustrationsProps,
  IlluQueryProps,
} from "src/models/models"

interface QueryProps {
  allKanjisJson: KanjisJsonFragmentForIllustrationsProps
  allSeaTurtlesJson: IlluQueryProps
}

const MyProfile = () => {
  const { allKanjisJson, allSeaTurtlesJson } =
    useStaticQuery<QueryProps>(graphql`
      query {
        allKanjisJson {
          ...kanjisJsonFragmentForIllustrations
        }
        allSeaTurtlesJson {
          nodes {
            main
            color
            column
            indexIllu
            indexKanjiGroup
            row
            size
          }
        }
      }
    `)

  const email = useAppSelector(state => state.global.email)

  const [isLoggedOutOnFirstVisit, setIsLoggedOutOnFirstVisit] = useState(false)
  const [uiState, setUiState] = useState(uiStateOptions.default)

  const kanjisArr = useMemo(
    () =>
      kanjisArrFormatter(
        allKanjisJson.nodes,
        getKanjisNum(allSeaTurtlesJson.nodes)
      ),
    [allKanjisJson, allSeaTurtlesJson]
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
        arrDataIllu={{
          arrIllu: allSeaTurtlesJson.nodes,
          colorIllu: colors.seaTurtles.background,
        }}
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
