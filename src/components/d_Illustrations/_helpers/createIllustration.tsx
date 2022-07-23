import React from "react"

import MainSquare from "src/components/d_Illustrations/_elements/MainSquare"
import Square from "src/components/d_Illustrations/_elements/Square"
import { DataIlluProps } from "src/models/models"

export const createIllustration = (
  data: DataIlluProps[],
  kanjisArr: number[]
) => {
  const formattedData: JSX.Element[] = []
  data.forEach((square, squareIndex) => {
    if (square.main) {
      formattedData.push(
        <MainSquare
          key={`mainSquare${squareIndex}__${square.indexKanjiGroup}`}
          size={square.size}
          columnStart={square.column}
          rowStart={square.row}
          color={square.color}
          kanjiIndex={square.indexIllu + square.indexKanjiGroup}
          position={square.position || ""}
          kanjisArr={kanjisArr}
        />
      )
    } else {
      formattedData.push(
        <Square
          key={`square${squareIndex}__${square.indexKanjiGroup}`}
          size={square.size}
          columnStart={square.column}
          rowStart={square.row}
          color={square.color}
          kanjiIndex={square.indexIllu + square.indexKanjiGroup}
          kanjisArrLength={kanjisArr.length}
        />
      )
    }
  })
  return formattedData
}
