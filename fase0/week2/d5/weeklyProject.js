/*
====================
||===PSEUDOCODE===||
====================

SIMPAN `nama_musuh`
SIMPAN `nama_item`

PANGGIL startGame
BACA dan SIMPAN `nama`
IF `nama` kosong THEN
	SIMPAN `ras` sebagai 'hybird'
	SIMPAN `nama` sebagai 'Misterious hybird'
	TAMPILKAN 'Hai `nama` kamu adalah Hero kaum `ras`. Buktikan pada ras murni HYBIRD yang terhebat'
ELSE 
	BACA dan SIMPAN `ras`
	IF `ras` kosong THEN
		SIMPAN `ras` sebagai 'pigeon'
	ENDIF
	TAMPILKAN 'Hai `nama`, bela kaum `ras` yang tertindas hybird dengan kekuatanmu'
END IF
BACA dan SIMPAN `jumlahMusuh`
IF `jumlahMusuh` tidak berada antara 1 sampai 10 atau bukan angka THEN:
	SIMPAN getRandom(1,10) sebagai `jumlahMusuh`
ENDIF
TAMPILKAN jumlahMusuh

SIMPAN hero

FOR setiap kenaikan 1 pada `i` dari 1 sampai jumlah musuh:
	SIMPAN musuh
		PANGGIL hero.duel(`i`,musuh)
		IF hero.lanjut adalah false THEN
			BREAK
		ENDIF
	ENDIF
ENDFOR

BACA dan SIMPAN `lanjut`
IF `lanjut` adalah `Y` THEN
	PANGGIL startGame
ELSE
	TAMPILKAN 'Terimakasih telah membela `ras`';
ENDIF

====================
||======ABOUT=====||
====================
Tujuan: Permainan bebas buatanmu => "Ceritanya" Mini Game pada Proxytia untuk pet berbagai ras Hero
Sistem Permainan: 
Permainan melihat dari playerRandom vs musuhRandom (luck), hasil pertandingan bisa berupa:
- player menang dan mendapatkan drop item musuh (luck menang)
- musuh kabur (luck sama)
- player kalah (luck kalah)


====================
||====KRITERIA====||
====================
30 = tidak error
25 = sesuai pseudocode
5 = ifelse (saat input nama/ras/jumlahmusuh dan lanjut)
5 = loop (perulangan berdasar jumlah musuh)
5 = tipe data array (nama_musuh, nama_item)
10 = function (startGame, getRandom)
15 = tipe data obhect (Hero, Musuh)

*/

var nama_musuh = ['DonkeyKong','Chimera','Siren','Dog Socerer','Cat Sith','Werewolf','Deadly Phoenix','Naga','CrowsWitch','EarthGollem'];
var nama_item = ['Siren\'s Tears','Sugar cane','Magic Wand', 'Small Mana Potion', 'Witch\`s Finger', 'Teleport Scroll', 'Book-of-life', 'Wolf\'s Fur','Saber\'s Tooth','Deadman\'s Sword','Orbs','Eternal Flame','Rotten Banana'];
var Hero = function(nama,ras,jumlahMusuh){
	this.nama = nama;
	this.ras = ras;
	this.jumlahMusuh = jumlahMusuh;
	this.rand = getRandom(0,9);
	this.duel = function (i,musuh) {
		console.log(`Melawan musuh ke-${i}: ${musuh.nama}`);
		if (this.rand < musuh.rand) {
			this.lanjut = false;
			console.log('Kamu kalah');
		}else if (this.rand == musuh.rand) {
			console.log(`${musuh.nama} melarikan diri`);
		}else {
			var treasure = musuh.item;
			console.log(`Kamu menang, ${musuh.nama } menjatuhkan ${treasure.nama} sebanyak ${treasure.qty}`);
		}
	}
};
var Musuh = function(){
	this.rand = getRandom(0,9);
	this.nama = nama_musuh[this.rand];
	console.log("nama_musuh["+this.rand+"]: "+this.nama);
	this.item = {
					nama: nama_item[getRandom(0,12)],
					qty: getRandom(1,100)
				};
};
function startGame(){
	var nama = prompt('Masukan nama Anda: ');
	var ras = '';

	if (nama === '') {
		ras = 'hybird';
		nama = 'Misterious hybird';
		console.log(`Hai ${nama} kamu adalah ${ras}. Buktikan pada ras murni HYBIRD yang terhebat`);
	}
	else { 
		ras = prompt('Pilih ras binatang Anda [ex: cat|dog|crow|bat|bird]: ').trim();
		if(ras === '') ras = 'pigeon';
		console.log(`Hai ${nama} kamu adalah Hero kaum  ${ras} yang tertindas. Lawan Hybird dengan kekuatanmu!`);
	}

	var jumlahMusuh = parseInt(prompt('Masukan jumlah musuh yang anda inginkan [1..10]: ').trim());
	if(jumlahMusuh < 0 || jumlahMusuh >10 || isNaN(jumlahMusuh) ) jumlahMusuh = Number(getRandom(1,10));
	console.log('Jumlah Musuh: '+jumlahMusuh);


	var hero = new Hero(nama,ras,jumlahMusuh);

	for(var i = 1; i<= jumlahMusuh; i++){
		var musuh = new Musuh();
		hero.duel(i,musuh);
		if(hero.lanjut == false) break;
	}
	var lanjut = prompt('Lawan lagi?[Y|N]: ').trim().toUpperCase();
	if(lanjut == 'Y') startGame();
	else 
		console.log(`Terimakasih telah membela ${ras}`);
}
//random integer dengan batas atas dan bawah
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

startGame();