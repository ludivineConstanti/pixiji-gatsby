import React from "react"
import PropTypes from "prop-types"

import { SArrow, SStroke, SEnd } from "./SArrow"

const Arrow = React.forwardRef(
  ({ pointsToward, colorMain, isWhite, size }, ref) => (
    <SArrow s={{ pointsToward, size }} ref={ref}>
      <SStroke s={{ colorMain: isWhite ? "white" : colorMain }} />
      <SEnd
        s={{ colorMain: isWhite ? "white" : colorMain, pointsToward, size }}
      />
    </SArrow>
  )
)

Arrow.propTypes = {
  pointsToward: PropTypes.string,
  colorMain: PropTypes.string.isRequired,
  isWhite: PropTypes.bool,
  size: PropTypes.string,
}

Arrow.defaultProps = {
  pointsToward: "right",
  isWhite: false,
  size: "",
}

export default Arrow
