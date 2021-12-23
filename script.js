let game = () => {
	//reveal button choices on start by removing style property "hidden" in element
	choiceEl.style = "";
	let currentScore = 0;
	//question board and multiple choice buttons
	let board = document.querySelector("board");
	let choiceEl = document.getElementById("choices");
	let btn1 = document.getElementById("1");
	let btn2 = document.getElementById("2");
	let btn3 = document.getElementById("3");
	let btn4 = document.getElementById("4");
	//timer html and timer interval
	let secondsLeft = 10;
	let timeEl = document.querySelector(".timeEl");

	//timer function
	let setTime = () => {
		// Sets interval in variable
		let timerInterval = setInterval(function () {
			secondsLeft--;
			timeEl.textContent =
				secondsLeft + " seconds left till gameover!";
			console.log(secondsLeft);

			if (secondsLeft === 0) {
				// Stops execution of action at set interval
				clearInterval(timerInterval);
				// Calls function to create and append image
				console.log("gameover");
			}
		}, 1000);
	};

	//add point to score when correct
	let correct = () => {
		currentScore++;
		console.log("currentscore: " + currentScore);
	};

	//game board questions,choices,answers
	question1 = () => {
		board.textContent = "what is javascript?";
		btn1.textContent = "a programming language";
		btn2.textContent = "a latin language";
		btn3.textContent = "a nordic language";
		btn4.textContent = "a type of computer";

		//add event listener for correct answer
		btn1.addEventListener("click", correct);
		btn1.addEventListener("click", question2);
	};
	question2 = () => {
		//remove event listener from previous answer
		btn1.removeEventListener("click", correct);
		btn1.removeEventListener("click", question2);
		board.textContent =
			"which syntax allows you to declare variable?";
		btn1.textContent = "appear";
		btn2.textContent = "let";
		btn3.textContent = "shazam";
		btn4.textContent = "declare";

		//add event listener for correct answer
		btn2.addEventListener("click", correct);
		btn2.addEventListener("click", question3);
	};
	question3 = () => {
		//remove event listener from previous answer
		btn2.removeEventListener("click", correct);
		btn2.removeEventListener("click", question3);

		board.textContent = "is javascript the same as java?";
		btn1.textContent = "yes";
		btn2.textContent = "no";
		btn3.textContent = "depends on what 'is' is.";
		btn4.textContent = "hell yeah";

		//add event listener for correct answer
		btn2.addEventListener("click", correct);
		btn2.addEventListener("click", question4);
	};
	question4 = () => {
		//remove event listener from previous answer
		btn2.removeEventListener("click", correct);
		btn2.removeEventListener("click", question4);

		board.textContent =
			"Inside which HTML element do we put the JavaScript?";
		btn1.textContent = "<scripting>";
		btn2.textContent = "<js>";
		btn3.textContent = "<script>";
		btn4.textContent = "<javascript>";

		//add event listener for correct answer
		btn3.addEventListener("click", correct);
		btn3.addEventListener("click", question5);
	};
	question5 = () => {
		//remove event listener from previous answer
		btn3.removeEventListener("click", correct);
		btn3.removeEventListener("click", question5);

		board.textContent =
			"What is the correct syntax for referring to an external script called 'xxx.js'?";
		btn1.textContent = "<script name ='xxx.js'>";
		btn2.textContent = "<script src ='xxx.js'>";
		btn3.textContent = "<script href ='xxx.js'>";
		btn4.textContent = "<script script ='xxx.js'>";

		//add event listener for correct answer
		btn2.addEventListener("click", correct);
		btn2.addEventListener("click", question6);
	};
	question6 = () => {
		//remove event listener for correct answer
		btn3.addEventListener("click", correct);
		btn3.addEventListener("click", question6);

		board.textContent = "what is javascript?";
		btn1.textContent = "a programming language";
		btn2.textContent = "a latin language";
		btn3.textContent = "a nordic language";
		btn4.textContent = "a type of computer";

		//add event listener for correct answer
		btn3.addEventListener("click", correct);
		btn3.addEventListener("click", question7);
	};
	question7 = () => {
		//remove event listener for correct answer
		btn3.addEventListener("click", correct);
		btn3.addEventListener("click", question5);
		board.textContent = "what is javascript?";
		btn1.textContent = "a programming language";
		btn2.textContent = "a latin language";
		btn3.textContent = "a nordic language";
		btn4.textContent = "a type of computer";
	};
	question8 = () => {
		board.textContent = "what is javascript?";
		btn1.textContent = "a programming language";
		btn2.textContent = "a latin language";
		btn3.textContent = "a nordic language";
		btn4.textContent = "a type of computer";
	};
	question9 = () => {
		board.textContent = "what is javascript?";
		btn1.textContent = "a programming language";
		btn2.textContent = "a latin language";
		btn3.textContent = "a nordic language";
		btn4.textContent = "a type of computer";
	};
	question10 = () => {
		board.textContent = "what is javascript?";
		btn1.textContent = "a programming language";
		btn2.textContent = "a latin language";
		btn3.textContent = "a nordic language";
		btn4.textContent = "a type of computer";
	};

	//initialize timer
	setTime();
	//initialize 1st question
	question1();
};
