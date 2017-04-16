"use strict";
/*Tugas 1
Buatlah sebuah code yang mentransformasi array menggunakan map!
*/
console.log('TUGAS 1');
var transformArrToLowerCase = arr =>  arr.map(x => x.toLowerCase() );
console.log(transformArrToLowerCase(['BUDI', 'MArNi', 'mukIDi'])); // ['budi', 'marni', 'mukidi']
/*

Tugas 2

Buatlah sebuah code yang melakukan filter ke array menggunakan filter!
*/
console.log('TUGAS 2');
var filterArrUnder10 = arr => arr.filter((x)=>x >= 10);
console.log(filterArrUnder10([1, 5, 12, 15, 20])); // [12, 15, 20]

/*
Tugas 3
Buatlah sebuah code yang mendapatkan nilai terbesar menggunakan reduce!
*/
console.log('TUGAS 3');
var reduceFindMaximum = arr => arr.reduce((max,curr)=>curr > max? curr: max)
console.log(reduceFindMaximum([5, 1, 7, 6, 9])); // 9
