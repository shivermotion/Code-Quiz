//time and score on start
let sec = 31;
let totalScore = 0;
let currentQuestion = 0;

//highscorebank
let highscoreBank = [];

//game-question and matching answers
let questionBank = [
	"what does 2 + 2 = ?",
	"what does 7 + 6 = ?",
	"what does 2 + 7 = ?",
	"what does 0 + 9 = ?",
	"what does 2 + 1 = ?",
	"congrats! your score is 5",
];
let answerBank = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// question board
let Board = document.querySelector("section");
console.log(questionBank[currentQuestion]);

// buttons
let choice1 = document.querySelector("#choice1");
let choice2 = document.querySelector("#choice2");
let choice3 = document.querySelector("#choice3");
let choice4 = document.querySelector("#choice4");

//game
let game = function () {
	// question 1
	Board.textContent = questionBank[currentQuestion]; //"what does 2 + 2 = ?"

	//choices
	choice1.textContent = answerBank[0];
	choice2.textContent = answerBank[1];
	choice3.textContent = answerBank[5];
	// correct answer
	choice4.textContent = answerBank[4];

	// if user picks correct answer
	choice4.onclick = function () {
		totalScore++;
		currentQuestion++;
		console.log(totalScore);
		// question 2
		Board.textContent = questionBank[currentQuestion]; //"what does 7 + 6 = ?"
		// choices
		choice1.textContent = answerBank[13];
		choice2.textContent = answerBank[4];
		choice3.textContent = answerBank[8];
		choice4.textContent = answerBank[1];

		choice1.onclick = function () {
			totalScore++;
			currentQuestion++;
			console.log(totalScore);
			// question 3
			Board.textContent = questionBank[currentQuestion]; // "what does 2 + 7 = ?"
			// choices
			choice1.textContent = answerBank[5];
			choice2.textContent = answerBank[8];
			choice3.textContent = answerBank[9];
			choice4.textContent = answerBank[0];

			//if user picks correct answer
			choice3.onclick = function () {
				totalScore++;
				currentQuestion++;
				console.log(totalScore);
				// question 4
				Board.textContent =
					questionBank[currentQuestion]; //"what does 0 + 9 = ?"
				// choices
				choice1.textContent = answerBank[0];
				choice2.textContent = answerBank[9];
				choice3.textContent = answerBank[3];
				choice4.textContent = answerBank[2];
				//if user picks correct answer
				choice2.onclick = function () {
					totalScore++;
					currentQuestion++;
					console.log(totalScore);
					// question 5
					Board.textContent =
						questionBank[currentQuestion]; // "what does 2 + 1 = ?"
					// choices
					choice1.textContent = answerBank[0];
					choice2.textContent = answerBank[2];
					choice3.textContent = answerBank[3];
					choice4.textContent = answerBank[9];
					//win screen
					choice4.onclick = function () {
						document.querySelector(
							"section"
						).textContent =
							questionBank[
								currentQuestion
							];
					};
				};
			};
		};
	};
};

// descending timer
let timer = function () {
	let interval = setInterval(function () {
		document.getElementById("timer").textContent =
			sec + " sec remaining";
		sec--;
		console.log(sec);
		if (sec < 00) {
			clearInterval(interval);
			//game over screen
			document.querySelector("section").textContent =
				"game over! your score is " + totalScore;
			revealForm();
			highscoreBank.unshift(totalScore);
			console.log(highscoreBank);
		}
	}, 1000);
};

//input initials into score bank
function revealForm() {
	var inputForm = document.getElementById("input");
	if (inputForm.style.display === "none") {
		inputForm.style.display = "block";
	} else {
		inputForm.style.display = "none";
	}
}

let minusTime = document.body;

minusTime.onclick = function () {
	sec--;
	console.log(sec);
};
