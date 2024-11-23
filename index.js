function startQuiz() {
  window.location.href = "quiz1.html";
}

const choices = {
  A: 0,
  B: 0,
  C: 0,
  D: 0
};

const questionButtons = document.querySelectorAll(".questionButton");

questionButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const value = event.target.getAttribute("data-value");

    if (choices[value] !== undefined) {
      choices[value]++;
    }

    localStorage.setItem("quizChoices", JSON.stringify(choices));

    const parentDiv = event.target.parentElement;
    const siblingButtons = parentDiv.querySelectorAll(".questionButtons");
    siblingButtons.forEach((btn) => btn.disabled = true);

    document.querySelector(".nextButton").disabled = false;
  });
});

