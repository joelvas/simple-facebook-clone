import React from 'react'
import classes from './ProfileSecondPanel.module.scss'
import SecondPanelSettings from './Settings/SecondPanelSettings'
import SecondPanelDisplay from './Display/SecondPanelDisplay'
import SecondPanelSupport from './Support/SecondPanelSupport'

const components = {
  settings: SecondPanelSettings,
  support: SecondPanelSupport,
  display: SecondPanelDisplay
}

const ProfileSecondPanel = ({ itemList, onClickBack }) => {
  const Content = components[itemList.picture]
  const clickBackHandler = () => {
    onClickBack()
  }
  return (
    <div className={classes}>
      <Content onClickBack={clickBackHandler} itemList={itemList} />
    </div>
  )
}
export default ProfileSecondPanel
