import styled from "styled-components"
import { motion } from "framer-motion"

import { strokeWidth } from "src/styles/g"
import { tMenuSetting, tMenuSettingOnOff } from "src/styles/typo"
import { DropdownStateOptions } from "./models"

// initial css before comes in transition
export default styled(motion.button)<{
  s: { dropdownState: DropdownStateOptions }
}>`
  ${tMenuSetting}
  border: ${strokeWidth}px solid white;
  border-top: 0 solid white;
  color: white;
  width: 100%;
  text-align: left;
  display: flex;
  align-items: center;
  ${p => p.s.dropdownState && "justify-content: space-between;"}
  padding: 24px;
`

export const SText = styled.div`
  margin-right: 16px;
`

export const SOnOff = styled.div<{ s: { active: boolean; colorMain: string } }>`
  ${tMenuSettingOnOff}
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    props.s.active ? "white" : "rgba(255, 255, 255, 0.25)"};
  color: ${props => props.s.colorMain};
`

export const SDropdown = styled.div<{
  s: { dropdownState: DropdownStateOptions }
}>`
  border-bottom: ${strokeWidth}px solid white;
  border-right: ${strokeWidth}px solid white;
  height: 16px;
  width: 16px;
  transform: rotate(${p => (p.s.dropdownState === "up" ? "225" : "45")}deg)
    translate(${p => (p.s.dropdownState === "up" ? "0, -40%" : "-50%, 0")});
  justify-self: end;
  // align-self: flex-end;
`
