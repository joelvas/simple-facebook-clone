import React from 'react'
import classes from './HomePage.module.scss'
import LeftPanel from '../components/main/Home/LeftPanel'
import RightPanel from '../components/main/Home/RightPanel'
import MainPanel from '../components/main/Home/MainPanel'
import { useSelector } from 'react-redux'
const HomePage = () => {
  const contacts = useSelector((state) => state.contacts.contactsList)
  return (
    <div className={classes['home-page']}>
      <LeftPanel className={classes['home-page__left-panel']} />
      <MainPanel className={classes['home-page__main-panel']} />
      <RightPanel
        contactsList={contacts}
        className={classes['home-page__right-panel']}
      />
    </div>
  )
}
export default HomePage
