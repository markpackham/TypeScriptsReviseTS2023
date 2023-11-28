"use strict";
// union types using "or" |
// number or string union type
let someId;
someId = 1;
someId = "1";
// set default to null
let email = null;
email = "jimmy54334@email.com";
email = null;
let anotherId;
anotherId = 'dfsdfsdf323223';
anotherId = 453534534534;
// union PITFALL!!!! LIMITATIONS
function swapIdType(id) {
    // This can only use props and methods used BOTH by
    // number AND string types
    // parseInt(id) is NOT ALLOWED since it doesn't know
    // if the argument is a number Or a string
    // You cannot parseInt(10) since you cannot parseInt on an Integer
    return id;
}
swapIdType('5');
