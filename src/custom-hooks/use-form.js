import {useState} from 'react'

const useForm = (defaultValues) => {
    const [values, setValues] = useState(defaultValues)
    const handleChange = (event) => {
        setValues( values => {
            return {
                ...values,
                // Key that can change based on how function is called
                [event.target.name]: event.target.value
            }
        })
    }

    return [values, handleChange]
}

export default useForm