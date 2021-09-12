import styled from "styled-components"
import {
  illuDimensions,
  illuCustomPos,
  contentMenuWidth,
  breakPointT,
  breakPointD,
  buttonWidth,
} from "src/styles/g"

const dFlowers0 = illuDimensions(9, 6)

export const SFlowers0 = styled.div`
  ${dFlowers0}
  position: relative;
  left: 0;
  top: 0;
  ${breakPointT} {
    top: 30vh;
  }
`

const dFlowers1 = illuDimensions(18, 22)

export const SFlowers1 = styled.div`
  ${dFlowers1}
  position: absolute;
  bottom: ${buttonWidth};
  left: 0;
  ${breakPointT} {
    bottom: 0;
    left: ${buttonWidth};
  }
  ${breakPointD} {
    left: ${contentMenuWidth};
  }
`

const pFlowers2 = illuCustomPos({
  bottom: { pos: [-9, -9, 9] },
})

const dFlowers2 = illuDimensions(32, 25)

export const SFlowers2 = styled.div`
  position: absolute;
  ${dFlowers2}
  ${pFlowers2.bottom}
  right: 0;
`
