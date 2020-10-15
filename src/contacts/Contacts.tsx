import React from 'react'
import c from '../common/styles/Container.module.css'
import s from './Contacts.module.css'

const Contacts = () => {
	return (
		<div className={s.contactsBlock}>
			<div className={`${c.container} ${s.contactsContainer}`}>
				<h2 className={s.title}> Contact </h2>
				<div className={s.formContainer}>
					<form>
						<div className={s.formContainer}>
							<label>Name</label>
							<input />
						</div>
						<div className={s.formContainer}>
							<label>Email address</label>
							<input />
						</div>
						<div className={s.formContainer}>
							<textarea></textarea>
						</div>
						<button>Send Message</button>
					</form>
				</div>
			</div>
		</div>
	)
}
export default Contacts
