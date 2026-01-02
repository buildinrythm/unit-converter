/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const getUserInput = document.getElementById("user-input")
const convertBtn = document.getElementById("convertBtn")
let userInput = getUserInput


convertBtn.addEventListener("click", function(){
    console.log(userInput.value)
})