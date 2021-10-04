import styled from "styled-components"
import {
  illuDimensions,
  illuCustomPos,
  contentMenuWidth,
  breakPointT,
  breakPointD,
  buttonWidth,
} from "src/styles/g"

const dSeaweedSmall = illuDimensions(9, 6)

export const SSeaweedSmall = styled.div`
  ${dSeaweedSmall}
  position: absolute;
  left: 20vh;
  bottom: 0;
`

const dSeaweedBig = illuDimensions(22, 39)

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
  right: 0;
`

const dSeaTurtleBig = illuDimensions(12, 12)

export const SSeaTurtleBig = styled.div`
  position: absolute;
  ${dSeaTurtleBig}
  right: 20vh;
`
