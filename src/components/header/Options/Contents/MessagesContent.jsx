import React, { useState } from 'react'
import classes from './MessagesContent.module.scss'
import MessagesHeader from './Messages/MessagesHeader'
import MessagesList from './Messages/MessagesList'
import MessagesSearchBar from './Messages/MessagesSearchBar'
const MessagesContent = () => {
  const [messages, setMessages] = useState([
    {
      id: 'm1',
      name: 'Juan',
      message: 'Hola, como estas?',
      time: '13:53',
      read: false,
      profile:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 'm2',
      name: 'Jose',
      message: 'Hello man',
      time: '10:00',
      read: true,
      profile:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 'm3',
      name: 'Jose',
      message: 'Hello man',
      time: '10:00',
      read: true,
      profile:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 'm4',
      name: 'Jose',
      message: 'Hello man',
      time: '10:00',
      read: true,
      profile:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 'm5',
      name: 'Jose',
      message: 'Hello man',
      time: '10:00',
      read: true,
      profile:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 'm6',
      name: 'Jose',
      message: 'Hello man',
      time: '10:00',
      read: true,
      profile:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 'm7',
      name: 'Jose',
      message: 'Hello man',
      time: '10:00',
      read: true,
      profile:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    },
    {
      id: 'm8',
      name: 'Jose',
      message: 'Hello man',
      time: '10:00',
      read: true,
      profile:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
    }
  ])
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
