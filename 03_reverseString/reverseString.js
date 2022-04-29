const reverseString = function(string) {
    let reveredArray = [];
    let strLength = string.length;
    // Create an array from the passed string
    let strArray = Array.from(string);

    // Iterate through the array and reverse the characters
    for(i=0; i < strLength; i++){
        reveredArray.push(strArray.pop());
    }

    // Convert the array back to string and return it
    return reveredArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
