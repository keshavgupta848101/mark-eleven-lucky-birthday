// const dateOfBirth = document.querySelector("#date-of-birth");
// const luckyNumber = document.querySelector("#lucky-number");
// const checkButton = document.querySelector("#calculate-number");
// const displayMessage = document.querySelector("#output-container");

// const calculateSum = (date) => {
//     let sum = 0;
//     date = date.replaceAll("-", "");
//     for (let digit of date) {
//         sum = sum + Number(digit);
//     }
//     return sum;
// };

// const checkIsNumberLucky = (sumOfDate, numberToCheck) => {
//     console.log(sumOfDate, numberToCheck);
//     if (sumOfDate % numberToCheck === 0) {
//         return message(`${numberToCheck} is a lucky number!! 🥳 🥳 🥳 `);
//     }
//     message(`${numberToCheck} is not that lucky 😕`);
// };

// function message(messageText) {
//     displayMessage.innerText = messageText;
// }

// checkButton.addEventListener("click", () => {
//     const date = dateOfBirth.value;
//     const numberToCheck = luckyNumber.value;
//     if (date && numberToCheck) {
//         const sumOfDate = calculateSum(date);
//         checkIsNumberLucky(sumOfDate, numberToCheck);
//     } else {
//         message("Please enter both the fields");
//     }
// });


const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

function compareValues(sum, luckyNumber) {
    if (sum % luckyNumber === 0) {
        outputBox.innerText = "Your birthday is lucky :)";

    } else {
        outputBox.innerText = "Your birthday is not lucky :(";
    }
}

function checkBirthDateIsLucky() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if (sum && dob)
        compareValues(sum, luckyNumber.value)
    else
        outputBox.innerText = "Please enter both the fields";
}

function calculateSum(dob) {
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for (var index = 0; index < dob.length; index++) {
        sum = sum + Number(dob.charAt(index));
    }
    return sum;
}

checkNumberButton.addEventListener('click', checkBirthDateIsLucky)