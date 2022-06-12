import React from 'react'
import classes from './ContactsList.module.scss'
import ContactItem from './ContactItem'
const ContactsList = ({ contactsList }) => {
  return (
    <div className={classes['contacts-list']}>
      {contactsList.map((contact) => {
        return <ContactItem key={contact.uid} contact={contact} />
      })}
    </div>
  )
}
export default ContactsList
