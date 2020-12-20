import React from 'react'
import s from '../Skills.module.scss'
import { SkillsType } from '../Skills'

const Skill = ({ id, title, logo }: SkillsType) => {
   return (
      <div key={id} className={s.skill}>
         <div className={s.icon}>
            <img src={logo} alt={'logo pic'} />
         </div>
         <h3 className={s.skillTitle}>{title}</h3>
         {/*<span className={s.description}>{description}</span>*/}
      </div>
   )
}
export default Skill
