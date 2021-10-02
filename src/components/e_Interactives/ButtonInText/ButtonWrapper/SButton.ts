import styled from "styled-components"
import { Link } from "gatsby"
import { motion } from "framer-motion"

import { buttonKanjiSize } from "src/styles/g"

// initial css before comes in

const commonStyle = (size: "small" | "") => {
  return `
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: ${size === "small" ? "12px" : "24px"};
  margin-right: ${size === "small" ? "12px" : "0px"};
  margin-left: ${size === "small" ? "12px" : "0px"};
  height: ${size === "small" ? "auto" : buttonKanjiSize};
  `
}

export const SButton = styled(motion.button)<{ s: { size: "small" | "" } }>`
  ${p => commonStyle(p.s.size)}
  background-color: transparent;
  margin-top: ${p => (p.s.size === "small" ? "12px" : "24px")};
  height: ${p => (p.s.size === "small" ? "auto" : buttonKanjiSize)};
`

export const SLink = styled(motion(Link))<{ s: { size: "small" | "" } }>`
  ${p => commonStyle(p.s.size)}
`
