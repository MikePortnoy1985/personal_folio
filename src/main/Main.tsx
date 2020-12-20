import React from 'react'
import s from './Main.module.scss'
import me from './me.png'

const Main = () => {
   return (
      <main className={s.mainBlock} id={'main'}>
         <div className={s.innerContainer}>
            <div className={s.textWrapper}>
               <div className={s.text}>
                  <span>Hi There</span>
                  <h1>
                     I am <span>Mikhail Temartsev</span>
                  </h1>
                  <span>A Frontend Developer.</span>
               </div>
            </div>
            <div className={s.photoWrapper}>
               <div className={s.photo}>
                  <img src={me} alt={'my pic'} />
                  <span className={s.psevdoSpan} />
               </div>
            </div>
         </div>
      </main>
   )
}

export default Main
