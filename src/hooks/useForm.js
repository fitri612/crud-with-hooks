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

    return [
        values,
        handleInputChange,
        resetForm
    ]


}
