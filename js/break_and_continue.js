"use strict";


do{
    var userInput= prompt("Please enter an odd number between 1 and 50.")
} while (userInput % 2 ===0|| userInput <1 || userInput > 50 || isNaN(userInput));

for (var i = 1; i <= 50; i++) {
    if (i == userInput ){
        console.log("yikes! skipping number: " + userInput)
    }else if (i % 2 !==0) {
        console.log ("this is an odd number " + i)
    }else{
        continue;
    }
}
//Notes
// in the for loop, i had to switch conditionals because the order i had it, the number i  skipped would be assigned
// an "an odd number instead of the " I am skipping this number"




















// let i = 0;
// while (i < 50) {
//     i++;
//     if ((i >= 26 && i <= 28)) {
//         console.log("we are skipping this number")
//         continue;
//     } else if (i % 2 === 0){
//         continue;
//     }
//     console.log(i);




















// let i = 0;
// while (i < 50) {
//     i++;
//     if ((i >= 26 && i <= 28)) {
//         console.log("we are skipping this number")
//         continue;
//     } else if (i % 2 === 0){
//         continue;
//     }
//     console.log(i);