/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const userInput = document.getElementById("user-input")
const convertBtn = document.getElementById("convertBtn")
const conversionParas = document.querySelectorAll('.unit-measured');




convertBtn.addEventListener("click", function(){
    conversionParas[0].innerHTML = `<p>${userInput.value} meters = ${(metersToFeet().toFixed(2))} feet | ${userInput.value} feet = ${feetToMeters().toFixed(2)} meters</p>`
    conversionParas[1].innerHTML += `<p>${userInput.value} litres = ${litresToGallons()} gallons | 20 feet = 6.096 meter</p>`
    conversionParas[2].innerHTML += `<p>20 meters = 65 feet | 20 feet = 6.096 meter</p>`

})

function metersToFeet(){
    return (userInput.value * 3.281)
}

function feetToMeters(){
    return userInput.value * 0.3048
}

function litresToGallons(){
return userInput.value * 0.264
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


