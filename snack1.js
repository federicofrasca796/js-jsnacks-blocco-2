//stampare a schermo la bici con peso minore

const bicycles = [
    {
        name: 'Atala',
        weight: 20,
    },

    {
        name: 'Bianchi',
        weight: 15,
    },

    {
        name: 'KTM',
        weight: 25,
    },
]

/* let weigthValues = [];
const {weight} = bicycles;
console.log({weight}.weight);
for (let i = 0; i < bicycles.length; i++) {
    const {weight} = bicycles[i];
    weigthValues.push({weight}.weight);
}

// console.log(...weigthValues);
const min = Math.min(...weigthValues);

// console.log(min);

//DOM
const h1 = document.createElement('h1');
document.querySelector('body').append(h1)
h1.innerHTML = 'La bici più leggera pesa: ' + min + 'kg'; */



//Prendere una bici di riferimento
let lightestBike = bicycles[0];

//ciclare tra le bici
for (let i = 0; i < bicycles.length; i++) {
    const bike = bicycles[i];
    
    if(bike.weight < lightestBike.weight){
        lightestBike = bike;
    }
}

document.querySelector('body').innerHTML = `La bici più leggera è la ${lightestBike.name} e pesa ${lightestBike.weight}kg`