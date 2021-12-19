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
TaskButton.className = "btn btn-primary btn1";
TaskButton.innerHTML = "Отримати відповідь";
container2.append(TaskButton);

let answerContainer = document.createElement("div");
answerContainer.className = "answerMain";
container2.append(answerContainer);

let par3 = document.createElement("p");
par3.className = "answer";
answerContainer.append(par3);

let par4 = document.createElement("p");
par4.className = "errorTask";
answerContainer.append(par4);
// ======================================================================
subjects3 = [];
subjects4 = [];
subjects5 = [];
subjects6 = [];
actionArr1 = [];
actionArr2 = [];
let answer1 = "";
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

// Решение
let currentRandomThings = [
  currentSubjects3,
  currentSubjects4,
  currentSubjects5,
  currentSubjects6,
];
let currentRandomActionThings = [currentRandomAction1, currentRandomAction2];

let patternApple = /ябл/i;
let patternOrange = /апе/i;
let patternMandarin = /ман/i;
let patternPencil = /олі/i;
let resultNumber1;
let calculationResult;
let calculationResult2;
let currentTaskSubject = "";
function fruitsQuestion(item, elem) {
  if (item.match(patternApple) !== null) {
    elem = "яблук";
    console.log(elem);
  } else if (item.match(patternOrange) !== null) {
    elem = "апельсин";
    console.log(elem);
  } else if (item.match(patternMandarin) !== null) {
    elem = "мандарин";
    console.log(elem);
  } else if (item.match(patternPencil) !== null) {
    elem = "олівців";
    console.log(elem);
  }
  console.log(elem);
  console.log(item);
  return elem;
}

//  Условие задачи
description.innerHTML = `${randomNumber4} ${currentSubjects3} ${randomNumber5} ${currentSubjects4}, ${randomNumber6} ${currentSubjects5} та ${randomNumber7} ${currentSubjects6} лежалі на столі. Хлопчик ${currentActionBoy} ${randomNumber1Active1} ${currentRandomAction1}  та ${randomNumber1Active2} ${currentRandomAction2}.<br> Скільки всього фруктів з'їв хлопчик? Скільки ${fruitsQuestion(
  currentRandomAction1,
  currentTaskSubject
)} залишилось  на столі? `;

function actionMinus(item) {
  for (let i = 0; i < currentRandomThings.length; i++) {
    if (
      currentRandomActionThings[0].match(item) !== null &&
      item === patternPencil
    ) {
      document.querySelector(".errorTask").innerHTML =
        "Помилка. Не можливо з'їсти олівці.";
      document.querySelector(".answer").style.display = "none";
    } else {
      if (
        currentRandomThings[i].match(item) !== null &&
        currentRandomActionThings[0].match(item) !== null
      ) {
        let index = currentRandomThings.indexOf(currentRandomThings[i]);

        switch (index) {
          case 0:
            calculationResult = randomNumber4 - randomNumber1Active1;

            break;
          case 1:
            calculationResult = randomNumber5 - randomNumber1Active1;

            break;
          case 2:
            calculationResult = randomNumber6 - randomNumber1Active1;

            break;
          case 3:
            calculationResult = randomNumber7 - randomNumber1Active1;

            break;
        }

        if (calculationResult < 0) {
          document.querySelector(".answer").style.display = "none";
          document.querySelector(".errorTask").innerHTML =
            "Помилка.<br>Від'ємне значення, так як хлопчик не може забрати більше ніж лежить на столі";
        }
      }
    }
  }
}

function actionMinus3(item) {
  for (let i = 0; i < currentRandomThings.length; i++) {
    if (
      currentRandomThings[i].match(item) !== null &&
      currentRandomActionThings[0].match(item) !== null
    ) {
      let index = currentRandomThings.indexOf(currentRandomThings[i]);

      switch (index) {
        case 0:
          calculationResult = randomNumber4 - randomNumber1Active1;

          break;
        case 1:
          calculationResult = randomNumber5 - randomNumber1Active1;

          break;
        case 2:
          calculationResult = randomNumber6 - randomNumber1Active1;

          break;
        case 3:
          calculationResult = randomNumber7 - randomNumber1Active1;

          break;
      }

      if (calculationResult < 0) {
        document.querySelector(".answer").style.display = "none";
        document.querySelector(".errorTask").innerHTML =
          "Помилка.<br>Від'ємне значення, так як хлопчик не може забрати більше ніж лежить на столі";
      }
    }
  }
}

function actionPlus(item) {
  for (let i = 0; i < currentRandomThings.length; i++) {
    if (
      currentRandomThings[i].match(item) !== null &&
      currentRandomActionThings[0].match(item) !== null
    ) {
      let index = currentRandomThings.indexOf(currentRandomThings[i]);

      switch (index) {
        case 0:
          calculationResult = randomNumber4 + randomNumber1Active1;

          break;
        case 1:
          calculationResult = randomNumber5 + randomNumber1Active1;

          break;
        case 2:
          calculationResult = randomNumber6 + randomNumber1Active1;

          break;
        case 3:
          calculationResult = randomNumber7 + randomNumber1Active1;

          break;
      }
    }
  }
}
function actionMinus2(item) {
  for (let i = 0; i < currentRandomThings.length; i++) {
    if (
      currentRandomThings[i].match(item) !== null &&
      currentRandomActionThings[1].match(item) !== null
    ) {
      let index = currentRandomThings.indexOf(currentRandomThings[i]);

      switch (index) {
        case 0:
          calculationResult2 = randomNumber4 - randomNumber1Active2;

          break;
        case 1:
          calculationResult2 = randomNumber5 - randomNumber1Active2;

          break;
        case 2:
          calculationResult2 = randomNumber6 - randomNumber1Active2;

          break;
        case 3:
          calculationResult2 = randomNumber7 - randomNumber1Active2;

          break;
      }

      if (calculationResult2 < 0) {
        document.querySelector(".answer").style.display = "none";
        document.querySelector(".errorTask").innerHTML =
          "Помилка.<br>Від'ємне значення, так як хлопчик не може забрати більше ніж лежить на столі";
      }
    }
  }
}
function actionMinus4(item) {
  for (let i = 0; i < currentRandomThings.length; i++) {
    if (
      currentRandomActionThings[1].match(item) !== null &&
      item === patternPencil
    ) {
      document.querySelector(".errorTask").innerHTML =
        "Помилка. Не можливо з'їсти олівці.";
      document.querySelector(".answer").style.display = "none";
    } else {
      if (
        currentRandomThings[i].match(item) !== null &&
        currentRandomActionThings[1].match(item) !== null
      ) {
        let index = currentRandomThings.indexOf(currentRandomThings[i]);

        switch (index) {
          case 0:
            calculationResult2 = randomNumber4 - randomNumber1Active2;

            break;
          case 1:
            calculationResult2 = randomNumber5 - randomNumber1Active2;

            break;
          case 2:
            calculationResult2 = randomNumber6 - randomNumber1Active2;

            break;
          case 3:
            calculationResult2 = randomNumber7 - randomNumber1Active2;

            break;
        }
        if (calculationResult2 < 0) {
          document.querySelector(".answer").style.display = "none";
          document.querySelector(".errorTask").innerHTML =
            "Помилка.<br>Від'ємне значення, так як хлопчик не може забрати більше ніж лежить на столі";
        }
      }
    }
  }
}
function actionPlus2(item) {
  for (let i = 0; i < currentRandomThings.length; i++) {
    if (
      currentRandomThings[i].match(item) !== null &&
      currentRandomActionThings[1].match(item) !== null
    ) {
      let index = currentRandomThings.indexOf(currentRandomThings[i]);

      switch (index) {
        case 0:
          calculationResult2 = randomNumber4 + randomNumber1Active2;

          break;
        case 1:
          calculationResult2 = randomNumber5 + randomNumber1Active2;

          break;
        case 2:
          calculationResult2 = randomNumber6 + randomNumber1Active2;

          break;
        case 3:
          calculationResult2 = randomNumber7 + randomNumber1Active2;

          break;
      }
    }
  }
}

switch (currentActionBoy) {
  case "з'їв":
    actionMinus(patternApple);
    actionMinus(patternOrange);
    actionMinus(patternMandarin);
    actionMinus(patternPencil);

    actionMinus4(patternApple);
    actionMinus4(patternOrange);
    actionMinus4(patternMandarin);
    actionMinus4(patternPencil);
    break;

  case "забрав":
    actionMinus3(patternApple);
    actionMinus3(patternOrange);
    actionMinus3(patternMandarin);
    actionMinus3(patternPencil);

    actionMinus2(patternApple);
    actionMinus2(patternOrange);
    actionMinus2(patternMandarin);
    actionMinus2(patternPencil);

    break;
  case "поклав":
    actionPlus(patternApple);
    actionPlus(patternOrange);
    actionPlus(patternMandarin);
    actionPlus(patternPencil);

    actionPlus2(patternApple);
    actionPlus2(patternOrange);
    actionPlus2(patternMandarin);
    actionPlus2(patternPencil);

    break;
}
let totalResult;
if (currentRandomActionThings[1].match(patternPencil) !== null) {
  totalResult = randomNumber1Active1;
} else if (currentRandomActionThings[0].match(patternPencil) !== null) {
  totalResult = randomNumber1Active2;
} else {
  totalResult = randomNumber1Active1 + randomNumber1Active2;
}

let fruitall = "";
function showFruit(elem, item) {
  switch (elem) {
    case 1:
      if (item.match(patternApple) != null) {
        item = "яблукo";
      } else if (item.match(patternOrange) != null) {
        item = "апельсин";
      } else if (item.match(patternMandarin) != null) {
        item = "мандарин";
      } else if (item.match(patternMandarin) != null) {
        item = "олівець";
      }
      break;
    case 2:
    case 3:
    case 4:
      if (item.match(patternApple) !== null) {
        item = "яблука";
      } else if (item.match(patternOrange) != null) {
        item = "апельсина";
      } else if (item.match(patternMandarin) != null) {
        item = "мандарина";
      } else if (item.match(patternMandarin) != null) {
        item = "олівеця";
      }
      break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
      if (item.match(patternApple) !== null) {
        item = "яблук";
      } else if (item.match(patternOrange) != null) {
        item = "апельсинів";
      } else if (item.match(patternMandarin) != null) {
        item = "мандаринів";
      } else if (item.match(patternMandarin) != null) {
        item = "олівеців";
      }
      break;
  }
  return item;
}
switch (totalResult) {
  case 1:
    fruitall = "фрукт";

    break;
  case 2:
  case 3:
  case 4:
    fruitall = "фрукта";

    break;
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
  case 11:
  case 12:
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
  case 18:
  case 19:
  case 20:
    fruitall = "фруктів";

    break;
}

answer1 = `Хлопчик ${currentActionBoy} ${totalResult} ${fruitall}.<br> На столі залишилось ${calculationResult} ${showFruit(
  calculationResult,
  currentRandomAction1
)}. `;
par3.innerHTML = answer1;
let flag1 = true;
document.querySelector(".btn1").addEventListener("click", function () {
  if (flag1) {
    document.querySelector(".answerMain").style.display = "block";
  } else {
    document.querySelector(".answerMain").style.display = "none";
  }
  flag1 = !flag1;
});
