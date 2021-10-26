//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore utilizzando foreach

const bicycles = [
    {
        name: 'Atala',
        weight: 10
    },

    {
        name: 'Cannondale',
        weight: 13
    },

    {
        name: 'Bianchi',
        weight: 8
    },

    {
        name: 'Atala 2',
        weight: 7
    },

    {
        name: 'Cannondale 420',
        weight: 14
    },

    {
        name: 'Bianchi F',
        weight: 15
    }
]

let lightestBike = bicycles[0];

bicycles.forEach(bike => {
    console.log(bike.weight);
    if (bike.weight < lightestBike.weight){
        lightestBike = bike;
    }
});

console.log(lightestBike);
document.querySelector('body').innerHTML = `La bici più leggera è la ${lightestBike.name} e pesa ${lightestBike.weight}kg`

