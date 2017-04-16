/*
Ubahlah seluruh var pada kode JavaScript dibawah ini menjadi let atau const!

var phi = 3.14;
var power = 2;
var radius = 0;
var calculateArea = function (radius) {
  return phi * Math.pow(radius, power);
}

radius = 21;
var area21 = calculateArea(radius);

radius = 7;
var area7 = calculateArea(radius);

console.log('area with 21 radius: %d, and area with 7 radius: %d', area21, area7);

*/
"use strict";

const phi = 3.14;
const power = 2;
let radius = 0;

const calculateArea = (radius) => phi * Math.pow(radius, power) ;

radius = 21;
let area21 = calculateArea(radius);
radius = 7;
let area7 = calculateArea(radius);

console.log('area with 21 radius: %d, and area with 7 radius: %d', area21, area7);