const clients = ["Alex", "Marry", "Anna", "Viktor"];
const clintName = "Marry"
let message = ""
// for (let i = 0; i < clients.length; i++){
//     if(clintName === clients[i]) {
//         message = `Користувач ${clintName} знайдено`
//         break;
//     } else {
//         message = `Користувач ${clintName} не знайдено`
//     }
//     message = clients[i].includes(clintName)
//     ? `Користувач ${clintName} знайдено`
//     : `Користувач ${clintName} не знайдено`;
//     if (clients[i] === clintName) {
//         break;
//     }
// }
console.log(message);

for (const client of clients) {
    if (client === clintName) {
        message = `Користувач ${clintName} знайдено`;
        break;
    } else {
        message = `Користувач ${clintName} не знайдено`;
    }
}

for (let i = 0; i < clients.length; i++) {
    console.log(clients[i])
}

for (const client of clients) {
    console.log(client)
}

// Написати скрипт який порахує сумму всіх парних чисел в масиві
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let total = 0;
// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 2 === 0) {
//         total = total + numbers[i]
//     }
// }
// console.log(total)

// for (const number of numbers) {
//     total = number + total
//     if (numbers % 2 === 0 ) {
//         number += numbers
//     }
//     console.log(total)
// }
// console.log(total)

