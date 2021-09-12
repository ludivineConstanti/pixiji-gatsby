import { connect } from "react-redux"

import { updateValueGlobal } from "src/reducer/slices/globalSlice"
import Component from "./Component"

const mapStateToProps = state => ({
  kanjisArr: state.kanjisArr.register,
  quizzesSlug: state.quiz.currentSlug,
})

const mapDispatchToProps = dispatch => ({
  setIsLoggedIn: payload =>
    dispatch(
      updateValueGlobal({
        prop: ["isLoggedIn", "email"],
        value: [true, payload],
      })
    ),
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
