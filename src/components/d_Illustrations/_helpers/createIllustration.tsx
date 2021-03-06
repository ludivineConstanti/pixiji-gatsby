import React from "react"

import MainSquare from "src/components/d_Illustrations/_elements/MainSquare"
import Square from "src/components/d_Illustrations/_elements/Square"
import { DataIllu } from "src/models/models"

export const createIllustration = (
  data: DataIllu[][],
  groupIndex: number,
  numPreviousGroups: number,
  kanjisArr: number[]
) => {
  const formattedData: JSX.Element[] = []
  let counter = 0
  for (let i = 0; i < data.length; i += 1) {
    // eslint-disable-next-line no-loop-func
    data[i].forEach((square: DataIllu) => {
      counter += 1
      if (square.main) {
        formattedData.push(
          <MainSquare
            key={`mainSquare${counter}__${groupIndex}`}
            size={square.s}
            columnStart={square.column}
            rowStart={square.row}
            color={square.c}
            kanjiIndex={numPreviousGroups + i}
            position={square.position || ""}
            kanjisArr={kanjisArr}
          />
        )
      } else {
        formattedData.push(
          <Square
            key={`square${counter}__${groupIndex}`}
            size={square.s}
            columnStart={square.column}
            rowStart={square.row}
            color={square.c}
            kanjiIndex={numPreviousGroups + i}
            kanjisArrLength={kanjisArr.length}
          />
        )
      }
    })
  }
  return formattedData
}
