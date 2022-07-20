//define UI variables
let form = document.querySelector('#form-loan');
let amount = document.querySelector('#amount');
let interest = document.querySelector('#interest');
let year = document.querySelector('#year');
let monthlyPayment = document.querySelector('#monthly-payment');
let totalPayment = document.querySelector('#total-payment');
let interestPayment = document.querySelector('#interest-payment');
let card = document.querySelector('.card-body');
let heading = document.querySelector('.heading');


loadAllEvents();

//load all events
function loadAllEvents(){
    form.addEventListener('submit', calculateLoan);
}

//calculate loan
function calculateLoan(e){
    e.preventDefault();
    let intAmount = parseFloat(amount.value);
    let intInterest = parseFloat(interest.value);
    let intMonth = parseFloat(year.value) * 12;

    //from specified formula
    let calInterest = (intAmount * intInterest * (intMonth + 1)) / 2400;
    let calMonthlyPayment = (calInterest + intAmount) / intMonth;
    let calTotalPayment = calInterest + intAmount;

    if(isFinite(intAmount)){
        monthlyPayment.value = calMonthlyPayment.toFixed(2);
        totalPayment.value = calTotalPayment.toFixed(2);
        interestPayment.value = calInterest.toFixed(2);
    }else{
        showError('Please check the numbers');
    }
}

//show error: for uncertain numbers
function showError(error){
    let alertError = document.createElement('div');
    alertError.className = 'alert alert-danger';
    alertError.textContent = error;
    card.insertBefore(alertError, heading); //inserts before heading

    setTimeout(clearError, 3000);
}

function clearError(){
    document.querySelector('.alert').remove();
}


