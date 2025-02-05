let fruits = ["apple", "orange", "peach", "orange"];

fruits.forEach(printfruits);

function printfruits(fruit, tag, from){
    console.log(fruit,tag,from);
}

fruits.map(function (now){
    console.log(now); // Window object
})