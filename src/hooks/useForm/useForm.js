import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const useForm = (initialForm, validationsForm) => {
    const [form, setForm] = useState(initialForm)
    const [errors, setErrors] = useState({
        name: 'The "Name" field is required',
        email: 'The "Email" field is required',
        subject: 'The "Subject" field is required',
        message: 'The "Message" field is required'
    })
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState(null)

    const navigate = useNavigate()

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        setErrors(validationsForm(form))
    }

    const handleBlur = (e) => {
        handleChange(e)
        setErrors(validationsForm(form))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(validationsForm(form))

        if(Object.keys(errors).length === 0) {
            setLoading(true)

            axios.defaults.headers.post['Content-Type'] = 'application/json';
            axios.post('https://formspree.io/f/xrgvgpen', {form})
            .then((res) => {
                setLoading(false)
                alert('Thank you, the message was sent successfully.')
                setForm(initialForm)
                navigate('/')
                scroll(0,0)
            })
            .catch(error => console.log(error));
        }
    }

    return {
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit
    }
}

