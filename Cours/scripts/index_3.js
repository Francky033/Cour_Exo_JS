const monday = "Lundi"
const tuesday = "Mardi"

displayMessage(monday)
displayMessage(tuesday)
displayMessage('samedi')
displayMessage(30)

function displayMessage(jour) {
    let hello = "Salut"
    console.log(`${hello} c'est ${jour}`) 
}

const person_1 = {
    nom : "Pierre",
    hasCar : true,
    hasBike : true,
    isSick : true
}

const person_2 = {
    nom : "Melanie",
    hasCar : true,
    hasBike : false,
    isSick : false
}

const person_3 = {
    nom : "Paul",
    hasCar : false,
    hasBike : true,
    isSick : true
}

const person_4 = {
    nom : "Sophie",
    hasCar : false,
    hasBike : false,
    isSick : false
}

//Intergrer le parametre person aux 2 foctions pour rendre la chaine de caractere dynamique

canGoToUniversity(person_3)
canGoToTopOfMountain(person_4)


function canGoToUniversity(person) {
    if (person.hasBike || person.hasCar) {
        console.log(`${person.nom} peut aller à l'université`)
    } else {
        console.log(`${person.nom} ne peut pas aller à l'université`)
    }
}

function canGoToTopOfMountain(person) {
    if ((person.hasBike && person.hasCar) && !person.isSick) {
        console.log(`${person.nom} peut aller a au sommet de la montagne`)
    } else {
        console.log(`${person.nom} ne peut pas aller a au sommet de la montagne`)
    }
}

/**
 * LES BOUCLES
 */
// for (let i= le debut; i<= la fin; i+= de combien les nombre avance  )


// for (let i =0; i<= 10; i+=2) {
//     console.log('Salut ' + i);
    
// }

let arr = [3, 5, 12, 8, 1, 4]

// for (let i = 0; i < arr.length; i++) {
//     console.log('Elementt courant : ' +arr[i])
    
// }

//Ajouter un if dans la boucle pour n'afficher que les éléments dont la valeur est >=5

for (let i = 0; i < arr.length; i++) {
    // if(arr[i]>=5)
    if (arr[i] % 3== 0) {
        console.log('Elementt courant : ' +arr[i])
    }
    
}


let numbers = [3, 5, 12, 8, 1, 4]

// écrire une boucle for pour additionner tous les élément d'un tableau

let sum = 0

for(let n= 0; n < numbers.length; n++){
    sum += numbers[n] 
    }
 console.log(sum)

// Afficher uniquement les nombres strictement supérieur à 4

let filterednumbers = []

// for(let m =0; m< numbers.length; m++){
//     if (numbers[m] > 4) {  
//         filterednumbers.push(numbers[m])
//     }

// }

 


 // Encapsuler le script presedent dans une fonction et rajouter le parametre limit

 const arrayResult= filterArray(4)
console.log(filterednumbers)
 function filterArray(limit) {
    for(let m =0; m< numbers.length; m++){
        if (numbers[m] > limit) {  
            filterednumbers.push(numbers[m])
        }
    
    }

 }

 //Ecrire une boucle for pour afficher dans un tableau toute les personners malades(IsSick == true)

 const person =[ {
    nom : "Pierre",
    hasCar : true,
    hasBike : true,
    isSick : true
},

{
    nom : "Melanie",
    hasCar : true,
    hasBike : false,
    isSick : false
},

{
    nom : "Paul",
    hasCar : false,
    hasBike : true,
    isSick : true
},

 {
    nom : "Sophie",
    hasCar : false,
    hasBike : false,
    isSick : false
}]

const sickResult= sick(person)

function sick(personsArr) {
    let sickPersons = []
    for(let p=0; p<personsArr.length; p++ ){
    if (personsArr[p].isSick ) {
        sickPersons.push(personsArr[p].nom)
    }
}
console.log(sickPersons)
}
