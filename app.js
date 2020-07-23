// Selectors
const totalBill = document.querySelector(".total-bill");
const totalPeople = document.querySelector(".total-people");
const calculateButton = document.querySelector(".calculate-tip");
const resultsDiv = document.querySelector(".results");

// Event Listeners
calculateButton.addEventListener("click", calculateTip);

// Functions
function calculateTip(event) {
  // Prevent default behavior of button
  event.preventDefault();

  if (totalBill.value === "") {
    alert("Vyplň prosím pole 'Zadejte výši útraty'");
  } else {
    // TIP Result number
    let tipNumber = Math.round(parseInt(totalBill.value) * 0.1);
    // Total Result number
    let totalNumber = tipNumber + parseInt(totalBill.value);
    // Split Result number
    let splitNumber;
    if (totalPeople.value === "") {
      splitNumber = totalNumber;
    } else {
      splitNumber = Math.round(totalNumber / parseInt(totalPeople.value));
    }

    // Create TIP Result
    const tipResult = document.createElement("p");
    tipResult.innerText = `Dýško: ${tipNumber} Kč`;
    // Create TOTAL Result
    const totalResult = document.createElement("p");
    totalResult.innerText = `Celkem: ${totalNumber} Kč`;
    totalResult.classList.add("total");
    // Create SPLIT Result
    const splitResult = document.createElement("p");
    splitResult.innerText = `Každý zaplatí ${splitNumber} Kč`;
    // Remove previous tips
    resultsDiv.innerHTML = "";
    // Append results into resultsDiv
    resultsDiv.appendChild(tipResult);
    resultsDiv.appendChild(totalResult);
    resultsDiv.appendChild(splitResult);
    // Reset Input Bill Value
    totalBill.value = "";
    totalPeople.value = "";
  }
}
