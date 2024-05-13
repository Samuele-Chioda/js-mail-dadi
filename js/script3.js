// array
let numeriPari=[];

// ciclo for
for (let x = 0; x < 6; x++) {
    const numeroInseritoDaUtente = parseInt(prompt("Inserisci un numero: "));
    if (!isNaN(numeroInseritoDaUtente) && numeroInseritoDaUtente % 2 === 0) {
        numeriPari.push(numeroInseritoDaUtente);
    }    else{
        console.log("numero dispari!");
    }
}
console.log(numeriPari);
