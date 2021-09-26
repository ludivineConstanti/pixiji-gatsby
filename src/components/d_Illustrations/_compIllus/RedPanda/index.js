// == Import npm
import React from "react"
import PropTypes from "prop-types"

// == Import
import { SRedPanda } from "./SRedPanda"
import Stars from "src/components/d_Illustrations/_elements/Stars"

const RedPanda = ({ data }) => {
  return (
    <>
      <Stars color="#FFE4DD" />
      <SRedPanda>{data[0]}</SRedPanda>
    </>
  )
}

RedPanda.propTypes = {
  data: PropTypes.array.isRequired,
}

// == Export
export default RedPanda
