import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { uiActions } from './ui'

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
export const getContactsData = (limit) => {
  return async (dispatch) => {
    const res = await axios
      .get('https://randomuser.me/api/?results=' + limit)
      .catch((error) => {
        dispatch(
          uiActions.showNotification({
            type: 'error',
            title: 'Error',
            message: error.message
          })
        )
      })
    if (res) {
      const users = res.data.results.map((userData) => {
        return {
          id: Math.random().toString(),
          name: userData.name.first + ' ' + userData.name.last,
          picture: userData.picture.medium,
          isOnline: true,
          email: userData.email
        }
      })
      dispatch(contactActions.setContacts(users))
      dispatch(
        uiActions.showNotification({
          type: 'success',
          title: 'Success',
          message: 'Data fetched successfully'
        })
      )
    }
  }
}
