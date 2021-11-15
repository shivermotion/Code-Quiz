//global variables

//descending timer
let timer = function () {
	let sec = 10;

	let interval = setInterval(function () {
		document.getElementById("timer").textContent =
			sec + " sec remaining";
		sec--;
		console.log(sec);
		if (sec < 00) {
			clearInterval(interval);
			document.querySelector("section").textContent =
				"game over! your score is " + sec;
		}
	}, 1000);
};

//scoring
// let newScore = sec;

//scoring and highscore bank
// let highScoreBank = [];
// if (newScore > oldScore) {
// 	newScore.unshift(highScoreBank);
// }

//questionsboard
let game = function () {
	let questionBank = [
		"what does 2 + 2 = ?",
		"what does 7 + 6 = ?",
		"what does 2 + 7 = ?",
		"what does 0 + 9 = ?",
		"what does 2 + 1 = ?",
		"what does 4 + 4 = ?",
		"what does 6 + 5 = ?",
		"what does 8 + 2 = ?",
		"what does 1 + 5 = ?",
		"what does 1 + 1 = ?",
	];
	document.querySelector("section").textContent = questionBank[0];
	console.log(questionBank[0]);
};

// let answerBank []
// let question = questionBank[(Math.random() * questionBank.length) | 0];
// console.log(question);

//buttons

// timer();
