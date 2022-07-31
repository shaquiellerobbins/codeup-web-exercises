
"use strict";

var konamiCode = [38,38,40,40,37,39,37,39,66,65,13];


var codeIndex = 0;

function showImageGeneric (id){
    console.log(id);

    $(id).show(0);
    $(id).hide(1);
}


$(document).keydown(function(event) {

    console.log(event.which);


    if (event.which === 38) {
        showImageGeneric('#redDot-up');
        if (konamiCode[codeIndex] === 38) {
            codeIndex++
        } else {
            codeIndex = 0;
            alert("not quite");
        }
    } else if (event.which === 40) {
        showImageGeneric('#redDot-down');
        if (konamiCode[codeIndex] === 40) {
            codeIndex++;
        } else {
            codeIndex = 0;
            alert("not quite");
        }
    } else if (event.which === 37) {
        showImageGeneric('#redDot-left');
        if (konamiCode[codeIndex] === 37) {
            codeIndex++;
        } else {
            codeIndex = 0;
            alert("not quite");
        }
    } else if (event.which === 39) {
        showImageGeneric('#redDot-right');
        if (konamiCode[codeIndex] === 39) {
            codeIndex++;
        } else {
            codeIndex = 0;
            alert("not quite");
        }
    } else if (event.which === 66) {
        showImageGeneric('#b-button');
        if (konamiCode[codeIndex] === 66) {
            codeIndex++;
        } else {
            codeIndex = 0;
            alert("not quite");
        }
    } else if (event.which === 65) {
        showImageGeneric('#a-button');
        if (konamiCode[codeIndex] === 65) {
            codeIndex++;
        } else {
            codeIndex = 0;
            alert("not quite");
        }
    } else if (event.which === 13) {
        showImageGeneric('#start-button');
        if (konamiCode[codeIndex] === 13) {
            codeIndex++;
        } else {
            codeIndex = 0;
            alert("not quite");
        }
    }

    if (codeIndex === konamiCode.length) {
        success();
    }
});

var audio;
function success() {
    audio = new Audio('sounds/Pling-sound-effect.mp3');
    audio.play();

    setTimeout(function(){
        alert("Success, you have add 30 lives!");
    },1000);
    codeIndex = 0;
}

