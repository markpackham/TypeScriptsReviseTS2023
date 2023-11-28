// compile from root where ts.config is "tsc --watch"
// to view index.js from root type in another terminal "node --watch dist/index.js"

// arrays

let names: string[] = ["John", "Jane", "Bob"];
let ages: number[] = [25, 30, 35];

names.push("Mary");
ages.push(40);

// type inference with arrays
let fruits = ['apples','pears','mangos','oranges'];
fruits.push('bananas');

const fruit = fruits[3]

// tuples

let person: [string, number] = ["John", 25];

// type inference with tuples
let person2: [string, number] = ["Mary", 30];

// enums

enum Color {
    Red = 1,
    Green = 2,
    Blue = 3
}

// object literals

let user: {firstName: string, age: number, id: number} = {
    firstName: "John",
    age: 25,
    id: 1
}

user.firstName = 'Tim'
user.age = 90
user.id = 2

// type inference object literals

let player = {
    name: "John",
    score: 90,
}

player.name = "Mary"
player.score = 100