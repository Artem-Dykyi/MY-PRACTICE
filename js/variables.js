"use strict"
const myName = "Artem Dykyi";
console.log(myName);
const sum = 9 + 5;
console.log(sum);
// myName = "Mark Markov"
// не можемо змінити значення тому що ми створили через const
// якщо ми хочемо змінювати значення змінної то ми створимо значення через let
let myAge = "15";
console.log(myAge);
myAge = "17";
console.log(myAge);

// myCity = "Mykachevo";
// console.log(myCity);
// дві змінні не можна створювати буде вибивати помилку

// let myCountry;
// console.log(myCountry)
// краще ініціалізувати змінну щоб в ній не було underfined
let myCountry = "";
myCountry = "Ukraine";
console.log(myCountry);



// Виведіть в консоль через кому рядок “Я навчаюся в GoITeens в групі: ” 
// і змінну group в якої значення це назва твоєї групи.
const messege = "Я навчаюся в GoITeens в групі: ";
const myGroup = "GoITeens_UA_FE_1y_16_23;";
console.log(messege, myGroup);
const messegeLength = messege.length
console.log(messegeLength);
const bigMessege = messege.toUpperCase();
console.log(bigMessege)
const smallGroup = myGroup.toLowerCase();
console.log(smallGroup)

const myNumber = 33;
const myBasket = null;
let myAges ;
const isHomeworkDone = true;

console.log(typeof myNumber)
console.log(typeof myBasket)
console.log(typeof myAges)
console.log(typeof isHomeworkDone)


// Оголоси дві змінні, які зберігають назву та ціну товару: name і price. 
// Присвойте змінним наступні характеристики товару (відразу при оголошенні) 
// назва: MacBook Pro 13″, ціна: 100000
// Використовуючи стандартний рядок виведи в консоль інформацію про
// товар, вийде: 'Обрано «MacBook Pro 13″», ціна за штуку 10000 кредитів'.  
// Присвой товару нову ціну - 20000. Використовуючи стандартний рядок виведи в 
// консоль інформацію про товар, вийде: 'Обрано «MacBook Pro 13″», ціна за штуку 2000 кредитів'.

const name = "MacBook Pro 13"
const price = 100000
const contity = 2
console.log("Обрано", name, "ціна за штуку", price * contity, "крудитів")


const message = "Вітаємо на нашому сайті";
// alert(message);
// confirm("Ви згідні користуватись цим сайтом?"); 
const age = prompt("Скільки вам років?");
console.log(age);


