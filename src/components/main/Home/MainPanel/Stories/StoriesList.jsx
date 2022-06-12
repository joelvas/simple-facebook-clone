import React from 'react'
import classes from './StoriesList.module.scss'
import StoryItem from './StoryItem'
const StoriesList = ({ storiesList }) => {
  return (
    <ul className={classes['stories-list']}>
      {storiesList.map((story) => {
        return <StoryItem key={story.uid} item={story} />
      })}
    </ul>
  )
}
export default StoriesList
