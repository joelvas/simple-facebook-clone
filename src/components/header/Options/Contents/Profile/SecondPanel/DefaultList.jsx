import React from 'react'
import classes from './DefaultList.module.scss'
const DefaultList = ({ list }) => {
  return (
    <ul className={classes['list']}>
      {list.map((item) => {
        return (
          <li key={item.id} className={classes['list__item']}>
            <div className={classes['list__item__icon']}>
              <div
                style={{
                  backgroundImage: 'url("' + item.icon.url + '")',
                  backgroundPosition: item.icon.position
                }}
              ></div>
            </div>
            <span className={classes['list__item__name']}>{item.name}</span>
          </li>
        )
      })}
    </ul>
  )
}
export default DefaultList
