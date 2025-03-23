// function palindromeWord(word){
//     let result = "";
//     for(let i=word.length -1; i>=0; i--){
//         result+= word[i];
//     }
//     if(result==word){
//         console.log(`La parola ${word} è palidroma`)
//     }
//     else{
//         console.log(`La parola ${word} non è palidroma`)
//     }
// }

// let inputWord = palindromeWord(prompt("Inserisci una parola palindroma"));

/* -------------------- */

function checkEvenOrOdd(check){
    let even = false;
    let odd = false;

    if(check.includes("Dispari") || check.includes("dispari")){
    odd = true;
    console.log("Hai scelto Dispari")
    }
    else if(check.includes("Pari") || check.includes("pari")){
    even = true;
    console.log("Hai scelto Pari")
    }
    else{
    console.log("Scelta errata, riprova")
    }
    console.log(even, odd)
}

let playerEvenOrOdd = prompt("Scegli Pari o Dispari");

let playerChoiceCheck = checkEvenOrOdd(playerEvenOrOdd);