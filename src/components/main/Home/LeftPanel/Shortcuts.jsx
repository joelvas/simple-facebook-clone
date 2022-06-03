import React, { useState } from 'react'
import classes from './Shortcuts.module.scss'
import ShortcutsList from './ShortcutsList'
import SeeMoreArrow from './SeeMoreArrow'
const Shortcuts = ({ shortcutsList, second }) => {
  const [showMore, setShowMore] = useState(true)
  const clickButtonHandler = () => {
    setShowMore(!showMore)
  }
  return (
    <div className={classes.shortcuts}>
      <div
        className={`
        ${second ? '' : classes.hidden} 
        ${classes['shortcuts__title']}`}
      >
        <span>Your shortcuts</span>
      </div>
      <ShortcutsList list={shortcutsList} showMore={showMore} />
      <div
        className={`
      ${classes['shortcuts__options']} ${
          shortcutsList.length > 6 ? '' : classes.hidden
        }`}
        onClick={clickButtonHandler}
      >
        <div className={showMore ? '' : classes.rotate}>
          <SeeMoreArrow />
        </div>
        <span className={showMore ? '' : classes.hidden}>See more</span>
        <span className={showMore ? classes.hidden : ''}>See less</span>
      </div>
    </div>
  )
}
export default Shortcuts
