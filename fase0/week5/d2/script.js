"use strict";

let divAll = document.getElementById('eldest-parent').children;
let b = document.getElementById('a-child');

divAll[0].innerHTML =  'Diakses Melalui '+divAll[0].parentNode.id+'';

b.nextElementSibling.innerHTML = 'Diakses Melalui a Child';
b.previousElementSibling.innerHTML = 'Diakses Melalui a Child';

b.parentNode.parentNode.nextElementSibling.innerHTML = 'Diakses Melalui a Child';