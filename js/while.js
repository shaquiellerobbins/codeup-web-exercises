

"use strict";

var i = 2;

while (i <= 65536) {
    console.log(i);
    i=i*2;
}





var amtToSell = Math.floor(Math.random() * 50) + 50;

do {
    var amtBought = Math.floor(Math.random() * 5) + 1;
    amtToSell = amtToSell - amtBought;


} while (amtBought < amtToSell)

if (amtToSell > 0) {
    console.log(amtToSell + " cones sold")
} else if (amtToSell >= 0) {
    console.log("sorry, I cant sell you " + amtToSell + "  due to the fact that i om;y have " + amtBought + " availible .")
} else {
    console.log("Awesome, I can finally go home!!! all my cones and go home")
}

// }
// Multiplication table
// or (let i = 0; i <= 10; i++) {
//     for (let j = 0; j <= 10; j++) {
//         console.log(`${i} x ${j} = ${i * j}`);
//     }
//     console.log("----------------");
// }




var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var shuffledArray = array.sort((a, b) => 0.5 - Math.random());

console.log()

function mixed(input){
    return input.sort((a, b) => 0.5 - Math.random());
}
console.log(mixed(array))

var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];
library.forEach(function(book){
    console.log( "The book author is of " + book.author )
    console.log( "The book title is " + book.title )
    console.log( "The book reading status is " + book.readingStatus )
})