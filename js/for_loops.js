"use strict";

var myNumber = 1
function showMultiplicationTable(a){
    for (a = 1; a <= 10; a++) {
        console.log( "7" + "x" + a + "=" + (7 * a));
    }}

showMultiplicationTable(myNumber)



for (var i =1; i <= 10; i++ ){
    var random=Math.floor( Math. random() * 200) +20;
    if (random % 2===0){
        console.log(random +" is even")
    }else{ console.log(random + "is odd")
    }
}



for(var i=1; i<=9; i++){
    var Num='';
    for(var j=0; j<i; j++){
        Num += i;
    }
    console.log(Num) }