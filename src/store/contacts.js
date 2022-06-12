import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { uiActions } from './ui'

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactsList: [],
    storiesList: []
  },
  reducers: {
    setContacts: (state, action) => {
      state.contactsList = action.payload
    },
    setStories: (state, action) => {
      state.storiesList = action.payload
    }
  }
})

export default contactsSlice.reducer
export const contactsActions = contactsSlice.actions
export const getContactsData = (limit) => {
  return async (dispatch) => {
    let users = JSON.parse(localStorage.getItem('users'))
    let stories = JSON.parse(localStorage.getItem('stories'))
    if (!users) {
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
      users = res.data.results.map((userData) => {
        return {
          uid: Math.random().toString(),
          name: userData.name.first + ' ' + userData.name.last,
          picture: userData.picture.medium,
          isOnline: true,
          email: userData.email
        }
      })
      dispatch(contactsActions.setContacts(users))
      localStorage.setItem('users', JSON.stringify(users))
      dispatch(
        uiActions.showNotification({
          type: 'success',
          title: 'Success',
          message: 'Data fetched successfully'
        })
      )
    } else {
      dispatch(contactsActions.setContacts(users))
    }
    if (!stories) {
      stories = users.slice(7, 12).map((item) => {
        return {
          uid: item.uid,
          image:
            'https://picsum.photos/seed/' +
            (Math.random() * 1000).toFixed().toString() +
            '/146/248.jpg',
          owner: {
            name: item.name,
            picture: item.picture
          }
        }
      })
      dispatch(contactsActions.setStories(stories))
      localStorage.setItem('stories', JSON.stringify(stories))
    } else {
      dispatch(contactsActions.setStories(stories))
    }
  }
}
