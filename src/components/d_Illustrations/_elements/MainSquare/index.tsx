import React, { useMemo, memo } from "react"
import { motion } from "framer-motion"

import { zIMainSquareHover } from "src/styles/g"
import { tMSIFontSize, tMSIBFontSize } from "src/styles/typo"
import { aAnimateOn } from "src/components/d_Illustrations/_helpers/animation"
import SMainSquare, { SKanji, SInfos } from "./style"
import { darkerColor } from "./utils"
import { colorToRgb } from "src/helpers/colors"
import { useAppDispatch } from "src/store"
import { updateIdSelectedKanji } from "src/reducer/slices/globalSlice"
import { useStaticQuery, graphql } from "gatsby"

interface AllKanjisJsonProps {
  allKanjisJson: {
    nodes: {
      kanjiId: number
      kana: string
      kanaEn: string
      kanji: string
      en: string[]
    }[]
  }
}

interface MainSquareProps {
  size: number
  columnStart: number
  rowStart: number
  color: string
  position: string
  kanjiIndex: number
  kanjisArr: number[]
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
  const { allKanjisJson } = useStaticQuery<AllKanjisJsonProps>(graphql`
    query {
      allKanjisJson {
        nodes {
          kanjiId
          kana
          kanaEn
          kanji
          en
        }
      }
    }
  `)

  const answer = allKanjisJson.nodes.filter(
    e => e.kanjiId === kanjisArr[kanjiIndex]
  )[0]

  const dispatch = useAppDispatch()

  const colorRGB = useMemo(() => colorToRgb(color), [color])

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
        dispatch(updateIdSelectedKanji(answer.kanjiId))
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
        </>
      )}
    </SMainSquare>
  )
}

export default memo(MainSquare)
