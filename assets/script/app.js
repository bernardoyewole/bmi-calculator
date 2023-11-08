'use strict';
// Utility functions
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}  
  
function select(selector, parent = document) {
    return parent.querySelector(selector);
}

// Main 
const height = select('.height');
const weight = select('.weight');
const result = select('.result span');
const calculate = select('.calculate');
const response = select('.result');

onEvent('load', window, () => {
    height.value = '';
    weight.value = '';
});

function getBmi(heightnum, weightnum) {
    let bmi = weightnum * 703/ (heightnum * heightnum);
    return bmi;
}

function isValid(...arg) {
    if (arg !== '' && !isNaN(Number.parseFloat(arg))) {
        return true;
    }
    else {
        result.innerText = "Please, enter a valid height and weight";
    }
}

onEvent('click', calculate, () => {
    let heightNum = Number.parseFloat(height.value);
    let weightNum = Number.parseFloat(weight.value);

    if (isValid(heightNum, weightNum)) {
        let bmi = getBmi(heightNum, weightNum);
        result.innerText = `${bmi.toFixed(1)}`;
    }
});


