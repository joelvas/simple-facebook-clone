import React, { useState, useEffect } from 'react'
import classes from './MessagesContent.module.scss'
import MessagesHeader from './Messages/MessagesHeader'
import MessagesList from './Messages/MessagesList'
import MessagesSearchBar from './Messages/MessagesSearchBar'
import { useSelector } from 'react-redux'
let first = true
const MessagesContent = () => {
  const [messages, setMessages] = useState([
    {
      id: 'm1',
      name: 'Juan',
      message: 'Hola, como estas?',
      time: '13:53',
      read: false,
      profile: 'https://ui-avatars.com/api/?background=random&name=Juan'
    },
    {
      id: 'm2',
      name: 'Jose',
      message: 'Hello man',
      time: '10:00',
      read: true,
      profile: 'https://ui-avatars.com/api/?background=random&name=Jose'
    },
    {
      id: 'm3',
      name: 'Jose',
      message: 'Hello man',
      time: '10:00',
      read: true,
      profile: 'https://ui-avatars.com/api/?background=random&name=Jose'
    },
    {
      id: 'm4',
      name: 'Jose',
      message: 'Hello man',
      time: '10:00',
      read: true,
      profile: 'https://ui-avatars.com/api/?background=random&name=Jose'
    },
    {
      id: 'm5',
      name: 'Jose',
      message: 'Hello man',
      time: '10:00',
      read: true,
      profile: 'https://ui-avatars.com/api/?background=random&name=Jose'
    },
    {
      id: 'm6',
      name: 'Jose',
      message: 'Hello man',
      time: '10:00',
      read: true,
      profile: 'https://ui-avatars.com/api/?background=random&name=Jose'
    },
    {
      id: 'm7',
      name: 'Jose',
      message: 'Hello man',
      time: '10:00',
      read: true,
      profile: 'https://ui-avatars.com/api/?background=random&name=Jose'
    },
    {
      id: 'm8',
      name: 'Jose',
      message: 'Hello man',
      time: '10:00',
      read: true,
      profile: 'https://ui-avatars.com/api/?background=random&name=Jose'
    }
  ])
  const contacts = useSelector((state) => state.contacts.contactsList)
  useEffect(() => {
    setMessages((oldValue) => {
      return oldValue.map((message, i) => {
        message.picture = contacts[i + 5].picture
        message.name = contacts[i + 5].name
        return message
      })
    })
  }, [contacts])
  return (
    <div className={classes['messages-content']}>
      <MessagesHeader />
      <MessagesSearchBar />
      <MessagesList messages={messages} />
      <div className={classes['messages-content__footer']}>
        View all in Messenger
      </div>
    </div>
  )
}
export default MessagesContent
