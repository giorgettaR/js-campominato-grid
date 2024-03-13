// Consegna
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
// Consigli del giorno: :party_wizard:
// Andate per stemp.
// Sono tutti problemi che avete gia affrontato singolarmente negli esercizi precedenti:
// recuperare uno o più elementi dal DOM
// stampare i numeri da 1 a 100
// inserire n elementi nel DOM
// aggiungere un click ad un elemento
// aggiungere e togliere una classe ad un elemento
// Questa volta però sono combinati insieme per formare un problema più articolato e complesso. Scomponiamo quindi il problema nei suoi sotto problemi più semplici.


// click sul bottone

const playButton = document.getElementById('playButton');

const gridElement = document.querySelector('.container');

const difficultySelectionElement = document.getElementById('difficulty');




playButton.addEventListener('click', function(){
    
    let difficulty = difficultySelectionElement.value;

console.log(difficulty)

    if (difficulty == 'easy') {
        numOfCells = 100;
        console.log(numOfCells)
    } else if (difficulty == 'medium'){
        numOfCells = 81;
        console.log(numOfCells)
    } else {
        numOfCells = 49;
        console.log(numOfCells)
    }



    gridElement.innerHTML = '';

    for (let i = 0; i < numOfCells; i++) {

        // creazione e aggiunta celle
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell', difficulty);
        gridElement.appendChild(cellElement);

        // creazione e aggiunta numeri
        const numElement = document.createElement('div');
        numElement.innerHTML = i + 1;
        cellElement.appendChild(numElement);

        // toggle stile celle colpite
        cellElement.addEventListener('click', function(){
            cellElement.classList.toggle('hit');
        })

    }
})



// click sulla cella
// cambio colore cella
// aggiungere select che fa cambiare la griglia