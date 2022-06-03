import React from 'react'
import classes from './Navbar.module.scss'
import MenuList from './Menu/MenuList'
import { useNavigate, NavLink } from 'react-router-dom'
import Options from './Options/Options'
import FacebookLogo from '../UI/Icons/FacebookLogo'
import SearchBar from './Search/SearchBar'
const Navbar = () => {
  const navigate = useNavigate()
  const clickLogoHandler = () => {
    navigate('/', { replace: true })
  }
  return (
    <nav className={classes.navbar}>
      <div className={classes['navbar-ls']}>
        <div className={classes['navbar-ls__logo']} onClick={clickLogoHandler}>
          <FacebookLogo />
        </div>
        <SearchBar />
      </div>
      <MenuList />
      <NavLink
        to={'/profile'}
        className={({ isActive }) => {
          return ` ${classes['navbar-profile']} ${
            isActive ? classes.active : ''
          }`
        }}
      >
        <img
          src="https://z-p3-scontent.flim3-2.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=cp0_dst-png_p50x50&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFusxuJl2N-vP7CmUicCzr9so2H55p0AlGyjYfnmnQCUb21qv30-a5ikDu_IxknyjuRs9r-KpjJZ4HkuopH1qJg&_nc_ohc=bnmMxa3FIF8AX9FA7yC&_nc_ht=z-p3-scontent.flim3-2.fna&oh=00_AT_0d1NklnzoIFy2LitHjLN0UqtLpvfGH63Ct473MM7l0A&oe=62B6B178"
          alt=""
          width={28}
        />
        <span>Jeyson</span>
      </NavLink>
      <Options />
    </nav>
  )
}
export default Navbar
