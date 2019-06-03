export const ErrorReducer = (state='', action) => {
  switch(action.type) {
    case 'HAS_ERRORED':
      console.log(action.error)
      return action.error
    default:
      return state
  }
}