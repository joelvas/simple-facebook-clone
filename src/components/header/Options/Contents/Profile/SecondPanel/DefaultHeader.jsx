import React from 'react'
import classes from './DefaultHeader.module.scss'
const DefaultHeader = ({ headerInfo, onClickBack }) => {
  const clickBackHandler = () => {
    onClickBack()
  }
  return (
    <div className={classes.header}>
      <div className={classes['header__picture']} onClick={clickBackHandler}>
        <div
          style={{
            backgroundImage:
              'url("https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/y8/r/Rfiw-jRRbM1.png?_nc_eui2=AeGOJUEcTYi0uMCS3pep6rrCpWbRFdd_ZMelZtEV139kxwGnNaySGabN8DEQ6Bs2_0Pz7_3uBAI8FtcLNi5pFbz9")',
            backgroundPosition: '-46px -46px'
          }}
        ></div>
      </div>
      <span className={classes['header__title']}>{headerInfo.title}</span>
    </div>
  )
}
export default DefaultHeader
