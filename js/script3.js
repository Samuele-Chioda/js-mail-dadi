// array
let numeriArrey=[];

// ciclo for
for (let x = 0; x < 6; x++) {
    const numeroInseritoDaUtente = parseInt(prompt("Inserisci un numero: "));
    if (!isNaN(numeroInseritoDaUtente) && numeroInseritoDaUtente % 2 === 0) {
        numeriArrey.push(numeroInseritoDaUtente);
    }    else{
        console.log("numero non valido!");
    }
}
console.log(numeriArrey);
