import styled from "styled-components"

import { tMenuSettingsTitle } from "src/styles/typo"

export const STitle = styled.h1<{ s: { colorMainL1: string } }>`
  ${tMenuSettingsTitle}
  margin-left: 24px;
  margin-bottom: 12px;
  color: ${props => props.s.colorMainL1};
`
