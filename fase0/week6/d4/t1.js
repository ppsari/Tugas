"use strict";

var validateString  = str => { return str.match(/[^a-z]/gi)? false : true};
var validateNumber = str => { return str.match(/\D/gi)? false: true };
var validateStringOrNumber = str => { return str.match(/\W|\_/gi)? false : true}; 
var validateGender = str => {return (str!=='male' && str!=='female')? false : true};


class Student {
	
	constructor(name,age,dob,gender,sid) {
		this.hobbies = [];
		this.setName(name);
		this.setAge(age);
		this.setDoB(dob);
		this.setGender(gender);
		this.setSID(sid);
	}

	setName(name) {
		this.name = null;
		if (name === '') console.log('Name harus diisi');
		else if (!validateString(name)) console.log('Name harus berupa huruf');
		else this.name = name;
	}
	setAge(age) {
		this.age = null;
		if (age === '') console.log('Age harus diisi');
		else if (!validateNumber(age.toString())) console.log('Age harus berupa angka');
		else if (age < 6 ) console.log('Age minimum adalah 6 tahun');
		else this.age = age;
	}
	setDoB(dob) {
		this.dob = null;
		if (dob === '') console.log('DOB harus diisi');
		else this.dob = dob;
	}
	setGender(gender) {
		this.gender = null;
		if (gender === '') console.log('Gender harus diisi');
		else if (!validateGender(gender)) console.log('Gender harus berupa male/female');
		else this.gender = gender;
	}
	setSID(sid) {
		this.sid = null;
		if (sid === '') console.log('StudentID harus diisi');
		else if (!validateStringOrNumber(sid)) console.log('StudentID hanya berupa huruf dan atau angka');
		else this.sid = sid;
	}
	addHobby(hobby) {
		if (hobby === '') console.log('Hobby harus diisi');
		else this.hobbies.push(hobby); 
	}
	removeHobby(hobby) {
		if (hobby === '') console.log('Hobby harus diisi');
		else this.hobbies = (this.hobbies).filter( x => hobby !== x);
	}
	getData() {
		console.log(`Name : ${this.name}`);
		console.log(`Age : ${this.age}`);
		console.log(`Date-of-Birth : ${this.dob}`);
		console.log(`Gender : ${this.gender}`);
		console.log(`Student ID : ${this.sid}`);
		console.log(`Hobbies : ${this.hobbies.join(',')}`);
	};






}



//  benar
let a = new Student('Joni',19,'11-07-1993','male','st01');
a.getData();
/*
	Name : Joni
	Age : 19
	Date-of-Birth : 11-07-1993
	Gender : male
	Student ID : st01
	Hobbies :
*/
a.addHobby('sleeping');
a.addHobby('knitting');
a.addHobby('watching');
a.getData();
/*
	Name : Joni
	Age : 19
	Date-of-Birth : 11-07-1993
	Gender : male
	Student ID : st01
	Hobbies : sleeping,knitting,watching

*/
a.removeHobby('singing');
a.removeHobby('knitting');
a.getData();
/*
	Name : Joni
	Age : 19
	Date-of-Birth : 11-07-1993
	Gender : male
	Student ID : st01
	Hobbies : sleeping,watching
*/


//  salah
var b = new Student('s4l4h', 5, '','waria','st12');
/*
	Name harus berupa huruf
	Age minimum adalah 6 tahun
	DOB harus diisi
	Gender harus berupa male/female
*/
b.getData();
/*
	Name : null
	Age : null
	Date-of-Birth : null
	Gender : null
	Student ID : st12
	Hobbies : 
*/
