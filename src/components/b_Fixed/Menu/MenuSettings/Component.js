// == Import npm
import React from "react"
import PropTypes from "prop-types"

import MenuSetting from "../MenuSetting"
import { STitle } from "./SMenuSettings"

const Menu = ({
  isPlaying,
  colorMainL1,
  cheating,
  finishedQuiz,
  currentQuizId,
  updateValueGlobal,
  cheatingButtonFinishQuiz,
}) => (
  <div>
    <STitle s={{ colorMainL1 }}>settings</STitle>
    <MenuSetting
      text="Cheat mode"
      hasSwitch
      onClick={() => {
        updateValueGlobal({ prop: ["cheating"], value: [!cheating] })
      }}
    />
    {isPlaying && (
      <MenuSetting
        text={finishedQuiz ? "Restart quiz" : "Finish quiz"}
        onClick={() => {
          cheatingButtonFinishQuiz({ quizId: currentQuizId })
        }}
      />
    )}
  </div>
)

Menu.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  colorMainL1: PropTypes.string.isRequired,
  cheating: PropTypes.bool.isRequired,
  finishedQuiz: PropTypes.bool.isRequired,
  currentQuizId: PropTypes.number.isRequired,
  updateValueGlobal: PropTypes.func.isRequired,
  cheatingButtonFinishQuiz: PropTypes.func.isRequired,
}

// == Export
export default Menu
