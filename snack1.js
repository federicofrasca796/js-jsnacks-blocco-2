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

let weigthValues = [];

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
h1.innerHTML = 'La bici più leggera pesa: ' + min + 'kg';
