import styled from "styled-components"

import { strokeWidth } from "src/styles/g"
import { PointsTowardOptions, SizeOptions } from "./models"

const arrowWidth = (size: SizeOptions) => (size === "small" ? "12px" : "24px")
const arrowEndS = (size: SizeOptions) => (size === "small" ? 6 : 12)
const arrowHeight = (size: SizeOptions) => {
  const sizeValue = arrowEndS(size)
  return `${Math.hypot(sizeValue, sizeValue)}px`
}

const howToAlignItems = {
  top: "flex-start",
  left: "center",
  bottom: "flex-end",
  right: "center",
}

const howToJustifyContent = {
  top: "center",
  left: "flex-start",
  bottom: "center",
  right: "flex-end",
}

// initial css before comes in
// do not use transform, because the animation uses transform
export const SArrow = styled.div<{
  s: { size: SizeOptions; pointsToward: PointsTowardOptions }
}>`
  height: ${p =>
    p.s.pointsToward === "right" || p.s.pointsToward === "left"
      ? arrowHeight(p.s.size)
      : arrowWidth(p.s.size)};
  width: ${p =>
    p.s.pointsToward === "right" || p.s.pointsToward === "left"
      ? arrowWidth(p.s.size)
      : arrowHeight(p.s.size)};
  display: flex;
  align-items: ${p => howToAlignItems[p.s.pointsToward]};
  justify-content: ${p => howToJustifyContent[p.s.pointsToward]};
  border-style: inherit;
`

export const SStroke = styled.div<{
  s: { pointsToward: PointsTowardOptions; colorMain: string }
}>`
  width: ${p =>
    p.s.pointsToward === "right" || p.s.pointsToward === "left"
      ? "100%"
      : `${strokeWidth}px`};
  height: ${p =>
    p.s.pointsToward === "right" || p.s.pointsToward === "left"
      ? `${strokeWidth}px`
      : "100%"};
  background-color: ${p => p.s.colorMain};
`

const borderStyle = {
  top: `${strokeWidth}px 0 0 ${strokeWidth}px`,
  left: `0 0 ${strokeWidth}px ${strokeWidth}px`,
  bottom: `0  ${strokeWidth}px ${strokeWidth}px 0`,
  right: `${strokeWidth}px ${strokeWidth}px 0 0`,
}

export const SEnd = styled.div<{
  s: { pointsToward: PointsTowardOptions; colorMain: string; size: SizeOptions }
}>`
  border-width: ${p => borderStyle[p.s.pointsToward]};
  border-color: ${p => p.s.colorMain};
  position: absolute;
  height: ${p => arrowEndS(p.s.size)}px;
  width: ${p => arrowEndS(p.s.size)}px;
  transform: rotate(45deg);
  border-style: inherit;
`
