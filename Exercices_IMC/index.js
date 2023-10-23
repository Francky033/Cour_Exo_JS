// 1 on recupere la balise htlm et on la stocke dans une variable en js
const validationBtn = document.querySelector(".validation-btn")
const inputs = document.querySelectorAll(".bmi-input")
const resultIMC = document.querySelector(".bmi-value")

// 2 on declare un clic sir le bouton, a chaque fois que l'on clique, on exécute la fonction associé
validationBtn.addEventListener('click', onBtnClick)

function onBtnClick() {
    const imcResult = inputs[1].value/((inputs[0].value/100)**2)
    console.log(imcResult)
if (inputs[0].value<0 || inputs[1].value<0 ) {
    
    console.log(`Impossible de calculer votre IMC`)
}
}

