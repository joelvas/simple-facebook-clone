import React from 'react'
import classes from './CommentItem.module.scss'
const CommentItem = () => {
  return (
    <li className={classes['comment-item']}>
      <div className={classes['comment-item__content']}>
        <div className={classes['comment-item__content__picture']}>
          <img
            src="https://placeimg.com/50/50/people"
            width={32}
            alt=""
          />
        </div>
        <div className={classes['comment-item__content__text']}>
          <span className={classes.name}>Dare Alcachofa</span>
          <span className={classes.comment}>
            tu backend no tiene habilitado el parsing de json en el cuerpo de
            las peticiones. te hace falta poner `app.use(express.json())` al
            inicio de tu app.
          </span>
        </div>
        <div className={classes['comment-item__content__options']}>
          <span>•••</span>
        </div>
      </div>
      <div className={classes['comment-item__footer']}>
        <div className={classes['comment-item__footer__actions']}>
          <span className={classes.like}>Like</span>
          <span className={classes.reply}>Reply</span>
          <span className={classes.date}>7m</span>
        </div>
        <div className={classes['comment-item__footer__reactions']}></div>
      </div>
      <div className={classes['comment-item__replies']}></div>
    </li>
  )
}
export default CommentItem
