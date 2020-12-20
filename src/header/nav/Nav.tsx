import React from 'react'
import s from '../Header.module.scss'

const Nav = () => {
   return (
      <div className={s.nav}>
         <a href={'#main'}>Main</a>
         <a href={'#skills'}>Skills</a>
         <a href={'#projects'}>Projects</a>
         <a href={'#contacts'}>Contacts</a>
      </div>
   )
}

export default Nav
