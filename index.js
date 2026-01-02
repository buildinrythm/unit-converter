/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const userInput = document.getElementById("user-input")
const convertBtn = document.getElementById("convertBtn")
const conversionParas = document.querySelectorAll('.unit-measured');




convertBtn.addEventListener("click", function(){
    const input = Number(userInput.value)
    if(input === 1){
        conversionParas[0].innerHTML = `<p>${input} meter = ${(metersToFeet(input).toFixed(2))} feet | ${input} foot = ${feetToMeters(input).toFixed(2)} meters</p>` 
    } else {conversionParas[0].innerHTML = `<p>${input} meters = ${(metersToFeet(input).toFixed(2))} feet | ${input} feet = ${feetToMeters(input).toFixed(2)} meters</p>`}
    
    if(input === 1){
        conversionParas[1].innerHTML = `<p>${input} litre = ${litresToGallons(input).toFixed(2)} gallons | ${input} gallon = ${gallonsToLitres(input).toFixed(2)} litres</p>`
    } else {conversionParas[1].innerHTML = `<p>${input} litres = ${litresToGallons(input).toFixed(2)} gallons | ${input} gallons = ${gallonsToLitres(input).toFixed(2)} litres</p>`}
    
    if (input === 1){
        conversionParas[2].innerHTML = `<p>${input} kilo = ${kilosToPounds(input).toFixed(2)} pounds | ${input} pound = ${poundsToKilos(input).toFixed(2)} kilos</p>`
    } else {conversionParas[2].innerHTML = `<p>${input} kilos = ${kilosToPounds(input).toFixed(2)} pounds | ${input} pounds = ${poundsToKilos(input).toFixed(2)} kilos</p>`}
})

function metersToFeet(num){
    return (num * 3.281)
}

function feetToMeters(num){
    return num * 0.3048
}

function litresToGallons(num){
return num * 0.264
}

function gallonsToLitres(num){
    return num * 3.785
}

function kilosToPounds(num){
return num * 2.205
}

function poundsToKilos(num) {
    return num * 0.454;
}




