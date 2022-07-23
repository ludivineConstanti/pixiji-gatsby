import { DataIlluRawProps } from "../../src/models/models"
import { illuColors } from "../../src/models/constants"

const orangeL4 = "#FFDFD9"
const orangeL3 = "#FFBFB3"
const { orangeL2 } = illuColors.cloudDragon
const orangeL1 = "#FF9A86"
const orange = "#FF866F"
const orangeD1 = "#F76C52"
const orangeD2 = "#E05A41"

const blueL3 = "#B8E8FD"
const blueL2 = "#82D8FF"
const blueL1 = "#5BC2F0"
const blue = "#39B5EC"
const blueD1 = "#1AA1DD"
const blueD2 = "#1677A3"

const dark = "#0057A8"

const cloudTop = [
  [
    {
      size: 1,
      column: 1,
      row: 4,
      color: orangeL2,
    },
    {
      size: 2,
      column: 2,
      row: 3,
      color: orangeL3,
    },
    {
      size: 4,
      column: 4,
      row: 1,
      color: orangeL2,
      main: true,
    },
    {
      size: 2,
      column: 8,
      row: 3,
      color: orangeL3,
    },
    {
      size: 1,
      column: 10,
      row: 4,
      color: orangeL2,
    },
    {
      size: 1,
      column: 11,
      row: 4,
      color: orangeL3,
    },
    {
      size: 1,
      column: 12,
      row: 4,
      color: orangeL2,
    },
  ],
]

const dragon = [
  [
    {
      // top tail (orange part)
      size: 1,
      column: 3,
      row: 1,
      color: orangeL4,
    },
    {
      size: 1,
      column: 4,
      row: 2,
      color: orangeL3,
    },
    {
      size: 1,
      column: 5,
      row: 2,
      color: orangeL2,
    },
    {
      size: 1,
      column: 6,
      row: 2,
      color: orangeL2,
    },
    {
      size: 2,
      column: 6,
      row: 3,
      color: orangeL1,
    },
    {
      size: 1,
      column: 7,
      row: 5,
      color: orange,
    },
    {
      size: 2,
      column: 6,
      row: 6,
      color: orangeL1,
    },
    {
      size: 1,
      column: 6,
      row: 8,
      color: orange,
    },
    {
      // tail (blue part)
      size: 1,
      column: 5,
      row: 9,
      color: blueL2,
    },
    {
      size: 1,
      column: 4,
      row: 9,
      color: blueL2,
    },
    {
      size: 1,
      column: 4,
      row: 10,
      color: blueL1,
    },
    {
      size: 1,
      column: 3,
      row: 10,
      color: blueL1,
    },
    {
      size: 2,
      column: 2,
      row: 11,
      color: blueL2,
    },
    {
      size: 1,
      column: 3,
      row: 13,
      color: blueL2,
    },
    {
      size: 2,
      column: 1,
      row: 13,
      color: blueL1,
    },
    {
      size: 2,
      column: 1,
      row: 15,
      color: blueD1,
    },
    {
      size: 1,
      column: 3,
      row: 15,
      color: blueL1,
    },
    {
      size: 2,
      column: 3,
      row: 16,
      color: blue,
    },
    {
      size: 2,
      column: 5,
      row: 16,
      color: blueL1,
    },
    {
      size: 1,
      column: 6,
      row: 15,
      color: blue,
    },
    {
      size: 1,
      column: 7,
      row: 16,
      color: blue,
    },
    {
      size: 1,
      column: 6,
      row: 14,
      color: orangeD2,
    },
    {
      size: 2,
      column: 7,
      row: 14,
      color: blueL1,
    },
    {
      size: 1,
      column: 7,
      row: 13,
      color: blueL1,
    },
    {
      size: 2,
      column: 8,
      row: 12,
      color: blueL2,
    },
    {
      size: 1,
      column: 8,
      row: 11,
      color: orange,
    },
    {
      size: 1,
      column: 10,
      row: 13,
      color: blueL2,
    },
    {
      // back leg
      size: 3,
      column: 11,
      row: 13,
      color: blue,
      main: true,
    },
    {
      size: 1,
      column: 14,
      row: 14,
      color: blueL1,
    },
    {
      size: 1,
      column: 14,
      row: 15,
      color: blue,
    },
    {
      size: 1,
      column: 13,
      row: 16,
      color: blue,
    },
    {
      size: 1,
      column: 12,
      row: 16,
      color: blueD1,
    },
    {
      size: 1,
      column: 12,
      row: 17,
      color: blueD1,
    },
    {
      size: 1,
      column: 13,
      row: 18,
      color: blueD1,
    },
    {
      size: 1,
      column: 14,
      row: 18,
      color: blueD2,
    },
  ],
  [
    {
      // back
      size: 1,
      column: 10,
      row: 12,
      color: blueL1,
    },
    {
      size: 2,
      column: 9,
      row: 10,
      color: blueL1,
    },
    {
      size: 1,
      column: 10,
      row: 9,
      color: orangeL2,
    },
    {
      size: 4,
      column: 11,
      row: 9,
      color: blueL2,
      main: true,
    },
    {
      size: 1,
      column: 12,
      row: 8,
      color: blueL2,
    },
    {
      size: 1,
      column: 13,
      row: 8,
      color: orangeL4,
    },
    {
      size: 1,
      column: 14,
      row: 8,
      color: blueL2,
    },
  ],
  [
    {
      size: 1,
      column: 15,
      row: 8,
      color: orangeL3,
    },
    {
      size: 1,
      column: 16,
      row: 8,
      color: blueL1,
    },
    {
      size: 1,
      column: 15,
      row: 9,
      color: blueL1,
    },
    {
      size: 1,
      column: 16,
      row: 9,
      color: blueL1,
    },
    {
      size: 3,
      column: 15,
      row: 10,
      color: blueL1,
      main: true,
    },
    {
      size: 1,
      column: 17,
      row: 9,
      color: orangeL2,
    },
    {
      size: 1,
      column: 18,
      row: 10,
      color: blueL1,
    },
    {
      size: 1,
      column: 18,
      row: 11,
      color: blueL2,
    },
    {
      size: 2,
      column: 18,
      row: 12,
      color: blueL2,
    },
    {
      size: 1,
      column: 19,
      row: 11,
      color: orangeL1,
    },
    {
      size: 1,
      column: 20,
      row: 12,
      color: blueL2,
    },
    {
      size: 1,
      column: 18,
      row: 14,
      color: blueL2,
    },
  ],
  [
    {
      size: 1,
      column: 20,
      row: 13,
      color: blueL1,
    },
    {
      size: 2,
      column: 19,
      row: 14,
      color: blueL1,
    },
    {
      size: 1,
      column: 21,
      row: 13,
      color: orange,
    },
    {
      size: 3,
      column: 21,
      row: 14,
      color: blue,
      main: true,
    },
    {
      size: 1,
      column: 20,
      row: 16,
      color: blue,
    },
    {
      size: 1,
      column: 23,
      row: 13,
      color: orangeD2,
    },
  ],
  [
    {
      // front leg
      size: 2,
      column: 24,
      row: 14,
      color: blueL1,
    },
    {
      size: 1,
      column: 24,
      row: 16,
      color: blueL1,
    },
    {
      size: 1,
      column: 25,
      row: 16,
      color: blueL1,
    },
    {
      size: 1,
      column: 25,
      row: 17,
      color: blueL1,
    },
    {
      size: 1,
      column: 26,
      row: 18,
      color: blueD1,
    },
    {
      size: 1,
      column: 27,
      row: 18,
      color: blueD2,
    },
  ],
  [
    {
      // neck
      size: 3,
      column: 24,
      row: 11,
      color: blueL2,
      main: true,
    },
    {
      size: 1,
      column: 26,
      row: 14,
      color: blueL2,
    },
  ],
  [
    {
      size: 1,
      column: 23,
      row: 11,
      color: orange,
    },
    {
      size: 3,
      column: 21,
      row: 8,
      color: orange,
      main: true,
    },
    {
      size: 1,
      column: 24,
      row: 9,
      color: orangeD1,
    },
    {
      size: 1,
      column: 24,
      row: 10,
      color: orangeD1,
    },
    {
      size: 1,
      column: 25,
      row: 10,
      color: orangeD2,
    },
    {
      size: 1,
      column: 22,
      row: 7,
      color: orange,
    },
  ],
  [
    {
      size: 1,
      column: 20,
      row: 8,
      color: orangeL1,
    },
    {
      size: 3,
      column: 19,
      row: 5,
      color: orangeL1,
      main: true,
    },
    {
      size: 2,
      column: 19,
      row: 3,
      color: orangeL2,
    },
    {
      size: 1,
      column: 18,
      row: 3,
      color: orangeL3,
    },
    {
      size: 1,
      column: 18,
      row: 4,
      color: orangeL3,
    },
    {
      size: 1,
      column: 18,
      row: 5,
      color: orangeL3,
    },
    {
      size: 1,
      column: 18,
      row: 6,
      color: orangeL3,
    },
    {
      size: 1,
      column: 19,
      row: 2,
      color: orangeL3,
    },
    {
      size: 2,
      column: 20,
      row: 1,
      color: orangeL3,
    },
    {
      // head
      size: 1,
      column: 22,
      row: 2,
      color: blueL3,
    },
    {
      size: 1,
      column: 23,
      row: 2,
      color: blueL3,
    },
    {
      size: 2,
      column: 21,
      row: 3,
      color: blueL2,
    },
    {
      size: 1,
      column: 23,
      row: 3,
      color: dark,
    },
    {
      size: 1,
      column: 23,
      row: 4,
      color: blueL2,
    },
    {
      size: 1,
      column: 24,
      row: 4,
      color: blueL2,
    },
    {
      size: 1,
      column: 24,
      row: 5,
      color: blueL1,
    },
  ],
]

const cloudDragon = [
  [
    {
      size: 1,
      column: 1,
      row: 4,
      color: orangeL2,
    },
    {
      size: 1,
      column: 2,
      row: 4,
      color: orangeL3,
    },
    {
      size: 1,
      column: 3,
      row: 4,
      color: orangeL2,
    },
    {
      size: 2,
      column: 4,
      row: 3,
      color: orangeL3,
    },
    {
      size: 3,
      column: 6,
      row: 2,
      color: orangeL2,
      main: true,
    },
  ],
  [
    {
      size: 4,
      column: 9,
      row: 1,
      color: orangeL3,
      main: true,
    },
  ],
  [
    {
      size: 4,
      column: 13,
      row: 1,
      color: orangeL2,
      main: true,
    },
    {
      size: 2,
      column: 17,
      row: 3,
      color: orangeL1,
    },
  ],
  [
    {
      size: 3,
      column: 19,
      row: 2,
      color: orangeL2,
      main: true,
    },
  ],
  [
    {
      size: 4,
      column: 22,
      row: 1,
      color: orangeL3,
      main: true,
    },
    {
      size: 2,
      column: 26,
      row: 3,
      color: orangeL2,
    },
    {
      size: 1,
      column: 28,
      row: 4,
      color: orangeL3,
    },
    {
      size: 1,
      column: 29,
      row: 4,
      color: orangeL2,
    },
    {
      size: 1,
      column: 30,
      row: 4,
      color: orangeL3,
    },
  ],
]

const cloudBL = [
  [
    {
      size: 1,
      column: 1,
      row: 4,
      color: orangeL3,
    },
    {
      size: 2,
      column: 2,
      row: 3,
      color: orangeL2,
    },
    {
      size: 4,
      column: 4,
      row: 1,
      color: orangeL3,
      main: true,
      position: "bottom",
    },
  ],
  [
    {
      size: 4,
      column: 8,
      row: 1,
      color: orangeL2,
      main: true,
      position: "bottom",
    },
    {
      size: 2,
      column: 12,
      row: 3,
      color: orangeL3,
    },
    {
      size: 1,
      column: 14,
      row: 4,
      color: orangeL2,
    },
    {
      size: 1,
      column: 15,
      row: 4,
      color: orangeL3,
    },
    {
      size: 1,
      column: 16,
      row: 4,
      color: orangeL2,
    },
  ],
]

const cloudBR = [
  [
    {
      size: 1,
      column: 1,
      row: 4,
      color: orangeL2,
    },
    {
      size: 1,
      column: 2,
      row: 4,
      color: orangeL3,
    },
    {
      size: 1,
      column: 3,
      row: 4,
      color: orangeL2,
    },
    {
      size: 2,
      column: 4,
      row: 3,
      color: orangeL3,
    },
    {
      size: 4,
      column: 6,
      row: 1,
      color: orangeL2,
      main: true,
      position: "bottom",
    },
  ],
  [
    {
      size: 4,
      column: 10,
      row: 1,
      color: orangeL3,
      main: true,
      position: "bottom",
    },
    {
      size: 2,
      column: 14,
      row: 3,
      color: orangeL2,
    },
  ],
]

export default [
  cloudTop,
  dragon,
  cloudDragon,
  cloudBL,
  cloudBR,
] as DataIlluRawProps[][][]
