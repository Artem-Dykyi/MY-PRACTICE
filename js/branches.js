const personName = "Arsen";
const askName = prompt("вгадайте ім`я мого друга");
// if(askName.toLowerCase() === personName.toLowerCase()){
//     alert(`Ви вгадали ім'я друга, мого друга звати ${personName}`);
// } else {
//     alert(`Ви не вгадали, мого друга звати ${personName}`);
// }

// тернарний оператор
// умова ? те що вертаємо при true : те що вертаємо при false

const message =
  askName.toLowerCase() === personName.toLowerCase()
    ? `Ви вгадали ім'я друга, мого друга звати ${personName}`
    : `Ви не вгадали, мого друга звати ${personName}`;
alert(message);




const typeOfSubscription = promt("Введіть тип підписки").toLowerCase();

// if (typeOfSubscription === "standart") {
//     cost = 50;
//     alert(`Ціна підписки буде ${cost} гривень`);
// }
// else if (typeOfSubscription === "regular") {
//     cost = 25;
//     alert(`Ціна підписки буде ${cost} гривень`);
// }
// else if (typeOfSubscription === "vip") {
//     cost = 100;
//     alert(`Ціна підписки буде ${cost} гривень`);
// }
// else {
//     alert("Вибачте ви не наш клієнт")
// }


switch (typeOfSubscription) {
    case "standart":
        coost = 50;
        // alert(`Ціна підписки ${coost}`);
        break
    case "regular":
        coost = 50;
        // alert(`Ціна підписки ${coost}`);
        break
    default:
        alert("Вибачте ви не наш")
}

alert(`Ціна підписки ${coost}`)


// switch ("Що порівнює") {
//     case "з чим порівнюємо":
//         Якщо в case true то робимо інструкція
//     break;
//     case "з чим порівнюємо":
//          Якщо в case true то робимо інструкція
//     break;
//     default :
//          Виконується false
// }



// задача 

if(balance > 1){
    let message = "Ваш баланс позитивний!"
    console.log(message);
    const a = 5;
 } else {
    let message = "Ваш баланс негативний!"
    console.log(message);
    const a = 10;
 }

const messageBalance = (balance > 1)
    ? "Ваш баланс позитивний!"
    : "Ваш баланс негативний!";
console.log(messageBalance)



// Використовуючи конструкцію if..else, напишіть код, що запитує:
// ‘Яка “офіційна” назва JavaScript?’ Якщо відвідувач вводить “ECMAScript”,  
// виведіть “Правильно!”, в іншому випадку — виведіть:
// “Ви не знаєте? ECMAScript!”
    
const javaName = "ECMAScript";
const askJavaName = prompt("вгадайте назву офіційного Javascript");
if(askJavaName === javaName){
    alert ("Правильно")
} else {
    alert("Ви не знаєте? ECMAScript!")
}




// Напиши скрит підрахунку суми покупки зі знижкою в залежності від витраченої суми за весь час (партнерська програма).
// Користувач вводить в інпут сумму витрачену в даному магазині і отримує розмір знижки як результат.
//  - Загальна сума витрачених коштів зберігається в змінній totalSpent
//  - Сума поточного платежа зберігається в змінній payment
//  - Знижка зберігається в змінній discount

//  - Якщо витрачено від [100 до 1000) - бронзовий партнер, знижка 2%
// - Якщо витрачено від [1000 до 5000) - срібний партнер, знижка 5%
//  - Якщо витрачено більше [5000 - золотий партнер, знижка 10%
//  - Якщо витрачено менше 100) - не партнер, знижка 0%

//  - В результаті вивести повідомлення
//  «Оформляемо замовлення на суму [сума] зі знижкою [знижка]%»

// 'Бронзовий партнер, знижка 2%'
// 'Срібний партнер, знижка 5%'
// 'Золотий партнер, знижка 10%'
// 'У вас ще немає партнерської знижки'


const totalSpent = prompt(
    "Please enter the amount of money you spent in this shop"
  );
  const payment = 1500;
  let discount;
  if (totalSpent > 100 && totalSpent < 1000) {
    discount = 2;
  } else if (totalSpent > 1000 && totalSpent < 5000) {
    discount = 5;
  } else if (totalSpent > 5000) {
    discount = 10;
  } else {
    discount = 0;
  }
  alert(`Оформляемо замовлення на суму ${payment} зі знижкою ${discount}%`);

