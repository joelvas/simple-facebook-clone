import React from 'react'
import classes from './CommentsList.module.scss'
import CommentItem from './CommentItem'
const CommentsList = () => {
  return (
    <ul className={classes['comments-list']}>
      <CommentItem />
    </ul>
  )
}
export default CommentsList
