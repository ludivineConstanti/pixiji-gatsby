import React, { useMemo } from "react"
import { useStaticQuery, graphql } from "gatsby"

import PopUpButton from "src/components/e_Interactives/PopUpButton"
import { STitle } from "./style"
import { updateCheating, updateEmail } from "src/reducer/slices/globalSlice"
import { cheatingButtonFinishQuiz } from "src/reducer/slices/quizSlice"
import { useAppDispatch, useAppSelector } from "src/store"
import { getUser, createUser } from "src/helpers/backEnd/users"
import { dummyEmail, dummyPassword } from "src/models/constants"

interface KanjisJsonProps {
  allKanjisJson: {
    nodes: {
      quizId: number
      kanjiId: number
    }[]
  }
}

interface MenuSettingsProps {
  isPlaying: boolean
}

const MenuSettings = ({ isPlaying }: MenuSettingsProps) => {
  const { allKanjisJson } = useStaticQuery<KanjisJsonProps>(graphql`
    query {
      allKanjisJson {
        nodes {
          quizId
          kanjiId
        }
      }
    }
  `)

  const dispatch = useAppDispatch()

  const colorMainL1 = useAppSelector(state => state.global.color.lighter)
  const cheating = useAppSelector(state => state.global.cheating)
  const currentQuizId = useAppSelector(state => state.quiz.currentQuizId)
  const quizzesData = useAppSelector(state => state.quiz.data)
  const currentQuizData = quizzesData.filter(
    data => data.quizId === currentQuizId
  )
  const finishedQuiz = currentQuizData.length
    ? currentQuizData[0].finished
    : false
  const isLoggedIn = useAppSelector(state => state.global.email)

  const kanjis = useMemo(() => {
    if (allKanjisJson.nodes.length) {
      return allKanjisJson.nodes
        .filter(e => e.quizId === currentQuizId)
        .map(e => {
          return e.kanjiId
        })
    }
  }, [allKanjisJson])

  return (
    <div>
      <STitle s={{ colorMainL1 }}>settings</STitle>
      {!isLoggedIn && (
        <PopUpButton
          text="Use dummy email"
          onClick={async e => {
            e.preventDefault()

            let responseLogIn
            try {
              responseLogIn = await getUser({
                email: dummyEmail,
                password: dummyPassword,
              })
            } catch (error) {
              // tslint:disable-next-line:no-console
              console.log(error)
            }

            let successLogIn = false

            if (
              typeof responseLogIn === "object" &&
              responseLogIn.data &&
              responseLogIn.data.data &&
              responseLogIn.data.data.getUser
            ) {
              successLogIn = responseLogIn.data.data.getUser.success
            }

            if (successLogIn) {
              dispatch(updateEmail(dummyEmail))
            } else {
              let responseCreateUser

              try {
                responseCreateUser = await createUser({
                  email: dummyEmail,
                  password: dummyPassword,
                })
              } catch (error) {
                // tslint:disable-next-line:no-console
                console.log(error)
              }

              let successCreateUser = false

              if (
                typeof responseCreateUser === "object" &&
                responseCreateUser.data &&
                responseCreateUser.data.data &&
                responseCreateUser.data.data.createUser
              ) {
                successCreateUser =
                  responseCreateUser.data.data.createUser.success
              }

              if (successCreateUser) {
                dispatch(updateEmail(dummyEmail))
              }
            }
          }}
        />
      )}
      <PopUpButton
        text="Cheat mode"
        hasSwitch={true}
        onClick={() => {
          dispatch(updateCheating(!cheating))
        }}
      />
      {isPlaying && (
        <PopUpButton
          text={finishedQuiz ? "Restart quiz" : "Finish quiz"}
          onClick={() => {
            dispatch(
              cheatingButtonFinishQuiz({ quizId: currentQuizId, kanjis })
            )
          }}
        />
      )}
    </div>
  )
}

export default MenuSettings
