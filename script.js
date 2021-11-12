// alert("Hello World");


// SNACK 1
// jsnack1 - 15 minuti
// L’utente inserisce due numeri in successione, con due prompt.
//  Il software stampa il maggiore.

// prompts
// const promptUno = parseInt(prompt("Inserisci il primo numero"));
// const promptDue = parseInt(prompt("Inserisci il secondo numero"));
// console.log(promptUno, promptDue);

// let maggiore;
// if (promptUno >= promptDue) {
//     maggiore = promptUno;
//     console.log("Il numero maggiore è " + maggiore);
// } else if (promptDue >= promptUno) {
//     maggiore = promptDue;
//     console.log("Il numero maggiore è " + maggiore);
// };

// document.getElementById("numero").innerHTML = "Il numero più alto è " + maggiore;

// SNACK 2
// jsnack2 - 15 minuti
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// const insertNumber = parseInt(prompt("Inserisci un numero"));

// let somma = 0;

// for (let i = 0; i <=10; i++){
//     insertNumber = parseInt(prompt("Inserisci un numero"));
//     somma = somma + insertNumber;
//     console.log(insertNumber);
// }


// SNACK 3
// jsnack3 - 15 minuti
// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

// const newArray = [];

// for (let i = 0; i < 6; i++){
//     let insertNumber = parseInt(prompt("Inserisci un numero"));
//     console.log(insertNumber);
//     if (insertNumber % 2 != 0) {
//         newArray.push(insertNumber);
//         console.log(newArray);
//     }
// };

// console.log(newArray.length);

// SNACK 4
// jsnack4 - 15 minuti
// Stampa il cubo dei primi N numeri,  dove N è un numero indicato dall’utente.

// const insertNumber = parseInt(prompt("Inserisci un numero"));
// console.log(insertNumber);

// for (let i = 1; i <= insertNumber; i++) {
//     const cube = i * i * i;
//     console.log(cube);
// }
