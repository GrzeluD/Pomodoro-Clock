$(document).ready(function() {
	let countWork = parseInt($("#workingTime").html());
	let countBreak = parseInt($("#breakTime").html());
	
	$("#timeCounter").html(countWork + ":00");
	
	
	
	
	$("#plus1").click(function() {
		if (countWork < 60) {
			countWork += 1;
			$("#workingTime").html(countWork); 
		 }
	});
	
	$("#minus1").click(function() {
		if(countWork > 1) {
			countWork -= 1;
			$("#workingTime").html(countWork);
		}
	});
	
	$("#plus2").click(function() {
		if (countBreak < 60) {
			countBreak += 1;
			$("#breakTime").html(countBreak); 
		 }
	});
	
	$("#minus2").click(function() {
		if(countBreak > 1) {
			countBreak -= 1;
			$("#breakTime").html(countBreak);
		}
	});
	
});