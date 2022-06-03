import React from 'react'
import classes from './BaseLayout.module.scss'
import Header from '../components/header/Header'
const BaseLayout = (props) => {
  return (
    <div className={classes['base-layout']}>
      <Header />
      <main>{props.children}</main>
      <footer></footer>
    </div>
  )
}
export default BaseLayout
