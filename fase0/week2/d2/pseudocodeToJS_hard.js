/*
TENTUKAN `total` sama dengan 0
FOR setiap pertambahan 1 `index` dari 1 sampai dengan 100:
    IF `index` adalah ganjil:
        TAMBAHKAN `total` dengan `index`
    ELSE IF `index` adalah genap:
        KURANGI `total` dengan `index`
    ENDIF
ENDFOR
TULISKAN "TOTAL: `total`"
*/
var total = 0;
for(var index=1; index<=100; index++)
	if(index%2 != 0) total+= index;
	else if(index%2 === 0) total-= index;
console.log("TOTAL: '"+total+"'");
/*
SIMPAN karakter kosong pada `pagar`
FOR setiap pertambahan 1 pada `index1` dari 1 sampai 10:
    FOR setiap pertambahan 1 pada `index2` dari 0 sampai 10:
        TAMBAHKAN `pagar` dengan karakter "#"
    ENDFOR
    TULISKAN `pagar`
    SIMPAN karakter kosong pada `pagar`
ENDFOR
*/
var pagar="";
for(var index1=1;index1<=10;index1++){
	for(var index2=0;index2<=10; index2++) pagar+="#";
	console.log("'"+pagar+"'");
	pagar="";
}
/*
SIMPAN karakter kosong pada `bintang`
FOR setiap pertambahan 1 pada `index1` dari 1 sampai 10:
    FOR setiap pertambahan 1 pada `index2` dari 0 sampai `index1`:
        TAMBAHKAN `bintang` dengan karakter "*"
    ENDFOR
    TULISKAN `bintang`
    SIMPAN karakter kosong pada `bintang`
ENDFOR
*/
var bintang="";
for(var index1=1;index1<=10;index1++){
	for(var index2=0; index2<=index1;index2++)
		bintang+="*";
	console.log("'"+bintang+"'");
	bintang="";
}
	