import React from 'react'
import { Button, Label, Input, Form } from '../styled-components'
import useForm from '../../custom-hooks/use-form'
import validate from './validation-rules'

const PaymentForm = (props) => {
    const onFormSubmit = () => console.log(values)
    const defaultValues = {payment: 0, income: 0}
    const {values, handleChange, handleSubmit} = useForm(defaultValues, onFormSubmit)
    return (
        <Form onSubmit={handleSubmit}>
            <Label htmlFor='income'>Income:</Label>
            <Input id='income' type="number" name="income" value={values.income} onChange={handleChange}></Input>
            <Label htmlFor='payment'>Payment:</Label>
            <Input id='payment' type="number" name="payment" value={values.payment} onChange={handleChange}></Input>
            <Button type="submit">Calculate</Button>
        </Form>
    )
}

export default PaymentForm