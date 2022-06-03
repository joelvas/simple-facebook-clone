import React from 'react'
import classes from './CreateRoom.module.scss'
import RightArrowIcon from './Icons/RightArrowIcon'
const CreateRoom = () => {
  return (
    <div className={classes['create-room']}>
      <div className={classes['create-room__create']}>
        <div className={classes['create-room__create__icon']}>
          <div></div>
        </div>
        <div className={classes['create-room__create__text']}>
          <span>Create Room</span>
        </div>
      </div>
      <div className={classes['create-room__contacts']}>
        <div className={classes['create-room__contacts__list']}>
          <img
            src="https://z-p3-scontent.flim3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFusxuJl2N-vP7CmUicCzr9so2H55p0AlGyjYfnmnQCUb21qv30-a5ikDu_IxknyjuRs9r-KpjJZ4HkuopH1qJg&_nc_ohc=8WlYdp7oaR4AX_4JOHh&_nc_ht=z-p3-scontent.flim3-2.fna&oh=00_AT-yFh8CqFBFMkt4cxNnSxeMUDWK4z3xCmNKJ2vepbHjsw&oe=62BE9A78"
            width={40}
            alt=""
          />
          <img
            src="https://z-p3-scontent.flim3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFusxuJl2N-vP7CmUicCzr9so2H55p0AlGyjYfnmnQCUb21qv30-a5ikDu_IxknyjuRs9r-KpjJZ4HkuopH1qJg&_nc_ohc=8WlYdp7oaR4AX_4JOHh&_nc_ht=z-p3-scontent.flim3-2.fna&oh=00_AT-yFh8CqFBFMkt4cxNnSxeMUDWK4z3xCmNKJ2vepbHjsw&oe=62BE9A78"
            width={40}
            alt=""
          />
          <img
            src="https://z-p3-scontent.flim3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFusxuJl2N-vP7CmUicCzr9so2H55p0AlGyjYfnmnQCUb21qv30-a5ikDu_IxknyjuRs9r-KpjJZ4HkuopH1qJg&_nc_ohc=8WlYdp7oaR4AX_4JOHh&_nc_ht=z-p3-scontent.flim3-2.fna&oh=00_AT-yFh8CqFBFMkt4cxNnSxeMUDWK4z3xCmNKJ2vepbHjsw&oe=62BE9A78"
            width={40}
            alt=""
          />
          <img
            src="https://z-p3-scontent.flim3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFusxuJl2N-vP7CmUicCzr9so2H55p0AlGyjYfnmnQCUb21qv30-a5ikDu_IxknyjuRs9r-KpjJZ4HkuopH1qJg&_nc_ohc=8WlYdp7oaR4AX_4JOHh&_nc_ht=z-p3-scontent.flim3-2.fna&oh=00_AT-yFh8CqFBFMkt4cxNnSxeMUDWK4z3xCmNKJ2vepbHjsw&oe=62BE9A78"
            width={40}
            alt=""
          />
          <img
            src="https://z-p3-scontent.flim3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFusxuJl2N-vP7CmUicCzr9so2H55p0AlGyjYfnmnQCUb21qv30-a5ikDu_IxknyjuRs9r-KpjJZ4HkuopH1qJg&_nc_ohc=8WlYdp7oaR4AX_4JOHh&_nc_ht=z-p3-scontent.flim3-2.fna&oh=00_AT-yFh8CqFBFMkt4cxNnSxeMUDWK4z3xCmNKJ2vepbHjsw&oe=62BE9A78"
            width={40}
            alt=""
          />
          <img
            src="https://z-p3-scontent.flim3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFusxuJl2N-vP7CmUicCzr9so2H55p0AlGyjYfnmnQCUb21qv30-a5ikDu_IxknyjuRs9r-KpjJZ4HkuopH1qJg&_nc_ohc=8WlYdp7oaR4AX_4JOHh&_nc_ht=z-p3-scontent.flim3-2.fna&oh=00_AT-yFh8CqFBFMkt4cxNnSxeMUDWK4z3xCmNKJ2vepbHjsw&oe=62BE9A78"
            width={40}
            alt=""
          />
        </div>
      </div>

      <div className={classes['create-room__rooms-button']}>
        <RightArrowIcon />
      </div>
    </div>
  )
}
export default CreateRoom
