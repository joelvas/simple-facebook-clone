import React from 'react'
import classes from './SearchResults.module.scss'
const SearchResults = ({ activeSearchBar }) => {
  return (
    <div
      className={`${classes['search-results']} ${
        activeSearchBar ? classes.active : ''
      }`}
    >
      No results.
    </div>
  )
}
export default SearchResults
