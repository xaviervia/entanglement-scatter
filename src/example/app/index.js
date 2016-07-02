/* global self */
import { createStore } from 'redux'
import reducer, { initialState } from './reducer'
import loggerSubscriber from './subscribers/logger'
import { addMessage } from './actions'

const store = createStore(reducer, initialState)

loggerSubscriber(store)

self.addEventListener(
  'message',
  (message) => store.dispatch(addMessage(message))
)
