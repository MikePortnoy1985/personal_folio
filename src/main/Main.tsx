import React from 'react'
import s from './Main.module.css'
import c from '../common/styles/Container.module.css'

const Main = () => {
	return (
		<div className={s.mainBlock}>
			<div className={c.container}>
				<div className={s.text}>
					<span>Hi There</span>
					<h1>I am Mikhail Temartsev</h1>
					<p>A Frontend Developer.</p>
				</div>
				<div className={s.photo}></div>
			</div>
		</div>
	)
}

export default Main
