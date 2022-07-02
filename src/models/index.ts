export interface DataIllu {
  s: number
  column: number
  row: number
  c: string
  main?: "bottom" | boolean
  position?: "right" | "left" | "top" | "bottom"
  animationCase?: string
}

export interface IlluProps {
  kanjisArr?: number[]
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

export type QuizIdOptions = 1 | 2 | 3
