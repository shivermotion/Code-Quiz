let game = () => {
	//current score
	let currentScore = 0;
	//question board and multiple choice buttons
	let board = document.getElementById("board");
	let choiceEl = document.getElementById("choices");
	let btn1 = document.getElementById("1");
	let btn2 = document.getElementById("2");
	let btn3 = document.getElementById("3");
	let btn4 = document.getElementById("4");
	let saveName = document.getElementById("saveName");
	let inputName = document.getElementById("inputName");
	//timer html and timer interval
	let secondsLeft = 30;
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
				//remove buttons and display gameover!
				choiceEl.style = "display: none;";
				board.textContent = "gameover...";
				console.log("gameover");
			}
		}, 1000);
	};
	//add point to score and extra time when correct
	let correct = () => {
		//add score
		currentScore++;
		//set to local storage
		localStorage.setItem("score", currentScore);
		console.log("score in storage: " + localStorage.score);
		//add 5 sec for correct answer
		secondsLeft += 5;
		console.log("current score: " + currentScore);
	};
	// minus 1 sec when wrong
	let wrong = () => {
		secondsLeft--;
		console.log("oops -1 sec");
		//set to local storage
		localStorage.setItem("score", currentScore);
		console.log("score in storage: " + localStorage.score);
	};
	//initialize score input screen
	let registerScore = () => {
		choiceEl.style = "display: none";
		board.textContent =
			"Complete! - Enter your name to immortalize yourself in the Hall of Fame!";
		board.appendChild(saveName).style = "";
		board.appendChild(inputName).style = "";
	};
	//game board questions,choices,answers
	question1 = () => {
		board.textContent = "what is javascript?";
		btn1.textContent = "a programming language"; //correct
		btn2.textContent = "a latin language";
		btn3.textContent = "a nordic language";
		btn4.textContent = "a type of computer";

		//add event listener for correct answer
		btn1.addEventListener("click", correct);
		btn1.addEventListener("click", question2);
		btn2.addEventListener("click", wrong);
		btn2.addEventListener("click", question2);
		btn3.addEventListener("click", wrong);
		btn3.addEventListener("click", question2);
		btn4.addEventListener("click", wrong);
		btn4.addEventListener("click", question2);
	};
	question2 = () => {
		//remove event listener from previous answer
		btn1.removeEventListener("click", correct);
		btn1.removeEventListener("click", question2);
		btn2.removeEventListener("click", wrong);
		btn2.removeEventListener("click", question2);
		btn3.removeEventListener("click", wrong);
		btn3.removeEventListener("click", question2);
		btn4.removeEventListener("click", wrong);
		btn4.removeEventListener("click", question2);

		board.textContent =
			"which syntax allows you to declare variable?";
		btn1.textContent = "appear";
		btn2.textContent = "let"; //correct
		btn3.textContent = "shazam";
		btn4.textContent = "declare";

		//add event listeners for correct answer
		btn1.addEventListener("click", wrong);
		btn1.addEventListener("click", question3);
		btn2.addEventListener("click", correct);
		btn2.addEventListener("click", question3);
		btn3.addEventListener("click", wrong);
		btn3.addEventListener("click", question3);
		btn4.addEventListener("click", wrong);
		btn4.addEventListener("click", question3);
	};
	question3 = () => {
		//remove event listener from previous answer
		btn1.removeEventListener("click", wrong);
		btn1.removeEventListener("click", question3);
		btn2.removeEventListener("click", correct);
		btn2.removeEventListener("click", question3);
		btn3.removeEventListener("click", wrong);
		btn3.removeEventListener("click", question3);
		btn4.removeEventListener("click", wrong);
		btn4.removeEventListener("click", question3);

		board.textContent = "is javascript the same as java?";
		btn1.textContent = "yes";
		btn2.textContent = "no"; //correct
		btn3.textContent = "depends on what 'is' is.";
		btn4.textContent = "hell yeah";

		//add event listener for correct answer
		btn1.addEventListener("click", wrong);
		btn1.addEventListener("click", question4);
		btn2.addEventListener("click", correct);
		btn2.addEventListener("click", question4);
		btn3.addEventListener("click", wrong);
		btn3.addEventListener("click", question4);
		btn4.addEventListener("click", wrong);
		btn4.addEventListener("click", question4);
	};
	question4 = () => {
		//remove event listener from previous answer
		btn1.removeEventListener("click", wrong);
		btn1.removeEventListener("click", question4);
		btn2.removeEventListener("click", correct);
		btn2.removeEventListener("click", question4);
		btn3.removeEventListener("click", wrong);
		btn3.removeEventListener("click", question4);
		btn4.removeEventListener("click", wrong);
		btn4.removeEventListener("click", question4);

		board.textContent =
			"Inside which HTML element do we put the JavaScript?";
		btn1.textContent = "<scripting>";
		btn2.textContent = "<js>";
		btn3.textContent = "<script>"; //correct
		btn4.textContent = "<javascript>";

		//add event listener for correct answer
		btn1.addEventListener("click", wrong);
		btn1.addEventListener("click", question5);
		btn2.addEventListener("click", wrong);
		btn2.addEventListener("click", question5);
		btn3.addEventListener("click", correct);
		btn3.addEventListener("click", question5);
		btn4.addEventListener("click", wrong);
		btn4.addEventListener("click", question5);
	};
	question5 = () => {
		//remove event listener from previous answer
		btn1.removeEventListener("click", wrong);
		btn1.removeEventListener("click", question5);
		btn2.removeEventListener("click", wrong);
		btn2.removeEventListener("click", question5);
		btn3.removeEventListener("click", correct);
		btn3.removeEventListener("click", question5);
		btn4.removeEventListener("click", wrong);
		btn4.removeEventListener("click", question5);

		board.textContent =
			"What is the correct syntax for referring to an external script called 'xxx.js'?";
		btn1.textContent = "<script name ='xxx.js'>";
		btn2.textContent = "<script src ='xxx.js'>"; //correct
		btn3.textContent = "<script href ='xxx.js'>";
		btn4.textContent = "<script script ='xxx.js'>";

		//add event listener for correct answer
		btn1.addEventListener("click", wrong);
		btn1.addEventListener("click", question6);
		btn2.addEventListener("click", correct);
		btn2.addEventListener("click", question6);
		btn3.addEventListener("click", wrong);
		btn3.addEventListener("click", question6);
		btn4.addEventListener("click", wrong);
		btn4.addEventListener("click", question6);
	};
	question6 = () => {
		//remove event listener for correct answer
		btn1.removeEventListener("click", wrong);
		btn1.removeEventListener("click", question6);
		btn2.removeEventListener("click", correct);
		btn2.removeEventListener("click", question6);
		btn3.removeEventListener("click", wrong);
		btn3.removeEventListener("click", question6);
		btn4.removeEventListener("click", wrong);
		btn4.removeEventListener("click", question6);

		board.textContent =
			"what are the 3 essential primitives types in javascript?";
		btn1.textContent = "string,number,boolean"; //correct
		btn2.textContent = "cent,scent,sent";
		btn3.textContent = "int,bint,djent";
		btn4.textContent = "rope,math,bullion";

		//add event listener for correct answer
		btn1.addEventListener("click", correct);
		btn1.addEventListener("click", question7);
		btn2.addEventListener("click", wrong);
		btn2.addEventListener("click", question7);
		btn3.addEventListener("click", wrong);
		btn3.addEventListener("click", question7);
		btn4.addEventListener("click", wrong);
		btn4.addEventListener("click", question7);
	};
	question7 = () => {
		//remove event listener for correct answer
		btn1.removeEventListener("click", correct);
		btn1.removeEventListener("click", question7);
		btn2.removeEventListener("click", wrong);
		btn2.removeEventListener("click", question7);
		btn3.removeEventListener("click", wrong);
		btn3.removeEventListener("click", question7);
		btn4.removeEventListener("click", wrong);
		btn4.removeEventListener("click", question7);

		board.textContent = "what is DOM stand for?";
		btn1.textContent = "document,observer,medal";
		btn2.textContent = "dinosaur,omniscient, mytosis";
		btn3.textContent = "deli,onion,mayonnaise";
		btn4.textContent = "document,object,model"; //correct

		//add event listener for correct answer
		btn1.addEventListener("click", wrong);
		btn1.addEventListener("click", question8);
		btn2.addEventListener("click", wrong);
		btn2.addEventListener("click", question8);
		btn3.addEventListener("click", wrong);
		btn3.addEventListener("click", question8);
		btn4.addEventListener("click", correct);
		btn4.addEventListener("click", question8);
	};
	question8 = () => {
		//remove event listener for correct answer
		btn1.removeEventListener("click", wrong);
		btn1.removeEventListener("click", question8);
		btn2.removeEventListener("click", wrong);
		btn2.removeEventListener("click", question8);
		btn3.removeEventListener("click", wrong);
		btn3.removeEventListener("click", question8);
		btn4.removeEventListener("click", correct);
		btn4.removeEventListener("click", question8);

		board.textContent =
			"how do you log to the console as a developer?";
		btn1.textContent = "console.log()"; //correct
		btn2.textContent = "log.console()";
		btn3.textContent = "writeTo()";
		btn4.textContent = "hey()";

		//add event listener for correct answer
		btn1.addEventListener("click", correct);
		btn1.addEventListener("click", question9);
		btn2.addEventListener("click", wrong);
		btn2.addEventListener("click", question9);
		btn3.addEventListener("click", wrong);
		btn3.addEventListener("click", question9);
		btn4.addEventListener("click", wrong);
		btn4.addEventListener("click", question9);
	};
	question9 = () => {
		//remove event listener for correct answer
		btn1.removeEventListener("click", correct);
		btn1.removeEventListener("click", question9);
		btn2.removeEventListener("click", wrong);
		btn2.removeEventListener("click", question9);
		btn3.removeEventListener("click", wrong);
		btn3.removeEventListener("click", question9);
		btn4.removeEventListener("click", wrong);
		btn4.removeEventListener("click", question9);

		board.textContent = "how does a FOR loop start?";
		btn1.textContent = "for(i = 0; i < 5; i++)"; //correct
		btn2.textContent = "for (i <= 5; i++)";
		btn3.textContent = "for(i++)";
		btn4.textContent = "forI = ++()";

		//add event listener for correct answer
		btn1.addEventListener("click", correct);
		btn1.addEventListener("click", question10);
		btn2.addEventListener("click", wrong);
		btn2.addEventListener("click", question10);
		btn3.addEventListener("click", wrong);
		btn3.addEventListener("click", question10);
		btn4.addEventListener("click", wrong);
		btn4.addEventListener("click", question10);
	};
	question10 = () => {
		//remove event listener for correct answer
		btn1.removeEventListener("click", correct);
		btn1.removeEventListener("click", question10);
		btn2.removeEventListener("click", wrong);
		btn2.removeEventListener("click", question10);
		btn3.removeEventListener("click", wrong);
		btn3.removeEventListener("click", question10);
		btn4.removeEventListener("click", wrong);
		btn4.removeEventListener("click", question10);

		board.textContent =
			"How do you write 'Hello World' in an alert box?";
		btn1.textContent = "alertBox('Hello World');";
		btn2.textContent = "alert('Hello World');";
		btn3.textContent = "msg('Hello World');";
		btn4.textContent = "msgBox('Hello World');";

		//add event listener for correct answer
		btn1.addEventListener("click", wrong);
		btn1.addEventListener("click", registerScore);
		btn2.addEventListener("click", correct);
		btn2.addEventListener("click", registerScore);
		btn3.addEventListener("click", wrong);
		btn3.addEventListener("click", registerScore);
		btn4.addEventListener("click", wrong);
		btn4.addEventListener("click", registerScore);
	};

	//initialize timer
	setTime();
	//initialize 1st question
	question1();
	//reveal button choices on start by removing style property "hidden" in element
	choiceEl.style = "";
};
