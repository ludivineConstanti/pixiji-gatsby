import styled from "styled-components"

import { SText, SSmallText } from "../style"

export const SKana = styled(SSmallText)`
  margin: 0 8px;
`

export const SKanaEn = styled(SSmallText)`
  margin-right: 16px;
`

export const STextInline = styled(SText)`
  display: inline-block;
`

export const SLighter = styled.span<{ color: string }>`
  color: ${p => p.color};
`
