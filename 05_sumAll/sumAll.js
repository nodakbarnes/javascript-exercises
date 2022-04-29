const sumAll = function(start, end) {
    // return ERROR for non-number parameter
    if (typeof start !== 'number' || typeof end !== 'number') return 'ERROR';
    // return ERROR for negative number
    if (start < 0 || end < 0) return 'ERROR';
    // Swap if start larger than end
    if (start > end) {
        [start, end] = [end, start];
    }
    let sum = 0;
    // Loop through numbers and sum
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
