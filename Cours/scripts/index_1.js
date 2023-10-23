// Présentation des operateurs arithmétiques
/* commentaire sur plusieurs lignes */
/*
* Variante des comentaires sur plusieurs ligne */

var myNumber1 = 3
var myNumber2 = 4

var myResult = myNumber1 * myNumber2

console.log(myResult)

// Déclaration moderne (en ES6, javascript depuis 2015) de variables

/*
*"const" est une variables constante
* "let" est une variables qui peut etre changeante
* (/ ou * ou - ou +) + (=) permet d'ajouter un nombre a la valeur "let" 
* (++) egale a 1 et (--) egale a -1
*/

const myNb1 = 9
let myNb2 = 9

const res = myNb1 * myNb2

console.log(res)

//LES CHAINES DE CARACTERES(string) ("")('')(``)

let myName = "Franck"
const lastname = "NGONG"
const age = 27
myName +=' '
myName += lastname
myName  += ' ' + age +'ans'

console.log(myName)

// LES BOOLEENS
/* (!) est une negation a mettre devant le mot
* condition : if(variable){console.log(resltat)}
  else{console.log(resultat)}

*/

const myBoolean1 = true 
const myBoolean2 = false

if(myBoolean2){
    console.log('je suis passé dans ma conditin')
}
console.log('je suis a la fin de mon script')

// Exercice 

const bigNb1 = 100
const bigNb2 = 400
const resultComparison = bigNb1 > bigNb2
if(resultComparison){
    console.log(bigNb1)
} else{
    console.log(bigNb2)
}

// écrire la condition pour afficher le plus grand nombre

//Exercice 2

const firstname = "Olivier"
// const firstname2 = "Hamid"
// const firstname3 = "Pauline"

if (firstname == "Hamid") {
    console.log('bonjour mon cher ' + firstname)
} else if (firstname == "Pauline") {
    console.log('bonjour ma chère ' + firstname)
} else {
    console.log('bonjour ' + firstname + ', je ne connaissais pas ton prénom avant')
}

    // VARIABLES COMPLEXE : LES TABLEAUX (Array)

    let arr1 = [3, 5, 12, 204.5, 'hello', false ,'wolrd']
    let arrResult1 = `${arr1[4]} - ${arr1[6]}`

    console.log(arrResult1)

    // on teste le bolean du tableau

    let arrResult2 

    // if(arr1[5]){
    //     arrResult2 = `${arr1[4]} - ${arr1[6]}`
    // } else{
    //     arrResult2 = arr1[1] + arr1[3]
    // }

    // Exrcice - changer la valeur de 204.5 en 1990 par soustraction de 14.5

   arr1[3] -= 14.5

    console.log(arr1)

    // VARIABLES COMPLEXE : LES OBJETS

    let obj1 = {
        maPremierePropriete : 12,
        maDexiemePropriete : 14,
        prop3: 11,
        prop9: 'hello'
    }
    
    console.log(obj1.prop9)

    //Exercice - construire une chaine de caractere : 'Je m'appele...j'ai ... et j'habite a...'

    let indentity = {
        firstname: 'Franck',
        lastname: 'NGONG',
        age: 27,
        town:'Audenge'
    }

    console.log(
        `je m'appele ${indentity.firstname} ${indentity.lastname} j'ai ${indentity.age}ans et j'habite a ${indentity.town}`
    )


    // Exercice2

    let indentity2 = {
        firstname: 'Justine',
        lastname: 'DUDEZ',
        age: 25,
        town:'Audenge'
    }

    let arrIndentities = [indentity, indentity2]

    arrIndentities[1].lastname


