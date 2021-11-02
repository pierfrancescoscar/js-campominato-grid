// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range (vedi immagine allegata):
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

// Refs
const playBtn = document.querySelector('.play');
const chooseLevel = document.getElementById('difficoltà');
const wrapGrid = document.querySelector('.wrap-grid');


// Set grid

const grid = document.createElement('div');
grid.classList.add('grid');

// Insert grid
wrapGrid.append(grid);
