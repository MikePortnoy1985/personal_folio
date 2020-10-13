import React from 'react'
import s from './App.module.css'
import Header from './header/Header'
import Main from './main/Main'
import Skills from './skills/Skills'
import MyProjects from './projects/MyProjects'
import Freelancer from './freelancer/Freelancer'
import Contacts from './contacts/Contacts'
import Footer from './footer/Footer'

function App() {
	return (
		<div className={s.app}>
			<Header />
			<Main />
			<Skills />
			<MyProjects />
			<Freelancer />
			<Contacts />
			<Footer />
		</div>
	)
}

export default App
