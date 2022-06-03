import React, { useState, useRef, useEffect } from 'react'
import classes from './SearchBar.module.scss'
import BackArrowIcon from '../../UI/Icons/BackArrowIcon'
import SearchResults from './SearchResults'
import SearchInput from './SearchInput'
const SearchBar = () => {
  const [activeSearchBar, setActiveSearchBar] = useState(false)
  const searchBarRef = useRef()
  const clickInputHandler = () => {
    setActiveSearchBar(true)
  }
  const clickBackArrowHandler = () => {
    setActiveSearchBar(false)
  }
  useEffect(() => {
    const blurSearchPanel = (event) => {
      if (
        searchBarRef.current &&
        activeSearchBar &&
        !searchBarRef.current.contains(event.target)
      ) {
        setActiveSearchBar(false)
      }
    }
    window.addEventListener('mousedown', blurSearchPanel)
    return () => {
      window.removeEventListener('mousedown', blurSearchPanel)
    }
  })
  return (
    <div
      className={`${classes['search-bar']} ${
        activeSearchBar ? classes.active : ''
      }`}
      ref={searchBarRef}
    >
      <div className={classes['search-entry']}>
        <div
          className={classes['back-arrow-icon']}
          onClick={clickBackArrowHandler}
        >
          <BackArrowIcon />
        </div>
        <SearchInput
          activeSearchBar={activeSearchBar}
          onClickInput={clickInputHandler}
        />
      </div>
      <SearchResults activeSearchBar={activeSearchBar} />
    </div>
  )
}
export default SearchBar
