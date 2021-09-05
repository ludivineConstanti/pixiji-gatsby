import { connect } from "react-redux"

import Component from "./Component"

const mapStateToProps = state => ({
  menuIsOpen: state.global.menuIsOpen,
})

export default connect(mapStateToProps, null)(Component)
