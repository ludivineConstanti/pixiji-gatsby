import { DataIlluRawProps } from "../../src/models/models"

// pink light
const pinkL1 = "#F2BEDD"
// pink
const pink = "#EB8DC5"
// pink dark
const pinkD1 = "#C94D98"
const pinkD2 = "#9B3471"

const tree0 = [
  [
    {
      size: 4,
      column: 3,
      row: 1,
      color: pink,
      main: true,
    },
    {
      size: 2,
      column: 1,
      row: 5,
      color: pink,
    },
  ],
  [
    {
      size: 2,
      column: 3,
      row: 5,
      color: pinkL1,
    },
    {
      size: 4,
      column: 7,
      row: 5,
      color: pinkD1,
      main: true,
    },
  ],
  [
    {
      size: 4,
      column: 3,
      row: 9,
      color: pinkD2,
      main: true,
    },
  ],
]

const tree1 = [
  [
    {
      size: 6,
      column: 1,
      row: 1,
      color: pink,
      main: true,
    },
    {
      size: 2,
      column: 3,
      row: 7,
      color: pinkL1,
    },
  ],
  [
    {
      size: 2,
      column: 7,
      row: 5,
      color: pinkL1,
    },
    {
      size: 4,
      column: 9,
      row: 7,
      color: pinkD1,
      main: true,
    },
  ],
  [
    {
      size: 4,
      column: 7,
      row: 11,
      color: pink,
      main: true,
    },
  ],
]

const tree2P1 = [
  [
    {
      size: 4,
      column: 1,
      row: 5,
      color: pinkD1,
      main: true,
    },
    {
      size: 2,
      column: 5,
      row: 3,
      color: pink,
    },
  ],
  [
    {
      size: 2,
      column: 7,
      row: 1,
      color: pinkL1,
    },
    {
      size: 6,
      column: 5,
      row: 9,
      color: pinkD2,
      main: true,
    },
  ],
  [
    {
      size: 2,
      column: 9,
      row: 3,
      color: pinkD2,
    },
    {
      size: 4,
      column: 11,
      row: 5,
      color: pinkD1,
      main: true,
    },
  ],
  [
    {
      size: 2,
      column: 19,
      row: 3,
      color: pinkD1,
    },
    {
      size: 6,
      column: 15,
      row: 5,
      color: pinkL1,
      main: true,
      position: "right",
    },
  ],
  [
    {
      size: 2,
      column: 11,
      row: 9,
      color: pink,
    },
    {
      size: 6,
      column: 13,
      row: 11,
      color: pinkD1,
      main: true,
    },
  ],
]

const tree2P2 = [
  [
    {
      size: 4,
      column: 1,
      row: 1,
      color: pinkD2,
      main: true,
    },
    {
      size: 2,
      column: 7,
      row: 1,
      color: pink,
    },
  ],
  [
    {
      size: 2,
      column: 9,
      row: 3,
      color: pinkD1,
    },
    {
      size: 4,
      column: 5,
      row: 5,
      color: pinkD2,
      main: true,
    },
    {
      size: 2,
      column: 11,
      row: 1,
      color: pinkL1,
    },
  ],
]

const light = "#FFE8DD"
const brownL5 = "#FFBE9D"
const brownL4 = "#F3A076"
const brownL3 = "#F3A076"
const brownL2 = "#EB8856"
const brownL1 = "#E3743C"
const brown = "#D2632B"
const brownD1 = "#C85E28"
const brownD2 = "#A84A19"
const brownD3 = "#943C0F"
const brownD4 = "#78310C"
const brownD5 = "#692A0A"
const brownD6 = "#401804"
const dark = "#230701"

const deer = [
  [
    {
      // horn left
      size: 1,
      column: 1,
      row: 1,
      color: brownD5,
    },
    {
      size: 1,
      column: 1,
      row: 2,
      color: brownD4,
    },
    {
      size: 1,
      column: 3,
      row: 2,
      color: brownD4,
    },
    {
      size: 1,
      column: 1,
      row: 3,
      color: brownD3,
    },
    {
      size: 1,
      column: 2,
      row: 3,
      color: brownD3,
    },
    {
      size: 1,
      column: 3,
      row: 3,
      color: brownD3,
    },
    {
      size: 1,
      column: 3,
      row: 4,
      color: brownD2,
    },
    {
      size: 1,
      column: 3,
      row: 5,
      color: brownD1,
    },
    {
      // horn right
      size: 1,
      column: 9,
      row: 1,
      color: brownD5,
    },
    {
      size: 1,
      column: 9,
      row: 2,
      color: brownD4,
    },
    {
      size: 1,
      column: 7,
      row: 2,
      color: brownD4,
    },
    {
      size: 1,
      column: 7,
      row: 3,
      color: brownD3,
    },
    {
      size: 1,
      column: 8,
      row: 3,
      color: brownD3,
    },
    {
      size: 1,
      column: 9,
      row: 3,
      color: brownD3,
    },
    {
      size: 1,
      column: 7,
      row: 4,
      color: brownD2,
    },
    {
      size: 1,
      column: 7,
      row: 5,
      color: brownD1,
    },
    {
      // left ear
      size: 1,
      column: 1,
      row: 4,
      color: brownL2,
    },
    {
      size: 1,
      column: 2,
      row: 5,
      color: brownL4,
    },
    {
      // right ear
      size: 1,
      column: 9,
      row: 4,
      color: brownL2,
    },
    {
      size: 1,
      column: 8,
      row: 5,
      color: brownL4,
    },
    {
      // head
      size: 1,
      column: 4,
      row: 5,
      color: brownL2,
    },
    {
      size: 1,
      column: 5,
      row: 5,
      color: brownL2,
    },
    {
      size: 1,
      column: 6,
      row: 5,
      color: brownL2,
    },
    {
      size: 1,
      column: 3,
      row: 6,
      color: brownL2,
    },
    {
      size: 1,
      column: 4,
      row: 6,
      color: brownL3,
    },
    {
      size: 1,
      column: 5,
      row: 6,
      color: brownL1,
    },
    {
      size: 1,
      column: 6,
      row: 6,
      color: brownL3,
    },
    {
      size: 1,
      column: 7,
      row: 6,
      color: brownL2,
    },
    {
      size: 1,
      column: 3,
      row: 7,
      color: brownL3,
    },
    {
      size: 1,
      column: 4,
      row: 7,
      color: dark,
    },
    {
      size: 1,
      column: 5,
      row: 7,
      color: brown,
    },
    {
      size: 1,
      column: 6,
      row: 7,
      color: dark,
    },
    {
      size: 1,
      column: 7,
      row: 7,
      color: brownL3,
    },
    {
      size: 1,
      column: 3,
      row: 8,
      color: brownL5,
    },
    {
      size: 1,
      column: 4,
      row: 8,
      color: brownL4,
    },
    {
      size: 1,
      column: 5,
      row: 8,
      color: brownL1,
    },
    {
      size: 1,
      column: 6,
      row: 8,
      color: brownL3,
    },
    {
      size: 1,
      column: 7,
      row: 8,
      color: brownL5,
    },
    {
      size: 1,
      column: 4,
      row: 9,
      color: light,
    },
    {
      size: 1,
      column: 5,
      row: 9,
      color: dark,
    },
    {
      size: 1,
      column: 6,
      row: 9,
      color: light,
    },
    {
      size: 1,
      column: 5,
      row: 10,
      color: brownL2,
    },
    {
      // neck
      size: 1,
      column: 6,
      row: 10,
      color: brownD2,
    },
    {
      size: 1,
      column: 7,
      row: 9,
      color: brownD2,
    },
    {
      size: 1,
      column: 7,
      row: 10,
      color: brownD1,
    },
    {
      size: 4,
      column: 5,
      row: 11,
      color: brownL1,
      main: true,
    },
    {
      size: 2,
      column: 7,
      row: 15,
      color: brownD1,
    },
    {
      size: 1,
      column: 8,
      row: 17,
      color: brownD2,
    },
  ],
  [
    {
      // body
      size: 6,
      column: 9,
      row: 11,
      color: brown,
      main: true,
    },
    {
      size: 2,
      column: 15,
      row: 11,
      color: brown,
    },
    {
      // front leg
      size: 2,
      column: 9,
      row: 17,
      color: brownD1,
    },
    {
      size: 1,
      column: 11,
      row: 17,
      color: brownD5,
    },
    {
      size: 1,
      column: 9,
      row: 19,
      color: brownD2,
    },
    {
      size: 1,
      column: 10,
      row: 19,
      color: brownD2,
    },
    {
      size: 1,
      column: 9,
      row: 20,
      color: brownD3,
    },
    {
      size: 1,
      column: 10,
      row: 20,
      color: brownD3,
    },
    {
      size: 1,
      column: 9,
      row: 21,
      color: brownD4,
    },
    {
      size: 1,
      column: 9,
      row: 22,
      color: brownD5,
    },
    {
      size: 1,
      column: 9,
      row: 23,
      color: brownD5,
    },
    {
      size: 1,
      column: 8,
      row: 24,
      color: brownD6,
    },
  ],
  [
    {
      // back leg
      size: 2,
      column: 15,
      row: 13,
      color: brownD2,
    },
    {
      size: 2,
      column: 15,
      row: 15,
      color: brownD3,
    },
    {
      size: 4,
      column: 17,
      row: 11,
      color: brownL1,
      main: true,
    },
    {
      size: 1,
      column: 17,
      row: 15,
      color: brownD5,
    },
    {
      // tail
      size: 2,
      column: 21,
      row: 9,
      color: brownL2,
    },
  ],
  [
    {
      size: 3,
      column: 18,
      row: 15,
      color: brownD1,
      main: true,
    },
    {
      size: 2,
      column: 19,
      row: 18,
      color: brownD2,
    },
    {
      size: 1,
      column: 20,
      row: 20,
      color: brownD3,
    },
    {
      size: 1,
      column: 20,
      row: 21,
      color: brownD4,
    },
    {
      size: 1,
      column: 20,
      row: 22,
      color: brownD5,
    },
    {
      size: 1,
      column: 20,
      row: 23,
      color: brownD5,
    },
    {
      size: 1,
      column: 19,
      row: 24,
      color: brownD6,
    },
  ],
]

export default [tree0, tree1, tree2P1, tree2P2, deer] as DataIlluRawProps[][][]
