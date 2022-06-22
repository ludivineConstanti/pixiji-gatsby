import styled from "styled-components"

import { tMenuSettingsTitle, tText, tbInTSmallFontSize } from "src/styles/typo"
import { sidePadding } from "./basics"

export const Subtitle = styled.h2`
  ${tMenuSettingsTitle}
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`

export const Text = styled.p`
  ${tText}
`

export const WrapperSection = styled.div`
  padding: ${sidePadding}px;
  position: relative;
`

export const Small = styled.span`
  font-size: ${tbInTSmallFontSize};
  letter-spacing: 1px;
  text-transform: uppercase;
`

export const SmallWithMargin = styled(Small)`
  margin: 0 16px;
`

export const Example = styled.li`
  margin: 16px 0;
`

export const Kanji = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(60px + 2vw);
  text-align: center;
  flex-direction: column;
  grid-column: 1 / -1;
  margin: 60px 0;
`
