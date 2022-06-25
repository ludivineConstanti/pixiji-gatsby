import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { useAppSelector, useAppDispatch } from "src/store"
import MenuOrCloseIcon from "src/components/e_Interactives/MenuOrCloseIcon"
import LeftPopUp from "src/components/c_Partials/LeftPopUp"
import PopUp from "./PopUp"
import { updateIdSelectedKanji } from "src/reducer/slices/globalSlice"
import InterrogationMark from "./InterrogationMark"
import Statistics from "./Statistics"
import Meanings from "./Meanings"
import UseCases from "./UseCases"
import ScrollDownArrow from "./ScrollDownArrow"
import { SText, SWrapperSection, SSmallTextWithMargin, Kanji } from "./style"
import { SelectedKanji } from "./models"

const KanjiDetails = () => {
  const { allKanjisJson } = useStaticQuery(graphql`
    query {
      allKanjisJson {
        nodes {
          kanjiId
          kana
          kanaEn
          kanji
          en
          onyomi
          onyomiEn
          kunyomi
          kunyomiEn
          onyomiCompounds {
            en
            kana
            kanaEn
            kanji
          }
        }
      }
    }
  `)

  const dispatch = useAppDispatch()

  const [onyomiExplanationIsVisible, setOnyomiExplanationIsVisible] =
    useState(false)
  const [kunyomiExplanationIsVisible, setKunyomiExplanationIsVisible] =
    useState(false)
  const [scrollDownIsVisible, setScrollDownIsVisible] = useState(true)
  const [ref, setRef] = useState(null)
  const colorMain = useAppSelector(state => state.global.color.main)
  const idSelectedKanji = useAppSelector(state => state.global.idSelectedKanji)

  const selectedKanji = allKanjisJson.nodes.find((kanji: SelectedKanji) => {
    return +kanji.kanjiId === +idSelectedKanji
  })

  useEffect(() => {
    setScrollDownIsVisible(true)
    if (ref) {
      ref.scrollTop = 0
      if (ref.scrollHeight <= ref.offsetHeight) {
        setScrollDownIsVisible(false)
      }
    }
  }, [selectedKanji, ref])

  return (
    <LeftPopUp
      isShowing={selectedKanji ? true : false}
      onWheel={e => {
        if (scrollDownIsVisible) {
          if (e.deltaY > 0 && scrollDownIsVisible) {
            setScrollDownIsVisible(false)
          }
        }
      }}
      setRef={setRef}
    >
      {selectedKanji && (
        <div style={{ color: colorMain }}>
          <MenuOrCloseIcon
            onClick={() => {
              dispatch(updateIdSelectedKanji(false))
            }}
            showsCloseButton={selectedKanji ? true : false}
          />
          <Kanji>
            <SText style={{ marginBottom: "6px" }}>
              {selectedKanji.kanaEn}
            </SText>
            {selectedKanji.kanji}
            <SText style={{ marginTop: "6px" }}>{selectedKanji.en[0]}</SText>
          </Kanji>
          <Meanings selectedKanji={selectedKanji} />
          {selectedKanji.onyomi && (
            <SWrapperSection>
              <PopUp
                text={`On'yomi is the Japanese pronounciation that derives from the Chinese
          way of pronouncing the Kanji ("yomi" means reading in Japanese). It is
          generally used for Japanese words that are made of kanjis combination,
          (look below, or at other kanjis for examples of kanjis combinations).`}
                isVisible={onyomiExplanationIsVisible}
              />
              <InterrogationMark
                setIsVisible={setOnyomiExplanationIsVisible}
                text="On'yomi:"
              />
              <SText>
                {selectedKanji.onyomi}
                <SSmallTextWithMargin>
                  {selectedKanji.onyomiEn}
                </SSmallTextWithMargin>
              </SText>
            </SWrapperSection>
          )}
          {selectedKanji.kunyomi && (
            <SWrapperSection>
              <PopUp
                text={`Kun'yomi is the Kanji's pronounciation based on the Japanese language
            ("yomi" means reading in Japanese). It is generally used when a kanji
            is written individually (like above).`}
                isVisible={kunyomiExplanationIsVisible}
              />
              <InterrogationMark
                setIsVisible={setKunyomiExplanationIsVisible}
                text="Kun'yomi:"
              />
              <SText>
                {selectedKanji.kunyomi}
                <SSmallTextWithMargin>
                  {selectedKanji.kunyomiEn}
                </SSmallTextWithMargin>
              </SText>
            </SWrapperSection>
          )}
          <UseCases selectedKanji={selectedKanji} />
          <Statistics />
          <ScrollDownArrow
            isVisible={scrollDownIsVisible}
            setIsVisible={setScrollDownIsVisible}
            wrapperRef={ref}
          />
        </div>
      )}
    </LeftPopUp>
  )
}

export default KanjiDetails
