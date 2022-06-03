import React from 'react'
import classes from './Contacts.module.scss'
import ContactsList from './ContactsList'
import ContactOptions from './ContactOptions'
const Contacts = ({ contactsList }) => {
  return (
    <div className={classes.contacts}>
      <div className={classes['contacts__header']}>
        <div className={classes['contacts__header__title']}>Contacts</div>
        <ContactOptions />
      </div>
      <ContactsList contactsList={contactsList} />
    </div>
  )
}
export default Contacts
