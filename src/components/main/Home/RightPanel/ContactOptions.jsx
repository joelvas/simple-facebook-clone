import React from 'react'
import classes from './ContactOptions.module.scss'
import NewRoomIcon from './OptionsIcons/NewRoomIcon'
import SearchIcon from './OptionsIcons/SearchIcon'
import OptionsIcon from './OptionsIcons/OptionsIcon'
const ContactOptions = () => {
  return (
    <div className={classes['contact-options']}>
      <ul className={classes['contact-options__list']}>
        <li className={classes['contact-options__list-item']}>
          <div>
            <NewRoomIcon />
          </div>
        </li>
        <li className={classes['contact-options__list-item']}>
          <div>
            <SearchIcon />
          </div>
        </li>
        <li className={classes['contact-options__list-item']}>
          <div>
            <OptionsIcon />
          </div>
        </li>
      </ul>
    </div>
  )
}
export default ContactOptions
