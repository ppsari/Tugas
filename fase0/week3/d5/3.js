/*
HACKTIV8 Online Live Coding 3

Nama: Poppy (GrayFox)

===============
Angka Terbilang
===============

[Perintah]

Buatlah sebuah function yang mengubah kata didalam kalimat menjadi kata bilangan (TWO, FOUR) berdasarkan jumlah huruf yang ada didalam kata dan diurutkan berdasarkan jumlah huruf yang terbesar.
jika dalam 1 kata memiliki:

1 huruf = One
2 huruf = Two
3 huruf = Three
4 huruf = Four
5 huruf = Five
6 huruf = Six
7 huruf = Seven
8 huruf = Eight
9 huruf = Nine

[Hint]
1. ubah kata menjadi angka

2. lakukan pengurutan dari yang terbesar ke terkecil

3. ubah angka menjadi bilangan angka


[Contoh]
input : 'Aku Budi'
output = ['Four', 'Three']

Hint
*/



function strtoNum(sen){
	sen = sen.split(' ');
	var temp = [];
	sen.forEach( (curr) => temp.push(curr.length) );
	temp.sort().reverse();
	var res = temp.map( (curr) => {
		switch (curr) {
			case 1: return "One"; break;
			case 2: return "Two"; break;
			case 3: return "Three"; break;
			case 4: return "Four"; break;
			case 5: return "Five"; break;
			case 6: return "Six"; break;
			case 7: return "Seven"; break;
			case 8: return "Eigth"; break;
			case 9: return "Nine"; break;
		}
		
	} );
	return res;

}



console.log(strtoNum('Gray Fox')); //[ 'Four', 'Three' ]
console.log(strtoNum('Budi Learning JS')); //[ 'Eight', 'Four', 'Two' ]
console.log(strtoNum('Web Developer')); //[ 'Nine', 'Three' ]
console.log(strtoNum('I Become Developer')); //[ 'Nine', 'Six', 'One' ]
