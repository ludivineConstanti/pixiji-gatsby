import { DataIlluRawProps } from "../../src/models/models"

const black = "#000000"
const white = "#FFFFFF"

const sun = [
  [
    {
      // top
      size: 1,
      column: 2,
      row: 1,
      color: "#AF0700",
    },
    {
      size: 1,
      column: 3,
      row: 1,
      color: "#C6140D",
    },
    {
      size: 1,
      column: 4,
      row: 1,
      color: "#D5221B",
    }, // middle
    {
      size: 3,
      column: 2,
      row: 2,
      color: "#B40C05",
      main: true,
    }, // left
    {
      size: 1,
      column: 1,
      row: 2,
      color: "#D5221B",
    },
    {
      size: 1,
      column: 1,
      row: 3,
      color: "#C6140D",
    },
    {
      size: 1,
      column: 1,
      row: 4,
      color: "#AF0700",
    }, // right
    {
      size: 1,
      column: 5,
      row: 2,
      color: "#D5221B",
    },
    {
      size: 1,
      column: 5,
      row: 3,
      color: "#C6140D",
    },
    {
      size: 1,
      column: 5,
      row: 4,
      color: "#AF0700",
    }, // bottom
    {
      size: 1,
      column: 2,
      row: 5,
      color: "#AF0700",
    },
    {
      size: 1,
      column: 3,
      row: 5,
      color: "#C6140D",
    },
    {
      size: 1,
      column: 4,
      row: 5,
      color: "#D5221B",
    },
  ],
]

const cloudLeft = [
  // left part
  [
    {
      size: 1,
      column: 1,
      row: 3,
      color: "#E6F1F1",
    },
    {
      size: 1,
      column: 2,
      row: 3,
      color: "#DBE6EA",
    },
    {
      size: 2,
      column: 3,
      row: 2,
      color: "#CCDCE0",
    },
    {
      size: 2,
      column: 5,
      row: 2,
      color: "#BDCDD1",
    },
    {
      size: 3,
      column: 7,
      row: 1,
      color: "#AAC8CF",
      main: true,
    },
  ], // right part
  [
    {
      size: 3,
      column: 10,
      row: 1,
      color: "#8AB3BE",
      main: true,
    },
    {
      size: 2,
      column: 13,
      row: 2,
      color: "#BDCDD1",
    },
    {
      size: 1,
      column: 15,
      row: 3,
      color: "#DBE6EA",
    },
    {
      size: 1,
      column: 16,
      row: 3,
      color: "#E0F1F1",
    },
  ],
]

const cloudRight = [
  [
    {
      // left part
      size: 1,
      column: 1,
      row: 3,
      color: "#E6F1F1",
    },
    {
      size: 1,
      column: 2,
      row: 3,
      color: "#DBE6EA",
    },
    {
      size: 1,
      column: 3,
      row: 3,
      color: "#CCDCE0",
    },
    {
      size: 2,
      column: 4,
      row: 2,
      color: "#DBE6EA",
    },
    {
      size: 3,
      column: 6,
      row: 1,
      color: "#CCDCE0",
      main: true,
    },
  ],
  [
    // right part
    {
      size: 3,
      column: 9,
      row: 1,
      color: "#A9C8CF",
      main: true,
    },
    {
      size: 1,
      column: 12,
      row: 3,
      color: "#CCDCE0",
    },
    {
      size: 1,
      column: 13,
      row: 3,
      color: "#DBE6EA",
    },
  ],
]

const rockLeft = [
  [
    {
      size: 1,
      column: 1,
      row: 3,
      color: "#A4B5BD",
    },
    {
      size: 3,
      column: 2,
      row: 1,
      color: "#C5CDD0",
      main: true,
    },
    {
      size: 2,
      column: 5,
      row: 2,
      color: "#A4B5BD",
    },
  ],
]

const baby = [
  [
    {
      size: 1,
      column: 4,
      row: 7,
      color: black,
    },
    {
      size: 2,
      column: 5,
      row: 7,
      color: "#AAC8CF",
    },
    {
      size: 1,
      column: 3,
      row: 8,
      color: black,
    },
    {
      size: 1,
      column: 4,
      row: 8,
      color: black,
    },
    {
      size: 1,
      column: 1,
      row: 9,
      color: black,
    },
    {
      size: 1,
      column: 2,
      row: 9,
      color: black,
    },
    {
      size: 3,
      column: 3,
      row: 9,
      color: "#97BDCC",
      main: true,
    },
    {
      size: 1,
      column: 2,
      row: 10,
      color: black,
    },
    {
      size: 1,
      column: 5,
      row: 12,
      color: "#8EA0A4",
    },
  ],
  [
    // beak
    {
      size: 1,
      column: 9,
      row: 1,
      color: "#51473E",
    },
    {
      size: 1,
      column: 8,
      row: 2,
      color: "#51473E",
    }, // head
    {
      size: 1,
      column: 6,
      row: 2,
      color: "#B40C05",
    },
    {
      size: 1,
      column: 7,
      row: 2,
      color: black,
    },
    {
      size: 1,
      column: 6,
      row: 3,
      color: "#F4F8FC",
    },
    {
      size: 1,
      column: 7,
      row: 3,
      color: black,
    }, // neck
    {
      size: 1,
      column: 6,
      row: 4,
      color: "#E7E7E7",
    },
    {
      size: 2,
      column: 7,
      row: 4,
      color: black,
    },
    {
      size: 1,
      column: 6,
      row: 5,
      color: "#C5D2DA",
    },
    {
      size: 1,
      column: 9,
      row: 5,
      color: black,
    },
    {
      size: 1,
      column: 8,
      row: 6,
      color: black,
    },
    {
      size: 1,
      column: 9,
      row: 6,
      color: "#C8D3D9",
    },
    {
      size: 1,
      column: 9,
      row: 7,
      color: "#9DB8C6",
    }, // body
    {
      size: 2,
      column: 7,
      row: 7,
      color: "#D9E3E3",
    },
    {
      size: 3,
      column: 6,
      row: 9,
      color: "#B8D0DC",
      main: true,
    }, // left leg
    {
      size: 1,
      column: 4,
      row: 12,
      color: black,
    },
    {
      size: 1,
      column: 4,
      row: 13,
      color: black,
    },
    {
      size: 1,
      column: 4,
      row: 14,
      color: black,
    },
    {
      size: 1,
      column: 4,
      row: 15,
      color: black,
    },
    {
      size: 1,
      column: 4,
      row: 16,
      color: black,
    }, // right leg
    {
      size: 1,
      column: 6,
      row: 12,
      color: black,
    },
    {
      size: 1,
      column: 6,
      row: 13,
      color: black,
    },
    {
      size: 1,
      column: 6,
      row: 14,
      color: black,
    },
    {
      size: 1,
      column: 6,
      row: 15,
      color: black,
    },
    {
      size: 1,
      column: 6,
      row: 16,
      color: black,
    },
    {
      size: 1,
      column: 7,
      row: 12,
      color: "#8EA0A4",
    },
  ],
]

const adult = [
  [
    // beak
    {
      size: 1,
      column: 1,
      row: 1,
      color: "#655C51",
    },
    {
      size: 1,
      column: 1,
      row: 2,
      color: "#534841",
    },
    {
      size: 1,
      column: 2,
      row: 2,
      color: "#655C51",
    },
    {
      size: 1,
      column: 2,
      row: 3,
      color: "#534841",
    },
    {
      size: 1,
      column: 3,
      row: 3,
      color: "#534841",
    },
    {
      size: 1,
      column: 2,
      row: 4,
      color: "#534841",
    }, // head
    {
      size: 1,
      column: 3,
      row: 4,
      color: black,
    },
    {
      size: 1,
      column: 4,
      row: 4,
      color: "#B40C05",
    },
    {
      size: 1,
      column: 3,
      row: 5,
      color: black,
    },
    {
      size: 1,
      column: 4,
      row: 5,
      color: "#F4F8FC",
    }, // neck
    {
      size: 2,
      column: 2,
      row: 6,
      color: black,
    },
    {
      size: 1,
      column: 4,
      row: 6,
      color: "#E7E7E7",
    },
    {
      size: 1,
      column: 4,
      row: 7,
      color: "#C5D2DA",
    },
    {
      size: 1,
      column: 1,
      row: 7,
      color: black,
    },
    {
      size: 1,
      column: 1,
      row: 8,
      color: "#A4B3BA",
    },
    {
      size: 1,
      column: 2,
      row: 8,
      color: black,
    },
    {
      size: 1,
      column: 1,
      row: 9,
      color: "#B4C1C8",
    },
    {
      size: 2,
      column: 2,
      row: 9,
      color: "#F8F9F9",
    },
    {
      size: 1,
      column: 4,
      row: 10,
      color: "#E7E7E7",
    },
    {
      size: 1,
      column: 5,
      row: 10,
      color: "#F4F5F7",
    },
    {
      size: 1,
      column: 2,
      row: 11,
      color: "#8BA5AF",
    },
    {
      size: 2,
      column: 3,
      row: 11,
      color: "#A4B5BD",
    },
    {
      size: 1,
      column: 5,
      row: 11,
      color: "#E7E7E7",
    },
    {
      size: 3,
      column: 5,
      row: 12,
      color: "#B6D0DC",
      main: true,
    },
    {
      size: 1,
      column: 4,
      row: 13,
      color: "#8BA5AF",
    },
  ],
  [
    // middle
    {
      size: 2,
      column: 6,
      row: 7,
      color: "#ECF0F1",
    },
    {
      size: 1,
      column: 8,
      row: 7,
      color: "#859092",
    },
    {
      size: 1,
      column: 8,
      row: 8,
      color: "#708995",
    },
    {
      size: 2,
      column: 9,
      row: 7,
      color: "#7992A0",
    },
    {
      size: 3,
      column: 6,
      row: 9,
      color: "#9EC4D6",
      main: true,
    },
    {
      size: 2,
      column: 9,
      row: 9,
      color: "#677D89",
    },
    {
      size: 1,
      column: 9,
      row: 11,
      color: "#B4BCBE",
    },
  ],
  [
    // wings top
    {
      size: 1,
      column: 7,
      row: 2,
      color: white,
    },
    {
      size: 1,
      column: 7,
      row: 3,
      color: "#ECF7FA",
    },
    {
      size: 1,
      column: 7,
      row: 4,
      color: "#C0CED4",
    },
    {
      size: 2,
      column: 8,
      row: 3,
      color: "#FBFDFF",
    },
    {
      size: 1,
      column: 10,
      row: 4,
      color: "#EEEBE6",
    },
    {
      size: 1,
      column: 7,
      row: 5,
      color: black,
    },
    {
      size: 1,
      column: 8,
      row: 5,
      color: black,
    },
    {
      size: 1,
      column: 9,
      row: 5,
      color: black,
    },
    {
      size: 1,
      column: 10,
      row: 5,
      color: "#F5F4F2",
    },
    {
      size: 3,
      column: 11,
      row: 5,
      color: "#99B0B8",
      main: true,
    },
    {
      size: 1,
      column: 8,
      row: 6,
      color: "#F9FAFC",
    },
    {
      size: 1,
      column: 9,
      row: 6,
      color: "#D1DDE4",
    },
    {
      size: 1,
      column: 10,
      row: 6,
      color: black,
    },
  ], // bottom wings
  [
    {
      size: 1,
      column: 14,
      row: 6,
      color: "#EEEBE6",
    },
    {
      size: 1,
      column: 15,
      row: 6,
      color: "#FBFDFF",
    },
    {
      size: 1,
      column: 14,
      row: 7,
      color: "#022227",
    },
    {
      size: 2,
      column: 15,
      row: 7,
      color: "#AABDC8",
    },
    {
      size: 1,
      column: 14,
      row: 8,
      color: "#001013",
    },
    {
      size: 3,
      column: 11,
      row: 8,
      color: black,
      main: true,
    },
    {
      size: 2,
      column: 10,
      row: 11,
      color: black,
    },
    {
      size: 1,
      column: 12,
      row: 11,
      color: "#EEEBE6",
    },
    {
      size: 1,
      column: 12,
      row: 12,
      color: "#FBFDFF",
    },
  ], // legs
  [
    {
      size: 2,
      column: 8,
      row: 12,
      color: "#D6DEE0",
    },
    {
      size: 1,
      column: 10,
      row: 13,
      color: white,
    },
    {
      size: 1,
      column: 8,
      row: 14,
      color: "#BECACD",
    },
    {
      size: 3,
      column: 9,
      row: 14,
      color: "#8AAFBD",
      main: true,
    },
    {
      size: 2,
      column: 7,
      row: 15,
      color: "#B4BFC3",
    },
    {
      size: 1,
      column: 8,
      row: 17,
      color: "#8EA0A4",
    },
    {
      size: 1,
      column: 8,
      row: 18,
      color: black,
    },
    {
      size: 1,
      column: 8,
      row: 19,
      color: black,
    },
    {
      size: 1,
      column: 8,
      row: 20,
      color: black,
    },
    {
      size: 1,
      column: 8,
      row: 21,
      color: black,
    },
    {
      size: 1,
      column: 8,
      row: 22,
      color: black,
    },
    {
      size: 1,
      column: 8,
      row: 23,
      color: black,
    },
    {
      size: 1,
      column: 8,
      row: 24,
      color: black,
    },
    {
      size: 1,
      column: 11,
      row: 17,
      color: "#8EA0A4",
    },
    {
      size: 1,
      column: 12,
      row: 17,
      color: black,
    },
    {
      size: 1,
      column: 12,
      row: 18,
      color: black,
    },
    {
      size: 1,
      column: 12,
      row: 19,
      color: black,
    },
    {
      size: 1,
      column: 12,
      row: 20,
      color: black,
    },
    {
      size: 1,
      column: 12,
      row: 21,
      color: black,
    },
    {
      size: 1,
      column: 12,
      row: 22,
      color: black,
    },
    {
      size: 1,
      column: 12,
      row: 23,
      color: black,
    },
    {
      size: 1,
      column: 12,
      row: 24,
      color: black,
    },
  ],
]

const rockRight = [
  [
    {
      size: 2,
      column: 1,
      row: 2,
      color: "#A4B5BD",
    },
    {
      size: 3,
      column: 3,
      row: 1,
      color: "#C5CDD0",
      main: true,
      position: "right",
    },
  ],
]

export default [
  sun,
  cloudLeft,
  cloudRight,
  rockLeft,
  baby,
  adult,
  rockRight,
] as DataIlluRawProps[][][]
