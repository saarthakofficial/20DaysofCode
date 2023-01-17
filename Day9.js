const splitButton = document.getElementById("split-button");
const totalBillInput = document.getElementById("total-bill");
const numPeopleInput = document.getElementById("num-people");
const autoSplitCheckbox = document.getElementById("auto-split");
const payeeInputs = document.getElementById("payee-inputs");
const result = document.getElementById("result");
const due = document.getElementById("due");

let payeeInputElements = [];

// Function to create payee input elements
function createPayeeInputs() {
  payeeInputElements = [];
  payeeInputs.innerHTML = "";
  for (let i = 0; i < numPeopleInput.value; i++) {
    let inputRow = document.createElement("div");
    inputRow.classList.add("input-row");
    
    let payeeName = document.createElement("input");
    payeeName.type = "text";
    payeeName.placeholder = `Payee Name`;
    payeeName.classList.add("payee-name");
    inputRow.appendChild(payeeName);

    let payeeAmount = document.createElement("input");
    payeeAmount.type = "number";
    payeeAmount.placeholder = `Payee ${i + 1} Amount`;
    payeeAmount.classList.add("payee-amount");
    inputRow.appendChild(payeeAmount);
    payeeInputs.appendChild(inputRow);
    payeeInputElements.push({ name: payeeName, amount: payeeAmount });
  }
  updateAutoSplit();
}

createPayeeInputs();

numPeopleInput.addEventListener("change", createPayeeInputs);

//Event listener on each payee amount input
payeeInputElements.forEach(function (input) {
  input.amount.addEventListener("input", function () {
    if (!autoSplitCheckbox.checked) {
      let totalDue = 0;
      payeeInputElements.forEach(function (input) {
        totalDue += parseFloat(input.amount.value);
      });
      due.innerHTML = `Due: $${totalDue.toFixed(2)}`;
    }
  });
});

autoSplitCheckbox.addEventListener("change", updateAutoSplit);

function updateAutoSplit() {
  let totalDue = 0;
  if (autoSplitCheckbox.checked) {
    payeeInputElements.forEach(function (input) {
    //   input.name.disabled = true;
      input.amount.disabled = true;
    });
    const totalBill = totalBillInput.value;
    const numPeople = numPeopleInput.value;
    const amountPerPerson = totalBill / numPeople;
    result.innerHTML = `Each person should pay $${amountPerPerson.toFixed(2)}.`;
    due.innerHTML = `Due: $${totalDue.toFixed(2)}`;
  } else {
    payeeInputElements.forEach(function (input) {
    //   input.name.disabled = false;
      input.amount.disabled = false;
    });
    let manualTotal = 0;
    payeeInputElements.forEach(function (input) {
      manualTotal += parseFloat(input.amount.value);
    });
    if (manualTotal !== parseFloat(totalBillInput.value)) {
      result.innerHTML = "Error: Manual payee values do not add up to total bill.";
    } else {
      result.innerHTML = "Manual payee values are valid.";
      payeeInputElements.forEach(function (input) {
        totalDue += parseFloat(input.amount.value);
      });
      due.innerHTML = `Due: $${totalDue.toFixed(2)}`;
    }
  }
}

splitButton.addEventListener("click", function () {
  if (!autoSplitCheckbox.checked) {
    let totalDue = 0;
    let manualTotal = 0;
    payeeInputElements.forEach(function (input) {
      manualTotal += parseFloat(input.amount.value);
      totalDue += parseFloat(input.amount.value);
    });
    if (manualTotal !== parseFloat(totalBillInput.value)) {
      result.innerHTML = "Error: Manual payee values do not add up to total bill.";
    } else {
      result.innerHTML = "Manual payee values are valid.";
      payeeInputElements.forEach(function (input) {
        result.innerHTML += `<br> ${input.name.value} will pay $${input.amount.value}`
      });
    }
  }
});
