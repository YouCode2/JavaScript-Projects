const LoanAmount = document.getElementById('loan-amount');

const InterestRate = document.getElementById('interest-rate');

const LoanTenure = document.getElementById('loan-tenure');

const Result = document.getElementById('result');

const Calculate = document.getElementById('btn');

function calculateEMI() {
    const p = LoanAmount.value;
    const r = InterestRate.value / 1200;
    const n = LoanTenure.value

    emicalc = (p * r * (1 + r) ** n / ((1 + r) ** n - 1)).toFixed(2)

    Result.innerHTML = `Your Monthly EMI is ₹ ${emicalc}`
}

Calculate.addEventListener('click', calculateEMI);



