import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { useAppSelector } from "src/store"
import { SText, SSmallText } from "../style"

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
}

const HasScoreData = ({ answeredRight, answeredWrong }: HasScoreDataProps) => {
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
  const currentKanji = allKanjisJson.nodes.find(
    e => +e.kanjiId === +idSelectedKanji
  )

  const percentageSuccess = Math.ceil(
    (answeredRight.length / (answeredRight.length + answeredWrong.length)) * 100
  )

  return (
    <>
      {answeredRight.length === 0 && answeredWrong.length === 0 ? (
        <SText>
          You do not have any score for this kanji yet.
          <br />
          {`You can find it in the Quiz ${currentKanji.quizId}.`}
        </SText>
      ) : (
        <>
          <SText>
            <SSmallText>Answered right:</SSmallText>{" "}
            {`${answeredRight.length} time${
              answeredRight.length > 1 ? "s" : ""
            }`}
          </SText>
          <SText>
            <SSmallText>Answered wrong:</SSmallText>{" "}
            {`${answeredWrong.length} time${
              answeredWrong.length > 1 ? "s" : ""
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
