
function init() {
    const calculateAnnuityBtn = document.getElementById("calculateAnnuityBtn");

    calculateAnnuityBtn.onclick = annuityCalculator;
}

window.onload = init;


function annuityCalculator() {
    const paymentAmountInput = Number(document.getElementById("paymentAmountInput").value);
    const numberOfYearsInput = Number(document.getElementById("numberOfYearsInput").value);
    const interestRateInput = Number(document.getElementById("interestRateInput").value);
    let presentValue = document.getElementById("presentValue");

    let months = numberOfYearsInput * 12;
    let interestRate = interestRateInput/ 100 / 12

    let annuityCalculation = paymentAmountInput * (1-Math.pow((1+interestRate),-months)) / interestRate;

    presentValue.innerText = "$" + annuityCalculation;


}