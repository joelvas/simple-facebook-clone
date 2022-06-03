import React from 'react'
import classes from './MenuItem.module.scss'
import { useNavigate, NavLink } from 'react-router-dom'
import MenuBurgerIcon from '../../UI/Icons/MenuBurgerIcon'
import MenuHomeIcon from '../../UI/Icons/MenuHomeIcon'
import MenuWatchIcon from '../../UI/Icons/MenuWatchIcon'
import MenuMarketIcon from '../../UI/Icons/MenuMarketIcon'
import MenuGroupsIcon from '../../UI/Icons/MenuGroupsIcon'
import MenuGamesIcon from '../../UI/Icons/MenuGamesIcon'
const components = {
  menuBurger: MenuBurgerIcon,
  menuHome: MenuHomeIcon,
  menuWatch: MenuWatchIcon,
  menuMarket: MenuMarketIcon,
  menuGroups: MenuGroupsIcon,
  menuGames: MenuGamesIcon
}
const MenuItem = ({ item, onClickIcon }) => {
  const Icon = components[item.icon]
  const navigate = useNavigate()
  const clickIconHandler = () => {
    onClickIcon(item)
    navigate(item.route, { replace: true })
  }
  return (
    <li
      className={`
      ${classes.li} 
      ${item.hidden.includes('xl') ? classes['hidden-xl'] : ''}
      ${item.hidden.includes('lg') ? classes['hidden-lg'] : ''}
      ${item.hidden.includes('md') ? classes['hidden-md'] : ''}
      ${item.hidden.includes('sm') ? classes['hidden-sm'] : ''}
      ${item.hidden.includes('xs') ? classes['hidden-xs'] : ''}`}
    >
      <NavLink
        to={item.route}
        className={(({isActive})=>{
          return ` ${classes.a} ${isActive ? classes.active : ''}`
        })}
      >
        <span className={classes.icon}>
          <Icon />
        </span>
      </NavLink>
    </li>
  )
}
export default MenuItem
