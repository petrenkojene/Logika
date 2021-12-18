// DOM element========================================================

let MainElement2 = document.createElement("div");
MainElement2.className = "main2";
document.body.append(MainElement2);
let heading2 = document.createElement("h2");
heading2.innerHTML = "Задача2";
MainElement2.append(heading2);

let container2 = document.createElement("div");
container2.className = "container2";
MainElement2.append(container2);

let description = document.createElement("p");
description.className = "descript";
container2.append(description);

let TaskButton = document.createElement("button");
TaskButton.className = "btn btn-primary";
TaskButton.innerHTML = "Отримати відповідь";
container2.append(TaskButton);

let answerContainer = document.createElement("div");
answerContainer.className = "answerMain";
container2.append(answerContainer);

let par3 = document.createElement("p");
answerContainer.append(par3);

let par4 = document.createElement("p");
answerContainer.append(par4);
// ======================================================================
subjects3 = [];
subjects4 = [];
subjects5 = [];
subjects6 = [];
actionArr1 = [];
actionArr2 = [];
let randomNumber4 = currentRandom1(number);
let randomNumber5 = currentRandom1(number);
let randomNumber6 = currentRandom1(number);
let randomNumber7 = currentRandom1(number);
let randomNumber1Active1 = currentRandom1(number);
let randomNumber1Active2 = currentRandom1(number);
function currentRandom1(elem) {
  return elem[Math.floor(Math.random() * elem.length)];
}
function caseElement(element, arr) {
  switch (element) {
    case 1:
      arr[0] = "яблукo";
      arr[1] = "апельсин";
      arr[2] = "мандарин";
      arr[3] = "олівець";

      break;
    case 2:
    case 3:
    case 4:
      arr[0] = "яблука";
      arr[1] = "апельсина";
      arr[2] = "мандарина";
      arr[3] = "олівці";

      break;

    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      arr[0] = "яблук";
      arr[1] = "апельсинів";
      arr[2] = "мандаринів";
      arr[3] = "олівців";

      break;
  }
}
caseElement(randomNumber4, subjects3);

currentSubjects3 = currentRandom1(subjects3);

caseElement(randomNumber5, subjects4);

caseElement(randomNumber6, subjects5);

caseElement(randomNumber7, subjects6);

switch (currentSubjects3) {
  case subjects3[0]:
    subjects4.splice(0, 1);
    subjects5.splice(0, 1);
    subjects6.splice(0, 1);
    break;
  case subjects3[1]:
    subjects4.splice(1, 1);
    subjects5.splice(1, 1);
    subjects6.splice(1, 1);
    break;
  case subjects3[2]:
    subjects4.splice(2, 1);
    subjects5.splice(2, 1);
    subjects6.splice(2, 1);
    break;
  case subjects3[3]:
    subjects4.splice(3, 1);
    subjects5.splice(3, 1);
    subjects6.splice(3, 1);
    break;
}
currentSubjects4 = currentRandom1(subjects4);

switch (currentSubjects4) {
  case subjects4[0]:
    subjects5.splice(0, 1);
    subjects6.splice(0, 1);
    break;
  case subjects4[1]:
    subjects5.splice(1, 1);
    subjects6.splice(1, 1);
    break;
  case subjects4[2]:
    subjects5.splice(2, 1);
    subjects6.splice(2, 1);
    break;
}
currentSubjects5 = currentRandom1(subjects5);

switch (currentSubjects5) {
  case subjects5[0]:
    subjects6.splice(0, 1);
    break;
  case subjects5[1]:
    subjects6.splice(1, 1);
    break;
}
currentSubjects6 = currentRandom1(subjects6);

caseElement(randomNumber1Active1, actionArr1);

caseElement(randomNumber1Active2, actionArr2);

currentRandomAction1 = currentRandom1(actionArr1);

switch (currentRandomAction1) {
  case actionArr1[0]:
    actionArr2.splice(0, 1);

    break;
  case subjects3[1]:
    actionArr2.splice(1, 1);

    break;
  case subjects3[2]:
    actionArr2.splice(2, 1);

    break;
  case subjects3[3]:
    actionArr2.splice(3, 1);

    break;
}
currentRandomAction2 = currentRandom1(actionArr2);

description.innerHTML = `${randomNumber4} ${currentSubjects3} ${randomNumber5} ${currentSubjects4}, ${randomNumber6} ${currentSubjects5} та ${randomNumber7} ${currentSubjects6} лежалі на столі. Хлопчик ${currentActionBoy} ${randomNumber1Active1} ${currentRandomAction1}  та ${randomNumber1Active2} ${currentRandomAction2}.<br> Скільки всього фруктів з'їв хлопчик? Скільки залишилось ${currentSubjects3} на столі? `;
