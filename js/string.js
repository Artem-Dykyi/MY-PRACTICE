const message = "Java Script is my favourite subject";
console.log(message);
message[0];
const firstLetter = message[0];
console.log(firstLetter);
console.log(message[10]);
const messLength = message.length;
console.log(messLength);
const lastLetter = message[messLength - 1];
console.log(lastLetter);

const message1 = "Java Script";
const message2 = "is my favourite subject"
console.log(message1);
console.log(message2);
const fullMessage = message1 + " " + message2;
console.log(fullMessage);

// це називається зшивання або конкатинація рядків

const friendName = null;
let location;
console.log(fullMessage + " " + 5 + " " + friendName + " " +  " "  + location);


// Вивести result в консоль. Перевірити тип змінної result= 5+5+’5’.

const result = 5 + 5 + "5";
console.log(result);
// число + рядок буде спочатку доданий числа а потім рядок

console.log("5" + 5 + 5);
// якщо перший доданий рядок все буде рядок 


// Шаблонні рядки
const myAge = 15;
const info = `Мені ${myAge} років`  
// ${} для того щоб підставити змінні називається інтерпуляція 
console.log(info)



// Напиши скрипт який виведе рядок в форматі: 
// “Гість x y поселяється в n номер g”, підставивши замість x, y, n, g значення змінних.

// const user = prompt("Як вас звати?");
// const userlastName = prompt("Ваше прізвище?");
// const userTypeRoom = prompt("Який тип кімнати ви хочете?");
// const userNumberRoom = prompt("В який номер ви хочете заселитись?");
// const userInformation = `Гість ${user} ${userlastName} поселяється в ${userTypeRoom} номер ${userNumberRoom}`;
// console.log(userInformation);


// Створити змінну, яка містить рядок з вашим ім'ям та прізвищем. 
// Використовуючи метод .length, вивести шаблонним рядком кількість символів у рядку.


const sheName = "Mishel" + "Oggy";
console.log(sheName);
const sheNameLenght = sheName.length;
console.log(`My name lenght ${sheName}`)


// Напишіть скрипт, який знаходить площу прямокутника. 
// Висота 23см, шириною 10см - всі данні повинні зберігатися в змінних. 
// Значення площі повинно зберігається в числовій змінній.
// Результат вивести шаблонним рядком.

// const heightRectangle =  prompt("Висота прямокутника");
// const widhtRectangle = prompt("Ширина прямокутника");
// const areRectangle = heightRectangle * widhtRectangle;
// console.log(`Площа прямокутника з висотою ${heightRectangle}см і шириною ${widhtRectangle} дорівнює ${areRectangle}`);




// продовження string

console.dir(String);
const upperCas = "Bobru v dvishe";
console.log(upperCas.toUpperCase());
console.log("hello Garry".toUpperCase());
console.log("bober is sad".toLowerCase());

const testMessage = "nail for Loli";
console.log(testMessage.indexOf("f"));
const secondTestMessage = " Привіт, я принц Абдул, пропоную тобі мільйон!  ";
console.log(secondTestMessage.indexOf("пропоную"));
// вказує індекс на якому знаходиться слово символ 

console.log("bober buy a new car".includes("buy"))
console.log("bober buy a new car".includes("body"))
// перепіряє чи є цей символ в рядку 

console.log(secondTestMessage.startsWith("Привіт"));
console.log(secondTestMessage.endsWith("мільйон!"));
console.log(secondTestMessage.startsWith("Привіт, я принц Абдул, пропоную тобі мільйон!"));
const messageSecondLenght = secondTestMessage.length;
console.log(messageSecondLenght);

const optMessage = secondTestMessage.trim()
console.log(optMessage)
console.log(optMessage.length)
// обрізає пробіли на початку та в кінці речення trim 

console.log(secondTestMessage.padStart(72, "lalalal"));
console.log(secondTestMessage.padEnd(80, "Yk"));
console.log("ce testovu radok".padEnd(40, "4"))
// додає з переду або ззаду до того скільки нам нада символів

const text2 = "yt is very clever but he read very big librery at home"
console.log(text2.slice(14, 20));
const copyText2 = text2.slice(0);
console.log(copyText2)


// Створити змінну, яка містить рядок з вашим імям. 
// Використовуючи метод .charAt(), вивести перший символ вашого імені в консоль
const hisName = "vovan"
console.log(hisName.charAt());
// виводить індекс який виводите в charAt()


// Створити змінну, яка містить рядок з вашим імям. 
// Використовуючи метод .replace(), замінити першу літеру 
// вашого імені на символ "@" та вивести результат в консоль.
console.log(hisName.replace("v", "@"))

// Створити змінну, яка містить рядок зі словом "JavaScript". 
// Використовуючи метод .substring(), вивести підстроку, 
// яка містить перші 4 символи слова "Java".
const jsText = "JavaScript";
console.log(jsText.substring(0, 4));
console.log(jsText.slice(0, 4));