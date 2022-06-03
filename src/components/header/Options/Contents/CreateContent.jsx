import React, { useState } from 'react'
import classes from './CreateContent.module.scss'
import CreateItem from './Create/CreateItem'
const CreateContent = () => {
  const [fisrtListItems, setFirstListItems] = useState([
    {
      id: Math.random().toString(),
      icon: 'post',
      title: 'Post',
      description: 'Share a post on News Feed.'
    },
    {
      id: Math.random().toString(),
      icon: 'story',
      title: 'Story',
      description: 'Share a photo or write something.'
    },
    {
      id: Math.random().toString(),
      icon: 'room',
      title: 'Room',
      description:
        'Video chat with anyone, on or off Facebook, without time limits.'
    }
  ])
  const [secondListItems, setSecondListItems] = useState([
    {
      id: Math.random().toString(),
      icon: 'page',
      title: 'Page',
      description: 'Connect and share with customer or fans.'
    },
    {
      id: Math.random().toString(),
      icon: 'ad',
      title: 'Ad',
      description: 'Advertise your business, brand or organization.'
    },
    {
      id: Math.random().toString(),
      icon: 'group',
      title: 'Group',
      description: 'Connect with people who share your interests.'
    },
    {
      id: Math.random().toString(),
      icon: 'event',
      title: 'Event',
      description: 'Bring people together with a public or private event.'
    },
    {
      id: Math.random().toString(),
      icon: 'market',
      title: 'Marketplace Listing',
      description: 'Sell items to peaople in your community.'
    }
  ])
  return (
    <div className={classes['create-content']}>
      <div className={classes['create-content__title']}>
        <span>Create</span>
      </div>
      <ul className={classes['create-content__first-list']}>
        {fisrtListItems.map((item) => {
          return <CreateItem key={item.id} item={item} />
        })}
      </ul>
      <div className={classes.divide}>
        <div></div>
      </div>
      <ul className={classes['create-content__second-list']}>
        {secondListItems.map((item) => {
          return <CreateItem key={item.id} item={item} />
        })}
      </ul>
    </div>
  )
}
export default CreateContent
