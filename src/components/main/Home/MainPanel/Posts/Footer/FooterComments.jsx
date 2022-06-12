import React from 'react'
import classes from './FooterComments.module.scss'
import CommentsEntry from './FooterComments/CommentsEntry'
import CommentsList from './FooterComments/CommentsList'
const FooterComments = () => {
  return (
    <div className={classes['footer-comments']}>
      <div className={classes['footer-comments__filter']}>
        <div className={classes['footer-comments__filter__text']}>
          Most Relevant
        </div>
        <div
          className={classes['footer-comments__filter__icon']}
          style={{
            backgroundImage:
              'url("https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yC/r/w7B99hm_5Li.png?_nc_eui2=AeGEfw9tQolf2tocwl4QP31tTL7XQ_ah2wBMvtdD9qHbALb9wQkb454rsl9FlWfCgq1wcvP8fLpP-e-ibluICdjl")',
            backgroundPosition: '-153px -113px',
            backgroundSize: 'auto',
            width: '16px',
            height: '16px',
            backgroundRepeat: 'no-repeat',
            display: 'inline-block'
          }}
        ></div>
      </div>
      <CommentsEntry />
      <CommentsList />
      <div className={classes['footer-comments__more']}>
        <span>View more comments</span>
        <span>2 of 14</span>
      </div>
    </div>
  )
}
export default FooterComments
