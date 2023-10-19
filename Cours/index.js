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

