import styled from "styled-components"

import { strokeWidth } from "src/styles/g"

const arrowWidth = size => (size === "small" ? "12px" : "24px")
const arrowEndS = size => (size === "small" ? "6" : "12")

// initial css before comes in
export const SArrow = styled.div`
  height: ${p => Math.hypot(arrowEndS(p.s.size), arrowEndS(p.s.size))}px;
  width: ${p => arrowWidth(p.s.size)};
  display: flex;
  align-items: center;
  justify-content: ${p =>
    p.s.pointsToward === "right" ? "flex-end" : "flex-start"};
  border-style: inherit;
`

export const SStroke = styled.div`
  width: 100%;
  height: ${strokeWidth}px;
  background-color: ${p => p.s.colorMain};
`

const borderOnR = `${strokeWidth}px ${strokeWidth}px 0 0`
const borderOnL = `0 0 ${strokeWidth}px ${strokeWidth}px`

export const SEnd = styled.div`
  border-width: ${p => (p.s.pointsToward === "right" ? borderOnR : borderOnL)};
  border-color: ${p => p.s.colorMain};
  position: absolute;
  height: ${p => arrowEndS(p.s.size)}px;
  width: ${p => arrowEndS(p.s.size)}px;
  transform: rotate(45deg);
  border-style: inherit;
`
