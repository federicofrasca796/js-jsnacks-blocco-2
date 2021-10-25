let points = 0;
let fouls = 0;

const footballTeams = [
    {
        name: 'Juventus',
        points,
        fouls,
    },
    {
        name: 'Barcellona',
        points,
        fouls,
    },
    {
        name: 'Inter',
        points,
        fouls,
    },
    {
        name: 'Manchester United',
        points,
        fouls,
    },
    {
        name: 'Milan',
        points,
        fouls,
    },
    {
        name: 'Napoli',
        points,
        fouls,
    },
]
//generare numeri random al posto degli 0 nelle proprietà: points e fouls.
for (const key in footballTeams) {
    //seleziono le chiavi degli oggetti 
    // console.log(footballTeams[key].points);
    // console.log(footballTeams[key].fouls);

    //genero numero random dentro le variabili dichiarate inizialmente
    footballTeams[key].points = getRandomInt(1, 10);
    footballTeams[key].fouls = getRandomInt(1, 10);
}

console.log(footballTeams); //new values in fouls and points





// FUNCTIONS

/**
 * Funzione da MDN per la generazione di numeri random
 * @param {Number} min 
 * @param {Number} max 
 * @returns 
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }