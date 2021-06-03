import {useState} from 'react'

const useForm = (defaultValues, onSubmit) => {
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

    const handleSubmit = (event) => {
        event?.preventDefault();
        onSubmit();
    }   

    return {values, handleChange, handleSubmit}
}

export default useForm