// iife 

function* generatorf(){
    yield "first val"
    yield "second val"
    yield "third val"
    return "over"; // done signaling
}

let gen = generatorf();

console.log(generatorf().next()); // "first val"

console.log(gen.next()); // "second val"

console.log(gen.next()); // "third val"

console.log(gen.next()); // { value: "over", done: true }