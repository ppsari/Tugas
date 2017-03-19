

function dataHandling2(arg){
	var months=[];
	months["01"] = "Januari";
	months["02"] = "Februari";
	months["03"] = "Maret";
	months["04"] = "April";
	months["05"] = "Mei";
	months["06"] = "Juni";
	months["07"] = "Juli";
	months["08"] = "Agustus";
	months["09"] = "November";
	months["10"] = "Oktober";
	months["11"] = "November";
	months["12"] = "Desember";

	arg.splice(4,1,"Pria","SMA Internasional Metro");
	console.log(arg);
	var dmy = arg[3].split("/");
	console.log(months[dmy[1].toString()] );
	var join_dmY = dmy.join("-");
	console.log(dmy.sort(function(a,b){return parseInt(a)<parseInt(b);}));
	console.log(join_dmY);
	console.log(arg[1].substr(0,15));



	
}


var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];


dataHandling2(input);


/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 1989-21-05
 * Roman Alamsyah
 */