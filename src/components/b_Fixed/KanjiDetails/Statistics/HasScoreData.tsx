import React, { useMemo } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { useAppSelector } from "src/store"
import { SText, SSmallText } from "../style"
import { returnformattedDate } from "src/helpers/index"
import { dateToNumberArray } from "./util"

interface QueryProps {
  allKanjisJson: {
    nodes: {
      kanjiId: number
      quizId: number
    }[]
  }
}

interface HasScoreDataProps {
  answeredRight: number[][]
  answeredWrong: number[][]
  filteringFunction: (answers: number[][], currentDate: number[]) => number[][]
  selectedTime: string
}

const HasScoreData = ({
  answeredRight,
  answeredWrong,
  filteringFunction,
  selectedTime,
}: HasScoreDataProps) => {
  const { allKanjisJson } = useStaticQuery<QueryProps>(graphql`
    query {
      allKanjisJson {
        nodes {
          kanjiId
          quizId
        }
      }
    }
  `)

  const idSelectedKanji = useAppSelector(state => state.global.idSelectedKanji)

  const currentDate = useMemo(
    () => dateToNumberArray(returnformattedDate()),
    []
  )
  const currentKanji = useMemo(
    () => allKanjisJson.nodes.find(e => +e.kanjiId === +idSelectedKanji),
    [allKanjisJson]
  )

  const currentAnsweredRight = filteringFunction(answeredRight, currentDate)
  const currentAnsweredWrong = filteringFunction(answeredWrong, currentDate)
  const percentageSuccess = Math.ceil(
    (currentAnsweredRight.length /
      (currentAnsweredRight.length + currentAnsweredWrong.length)) *
      100
  )

  return (
    <>
      {currentAnsweredRight.length === 0 &&
      currentAnsweredWrong.length === 0 ? (
        <SText>
          {`You do not have any score, for this kanji${
            answeredRight.length === 0 && answeredWrong.length === 0
              ? " yet"
              : `, for ${selectedTime}`
          }.`}
          <br />
          <br />
          {typeof currentKanji === "object" &&
            `You can find it in the Quiz ${currentKanji.quizId}.`}
        </SText>
      ) : (
        <>
          <SText>
            <SSmallText>Answered right:</SSmallText>{" "}
            {`${currentAnsweredRight.length} time${
              currentAnsweredRight.length > 1 ? "s" : ""
            }`}
          </SText>
          <SText>
            <SSmallText>Answered wrong:</SSmallText>{" "}
            {`${currentAnsweredWrong.length} time${
              currentAnsweredWrong.length > 1 ? "s" : ""
            }`}
          </SText>
          <SText style={{ marginTop: "8px" }}>
            <SSmallText>Success rate</SSmallText>
            {`: ${percentageSuccess}%`}
          </SText>
        </>
      )}
    </>
  )
}

export default HasScoreData
