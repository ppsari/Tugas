var Object1 = {
	hari: 'Senin',
	kehadiran: 'Masuk',
	alasan: '',
}

var Object2 = {
	hari: 'Rabu',
	kehadiran: 'Masuk',
	alasan: '',
}

var Object3 = {
	hari: 'Jumat',
	kehadiran: 'Absen',
	alasan: 'Dinas Luar',
}


var arrObject1= [];
arrObject1.push(Object1,Object2,Object3);
var harikerja = arrObject1.length;
var harimasuk = 0;
var haritidak = 0;
var info = '';
for (var i = 0; i < harikerja; i++) {
	console.log('Hari: '+arrObject1[i].hari);
	console.log('Kehadiran: '+arrObject1[i].kehadiran);
	if (arrObject1[i].alasan != '') {
		console.log('Alasan: '+arrObject1[i].alasan);
		haritidak++;
	} else  harimasuk++;
	
}
var info = 'Total hari kerja minggu ini: '+harikerja+' hari \n'+
			'Total Masuk: '+harimasuk+' hari \n'+
			'Total tidak Masuk: '+haritidak+' hari';

console.log(info);