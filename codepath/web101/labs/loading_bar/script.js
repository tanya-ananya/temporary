const consultButton = document.getElementById('upload-button');
const progressBar = document.getElementById('progress-bar');
const nameInput = document.getElementById('name-input');
const numInput = document.getElementById('num-input');
const foodInput = document.getElementById('food-input');
const output = document.getElementById('output');

let percent = 0;
let intervalId = 0;
let person;

const reset = () => {
  progressBar.style.width = "0%";
  percent = 0;
}

const stepProgressAnimation = (person) => {
  percent += 1;
  progressBar.style.width = percent + '%';

  if (percent === 100) {
    clearInterval(intervalId)
    intervalId = 0;
    reset();

    let messNum = randomIntMessage(0, 4);

    const messages = [
      "quote one",
      "quote two",
      "quote three",
      "quote four",
      "quote five"
    ]

    output.innerHTML = messages[messNum];
  }
}

const randomIntMessage = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const startProgressAnimation = () => {
  output.innerHTML = `<p>Magic is Brewing... ✨</p>`;

  person = {
    name: nameInput.value,
    number: numInput.value,
    lastFood: foodInput.value
  }

  if (intervalId === 0) {
    intervalId = setInterval(stepProgressAnimation, 50, person);
  }
}

consultButton.addEventListener('click', startProgressAnimation);

reset();