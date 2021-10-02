import React from "react"

import MenuSetting from "../MenuSetting"
import { STitle } from "./SMenuSettings"
import { updateCheating } from "src/reducer/slices/globalSlice"
import { cheatingButtonFinishQuiz } from "src/reducer/slices/quizSlice"
import { useAppDispatch, useAppSelector } from "src/store"

interface MenuSettingsProps {
  isPlaying: boolean
}

const MenuSettings = ({ isPlaying }: MenuSettingsProps) => {
  const dispatch = useAppDispatch()

  const colorMainL1 = useAppSelector(state => state.global.color.lighter)
  const cheating = useAppSelector(state => state.global.cheating)
  const currentQuizId = useAppSelector(state => state.quiz.currentQuizId)
  const finishedQuiz = useAppSelector(
    state => state.quiz[`quiz${state.quiz.currentQuizId}`].finished
  )

  return (
    <div>
      <STitle s={{ colorMainL1 }}>settings</STitle>
      <MenuSetting
        text="Cheat mode"
        hasSwitch
        onClick={() => {
          dispatch(updateCheating(!cheating))
        }}
      />
      {isPlaying && (
        <MenuSetting
          text={finishedQuiz ? "Restart quiz" : "Finish quiz"}
          onClick={() => {
            dispatch(cheatingButtonFinishQuiz({ quizId: currentQuizId }))
          }}
        />
      )}
    </div>
  )
}

export default MenuSettings
