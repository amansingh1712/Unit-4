const time = require('../time_conversion')
describe("Check Time Conversion", () => {
    test('Seconds', () => {
        expect(time(55000)).toBe("55 seconds")
    })
    test('One Minute', () => {
        expect(time(60000)).toBe("1 minute")
    })
    test('One Minute and Seconds', () => {
        expect(time(89000)).toBe("1 minute 29 seconds")
    })
    test('More than one minute', () => {
        expect(time(184000)).toBe("3 minutes 4 seconds")
    })
    test('hour', () => {
        expect(time(3784000)).toBe("1 hour 3 minutes 4 seconds")
    })
    test('hours', () => {
        expect(time(10984000)).toBe("3 hours 3 minutes 4 seconds")
    })
})