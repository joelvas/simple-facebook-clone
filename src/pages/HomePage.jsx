import React, { useState, useEffect } from 'react'
import classes from './HomePage.module.scss'
import LeftPanel from '../components/main/Home/LeftPanel'
import RightPanel from '../components/main/Home/RightPanel'
import MainPanel from '../components/main/Home/MainPanel'
import { useDispatch, useSelector } from 'react-redux'
import { getContactsData } from '../store/contacts'
const HomePage = () => {
  const dispatch = useDispatch()
  const contacts = useSelector((state) => state.contacts.contactsList)
  useEffect(() => {
    dispatch(getContactsData(10))
  }, [])
  return (
    <div className={classes['home-page']}>
      <LeftPanel className={classes['home-page__left-panel']} />
      <MainPanel
        contactsList={contacts.slice(0, 5)}
        className={classes['home-page__main-panel']}
      />
      <RightPanel
        contactsList={contacts}
        className={classes['home-page__right-panel']}
      />
    </div>
  )
}
export default HomePage
