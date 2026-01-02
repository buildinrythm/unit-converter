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
    conversionParas[0].innerHTML = `<p>${input} meters = ${(metersToFeet(input).toFixed(2))} feet | ${input} feet = ${feetToMeters(input).toFixed(2)} meters</p>`
    conversionParas[1].innerHTML += `<p>${input} litres = ${litresToGallons(input)} gallons | ${input} gallons = ${gallonsToLitres(input)} litres</p>`
    conversionParas[2].innerHTML += `<p>${input} kilos = ${kilosToPounds(input)} pounds | ${input} pounds = ${poundsToKilos(input)} kilos</p>`

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


/*function lengthConversion(){

    let toFeet = userInput.value * 3.281
    let feetToMeters = userInput.value * 0.3048

    renderLength(userInput, "Meters", toFeet, "Feet", userInput, "Feet", feetToMeters, "Meters")
}

function renderLength(userInput, unit1, conversion1, unit2, conversion2){
return `${Number(userInput.value)} ${unit1} = ${conversion1} ${unit2} | ${userInput.value} ${unit2} = ${Number(conversion2)} ${unit2} `
}
*/


