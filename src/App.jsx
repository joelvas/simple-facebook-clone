import React, { Fragment, useEffect } from 'react'
import BaseLayout from './layouts/BaseLayout'
import { Route, Routes } from 'react-router-dom'
import { getContactsData } from './store/contacts'
import { useDispatch } from 'react-redux'
import HomePage from './pages/HomePage'
import WatchPage from './pages/WatchPage'
import MarketPage from './pages/MarketPage'
import GroupsPage from './pages/GroupsPage'
import GamesPage from './pages/GamesPage'
import MenuPage from './pages/MenuPage'
import ProfilePage from './pages/ProfilePage'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getContactsData(15))
  }, [])
  return (
    <Fragment>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/watch" element={<WatchPage />} />
          <Route path="/market" element={<MarketPage />} />
          <Route path="/groups" element={<GroupsPage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BaseLayout>
    </Fragment>
  )
}

export default App
