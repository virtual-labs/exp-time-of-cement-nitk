
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "Standard consistency of the cement is ",
      answers: {
        a: "Consistency in which the needle penetrate to a point 5mm to 7mm from the bottom of mould.",
        b: "Consistency in which the needle penetrate to a point 5mm to 7mm from the top of mould.",
        c: "Consistency in which the needle penetrate to a point 25 mm from the bottom of mould.",
        d: "None of the above."
      },
      correctAnswer: "a"
    },

    {
      question: "IS Standard for determination of consistency of standard cement paste is",
      answers: {
        a: "IS 4031 (Part 1) : 1988",
        b: "IS 4031 (Part 2) : 1988",
        c: "IS 4031 (Part 3) : 1988",
        d: "IS 4031 (Part 4) : 1988"
      },
      correctAnswer: "d"
    },

    {
      question: "Select the correct one!<br>The gauging time of the paste should not be <br>1.less than 5 minutes<br>2.more than 5 minutes<br>3.less than 3 minutes",
      answers: {
        a: "only 2",
        b: "2 and 3",
        c: "1 and 2",
        d: "only 3"
      },
      correctAnswer: "b"
    },
    {
      question: "The diameter of the plunger used for testing standard consistency of the cement is",
      answers: {
        a: "1mm",
        b: "5mm",
        c: "10mm",
        d: "None of the above"
      },
      correctAnswer: "c"
    },
    {
      question: "The specified temperature and humidity for conducting consistency test is",
      answers: {
        a: "27±2&deg;C and 65±5%",
        b: "27±2&deg;C and 90%",
        c: "29±2&deg;C and 65±5%",
        d: "29±2&deg;C and 90%"
      },
      correctAnswer: "d"
    }
  ];

// ---------------------------- End -------------------------------

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
