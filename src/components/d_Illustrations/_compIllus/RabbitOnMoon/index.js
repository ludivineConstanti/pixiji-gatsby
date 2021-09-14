// == Import npm
import React from "react"
import PropTypes from "prop-types"

// == Import
import { SPlanet, SRabbit, SMoon } from "./SRabbitOnMoon"
import Stars from "src/components/d_Illustrations/_elements/Stars"

const RabbitOnMoon = ({ data, kanjis, totalKanjis }) => (
  <>
    {totalKanjis >= kanjis && <Stars color="#FFF8BB" />}
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
