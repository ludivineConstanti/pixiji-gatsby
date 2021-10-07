import styled from "styled-components"
import {
  illuDimensions,
  illuCustomPos,
  contentMenuWidth,
  breakPointT,
  breakPointD,
  buttonWidth,
  contentLMarginLM,
  contentLMarginLT,
} from "src/styles/g"

const dSeaweedSmall = illuDimensions(9, 6)

export const SSeaweedSmall = styled.div`
  ${dSeaweedSmall}
  position: absolute;
  bottom: 0;
  left: ${contentLMarginLM};
  ${breakPointT} {
    left: ${contentLMarginLT};
  }
  ${breakPointD} {
    left: ${buttonWidth};
  }
`

const dSeaweedBig = illuDimensions(21, 35)

export const SSeaweedBig = styled.div`
  ${dSeaweedBig}
  position: absolute;
  bottom: 0;
  right: 0;
`

const pSeaTurtleSmall = illuCustomPos({
  bottom: { pos: [9, 9, 9] },
})

const dSeaTurtleSmall = illuDimensions(6, 6)

export const SSeaTurtleSmall = styled.div`
  position: absolute;
  ${dSeaTurtleSmall}
  ${pSeaTurtleSmall.bottom}
  right: 50vw;
`

const dSeaTurtleBig = illuDimensions(12, 12)

const pSeaTurtleBig = illuCustomPos({
  bottom: { pos: [15, 0] },
  top: { pos: [30, 0, 3], sC: "buttonWidth" },
  right: { pos: [40, 5, 30] },
  left: { pos: [10, 0] },
})

export const SSeaTurtleBig = styled.div`
  position: absolute;
  ${pSeaTurtleBig.bottom}
  ${pSeaTurtleBig.left}
  ${dSeaTurtleBig}
  right: 20vh;
  ${breakPointD} {
    ${pSeaTurtleBig.right}
    ${pSeaTurtleBig.top}
  }
`
