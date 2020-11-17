// Your code goes in here
'use strict';
const amountInput = document.getElementById('total-amount');
const serviceRateInput = document.getElementById('service-rate');
const numberOfPeopleInput = document.getElementById('number-of-people');
const calculateButton = document.getElementById('calculate-button');
const eachForPlural = document.getElementById('plural-people');
const displayTip = document.getElementById('tip-amount');
const moneySymbol = document.getElementById('money-symbol');
const outputMoneySymbol = document.getElementById('amount-sign');
const footerTotalAmount = document.getElementById('total-amount-brief');
const footerTipAmount = document.getElementById('tip-brief');
const footerSumAll = document.getElementById('total-brief');
const billDetails = document.querySelector('.bill-detail p');

// function 
function calculateTip(){
    let totalAmount = Number(amountInput.value);
    let serviceRate = Number(serviceRateInput.value)/100;
    let numberOfPeople = Number(numberOfPeopleInput.value);
    let moneySign =moneySymbol.value;
    let tipAmount = (totalAmount * serviceRate)/numberOfPeople;
    tipAmount =tipAmount.toFixed(2);
    displayTip.innerText = tipAmount ; 
    
    // append the symbol of dollar or euro and display brief of the total amount + the tip 
    outputMoneySymbol.textContent = moneySign;
    footerTotalAmount.textContent = totalAmount;
    footerTipAmount.textContent=tipAmount;
    footerSumAll.textContent= totalAmount + (tipAmount*numberOfPeople);
    billDetails.style.visibility='visible';

    //If there's only 1 person who shares the bill, output only the tip amount (omit the "each")
    const plural = numberOfPeople >= 2 ? eachForPlural.style.visibility = 'visible' : eachForPlural.style.visibility = 'hidden' ;
};

calculateButton.addEventListener('click',function checkInput(){
    //If any of the input fields are empty when the button is clicked, call an alert that says: "You need to fill in all the fields!"
    if(amountInput.value === "" || serviceRateInput.value === "" || numberOfPeopleInput.value === ""){
        alert('Please fill the empty fields');
    }else{
        calculateTip(); // call back the function that calculate the tip
    }
});