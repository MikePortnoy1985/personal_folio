import React from 'react'
import s from './Projects.module.scss'
import Project from './Project/Project'
import pic1 from './pics/1.jpg'
import pic2 from './pics/2.jpg'

export type ProjectsType = {
   id: number
   pic: string
   title: string
   description: string
}

function MyProjects() {
   const myProjects: ProjectsType[] = [
      {
         id: 1,
         pic: pic1,
         title: 'title',
         description: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.',
      },
      {
         id: 2,
         pic: pic2,
         title: 'title',
         description: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.',
      },
   ]

   const mappedProjects = myProjects.map((i) => (
      <Project key={i.id} id={i.id} title={i.title} pic={i.pic} description={i.description} />
   ))

   return (
      <section className={s.projectsBlock} id={'projects'}>
         <div className={s.innerContainer}>
            <h2 className={s.projectsTitle}>My Projects</h2>
            <div className={s.projects}>{mappedProjects}</div>
         </div>
      </section>
   )
}

export default MyProjects
