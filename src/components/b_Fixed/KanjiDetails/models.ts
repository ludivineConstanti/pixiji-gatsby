export interface SelectedKanji {
  kanjiId: number
  kana: string
  kanaEn: string
  kanji: string
  en: string[]
  onyomi: string
  onyomiEn: string
  kunyomi: string
  kunyomiEn: string
  onyomiCompounds: {
    en: string[]
    kana: string
    kanaEn: string
    kanji: string
  }[]
}
