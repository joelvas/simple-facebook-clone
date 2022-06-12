import React from 'react'
import classes from './PostHeader.module.scss'
import GroupIcon from './Icons/GroupIcon'
import OptionsIcon from './Icons/OptionsIcon'
const PostHeader = ({ post }) => {
  return (
    <div className={classes['post-header']}>
      <div className={classes['post-header__picture']}>
        <img
          src="https://placeimg.com/100/100/people"
          width={36}
          alt="profile"
        />
        <img
          src="https://placeimg.com/100/100/people"
          width={24}
          alt="profile"
        />
      </div>
      <div className={classes['post-header__info']}>
        <div className={classes['post-header__info__title']}>
          <span className={classes['post-header__info__title__name']}>
            VueJs en Español
          </span>
        </div>
        <div className={classes['post-header__info__subtitle']}>
          <span className={classes['post-header__info__subtitle__owner']}>
            Arturo Gallegos
          </span>
          ·
          <span className={classes['post-header__info__subtitle__date']}>
            June 7 at 10:53 AM
          </span>
          ·
          <span className={classes['post-header__info__subtitle__privacy']}>
            <GroupIcon />
          </span>
        </div>
      </div>
      <div className={classes['post-header__options']}>
        <span className={classes['post-header__options__icon']}>
          <OptionsIcon />
        </span>
      </div>
    </div>
  )
}
export default PostHeader
