const calculatePayment = (income, payment) => {
    while (income > 0) {
        if (income > 256) {
            payment -= 0.6
        } else if (income > 150) {
            payment -= 0.5
        }
        if (payment < 0) {
            payment = 0
            break
        }
        income -= 1
    }
    return payment
}