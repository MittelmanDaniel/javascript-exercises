const getAge = function(person){
    let birth = person.yearOfBirth
    if(!('yearOfDeath' in person)){
        let date = new Date(); // Current date
        let firstYear = date.getFullYear(); // Extract the year
        return firstYear-birth
    }
    return person.yearOfDeath-person.yearOfBirth
}

const findTheOldest = function(arr) {
    return arr.reduce((prev, curr)=>{
        let prevAge = getAge(prev)
        let currAge = getAge(curr)
        if(currAge>prevAge){
            return curr
        }
        return prev
    })
};

// Do not edit below this line
module.exports = findTheOldest;
