const myScreen = document.getElementById('screen');
let numClick = document.getElementsByClassName('number');
const equal = document.getElementById('equal');
let operateClick = document.getElementsByClassName('operator');
let moneyClick = document.getElementsByClassName('money');

let firstNum = '';
let secondNum = '';
let tempOperation;
let total = 0;

equal.addEventListener('click', equalOperation);

for (let i = 0; i < numClick.length; i++) {
    numClick[i].onclick = (e) => numbers(e.target.textContent);
}

for (let i = 0; i < moneyClick.length; i++) {
    moneyClick[i].onclick = (e) => convert(e.target.value);
}

for (let i = 0; i < operateClick.length; i++) {
    operateClick[i].onclick = (e) => {
        if (!tempOperation && !firstNum && !secondNum) {
            alert('Please Enter your Numbers');
            return 0
        } else if (e.target.textContent === 'C') {
            clear();
            return 0
        } else if (tempOperation && secondNum) equalOperation();
        else if (tempOperation && !secondNum)
            alert('You choose more than one operation');
        tempOperation = e.target.textContent;
    };
}

function numbers(num) {
    if (tempOperation) {
        secondNum += num;
        myScreen.value = secondNum;
    } else {
        firstNum += num;
        myScreen.value = firstNum;
    }
}

function equalOperation() {

    switch (tempOperation) {
        case '-':
            subtract();
            break;
        case '+':
            add();
            break;
        case '/':
            divide();
            break;
        case '*':
            multiply();
            break;
        default:
            break;
    }

    myScreen.value = total;
    secondNum = '';
    firstNum = total;
    //total = 0;
    tempOperation = undefined;
}

function add() {
    total = Number.parseInt(firstNum) + Number.parseInt(secondNum);
}

function subtract() {
    total = Number.parseInt(firstNum) - Number.parseInt(secondNum);
}

function divide() {
    total = Number.parseInt(firstNum) / Number.parseInt(secondNum);
}

function multiply() {
    total = Number.parseInt(firstNum) * Number.parseInt(secondNum);
}

function convert(operation) {
    console.log(operation);
    switch (operation) {

        case 'sh-us':
            firstNum *= 0.31;
            break;
        case 'us-sh':
            firstNum /= 0.31;
            break;
        case 'sh-eu':
            firstNum *= 0.25;
            break;
        case 'eu-sh':
            firstNum /= 0.25;
            break;
    }
    myScreen.value = firstNum;
    secondNum = '';
    //firstNum = total;
    //total = 0;
    tempOperation = undefined;
}

function clear() {
    myScreen.value = 0;
    secondNum = '';
    firstNum = '';
    total = 0;
    tempOperation = undefined;
}
