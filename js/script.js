///////////////////////////////////////////////////////////////////////////////
//PALINDROMO
///////////////////////////////////////////////////////////////////////////////

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.

// const userWordPrompt = prompt('metti una parola')

// const result = isPalindroma(userWordPrompt)
// console.log(result);

// if(result === true){
//     console.log(`la parola da lei scelta è palindroma`);
// } else {
//     console.log('la parola da lei scelta non è palindroma');
// }



/**
 * determina se una parola è palindroma
 * @param {string} userWord 
 * return true | false
 */
// function isPalindroma(userWord){
//     let reverseWord = ''
//     let i = 1
//     while(i <= userWord.length){
//         reverseWord += userWord.charAt(userWord.length - i)
//         i++
//     }
//     // console.log(reverseWord);


//      let wordResult = false
//      if (userWord === reverseWord){
//          wordResult = true
//      }
//     return wordResult
// }

//////////////////////////////////////////////////////////////////////////////
//PALIEDISPALI
//////////////////////////////////////////////////////////////////////////////

const userChoice = prompt('scegli pari o dispari')
const userNumber = parseInt(prompt('scegli un numero da 1 a 5'))
const cpuNumber = rndnmb(1, 5)
console.log(userNumber, cpuNumber);
const sum = userNumber + cpuNumber
console.log(sum);
if (sum %2 === 0 && userChoice === 'pari') {
    console.log('hai vinto');
} else {
    console.log('hai perso');
}
/**
 * generare un numero random in questo range
 * @param {number} min  range minimo 
 * @param {number} max range massimo
 * result il numero
 */
function rndnmb(min, max){
    return Math.floor(Math.random() * (max - min) ) + min;
}

