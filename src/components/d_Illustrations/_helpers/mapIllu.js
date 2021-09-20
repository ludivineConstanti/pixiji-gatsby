export const mapIllu = (arrData, animationCase) => {
  arrData.forEach(subArr => {
    subArr.forEach(dataObj => {
      dataObj.animationCase = animationCase
    })
  })
  return arrData
}
