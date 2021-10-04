export interface KanjiRaw {
  id: number
  kanji: string
  en: string
  kana: string
  kanaEn: string
  quizId: number
}

export interface DataIllu {
  s: number
  column: number
  row: number
  c: string
  main?: boolean | undefined
  position?: "right" | "left" | "top" | "bottom" | undefined
  animationCase?: string
}

export interface IlluProps {
  kanjisArr?: KanjiRaw[]
  renderIllu: (
    data: JSX.Element[][],
    kanjis: number,
    arrNumKanjis: number[]
  ) => JSX.Element
  arrDataIllu: {
    arrIllu: DataIllu[][][]
    colorIllu: string
  }
}
