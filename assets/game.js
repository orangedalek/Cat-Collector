// define variables
// computerGuess -randomly generated number between 25 and 100
var computerGuess = 0;
// nisu - randomly generated number between 1 and 20
var nisuScore = 7;
// olive - randomly generated number between 1 and 20 start with fixed values until game is working, then switch to random
var oliveScore = 1;
// bikini - randomly generated number between 1 and 20
var bikiniScore = 9;
// zailie - randomly generated number between 1 and 20
var zailieScore = 15;
// wins
var wins = 0;
// losses
var losses = 0;
// userscore - sum of clicks on cat buttons
var score = 0;


// start game on click
$('#startBtn').click(function() {
// use math random to generate computerGuess - This is working! now connect it to html!-done.
	var computerGuess = Math.floor(Math.random()*100 + 25);
	console.log(computerGuess);
	$('#compGuess').html(computerGuess);
		});
// generate number for nisu
// generate number for olive
// generate number for bikini
// generate number for zailie
// start with fixed values until game is working, then switch to random
// clicking on cats adds to userScore
$('#nisu').click(function() {
	score = score + nisuScore;
	console.log(score);
	$('#userScore').html(score);

	});
$('#olive').click(function(){
	score = score + oliveScore;
	console.log(score);
	$('#userScore').html(score);
})
$('#bikini').click(function(){
	score = score + bikiniScore;
	console.log(score);
	$('#userScore').html(score);
})
$('#zailie').click(function(){
	score = score + zailieScore;
	console.log(score);
	$('#userScore').html(score);
})
// use a while loop to keep game runnig as long as userScore is less than computerGuess
	while(userScore < computerGuess){
// when userScore = computerGuess, game ends in a win. win counter + 1
		if(userScore = computerGuess){
			wins ++;
			break;
		else if(userScore > computerGuess){
			losses ++;
			break;
		}
		}
}


// if userScore goes over computerGuess, game ends in a loss. loss counter +1
// game starts over
