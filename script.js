//game-question and matching answers
let game = function () {
	// score
	totalScore = 0;

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

	// question board
	let questionBoard = document.querySelector("section");
	console.log(questionBank[0]);
	// buttons
	choice1 = document.querySelector("#choice1");
	choice2 = document.querySelector("#choice2");
	choice3 = document.querySelector("#choice3");
	choice4 = document.querySelector("#choice4");

	// question 1
	questionBoard.textContent = questionBank[0];
	console.log(questionBoard);
	//choices
	choice1.textContent = answerBank[0];
	choice2.textContent = answerBank[1];
	choice3.textContent = answerBank[5];
	// correct answer
	choice4.textContent = answerBank[4];

	// if user picks correct answer
	choice4.onclick = function () {
		totalScore++;
		console.log(totalScore);
		// question 2
		questionBoard.textContent = questionBank[1];
		// choices
		choice1.textContent = answerBank[13];
		choice2.textContent = answerBank[4];
		choice3.textContent = answerBank[8];
		choice4.textContent = answerBank[1];

		choice1.onclick = function () {
			totalScore++;
			console.log(totalScore);
			// question 3
			questionBoard.textContent = questionBank[2];
			// choices
			choice1.textContent = answerBank[5];
			choice2.textContent = answerBank[8];
			choice3.textContent = answerBank[9];
			choice4.textContent = answerBank[0];

			//if user picks correct answer
			choice3.onclick = function () {
				totalScore++;
				console.log(totalScore);
				// question 4
				questionBoard.textContent = questionBank[3];
				// choices
				choice1.textContent = answerBank[0];
				choice2.textContent = answerBank[2];
				choice3.textContent = answerBank[3];
				choice4.textContent = answerBank[9];
				//if user picks correct answer
				choice4.onclick = function () {
					totalScore++;
					console.log(totalScore);
					// question 5
					questionBoard.textContent =
						questionBank[4];
					// choices
					choice1.textContent = answerBank[0];
					choice2.textContent = answerBank[2];
					choice3.textContent = answerBank[3];
					choice4.textContent = answerBank[9];

					choice4.onclick = function () {
						totalScore++;
						console.log(totalScore);
						// question 6
						questionBoard.textContent =
							questionBank[5];
						// choices
						choice1.textContent =
							answerBank[0];
						choice2.textContent =
							answerBank[2];
						choice3.textContent =
							answerBank[3];
						choice4.textContent =
							answerBank[9];
					};
				};
			};
		};
	};
};

// descending timer
let timer = function () {
	let sec = 30;
	let interval = setInterval(function () {
		document.getElementById("timer").textContent =
			sec + " sec remaining";
		sec--;
		console.log(sec);
		if (sec < 00) {
			clearInterval(interval);
			document.querySelector("section").textContent =
				"game over! your score is " + totalScore;
		}
	}, 1000);
};
