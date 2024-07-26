const questions=[
    {
        question:"HTML stands for....?",
        choices : [ "Higher Text Markup Language" , "Hyper Text Markup League" , "Hyper Text Markup Language" ],
            correctAnswer: "Hyper Text Markup Language"
        
    },
    {
        question:"Which CSS property is used to make the border of an element appear as a circle?",
        answers : [ "border-style:circle" , "border-radius:50%" , "border-shape:circle" ],
            correctAnswer : "border-radius:50%"
        
    },
    {
        question:"Which CSS styling method is applied directly within the HTML element?",
        choices : [ "External styling" , "Internal styling" , "Inline styling"],
        correctAnswer: "Inline styling"
   }

];
let currentQuestionIndex = 0;
let timer;
let timeLeft = 10;

function displayQuestion() {
  const questionContainer = document.getElementById('question');
  const choicesContainer = document.getElementById('choices');
  const timerContainer = document.getElementById('timer');

  const currentQuestion = questions[currentQuestionIndex];
  
  questionContainer.innerHTML = currentQuestion.question;
  choicesContainer.innerHTML = '';
  timerContainer.innerHTML = `Time left: ${timeLeft} seconds`;

  currentQuestion.choices.forEach(choice => {
    const choiceElement = document.createElement('button');
    choiceElement.innerHTML = choice;
    choiceElement.onclick = () => selectChoice(choice);
    choicesContainer.appendChild(choiceElement);
  });

  startTimer();
}

function selectChoice(choice) {
  clearInterval(timer);
  const currentQuestion = questions[currentQuestionIndex];
  if (choice === currentQuestion.correctAnswer) {
    alert('Correct!');
  } else {
    alert('Wrong!');
  }
  displayNextQuestion();
}

function startTimer() {
  clearInterval(timer); // Clear any existing timer
  timeLeft = 10;
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById('timer').innerHTML = `Time left: ${timeLeft} seconds`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      alert('Time is up!');
      displayNextQuestion();
    }
  }, 1000);
}

function displayNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    alert('Quiz Completed!');
  }
}















