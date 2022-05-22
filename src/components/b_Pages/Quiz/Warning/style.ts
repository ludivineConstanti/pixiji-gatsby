import styled from "styled-components"

import { buttonWidth } from "src/styles/g"
import { tWarning } from "src/styles/typo"

// initial css before comes in transition
export default styled.div`
  ${tWarning}
  position: absolute;
  margin: auto;
  width: 100%;
  height: ${buttonWidth};
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const SButtonWrapper = styled.div`
  display: flex;
`
