"use strict";

let content;
let contentpost;
let h1;
let span;
let p;
let button;
let btext; // Button's Text
const alertShared = () => alert('You have shared this post');



content = document.createElement('div');
contentpost = document.createElement('div');

h1 = document.createElement('h1');
span = document.createElement('span');
p = document.createElement('p');
button = document.createElement('button');
btext = document.createTextNode('Share This Post');


content.setAttribute('id','content');
contentpost.setAttribute('class','content-post');
button.setAttribute('class','share-post-button');
p.textContent =  'Lorem Ipsum Dolor Sit Amet';
button.appendChild(btext);


contentpost.appendChild(h1);
contentpost.appendChild(span);
contentpost.appendChild(p);
contentpost.appendChild(button);
content.appendChild(contentpost);
content.appendChild(contentpost.cloneNode(true));
document.getElementById('main').appendChild(content);



button = Array.from(document.getElementsByClassName('share-post-button'));
button.forEach( (el) => el.addEventListener('click', alertShared )  );


h1 = document.getElementsByTagName('h1');
h1[0].textContent  = 'Judul Post';
h1[1].textContent  = 'Judul Post2';

span = document.getElementsByTagName('span');
span[0].textContent = 'Published on 12 May 2016';
span[1].textContent = 'Published on 13 May 2016';