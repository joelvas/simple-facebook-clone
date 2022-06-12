import React from 'react'
import classes from './Stories.module.scss'
import StoriesList from './Stories/StoriesList'
import { useSelector } from 'react-redux'
const Stories = () => {
  const storiesList = useSelector((state) => state.contacts.storiesList)
  return (
    <div className={classes.stories}>
      <StoriesList storiesList={storiesList} />
    </div>
  )
}
export default Stories
