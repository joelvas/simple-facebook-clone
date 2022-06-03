import React from 'react'
import classes from './OptionItem.module.scss'
import OptionProfileIcon from '../../UI/Icons/OptionProfileIcon'
import OptionCreateIcon from '../../UI/Icons/OptionCreateIcon'
import OptionNotifIcon from '../../UI/Icons/OptionNotifIcon'
import OptionMsgIcon from '../../UI/Icons/OptionMsgIcon'
import OptionMenuIcon from '../../UI/Icons/OptionMenuIcon'
const components = {
  optionProfile: OptionProfileIcon,
  optionMsg: OptionMsgIcon,
  optionNotif: OptionNotifIcon,
  optionCreate: OptionCreateIcon,
  optionMenu: OptionMenuIcon
}
const OptionItem = ({ item, onClickIcon }) => {
  const Icon = components[item.icon]
  const clickIconHandler = () => {
    onClickIcon(item)
  }
  return (
    <li
      className={`${classes.li} 
      ${item.active ? classes.active : ''}
      ${item.hidden.includes('xl') ? classes['hidden-xl'] : ''}
      ${item.hidden.includes('lg') ? classes['hidden-lg'] : ''}
      ${item.hidden.includes('md') ? classes['hidden-md'] : ''}
      ${item.hidden.includes('sm') ? classes['hidden-sm'] : ''}
      ${item.hidden.includes('xs') ? classes['hidden-xs'] : ''}
      `}
      onClick={clickIconHandler}
    >
      <Icon />
    </li>
  )
}
export default OptionItem
