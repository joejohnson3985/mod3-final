export const setPresidents = (presidents) => ({
  type: 'SET_PRESIDENTS',
  presidents
})

export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  bool
})

export const hasErrored = (error) => ({
  type: 'HAS_ERRORED',
  error
})