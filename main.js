const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

let randomNumber = Math.round(Math.random() * 10)
let xAtempts = 1;

function handleTryClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    if (Number(inputNumber.value) == randomNumber) {
        screen1.classList.add("hide")
        screen2.classList.remove("hide")

        screen2.querySelector("h2").innerText = `Acertou em ${xAtempts} ${xAtempts == 1 ? 'tentativa' : 'tentativas'}`
    }
    inputNumber.value = ""
    xAtempts++
}

// eventos

const buttonTry = document.querySelector("#buttonTry")
const buttonReset = document.querySelector("#buttonReset")

buttonTry.addEventListener('click', handleTryClick)

buttonReset.addEventListener('click', function () {
    screen1.classList.remove("hide")
    screen2.classList.add("hide")

    xAtempts = 1
    randomNumber = Math.round(Math.random() * 10)

})