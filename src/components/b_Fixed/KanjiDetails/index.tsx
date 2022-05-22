import React, { useState } from "react"
import styled, { css } from "styled-components"

import { useAppDispatch, useAppSelector } from "src/store"
import { MenuOrCloseIcon, LeftPopUp } from "src/components"
import { buttonWidth } from "src/styles/g"
import { tMenuSettingsTitle } from "src/styles/typo"

const sidePadding = 28

const Kanji = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(68px + 2vw);
  text-align: center;
  flex-direction: column;
  grid-column: 1 / -1;
  margin: 60px 0;
`

const InterrogationMarkWrapper = styled.div`
  height: 16px;
  width: 16px;
  background-color: black;
  color: white;
  text-align: center;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  letter-spacing: 0;
`

const Subtitle = styled.h2`
  ${tMenuSettingsTitle}
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`

const Text = styled.p`
  margin-bottom: 8px;
`

const Small = styled.span`
  font-size: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 0 16px;
`

const Medium = styled.span`
  font-size: 14px;
  // text-transform: uppercase;
  // letter-spacing: 3px;
`

const Lighter = styled.span<{ color: string }>`
  color: ${p => p.color};
`

const WrapperSection = styled.div`
  padding: ${sidePadding}px;
  position: relative;
`

const Example = styled.li`
  margin: 16px 0;
`

const Statistics = styled.div<{ backgroundColor: string }>`
  background-color: ${p => p.backgroundColor};
  color: white;
  width: 100%;
  padding: ${sidePadding}px;
`

const Slash = styled.span`
  margin: 0 8px;
`

const PopUpWrapper = styled.div`
  position: absolute;
  transform: translate(0, -100%);
  line-height: 20px;
  font-size: 15px;
  margin-right: ${sidePadding}px;
`

const PopUpBackground = styled.div`
  padding: ${sidePadding}px;
  background-color: white;
`

const InterrogationMark = ({ setIsVisible }) => (
  <InterrogationMarkWrapper
    onMouseEnter={() => setIsVisible(true)}
    onMouseLeave={() => setIsVisible(false)}
  >
    ?
  </InterrogationMarkWrapper>
)

const PopUp = ({ text, color }) => (
  <PopUpWrapper>
    <PopUpBackground style={{ border: `2px solid ${color}` }}>
      {text}
    </PopUpBackground>
  </PopUpWrapper>
)

const Separator = () => <Slash>-</Slash>

const KanjiDetails = () => {
  const [onyomiExplanationIsVisible, setOnyomiExplanationIsVisible] =
    useState(false)
  const [kunyomiExplanationIsVisible, setKunyomiExplanationIsVisible] =
    useState(false)
  const colorMain = useAppSelector(state => state.global.color.main)
  const colorMainL1 = useAppSelector(state => state.global.color.lighter)
  return (
    <LeftPopUp isShowing={true}>
      <div style={{ color: colorMain }}>
        <MenuOrCloseIcon onClick={() => {}} showsCloseButton={true} />
        <Kanji>
          <Medium>ichi</Medium>一<Medium>one</Medium>
        </Kanji>
        <WrapperSection>
          <Subtitle>Meanings:</Subtitle>
          <Medium>
            One <Separator /> best <Separator /> first <Separator /> foremost{" "}
            <Separator /> beginning <Separator /> start
          </Medium>
        </WrapperSection>
        <WrapperSection style={{ backgroundColor: "rgba(255, 255, 255)" }}>
          {onyomiExplanationIsVisible && (
            <PopUp
              text={`On'yomi is the Japanese pronounciation that derives from the Chinese
          way of pronouncing the Kanji ("yomi" means reading in Japanese). It is
          generally used for Japanese words that are made of kanjis combination,
          (look below, or at other kanjis for examples of kanjis combinations).`}
              color={colorMainL1}
            />
          )}
          <Subtitle>
            <InterrogationMark setIsVisible={setOnyomiExplanationIsVisible}>
              ?
            </InterrogationMark>
            On'yomi:
          </Subtitle>
          <Text>
            いち <Small>ichi</Small>
          </Text>
        </WrapperSection>
        <WrapperSection>
          {kunyomiExplanationIsVisible && (
            <PopUp
              text={`Kun'yomi is the Kanji's pronounciation based on the Japanese language
            ("yomi" means reading in Japanese). It is generally used when a kanji
            is written individually (like above).`}
              color={colorMainL1}
            />
          )}
          <Subtitle>
            <InterrogationMark setIsVisible={setKunyomiExplanationIsVisible}>
              ?
            </InterrogationMark>
            Kun'yomi:
          </Subtitle>
          <Text>
            イチ <Small>ichi</Small>
          </Text>
        </WrapperSection>
        <WrapperSection style={{ backgroundColor: "rgba(255, 255, 255)" }}>
          <Subtitle>Use cases:</Subtitle>
          <ul>
            <Example>
              一 位{" "}
              <Small>
                イチイ <Lighter color={colorMainL1}>(ichii)</Lighter>
              </Small>
              <Medium> first place</Medium>
            </Example>
            <Example>
              均 一 <Small>キンイツ (KIINIITSU)</Small>
              <Medium>uniformity, equality</Medium>
            </Example>
            <Example>
              １ 対 １ <Small>イチタイイチ (ICHITAIICHI)</Small>
              <Medium> one-on-one</Medium>
            </Example>{" "}
            <Example>
              一 <Small>イツ</Small>{" "}
              <Medium>one, same (mind, path, etc.)</Medium>
            </Example>
            <Example>
              一 に <Small>イツニ</Small>{" "}
              <Medium>solely, entirely, only</Medium>
            </Example>
            <Example>
              均 一 <Small>キンイツ</Small>{" "}
              <Medium>uniformity, equality</Medium>
            </Example>
            <Example>
              画 一 <Small>カクイツ</Small>{" "}
              <Medium>uniformity, standardization</Medium>
            </Example>
          </ul>
        </WrapperSection>
        <Statistics backgroundColor={colorMainL1}>
          <Subtitle>Statistics:</Subtitle>
          <Text>This month: </Text>
          <Text>
            <Small>Answered correctly:</Small> 2 times
          </Text>
          <Text>
            <Small>Answered wrong:</Small> 2 times
          </Text>
          <Text>
            50% <Small>Success rate</Small>
          </Text>
        </Statistics>
      </div>
    </LeftPopUp>
  )
}

export default KanjiDetails
