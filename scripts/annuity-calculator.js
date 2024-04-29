
function init() {
    const calculateAnnuityBtn = document.getElementById("calculateAnnuityBtn");
    const startOverBtn = document.getElementById("startOverBtn");

    calculateAnnuityBtn.onclick = annuityCalculator;

    startOverBtn.onclick = startOVer;
}

window.onload = init;


function startOVer() {
    const paymentAmountInput = document.getElementById("paymentAmountInput");
    const numberOfYearsInput = document.getElementById("numberOfYearsInput");
    const interestRateInput =document.getElementById("interestRateInput");
    let presentValue = document.getElementById("presentValue");

    paymentAmountInput.value = ""
    numberOfYearsInput.value = ""
    interestRateInput.value = ""

    presentValue.innerText = "$0";


}


function annuityCalculator() {
    const paymentAmountInput = Number(document.getElementById("paymentAmountInput").value);
    const numberOfYearsInput = Number(document.getElementById("numberOfYearsInput").value);
    const interestRateInput = Number(document.getElementById("interestRateInput").value);
    let presentValue = document.getElementById("presentValue");

    let months = numberOfYearsInput * 12;
    let interestRate = interestRateInput/ 100 / 12

    let annuityCalculation = paymentAmountInput * (1-Math.pow((1+interestRate),-months)) / interestRate;

    presentValue.innerText = "$" + annuityCalculation.toFixed(2);


}