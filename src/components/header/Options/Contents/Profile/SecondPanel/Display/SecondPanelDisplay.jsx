import React, { useState } from 'react'
import classes from './SecondPanelDisplay.module.scss'
import DefaultHeader from '../DefaultHeader'
import DisplayList from './DisplayList'
const SecondPanelDisplay = ({ onClickBack }) => {
  const [displayList, setDisplayList] = useState([
    {
      id: Math.random().toString(),
      title: 'Dark Mode',
      description:
        'Adjust the appearance of Facebook to reduce glare and give your eyes a break.',
      icon: {
        url: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yu/r/wxr2nr9cnJt.png?_nc_eui2=AeG6QHOYU2dT1TMpsORGPrgV5tA9DTsz5GDm0D0NOzPkYFTq1tVWaBNULxneBfUxdjTycv0Ia1bvN83ndGOnJay2',
        alt: '',
        position: '0px -214px'
      },
      options: [
        {
          id: Math.random().toString(),
          title: 'Off',
          isChecked: true
        },
        {
          id: Math.random().toString(),
          title: 'On',
          isChecked: false
        },
        {
          id: Math.random().toString(),
          title: 'Automatic',
          description: `We'll automatically adjust the display based on your device's system settings.`,
          isChecked: false
        }
      ]
    },
    {
      id: Math.random().toString(),
      title: 'Compact Mode',
      description:
        'Make your font size smaller so more content cant fit on the screen.',
      icon: {
        url: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yi/r/QnBF2xVFFiX.png?_nc_eui2=AeETNDog5xTDy93RQPWpUqgm054kQUGt3M_TniRBQa3cz5UtsJRioJERcfk4RkuIIdLZe4G1F_L9xLcr11migbP2',
        alt: '',
        position: '0px -130px'
      },
      options: [
        {
          id: Math.random().toString(),
          title: 'Off',
          isChecked: true
        },
        {
          id: Math.random().toString(),
          title: 'On',
          isChecked: false
        }
      ]
    },
    {
      id: Math.random().toString(),
      title: 'Keyboard',
      description: '',
      icon: {
        url: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yp/r/9r-TsLYr3SA.png?_nc_eui2=AeHZglAc-rhrnGncJtTqr0nNfnA2_sQDfEN-cDb-xAN8Q5pWZ3KNZfMfRUG90UGR2SRhhPcVwgN4SeCgRQSJ0501',
        alt: '',
        position: '0px -88px'
      },
      options: []
    }
  ])
  const [headerInfo, setHeaderInfo] = useState({
    title: 'Display & Accesibility'
  })
  const clickBackHandler = () => {
    onClickBack()
  }
  return (
    <div className={classes}>
      <DefaultHeader headerInfo={headerInfo} onClickBack={clickBackHandler} />
      <DisplayList displayList={displayList} />
    </div>
  )
}
export default SecondPanelDisplay
