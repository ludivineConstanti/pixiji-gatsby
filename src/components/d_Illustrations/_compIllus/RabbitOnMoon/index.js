// == Import npm
import React from "react"
import PropTypes from "prop-types"

// == Import
import { SPlanet, SRabbit, SMoon } from "./SRabbitOnMoon"

const RabbitOnMoon = ({ data, kanjis, totalKanjis }) => (
  <>
    <SPlanet>{data[0]}</SPlanet>
    <SRabbit>{data[1]}</SRabbit>
    <SMoon>{data[2]}</SMoon>
  </>
)

RabbitOnMoon.propTypes = {
  data: PropTypes.array.isRequired,
  kanjis: PropTypes.number.isRequired,
  totalKanjis: PropTypes.number.isRequired,
}

// == Export
export default RabbitOnMoon
