import React from 'react'
import Skill from './skill/Skill'
import s from './Skills.module.scss'
import git from './logos/git-icon.svg'
import js from './logos/javascript.svg'
import ts from './logos/typescript.svg'
import reactLogo from './logos/react-2.svg'
import reduxLogo from './logos/redux.svg'
import storybookLogo from './logos/storybook-1.svg'
import rest from './logos/rest-api.svg'

export type SkillsType = {
   id: number
   title: string
   logo: string
}

const Skills = () => {
   const skillsState: SkillsType[] = [
      {
         id: 11,
         title: 'JavaScript',
         logo: js,
      },
      {
         id: 12,
         title: 'TypeScript',
         logo: ts,
      },
      {
         id: 13,
         title: 'React',
         logo: reactLogo,
      },
      {
         id: 14,
         title: 'Redux',
         logo: reduxLogo,
      },
      {
         id: 15,
         title: 'REST API',
         logo: rest,
      },
      {
         id: 16,
         title: 'Storybook',
         logo: storybookLogo,
      },
      {
         id: 7,
         title: 'Git',
         logo: git,
      },
   ]

   const mappedSkills = skillsState.map((i) => <Skill key={i.id} id={i.id} title={i.title} logo={i.logo} />)

   return (
      <section className={s.skillsBlock} id={'skills'}>
         <div className={s.innerContainer}>
            <h2 className={s.skillsTitle}>My Skills</h2>
            <div className={s.skills}>{mappedSkills}</div>
         </div>
      </section>
   )
}

export default Skills
