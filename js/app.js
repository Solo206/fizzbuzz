$(document).ready(function(){
	$('.querybox').keypress(function(event){
		var keyvalue=13;
		if (event.which==keyvalue){
			event.preventDefault();
			alert("entered");
			var stringmax=$('.querybox').val();
			// alert(stringmax);
			var max=parseInt(stringmax);
			// alert(max);
			alert(max);
			loop(max);

		}
	});
		
		// var result="";
		// result+=""+max;
		// alert(result);

	// $(".response").text(result);

});
function loop (max){
		var result="";
		for(var count=1;count<=max;count++){
		if (count%3==0 && count%5==0){
			result+="fizz buzz";
		}
		else if (count%3==0){
			result+="fizz";
		}
		else if (count%5==0){
			result+="buzz";
		}
		else {
			result+=count;
		}
		result+=","	
		$("body").append("<div class='numbers'>"+result+"</div>");
		result="";
		} 
}