// select all dom
const buttons = document.querySelectorAll("#card_btn .btn");
const selectedPlayer = document.getElementById("selected");

// Button click and selected player update
let countTextFiled = document.getElementById("selected-player-count");
function addPlayer(playerName) {
  const li = document.createElement("li");
  li.innerText = playerName;
  selectedPlayer.appendChild(li);
  let countValue = +countTextFiled.innerText;
  countValue++;
  countTextFiled.innerText = countValue;
}

for (const button of buttons) {
  button.addEventListener("click", (e) => {
    if (selectedPlayer.children.length <= 4) {
      button.classList.add("disabled");
      addPlayer(button.parentNode.children[0].innerText);
    } else {
      button.classList.remove("disabled");
      //   addPlayer(button.parentNode.children[0].innerText);
      alert("5 Played already Selected");
      return;
    }
  });
}

// A common function for getInput value
function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldValue = +inputField.value;
  if (!isNaN(inputFieldValue)) {
    return inputFieldValue;
  } else {
    return false;
  }
}

function getValueOfElement(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

// Budgets add event listeners
document
  .getElementById("calculate_budget")
  .addEventListener("click", function () {
    const perPlayerBudget = getInputValue("per_player_budget");
    if (perPlayerBudget === false) {
      alert("Please Enter Budget Per Player Only in Number");
      return;
    }
    if (getInputValue("per_player_budget") > 0) {
      let totalPlayerExpense = perPlayerBudget * 5;
      getValueOfElement("player_expense", totalPlayerExpense);
      //erase input filed value
      eraseInputFiledValueByID("per_player_budget");
    } else {
      alert("Please Enter Budget Per Player");
    }
  });
document
  .getElementById("calculate_total_budget")
  .addEventListener("click", function () {
    const managerBudget = getInputValue("manager_budget");
    const coachBudget = getInputValue("coach_budget");
    if (managerBudget || coachBudget === false) {
      alert("Please add Manager Budget and also Coach Budget in number");
      return;
    }
    if (managerBudget > 0 || coachBudget > 0) {
      const perPlayerBudget = document.getElementById("player_expense");
      const playerTotalBudget = parseFloat(perPlayerBudget.innerText);

      let totalExpense = playerTotalBudget + managerBudget + coachBudget;
      getValueOfElement("player_total_expense", totalExpense);
      //   erase input filed Value
      eraseInputFiledValueByID("coach_budget");
      eraseInputFiledValueByID("manager_budget");
    } else {
      alert("Please add Manager Budget and also Coach Budget.");
    }
  });
// erase input filed value by id
function eraseInputFiledValueByID(id) {
  document.getElementById(id).value = "";
}
