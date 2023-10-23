

let arrExample = [3, 5, 8, 12, 2, 43, 21, 2, 3, 42, 2, 5, 12, 555, 2, 43, 21, 2, 42, 2, 5, 12, 434, 45]

let readFirstElement = true;

let objExample = {
    prop1: 6,
    prop2: 3
}

// console.log(objExample.prop1)
// console.log(arrExample.length / 2, arrExample[arrExample.length / 2])

// Récupérer l'élément du tableau placé au milieu du tableau à l'aide de la propriété .length du tableau

//let middleIndex;

// if(arrExample.length %2==0){
//     middleIndex= arrExample.length/2
// }else {
//     middleIndex= (arrExample.length -1) / 2
// }
//+let elementInTheMiddle = arrExample[middleIndex]

// console.log(elementInTheMiddle)

//ou

// let middleIndex = Math.round(arrExample.length /2)
// let elementInTheMiddle = arrExample[middleIndex]
// console.log(elementInTheMiddle)

/**
 * --------------------------------------------------
 */

// let administrators = ['paul','Pierre','Mathilde']


// let newAdmin1 = 'Marianne'

// if (administrators.length >= 4) {
//     administrators.pop()
// }
//     administrators.push(newAdmin1)


// let newAdmin2 = 'Sophie'

// if (administrators.length >= 4) {
//     administrators.pop()
// }
//     administrators.push(newAdmin2)


// let newAdmin3 = 'Lucie'

// if (administrators.length >= 4) {
//     administrators.pop()  
// }
//  administrators.push(newAdmin3)

// Ajouter Marianne dans le tableaux administrator

//console.log(administrators)

// Ajouter utilisateur si la propriété admin est true

// const newAdmin1 = {
//     name: 'Marianne',
//     admin: true
// }

// const newAdmin2 = {
//     name: 'Sophie',
//     admin: false
// }

// const newAdmin3 = {
//     name: 'Lucie',
//     admin: true
//}

// if (newAdmin1.admin) {
//     administrators.push(newAdmin1.name)
// }

// if (newAdmin2.admin) {
//     administrators.push(newAdmin2.name)
// }

// if (newAdmin3.admin) {
//     administrators.push(newAdmin3.name)
// }

// addUserInArray(newAdmin1)
// addUserInArray(newAdmin2)
// addUserInArray(newAdmin3)

// function addUserInArray(user) {
//     if (user.admin) {
//         administrators.push(user.name)
//     }
// }

// console.log(administrators)

// Créer une fonction qui prend en paramètre un objet utilisateur et qui affiche en console "Bonjour ${nom} !"

// Ex : Bonjour Lucie !

// displayName(newAdmin1)
// displayName(newAdmin3)
// displayName(newAdmin2)


// function displayName(param) {
//    let strResult = `Bonjour `

//    if (param.admin) {
//     strResult += 'administratrice '
//    }

//    strResult += param.name + ' !'
//    console.log(strResult)
// }

// // Créer une fonction a 2 parametre qui affiche Bonjours Sophie et Lucie paar exemple

// buildSentence(newAdmin2, newAdmin3)
// function buildSentence(user1, user2) {
   
//     let strResult1 = 'Bonjour '
//     strResult1 += user1.name + ' et '  + user2.name
     
//     console.log(strResult1)
// }

const town1 = {
    nom: 'Bordeaux',
    population: 300000,
    superficy: 50
}

const town2 = {
    nom: 'Lyon',
    population: 500000,
    superficy: 48
}

const town3 = {
    nom: 'Paris',
    population: 2000000,
    superficy: 105
}

//Ecrire une fonction qui prend 2 parametres, et qui affiche dans la console, le nom de la villes la plus peuplé des 2

comparetown(town1, town2)

function comparetown(city1, city2) {
    if (city1.population > city2.population) {  
        return city1    
}else{
   return city2
}
}

// Ecrire la fonction qui retourne la somme de 2 parametre

// const nb1 = 5
// const nb2 = 7

// const sum = addTwoParameters(nb1, nb2)

// console.log(`Le résultat de la somme de ${nb1} et ${nb2} est égale a ${sum}`)

// function addTwoParameters(nb1, nb2){
//     const result = nb1 + nb2
//     return result
// }


// Ecrire la fonction qui retourne le produit des 2 parametres

const resultProduct = productOfParmeters(4,9)
console.log(resultProduct)

function productOfParmeters(mul1, mul2) {
    const result = mul1 * mul2
    return result 
}

