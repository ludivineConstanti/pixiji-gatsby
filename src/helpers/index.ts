export const returnformattedDate = () => {
  return new Date().toISOString().slice(0, 10)
}
