const a = 17;
const b = 9;
const c = a % b;
console.log(c)
// 17 / 9 = 1.(8) вийшло не ціле число шукаємо далі
// 16 / 9 = 1.(77) вийшло не ціле число шукаємо далі
// 15 / 9 = 1.(66) вийшло не ціле число шукаємо далі
// 9/9 = 1 вийшло ціле число  - віднімаємо від 17 найближче число яке ділиться на 9
// тобто 17 - 9 буде 8 
console.log(25 % 7)
// 25 / 7 = 3.1 вийшло не ціле число шукаємо далі
// 24 / 7 = 3.4 вийшло не ціле число шукаємо далі
// 23 / 7 = вийшло не ціле число шукаємо далі
// 22 / 7 = вийшло не ціле число шукаємо далі
// 21 / 7 = 3 вийшло ціле число, рахуємо остачу від ділення 
// 25 - 21 = 4, 4 - це остача від ділення



const d = 5
let add = 0
add = add + d
console.log(add)
add += d
console.log(add)

let sub = 11;
sub = sub - d;
console.log(sub);
sub -= d; 
console.log(sub);

let multyply = 11;
multyply *= d;
console.log(multyply);

let divide = 41; 
divide /= d 
console.log(divide)

let remainder = 44
remainder %= d
console.log(remainder)


// const add = a + b; 
// const sub = a - b; 
// const multyply = a * b;
// const divide = a / b;
// const remainder = a % b;

// console.log(add)
// console.log(sub)
// console.log(divide)
// console.log(remainder)


//////////////////////////////

let salary = 1000;
console.log(salary)

salary = 2000;
console.log(salary)

// salary = salary + 3000;
salary += 3000; 
console.log(salary)

salary -= 500;
console.log(salary)





const num1 = 15;
const num2 = "15";
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 <= num2);
console.log(num1 >= num2);
console.log(num1 === num2);
console.log(num1 == num2);


// falsy  значення це число 0, NaN, undefined, null, порожній рядок, false


// console.log(num1 == num2);
console.log(true == true);

console.log(0 == "");
// console.log(0 == false)  
// не строгим порівняння == ми користуватись НЕ хочемо
// ми ЗАВЖДИ порівнюємо тільки через строге порівнняння === 


console.log(0 !== "");
console.log(0 === "");


console.log(0 != "");




// продовження по числах xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


console.log(Number);
let testNumber = "10";
console.log(testNumber);
// testNumber = 10;
// console.log(testNumber);
testNumber = Number(testNumber);
console.log(testNumber);

console.log(Number("test"));
console.log(Number(true));
console.log(Number(null));
console.log(Number(undefined));

const widthElement = "50.5px55";
console.log(typeof widthElement)
const widthEl = Number.parseFloat(widthElement);
console.log(typeof widthEl);
const heightElement = "70.8";
console.log(Number.parseInt(heightElement))
console.log(Number.parseFloat(widthElement))

const testNum = "JFIFM3L3";
const testNumFloat = Number.parseFloat(testNum);
console.log(testNumFloat);
console.log(Number.isNaN(testNumFloat));

console.log(0.2 + 0.1);
console.log((0.2 * 10 + 0.1 * 10) / 10); 
console.log(0.6 + 0.3);
console.log((0.6 * 100 + 0.3 * 100) / 100 );

console.log(Math);
console.log(Math.max(8, 66, 7, 9, 10, 33));
// шукає максимальне число max
console.log(Math.min(8, 66, 7, 9, 10, 33));
// шукає мінімальне число min
console.log(Math.pow(8, 3));
console.log(Math.pow(5, 4));
// підносить до степеня pow
console.log(Math.floor(33.88)); 
// заокруглює завжди у меншу сторону floor
console.log(Math.ceil(55.36));
// заокруглює в більшу сторону ceil 
console.log(Math.round(77.5));
console.log(Math.round(77.2));
// заокруглює як у математиці round
console.log(Math.sqrt(625));
const max = 30;
const min = 2;
console.log(Math.round (Math.random() * (max - min) + min));

const randomNumber = Math.random() * (max - min) + min;
console.log(randomNumber);
console.log(Math.round(randomNumber));
