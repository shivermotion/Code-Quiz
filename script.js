//game-question and matching answers
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
	let answerBank = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
	///
	document.querySelector("section").textContent = questionBank[0];
	console.log(questionBank[0]);
	///
	document.querySelector("#choice1").textContent = answerBank[1];
	document.querySelector("#choice2").textContent = answerBank[2];
	document.querySelector("#choice3").textContent = answerBank[5];
	document.querySelector("#choice4").textContent = answerBank[6];
	console.log(answerBank[6]);
};

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

// let answerBank []
// let question = questionBank[(Math.random() * questionBank.length) | 0];
// console.log(question);

//buttons

// timer();
