import React, { useState } from 'react'
import classes from './SecondPanelSupport.module.scss'
import DefaultList from '../DefaultList'
import DefaultHeader from '../DefaultHeader'
const SecondPanelSupport = ({ onClickBack }) => {
  const [supportList, setSupportList] = useState([
    {
      id: Math.random().toString(),
      name: 'Help Center',
      icon: {
        url: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yp/r/9r-TsLYr3SA.png?_nc_eui2=AeHZglAc-rhrnGncJtTqr0nNfnA2_sQDfEN-cDb-xAN8Q5pWZ3KNZfMfRUG90UGR2SRhhPcVwgN4SeCgRQSJ0501',
        alt: 'help-center',
        position: '0px -109px'
      }
    },
    {
      id: Math.random().toString(),
      name: 'Support Inbox',
      icon: {
        url: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yp/r/50UnYP4YT-c.png?_nc_eui2=AeEnd2zEA4wGWyoSZGnbhc3NMxUwB-0e7a8zFTAH7R7tr5vwPqynVG6siAWYbF_7-Rz-tADU0Bdz2G84ISYbPEoW',
        alt: 'support-inbox',
        position: '0px -786px'
      }
    },
    {
      id: Math.random().toString(),
      name: 'Report a Problem',
      icon: {
        url: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/ya/r/yNITMx5xt1f.png?_nc_eui2=AeFTVXKGQr7XX4T41UlNyWLLL4273OL6Msovjbvc4voyylfLwkzvqQNSm5UXW6AcRYqLAvFMZi4MlYvwNP45uYn0',
        alt: 'report-a-problem',
        position: '0px -116px'
      }
    }
  ])
  const [headerInfo, setHeaderInfo] = useState({
    title: 'Help & Support',
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
    <div className={classes.support}>
      <DefaultHeader headerInfo={headerInfo} onClickBack={clickBackHandler} />
      <DefaultList list={supportList} onClickBack={clickBackHandler} />
    </div>
  )
}
export default SecondPanelSupport
