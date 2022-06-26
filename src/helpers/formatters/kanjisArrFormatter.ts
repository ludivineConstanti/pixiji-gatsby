import { shuffle } from "../shuffle"

export const kanjisArrFormatter = (kanjis, kanjisNum: number) => {
  // need to make a copy of the array by spreading it (otherwise it's a dynamic copy and it's useless)
  // this way it doesn't mess up the data for the quizzes
  // (both the illustrations used for deco and the quizzes use the same kanjis data
  // but the one for deco removes elements from the array so that it doesn't use the
  // same characters on multiple pages, so if we use the same array for this and the quizzes,
  // there will be missing characters for the quiz).
  const kanjisCopy = kanjis.map(e => e.kanjiId)

  shuffle(kanjisCopy)
  const kanjisArr = []
  for (let i = 0; i < kanjisNum; i += 1) {
    kanjisArr.push(kanjisCopy.shift())
  }
  return kanjisArr
}

export const getKanjisNum = (arrOfArrs: any[][]) => {
  let length = 0
  arrOfArrs.forEach(arr => {
    length += arr.length
  })
  return length
}
