const steps = [
  "Double it 🤔",
  "Now add 10 ➕",
  "Cut it in half ✂️",
  "Now subtract your original number ➖",
  "Let me guess your number... 🧙‍♂️"
];

let currentStep = 0;

function nextStep() {
  const stepContainer = document.getElementById("steps");
  const resultContainer = document.getElementById("result");

  if (currentStep < steps.length) {
    stepContainer.innerHTML = `<p>${steps[currentStep]}</p><button onclick="nextStep()">Next ➡️</button>`;
    currentStep++;
  } else {
     stepContainer.style.display = "none";
  resultContainer.innerHTML = `
    <p>Your number is... <strong>5</strong> 🎉</p>
    <button onclick="resetMagic()">🔁 Try Again</button>
  `;
  }
}
function resetMagic() {
  currentStep = 0;
  document.getElementById("steps").style.display = "block";
  document.getElementById("steps").innerHTML = `
    <button onclick="nextStep()">Start the Magic ✨</button>
  `;
  document.getElementById("result").innerHTML = "";
}
