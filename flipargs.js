/**
 * 
 * Create a function that invokes func with arguments  reversed 
 */

function flipArgs(func){
    return function (...args){
        return func(args.reverse())
    }
}
const flipped =flipArgs(function(args){
    return args
})

console.log(flipped('a','b','c','d'))

module.exports = {flipped,flipArgs}