import React, { useEffect, memo, useMemo } from "react"
import { useMotionValue } from "framer-motion"

import { SStarContainer } from "./style"
import { createStar, createVStar, useCreateTranslate } from "./helpers"

// Ref for animation => https://framerbook.com/animation/example-animations/24-cursor/

interface StarsProps {
  color: string
}

const Stars = ({ color }: StarsProps) => {
  /* useResizeObserver(ref, target => {
    setWidth(target.clientWidth)
    setHeight(target.clientHeight)
  }) */

  // choose 95 instead of 100 so that it doesn't go off screen
  // (have to take into account the width of height of the stars themselves)
  // x and y that the event listener will update
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }

    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const starsObj = useMemo(() => {
    // const colorL1 = Color.toHexString(Color.lighten(Color(color), 15));
    const colorL1 = color

    const vStar = {
      s: createVStar([1, 0.5], [color, colorL1], 250),
      m: createVStar([0.75, 1], [colorL1, color], 500),
      l: createVStar([1, 0.9], [color, colorL1], 7500),
    }

    interface ArrStars {
      s: JSX.Element[]
      m: JSX.Element[]
      l: JSX.Element[]
    }

    const arrStars: ArrStars = { s: [], m: [], l: [] }

    for (let i = 0; i < 11; i += 1) {
      createStar(arrStars.s, 0.125, vStar.s, `sStar${i}`, color)
      if (i >= 6) {
        createStar(arrStars.m, 0.25, vStar.m, `mStar${i}`, color)
      }
      if (i >= 7) {
        createStar(arrStars.l, 0.5, vStar.l, `lStar${i}`, color)
      }
    }

    return { s: arrStars.s, m: arrStars.m, l: arrStars.l }
  }, [])

  const translateX = useMemo(() => {
    return {
      s: useCreateTranslate(x, 1920, 50),
      m: useCreateTranslate(x, 1920, 22.5),
      l: useCreateTranslate(x, 1920, 10),
    }
  }, [])

  const translateY = useMemo(() => {
    return {
      s: useCreateTranslate(y, 1080, 50),
      m: useCreateTranslate(y, 1080, 22.5),
      l: useCreateTranslate(y, 1080, 10),
    }
  }, [])

  return (
    <>
      <SStarContainer
        key="starContainerS"
        style={{ translateX: translateX.s, translateY: translateY.s }}
        init="init"
        animate="animate"
        exit="init"
      >
        {starsObj.s}
      </SStarContainer>
      <SStarContainer
        key="starContainerM"
        style={{ translateX: translateX.m, translateY: translateY.m }}
        init="init"
        animate="animate"
        exit="init"
      >
        {starsObj.m}
      </SStarContainer>
      <SStarContainer
        key="starContainerL"
        style={{ translateX: translateX.l, translateY: translateY.l }}
        init="init"
        animate="animate"
        exit="init"
      >
        {starsObj.l}
      </SStarContainer>
    </>
  )
}

export default memo(Stars)
