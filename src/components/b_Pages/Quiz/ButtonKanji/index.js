import { connect } from "react-redux"

import { answeredQuestionQuiz } from "src/reducer/slices/quizSlice"
import Component from "./Component"

const mapStateToProps = state => {
  const current = `quiz${state.quiz.currentQuizId}`
  return {
    answeredQuestion: !!state.quiz[current].answeredQuestion,
    colorMain: state.global.colorMain,
    colorMainD1: state.global.colorMainD1,
    cheating: state.global.cheating,
    email: state.global.email,
    correctAnswer:
      state.quiz[current].dataQuiz[0].arrAnswers[
        state.quiz[current].dataQuiz[0].infosAnswer.answerIndex
      ],
  }
}

const mapDispatchToProps = dispatch => ({
  answeredQuestionQuiz: payload => dispatch(answeredQuestionQuiz(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
