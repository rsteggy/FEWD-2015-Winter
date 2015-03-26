$(document).ready(function() {
	$(".list").on("click", onClick)
});

function onClick(event){
	var $target = $(event.target);
		$sib = $target.siblings(); 

	$sibs.css({
		backgroundColor: ""
	});

	$target.css ({
		backgroundColor: "yellow"
	});
}