import React, { useState } from 'react'
import classes from './ProfileContent.module.scss'
import ProfileFirstPanel from './Profile/FirstPanel/ProfileFirstPanel'
import ProfileSecondPanel from './Profile/SecondPanel/ProfileSecondPanel'
const ProfileContent = () => {
  const [activeFirstPanel, setActiveFirstPanel] = useState(true)
  const [firstPanelItems, setFirstPanelItems] = useState([
    {
      id: Math.random().toString(),
      picture: 'settings',
      text: 'Settings & Privacy',
      hasSecondPanel: true
    },
    {
      id: Math.random().toString(),
      picture: 'support',
      text: 'Help & Support',
      hasSecondPanel: true
    },
    {
      id: Math.random().toString(),
      picture: 'display',
      text: 'Display & Accessibility',
      hasSecondPanel: true
    },
    {
      id: Math.random().toString(),
      picture: 'feedback',
      text: 'Give feedback',
      hasSecondPanel: false
    },
    {
      id: Math.random().toString(),
      picture: 'logout',
      text: 'Log Out',
      hasSecondPanel: false
    }
  ])
  const [secondPanelContent, setSecondPanelContent] = useState(
    firstPanelItems[0]
  )

  const clickItemHandler = (item) => {
    if (item.hasSecondPanel) {
      setSecondPanelContent(item)
      setActiveFirstPanel(false)
    }
  }
  const clickBackHandler = () => {
    setActiveFirstPanel(true)
  }
  return (
    <div className={classes['profile-content']}>
      <div
        className={`
        ${classes['profile-content__panels']} 
        ${activeFirstPanel ? classes.first : classes.second}`}
      >
        <div
          className={`
          ${classes['profile-content__panels__first-panel']} 
          ${!activeFirstPanel ? classes.disabled : ''}`}
        >
          <ProfileFirstPanel
            firstPanelItems={firstPanelItems}
            onClickItem={clickItemHandler}
          />
        </div>
        <div
          className={`
          ${classes['profile-content__panels__second-panel']} 
          ${activeFirstPanel ? classes.disabled : ''}`}
        >
          <ProfileSecondPanel
            onClickBack={clickBackHandler}
            itemList={secondPanelContent}
          />
        </div>
      </div>
    </div>
  )
}
export default ProfileContent
