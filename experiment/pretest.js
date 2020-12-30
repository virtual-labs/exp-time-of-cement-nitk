
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
      question: "The standard consistency of cement varies from",
      answers: {
        a: "22% to 33%",
        b: "26% to 33%",
        c: "29% to 35%",
        d: "None of the above"
      },
      correctAnswer: "b"
    },

    {
      question: "The standard consistency test helps to determine the _________________ for other tests. ",
      answers: {
        a: "Cement content",
        b: "Slump",
        c: "Water content",
        d: "Setting time"
      },
      correctAnswer: "c"
    },

    {
      question: "Select the odd one out of these",
      answers: {
        a: "Slump Test",
        b: "Compaction Factor Test",
        c: "Vee Bee Consistometer Test",
        d: "Standard Consistency Test"
      },
      correctAnswer: "d"
    },
    {
        question: "Consistency is a term which indicates the ",
        answers: {
          a: "Degree of fluidity",
          b: "Degree of mobility",
          c: "Both a and b",
          d: "None of the above"
        },
        correctAnswer: "c"
      },
    {
        question: "The cement grade standard whose Initial Setting Time and Final Setting Time is 30min and 600min is ",
    answers: {
          a: "Super Sulphated",
          b: "OPC",
          c: "PSC",
          d: "None of the above"
        },
        correctAnswer: "b"
      }
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
