import React, { useEffect, useState, memo, useMemo } from "react"

import { colorToRgb } from "src/helpers/colors"
import { useAppDispatch, useAppSelector } from "src/store"
import { updateColor } from "src/reducer/slices/globalSlice"
import { createIllustration } from "src/components/d_Illustrations/_helpers/createIllustration"
import { SPColorMain, SColorMain } from "./style"
import { IlluProps } from "src/models"

const Illu = ({ kanjisArr = [], renderIllu, arrDataIllu }: IlluProps) => {
  const dispatch = useAppDispatch()

  const pColorMain = useAppSelector(state => state.global.color.previous)
  const colorMain = useAppSelector(state => state.global.color.main)

  const { colorIllu } = arrDataIllu

  const [vSColorMain, setVsColorMain] = useState({})

  useEffect(() => {
    setVsColorMain({
      initial: { width: "0vw" },
      animate: { width: "100%", transition: { mass: 5 } },
    })

    const colorRGB = colorToRgb(colorIllu)
    const lighter = `rgb(${colorRGB.r + 25}, ${colorRGB.g + 25}, ${
      colorRGB.b + 25
    })`

    dispatch(
      updateColor({
        main: colorIllu,
        lighter,
      })
    )
  }, [colorIllu])

  const arr = useMemo(() => {
    const { arrIllu } = arrDataIllu

    const arrIlluFormatted = []
    // need the number at the end so that it doesn't always start from 0
    // while pushing the groups in the squareContainer array
    let beginAtIndex = 0
    for (let i = 0; i < arrIllu.length; i += 1) {
      arrIlluFormatted.push(
        createIllustration(arrIllu[i], i, beginAtIndex, kanjisArr)
      )
      beginAtIndex += arrIllu[i].length
    }

    const arrNumKanjis = []
    let numKanjisCounter = 0
    for (let i = 0; i < arrIllu.length; i += 1) {
      numKanjisCounter += arrIllu[i].length
      arrNumKanjis.push(numKanjisCounter)
    }

    return { illuFormatted: arrIlluFormatted, numKanjis: arrNumKanjis }
  }, [kanjisArr])

  return (
    <>
      <SPColorMain s={{ color: pColorMain }} />
      <SColorMain
        s={{ color: colorMain }}
        variants={vSColorMain}
        initial="initial"
        animate="animate"
      />
      {renderIllu(arr.illuFormatted, kanjisArr.length, arr.numKanjis)}
    </>
  )
}

export default memo(Illu)
