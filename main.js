//riferimento al <p id="generatedNumbers">
const numeriGenerati = document.getElementById("generated_numbers");

//array di numeri casuali
const generatedNumbers = [];

//array dei numeri messi in prompt dall'utente
const userNumbers = [];

//array di numeri indovinati
arrayGuessNumber = [];

//ciclo che riempie array di numeri casuali
for ( let i = 0; i < 5; i++) {
    let One2Hundred = randomNumber(1,50);
    generatedNumbers.push(One2Hundred);
    
}
console.log(generatedNumbers);

//stampo a schermo i numeri casuali
document.getElementById("generated_numbers").innerHTML = `Questi sono i numeri generati casualmente:  ${generatedNumbers}.`;

//dopo 3 secondi nascondo i numeri, l'utente ne avrà altri 7 prima inserire i suoi
setTimeout(hideElement, 3000);
setTimeout(userPrompt, 5000);


//FUNZIONI_____________________________________________________________
//funzione che genera numeri casuali
function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min+1)+min);
}

//funzione che nasconde le cose
function hideElement () {
    numeriGenerati.classList.add("d_none");
}

//funzione che prompta 5 volte il numero dall'utente
function userPrompt () {
    for( let i = 0; i < generatedNumbers.length; i++) {
        let question = parseInt(prompt("Inserisci un numero"));
        userNumbers.push(question);


        guessNumber = userNumbers.includes(generatedNumbers[i]);
        if(guessNumber == true) {
            arrayGuessNumber.push(guessNumber[i]);
        }
    }
    //non fa vedere gli elementi dell'array (boh) però si sa la lunghezza
    console.log(arrayGuessNumber);
    switch(arrayGuessNumber.length) {
        case 0:
            alert("Hai indovinato zero numeri :(");
            break;
        case 1:
            alert("Hai indovinato un numero!");
            break; 
        case 2:
            alert("Hai indovinato due numeri!");
            break;
        case 3:
            alert("Hai indovinato tre numeri");
            break;
        case 4:
            alert("Hai indovinato quattro numeri");
            break;
        case 5:
            alert("Hai indovinato tutti i numeri");
            break;
    }
}