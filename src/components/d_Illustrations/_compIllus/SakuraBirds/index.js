// == Import npm
import React from "react"
import PropTypes from "prop-types"

// == Import
import { SFlowers0, SFlowers1, SFlowers2 } from "./SSakuraBirds"

const SakuraBirds = ({ data }) => {
  return (
    <>
      <SFlowers0>{data[0]}</SFlowers0>
      <SFlowers1>{data[1]}</SFlowers1>
      <SFlowers2>{data[2]}</SFlowers2>
    </>
  )
}

SakuraBirds.propTypes = {
  data: PropTypes.array.isRequired,
}

// == Export
export default SakuraBirds
