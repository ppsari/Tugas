/*
HACKTIV8 Final Live Coding 3

Nama : Poppy

======================
Pair Programming
======================

[DESKRIPSI]
HACKTIV8 adalah kelas pemrograman yang sedang menyusun susunan Pair Programming.
Setiap murid di kelas akan dibagi menjadi kelompok beranggotakan dua orang.
Apabila jumlah murid di kelas ganjil, instruktur yang akan menemani satu orang yang tersisa.

Buatlah susunan pasangan Pair Programming di kelas!

[INSTRUKSI]
Tersedia sebuah function bernama arrangePairs yang akan menerima satu parameter berupa string,
yang berisikan nama-nama murid di kelas dipisahkan berdasarkan spasi. function akan mengembalikan
sebuah array baru yang merupakan kelompok-kelompok pembagian tersebut.

* Ubahlah huruf awal nama murid menjadi huruf capital. *

[START]
*/


function arrangePairs(str) {
	var arr = str.split(' ');
	arr = arr.map((x)=>(x.charAt(0).toUpperCase()+x.substr(1) ) );
	var temp = [];

	for (var i = 0; i < arr.length; i+=2) {
		if(i !== arr.length-1 )
			temp.push(arr[i]+' dan '+arr[i+1]);
		else if(i === arr.length-1)
			if(arr[i].trim()!='') temp.push(arr[i]+' dan Instruktur');
			else temp.push();
	}
	return temp;

}

console.log(arrangePairs('yani joni doni roni')); // ['Yani dan Joni', 'Doni dan Roni']
console.log(arrangePairs('james jake jade')); // ['James dan Jake', 'Jade dan Instruktur']
console.log(arrangePairs('tori nori sori wori mori')); // ['Tori dan Nori', 'Sori dan Wori', 'Mori dan Instruktur'];
console.log(arrangePairs('rudi')); // ['Rudi dan Instruktur']
console.log(arrangePairs('')); // []
