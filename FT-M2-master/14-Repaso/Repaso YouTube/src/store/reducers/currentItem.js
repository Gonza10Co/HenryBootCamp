const initialState = 0

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case '':
    return { ...state, ...payload }

  default:
    return state
  }
}
