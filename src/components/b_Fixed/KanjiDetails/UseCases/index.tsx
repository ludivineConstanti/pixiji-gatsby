import React from "react"

import { useAppSelector } from "src/store"
import Separator from "../Separator"
import { OnyomiCompoundsProps } from "../models"
import { SSubtitle, SWrapperSection, SSmallText, SExample } from "../style"
import { SKana, SKanaEn, STextInline, SLighter } from "./style"

interface UseCasesProps {
  onyomiCompounds: OnyomiCompoundsProps[]
}

const UseCases = ({ onyomiCompounds }: UseCasesProps) => {
  const colorMainL1 = useAppSelector(state => state.global.color.lighter)

  return (
    <SWrapperSection>
      <SSubtitle>Use cases:</SSubtitle>
      <ul>
        {React.Children.toArray(
          onyomiCompounds.map((compound, compoundIndex) => (
            <SExample
              key={`onyomiCompound${compound.kanji}${compound.kana}${compoundIndex}`}
            >
              {compound.kanji}
              <SKana>{compound.kana}</SKana>
              <SKanaEn>
                <SLighter color={colorMainL1}>{compound.kanaEn}</SLighter>
              </SKanaEn>
              <STextInline>
                {" "}
                {React.Children.toArray(
                  compound.en.map((text: string, textIndex: number) => (
                    <>
                      <SSmallText>{text}</SSmallText>
                      {textIndex !== compound.en.length - 1 ? (
                        <Separator />
                      ) : (
                        ""
                      )}
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
