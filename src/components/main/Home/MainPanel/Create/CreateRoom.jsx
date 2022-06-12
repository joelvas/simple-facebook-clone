import React from 'react'
import classes from './CreateRoom.module.scss'
import RightArrowIcon from './Icons/RightArrowIcon'
import { useSelector } from 'react-redux'
const CreateRoom = () => {
  const contacts = useSelector((state) => state.contacts.contactsList)
  return (
    <div className={classes['create-room']}>
      <div className={classes['create-room__create']}>
        <div className={classes['create-room__create__icon']}>
          <div></div>
        </div>
        <div className={classes['create-room__create__text']}>
          <span>Create Room</span>
        </div>
      </div>
      <div className={classes['create-room__contacts']}>
        <div className={classes['create-room__contacts__list']}>
          {contacts.slice(5, 11).map((contact) => {
            return (
              <img
                src={contact.picture}
                width={40}
                alt={contact.name}
                key={contact.uid + 'a'}
              />
            )
          })}
        </div>
      </div>

      <div className={classes['create-room__rooms-button']}>
        <RightArrowIcon />
      </div>
    </div>
  )
}
export default CreateRoom
