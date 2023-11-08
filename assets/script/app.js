'use strict';
// Utility functions
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}  
  
function select(selector, parent = document) {
    return parent.querySelector(selector);
}

// Main 
const heightFeet = select('.height-feet');
const heightInches = select('.height-inches');
const weight = select('.weight');
const result = select('.result span');
const calculate = select('.calculate');
const response = select('.result');

console.log(heightFeet.value, heightInches.value);

onEvent('load', window, () => {
    heightFeet.value = '';
    heightInches.value = '';
    weight.value = '';
});

function getBmi(heightnum, weightnum) {
    let bmi = weightnum * 703/ (heightnum * heightnum);
    return bmi;
}

function isValid(arg) {
    if (arg !== '' && !isNaN(Number.parseFloat(arg))) {
        return true;
    }
    else {
        result.innerText = "Enter a valid height and weight";
    }
}

onEvent('click', calculate, () => {
    let heightNum = (Number.parseFloat(heightFeet.value) * 12) + Number.parseFloat(heightInches.value);
    let weightNum = Number.parseFloat(weight.value);

    if (isValid(heightNum) && isValid(weightNum)) {
        result.innerText = `${getBmi(heightNum, weightNum).toFixed(1)}`;
        console.log(heightNum, weightNum, getBmi(heightNum, weightNum))
    }
});


