import { connect } from "react-redux"

import { updateValueGlobal } from "src/reducer/slices/globalSlice"
import { updateWrongAnswers } from "src/reducer/slices/quizSlice"
import Component from "./Component"

const mapStateToProps = state => ({
  kanjisArr: state.kanjisArr.about,
  quizzesSlug: state.quiz.currentSlug,
})

const mapDispatchToProps = dispatch => ({
  setIsLoggedIn: payload =>
    dispatch(
      updateValueGlobal({
        prop: ["email"],
        value: [payload],
      })
    ),
  updateQuizzes: payload => dispatch(updateWrongAnswers(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
