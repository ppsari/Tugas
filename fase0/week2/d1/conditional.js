var nama 	= prompt("Masukan Nama").trim();

if(nama == "")
	alert("Nama tidak boleh kosong");
else {
	var peran 	= prompt("Pilih peranmu untuk memulai game[Ksatria, Tabib, Penyihir]").trim().toLowerCase();
	
	if(peran == "")
		alert("Peran tidak boleh kosong");
	else if(peran != "ksatria" && peran != "tabib" && peran != "penyihir")
		alert("Peran salah");
	else{
		var msg = "Selamat datang di Dunia Proxytia, "+nama+"\n";

		if(peran == "ksatria") msg += "Halo Ksatria "+nama+", kamu dapat menyerang dengan senjatamu!";
		else if(peran == "tabib") msg += "Halo Tabib "+nama+", kamu akan membantu temanmu yang terluka.";
		else 
			msg += "Halo Penyihir "+nama+", ciptakan keajaiban yang membantu kemenanganmu!";

		alert(msg);
	}
}
