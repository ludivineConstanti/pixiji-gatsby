import styled from "styled-components"
import { illuDimensions } from "src/styles/g"

const dPanda = illuDimensions(29, 39)

export const SRedPanda = styled.div`
  ${dPanda}
  position: absolute;
  right: 0;
  bottom: 0;
`
