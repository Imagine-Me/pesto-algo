const sumFib = require('./sum-of-odd-fib')
const sumOfFib = require('./sum-of-odd-fib')

describe("SUM OF ODD FIBONACCI", () => {
    test('should return a number', () => {
        expect(typeof sumOfFib(1)).toEqual('number')
    })
    test('should return correct number', () => {
        expect(sumOfFib(2)).toBe(2)
        expect(sumOfFib(1000)).toBe(1785)
        expect(sumOfFib(4000000)).toBe(4613732)
        expect(sumOfFib(4)).toBe(5)
        expect(sumOfFib(75024)).toBe(60696)
    })

})