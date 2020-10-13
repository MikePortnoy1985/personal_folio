import React from 'react'
import s from './Footer.module.css'
import c from '../common/styles/Container.module.css'

const Footer = () => {
	return (
		<footer className={s.footerBlock}>
			<div className={`${c.container} ${s.footerContainer}`}>
				<div>
					<a>
						<h2>Mikhail Temartsev</h2>
					</a>
				</div>
				<div className={s.ulContainer}>
					<ul className={s.footerUl}>
						<li>
							<a>Facebook</a>
						</li>
						<li>
							<a>Twitter</a>
						</li>
						<li>
							<a>Dribble</a>
						</li>
						<li>
							<a>Linkedin</a>
						</li>
						<li>
							<a>Pinterest</a>
						</li>
					</ul>
					<p className={s.paragraph}>© 2020 Mikhail Temartsev, All Rights Reserved.</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer