import React from 'react'
import s from './Skill.module.css'
import { SkillsType } from '../Skills'

const Skill = ({ id, title, description }: SkillsType) => {
	return (
		<div key={id} className={s.skill}>
			<div className={s.icon}>x</div>
			<h3>{title}</h3>
			<span className={s.description}>{description}</span>
		</div>
	)
}
export default Skill
