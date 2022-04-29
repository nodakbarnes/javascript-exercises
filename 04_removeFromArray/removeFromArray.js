const removeFromArray = function(arr, elem) {
    // Use spread operator to make argument array
    let args = [...arguments];
    // Remove the first argument as it is the passed array
    args.shift();
    
    return arr.filter(item => !args.includes(item))
};

// Do not edit below this line
module.exports = removeFromArray;
