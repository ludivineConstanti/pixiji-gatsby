// == Import npm
import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { motion } from "framer-motion"

import { zIMainSquareHover } from "src/styles/g"
import { tMSIFontSize, tMSIBFontSize } from "src/styles/typo"
import { aAnimateOn } from "src/components/d_Illustrations/_helpers/animation"
import SMainSquare, { SKanji, SInfos, SInfosBottom } from "./SMainSquare"
import { lIllu } from "src/assets/querySelectors"

const hexToRgb = hex => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 }
}

const hslToRgb = hsl => {
  hsl = hsl.replace("hsl(", "").replace("%", "").replace("%)", "").split(",")
  let h = +hsl[0]
  let s = +hsl[1]
  let l = +hsl[2]

  s /= 100
  l /= 100

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0

  if (0 <= h && h < 60) {
    r = c
    g = x
    b = 0
  } else if (60 <= h && h < 120) {
    r = x
    g = c
    b = 0
  } else if (120 <= h && h < 180) {
    r = 0
    g = c
    b = x
  } else if (180 <= h && h < 240) {
    r = 0
    g = x
    b = c
  } else if (240 <= h && h < 300) {
    r = x
    g = 0
    b = c
  } else if (300 <= h && h < 360) {
    r = c
    g = 0
    b = x
  }
  r = Math.round((r + m) * 255)
  g = Math.round((g + m) * 255)
  b = Math.round((b + m) * 255)

  return {
    r,
    g,
    b,
  }
}

const darkerColor = value => {
  return value < 100 ? value : value * 0.7
}

const MainSquare = ({
  size,
  columnStart,
  rowStart,
  color,
  position,
  kanjiIndex,
  kanjisArr,
}) => {
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
      aria-label={lIllu.mainSquare}
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

MainSquare.propTypes = {
  size: PropTypes.number.isRequired,
  columnStart: PropTypes.number.isRequired,
  rowStart: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  kanjiIndex: PropTypes.number.isRequired,
  kanjisArr: PropTypes.array.isRequired,
}

// == Export
export default MainSquare
