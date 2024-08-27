const removeFromArray = function(input, ...removelist) {

    return input.filter(element => !removelist.includes(element))

};

// Do not edit below this line
module.exports = removeFromArray;
