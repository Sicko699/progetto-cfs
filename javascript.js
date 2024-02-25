let scelte = ["Carta", "Forbice", "Sasso"];
/*
function playRound(sceltaRandom, scelta){
    if ((sceltaRandom === "Carta" && scelta === "sasso") || (sceltaRandom === "Forbice" && scelta === "carta") || (sceltaRandom === "Sasso" && scelta === "forbice")){
        console.log("Scelta computer: " + sceltaRandom + "\nScelta utente: "+ scelta);
        return ("Il computer ha vinto");
        punteggioC += 1;
    }
    else if (scelta === sceltaRandom){
        console.log("Scelta computer: " + sceltaRandom + "\nScelta utente: "+ scelta);
        return ("Pareggio")
    }
    else{
        console.log("Scelta computer: " + sceltaRandom + "\nScelta utente: "+ scelta);
        return ("Hai vinto");
        punteggioU += 1;
    }
}


let random = Math.floor((Math.random() * scelte.length));
let sceltaRandom = scelte[random];
let scelta = prompt("Inserisci la tua scelta: ");
scelta = scelta.toLowerCase();

console.log(playRound(sceltaRandom, scelta));
*/

function playGame(scelte){
    let punteggioU = 0;
    let punteggioC = 0;
    let nPareggio = 0;
    const round = 5; // Numero di round da giocare

    let i = 0;
    while (i < round+nPareggio) {
        let scelta = prompt("Inserisci la tua scelta: ");
        scelta = scelta.toLowerCase();
        let random = Math.floor(Math.random() * scelte.length);
        let sceltaRandom = scelte[random];
        
        if (sceltaRandom.toLowerCase() === scelta.toLowerCase()) {
            console.log("Scelta computer: " + sceltaRandom + "\nScelta utente: " + scelta);
            console.log("Pareggio, il round si ripeterà!");
            nPareggio++;
        } else if ((sceltaRandom === "Carta" && scelta === "sasso") || (sceltaRandom === "Forbice" && scelta === "carta") || (sceltaRandom === "Sasso" && scelta === "forbice")) {
            console.log("Scelta computer: " + sceltaRandom + "\nScelta utente: " + scelta + "\nHai perso");
            punteggioC++;
        } else {
            console.log("Scelta utente: " + scelta + "\nScelta Computer: " + sceltaRandom + "\nHai vinto");
            punteggioU++;
        }

        i++;

        if (i === round + nPareggio) {
            console.log("Punteggio Utente: " + punteggioU + "\nPunteggio Computer: " + punteggioC);
        }
    }
}


console.log(playGame(scelte));