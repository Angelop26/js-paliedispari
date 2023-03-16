// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.

const userWordPrompt = prompt('metti una parola')

const result = isPalindroma(userWordPrompt)
console.log(result);

if(result === true){
    console.log(`la parola da lei scelta è palindroma`);
} else {
    console.log('la parola da lei scelta non è palindroma');
}



/**
 * determina se una parola è palindroma
 * @param {string} userWord 
 * return true | false
 */
function isPalindroma(userWord){
    let reverseWord = ''
    let i = 1
    while(i <= userWord.length){
        reverseWord += userWord.charAt(userWord.length - i)
        i++
    }
    // console.log(reverseWord);


     let wordResult = false
     if (userWord === reverseWord){
         wordResult = true
     }
    return wordResult
}