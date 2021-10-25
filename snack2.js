const footballTeams = [
    {
        name: 'Juventus',
        points: 0,
        fouls: 0,
    },
    {
        name: 'Barcellona',
        points: 0,
        fouls: 0,
    },
    {
        name: 'Inter',
        points: 0,
        fouls: 0,
    },
    {
        name: 'Manchester United',
        points: 0,
        fouls: 0,
    },
    {
        name: 'Milan',
        points: 0,
        fouls: 0,
    },
    {
        name: 'Napoli',
        points: 0,
        fouls: 0,
    },
]

//generare numeri random al posto degli 0 nelle proprietà: points e fouls.
for (const key in footballTeams) {
    console.log(footballTeams[key].points);
    console.log(footballTeams[key].fouls);
}




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