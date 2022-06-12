import React from 'react'
import classes from './FooterActions.module.scss'
const FooterActions = () => {
  const actions = [
    {
      name: 'Like',
      icon: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yN/r/wC-PkLKHXz3.png?_nc_eui2=AeG1YibVBEEb0XRzX8ajEDSa9Uqap1WKAxr1SpqnVYoDGpu76IFC9nyddemowvlGq0s8mmbp0YXgdiXIdazRCsB4',
      position: '0px -322px'
    },
    {
      name: 'Comment',
      icon: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yN/r/wC-PkLKHXz3.png?_nc_eui2=AeG1YibVBEEb0XRzX8ajEDSa9Uqap1WKAxr1SpqnVYoDGpu76IFC9nyddemowvlGq0s8mmbp0YXgdiXIdazRCsB4',
      position: '0 -284px'
    },
    {
      name: 'Share',
      icon: 'https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yN/r/wC-PkLKHXz3.png?_nc_eui2=AeG1YibVBEEb0XRzX8ajEDSa9Uqap1WKAxr1SpqnVYoDGpu76IFC9nyddemowvlGq0s8mmbp0YXgdiXIdazRCsB4',
      position: '0 -341px'
    }
  ]
  return (
    <div className={`${classes['footer-actions']}`}>
      {actions.map((action) => {
        return (
          <div
            key={action.name}
            className={`${classes['footer-actions__action']}`}
          >
            <div
              className={classes['footer-actions__action__icon']}
              style={{
                backgroundImage: `url('${action.icon}')`,
                backgroundPosition: action.position,
                backgroundSize: 'auto',
                backgroundRepeat: 'no-repeat',
                width: '18px',
                height: '18px'
              }}
            ></div>
            <span className={classes['footer-actions__action__text']}>
              {action.name}
            </span>
          </div>
        )
      })}
    </div>
  )
}
export default FooterActions
