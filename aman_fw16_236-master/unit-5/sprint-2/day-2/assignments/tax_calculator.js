const taxCal = (income) => {
    let tax = 0;
    if (income < 250000) {
        tax = 0
    }
    else if (income < 500000) {
        tax = income / 10
    }
    else if (income < 1000000) {
        tax = income / 5
    }
    else {
        tax = income * (3 / 10)
    }
    return tax
}
module.exports = taxCal