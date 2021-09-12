import { breakPointD } from "./g"

const sizes = {
  small: 10,
}

const blackUppercase = `
  text-transform: uppercase;
  font-weight: 900;
`

const boldUppercase = `
  text-transform: uppercase;
  font-weight: 700;
`

// general

export const tTitle = `
  ${blackUppercase}
  font-size: 42px;
    ${breakPointD} {
      font-size: 64px;
      line-height: 62px;
      letter-spacing: 2px;
    }
`
export const tText = `
  font-size: 14px;
  letter-spacing: 0.75px;
  line-height: 20px;
`

// components
// MENU
export const tMLLetterSpacing = 4

export const tMenuLink = `
  ${boldUppercase}
  font-size: 22px;
`

export const tMenuSetting = `
  ${boldUppercase}
  font-size: 14px;
  letter-spacing: 2px;
`

export const tMenuSettingOnOff = `
  ${blackUppercase}
  font-size: ${sizes.small}px;
`

export const tMenuSettingsTitle = `
  ${boldUppercase}
  font-size: 12px;
  letter-spacing: 6px;
`

// QUIZ
export const tQuizHeader = `
  ${boldUppercase}
  font-size: ${sizes.small}px;
  letter-spacing: 6px;
  line-height: 16px;
`
export const tQuizButtonKanji = `
  font-size: 20px;
`
// MAIN SQUARE
export const tMSquareKanji = `
  ${tQuizButtonKanji}
`

export const tMSIFontSize = "12"
export const tMSquareInfos = `
  letter-spacing: 0.75px;
`

export const tMSIBFontSize = "9"
export const tMSquareInfosBottom = `
  ${boldUppercase}
  letter-spacing: 4px;
`

// BUTTON BIG
export const tButtonBigComment = `
  font-size: ${sizes.small}px;
  letter-spacing: 0.3vw;
  font-weight: 700;
`
export const tButtonBigText = `
  ${boldUppercase}
  font-size: 13px;
  letter-spacing: 1px;
  ${breakPointD} {
    font-size: 14px;
    letter-spacing: 4px;
  }
`
// BUTTON IN TEXT
export const tBInTFontSize = "14px"
export const tBInTLetterSpacing = 4

export const tButtonInText = `
  ${boldUppercase}
`

// Input

export const tInput = `
  letter-spacing: 2px;
`

export const tInputLabel = `
font-size: ${sizes.small}px;
letter-spacing: 2px;
`

export const tInputPlaceholder = `
  ${tInput}
`

// Form

export const tFeedback = `
font-size: ${sizes.small}px;
line-height: 16px;
letter-spacing: 2px;
`
