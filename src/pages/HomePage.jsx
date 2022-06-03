import React, { useState, useEffect } from 'react'
import classes from './HomePage.module.scss'
import LeftPanel from '../components/main/Home/LeftPanel'
import RightPanel from '../components/main/Home/RightPanel'
import MainPanel from '../components/main/Home/MainPanel'
const HomePage = () => {
  const [contactsList, setContactsList] = useState([
    {
      id: Math.random().toString(),
      name: 'San HC',
      isOnline: true,
      picture:
        'https://z-p3-scontent.flim3-3.fna.fbcdn.net/v/t39.30808-1/284815657_1059027821661865_1282041086073015288_n.jpg?stp=c0.0.100.100a_dst-jpg_p100x100&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeHrLxzj5xCHl1RhtvtO3BzDZgcn3YWOAl9mByfdhY4CXzN809ILbVktux4AeEduHZZS5ZGSFWgQdCoXccHxsNB_&_nc_ohc=yAOnCz-MNskAX-9Lpq7&_nc_ad=z-m&_nc_cid=1549&_nc_ht=z-p3-scontent.flim3-3.fna&oh=00_AT_BM1fvLmUOdbRzoookZhi6OTN7E3WCaxaZzu3WrxJsSw&oe=629BB94C'
    }
  ])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://randomuser.me/api/')
      const data = await response.json()
      const userData = await data.results[0]
      const user = {
        id: Math.random().toString(),
        name: userData.name.first + ' ' + userData.name.last,
        picture: userData.picture.medium,
        isOnline: true,
        email: userData.email
      }
      return user
    }
    const saveData = (user) => {
      setContactsList((oldVal) => {
        return [...oldVal, user]
      })
    }
    const repeatFetch = async () => {
      for (let i = 0; i <= 10; i++) {
        const user = await fetchData()
        saveData(user)
      }
    }
    repeatFetch()
  }, [])
  return (
    <div className={classes['home-page']}>
      <LeftPanel className={classes['home-page__left-panel']} />
      <MainPanel
        contactsList={contactsList.slice(0, 5)}
        className={classes['home-page__main-panel']}
      />
      <RightPanel
        contactsList={contactsList}
        className={classes['home-page__right-panel']}
      />
    </div>
  )
}
export default HomePage
