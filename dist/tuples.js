"use strict";
// tuples
// must follow very strict type order
let dude = ['mario', 30, true];
// person[0] = false
dude[0] = 'luigi';
// tuples examples
// the color format is HSLA
let hsla;
hsla = [200, '100%', '50%', 1];
let xy;
xy = [94.7, 20.1];
// get coords of something
function useCoords() {
    const lat = 100;
    const long = 50;
    return [lat, long];
}
const [lat, long] = useCoords();
// named tuples (very helpful for figuring out what should be in a tuple)
let user1;
user1 = ['peach', 25];
console.log(user1[0]);
