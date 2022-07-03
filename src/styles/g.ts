// Breakpoints
export const breakPointT = "@media only screen and (min-width: 576px)"
export const breakPointD = "@media only screen and (min-width: 992px)"

// SIZES
// general
export const strokeWidth = 2
// buttons
export const buttonWidth = "calc(3.7vw + 64px)"
export const buttonMenuIconSize = `calc(${buttonWidth} / 3)`
// buttons to answer in the quiz
export const buttonKanjiSize = "72px"
export const buttonKanjiSizeGap = "24px"
// partials
export const contentLWidth = `calc(${buttonKanjiSize} * 3 + ${buttonKanjiSizeGap} * 2)`
export const contentLWidthR = `
  width: calc(100% - ${buttonWidth});
  ${breakPointT} {
    width: calc(100% - ${buttonWidth} * 2);
    max-width: 450px;
  }
  ${breakPointD} {
    width: ${contentLWidth};
  }
`
export const contentLMarginLM = `calc(${buttonWidth} / 2)`
export const contentLMarginLT = buttonWidth
export const contentLMarginL = `calc(3vw + ${buttonWidth})`
// menu (open)
export const contentMenuWidth = `calc(${contentLMarginL} + ${contentLWidth})`
// Illus
export const squareUnitM = "2vw"
export const squareUnitT = "1.5vw"
export const squareUnit = "1.1vw"

// MARGINS (some are in sizes because it's used there)
// Illus
export const illuMarginL = `calc(${contentLWidth} + ${contentLMarginL} * 2)`

// z-index
// parents
export const zImenu = 5
export const zIMSContainerHover = 4
export const zIBigButton = 3
export const zIquestion = 2
export const zIContentL = 2
export const zIIlluWithGrowingSquare = 1
export const zIIlluInFront = 1
export const zIIlluBackground = -1
export const zIAppBackground = -2

// dependant on their parents
export const zIMainSquareHover = 3
export const zISquareHover = 2
export const zIMainSquare = 1

// property group
export const contentL = `
  ${contentLWidthR}
  z-index: ${zIContentL};
  margin: ${contentLMarginLM};
  position: absolute;
  ${breakPointT} {
    margin: ${contentLMarginLT};
  }
  ${breakPointD} {
    margin: 0;
    margin-left: ${contentLMarginL};
    top: 50%;
    transform: translateY(-50%);
  }
`

// for Illustrations
export const illuDimensions = (height: number, width: number) => `
  position: fixed;
  display: grid;
  grid-template: repeat(${height}, 1fr) / repeat(${width}, 1fr);
  height: calc(${height} * ${squareUnitM});
  width: calc(${width} * ${squareUnitM});
  :hover {
    z-index: ${zIMSContainerHover};
  }
  ${breakPointT} {
    height: calc(${height} * ${squareUnitT});
    width: calc(${width} * ${squareUnitT});
  }
  ${breakPointD} {
    height: calc(${height} * ${squareUnit});
    width: calc(${width} * ${squareUnit});
  }
  `

interface Position {
  pos: number[]
  sC?: "buttonWidth" | "illuMarginL"
}

interface ObjProps {
  top?: Position
  right?: Position
  bottom?: Position
  left?: Position
}

export const illuCustomPos = (objProp: ObjProps) => {
  // need an object with the properties that you want to use
  // those properties have an array of 3 coordinates (mobile, tablet, desktop)
  // and an other property to say if you need the buttonMargin to be added or not
  // ex: { bottom: {pos: [3, 12, 3], sC: 'buttonWidth'}} sC => special case
  // the array works with 1, 2 or 3 values, and sC can be skipped
  // 1 value => same value for all, 2 values => 1rst value for mobile, 2nd for tablet and desktop
  // so the minimum prop you need to give as an argument { right: { pos: [3] }}
  const result: {
    right?: string
    left?: string
    top?: string
    bottom?: string
  } = {}
  const arrPos = Object.keys(objProp) as (keyof typeof objProp)[]
  for (const key of arrPos) {
    // eslint-disable-next-line no-nested-ternary
    const marginButton =
      objProp[key].sC === "buttonWidth"
        ? `+ ${buttonWidth}`
        : objProp[key].sC === "illuMarginL"
        ? `+ ${illuMarginL}`
        : ""
    result[key] = `
      ${key}: calc(${objProp[key].pos[0]} * ${squareUnitM} ${marginButton});
      ${breakPointT} {
        ${key}: calc(${
      objProp[key].pos[1] || objProp[key].pos[0]
    } * ${squareUnitT} ${marginButton});
      }
      ${breakPointD} {
        ${key}: calc(${
      objProp[key].pos[2] || objProp[key].pos[1] || objProp[key].pos[0]
    } * ${squareUnit} ${marginButton});
      }
    `
  }
  return result
}
