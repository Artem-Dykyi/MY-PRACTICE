const sumNumbers = function(...numbers) {
    console.log(numbers)
    let sum = 0;
    for(const number of numbers) {
        sum += number
    }
    return sum;
}
console.log(sumNumbers(4, 4))
console.log(sumNumbers(4, 4, 7, 8, 9))

const creatMessage = function (sumNumbers) {
    let sumOfNumber = sumNumbers (1, 2, 4)
    const message = `Resuly of number ${sumOfNumber}`
    return message;
}

console.log(creatMessage(sumNumbers))

// вищий порядок creatMessage --- callback sumNumbers


// function makeInfo (countLength, stringM) {

//     const lengthMes = countLength("test message")
//     const mess = `The lenght of string is ${lengthMes}`
//     return mess
// }

// const result = makeInfo(countLength, "test message")
// console.log(result)

// function countLength (stringM) {
//     const mess = stringM
//     const messLenght = mess.length
//     return messLenght
// }

// console.log(countLength("test message"))



// const makeInfo = (stringM, number) => {
//     return `the length ${stringM.length}. the number is ${number}`
// }

// console.log(makeInfo("kakkakak", 9))

// скоротимо ще через наявне повернення


const makeInfo = (stringM, number) => `the length ${stringM.length}. the number is ${number}`
console.log(makeInfo("kakkakak", 9))

// як записувати стрілкові функції 
const a = () => {

}

// скоротимо ще через неявне повернення (якщо у {} одразу return то
// ми їх можемо скоротити та після стрілки одразу прописати результат який )




// Напиши скрипт пошуку логіна
//  - Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдено.'
//  - Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'
// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'aj4xth3m4n';


// 1. потрібно подивитись чи пароль взагалі є
// 2. якщо так то вивести що логін є якщо ні то вивести що немає 
// 3. Подивитись чи працює
// const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'aj4xth3m';

// const findUserLogin = function(arrayLogins, trueLoginFind) {
//     let message = `Логін ${trueLoginFind} не знайдено `
//     for (const oneEleLogin of arrayLogins) {
//         if (trueLoginFind === oneEleLogin) {
//             message = `Логін ${trueLoginFind} знайдено `
//             break
//         } 
//     } 
//     return message
    
// }



// const findUserLogin = function(arrayLogins, allLogins) {
//     return allLogins.includes(loginToFind)
//     ? `Логін ${trueLoginFind} знайдено `
//     : `Логін ${trueLoginFind} не знайдено `
// }

// скоротимо ц вигляді стрілкової функції 

const findUserLogin = (loginToFind, allLogins) =>
  allLogins.includes(loginToFind)
    ? `Користувач ${loginToFind} знайдено.`
    : `Користувач ${loginToFind} не знайдено.`;

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'aj4xth3m';

console.log(findUserLogin(logins, loginToFind))


// Напиши функцию findSmallesNumber(numbers) пошуку самого маленького числа в масиві, 
// при умові, що числа унікальні (не повторюються).


// const findSmallesNumber = function(numbers) {
//     let theSmallesNumber = numbers[0];
//     for (const number of numbers) {
//         if (number < theSmallesNumber){
//             theSmallesNumber = number
//         }
//     }
//     return `Найменше число у масиві ${numbers} це число ${theSmallesNumber}`
// }

// const findSmallesNumber = (numbers) => {
//     let theSmallesNumber = numbers[0];
//     for (const number of numbers) {
//         if (number < theSmallesNumber){
//             theSmallesNumber = number
//         }
//     }
//     return `Найменше число у масиві ${numbers} це число ${theSmallesNumber}`
// }

// const findSmallesNumber = function (numbers) {
//     // [3, 8, 12, -2, 15] => 3, 8, 12, -2, 15
//     return Math.min(...numbers)
// }

// зробимо через стрілку 

const findSmallesNumber = (numbers) => Math.min(...numbers)
    // [3, 8, 12, -2, 15] => 3, 8, 12, -2, 15

    


console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4