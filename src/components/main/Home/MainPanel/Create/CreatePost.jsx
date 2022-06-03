import React from 'react'
import classes from './CreatePost.module.scss'
import LiveIcon from './Icons/LiveIcon'
import PhotoIcon from './Icons/PhotoIcon'
import FeelingIcon from './Icons/FeelingIcon'
const CreatePost = () => {
  return (
    <div className={classes['create-post']}>
      <div className={classes['create-post__header']}>
        <div className={classes['create-post__header__profile']}>
          <img
            src="https://z-p3-scontent.flim3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=dbb9e7&_nc_eui2=AeFusxuJl2N-vP7CmUicCzr9so2H55p0AlGyjYfnmnQCUb21qv30-a5ikDu_IxknyjuRs9r-KpjJZ4HkuopH1qJg&_nc_ohc=tMdrVb3iZvcAX9RDrLS&_nc_ht=z-p3-scontent.flim3-2.fna&oh=00_AT_HJWgkUOu_HRQLlp6q_ZmGfJDSC_tNCy4VIkqvfjmtjg&oe=62BAA5F8"
            alt=""
            width={40}
          />
        </div>
        <div className={classes['create-post__header__write']}>
          What's on your mind, Jeyson?
        </div>
      </div>
      <div className={classes['create-post__divide']}>
        <div></div>
      </div>
      <div className={classes['create-post__body']}>
        <div className={classes['create-post__body__item']}>
          <div className={classes['live-icon']}>
            <LiveIcon />
          </div>
          <span>LiveVideo</span>
        </div>
        <div className={classes['create-post__body__item']}>
          <div className={classes['photo-icon']}>
            <PhotoIcon />
          </div>
          <span>Photo/Video</span>
        </div>
        <div className={classes['create-post__body__item']}>
          <div className={classes['feeling-icon']}>
            <FeelingIcon />
          </div>
          <span>Feeling/Activity</span>
        </div>
      </div>
    </div>
  )
}
export default CreatePost
