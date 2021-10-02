import styled from "styled-components"

import { buttonWidth, breakPointD } from "src/styles/g"

// flex grow => takes maximum height available
export default styled.nav`
  margin-top: calc(${buttonWidth} / 2);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${breakPointD} {
    align-items: flex-start;
    margin-left: ${buttonWidth};
  }
`

export const SContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
