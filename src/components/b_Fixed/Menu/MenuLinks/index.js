import { connect } from "react-redux"

import { updateValueGlobal } from "src/reducer/slices/globalSlice"
import Component from "./Component"

const mapStateToProps = state => ({
  isLoggedIn: state.global.isLoggedIn,
  quizzesSlug: state.quiz.currentSlug,
})

const mapDispatchToProps = dispatch => ({
  setIsLoggedOut: payload =>
    dispatch(
      updateValueGlobal({
        prop: ["isLoggedIn", "email"],
        value: [false, ""],
      })
    ),
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
