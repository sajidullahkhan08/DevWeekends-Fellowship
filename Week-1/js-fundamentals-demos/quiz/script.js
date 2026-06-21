const quizData = [
  {
    question: "Which keyword is used to declare a constant?",
    options: ["var", "let", "const", "static"],
    answer: "const",
  },
  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Mode",
      "Digital Ordinance Model",
    ],
    answer: "Document Object Model",
  },
  {
    question: "Which method is used to select an element by its ID?",
    options: ["querySelector", "getElementById", "getElementsByClass"],
    answer: "getElementById",
  },
];

function fetchQuizQuestions() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(quizData);
    }, 2000);
  });
}

const container = document.getElementById("quiz-container");

container.innerHTML =
  '<p style="text-align:center;">⏳ Loading Quiz Questions...</p>';

fetchQuizQuestions()
  .then(function (data) {
    container.innerHTML = "";

    data.forEach(function (q) {
      const qBlock = document.createElement("div");
      qBlock.classList.add("question-block");

      const title = document.createElement("h3");
      title.textContent = q.question;
      qBlock.appendChild(title);

      const optionsDiv = document.createElement("div");
      optionsDiv.classList.add("options");

      q.options.forEach(function (opt) {
        const btn = document.createElement("button");
        btn.textContent = opt;

        btn.addEventListener("click", function () {
          if (opt === q.answer) {
            btn.classList.add("correct");
          } else {
            btn.classList.add("wrong");
          }
        });

        optionsDiv.appendChild(btn);
      });

      qBlock.appendChild(optionsDiv);
      container.appendChild(qBlock);
    });
  })
  .catch(function (error) {
    container.innerHTML = `<p style="color:red; text-align:center;">Error: ${error.message}</p>`;
  });
