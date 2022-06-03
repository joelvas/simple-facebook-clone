import React from 'react'
import classes from './RightPanel.module.scss'
import Contacts from './RightPanel/Contacts'
import Sponsors from './RightPanel/Sponsors'
const RightPanel = ({ className, contactsList }) => {
  return (
    <aside className={`${classes['right-panel']} ${className}`}>
      <Sponsors />
      <div className={classes['right-panel__divide']}>
        <div></div>
      </div>
      <Contacts contactsList={contactsList} />
    </aside>
  )
}
export default RightPanel
