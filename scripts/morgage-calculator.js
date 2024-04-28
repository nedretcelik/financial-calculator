"use strict";


function init() {
    const calculateBtn = document.getElementById("calculateBtn");
    const startOverBtn = document.getElementById("startOverBtn");

    calculateBtn.onclick = monthlyPaymentCalculator;

    startOverBtn.onclick = startOver;   
}

window.onload = init;

function startOver() {
    const principalInput = document.getElementById("principalInput");
    const yearInput = document.getElementById("yearInput");
    const interestRateInput = document.getElementById("interestRateInput");

    const monthlyPayment = document.getElementById("monthlyPayment");
    const totalPrincipal = document.getElementById("totalPrincipal");
    const interestPaid = document.getElementById("interestPaid");

    principalInput.value = "";
    yearInput.value = "";
    interestRateInput.value = "";

    monthlyPayment.innerText = "$0";  
    totalPrincipal.innerText = "$0";   
    interestPaid.innerText = "$0";   
}

function monthlyPaymentCalculator() {
    const principalInput = Number(document.getElementById("principalInput").value);
    const yearInput = Number(document.getElementById("yearInput").value);
    const interestRateInput = Number(document.getElementById("interestRateInput").value);
    let monthlyPayment = document.getElementById("monthlyPayment");
    let interestPaid = document.getElementById("interestPaid");

    const months = yearInput *12;
    let interestRate = (interestRateInput/100) /12;

    let monthlyPaymentCalculation = principalInput * ((interestRate * Math.pow((1 + interestRate), months))/(Math.pow((1 + interestRate), months) - 1))
    let totalInterestPaymentCalculation = (monthlyPaymentCalculation * months) - principalInput;

    monthlyPayment.innerText = "$" + monthlyPaymentCalculation.toFixed(2);
    totalPrincipal.innerText = "$" + principalInput;
    interestPaid.innerText = "$" + totalInterestPaymentCalculation.toFixed(2);   
}


 // formula = principal * ((((interestRateInput/100)/12)* Math.pow((1 + ((interestRateInput/100)/12)), (year*12)))/(Math.pow((1 + ((interestRateInput/100)/12)), (year*12)) - 1))

/* 
 Monthly Payment Formula
 M = P x (r(1+r)^n)/(1+r)-1

  p = principalInput
 r = (interestRateInput / 100) / 12 --- interestRate
 n = yearInput * 12 -- months

 Total interest Payment Calculation
(M x n) - p

(Monthly payment * months ) - principalInout 


*/





