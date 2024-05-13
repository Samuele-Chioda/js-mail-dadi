// creazione lista con arrey e richiesta della mail del partecipante:
const mailPartecipante=prompt("inserisci la tua Email!");
const listaInvitati=["giorgio@gmail.com", "mario@gmail.com", "antonio@gmail.com"];

// verifica della presenza della mail inserita:
if (listaInvitati.includes(mailPartecipante)){
    console.log("Puoi accedere alla festa!");
} else{
    console.log("Spiacente non sei stato invitato.")
}

