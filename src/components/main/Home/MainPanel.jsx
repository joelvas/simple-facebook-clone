import React from 'react'
import classes from './MainPanel.module.scss'
import Stories from './MainPanel/Stories'
import Create from './MainPanel/Create'
import Posts from './MainPanel/Posts'
const MainPanel = ({ className, contactsList }) => {
  return (
    <section className={`${classes['main-panel']} ${className}`}>
      <Stories contactsList={contactsList} />
      <Create />
      <Posts />
    </section>
  )
}
export default MainPanel
