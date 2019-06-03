import {PresidentsReducer} from './PresidentsReducer'
import {LoadingReducer} from './LoadingReducer'
import {ErrorReducer} from './ErrorReducer'
import {combineReducers} from 'redux'

export const rootReducer = combineReducers({
  presidents: PresidentsReducer,
  errorMessage: ErrorReducer,
  isLoadingStatus: LoadingReducer
})