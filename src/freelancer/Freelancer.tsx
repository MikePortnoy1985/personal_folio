import React from 'react'
import s from './Freelancer.module.css'
import c from '../common/styles/Container.module.css'

const Freelancer = () => {
	return (
		<div className={s.freelancerBlock}>
			<div className={`${c.container} ${s.freelancerContainer}`}>
				<h2 className={s.title}>I am available for Freelancer</h2>
				<button className={s.btn}>Hire Me</button>
			</div>
		</div>
	)
}

export default Freelancer
