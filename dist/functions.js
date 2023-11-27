"use strict";
// functions
function addTwoNumbers(a, b) {
    return a + b;
}
addTwoNumbers(1, 2);
const subtractTwoNumbers = (a, b) => {
    return a - b;
};
subtractTwoNumbers(10, 2);
// void return type inferred since we return nothing
// function addAllNumbers(items: number[]) {
//     const total =  items.reduce((acc, item) => acc + item, 0);
//     console.log(total);
// }
function addAllNumbers(items) {
    const total = items.reduce((acc, item) => acc + item, 0);
    console.log(total);
}
addAllNumbers([1, 2, 3, 4, 5]);
// return type inference
// we get inference on return types, but not on argument types
// type inference on return values does not enforce a return type
function formatGreeting(name, greeting) {
    return `${greeting}, ${name}`;
}
const result = formatGreeting("John", "Hello");
