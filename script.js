//global variables
let choice1 = document.getElementById("choice1").textContent;
let choice2 = document.getElementById("choice2").textContent;
let choice3 = document.getElementById("choice3").textContent;
let choice4 = document.getElementById("choice4").textContent;
let sectionText = document.getElementsByTagName("section").textContent;
let timerDisplay = document.getElementById("timer").textContent;
console.log(choice1);
console.log(timerDisplay);

//site on load

//descending timer
let timer = function () {
	let sec = 10;
	setInterval(function () {
		document.getElementById("timer").textContent =
			sec + " sec remaining";
		sec--;
		if (sec == 0) {
			sectionText = "GAME OVER";
		}
	}, 1000);
	console.log(sec);
};
//scoring

//scoring and highscore bank
// let newScore = sec + correct;
// let highScoreBank = [];
// if (newScore > oldScore) {
// 	newScore.unshift(highScoreBank);
// }
//questionsboard

//button choices
timer();
