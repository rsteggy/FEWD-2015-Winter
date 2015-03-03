//var a = 1;
//	b = 2; 

//function addNumber(a, b) {
//	return a + b
//}

//function squareNumber(a) {
//	return a + a
//}

//console.log(addNumber(2, 2)); 

var $output, 
	$input, 
	$button; 

$(document).ready(function() {
	$input 	= 	$("#input");
	$output = 	$("#output");
	$button = 	$("#button");

	//$button.click();
	$button.on("click", onButtonClick); 
});

function onButtonClick(e){
	var value 	= 	$input.val(); 
	
	try {
		value = eval(value);
	} catch(exception) {
		value = 0; 
	}

	$output.val(value); 

}
