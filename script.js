//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//Questions and Options array

const quizArray = [
  {
    id: "0",
    question: "Apa kepanjangan dari pramuka..?",
    options: ["praja muda karana", "Muda praja karana", "karana Muda praja", "praja karana muda"],
    correct: "praja muda karana",
  },
  {
    id: "1",
    question: "Negara mana yang ulang tahun kemerdekaan diperingati setiap 17 Agustus?",
    options: [" America", "malaysia", "Africa", "Indonesia"],
    correct: "Indonesia",
  },
  {
    id: "2",
    question: "Apa nama sekolahmu...?",
    options: ["mi hikmah nurul", "hikmah nurul mi", "Hikmah mi nurul", "MI Nurul Hikmah"],
    correct: "MI Nurul Hikmah",
  },
   {
    id: "3",
    question: "berpa hasil dari 5x5=..?",
    options: ["25", "30", "21", "15"],
    correct: "25",
  },
  {
    id: "4",
    question: "berpa hasil dari 20:5=..?",
    options: ["5", "4", "21", "15"],
    correct: "4",
  },
  {
    id: "5",
    question: "berpa hasil dari 7-2=..?",
    options: ["5", "30", "21", "15"],
    correct: "5",
  },
  {
    id: "6",
    question: "berpa hasil dari 8:4=..?",
    options: ["2", "3", "21", "15"],
    correct: "2",
  }, 
  {
    id: "7",
    question: "berpa hasil dari 8-2=..?",
    options: ["25", "6", "21", "15"],
    correct: "6",
  },
  {
    id: "8",
    question: "berpa hasil dari 10:2=..?",
    options: ["5", "30", "21", "15"],
    correct: "5",
  },
  {
    id: "9",
    question: "berpa hasil dari 15-5=..?",
    options: ["10", "30", "21", "15"],
    correct: "10",
  }, 
  {
    id: "10",
    question: "berpa hasil dari 20-5=..?",
    options: ["25", "30", "21", "15"],
    correct: "15",
  }, 
  {
    id: "11",
    question: "berpa hasil dari 4x4=..?",
    options: ["25", "16", "21", "15"],
    correct: "16",
  },
  {
    id: "12",
    question: "berpa hasil dari 6x2=..?",
    options: ["12", "30", "21", "15"],
    correct: "12",
  },
  {
    id: "13",
    question: "berpa hasil dari 7x3=..?",
    options: ["25", "30", "21", "15"],
    correct: "21",
  }, 
  {
    id: "14",
    question: "berpa hasil dari 4x6=..?",
    options: ["12", "30", "24", "15"],
    correct: "24",
  }, 
  {
    id: "15",
    question: "berpa hasil dari 6x7=..?",
    options: ["25", "39", "42", "15"],
    correct: "42",
  }, 
  {
    id: "16",
    question: "berpa hasil dari 10x5=..?",
    options: ["25", "30", "21", "50"],
    correct: "50",
  },
  {
    id: "17",
    question: "berpa hasil dari 3x6=..?",
    options: ["25", "30", "21", "18"],
    correct: "18",
  }, 
  {
    id: "18",
    question: "berpa hasil dari 9x5=..?",
    options: ["25", "30", "21", "45"],
    correct: "45",
  },
    {
    id: "19",
    question: "berpa hasil dari 2x5=..?",
    options: ["25", "10", "21", "15"],
    correct: "10",
  },
   {
    id: "20",
    question: "berpa hasil dari 4x5=..?",
    options: ["25", "30", "20", "15"],
    correct: "20",
  }, 
  {
    id: "3",
    question: "berpa hasil dari 3x5=..?",
    options: ["25", "30", "21", "15"],
    correct: "15",
  }, 
   {
    id: "3",
    question: "berpa hasil dari 7x5=..?",
    options: ["35", "30", "21", "15"],
    correct: "35",
  }, 
   {
    id: "3",
    question: "berpa hasil dari 8x5=..?",
    options: ["40", "30", "21", "15"],
    correct: "40",
  },
   {
    id: "3",
    question: "berpa hasil dari 6x5=..?",
    options: ["25", "30", "21", "15"],
    correct: "30",
  }, 
];

//Restart Quiz
restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == quizArray.length) {
      //hide question container and display score
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      //user score
      userScore.innerHTML =
        " score  " + scoreCount + " out of " + questionCount;
    } else {
      //display questionCount
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " Question";
      //display quiz
      quizDisplay(questionCount);
      count = 11;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);

//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //display current question card
  quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
  //randomly sort questions
  quizArray.sort(() => Math.random() - 0.5);
  //generate quiz
  for (let i of quizArray) {
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //question number
    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  //if user clicked answer == correct option stored in object
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  //clear interval(stop timer)
  clearInterval(countdown);
  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
}

//initial setup
function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 11;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

//hide quiz and display start screen
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};