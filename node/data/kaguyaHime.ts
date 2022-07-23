import { DataIlluRawProps } from "../../src/models/models"
import { illuColors } from "../../src/models/constants"

const { colorMoon } = illuColors.kaguyaHime

const moon = [
  [
    {
      size: 4,
      column: 1,
      row: 1,
      color: colorMoon,
      main: true,
    },
  ],
]

const brown = "#3E322E"
const brownD1 = "#2D2826"
const brownD2 = "#211E1D"

// use the same colors for the bamboos
const greenL1 = "#BFDEBC"
const green = "#ACD4A9"

const pinkL2 = "#FAD3C2"
const pinkL1 = "#F8BBBB"
const pink = "#FAA3A3"
const pinkD1 = "#F18C8B"
const pinkD2 = "#E56E6D"
const pinkD3 = "#D66160"
const pinkD4 = "#CB5B5B"

const hime = [
  [
    {
      // hair
      size: 2,
      column: 11,
      row: 1,
      color: brownD1,
    },
    {
      size: 2,
      column: 13,
      row: 1,
      color: brownD2,
    },
    {
      size: 2,
      column: 9,
      row: 3,
      color: brown,
    },
    {
      size: 2,
      column: 11,
      row: 3,
      color: brown,
    },
    {
      size: 2,
      column: 13,
      row: 3,
      color: brownD1,
    },
    {
      size: 2,
      column: 15,
      row: 3,
      color: brownD1,
    },
    {
      size: 2,
      column: 9,
      row: 5,
      color: brown,
    },
    {
      size: 2,
      column: 9,
      row: 7,
      color: brown,
    },
    {
      size: 2,
      column: 15,
      row: 5,
      color: brownD1,
    },
    {
      size: 2,
      column: 15,
      row: 7,
      color: brownD1,
    },
    {
      // face
      size: 4,
      column: 11,
      row: 5,
      color: pinkL2,
      main: true,
    },
    {
      size: 2,
      column: 11,
      row: 9,
      color: greenL1,
    },
    {
      size: 2,
      column: 13,
      row: 9,
      color: green,
    },
  ],
  [
    {
      size: 2,
      column: 9,
      row: 9,
      color: pinkL2,
    },
    {
      size: 4,
      column: 7,
      row: 11,
      color: pinkL1,
      main: true,
    },
  ],
  [
    {
      size: 4,
      column: 11,
      row: 11,
      color: pinkL2,
      main: true,
    },
  ],
  [
    {
      size: 2,
      column: 15,
      row: 9,
      color: pinkL1,
    },
    {
      size: 4,
      column: 15,
      row: 11,
      color: pink,
      main: true,
    },
  ],
  [
    {
      size: 4,
      column: 1,
      row: 15,
      color: pinkL2,
      main: true,
    },
  ],
  [
    {
      size: 4,
      column: 5,
      row: 15,
      color: pink,
      main: true,
    },
    {
      size: 2,
      column: 9,
      row: 15,
      color: pinkD1,
    },
  ],
  [
    {
      size: 2,
      column: 9,
      row: 17,
      color: pinkD2,
    },
    {
      size: 4,
      column: 11,
      row: 15,
      color: pinkD4,
      main: true,
    },
    {
      size: 2,
      column: 15,
      row: 17,
      color: pinkD3,
    },
  ],
  [
    {
      size: 2,
      column: 15,
      row: 15,
      color: pinkD2,
    },
    {
      size: 4,
      column: 17,
      row: 15,
      color: pinkD1,
      main: true,
    },
  ],
  [
    {
      size: 4,
      column: 21,
      row: 15,
      color: pinkL1,
      main: true,
    },
  ],
]

export default [moon, hime] as DataIlluRawProps[][][]
