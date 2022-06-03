import React, { useRef } from 'react'
import classes from './SearchInput.module.scss'
import FacebookSearch from '../../UI/Icons/FacebookSearch'
const SearchInput = ({ activeSearchBar, onClickInput }) => {
  const inputRef = useRef()
  const clickInputHandler = () => {
    onClickInput()
    inputRef.current.focus()
  }
  return (
    <div
      className={`
      ${classes['search-input']} 
      ${activeSearchBar ? classes.active : ''}`}
      onClick={clickInputHandler}
    >
      <div className={classes['fb-search-icon']}>
        <FacebookSearch />
      </div>
      <input
        type="text"
        className={activeSearchBar ? classes.active : ''}
        ref={inputRef}
        placeholder="Busca en Facebook"
      />
    </div>
  )
}
export default SearchInput
