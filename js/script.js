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