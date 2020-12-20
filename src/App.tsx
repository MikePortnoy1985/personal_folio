import React from 'react'
import Header from './header/Header'
import Main from './main/Main'
import Skills from './skills/Skills'
import MyProjects from './projects/MyProjects'
import Freelancer from './freelancer/Freelancer'
import Contacts from './contacts/Contacts'
import Footer from './footer/Footer'
import './common/styles/MainContainer.scss'

function App() {
   return (
      <div className='container'>
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
