export const type = 'findCurrentItem'

export default findCurrentItem = id => {
  return {
    type,
    payload:id,
  }
}