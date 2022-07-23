import { DataIlluRawProps } from "../../src/models/models"

const monkeyLeft = [
  [
    // head
    {
      size: 3,
      column: 3,
      row: 1,
      color: "#D0B49E",
      main: true,
    },
    {
      size: 1,
      column: 2,
      row: 2,
      color: "#DFC3AB",
    },
    {
      size: 1,
      column: 6,
      row: 2,
      color: "#DFC3AB",
    },
    {
      size: 1,
      column: 1,
      row: 3,
      color: "#C08383",
    },
    {
      size: 1,
      column: 2,
      row: 3,
      color: "#E1DAD4",
    },
    {
      size: 1,
      column: 6,
      row: 3,
      color: "#E1DAD4",
    },
    {
      size: 1,
      column: 7,
      row: 3,
      color: "#C08383",
    },
    {
      size: 1,
      column: 1,
      row: 4,
      color: "#B16A6A",
    },
    {
      size: 1,
      column: 2,
      row: 4,
      color: "#BEADA6",
    },
    {
      size: 1,
      column: 3,
      row: 4,
      color: "#4D190F",
    },
    {
      size: 1,
      column: 4,
      row: 4,
      color: "#AC3549",
    },
    {
      size: 1,
      column: 5,
      row: 4,
      color: "#4D190F",
    },
    {
      size: 1,
      column: 6,
      row: 4,
      color: "#BEADA6",
    },
    {
      size: 1,
      column: 7,
      row: 4,
      color: "#B16A6A",
    },
    {
      size: 1,
      column: 2,
      row: 5,
      color: "#BEADA6",
    },
    {
      size: 1,
      column: 3,
      row: 5,
      color: "#CFA7A1",
    },
    {
      size: 1,
      column: 4,
      row: 5,
      color: "#BF4152",
    },
    {
      size: 1,
      column: 5,
      row: 5,
      color: "#CFA7A1",
    },
    {
      size: 1,
      column: 6,
      row: 5,
      color: "#BEADA6",
    },
    {
      size: 1,
      column: 3,
      row: 6,
      color: "#BC9E90",
    },
    {
      size: 1,
      column: 4,
      row: 6,
      color: "#D8607A",
    },
    {
      size: 1,
      column: 5,
      row: 6,
      color: "#BC9E90",
    },
  ],
  // body
  [
    {
      size: 2,
      column: 1,
      row: 7,
      color: "#C1A285",
    },
    {
      size: 3,
      column: 3,
      row: 7,
      color: "#89592C",
      main: true,
    },
    {
      size: 2,
      column: 6,
      row: 7,
      color: "#C1A285",
    },
    {
      size: 1,
      column: 1,
      row: 9,
      color: "#E0C3A7",
    },
    {
      size: 1,
      column: 2,
      row: 9,
      color: "#D2B08F",
    },
    {
      size: 1,
      column: 6,
      row: 9,
      color: "#D2B08F",
    },
    {
      size: 1,
      column: 7,
      row: 9,
      color: "#E0C3A7",
    },
    {
      size: 1,
      column: 2,
      row: 10,
      color: "#CDA37C",
    },
    {
      size: 1,
      column: 3,
      row: 10,
      color: "#CB996B",
    },
    {
      size: 1,
      column: 4,
      row: 10,
      color: "#67402C",
    },
    {
      size: 1,
      column: 5,
      row: 10,
      color: "#CB996B",
    },
    {
      size: 1,
      column: 6,
      row: 10,
      color: "#CDA37C",
    },
    // tail
    {
      size: 1,
      column: 12,
      row: 5,
      color: "#EBCCB0",
    },
    {
      size: 1,
      column: 12,
      row: 6,
      color: "#EBCCB0",
    },
    {
      size: 1,
      column: 11,
      row: 6,
      color: "#EBCCB0",
    },
    {
      size: 1,
      column: 10,
      row: 6,
      color: "#EBCCB0",
    },
    {
      size: 1,
      column: 10,
      row: 7,
      color: "#EBCCB0",
    },
    {
      size: 1,
      column: 10,
      row: 8,
      color: "#E0C3A7",
    },
    {
      size: 1,
      column: 10,
      row: 9,
      color: "#D2B08F",
    },
    {
      size: 1,
      column: 10,
      row: 10,
      color: "#C39C78",
    },
  ],
]

const monkeyRight = [
  // head
  [
    {
      size: 2,
      column: 2,
      row: 1,
      color: "#D0B49E",
    },
    {
      size: 1,
      column: 4,
      row: 1,
      color: "#BB9F88",
    },
    {
      size: 1,
      column: 1,
      row: 2,
      color: "#BDA089",
    },
    {
      size: 1,
      column: 4,
      row: 2,
      color: "#AD5252",
    },
    {
      size: 1,
      column: 5,
      row: 2,
      color: "#D0B49E",
    },
    {
      size: 1,
      column: 1,
      row: 3,
      color: "#AC3549",
    },
    {
      size: 1,
      column: 2,
      row: 3,
      color: "#4D190F",
    },
    {
      size: 1,
      column: 3,
      row: 3,
      color: "#BDA089",
    },
    {
      size: 1,
      column: 4,
      row: 3,
      color: "#AC3549",
    },
    {
      size: 1,
      column: 5,
      row: 3,
      color: "#BDA089",
    },
    {
      size: 1,
      column: 1,
      row: 4,
      color: "#BF4152",
    },
    {
      size: 1,
      column: 2,
      row: 4,
      color: "#CFA7A1",
    },
    {
      size: 2,
      column: 3,
      row: 4,
      color: "#B08069",
    },
    {
      size: 1,
      column: 5,
      row: 4,
      color: "#C3966C",
    },
    {
      size: 1,
      column: 1,
      row: 5,
      color: "#D8607A",
    },
    {
      size: 1,
      column: 2,
      row: 5,
      color: "#BC9E90",
    },
    // body
    {
      size: 2,
      column: 5,
      row: 5,
      color: "#9F7751",
    },
    {
      size: 2,
      column: 3,
      row: 6,
      color: "#C3966C",
    },
    {
      size: 1,
      column: 7,
      row: 6,
      color: "#855F3D",
    },
    {
      size: 3,
      column: 5,
      row: 7,
      color: "#926337",
      main: true,
    },
    {
      size: 2,
      column: 3,
      row: 8,
      color: "#B08069",
    },
    {
      size: 1,
      column: 8,
      row: 8,
      color: "#855F3D",
    },
    {
      size: 1,
      column: 1,
      row: 9,
      color: "#936147",
    },
    {
      size: 1,
      column: 2,
      row: 9,
      color: "#CCA56B",
    },
    {
      size: 1,
      column: 8,
      row: 9,
      color: "#795335",
    },
    // tail
    {
      size: 1,
      column: 9,
      row: 3,
      color: "#FFEBD9",
    },
    {
      size: 1,
      column: 10,
      row: 3,
      color: "#FCDEC2",
    },
    {
      size: 1,
      column: 11,
      row: 3,
      color: "#F9D5B4",
    },
    {
      size: 1,
      column: 11,
      row: 4,
      color: "#EBCCB0",
    },
    {
      size: 1,
      column: 11,
      row: 5,
      color: "#E0C3A7",
    },
    {
      size: 1,
      column: 11,
      row: 6,
      color: "#D2B08F",
    },
    {
      size: 1,
      column: 11,
      row: 7,
      color: "#C39C78",
    },
    {
      size: 1,
      column: 11,
      row: 8,
      color: "#D2B08F",
    },
    {
      size: 1,
      column: 11,
      row: 9,
      color: "#C39C78",
    },
  ],
]

const rocks = [
  [
    {
      size: 1,
      column: 1,
      row: 3,
      color: "#A4BABF",
    },
    {
      size: 1,
      column: 2,
      row: 3,
      color: "#B4C4C8",
    },
    {
      size: 1,
      column: 3,
      row: 3,
      color: "#C1CFD2",
    },
    {
      size: 1,
      column: 4,
      row: 3,
      color: "#D4DCDE",
    },
    {
      size: 4,
      column: 1,
      row: 4,
      color: "#013A3A",
      main: true,
    },
  ],
  [
    {
      size: 1,
      column: 5,
      row: 3,
      color: "#E1E5E6",
    },
    {
      size: 1,
      column: 6,
      row: 3,
      color: "#F1F3F3",
    },
    {
      size: 1,
      column: 7,
      row: 3,
      color: "#E1E5E6",
    },
    {
      size: 1,
      column: 8,
      row: 3,
      color: "#F1F3F3",
    },
    {
      size: 4,
      column: 5,
      row: 4,
      color: "#065151",
      main: true,
    },
  ],
  [
    {
      size: 1,
      column: 9,
      row: 1,
      color: "#A4BABF",
    },
    {
      size: 1,
      column: 10,
      row: 1,
      color: "#B4C4C8",
    },
    {
      size: 1,
      column: 11,
      row: 1,
      color: "#C1CFD2",
    },
    {
      size: 1,
      column: 12,
      row: 1,
      color: "#D4DCDE",
    },
    {
      size: 1,
      column: 13,
      row: 1,
      color: "#E1E5E6",
    },
    {
      size: 1,
      column: 14,
      row: 1,
      color: "#E6F1F1",
    },
    {
      size: 6,
      column: 9,
      row: 2,
      color: "#013434",
      main: true,
    },
  ],
  [
    {
      size: 1,
      column: 15,
      row: 1,
      color: "#E1E5E6",
    },
    {
      size: 1,
      column: 16,
      row: 1,
      color: "#E6F1F1",
    },
    {
      size: 1,
      column: 17,
      row: 1,
      color: "#D4DCDE",
    },
    {
      size: 1,
      column: 18,
      row: 1,
      color: "#E6F1F1",
    },
    {
      size: 1,
      column: 19,
      row: 1,
      color: "#D4DCDE",
    },
    {
      size: 1,
      column: 20,
      row: 1,
      color: "#E6F1F1",
    },
    {
      size: 6,
      column: 15,
      row: 2,
      color: "#055757",
      main: true,
    },
    {
      size: 1,
      column: 21,
      row: 1,
      color: "#D4DCDE",
    },
    {
      size: 1,
      column: 22,
      row: 1,
      color: "#E6F1F1",
    },
    {
      size: 1,
      column: 23,
      row: 1,
      color: "#D4DCDE",
    },
    {
      size: 3,
      column: 21,
      row: 2,
      color: "#013434",
    },
    {
      size: 3,
      column: 21,
      row: 5,
      color: "#044848",
    },
  ],
]

export default [monkeyLeft, monkeyRight, rocks] as DataIlluRawProps[][][]