function removePunctuationAndSpaces(str) {
    return str
        .split('')
        .filter(char => (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9'))
        .join('');
}

let originalString = "Hello, World! How's everything?";
let cleanedString = removePunctuationAndSpaces(originalString);

console.log(cleanedString); // Output: "HelloWorldHowseverything"


const palindromes = function (str) {
    str = removePunctuationAndSpaces(str).toLowerCase()

    return str === str.split('').reverse().join('')
};

// Do not edit below this line
module.exports = palindromes;
