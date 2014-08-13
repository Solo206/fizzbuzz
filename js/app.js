$(document).ready(function(){
	// $('.querybox').click(function(event){
		// var keyvalue=13;
		// if (event.which==keyvalue){
			// event.preventDefault();
			// var stringmax=$('.querybox').val();
			var stringmax=prompt("Please enter a number from 1-100:");
			var rawNum=parseInt(stringmax);
			var max=checkNum(rawNum);

			confirm("So "+max+" is the number you wanted me to enter?")
			alert(""+max+".  Great, your fizzbuzz is:");
			// alert(max);
			loop(max);

		// }
	// });
		
		// var result="";
		// result+=""+max;
		// alert(result);

	// $(".response").text(result);

});
function checkNum(rawNum){
	//checks if number, if it is a number, returns number back number to max variable
	//if not number loops prompt asking for new number, then return that number as max
	while(isNaN(rawNum)){
		rawNum=prompt("This is not a number between 1-100 please reenter number:");
	}
	return rawNum;

}
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