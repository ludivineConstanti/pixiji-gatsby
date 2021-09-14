import { connect } from "react-redux"

import { updateIdQuiz, initializeQuiz } from "src/reducer/slices/quizSlice"
import Component from "./Component"

const mapStateToProps = state => {
  const current = `quiz${state.quiz.currentQuizId}`
  return {
    finishedQuiz: state.quiz[current].finished,
    kanjisArr: state.quiz[current].rightAnswers,
    isLoggedIn: !!state.global.email,
  }
}

const mapDispatchToProps = dispatch => ({
  updateIdQuiz: payload => dispatch(updateIdQuiz(payload)),
  initializeQuiz: payload => dispatch(initializeQuiz(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
