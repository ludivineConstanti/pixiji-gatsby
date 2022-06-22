import React, { useState, useEffect, useMemo, memo } from "react"
import { motion } from "framer-motion"

import { zIMainSquareHover } from "src/styles/g"
import { KanjiRaw } from "src/models"
import { tMSIFontSize, tMSIBFontSize } from "src/styles/typo"
import { aAnimateOn } from "src/components/d_Illustrations/_helpers/animation"
import SMainSquare, { SKanji, SInfos, SInfosBottom } from "./style"
import { hexToRgb, hslToRgb, darkerColor } from "./utils"
import { useAppDispatch } from "src/store"
import { updateIdSelectedKanji } from "src/reducer/slices/globalSlice"

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
  const dispatch = useAppDispatch()

  const [answer, setAnswer] = useState<KanjiRaw | false>(false)
  const [infos, setInfos] = useState<{ answeredWrong: number } | false>(false)

  const colorRGB = useMemo(
    () => (color.slice(0, 1) === "h" ? hslToRgb(color) : hexToRgb(color)),
    [color]
  )

  const v = useMemo(() => {
    const scaleFactor = 8 / size

    return {
      mainSquare: {
        initial: {
          scale: 0,
          backgroundColor: `rgb(${colorRGB.r}, ${colorRGB.g}, ${colorRGB.b})`,
        },
        animateOff: { scale: 0.2 },
        animateOn: aAnimateOn,
        whileHoverEmpty: { scale: 1.5 },
        whileHoverOn: {
          scale: scaleFactor,
          zIndex: zIMainSquareHover,
          padding: `${8 / scaleFactor}px`,
          backgroundColor: `rgb(${darkerColor(colorRGB).r}, ${
            darkerColor(colorRGB).g
          }, ${darkerColor(colorRGB).b})`,
          transition: { type: "spring", damping: 15 },
        },
      },

      infos: {
        infos: {
          initial: { fontSize: 0 },
          whileHoverOn: {
            display: "block",
            opacity: 1,
            fontSize: `${+tMSIFontSize / scaleFactor}px`,
          },
        },
        infosB: {
          initial: { fontSize: 0 },
          whileHoverOn: {
            fontSize: `${+tMSIBFontSize / scaleFactor}px`,
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
      },
    }
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
        color: `rgb(${colorRGB.r}, ${colorRGB.g}, ${colorRGB.b})`,
        size,
        columnStart,
        rowStart,
        position,
      }}
      variants={v.mainSquare}
      initial="initial"
      animate={kanjisArr.length > kanjiIndex ? "animateOn" : "animateOff"}
      // eslint-disable-next-line no-nested-ternary
      whileHover={
        answer && !answer.kanji && kanjisArr.length > kanjiIndex
          ? "whileHoverEmpty"
          : kanjisArr.length > kanjiIndex
          ? "whileHoverOn"
          : "whileHoverOff"
      }
      exit="initial"
      onClick={() => {
        dispatch(updateIdSelectedKanji(kanjisArr[kanjiIndex].kanjiId))
      }}
    >
      {answer && (
        <>
          <SInfos variants={v.infos.infos}>
            <motion.span variants={v.infos.kana}>{answer.kana}</motion.span>
            {answer.kanaEn}
          </SInfos>
          <SKanji variants={v.infos.kanji}>{answer.kanji}</SKanji>
          <SInfos variants={v.infos.infos}>{answer.en[0]}</SInfos>
          {infos && infos.answeredWrong > 0 && (
            <SInfosBottom variants={v.infos.infosB}>
              wrong: {infos.answeredWrong} time{infos.answeredWrong > 1 && "s"}
            </SInfosBottom>
          )}
        </>
      )}
    </SMainSquare>
  )
}

export default memo(MainSquare)
