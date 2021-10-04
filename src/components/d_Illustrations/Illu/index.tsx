import React, { useEffect, useState, memo } from "react"

import { useAppDispatch, useAppSelector } from "src/store"
import { updateColor } from "src/reducer/slices/globalSlice"
import { createIllustration } from "src/components/d_Illustrations/_helpers/createIllustration"
import { SPColorMain, SColorMain } from "./SIllu"
import { IlluProps } from "src/models"

const Illu = ({ kanjisArr = [], renderIllu, arrDataIllu }: IlluProps) => {
  const dispatch = useAppDispatch()

  const pColorMain = useAppSelector(state => state.global.color.previous)
  const colorMain = useAppSelector(state => state.global.color.main)

  const { arrIllu, colorIllu } = arrDataIllu

  const [vSColorMain, setVsColorMain] = useState({})

  useEffect(() => {
    setVsColorMain({
      initial: { width: "0vw" },
      animate: { width: "100%", transition: { mass: 5 } },
    })

    const colorIlluL1 = colorIllu
    const colorIlluD1 = colorIllu

    dispatch(
      updateColor({
        main: colorIllu,
        lighter: colorIlluL1,
        darker: colorIlluD1,
      })
    )
    setTimeout(() => {
      dispatch(updateColor({ main: colorIllu }))
    }, 1000)
  }, [colorIllu])

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

  return (
    <>
      <SPColorMain s={{ color: pColorMain }} />
      <SColorMain
        s={{ color: colorMain }}
        variants={vSColorMain}
        initial="initial"
        animate="animate"
      />
      {renderIllu(arrIlluFormatted, kanjisArr.length, arrNumKanjis)}
    </>
  )
}

export default memo(Illu)
