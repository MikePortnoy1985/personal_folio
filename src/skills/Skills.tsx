import React from 'react'
import Skill from './skill/Skill'
import s from './Skills.module.css'
import c from '../common/styles/Container.module.css'

export type SkillsType = {
	id: number
	title: string
	description: string
}

const Skills = () => {
	const skillsState: SkillsType[] = [
		{ id: 1, title: 'HTML', description: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.' },
		{ id: 2, title: 'CSS', description: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.' },
		{ id: 3, title: 'Java-Script', description: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.' },
		{ id: 4, title: 'React', description: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.' },
		{ id: 5, title: 'Jest', description: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.' },
		{ id: 6, title: 'Material-UI', description: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.' },
		{ id: 7, title: 'Git', description: 'GitHub, BitBucket' },
	]

	let mappedSkills = skillsState.map((i) => <Skill id={i.id} title={i.title} description={i.description} />)

	return (
		<div className={s.skillsBlock}>
			<div className={`${c.container} ${s.skillsContainer}`}>
				<h2 className={s.skillsTitle}>My Skills</h2>
				<div className={s.skills}>{mappedSkills}</div>
			</div>
		</div>
	)
}

export default Skills
