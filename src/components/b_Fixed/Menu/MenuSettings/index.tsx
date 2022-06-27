import React, { useMemo } from "react"
import { useStaticQuery, graphql } from "gatsby"

import PopUpButton from "src/components/e_Interactives/PopUpButton"
import { STitle } from "./style"
import { updateCheating } from "src/reducer/slices/globalSlice"
import { cheatingButtonFinishQuiz } from "src/reducer/slices/quizSlice"
import { useAppDispatch, useAppSelector } from "src/store"
import { getUser, createUser } from "src/helpers/backEnd/users"

interface MenuSettingsProps {
  isPlaying: boolean
}

const MenuSettings = ({ isPlaying }: MenuSettingsProps) => {
  const { allKanjisJson } = useStaticQuery(graphql`
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
  const finishedQuiz = useAppSelector(
    state => state.quiz[`quiz${state.quiz.currentQuizId}`].finished
  )

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
      <PopUpButton
        text="Use dummy email"
        onClick={async e => {
          e.preventDefault()

          const email = "l@c.fr"
          const password = "PASSWORD!1"

          const responseLogIn = await getUser({ email, password })

          const { success } = responseLogIn.data.data.getUser

          if (success === false) {
            const responseCreateUser = await createUser({ email, password })
            console.log("responseCreateUser", responseCreateUser)
          }
        }}
      />
      <PopUpButton
        text="Cheat mode"
        hasSwitch
        onClick={() => {
          dispatch(updateCheating(!cheating))
        }}
      />
      {isPlaying && (
        <PopUpButton
          text={finishedQuiz ? "Restart quiz" : "Finish quiz"}
          onClick={() => {
            dispatch(cheatingButtonFinishQuiz({ kanjis }))
          }}
        />
      )}
    </div>
  )
}

export default MenuSettings
