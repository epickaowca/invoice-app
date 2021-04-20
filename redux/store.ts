import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './duck'


export type AppState = ReturnType<typeof reducer>

const store = createStore(reducer, composeWithDevTools())


export default store