import React from 'react'
import s from './MyProjects.module.css'
import c from '../common/styles/Container.module.css'
import Project from './Project/Project'

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
			pic: 'https://cdn.pixabay.com/photo/2016/09/14/20/50/london-1670432_960_720.png',
			title: 'title',
			description: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.',
		},
		{
			id: 1,
			pic: 'https://cdn.pixabay.com/photo/2016/06/13/15/07/presentation-1454403_960_720.png',
			title: 'title',
			description: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.',
		},
	]

	let mappedProjects = myProjects.map((i) => (
		<Project key={i.id} id={i.id} title={i.title} pic={i.pic} description={i.description} />
	))

	return (
		<div className={s.projectsBlock}>
			<div className={`${c.container} ${s.projectsContainer}`}>
				<h2 className={s.projectsTitle}>My Projects</h2>
				<div className={s.projects}>{mappedProjects}</div>
			</div>
		</div>
	)
}

export default MyProjects
