let txt1;
		let txt2;
		let txt3;
		let txt4;
		let txt5;
		let txt6;
		let txt7;
		let txt8;
		let txt9;
		let txt10;
		let txt11;
		let txt12;
		let arti = [];

		const frmPsiko = document.getElementById('frmPsiko');
		const divArti = document.getElementById('divArti');
		const validation = () => {
			txt1 = document.getElementById('txt1').value;
			txt2 = document.getElementById('txt2').value;
			txt3 = document.getElementById('txt3').value;
			txt4 = document.getElementById('txt4').value;
			txt5 = document.getElementById('txt5').value;
			txt6 = document.getElementById('txt6').value;
			txt7 = document.getElementById('txt7').value;
			txt8 = document.getElementById('txt8').value;
			txt9 = document.getElementById('txt9').value;
			txt10 = document.getElementById('txt10').value;
			txt11 = document.getElementById('txt11').value;

			if (txt1 !== '' && txt2 !== '' && txt3 !== '' && txt4 !== '' && txt5 !== '' && txt6 !== '' && txt7 !== '' && txt8 !== '' && txt9 !== '' && txt10 !== '' && txt11 !== '') {
				arti.push('Anda harus memberitahu <b>'+txt7+'</b> tentang tes ini');
				arti.push('<b>'+txt3+'</b> adalah orang yang kamu cintai');
				arti.push('<b>'+txt7+'</b> adalah orang yang kamu suka, tetapi bertepuk sebelah tangan');
				arti.push('<b>'+txt4+'</b> adalah orang yang anda rasa paling penting bagi anda.');
				arti.push('<b>'+txt5+'</b> adalah orang yang paling mengerti tentang anda.');
				arti.push('<b>'+txt6+'</b> adalah orang yang membawa keberuntungan pada anda');
				arti.push('<b>'+txt8+'</b> adalah lagu untuk <b>'+txt3+'</b>');
				arti.push('<b>'+txt9+'</b> adalah lagu untuk <b>'+txt7+'</b>');
				arti.push('<b>'+txt10+'</b> adalah lagu yang melukiskan apa yang ada di hati anda');
				arti.push('<b>'+txt11+'</b> adalah lagu yang melukiskan hidup anda');

				console.log('<h2>Jawaban</h2>'+arti.join('<br/>'));

				frmPsiko.style.display = 'none';
				divArti.innerHTML = '<h2>Jawaban</h2>'+arti.join('<br/><br/>');
				divArti.style.display = 'block';

			} else {
				alert('Semua field harus diisi');
			}
		};

		divArti.style.display = 'none';

		frmPsiko.addEventListener('submit', (e) => {
			e.preventDefault();
			validation();
		});
		