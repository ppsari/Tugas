/*
HACKTIV8 Online Live Coding 2

Nama:

============
The Gamblers
============

Seorang pejudi melakukan mengocokan dadu sebanyak empat kali.
Ia akan mendapat cash sebesar 300 dikalikan dengan jumlah angka
yang keluar dari dadu, apabila bukan 0.

Apabila keluar angka 0, ia akan mendapatkan denda cash senilai 1000.
Hasil empat kali pengocokan dadu akan dimasukkan ke dalam array, yang
menjadi parameter ke fungsi rollDice.

[PERINTAH]
Buatlah sebuah fungsi rollDice!
rollDice adalah sebuah function yang menerima satu parameter berupa array.
Isi dari array pasti 4 nilai yang merupakan nilai dari dadu. Kamu tidak
perlu melakukan validasi nilai dadu lagi. Function akan mengembalikan nilai
hanya berupa angka.
Kamu hanya perlu mengubah code di bagian dalam fungsi!

Contoh 1:
hasil dadu = [2, 3, 4 ,5]
cash = (2 * 300) + (3 * 300) + (4 * 300) + (5 * 300) = 4200

Contoh 2:
hasil dadu = [3, 3, 0, 5]
cash = (3 * 300) + (3 * 300) -1000 + (5* 300)) = 2300

Contoh 3:
hasil dadu = [0, 0, 6, 7]
cash = -1000 + -1000 + (6 * 300) + (7 * 300) = 1900
*/

function rollDice(diceResultsParam) {
	var cash = 0 ;
	for (var i = 0; i < diceResultsParam.length; i++) {
		if (diceResultsParam[i] === 0) cash -=1000;
		else cash += diceResultsParam[i]*300;
	}
	return cash;
  //Mulai Code Disini

}

console.log(rollDice([2, 3, 4 ,5])); // 4200

console.log(rollDice([3, 3, 0, 5])); // 2300

console.log(rollDice([0, 0, 6, 7])); // 1900
