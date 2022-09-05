// const mainContainer = document.querySelector('.rating-box');
// const thankYouContainer = document.querySelector('.thank-you');
// const submitButton = document.getElementById('submit');
// const rateAgainBtn = document.getElementById('rate-again');
// const rating = document.getElementById('result')

let sumBill = 0;
let perc = 0;
let peopleNum = 0;
let tip = 0;
let tipTotal = 0;


const tipPersonAmount = document.querySelector('.tip-amount_money')
const totalTipAmount = document.querySelector('.total_money')

totalTipAmount.innerHTML = '$0.00';
tipPersonAmount.innerHTML = '$0.00';


function showTipPerson() {
    if (tip > 0) {
    tipPersonAmount.innerHTML = '$' + tip;
    } else {
    tipPersonAmount.innerHTML = '$0.00';
    }
}

function showTipTotal() {
    if (tipTotal > 0) {
    totalTipAmount.innerHTML = '$' + tipTotal;
    } else {
    totalTipAmount.innerHTML = '$0.00';
    }
}


// function showTipPerson() {

// }


// Bill amount

function getVal() {
    const valBill = document.getElementById('bill').value;
    sumBill = Number(valBill);
    sumTotalTip();
    sumTipPerson();
    showTipPerson();
    showTipTotal();
}

// Acvite status on list button

$(document).ready(function() {
  $('.percentage-list_item').click(function() {
    $(this).children().addClass('active').parent().siblings().children().removeClass('active');
  });
});

// Tip % from button

const percButton = document.querySelectorAll('.list-btn')
percButton.forEach((percButt) => {
    percButt.addEventListener('click', () => {
        perc = percButt.value / 100
    })
})

// Percent amount from input
function getValPerc() {
    const valPerc = document.getElementById('percentageInput').value;
    perc = valPerc / 100;
    sumTotalTip();
    sumTipPerson();
    showTipPerson();
    showTipTotal();
}

// Amount of people

function getValPeople() {
    const valPeople = document.getElementById('people').value;
    peopleNum = valPeople / 1;
    sumTotalTip();
    sumTipPerson();
    showTipPerson();
    showTipTotal();
}

// Total tip amount

function sumTotalTip() {
    if (sumBill > 0 && perc > 0) {
        tipTotal = Math.floor(sumBill * perc);
    } else {
        tipTotal = 0;
    }
}

// Tip per person amount

function sumTipPerson() {
    if (sumBill > 0 && perc > 0 && peopleNum > 0) {
        tip = Math.floor((sumBill * perc) / peopleNum);
    } else {
        tip = 0;
    }
}



