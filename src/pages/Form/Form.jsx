import React, { useState } from 'react'

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { useForm } from '../../hooks/useForm/useForm'

import './styles.css'
import Spinner from '../../components/Spinner/Spinner';

const initialForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
}

const validationsForm = (form) => {
    let errors = {}
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,1024}$/;

    if(!form.name.trim()) {
        errors.name = 'The "Name" field is required'
    }else if(!regexName.test(form.name.trim())) {
        errors.name = 'The "Name" field only receives letters and white spaces'
    }

    if(!form.email.trim()) {
        errors.email = 'The "Email" field is required'
    }else if(!regexEmail.test(form.email.trim())) {
        errors.email = 'The "Email" field is not correct. Please, write a valid Email'
    }

    if(!form.subject.trim()) {
        errors.subject = 'The "Subject" field is required'
    }else if(form.subject.trim().length>40) {
        errors.subject = 'Sorry, the "Subject" field only support 30 characters'
    }

    if(!form.message.trim()) {
        errors.message = 'The "Message" field is required'
    }else if(!regexComments.test(form.message.trim())) {
        errors.message = 'Sorry, the "Message" field only support 1024 characters'
    }

    return errors
}

const Form = () => {
    const { form, errors, loading, response, handleChange, handleBlur, handleSubmit } = useForm(initialForm, validationsForm)

    return (
        <div className='form-container'>
            <h3>Please, fill the inputs and leave your message:</h3>
            <form className='form-form-container' onSubmit={handleSubmit}>
                <label className='form-form-label'>Name:</label>
                <div className='form-input-container'>
                    <input  className={`form-form-name ${errors.name && 'form-errors-border'}`} 
                            type="text" 
                            name='name' 
                            value={form.name} 
                            onChange={handleChange} 
                            onBlur={handleBlur} 
                            placeholder='Your name...' 
                    />
                    {
                        !errors.name 
                        ? <CheckCircleIcon className='form-check-icon' />
                        : <p className='form-errors-message'>{errors.name}</p>
                    }
                </div>
                <label className='form-form-label'>E-mail:</label>
                <div className='form-input-container'>
                    <input  className={`form-form-email ${errors.name && 'form-errors-border'}`} 
                            type="email"
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            placeholder='Your mail...' 
                    />
                    {
                        !errors.email
                        ? <CheckCircleIcon className='form-check-icon' />
                        : <p className='form-errors-message'>{errors.email}</p>
                    }
                </div>
                <label className='form-form-label'>Subject:</label>
                <div className='form-input-container'>
                    <input  className={`form-form-name ${errors.name && 'form-errors-border'}`} 
                            type="text"
                            name='subject'
                            value={form.subject}
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            placeholder='Subject...' 
                    />
                    {
                        !errors.subject
                        ? <CheckCircleIcon className='form-check-icon' />
                        : <p className='form-errors-message'>{errors.subject}</p>
                    }
                </div>
                <label className='form-form-label'>Message:</label>
                <div>
                    <textarea   className={`form-form-message ${errors.message && 'form-errors-border'}`} 
                                name='message'
                                value={form.message}
                                onChange={handleChange}
                                onBlur={handleBlur}  
                                placeholder='Your message...'
                    ></textarea>
                    {
                        !errors.message
                        ? <CheckCircleIcon className='form-check-icon' />
                        : <p className='form-errors-message'>{errors.message}</p>
                    }
                </div>
                {
                    loading
                    ? <Spinner />
                    : <button className='form-form-button' type='submit'>Send!</button>
                }
            </form>
        </div>
    )
}

export default Form