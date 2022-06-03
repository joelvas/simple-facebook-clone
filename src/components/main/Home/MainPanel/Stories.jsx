import React from 'react'
import classes from './Stories.module.scss'
import StoriesList from './Stories/StoriesList'
const Stories = ({ contactsList }) => {
  return (
    <div className={classes.stories}>
      <StoriesList contactsList={contactsList} />
    </div>
  )
}
export default Stories
