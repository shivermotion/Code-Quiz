let game = () => {
	let currentScore = "";
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

			if (secondsLeft === 0) {
				// Stops execution of action at set interval
				clearInterval(timerInterval);
				// Calls function to create and append image
				// sendMessage();
				console.log("gameover");
			}
		}, 1000);
	};

	// reveal button choices on start by removing style property "hidden" in element
	choiceEl.style = "";

	question1 = () => {
		board.textContent = "what is javascript?";
		btn1.textContent = "a programming language";
		btn2.textContent = "a latin language";
		btn3.textContent = "a nordic language";
		btn4.textContent = "a type of computer";
	};
	question2 = () => {
		board.textContent =
			"which syntax allows you to declare variable?";
		btn1.textContent = "appear";
		btn2.textContent = "let";
		btn3.textContent = "shazam";
		btn4.textContent = "declare";
	};
	question3 = () => {
		board.textContent = "what is javascript?";
		btn1.textContent = "a programming language";
		btn2.textContent = "a latin language";
		btn3.textContent = "a nordic language";
		btn4.textContent = "a type of computer";
	};
	question4 = () => {
		board.textContent = "what is javascript?";
		btn1.textContent = "a programming language";
		btn2.textContent = "a latin language";
		btn3.textContent = "a nordic language";
		btn4.textContent = "a type of computer";
	};
	question5 = () => {
		board.textContent = "what is javascript?";
		btn1.textContent = "a programming language";
		btn2.textContent = "a latin language";
		btn3.textContent = "a nordic language";
		btn4.textContent = "a type of computer";
	};
	question6 = () => {
		board.textContent = "what is javascript?";
		btn1.textContent = "a programming language";
		btn2.textContent = "a latin language";
		btn3.textContent = "a nordic language";
		btn4.textContent = "a type of computer";
	};
	question7 = () => {
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
