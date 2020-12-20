import React from 'react'
import s from './Freelancer.module.scss'

const Freelancer = () => {
   return (
      <section className={s.freelancerBlock}>
         <div className={s.innerContainer}>
            <h2 className={s.title}>I am available for Freelancer</h2>
            <button className={s.btn}>Hire Me</button>
         </div>
      </section>
   )
}

export default Freelancer
