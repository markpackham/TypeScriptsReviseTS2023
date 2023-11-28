// type guards

// with type guards we check the type of something before the code is executed
// this way we don't have runtime errors if we attempt to run
// a method only intended to work on say strings or only on ints

type IdAgain = number | string;

function swapIdType2(id: IdAgain): IdAgain {

    // Make sure we only deal with strings in this context
    if(typeof id === 'string') {
        return parseInt(id);
        // otherwise deal with numbers
        // using methods for numbers
    }else{
        return id.toString();
    }
}

const idTwo = swapIdType2('5');
const idThree = swapIdType2(100);
// Now we have an Int and then a Number returned
console.log(idTwo, idThree);



// tagged interfaces

interface User3 {
    type: 'user'
    username: string;
    email: string;
    id: IdAgain;
}

interface Person2{
    type: 'person'
    firstName: string;
    age: number;
    id: IdAgain;
}

function logDetails(value: User3 | Person2):void {
    if(value.type === 'user') {
        console.log(value.email, value.username);
    }

    if(value.type === 'person') {
        console.log(value.firstName, value.age);
    }
}

logDetails({type: 'user', username: 'superuser', email: 'superuser@email.com', id: 5});
logDetails({type: 'person', firstName: 'Frank', age: 5, id: 5});