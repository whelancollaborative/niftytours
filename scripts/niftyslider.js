/* File Name: niftyslider.js
Date: 02/20/17
Programmer: Jeanie Housden */


$(document).ready(function(){
  $('body').removeClass('jsOff').addClass('.jsOn');

  $('#slider').bjqs({
    height: 450,
    width: 800,
    responsive: true
  });
});
