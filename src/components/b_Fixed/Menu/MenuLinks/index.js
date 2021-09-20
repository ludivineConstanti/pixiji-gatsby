import { connect } from "react-redux"

import { updateValueGlobal } from "src/reducer/slices/globalSlice"
import { resetStateQuiz } from "src/reducer/slices/quizSlice"
import Component from "./Component"

const mapStateToProps = state => ({
  isLoggedIn: !!state.global.email,
  quizzesSlug: state.quiz.currentSlug,
})

const mapDispatchToProps = dispatch => ({
  setIsLoggedOut: () =>
    dispatch(
      updateValueGlobal({
        prop: ["email"],
        value: [""],
      })
    ),
  resetStateQuiz: () => dispatch(resetStateQuiz()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
