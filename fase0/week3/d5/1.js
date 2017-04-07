/*
HACKTIV8 Online Live Coding 1

Nama: Poppy

===============
Game Characters
===============

Berikut ini adalah 4 Character game yang memiliki data yang menjadi properti nya masing masing-masing
seperti Name, Jobs, Age , Skill dan HP (Health Power).

----------------------------------------------------
Name  |    Jobs   |   Age |     Skill     |   HP
----------------------------------------------------
Andrew    Knight    35   One Handed Sword    6700
Angus     Wizard    45   Magic Crasher       4500
Carney    Priest    20   Healing             3000
Benedict  Assassin  33   Cloaking            5500
-----------------------------------------------------

Tugas Anda :

1. Buatlah 4 buah Object Character secara JSON dengan yang struktur properti didalam nya.
*/
var Character = function (name,jobs,age,skill,hp){
	this.name = name;
	this.jobs = jobs;
	this.age = age;
	this.skill = skill;
	this.hp = hp;
	this.attacked = function(monsterAttack){
		monsterAttack = parseInt(monsterAttack);
		if(this.hp > monsterAttack) this.hp = (this.hp - monsterAttack);
		else this.hp = 0;
	};
}
var c1 = new Character('Andrew','Knight',35,'One Handed Sword',6700);
var c2 = new Character('Angus','Wizard',45,'Magic Crasher',4500);
var c3 = new Character('Carney','Priest',20,'Healing',3000);
var c4 = new Character('Benedict','Assassin',33,'Cloaking',5500);
/*
2.  Masukan ke 4 Object tersebut pada sebuah Array
    Buat Iterasi sebanyak jumlah Object
    Buat akses setiap property

    [CONTOH]
    Array[index].objectProperty

    Tampilkan informasi seperti contoh berikut:

    Name : Andrew
    Jobs : Knight
    Age : 35
    Skill : One Handed Sword
    HP : 6700
*/
var allChara = [];
allChara.push(c1,c2,c3,c4);
for(var i = 0 ; i < allChara.length;i++){
	console.log('Name : '+allChara[i].name);
	console.log('Jobs : '+allChara[i].jobs);
	console.log('Age : '+allChara[i].age);
	console.log('Skill : '+allChara[i].skill);
	console.log('HP : '+allChara[i].hp);
	console.log("\n");
}
/*
3. Buat Sebuah variabel monsterAttck = 5000 dimana nantinya akan mengurangi HP dari setiap Character
*/
var monsterAttck = 5000;
console.log('Monster Attack : '+monsterAttck);
/*
4. Tampilkan Nama dan total HP character setelah menerima monsterAttck
  [CONTOH]

  Name : Andrew
  HP : 1700

  Name : Angus
  HP : 0

  * Apabila HP < monsterAttck, Maka HP = 0 (Jangan tampilkan Minus)


*/
console.log("\n");
console.log("DUM DUM DUM");
console.log("Wild monster appear!");
console.log("\n");
for(var i = 0 ; i < allChara.length;i++){
	console.log(`Hero number ${i+1} status`);
	console.log('Name : '+allChara[i].name);
	allChara[i].attacked(monsterAttck);
	console.log('HP : '+allChara[i].hp);
	console.log("\n");
}