const sum = require('../sum_Args')
describe("Check Sum Argument", () => {
    test('All Positive Number', () => {
        expect(sum([99, 0, 8, 8, 2, 3, 3, 4, 3, 3])).toBe(133)
    })
    test('All Negative Number', () => {
        expect(sum([-2, -4, -6, -8])).toBe(-20)
    })
    test('Both Numbers', () => {
        expect(sum([-2, -4, 6, -8, 9, 1])).toBe(2)
    })
    test('No Number', () => {
        expect(sum([])).toBe(0)
    })
    test('If Any String is there', () => {
        expect(sum([1, 2, 5, "4"]).message).toBe("Invalid Input")
    })
})