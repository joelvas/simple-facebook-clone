import React from 'react'
import classes from './OptionContent.module.scss'
import NotificationsContent from './Contents/NotificationsContent'
import MenuContent from './Contents/MenuContent'
import MessagesContent from './Contents/MessagesContent'
import ProfileContent from './Contents/ProfileContent'
import CreateContent from './Contents/CreateContent'

const components = {
  optionProfile: ProfileContent,
  optionMsg: MessagesContent,
  optionNotif: NotificationsContent,
  optionCreate: CreateContent,
  optionMenu: MenuContent
}
const OptionContent = ({ contentName, activeContent }) => {
  const Content = components[contentName]
  return (
    <div
      className={`${classes['option-content']} ${
        activeContent ? classes.active : ''
      }`}
    >
      <Content />
    </div>
  )
}
export default OptionContent
