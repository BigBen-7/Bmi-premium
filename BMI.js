const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");

// MODAL DECLERATION
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

// CONVERTER DECLERATION
const input = document.getElementById("pounds");
const view = document.getElementById("convertion");

// MODAL FUNCTIONS
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// BMI FUNCTIONS
function calculateBMI() {
  const heightValue = document.getElementById("height").value / 100;
  const weightValue = document.getElementById("weight").value;

  const bmiValue = weightValue / (heightValue * heightValue);

  bmiInputEl.value = Math.round(bmiValue * 100) / 100;

  if (bmiValue < 18.5) {
    weightConditionEl.innerText = "Severe Thinness";
     weightTipsEl.innerHTML =
      "<h4 class='tips'>Risk associated with being underweight</h4>\n <p class= 'tips-para'>Being underweight has its own associated risks, listed below:</p>\n <ul class='tips-list'><li>Malnutrition, vitamin deficiencies, anemia (lowered ability to carry blood vessels)</li> <li>Osteoporosis, a disease that causes bone weakness, increasing the risk of breaking a bone </li> <li>Type II diabetes</li> <li>Coronary heart disease</li> <li>A decrease in immune function</li> <li>Growth and development issues, particularly in children and teenagers</li> <li>Potential complications as a result of surgery</li> <li>Generally, an increased risk of mortality compared to those with a healthy BMI</li></ul>\n <p class= 'tips-para'>As can be seen from the list above, there are numerous negative, in some cases fatal, outcomes that may result from being overweight. Generally, a person should try to maintain a BMI between 18-25 kg/m2. If you fall in the overweight category, we will send monthly weight loss and nutritional tips to help you lose weight directly to your email. </p>";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightConditionEl.innerText = "Normal Weight";
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    weightConditionEl.innerText = "OverWeight";
     weightTipsEl.innerHTML =
      "<h4 class='tips'>Risk associated with being overweight</h4>\n <p class= 'tips-para'>Being overweight increases the risk of a number of serious diseases and health conditions. Below is a list of said risks, according to the Centers for Disease Control and Prevention (CDC):</p>\n <ul class='tips-list'><li>High blood pressure</li> <li>Higher levels of LDL </li> <li>Type II diabetes</li> <li>Coronary heart disease</li> <li>Stroke</li> <li>Gallbladder disease</li> <li>Low quality of life</li> <li>Mental illnesses such as clinical depression, anxiety, and others</li></ul>\n <p class= 'tips-para'>As can be seen from the list above, there are numerous negative, in some cases fatal, outcomes that may result from being overweight. Generally, a person should try to maintain a BMI between 18-25 kg/m2. If you fall in the overweight category, we will send monthly weight loss and nutritional tips to help you lose weight directly to your email. </p>";
  } else if (bmiValue >= 30) {
    weightConditionEl.innerText = "Obesity";
     weightTipsEl.innerHTML =
      "<h4 class='tips'>Risk associated with being overweight</h4>\n <p class= 'tips-para'>Being overweight increases the risk of a number of serious diseases and health conditions. Below is a list of said risks, according to the Centers for Disease Control and Prevention (CDC):</p>\n <ul class='tips-list'><li>High blood pressure</li> <li>Higher levels of LDL </li> <li>Type II diabetes</li> <li>Coronary heart disease</li> <li>Stroke</li> <li>Gallbladder disease</li> <li>Low quality of life</li> <li>Mental illnesses such as clinical depression, anxiety, and others</li></ul>\n <p class= 'tips-para'>As can be seen from the list above, there are numerous negative, in some cases fatal, outcomes that may result from being overweight. Generally, a person should try to maintain a BMI between 18-25 kg/m2. If you fall in the overweight category, we will send monthly weight loss and nutritional tips to help you lose weight directly to your email. </p>";
  }
}

// CONVERTER FUNCTIONS

const convert = function () {
  let converting = input.value * 0.4539;
  const viewResult = (view.textContent = Math.round((converting * 100) / 100));
  return viewResult;
};

document.getElementById("weight-condition").style.color = "green";

btnEl.addEventListener("click", calculateBMI);
