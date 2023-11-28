// aliases type

type Rgb = [number, number, number]

function getRandomColor(): Rgb {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    return [r,g,b]
}

const colorOne = getRandomColor()
const colorTwo = getRandomColor()
console.log(colorOne, colorTwo)

// object literal example
// alias looks like an Interface but Interfaces don't have =
type User = {
    name: string
    score: number
}

const userOne: User = {name: "John", score: 100}
console.log(userOne)

function formatUser(user: User): void{
    console.log(`${user.name} has a score of ${user.score}`)
}

formatUser(userOne)
formatUser({name: "Mary", score: 200})