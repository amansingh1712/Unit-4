const tax = require('../tax_calculator')
describe("Calculate Tax", () => {
    test("income below 2,50,000", () => {
        expect(tax(10000)).toBe(0)
    })
    test("income below 5,00,000", () => {
        expect(tax(300000)).toBe(30000)
    })
    test("income below 10,00,000", () => {
        expect(tax(600000)).toBe(120000)
    })
    test("income above 10,00,000", () => {
        expect(tax(2000000)).toBe(600000)
    })
})