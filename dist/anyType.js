"use strict";
// any type (kind of defeats the point of using TS so should be avoided)
let age;
let title;
age = 30;
age = false;
title = 25;
title = {
    hello: 'world',
};
// any type in arrays
let things = ['hello', true, 30, null];
things.push({ id: 123 });
// functions & any
function addTogether(value) {
    return value + value;
}
const resultOne = addTogether('hello');
const resultTwo = addTogether(3);
// any can be used as a temporary solution when migrating from TS to JS
