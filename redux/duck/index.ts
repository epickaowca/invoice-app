import { combineReducers } from 'redux'
import app from './app'
import invoiceForm from './invoiceForm'

const rootReducer = combineReducers({app, invoiceForm})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer