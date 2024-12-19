// for (let iteration = 0; iteration <= 50; iteration ++) {
//     console.log(iteration);
// }

// let testMessage = "";
// for (let number = 0; number < 10; number += 1) {
//     testMessage += number;
// }
// console.log(testMessage);


// let evenNumber = "";
// for (let i = 0; i < 10; i += 2) {
//     evenNumber += i;
// }
// console.log(evenNumber)

// for (let i = 0; i < 20; i +=2) {
//     if (i % 2 === 0) {
//         evenNumber += `${i}, `
//     }
// }
// console.log(evenNumber)

// for (let ite = 3; ite < 25; ite += 1) {
//     if (ite === 13) {
//         continue
//     }else{
//         console.log(ite)
//     }
// }

// for (let ite = 3; ite < 25; ite += 1) {
//     if (ite !== 13) {
//         continue
//     }else{
//         console.log(ite)
//     }
// }


// Виведіть в консоль всі непарні числа за допомогою циклу for

// for (let oddNum = 4; oddNum < 33; oddNum ++) {
//     if (oddNum % 2 === 0) {
//         continue;
//     } else {
//         console.log(oddNum)
//     }
// }

// for (let oddNumEn = 3; oddNumEn < 33; oddNumEn ++) {
//         if (oddNumEn % 2 !== 0) {
//             console.log(oddNumEn)
//         }
//     }


// Написати скрипт який буде перевіряти середній бал успішності учня.    
// Прервати роботу циклу, коли середній бал буде меньше 7.



// let avarageMark = 0;
// let mark;
// text = "1";

// for (let i = 0; i < 5; i++) {
//         mark = Math.round( Math.random() * (12 - 2) + 2);
//         console.log(mark)
//         avarageMark += mark
// }
//     avarageMark /= 5
//     if (avarageMark > 7) {
//         text = "Середня оцінка більше 7"
//     } else {
//         text = "Середня оцінка менеше 7"
//     }
        
// console.log(text)


// Напиши скрипт який підраховує загальну суму зп працівників. 
// Кількість робітників зберігається в змінній employees. 
// ЗП кожного працівника це випадкове число від 500 до 5000.  
// Записати суму в змінну totalSalary і вивести в на сторінку.

// const employeesUser = 6;
// let totalSalary = 0


// for (let i = 0; i < employeesUser; i++) {
//     totalSalary += Math.round(Math.random() * (5000 - 500) + 500)
//     salaryUser = totalSalary + salary
// }
// console.log(`Загальна сума ЗП ${totalSalary}`)4


// Напиши скрипт який порахує суму всіх парних чисел,
//  які входять в діапазон чисел в змінних від min до max. 
//  Наприклад, якщо min=0 и max=5, то діапазон 0-5, 
//  і в ньому 2 парних числа - 2 та 4, їх сума 6. 
//  Можна зробити отримання значень мінімального
//   і максимального числа через інпут.

// const min = Number(prompt ("Введіть число від 0-5"));
// const max = Number(prompt ("Введіть число від 5-10"));
// let sum = 0

// for (let i = min; i <= max; i ++) {
//     if (i % 2 === 0) {
//         sum += i
//     }
// }
// console.log(sum)


// for (let i = 5; i < 25; i ++) {
//     if (i % 5 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

let test = 6 
// const result = test + 4
// test = result
// test = test + 4
test += 4
test -= 2
console.log(test)
