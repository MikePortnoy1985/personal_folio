import React from 'react'
import s from './Footer.module.scss'

const Footer = () => {
   return (
      <footer className={s.footerBlock}>
         <div className={s.footerContainer}>
            <a href='https://linkedin.com/in/mikhail-temartsev-9898711b6' target='_blank' className={s.footerTitle}>
               <h2>Mikhail Temartsev</h2>
            </a>
            <div className={s.ulContainer}>
               <ul className={s.footerUl}>
                  <li className={s.linkBlock}>
                     <a className={s.link} href='https://linkedin.com/in/mikhail-temartsev-9898711b6' target={'_blank'}>
                        Linkedin
                     </a>
                  </li>
               </ul>
               <p>© 2020 Mikhail Temartsev, All Rights Reserved.</p>
            </div>
         </div>
      </footer>
   )
}

export default Footer
