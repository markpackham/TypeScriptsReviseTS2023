"use strict";
// type guards
function swapIdType2(id) {
    // Make sure we only deal with strings in this context
    if (typeof id === 'string') {
        return parseInt(id);
        // otherwise deal with numbers
        // using methods for numbers
    }
    else {
        return id.toString();
    }
}
const idTwo = swapIdType2('5');
const idThree = swapIdType2(100);
// Now we have an Int and then a Number returned
console.log(idTwo, idThree);
