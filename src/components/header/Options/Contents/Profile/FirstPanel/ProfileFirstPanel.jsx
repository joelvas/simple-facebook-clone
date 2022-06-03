import React from 'react'
import classes from './ProfileFirstPanel.module.scss'
import ItemsList from './ItemsList'
const ProfileFirstPanel = ({ onClickItem, firstPanelItems }) => {
  const clickItemHandler = (item) => {
    onClickItem(item)
  }
  return (
    <div className={classes['first-panel']}>
      <div className={classes['first-panel__header']}>
        <div className={classes['first-panel__header__picture']}>
          <img
            src="https://z-p3-scontent.flim4-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p60x60&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFusxuJl2N-vP7CmUicCzr9so2H55p0AlGyjYfnmnQCUb21qv30-a5ikDu_IxknyjuRs9r-KpjJZ4HkuopH1qJg&_nc_ohc=tMdrVb3iZvcAX9BPSd6&_nc_ht=z-p3-scontent.flim4-2.fna&oh=00_AT_VRRyXf7hsOJUcjpBiSMDhE5bT58aF4XepGFnzg2Abyg&oe=62BAA5F8"
            width={60}
            alt=""
          />
        </div>
        <div className={classes['first-panel__header__body']}>
          <span>Jeyson J. Vásquez</span>
          <span>See your profile</span>
        </div>
      </div>
      <div className={classes['first-panel__divide']}>
        <div></div>
      </div>
      <ItemsList
        onClickItem={clickItemHandler}
        firstPanelItems={firstPanelItems}
      />
      <div className={classes['first-panel__footer']}>
        <div className={classes['first-panel__footer__item']}>Privacy</div>
      </div>
    </div>
  )
}
export default ProfileFirstPanel
