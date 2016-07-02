/* global self */
import { createStore } from 'redux'
import reducer, { initialState } from './reducer'
import loggerSubscriber from './subscribers/logger'

const store = createStore(
  reducer,
  initialState
)

loggerSubscriber(store)

self.addEventListener('message', (message) => {
  store.dispatch({
    type: 'ADD_MESSAGE',
    payload: {
      value: message
    }
  })
})
