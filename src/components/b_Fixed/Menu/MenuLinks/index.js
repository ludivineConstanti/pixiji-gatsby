import { connect } from "react-redux"

import { updateValueGlobal } from "src/reducer/slices/globalSlice"
import Component from "./Component"

const mapStateToProps = state => ({
  isLoggedIn: !!state.global.email,
  quizzesSlug: state.quiz.currentSlug,
})

const mapDispatchToProps = dispatch => ({
  setIsLoggedOut: payload =>
    dispatch(
      updateValueGlobal({
        prop: ["email"],
        value: [""],
      })
    ),
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
