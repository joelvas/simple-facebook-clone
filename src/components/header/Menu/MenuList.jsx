import React, { useState } from 'react'
import classes from './MenuList.module.scss'
import MenuItem from './MenuItem'
const MenuList = () => {
  const [menuList, setMenuList] = useState([
    {
      id: 'm1',
      icon: 'menuHome',
      route: '/',
      active: true,
      hidden: ['xs']
    },
    {
      id: 'm2',
      icon: 'menuWatch',
      route: '/watch',
      active: false,
      hidden: ['xs']
    },
    {
      id: 'm3',
      icon: 'menuMarket',
      route: '/market',
      active: false,
      hidden: ['xs']
    },
    {
      id: 'm4',
      icon: 'menuGroups',
      route: '/groups',
      active: false,
      hidden: ['xs']
    },
    {
      id: 'm5',
      icon: 'menuGames',
      route: '/games',
      active: false,
      hidden: ['xs', 'sm', 'md']
    },
    {
      id: 'm6',
      icon: 'menuBurger',
      route: '/menu',
      active: false,
      hidden: ['lg', 'xl']
    }
  ])
  const clickIconHandler = (icon) => {
    setMenuList((oldVal) => {
      return oldVal.map((ico) => {
        ico.active = ico.id === icon.id ? true : false
        return ico
      })
    })
  }
  return (
    <ul className={classes['navbar-menu']}>
      {menuList.map((item) => {
        return (
          <MenuItem key={item.id} item={item} onClickIcon={clickIconHandler} />
        )
      })}
    </ul>
  )
}
export default MenuList
