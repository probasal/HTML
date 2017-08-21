$(document).ready(function(){

	var generateBtn = $('#generate');

	generateBtn.click(function(event) {  
		var myName = $('#getname').val();
		$(".cname h1").html(myName);
	});

	
});