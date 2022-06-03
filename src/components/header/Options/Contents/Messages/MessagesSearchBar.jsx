import React, { useState, useRef, useEffect } from 'react'
import classes from './MessagesSearchBar.module.scss'
import FacebookSearch from '../../../../UI/Icons/FacebookSearch'
import BackArrowIcon from '../../../../UI/Icons/BackArrowIcon'
const MessagesSearchBar = () => {
  const [activeSearchInput, setActiveSearchInput] = useState(false)
  const searchBarRef = useRef(null)
  const clickSearchBarHandler = () => {
    setActiveSearchInput(true)
  }
  const clickBackArrowHandler = () => {
    setActiveSearchInput(false)
  }
  useEffect(() => {
    const clickWindowHandler = (e) => {
      if (
        searchBarRef.current &&
        activeSearchInput &&
        !searchBarRef.current.contains(e.target)
      ) {
        setActiveSearchInput(false)
      }
    }
    window.addEventListener('click', clickWindowHandler)
    return () => {
      window.removeEventListener('click', clickWindowHandler)
    }
  })

  return (
    <div className={classes['search-bar']} ref={searchBarRef}>
      <div className={classes['search-bar__entry']}>
        <div
          className={`${classes['search-bar__entry__back']} ${
            activeSearchInput ? classes.active : ''
          }`}
          onClick={clickBackArrowHandler}
        >
          <BackArrowIcon />
        </div>
        <div
          className={classes['search-bar__entry__input']}
          onClick={clickSearchBarHandler}
        >
          <div
            className={`${classes['search-icon']} ${
              activeSearchInput ? classes.disabled : ''
            }`}
          >
            <FacebookSearch />
          </div>
          <input type="text" placeholder="Search in Meseenger" />
        </div>
      </div>
      <div
        className={`${classes['search-bar__results']} ${
          activeSearchInput ? classes.active : ''
        }`}
      >
        <ul className={classes['search-bar__results-list']}>
          <li className={classes['search-bar__results-list__item']}>
            <div
              style={{
                backgroundImage:
                  'url("https://assets.justinmind.com/wp-content/uploads/2021/05/ux-design-principles-768x492.png")'
              }}
            ></div>
            <span>Jeyson J. Vásquez</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default MessagesSearchBar
