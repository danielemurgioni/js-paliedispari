Esercizio di oggi: Pali e dispari
nome repo: js-paliedispari (sì si chiama proprio così, non è un errore di battitura)

Palindroma:

Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

Palindroma, sotto-problema:

(inputWord) - Inizializzo una variabile [LET] e le assegno [=] [PROMPT];

palindromeWord(word) - Dichiaro una [function] per controllare se una parola è palindroma, con [FOR] devo invertire una parola (word), [IF] Se la parola (word) è uguale [==] alla parola invertita (result) allora stampo[console.log] un messaggio ["La_parola_è_palindroma"], [ELSE] Altrimenti stampo un messaggio [La_parola_non_è_palindroma].

Pari e Dispari:

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

Pari e Dispari, sotto-problema:

(playerEvenOrOdd) - Inizializzo una variabile [LET] e le assegno [=] un [PROMPT] dove il giocatore sceglie pari o dispari;

(playerNumber) - Inizializzo una variabile [LET] e le assegno [=] un [PROMPT] dove il giocatore sceglie un numero da 1 a 5;

randomNumber(min, max) - Dichiaro una [function] per generare un numero random da [min] a [max];

sumEvenOrOdd(x, y) - Dichiaro una [function], in cui sommo [+] x con y, [IF] se il risultato è pari allora stampo [La_somma_è_pari], [ELSE] altrimenti il risultato è dispari allora stampo [La_somma_è_dispari].

Chi ha vinto? [IF] Se l'utente ha scelto pari [&&] la somma è pari, oppure [||] la somma è dispari [&&] l'utente ha scelto dispari allora stampo [Hai_vinto!], [ELSE] altrimenti stampo [Hai_Perso!].

Numero minimo di push: 7

Consigli del giorno:
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
Domande da farsi quando si crea una funzione:
Come dovrebbe chiamarsi?
Ho bisogno di parametri?
Devo restituire un valore?
Se sì, di che tipo?