function palindromeWord(word){
    let result = "";
    for(let i=word.length -1; i>=0; i--){
        result+= word[i];
    }
    if(result==word){
        console.log(`La parola ${word} è palidroma`)
    }
    else{
        console.log(`La parola ${word} non è palidroma`)
    }
}

let inputWord = palindromeWord(prompt("Inserisci una parola palindroma"));

/* -------------------- */

//Functions-start
function checkEvenOrOdd(choice){

    if(choice.includes("DISPARI")){
    console.log("Hai scelto Dispari")
    }
    else if(choice.includes("PARI")){
    console.log("Hai scelto Pari")
    }
    else{
    console.log("Scelta errata, riprova")
    }
}

function randomNumber(min, max){
    let number = Math.floor(Math.random() * (max - min) + min);
    return number;
}

function sumEvenOrOdd(x, y, check){
    let sum = x + y;

    if(sum % 2 == 0){
        check = "PARI"
        console.log(`La somma è pari: ${sum}`)
    }
    else{
        check = "DISPARI"
        console.log(`La somma è dispari: ${sum}`)
    }

    return sum, check;
}
//Functions-end

let playerEvenOrOdd = prompt("Scegli Pari o Dispari").toUpperCase();

let playerChoiceCheck = checkEvenOrOdd(playerEvenOrOdd);

let playerNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));

console.log(`Il numero scelto è ${playerNumber}`);

let computerNumber = randomNumber(1, 5);

console.log(`Il numero del computer è ${computerNumber}`);

let numberSum = sumEvenOrOdd(playerNumber, computerNumber);

if(playerEvenOrOdd == numberSum){
    console.log("Hai vinto!")
}
else{
    console.log("Hai perso!")
}