// define variables
// computerGuess -randomly generated number between 25 and 100
// var computerGuess = 0;
// nisu - randomly generated number between 1 and 20
var nisuScore = Math.floor(Math.random()*15 + 1);
// olive - randomly generated number between 1 and 20 start with fixed values until game is working, then switch to random
var oliveScore = Math.floor(Math.random()*15 + 1);
// bikini - randomly generated number between 1 and 20
var bikiniScore = Math.floor(Math.random()*15 + 1);
// zailie - randomly generated number between 1 and 20
var zailieScore = Math.floor(Math.random()*15 + 1);
// wins
var wins = 0;
// losses
var losses = 0;
// userscore - sum of clicks on cat buttons
var score = 0;
var computerGuess = Math.floor(Math.random()*100 + 25);


// start game on click
$('#startBtn').click(function() {
// use a while loop to keep game runnig as long as userScore is less than computerGuess
// use math random to generate computerGuess - This is working! now connect it to html!-done.
	// var computerGuess = Math.floor(Math.random()*100 + 25);
	// console.log(computerGuess);
	$('#compGuess').html(computerGuess);
// generate number for nisu
// generate number for olive
// generate number for bikini
// generate number for zailie
// start with fixed values until game is working (fixed values work), then switch to random
// clicking on cats adds to userScore
$('#nisu').click(function() {
	score = score += nisuScore;
	// console.log(score);
	$('#userScore').html(score);
	checkWins();

})
$('#olive').click(function(){
	score = score += oliveScore;
	// console.log(score);
	$('#userScore').html(score);
	checkWins();
})
$('#bikini').click(function(){
	score = score += bikiniScore;
	// console.log(score);
	$('#userScore').html(score);
	checkWins();
})
$('#zailie').click(function(){
	score = score += zailieScore;
	// console.log(score);
	$('#userScore').html(score);
	checkWins();
})


// if userScore goes over computerGuess, game ends in a loss. loss counter +1
// game starts over
	// while(score <= computerGuess){
		// debugger;
// when userScore = computerGuess, game ends in a win. win counter + 1
	// if(score === computerGuess){
	// 	wins ++;
	// 	$('#wins').html("Wins: " + wins);
	// 	alert("You Win!");
	// 	// reset();
	// }
	// else if(score >= computerGuess){
	// 	losses ++;
	// 	$('#losses').html("Losses: " + losses);
	// 	alert("You lose!");
	// }

});

function checkWins(){
		if(score === computerGuess){
		wins ++;
		$('#wins').html("Wins: " + wins);
		alert("You Win!");
		reset();

	}
	else if(score >= computerGuess){
		losses ++;
		$('#losses').html("Losses: " + losses);
		alert("You lose!");
		reset();
	}
}

function reset(){
	computerGuess = Math.floor(Math.random()*100 + 25);
	var nisuScore = Math.floor(Math.random()*15 + 1);
// olive - randomly generated number between 1 and 20 start with fixed values until game is working, then switch to random
	var oliveScore = Math.floor(Math.random()*15 + 1);
// bikini - randomly generated number between 1 and 20
	var bikiniScore = Math.floor(Math.random()*15 + 1);
// zailie - randomly generated number between 1 and 20
	var zailieScore = Math.floor(Math.random()*15 + 1);
	score = 0;
	$('#userScore').html(score);
	$('#compGuess').html(computerGuess);

}