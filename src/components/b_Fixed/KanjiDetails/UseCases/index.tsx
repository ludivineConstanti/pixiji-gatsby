import React from "react"

import { useAppSelector } from "src/store"
import Separator from "../Separator"
import { SelectedKanji } from "../models"
import { SSubtitle, SWrapperSection, SSmallText, SExample } from "../style"
import { SKana, SKanaEn, STextInline, SLighter } from "./style"

interface UseCasesProps {
  selectedKanji: SelectedKanji
}

const UseCases = ({ selectedKanji }: UseCasesProps) => {
  const colorMainL1 = useAppSelector(state => state.global.color.lighter)

  return (
    <SWrapperSection>
      <SSubtitle>Use cases:</SSubtitle>
      <ul>
        {React.Children.toArray(
          selectedKanji.onyomiCompounds.map(e => (
            <SExample>
              {e.kanji}
              <SKana>{e.kana}</SKana>
              <SKanaEn>
                <SLighter color={colorMainL1}>{e.kanaEn}</SLighter>
              </SKanaEn>
              <STextInline>
                {" "}
                {React.Children.toArray(
                  e.en.map((text: string, i: number) => (
                    <>
                      <SSmallText>{text}</SSmallText>
                      {i !== e.en.length - 1 ? <Separator /> : ""}
                    </>
                  ))
                )}
              </STextInline>
            </SExample>
          ))
        )}
      </ul>
    </SWrapperSection>
  )
}

export default UseCases
