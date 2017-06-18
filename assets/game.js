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
var userScore = 0;


// start game on click
$("#startBtn").on("click", function() {
// use math random to generate computerGuess - This is working!
	var computerGuess = Math.floor(Math.random()*100 + 25);
	console.log(computerGuess);
		});
// generate number for nisu
// generate number for olive
// generate number for bikini
// generate number for zailie
// start with fixed values until game is working, then switch to random
// use a while loop to keep game runnig as long as userScore is less than computerGuess
	while(userScore < computerGuess){
		$('#nisu').on('click', function() {
			userscore = userScore + nisu;
			console.log(userScore);
	})
}


// clicking on catts adds to userScore
// when userScore = computerGuess, game ends in a win. win counter + 1
// if userScore goes over computerGuess, game ends in a loss. loss counter +1
// game starts over
