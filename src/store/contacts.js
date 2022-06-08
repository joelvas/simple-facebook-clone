import { createSlice } from '@reduxjs/toolkit'

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactsList: []
  },
  reducers: {
    setContacts: (state, action) => {
      state.contactsList = action.payload
    }
  }
})

export default contactsSlice.reducer
export const contactActions = contactsSlice.actions

