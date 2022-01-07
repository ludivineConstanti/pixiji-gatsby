import styled from "styled-components"
import {
  squareUnitM,
  zIMSContainerHover,
  breakPointT,
  squareUnitT,
  breakPointD,
  squareUnit,
} from "src/styles/g"

export default styled.div<{ height: number; width: number }>`
  position: fixed;
  display: grid;
  grid-template: repeat(${p => p.height}, 1fr) / repeat(${p => p.width}, 1fr);
  height: calc(${p => p.height} * ${squareUnitM});
  width: calc(${p => p.width} * ${squareUnitM});
  :hover {
    z-index: ${zIMSContainerHover};
  }
  ${breakPointT} {
    height: calc(${p => p.height} * ${squareUnitT});
    width: calc(${p => p.width} * ${squareUnitT});
  }
  ${breakPointD} {
    height: calc(${p => p.height} * ${squareUnit});
    width: calc(${p => p.width} * ${squareUnit});
  }
`
