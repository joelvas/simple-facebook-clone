import React from 'react'
import classes from './PostItem.module.scss'
import PostHeader from './PostHeader'
import PostBody from './PostBody'
import PostFooter from './PostFooter'
const PostItem = ({ post }) => {
  const clickItemHandler = () => {
    console.log('clicked')
  }
  return (
    <div className={classes['post-item']} onClick={clickItemHandler}>
      <PostHeader post={post} />
      <PostBody post={post} />
      <div className={classes.divide}>
        <div></div>
      </div>
      <PostFooter post={post} />
    </div>
  )
}
export default PostItem
