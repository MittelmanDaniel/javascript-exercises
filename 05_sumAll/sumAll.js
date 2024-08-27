const sumAll = function(start,end) {
    
    
    if (!Number.isInteger(start) || !Number.isInteger(end)){
        return "ERROR"
    }
    if(start<=0 || end <=0){
        return "ERROR"
    }

    let ans = 0;
    temp = Math.max(start, end)

    start = Math.min(start,end)
    
    end = temp

    for( let i = start; i<=end ; i++){
        ans+= i
    }

    return ans

};

// Do not edit below this line
module.exports = sumAll;
