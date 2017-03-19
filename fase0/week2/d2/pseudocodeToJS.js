/*
SIMPAN 'nama'
SIMPAN 'angka pembilang'
SIMPAN 'angka penyebut'
HITUNG 'hasil bagi' dari 'angka pembilang' dibagi 'angka penyebut'
TULISKAN "Halo 'nama', 'angka pembilang' dibagi 'angka penyebut' adalah sama dengan 'hasil bagi'
*/
var nama 			= "PPSari";
var angkapembilang 	= "9";
var angkapenyebut 	= "11";
var hasilbagi = angkapembilang/angkapenyebut;
console.log("Halo '"+nama+"', '"+angkapembilang+"' dibagi '"+angkapenyebut+"' sama dengan '"+hasilbagi+"'");

/*
SIMPAN 'alas' dari segitiga
SIMPAN 'tinggi' dari segitiga
HITUNG 'luas segitiga' dari 'alas' dikali 'tinggi' dibagi 2
TULISKAN "Luas Segitiga: 'luas segitiga'"
*/
var alas 	= 12;
var tinggi 	= 9;
var luassegitiga = alas*tinggi/2;
console.log("Luas segitiga: "+luassegitiga);
/*
MASUKKAN sebuah tahun pada `tahun`
IF `tahun` habis dibagi 4 THEN:
    IF `tahun` tidak habis dibagi 100 THEN:
        TULISKAN "`tahun` adalah tahun kabisat"
    ELSE:
        IF `tahun` habis dibagi 400 THEN:
            TULISKAN "`tahun` adalah tahun kabisat"
        ELSE:
            TULISKAN "`tahun` adalah bukan tahun kabisat"
        ENDIF
    ENDIF
ELSE:
    TULISKAN "`tahun` adalah bukan tahun kabisat"
ENDIF
*/

var tahun = prompt("Masukan sebuah tahun pada: ");
if(tahun%4 == 0){
	if(tahun%100 != 0) 
		console.log("'"+tahun+"' adalah tahun kabisat");
	else 
		if(tahun%400 == 0) 
			console.log("'"+tahun+"' adalah tahun kabisat");
		else 
			console.log("'"+tahun+"' adalah bukan tahun kabisat");
}
else 
	console.log("'"+tahun+"' adalah bukan tahun kabisat");