
$(document).ready(function(){

	//options for batches
	var batches = [];
	
	for (let i = 14; i <= 23; i++) {
		if (i == 14) {
			batches.push("FA" + i);
		} else if (i == 23) {
			batches.push("SP" + i);
		} else {
			batches.push("FA" + i);
			batches.push("SP" + i);
			batches.push("SU" + i);
		}
	}
	batches.sort();

	$.each(batches, function(count, batch){
		$("#batches").append($("<option>", {
			text: batch
		}));
	});

	$("#batches")[0].selectedIndex = 0;

	//programs
	var programs = ["BBAH", "BCA", "BCSE", "BSAF", "BSAM", "BSBM", "BSCP", "BSCS", "BSEE", "BSEN", "BSET", "BSMC", "BSSE", "BSTH", "MBAB", "MBAC",
	"MBAN", "MBAR", "MSAI", "MSAL", "MSCA", "MSCS", "MSEE", "MSEM", "MSFN", "MSIS", "MSLE", "MSMD", "MSMF", "MSMN", "MSMS", "MSPY", "MSSE", "PDCP",
	"PHCS", "PHEN", "PHMS", "PHPY", "PLOD"];

	$.each(programs, function(i, program){
		$("#programs").append($("<option>", {
			text: program
		}));
	});

	//reg no max length
	$("#regno").on("input", function(){
		if ($(this).val().length >= 4) {
			$(this).val($(this).val().slice(0, 3));
		}
	});

	document.querySelector("#regno").addEventListener("keypress", function (evt) {
    		if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57)
    		{
			evt.preventDefault();
    		}
	});

	//show full reg no on entering
	$("#regno").on("input", function(){
		$("#fullregno").text(`FURC/${$("#batches").val()}-${$("#programs").val()}-${$("#regno").val()}/FUI`);
	});

	$("#batches").on("input", function(){
		$("#fullregno").text(`FURC/${$("#batches").val()}-${$("#programs").val()}-${$("#regno").val()}/FUI`);
	});
	
	$("#programs").on("input", function(){
		$("#fullregno").text(`FURC/${$("#batches").val()}-${$("#programs").val()}-${$("#regno").val()}/FUI`);
	});

});









