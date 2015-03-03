// script.js

// TIMER
var seconds = 0;
var minutes = 0;
var off = false;
$('p#timer').text(minutes + "min " + seconds + "sec"); // Initializes timer at "0min 0sec"
$('form input#stressRange').attr('disabled','disabled'); // Sets range input to disabled until timer starts
	// Start Timer function
function startTimer(code){
	$('button#start').attr('disabled','disabled');
	$('form input#stressRange').removeAttr('disabled');
	var timer = setInterval(function(){
		if(seconds < 60){
			seconds += 1;
			$('p#timer').text(minutes + "min " + seconds + "sec");
		}
		else{
			minutes += 1;
			seconds = 0;
			$('p#timer').text(minutes + "min " + seconds + "sec");
		}
		return seconds;
	},1000);
	$('input#stressRange').focus();
	if(code == 0){
		$('p#timer').removeAttr('id').attr('id','stop').text(minutes + "min " + seconds + "sec" + " TRIAL STOPPED").css('color','red');
		$('form input#stressRange').attr('disabled','disabled');
		$('button:not(#reset)').attr('disabled','disabled');
		off = true;
	}
	return off;
	console.log(off);
}
	// RANGE LOG
var c = 0; // Change count
console.log(c + " => Starting count");
console.log(0 + " => Initial stress level");
var stress = $('input#stressRange').val(); // Returns value of stress range
var logArray_stress = [];

function logChange(){
	c += 1;
	stress = $('input#stressRange').val(); 
	logArray_stress[(c - 1)] = stress;
	console.log("%c + + + + + + + + + + + + + + + + + + + + " , "background-color: #b5b5b5; color: white; border-radius: 5px;");
	console.log("%cChange number => " + c , "color: red;");
	console.log("%c" + stress + " => Stress level" , "color:red;");
	console.log("%cChange at: " + minutes + "min " + seconds + "sec","color: green; letter-spacing: .15em;");
	$('textarea#log').append("Input #: " + c + ", Stress Level: " + stress + ", at: " + minutes + "min " + seconds + "sec.\n");
	return c , stress;
}
	// LOGS FINAL STATS AFTER CONCLUSION
function checkOff(){
	if(off == true){
		$('textarea#log').append("\nTRIAL CONCLUDED AFTER " + c + " changes, with a Stress Level of " + stress + ", and with a total TIME of " + minutes + "min " + seconds + "sec.\n");
	}
	console.log("%c + + + + + + + + + + + + + + + + + + + + " , "background-color: #b5b5b5; color: white; border-radius: 5px;");
	console.log("%c TRIAL CONCLUDED", "color: red; size: 14px;");
	console.log("%c + + + + + + + + + + + + + + + + + + + + " , "background-color: #b5b5b5; color: white; border-radius: 5px;");
}
	// RESET FUNCTION
function reset() {
	var reload = confirm("If you continue, this form will be reloaded \nand all data will be deleted. \n\nPress OK to continue \nor\nPress CANCEL to stay on this page.");
	if(reload == true){location.reload();}
}