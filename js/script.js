// genero 6 numeri casuali sia per il computer sia per il giocatore:
const numeroEstrattoComputer = Math.floor(Math.random() * 6) + 1;
const numeroEstrattoGiocatore = Math.floor(Math.random() * 6) + 1;

// condizioni di vittoria o sconfitta o pareggio:
if (numeroEstrattoGiocatore > numeroEstrattoComputer){
console.log("il numero vincente è quello del giocatore ed è:" + " " + numeroEstrattoGiocatore)
}    else if (numeroEstrattoGiocatore < numeroEstrattoComputer){
    console.log("il numero vincente è quello del computer ed è:" + " " + numeroEstrattoComputer)
}   else {
        console.log("parità");
    }

