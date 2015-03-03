var $display;
var $button

$(document).ready(function() {

	$display = $(".display");
	$button = $(".button"); 

	$(".digit, .operator").on("click", onButtonPress);
	$(".equals").on("click", onCaculate)
	$(".clear").on("click", onClear)

});

function onButtonPress(e) {
	var $button =	$(e.currentTarget), 
		action 	=	$button.data("action"), 
		value	=	$display.val(); 

	if (value === "0") {
		value = action; 
	} else {
		value += action; 
	}


	updateDisplay(value);

}

function onCaculate(e){
	var equation 	= 	$display.val(),
		value;
	
	try {
		value = eval(equation);
	} catch(e) {
		value = "error"; 
	}

	updateDisplay(value);

}

function onClear(e) {
	updateDisplay(0);
}

function updateDisplay(value) {
	$display.val(value); 
}



