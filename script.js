const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$&*<>?/';
let passwordOne = document.getElementById("passwordOne")
let passwordTwo = document.getElementById("passwordTwo")
let resultOne = ' ';
let resultTwo = ' ';
let lengthOne = Math.floor(Math.random() * 15) + 7;
let lengthTwo = Math.floor(Math.random() * 15) + 7;

function generatePassword() {
    resultOne = ' ';
    resultTwo = ' ';
    for(let i = 0; i < lengthOne; i++){
        resultOne += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    for(let i = 0; i < lengthTwo; i++){
        resultTwo += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    passwordOne.textContent = resultOne;
    passwordTwo.textContent = resultTwo;
}




