"use strict";

document.getElementById('fill-me').innerHTML = 'HALO';
let p = document.getElementsByClassName('change-all-of-me');
for (let i = 0; i < p.length; i++)  p[i].innerHTML = 'HALO JUGA';
let h2 = document.getElementsByTagName('h2'); 
for (let i = 0; i < h2.length; i++) h2[i].innerHTML = 'Apa Kabar!';