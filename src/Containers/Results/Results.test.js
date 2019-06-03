import React from 'react';
import { Results, mapDispatchToProps, mapStateToProps } from './Results';
import { shallow } from 'enzyme';
import {setPresidents, hasErrored, isLoading} from '../../Actions'

describe('Results', () => {

  describe('mapStateToProps', () => {
    it('Should have a mapped state prop', () => {
      let mockState = {presidents: [], isLoadingStatus: false, errorMessage: '', fake: ''}
      let expected = {presidents: [], isLoadingStatus: false, errorMessage: ''}
      const result = mapStateToProps(mockState)
      expect(result).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('Should call setPresidents with correct params', () => {
      let mockPresidents = [{number: 1}, {number: 2}]
      const mockDispatch = jest.fn();
      const actionToDispatch = setPresidents(mockPresidents)
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setPresidents(mockPresidents)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('Should call hasErrored with correct params', () => {
      let mockError = 'error'
      const mockDispatch = jest.fn();
      const actionToDispatch = hasErrored(mockError)
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.hasErrored(mockError)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })

    it('Should call isLoading with correct params', () => {
      let mockBool = true
      const mockDispatch = jest.fn();
      const actionToDispatch = isLoading(mockBool)
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.isLoading(mockBool)
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    })
  })
})