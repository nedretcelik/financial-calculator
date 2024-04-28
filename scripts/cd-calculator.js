
function init() {
    const calculateDepositBtn = document.getElementById("calculateDepositBtn");

    calculateDepositBtn.onclick = calculationOfCD;


}

window.onload = init;

function calculationOfCD() {
    const initialDepositInput = Number(document.getElementById("initialDepositInput").value);
    const yearsInput = Number(document.getElementById("yearsInput").value);
    const interestRateInput = Number(document.getElementById("interestRateInput").value);
    let totalBalance = document.getElementById("totalBalance");
    let totalInterestEarned = document.getElementById("totalInterestEarned");

    const months = yearsInput *12;
    const interestRate = interestRateInput /100;

    let totalBalanceCalculation = initialDepositInput *( Math.pow((1+interestRate),yearsInput));
    let totalInterestEarnedCalculation=  totalBalanceCalculation - initialDepositInput;

    totalBalance.innerText = totalBalanceCalculation.toFixed(2);
    totalInterestEarned.innerText = totalInterestEarnedCalculation.toFixed(2);

    debugger
    console.log(totalBalanceCalculation);


}











/* 


Example: If you deposit $1,000 in a CD that earns 1.75% interest and matures in 5 years,
your CD's ending balance will be $1,092.62 and you would have earned $92.62 in interest


FV is the future value of the investment.
P is the principal amount (the initial deposit).
r is the annual interest rate (expressed as a decimal).
n is the number of years the money is invested for.

FV=P×(1+r)^n

P=$1,000 (the initial deposit)
1.75%=0.0175 (the annual interest rate as a decimal)
n=5 (the number of years)
FV=$1,000×(1+0.0175)^5

FV=$1,000×(1.0175)^5
FV≈$1,092.62


InterestEarned=FV−P
InterestEarned=$1,092.62−$1,000

 */