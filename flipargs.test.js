const {flipped,flipArgs} = require('./flipargs')

describe("Flip arguments",()=>{
    test('should return funcion', () => {
        expect(typeof flipArgs(()=>{})).toEqual('function')
    })

    test('should return flipped args', () => {
        expect(flipped('a','b','c')).toEqual(['c','b','a'])
    })
    
    
})