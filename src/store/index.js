import { configureStore } from '@reduxjs/toolkit'
import contactsReducer from './contacts'
import uiReducer from './ui'

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    ui: uiReducer
  }
})

export default store
