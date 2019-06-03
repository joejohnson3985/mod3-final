import * as actions from './'

describe('actions', () => {
  it('should create an action to set presidents', () => {
    const presidents = [];
    const expectedAction = {type: 'SET_PRESIDENTS', presidents}
    expect(actions.setPresidents(presidents)).toEqual(expectedAction);
  })

  it('should create an action to set loading status', () => {
    const bool = true;
    const expectedAction = {type: 'IS_LOADING', bool}
    expect(actions.isLoading(bool)).toEqual(expectedAction);
  })

  it('should create an action to error message', () => {
    const error = [];
    const expectedAction = {type: 'HAS_ERRORED', error}
    expect(actions.hasErrored(error)).toEqual(expectedAction);
  })
})