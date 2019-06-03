import {PresidentsReducer} from './PresidentsReducer'
import {LoadingReducer} from './LoadingReducer'
import {ErrorReducer} from './ErrorReducer'

describe('reducers', () => {

  describe('PresidentsReducer', () => {
    it('Should return the initial state', () => {
      expect(PresidentsReducer(undefined, {})).toEqual([])
    })

    it('Should handle SET_PRESIDENTS', () => {
      let action = {type: 'SET_PRESIDENTS', presidents: [{number: 1}, {number: 2}]}
      expect(PresidentsReducer([], action)).toEqual(action.presidents)
    })
  })

  describe('LoadingReducer', () => {
    it('Should return the initial state', () => {
      expect(LoadingReducer(undefined, {})).toEqual(false)
    })

    it('Should handle IS_LOADING', () => {
      let action = {type: 'IS_LOADING', bool: true}
      expect(LoadingReducer([], action)).toEqual(action.bool)
    })
  })

  describe('ErrorReducer', () => {
    it('Should return the initial state', () => {
      expect(ErrorReducer(undefined, {})).toEqual('')
    })

    it('Should handle IS_LOADING', () => {
      let action = {type: 'HAS_ERRORED', error: 'error'}
      expect(ErrorReducer([], action)).toEqual(action.error)
    })
  })
})