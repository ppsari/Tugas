var loopKali = function (a) {
	console.log(a);
	if(a > 0)
		return a * loopKali(a-1);
	else return 1;
};
loopKali(5);

var loopDeret = function (a, b) {
	var s = a - b;
	if(a > 0) 
		if(s > 0) return a * loopDeret(s,b);
	else return a;
};

loopDeret(12,5);



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
