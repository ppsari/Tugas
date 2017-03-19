function dataHandling(arg){
	for(var i=0;i<arg.length;i++){
		console.log("Nomor ID: "+arg[i][0]);
		console.log("Nama Lengkap: "+arg[i][1]);
		console.log("TTL: "+arg[i][2]+" "+arg[i][3]);
		console.log("Hobi: "+arg[i][4]);
	}
}


var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ];

dataHandling(input);