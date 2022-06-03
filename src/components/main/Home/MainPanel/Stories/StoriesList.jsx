import React, { useState, useEffect } from 'react'
import classes from './StoriesList.module.scss'
import StoryItem from './StoryItem'
const StoriesList = ({ contactsList }) => {
  const [stories, setStories] = useState([])
  useEffect(() => {
    if (contactsList.length === 5) {
      setStories(
        contactsList.map((item) => {
          return {
            id: item.id,
            image:
              'https://picsum.photos/seed/' +
              (Math.random() * 1000).toFixed().toString() +
              '/146/248.jpg',
            owner: {
              name: item.name,
              picture: item.picture
            }
          }
        })
      )
    }
  }, [contactsList])
  return (
    <ul className={classes['stories-list']}>
      {stories.map((story) => {
        return <StoryItem key={story.id} item={story} />
      })}
    </ul>
  )
}
export default StoriesList
