import React, { useState } from 'react'
import classes from './SecondPanelSettings.module.scss'
import DefaultList from '../DefaultList'
import DefaultHeader from '../DefaultHeader'

const SecondPanelSettings = ({ onClickBack }) => {
  const [settingsList, setSettingsList] = useState([
    {
      id: Math.random().toString(),
      name: 'Settings',
      icon: {
        url: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yW/r/xmXSstLM6Qn.png?_nc_eui2=AeFslRTfGtoPFaWDaLc9mbgSBciPTHJBv6gFyI9MckG_qEIHE4no7JGE3fzmhAK10ttnrRbXnb2zTI0IXpc5Me33',
        alt: 'settings',
        position: '-21px -261px'
      }
    },
    {
      id: Math.random().toString(),
      name: 'Privacy Checkup',
      icon: {
        url: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yi/r/QnBF2xVFFiX.png?_nc_eui2=AeETNDog5xTDy93RQPWpUqgm054kQUGt3M_TniRBQa3cz5UtsJRioJERcfk4RkuIIdLZe4G1F_L9xLcr11migbP2',
        alt: 'privacy-checkup',
        position: '0px -67px'
      }
    },
    {
      id: Math.random().toString(),
      name: 'Privacy Center',
      icon: {
        url: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/y7/r/uYgT97q1aZT.png?_nc_eui2=AeFaS0UOieFaf2bGrXpLayQc1eBy_FkLHEzV4HL8WQscTHKfNkskn1ozLMvzBsyfAll-UBK3FCAlMCadbeME5b47',
        alt: 'privacy-center',
        position: '0px -428px'
      }
    },
    {
      id: Math.random().toString(),
      name: 'Activity Log',
      icon: {
        url: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yp/r/50UnYP4YT-c.png?_nc_eui2=AeEnd2zEA4wGWyoSZGnbhc3NMxUwB-0e7a8zFTAH7R7tr5vwPqynVG6siAWYbF_7-Rz-tADU0Bdz2G84ISYbPEoW',
        alt: 'activity-log',
        position: '0px -933px'
      }
    },
    {
      id: Math.random().toString(),
      name: 'News Feed Preferences',
      icon: {
        url: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yZ/r/L49yTyvyzpO.png?_nc_eui2=AeEBgsatpND6qpIrL1K1MGmP2MWmKxui9Z7YxaYrG6L1nkhVNSACcQwZPCRslV3exXtmPQwQy48Mh9cn_vOn-sH7',
        alt: 'news-feed-preferences',
        position: '0px -407px'
      }
    },
    {
      id: Math.random().toString(),
      name: 'Language',
      icon: {
        url: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yp/r/50UnYP4YT-c.png?_nc_eui2=AeEnd2zEA4wGWyoSZGnbhc3NMxUwB-0e7a8zFTAH7R7tr5vwPqynVG6siAWYbF_7-Rz-tADU0Bdz2G84ISYbPEoW',
        alt: 'language',
        position: '0px -870px'
      }
    }
  ])
  const [headerInfo, setHeaderInfo] = useState({
    title: 'Settings & Privacy',
    icon: {
      url: '',
      alt: '',
      position: ''
    }
  })
  const clickBackHandler = () => {
    onClickBack()
  }
  return (
    <div className={classes.settings}>
      <DefaultHeader headerInfo={headerInfo} onClickBack={clickBackHandler} />
      <div className={classes['settings__content']}>
        <DefaultList list={settingsList} />
      </div>
    </div>
  )
}
export default SecondPanelSettings
