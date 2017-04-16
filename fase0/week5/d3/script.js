"use strict";

const validateString = str => (str.search(/[^a-z]/gi) !== -1 ? false : true);

const validateAlphaNum =  str => (
	(str.search(/\d/) === -1 || 
		str.search(/[a-z]/gi) === -1 || 
		str.replace(/[a-z]|\d/gi,'').length > 0 
	)? false : true
);

const regis = document.getElementById('frmRegis');

regis.addEventListener('submit',
	function (e) {
		let username;
		let pass;
		let cpass;
		let email;
		let cemail;
		let error = '';

		username = document.getElementById('txtUser').value;
		pass = document.getElementById('txtPass').value;
		cpass = document.getElementById('txtCPass').value;
		email = document.getElementById('txtEmail').value;
		cemail = document.getElementById('txtCEmail').value;

		if (username === '' || pass === '' || cpass === '' || email === '' || cemail === '') error = 'Semua elemen tidak boleh kosong';
		else if (username.length < 6) error = 'Jumlah karakter Username minimal 6';
		else if (validateString(username) === false) error = "Username harus huruf";
		else if (validateAlphaNum(pass) === false) error = "Password harus alphanumeric";
		else if (pass !== cpass) error = 'Password dan Confirm Password harus sama';
		else if (email!== cemail) error = 'Email dan Confirm Email harus sama'; 

		if (error !== '') { 
			alert(error);
			e.preventDefault();
			return false;
		}

	}
);