import React from 'react'
import classes from './Create.module.scss'
import CreatePost from './Create/CreatePost'
import CreateRoom from './Create/CreateRoom'
const Create = () => {
  return (
    <div className={classes.create}>
      <CreatePost />
      <CreateRoom />
    </div>
  )
}
export default Create
