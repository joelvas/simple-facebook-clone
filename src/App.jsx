import React, { Fragment } from 'react'
import BaseLayout from './layouts/BaseLayout'
import { Route, Routes, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import WatchPage from './pages/WatchPage'
import MarketPage from './pages/MarketPage'
import GroupsPage from './pages/GroupsPage'
import GamesPage from './pages/GamesPage'
import MenuPage from './pages/MenuPage'
import ProfilePage from './pages/ProfilePage'

const App = () => {
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
