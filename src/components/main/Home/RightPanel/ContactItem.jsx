import React from 'react'
import classes from './ContactItem.module.scss'
const ContactItem = ({ contact }) => {
  return (
    <div className={classes['contact-item']}>
      <div className={classes['contact-item__picture']}>
        <img src={contact.picture} alt="" width={28} />
        <div
          className={`
        ${classes['contact-item__picture__status']}
        ${contact.isOnline ? classes['online'] : ''}`}
        >
          <div></div>
        </div>
      </div>
      <div className={classes['contact-item__name']}>{contact.name}</div>
    </div>
  )
}
export default ContactItem
