// let num = 3;
// while (num) {
//     console.log(num);
//     num -= 1;
// }

// 1 ітерація 
// num = true ?
// num = 2
// 2 ітерація 
// num = true ?
// num = 1
// 3 ітерація 
// num = true ?
// num = 0
// 4 ітерація 
// num = 0 = falsy
// num = true ?

// const numbers1 = [1, 2, 3, 4, 5]
// let sum = 0;
// let i = 0;
// while (i < numbers1.length) {
//     sum += numbers1[i]
//     // 0 = 0 + 1 -> numbers1[0]
//     // 1 = 1 + 2 -> numbers1[1]
//     // 2 = 2 + 3 -> numbers1[2]
//     // 3 = 3 + 4 -> numbers1[3]
//     // 4 = 4 + 5 -> numbers1[4]

    
//     i += 1 
// }
// console.log(sum)

// 1 ітерація 
// i < numbers1.length === true 
// sum = 1 
// i = 1 
// 2 ітерація 
// i < numbers1.length === true 
// sum = 3 
// i = 2 
// 3 ітерація 
// i < numbers1.length === true 
// sum = 6
// i = 3 
// 4 ітерація 
// i < numbers1.length === true 
// sum = 10
// i = 4 
// 5 ітерація 
// i < numbers1.length === true 
// sum = 15
// i = 5
// 6 ітерація 
// i < numbers1.length === false


// for (let number = 0; number < 5; number ++) {
//             console.log(`Число ${number}`);
//         }

// let number = 0
// while (number < 5) {
//     console.log(`Число ${number}`);
//     number ++;
// }


// Напиши цикл, який пропонує в prompt ввести число, більше 100. 
// Якщо відвідувач ввів інше число – попросити ввести ще раз и т.д.

// let numbers = ""
// let messages = ""
// do {
//     numbers = parseInt(promt ("ввести число, більше 100"))
// } while (numbers < 100)
// alert (`ваше число ${numbers} більше 100`)


// Цикл повинен питати число поки відвідувач не введе число, 
// більше 100, або не натисне кнопку Відміна (ESC).

// let number = "";
// let message = ``;

// do {
//     number = prompt ("ввести число, більше 100");
//     console.log(number)
// } while (Number(number) < 100 && number !== null);
// alert (`ваше число ${number} більше 100`);
// if (number === NaN) {
//     alert("Ви відмовились вводити число більше 100")
// } else {
//     alert (`Ваше число ${number} більше 100`)
// }


// Напиши скрипт, який імітує авторизацію адміністратора
// в панелі управління. Є змінна message в яку буде записано 
// повідомлення про результат. При завантаженні 
// сторінки у відвідувача запитується пароль через prompt:
// Якщо натиснули Cancel, записати в message рядок 'Скасовано користувачем!'
// В іншому випадку, якщо введений пароль який збігається зі значенням
// константи ADMIN_PASSWORD, записати в message рядок 'Ласкаво просимо!'
// В іншому випадку, тобто якщо жодна з попередніх умов не виконалася, 
// записати в message рядок 'Доступ заборонений, невірний пароль!'
// Після всіх перевірок вивести в alert значення змінної message.
// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;

const ADMIN_PASSWORD = 'jqueryismyjam';
let password;
let message;

do {
    if (password === "") {
        message = prompt("Введіть пароль");
    } else {
        alert ("Доступ заборонений, невірний пароль")
        password =  prompt("Введіть пароль");
    }
    console.log(password);
} while (password !== ADMIN_PASSWORD && password !== null)
if (password === null) {
   message = "Скасовано користувачем!"
} else {
    message = "Ласкаво просимо!"
}

alert (message)