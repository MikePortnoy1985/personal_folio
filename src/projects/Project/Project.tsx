import React from 'react'
import s from '../Projects.module.scss'
import { ProjectsType } from '../MyProjects'

const Project = ({ id, pic, title, description }: ProjectsType) => {
   return (
      <div key={id} className={s.project}>
         <img className={s.pic} src={pic} alt={'some pic'} />
         <h3>{title}</h3>
         <span className={s.description}>{description}</span>
      </div>
   )
}

export default Project
