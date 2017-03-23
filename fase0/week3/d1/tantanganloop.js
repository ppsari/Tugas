/*
Tugas function pertama adalah untuk menghitung deret perkalian sederhana, dimana parameternya menentukan nilai pertama dari deret. Nilai akhir dari deret adalah angka terkecil N, dimana N > 0. Function akan mengembalikan total deret tersebut.

*/
var loopKali = function (a) {
	var tot = 0;
	var out = [];
	while (a > 0) {
		tot = (tot == 0 ? a : a*tot);
		out.push(""+a);
		a-= 1;
	}
	out = out.join("*").toString();
	console.log("cara kerja fungsi pertama parameter = "+a+" keluaran = "+out+" = "+tot);
}

loopKali(5);

/*
Tugas function kedua hampir sama dengan function pertama. Yang membedakannya adalah parameter kedua menentukan beda antar angka dalam deret.
cara kerja fungsi kedua parameter1 = 12, parameter2 = 5 keluaran = 12 * 7 * 2 = 168
*/
var loopDeret = function(a,b) {
	var tot = a;
	var out = [];
	while (a > 0) {
		var s = a - b;
		if(s > 0) tot = tot * (s);
		//console.log("tot: "+tot+".. s: "+s+", tot*s= "+(tot*s));
		a-= b;
		//console.log("a : "+a);
	}
	out = out.join("*");
	console.log("cara kerja fungsi kedua parameter1 = "+a+", parameter 2 = "+b+" keluaran = "+out+" = "+tot);
}