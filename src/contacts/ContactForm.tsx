import React from 'react'
import { Field, Form, FormikErrors, FormikTouched } from 'formik'
import { FormikValuesType } from './Contacts'
import { Error } from '../common/error/Error'
import s from './Contacts.module.scss'

type PropsType = {
   touched: FormikTouched<FormikValuesType>
   isSubmitting: boolean
   isValid: boolean
   errors: FormikErrors<FormikValuesType>
}

const ContactForm: React.FC<PropsType> = ({ isSubmitting, isValid, errors, touched }) => {
   return (
      <Form className={s.formContainer}>
         <Field id='name' name='name' placeholder='Name' className={s.field} />
         {touched.name && errors.name ? <Error textError={errors.name} /> : null}
         <Field id='emailAddress' name='emailAddress' placeholder='Email' className={s.field} />
         {touched.emailAddress && errors.emailAddress ? <Error textError={errors.emailAddress} /> : null}
         <Field
            id='message'
            name='message'
            as='textarea'
            placeholder='Your Message'
            className={`${s.field} ${s.textArea}`}
         />
         {touched.message && errors.message ? <Error textError={errors.message} /> : null}
         <button className={s.btn} type='submit' disabled={!isValid || isSubmitting}>
            Send message
         </button>
      </Form>
   )
}

export default ContactForm
