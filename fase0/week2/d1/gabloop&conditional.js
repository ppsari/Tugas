/*
1. Tambahkan variabel tahunLahir, variabel ini akan diisi dengan tahun lahir pemain.
2. Isi variabel umur sekarang adalah 2017 - tahunLahir.
3. Tambahkan variabel playerHealth, assign variabel ini dengan tahunLahir X Math.random()
4. Tambahkan variabel monsterHealth, assign variabel ini dengan tahunLahir X Math.random()
5. Tambahkan variabel kodeMonster, assign variabel ini dengan Math.floor(Math.pow(100, Math.random()))
6. Pada logika if terhadap variabel nama, apabila pemain tidak mengisi variabel, assign variabel peran dengan kacung
7. Setelah semua pengecekan menggunakan if selesai dilakukan, lakukan perulangan sebanyak tahunLahir.
8. Di dalam perulangan tersebut, buat sebuah logika if-else untuk melakukan pengecekan sebagai berikut:
jika indeks perulangan adalah kelipatan umur:
console.log(peran + ' ' + nama + ' menyerang monster!')
Kurangi monsterHealth dengan umur
jika indeks perulangan adalah kelipatan kodeMonster:
console.log('monster menyerang ' + peran + ' ' + nama + '!')
Kurangi playerHealth dengan kodeMonster
jika indeks perulangan adalah kelipatan umur dan kodeMonster sekaligus:
console.log('Health keduanya bertambah')
Tambahkan playerHealth dengan kodeMonster
Tambahkan monsterHealth dengan umur
9. 
Jika playerHealth lebih besar daripada monsterHealth:
console.log('Selamat, ' + peran + ' ' + nama + ' memenangkan pertarungan!')
Jika sebaliknya, console.log('Sayang sekali, ' + peran + ' ' + nama + ' dikalahkan monster...')

*/

var tahunLahir 		= prompt("Masukan tahun lahir").trim();
if(tahunLahir != ""){
	var umur 			= 2017 - tahunLahir;
	var playerHealth 	= Math.random();
	var monsterHealth 	= Math.random();
	var kodeMonster 	= Math.floor(Math.pow(100, Math.random()));
	var nama 			= prompt("Masukan Nama").trim();
	var peran;
	console.log(kodeMonster);
	console.log(playerHealth+'-'+monsterHealth);
	if(nama == "") 	peran = "Kacung";
	else 			peran = prompt("Pilih peranmu untuk memulai game[Ksatria, Tabib, Penyihir]").trim();

	for(var i = 1; i<= tahunLahir;i++){
		if(i%umur===0 && i%kodeMonster===0){
			console.log('Health keduanya bertambah');
			monsterHealth 	+= umur;
			playerHealth 	+= kodeMonster;
		}else{
			if(i%umur === 0 ){ 
				console.log(peran + ' ' + nama + ' menyerang monster!');
				monsterHealth -= umur;
			}
			else if(i%kodeMonster === 0){
				console.log('monster menyerang ' + peran + ' ' + nama + '!');
				playerHealth -= kodeMonster;
			}
		}
	}
	if(playerHealth > monsterHealth)console.log('Selamat, ' + peran + ' ' + nama + ' memenangkan pertarungan!');
	else console.log('Sayang sekali, ' + peran + ' ' + nama + ' dikalahkan monster...');

}

