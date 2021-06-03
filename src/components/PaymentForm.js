import React from 'react'
import { Button, Label, Input, Form } from './styled-components'

const PaymentForm = (props) => {
    return (
        <Form>
            <Label htmlFor='income'>Income:</Label>
            <Input id='income' type="number"></Input>
            <Label htmlFor='payment'>Payment:</Label>
            <Input id='payment' type="number"></Input>
            <Button color="#ffb6c1" type="submit">Calculate</Button>
        </Form>
    )
}

export default PaymentForm