import { connect } from "react-redux"

import Component from "./Component"

const mapStateToProps = state => ({
  isLoggedIn: state.global.isLoggedIn,
  quizzesSlug: state.quiz.currentSlug,
})

export default connect(mapStateToProps, null)(Component)
