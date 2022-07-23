import React, { useEffect, useState, memo, useMemo } from "react"

import { colorToRgb } from "src/helpers/colors"
import { useAppDispatch, useAppSelector } from "src/store"
import { updateColor } from "src/reducer/slices/globalSlice"
import { createIllustration } from "src/components/d_Illustrations/_helpers/createIllustration"
import { SPColorMain, SColorMain } from "./style"
import { IlluProps } from "src/models/models"

const Illu = ({ kanjisArr = [], renderIllu, arrDataIllu }: IlluProps) => {
  const dispatch = useAppDispatch()

  const previousMainColor = useAppSelector(state => state.global.color.previous)
  const colorMain = useAppSelector(state => state.global.color.main)

  const { colorIllu } = arrDataIllu

  const [hasMounted, setHasMounted] = useState(false)
  const [vSColorMain, setVsColorMain] = useState({})

  useEffect(() => {
    setHasMounted(true)
  }, [])

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
    // arrNumKanji keeps track of how many kanjis are in one illustration
    // (to decide if a decorative element linked to this illustration should be displayed or not)
    const arrNumKanjis = []
    for (let i = 0; i <= arrIllu[arrIllu.length - 1].indexIllu; i += 1) {
      // create illustration for one element (plant, animal...)
      const currentIllu = arrIllu.filter(e => e.indexIllu === i)
      arrIlluFormatted.push(createIllustration(currentIllu, kanjisArr))
      // keeps track of how many kanjis are in this element
      arrNumKanjis.push(currentIllu[currentIllu.length - 1].indexKanjiGroup + 1)
    }

    return { illuFormatted: arrIlluFormatted, numKanjis: arrNumKanjis }
  }, [kanjisArr])

  return (
    <>
      <SPColorMain
        style={{ backgroundColor: hasMounted ? previousMainColor : colorMain }}
      />
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
