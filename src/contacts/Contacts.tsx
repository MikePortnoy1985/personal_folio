import { Formik, FormikErrors } from 'formik'
import React from 'react'
import '../common/styles/MainContainer.scss'
import ContactForm from './ContactForm'
import s from './Contacts.module.scss'

export type FormikValuesType = {
   name: string
   emailAddress: string
   message: string
}

const Contacts = () => {
   return (
      <section className={s.contactsBlock} id={'contacts'}>
         <div className={s.contactsContainer}>
            <h2 className={s.title}> Contact </h2>
            <Formik
               initialValues={{
                  name: '',
                  emailAddress: '',
                  message: '',
               }}
               validate={(values) => {
                  const errors: FormikErrors<FormikValuesType> = {}
                  if (values.name.length < 4) {
                     errors.name = 'Please enter correct name'
                  }
                  if (!values.emailAddress) {
                     errors.emailAddress = 'Email is required'
                  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailAddress)) {
                     errors.emailAddress = 'Invalid email address'
                  }
                  if (values.message.length === 0) {
                     errors.message = 'Please, describe your message'
                  }
                  return errors
               }}
               onSubmit={async (values) => {
                  await new Promise((r) => setTimeout(r, 500))
                  alert(JSON.stringify(values, null, 2))
               }}>
               {({ isSubmitting, isValid, errors, touched }) => (
                  <ContactForm isSubmitting={isSubmitting} isValid={isValid} errors={errors} touched={touched} />
               )}
            </Formik>
         </div>
      </section>
   )
}
export default Contacts
