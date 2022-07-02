import styled from "styled-components"

import { sidePadding } from "../basics"

export const SWrapper = styled.div<{ backgroundColor: string }>`
  background-color: ${p => p.backgroundColor};
  color: white;
  width: 100%;
  position: relative;
  flex-grow: 1;
`

export const SWrapperText = styled.div`
  padding: ${sidePadding}px;
`

export const SOtherOptions = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(0, -100%);
`
