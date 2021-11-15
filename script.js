//global variables
let choice1 = document.getElementById("choice1").textContent;
let choice2 = document.getElementById("choice2").textContent;
let choice3 = document.getElementById("choice3").textContent;
let choice4 = document.getElementById("choice4").textContent;
let sectionText = document.getElementsByTagName("section").textContent;
let timerDisplay = document.getElementById("timer").textContent;
console.log(choice1);
console.log(timerDisplay);

//descending timer
let timer = function () {
	let sec = 10;
	setInterval(function () {
		document.getElementById("timer").textContent =
			sec + " sec remaining";
		sec--;
		console.log(sec);
		if (sec == 00) {
			clearInterval(timer);
			sectionText = "game over";
		}
	}, 1000);
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
