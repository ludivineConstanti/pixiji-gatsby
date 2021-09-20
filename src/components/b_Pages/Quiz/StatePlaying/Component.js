// == Import npm
import React from "react"
import PropTypes from "prop-types"

// == Import
import ButtonBig from "src/components/e_Interactives/ButtonBig"
import { tQuiz } from "src/assets/querySelectors"
import Question from "../Question"

const StatePlaying = ({
  answeredQuestion,
  answeredCorrectly,
  currentQuizId,
  nextQuestionQuiz,
}) => {
  return (
    <>
      <Question quizId={currentQuizId} />
      {answeredQuestion && (
        <ButtonBig
          comment={
            answeredCorrectly ? tQuiz.answeredRight : tQuiz.answeredWrong
          }
          text={tQuiz.buttonNext}
          onClick={() => {
            nextQuestionQuiz({ quizId: currentQuizId })
          }}
        />
      )}
    </>
  )
}

StatePlaying.propTypes = {
  answeredQuestion: PropTypes.bool.isRequired,
  answeredCorrectly: PropTypes.bool.isRequired,
  currentQuizId: PropTypes.number.isRequired,
  nextQuestionQuiz: PropTypes.func.isRequired,
}

// == Export
export default StatePlaying
