import styled from "styled-components"

import { tMenuSettingsTitle, tText, tbInTSmallFontSize } from "src/styles/typo"
import { sidePadding } from "./basics"

export const SSubtitle = styled.h2`
  ${tMenuSettingsTitle}
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`

export const SText = styled.p`
  ${tText}
`

export const SWrapperSection = styled.div`
  padding: ${sidePadding}px;
  position: relative;
`

export const SSmallText = styled.span`
  font-size: ${tbInTSmallFontSize};
  letter-spacing: 1px;
  text-transform: uppercase;
`

export const SSmallTextWithMargin = styled(SSmallText)`
  margin: 0 16px;
`

export const SExample = styled.li`
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
