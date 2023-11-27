"use strict";
// compile from root where ts.config is "tsc --watch"
// to view index.js from root type in another terminal "node --watch dist/index.js"
// arrays
let names = ["John", "Jane", "Bob"];
let ages = [25, 30, 35];
names.push("Mary");
ages.push(40);
// type inference with arrays
let fruits = ['apples', 'pears', 'mangos', 'oranges'];
fruits.push('bananas');
const fruit = fruits[3];
// tuples
let person = ["John", 25];
// type inference with tuples
let person2 = ["Mary", 30];
// enums
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
// object literals
let user = {
    firstName: "John",
    age: 25,
    id: 1
};
user.firstName = 'Tim';
user.age = 90;
user.id = 2;
// type inference object literals
let player = {
    name: "John",
    score: 90,
};
player.name = "Mary";
player.score = 100;
