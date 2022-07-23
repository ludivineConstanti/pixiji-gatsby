import { DataIlluRawProps } from "../../src/models/models"

const fishMaker = (hue: number) => {
  const lightL1 = `hsl(${hue}, 4%, 95%)`
  const light = `hsl(${hue}, 15%, 85%)`
  const colorL1 = `hsl(${hue}, 33%, 67%)`
  const color = `hsl(${hue}, 46%, 52%)`
  const colorD1 = `hsl(${hue}, 65%, 39%)`
  const colorD2 = `hsl(${hue}, 75%, 33%)`
  const colorD3 = `hsl(${hue}, 81%, 28%)`
  const colorD4 = `hsl(${hue}, 85%, 22%)`
  const colorD5 = `hsl(${hue}, 89%, 18%)`
  const dark = `hsl(${hue}, 91%, 16%)`

  const fishData = [
    [
      {
        // rope
        size: 1,
        column: 1,
        row: 5,
        color: lightL1,
      },
      {
        size: 1,
        column: 2,
        row: 5,
        color: lightL1,
      },
      {
        // mouth
        size: 1,
        column: 3,
        row: 4,
        color: lightL1,
      },
      {
        size: 1,
        column: 3,
        row: 5,
        color: light,
      },
      {
        size: 1,
        column: 3,
        row: 6,
        color: light,
      },
      {
        // head
        size: 1,
        column: 4,
        row: 4,
        color: colorL1,
      },
      {
        size: 1,
        column: 4,
        row: 5,
        color,
      },
      {
        size: 1,
        column: 4,
        row: 6,
        color,
      },
      {
        size: 1,
        column: 5,
        row: 3,
        color: colorL1,
      },
      {
        size: 1,
        column: 5,
        row: 4,
        color: colorL1,
      },
      {
        size: 1,
        column: 5,
        row: 5,
        color: light,
      },
      {
        size: 1,
        column: 5,
        row: 6,
        color: light,
      },
      {
        size: 1,
        column: 5,
        row: 7,
        color: colorD1,
      },
      {
        size: 1,
        column: 6,
        row: 3,
        color: colorL1,
      },
      {
        size: 1,
        column: 6,
        row: 4,
        color: lightL1,
      },
      {
        size: 1,
        column: 6,
        row: 5,
        color: dark,
      },
      {
        size: 1,
        column: 6,
        row: 6,
        color: light,
      },
      {
        size: 1,
        column: 6,
        row: 7,
        color: colorD1,
      },
      {
        size: 1,
        column: 7,
        row: 3,
        color: colorL1,
      },
      {
        size: 1,
        column: 7,
        row: 4,
        color: lightL1,
      },
      {
        size: 1,
        column: 7,
        row: 5,
        color: lightL1,
      },
      {
        size: 2,
        column: 7,
        row: 6,
        color: colorD1,
      },
      {
        size: 1,
        column: 8,
        row: 3,
        color: lightL1,
      },
      {
        size: 1,
        column: 8,
        row: 4,
        color,
      },
      {
        size: 1,
        column: 8,
        row: 5,
        color,
      },
      {
        size: 1,
        column: 9,
        row: 3,
        color,
      },
      {
        size: 1,
        column: 9,
        row: 4,
        color: lightL1,
      },
      {
        size: 1,
        column: 9,
        row: 5,
        color: light,
      },
      {
        size: 1,
        column: 9,
        row: 6,
        color: light,
      },
      {
        size: 1,
        column: 9,
        row: 7,
        color: light,
      },
      {
        size: 2,
        column: 10,
        row: 3,
        color,
      },
      {
        size: 3,
        column: 10,
        row: 5,
        color: colorD1,
        main: true,
      },
    ],
    [
      {
        // fin top
        size: 1,
        column: 7,
        row: 2,
        color: colorD5,
      },
      {
        size: 1,
        column: 8,
        row: 2,
        color: colorD5,
      },
      {
        size: 1,
        column: 9,
        row: 2,
        color: colorD5,
      },
      {
        size: 1,
        column: 10,
        row: 2,
        color: colorD5,
      },
      {
        size: 1,
        column: 11,
        row: 2,
        color: colorD5,
      },
      {
        size: 1,
        column: 12,
        row: 2,
        color: colorD5,
      },
      {
        size: 1,
        column: 13,
        row: 2,
        color: colorD5,
      },
      {
        size: 1,
        column: 14,
        row: 2,
        color: colorD5,
      },
      {
        // body
        size: 2,
        column: 12,
        row: 3,
        color,
      },
      {
        size: 2,
        column: 14,
        row: 3,
        color: colorD1,
      },
      {
        size: 3,
        column: 13,
        row: 5,
        color: colorD2,
        main: true,
      },
    ],
    [
      {
        size: 3,
        column: 16,
        row: 3,
        color: colorD3,
        main: true,
      },
      {
        size: 1,
        column: 16,
        row: 6,
        color: colorD4,
      },
      {
        size: 2,
        column: 19,
        row: 3,
        color: colorD4,
      },
      {
        size: 2,
        column: 21,
        row: 3,
        color: colorD5,
      },
      {
        size: 1,
        column: 22,
        row: 5,
        color: colorD5,
      },
      {
        size: 1,
        column: 22,
        row: 2,
        color: colorD5,
      },
      {
        size: 1,
        column: 23,
        row: 2,
        color: colorD5,
      },
      {
        size: 1,
        column: 23,
        row: 3,
        color: colorD5,
      },
      {
        size: 1,
        column: 23,
        row: 1,
        color: colorD5,
      },
    ],
  ]

  return fishData
}

const fish0 = fishMaker(150)
const fish1 = fishMaker(190)
const fish2 = fishMaker(359)

export default [fish0, fish1, fish2] as DataIlluRawProps[][][]
