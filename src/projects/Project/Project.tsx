import React from 'react'
import s from './Project.module.css'
import { ProjectsType } from '../MyProjects'

const Project = ({ id, pic, title, description }: ProjectsType) => {
	return (
		<div key={id} className={s.project}>
			<img className={s.pic} src={pic} alt={'picture'} />
			<h3>{title}</h3>
			<span className={s.description}>{description}</span>
		</div>
	)
}

export default Project
