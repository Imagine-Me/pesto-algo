/**
 * 
 *  Given a positive number n, returns the sum of odd fibonacci that less than
 *  or equal to than number. First number of Fibonacci series is 1 and 1.
 */


function sumFib(n) {
    const fib = [1, 1];
    if (n <= 0)
        return 0
    if (n <= 2)
        return 2
    if (n > 2)
        while (fib[fib.length - 1] + fib[fib.length - 2] <= n) {
            fib.push(fib[fib.length - 1] + fib[fib.length - 2])
        }
    return fib.reduce((a, v) => v % 2 !== 0 ? a + v : a, 0)
}

module.exports = sumFib