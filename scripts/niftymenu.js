
/* File Name: niftymenu.js
Date: 02/19/17
Programmer: Jeanie Housden */

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}