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

//Functions-start

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

function randomNumber(min, max){
    let number = Math.floor(Math.random() * (max - min) + min);
    return number;
}

//Functions-end

let playerEvenOrOdd = prompt("Scegli Pari o Dispari");

let playerChoiceCheck = checkEvenOrOdd(playerEvenOrOdd);

let playerNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));

console.log(`Il numero scelto è ${playerNumber}`);

let computerNumber = randomNumber(1, 5);

console.log(`Il numero del computer è ${computerNumber}`);