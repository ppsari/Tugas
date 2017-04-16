/*
HACKTIV8 Online Live Coding 1

Nama: Poppy

================
Crack The Number
================

Mike Hammer adalah seorang detektif yang di minta untuk memecahkan sebuah kasus pembunuhan berantai yang terjadi di sebuah kota
di pedalaman eropa. Di tempat kejadian peristiwa, sang pembunuh selalu meninggalan urutan angka, yang ternyata adalah urutan 
alphabetic dan apabila di gabungkan menjadi sebuah Nama.
Sebagai seorang detektif Mike Hammer di minta untuk mencegah terjadinya pembunuhan selanjutnya dengan cara,
memecahkan angka tersebut untuk di gantikan menjadi nama seseorang yang menjadi target si pembunuh,

Contoh urutan angka:

angka = [1,12,1,19,20,1,9,18,0,1,18,3,8,9,5] // Alastair Archie
angka = [2,1,12,20,8,1,26,1,18,0,6,5,18,7,21,19] //Balthazar Fergus

[PERINTAH]
-  Tersedia fungsi nextTargetName, dimana fungsi tersebut dapat merubah uturan angka tersebut menjadi sebuah
   susunan alphabetic
 - Apabila di temukan angka 0 pada susunan angka, itu berarti adalah sebuah spasi
 - Buatlah susunan huruf itu menjadi sebuah string

*/
let alpha = " abcdefghijklmnopqrstuvwxyz".split('');
function nextTargetName(angka){
  if (!Array.isArray(angka)) return 'SALAH';

  let validasi = true;
  angka.forEach( (x) => ( (x > 26 || x < 0)? validasi = 'SALAH' : validasi = validasi ) );
  if (validasi === true) {
  	angka = angka.map( (x) => ( alpha[x]) ).join('');
	  return angka.split(' ').map( (x) => x.charAt(0).toUpperCase().concat(x.substr(1)) ).join(' ');
  }

  return validasi;
}

console.log(nextTargetName([1,12,1,19,20,1,9,18,0,1,18,3,8,9,5])); // Alastair Archie
console.log(nextTargetName(131)); // "SALAH" --> bukan array
console.log(nextTargetName([1,12,0,26,131])); // "SALAH" --> diluar 0..26
console.log(nextTargetName([1,12,0,26,13])); // "Al Zm"