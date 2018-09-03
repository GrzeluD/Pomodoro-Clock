$(document).ready(function() {
	let countWork = parseInt($("#workingTime").html());
	let countBreak = parseInt($("#breakTime").html());
	let isPaused = true;
	let startBreak,
	    count;
	let settingTime = false;
	let runningTimer = false;
	let buttonUnbind = false;
	$("#work").show();
	$("#noWork").hide();
	
	$("#timeCounter").html(countWork + ":00");
	
	$("#start").on('click', function() {
		buttonUnbind = true;
		isPaused = false;
		if(settingTime === false) {
			countWork *= 60;
			countBreak *= 60;
		}
		
		settingTime = true;
		if(runningTimer === false) {
			count = setInterval(timer, 1000);
			runningTimer = true;
		}
		
		function timer() {
			if(countWork > 0) {
				convertSeassion();
				countWork -= 1;
			} 
			
			if (countWork === 0) {
				clearInterval(count);
				startBreak = setInterval(breakTimer, 1000);
			}
			
			function breakTimer() {
				countBreak -= 1;
				if(countBreak === 0) {
					clearInterval(startBreak);
				}
				convertBreak();
			}
		}
		
	});
	
	function convertBreak() {
		$("#work").hide();
		$("#noWork").show();
		if(countBreak % 60 >= 10) {
			$("#timeCounter").html(Math.floor(countBreak/60) + ":" + countBreak % 60);
		}
		else {
			$("#timeCounter").html(Math.floor(countBreak/60) + ":0" + countBreak % 60);
		}
	};
	
	function convertSeassion() {
		$("#work").show();
		$("#noWork").hide();
		if(countWork % 60 >= 10) {
			$("#timeCounter").html(Math.floor(countWork/60) + ":" + countWork % 60);
		}
		else {
			$("#timeCounter").html(Math.floor(countWork/60) + ":0" + countWork % 60);
		}
	}
	
	$("#pause").click(function() {
		isPaused = !isPaused;
		if(isPaused === true) {
			clearInterval(count);
			clearInterval(startBreak);
			runningTimer = false;
		} 
	});
	
	$("#reset").click(function() {
		countWork = 25;
		countBreak = 5;
		runningTimer = false;
		settingTime = false;
		buttonUnbind = false;
		clearInterval(count);
		clearInterval(startBreak);
		$("#timeCounter").html(countWork + ":00");
		
		$("#workingTime").html(25);
		$("#breakTime").html(5);
		$("#work").show();
		$("#noWork").hide();
		
	});
	
	$("#plus1").click(function() {
		
		if (countWork < 60 && buttonUnbind === false) {
			countWork += 1;
			$("#workingTime").html(countWork); 
		 }
	});
	
	$("#minus1").click(function() {
		if(countWork > 1 && buttonUnbind === false) {
			countWork -= 1;
			$("#workingTime").html(countWork);
		}
	});
	
	$("#plus2").click(function() {
		if (countBreak < 60 && buttonUnbind === false) {
			countBreak += 1;
			$("#breakTime").html(countBreak); 
	 	}
	});
	
	$("#minus2").click(function() {
		if(countBreak > 1 && buttonUnbind === false) {
			countBreak -= 1;
			$("#breakTime").html(countBreak);
		}
	});	
});
