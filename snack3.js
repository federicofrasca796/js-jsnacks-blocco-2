/*
* Crea un array vuoto e chiedi all’utente un numero
* da inserire nell’array. Continua a chiedere i numeri
* all’utente e a inserirli nell’array fino a quando
* la somma degli elementi è minore di 50.
*/


/* const arr = []
let sum = 0;
let i = 0;
// while
while (sum < 50) {
    const userNum = parseInt(prompt('Inserisci un numero'));
    console.log(userNum);
    arr.push(userNum);
    
    if (arr.length > 1){
        console.log(userNum[i], userNum[i--]);
        sum += userNum[i] - userNum[i--] 
        console.log(sum);
        console.log(i);

    }
    i++
}
console.log(sum); */

const userNumbers = [];
let sum = 0;

while (sum < 50){
    const user_number = Number (prompt('Type a number'));
    sum += user_number
    userNumbers. push(user_number)
}