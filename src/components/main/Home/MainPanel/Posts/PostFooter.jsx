import React from 'react'
import classes from './PostFooter.module.scss'
import FooterActions from './Footer/FooterActions'
import FooterComments from './Footer/FooterComments'
import LikeIcon from './Icons/LikeIcon'
import AngryIcon from './Icons/AngryIcon'
import HahaIcon from './Icons/HahaIcon'
import LoveIcon from './Icons/LoveIcon'
import WowIcon from './Icons/WowIcon'
import SadIcon from './Icons/SadIcon'
import CareIcon from './Icons/CareIcon'
const PostFooter = () => {
  return (
    <div className={classes['post-footer']}>
      <div className={classes['post-footer__resume']}>
        <div className={classes['post-footer__resume__reactions']}>
          <div className={classes['reaction']}>
            <LoveIcon />
          </div>
          <div className={classes['reaction']}>
            <LikeIcon />
          </div>
          <div className={classes['reaction']}>
            <SadIcon />
          </div>
          <span>270</span>
        </div>
        <div className={classes['post-footer__resume__comments']}>
          <div>260 Comments</div>
          <div>25 Shares</div>
        </div>
      </div>
      <div className={classes.divide}>
        <div></div>
      </div>
      <FooterActions />
      <div className={classes.divide}>
        <div></div>
      </div>
      <FooterComments />
    </div>
  )
}
export default PostFooter
