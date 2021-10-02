// == Import npm
import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"

import { zIMainSquareHover } from "src/styles/g"
import { tMSIFontSize, tMSIBFontSize } from "src/styles/typo"
import { aAnimateOn } from "src/components/d_Illustrations/_helpers/animation"
import SMainSquare, { SKanji, SInfos, SInfosBottom } from "./SMainSquare"
import { hexToRgb, hslToRgb, darkerColor } from "./utils"

interface MainSquareProps {
  size: number
  columnStart: number
  rowStart: number
  color: string
  position: string
  kanjiIndex: number
  kanjisArr: {
    answer: string
    infosAnswer: { answeredRight: number; answeredWrong: number }
  }[]
}

const MainSquare = ({
  size,
  columnStart,
  rowStart,
  color,
  position,
  kanjiIndex,
  kanjisArr,
}: MainSquareProps) => {
  const [answer, setAnswer] = useState(false)
  const [infos, setInfos] = useState(false)
  const [vMainSquare, setVMainSquare] = useState({
    initial: { scale: 0 },
    animateOff: { scale: 0.2 },
    animateOn: aAnimateOn,
    whileHoverEmpty: { scale: 1.5 },
  })
  const [vInfos, setVInfos] = useState({
    infos: {},
    infosB: {},
    kana: {},
    kanji: {},
  })

  useEffect(() => {
    const colorRGB =
      color.slice(0, 1) === "h" ? hslToRgb(color) : hexToRgb(color)

    const scaleFactor = 8 / size

    setVMainSquare({
      ...vMainSquare,
      initial: {
        backgroundColor: `rgb(${colorRGB.r}, ${colorRGB.g}, ${colorRGB.b})`,
      },
      whileHoverOn: {
        scale: scaleFactor,
        zIndex: zIMainSquareHover,
        padding: `${8 / scaleFactor}px`,
        backgroundColor: `rgb(${darkerColor(colorRGB.r)}, ${darkerColor(
          colorRGB.g
        )}, ${darkerColor(colorRGB.b)})`,
        transition: { type: "spring", damping: 15 },
      },
    })

    setVInfos({
      infos: {
        initial: { fontSize: 0 },
        whileHoverOn: {
          display: "block",
          opacity: 1,
          fontSize: `${tMSIFontSize / scaleFactor}px`,
        },
      },
      infosB: {
        initial: { fontSize: 0 },
        whileHoverOn: {
          fontSize: `${tMSIBFontSize / scaleFactor}px`,
          bottom: `${8 / scaleFactor}px`,
        },
      },
      kana: {
        whileHoverOn: { marginRight: `${8 / scaleFactor}px` },
      },
      kanji: {
        whileHoverOn: {
          fontSize: `${28 / scaleFactor}px`,
          margin: `${8 / scaleFactor}px`,
        },
      },
    })
  }, [])

  useEffect(() => {
    if (!answer && kanjisArr[kanjiIndex]) {
      if (kanjisArr[kanjiIndex].answer) {
        setAnswer(kanjisArr[kanjiIndex].answer)
        setInfos(kanjisArr[kanjiIndex].infosAnswer)
      } else {
        setAnswer(kanjisArr[kanjiIndex])
      }
    } else if (!kanjisArr.length) {
      setAnswer(false)
      setInfos(false)
    }
  }, [kanjisArr])

  return (
    <SMainSquare
      s={{
        color,
        size,
        columnStart,
        rowStart,
        position,
      }}
      variants={vMainSquare}
      initial="initial"
      animate={kanjisArr.length > kanjiIndex ? "animateOn" : "animateOff"}
      // eslint-disable-next-line no-nested-ternary
      whileHover={
        !answer.kanji && kanjisArr.length > kanjiIndex
          ? "whileHoverEmpty"
          : kanjisArr.length > kanjiIndex
          ? "whileHoverOn"
          : "whileHoverOff"
      }
      onMouseEnter={() =>
        setVMainSquare({ ...vMainSquare, animateOn: aAnimateOn })
      }
      exit="initial"
    >
      {answer && (
        <>
          <SInfos variants={vInfos.infos}>
            <motion.span variants={vInfos.kana}>{answer.kana}</motion.span>
            {answer.kanaEn}
          </SInfos>
          <SKanji variants={vInfos.kanji}>{answer.kanji}</SKanji>
          <SInfos variants={vInfos.infos}>{answer.en}</SInfos>
          {infos.answeredWrong > 0 && (
            <SInfosBottom variants={vInfos.infosB}>
              wrong: {infos.answeredWrong} time{infos.answeredWrong > 1 && "s"}
            </SInfosBottom>
          )}
        </>
      )}
    </SMainSquare>
  )
}

export default MainSquare
