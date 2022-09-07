import React from 'react'

export const useForm = () => {
    const [values, setValues] = React.useState({})
    

    const resetForm = () => {
        setValues({})
    }

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const setForm = (data) => {
        setValues(data)
    }

    return [
        values,
        handleInputChange,
        resetForm,
        setForm
    ]


}
