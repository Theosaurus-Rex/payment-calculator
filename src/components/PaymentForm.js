import React from 'react'
import { Button, Label, Input, Form } from './styled-components'
import useForm from '../custom-hooks/use-form'

const PaymentForm = (props) => {
    const defaultValues = {payment: 0, income: 0}
    const [values, handleChange] = useForm(defaultValues)
    return (
        <Form>
            <Label htmlFor='income'>Income:</Label>
            <Input id='income' type="number" name="income" value={values.income} onChange={handleChange}></Input>
            <Label htmlFor='payment'>Payment:</Label>
            <Input id='payment' type="number" name="payment" value={values.payment} onChange={handleChange}></Input>
            <Button type="submit">Calculate</Button>
        </Form>
    )
}

export default PaymentForm