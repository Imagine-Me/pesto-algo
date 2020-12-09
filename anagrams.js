/**
 * 
 * Write a method which given a string , returns a valid number of anagrams in it
 */



function countingAnagrams(string) {
    if (string === undefined)
        throw new Error("Provide a string")
    const words = string.split(' ').filter(value => value.length > 1)

    const sorted_words = words.map(value => value.split("").sort().join("")).sort()
    let i = 0;
    let anagram_count = 0;
    while (i < sorted_words.length - 2) {
        if(sorted_words[i] == sorted_words[i+1]){
            anagram_count++
            i=sorted_words.lastIndexOf(sorted_words[i])
        }else
            i++
    }

    return anagram_count
}


module.exports = countingAnagrams