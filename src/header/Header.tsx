import React from 'react'
import s from './Header.module.scss'
import Nav from './nav/Nav'

const Header = () => {
   return (
      <header className={s.header}>
         <div className={s.headerInnerContainer}>
            <Nav />
         </div>
      </header>
   )
}

export default Header
