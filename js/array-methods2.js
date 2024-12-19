// Перебираючі методи масивів мають такий синтакси:
// Назва-масиву.назва-методу(()=>{})

const friends = ["Boba", "Sara", "Alex"];
// Метод forEach є заміною циклу тому перебирає кожен елемент маству та робить ту дію яку ми вказали у тілі колбека 
// Цей метод (forEach) нічого не повертає
friends.forEach((friend, index, arr)=>{
console.log(`Друг ${friend} має індекс ${index} у масиві ${arr} `)
})
// Але у forEach не працює переривання циклу через break або continue


// Метод map перебирає оригінальний масив та змінює кожен елемент
//  цього масиву, вертає новий масив зі зміненими елементами 

const friendList = friends.map((friend, index)=> `${friend} це друг номер ${index + 1}`)
console.log(friendList)

// Метод filter перебирає оригінальний масив створює новий масив та додає
// у нього ті елементи з оригінального масива які відповідають умові в колбеку

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const filteredNumbers = numbers.filter(number => number % 3 === 0)
console.log(filteredNumbers)
///////////////////////////////////////////////////////////
const people = [
    { name: 'John', age: 32, occupation: 'programmer' },
    { name: 'Jane', age: 26, occupation: 'teacher' },
    { name: 'Mike', age: 42, occupation: 'engineer' },
    { name: 'Emily', age: 17, occupation: 'designer' }
  ]
//  Напишіть функцію, яка отримує масив об'єктів і 
// повертає масив імен з тих об'єктів, які мають вік більше 18 років.

const peopleFiltered = people.filter(person => person.age > 18)
console.log(peopleFiltered)


const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
  ];
//   Використовуючи 👆 масив об’єктів виконай наступні завдання
//   Отримати масив імен всіх гравців
    const names = players.map((player) => player.name);
    console.log(names)
//   Збільшити кількість поінтів кожного гравця на 10% (розпорошуємо старий об'єкт)
const newPlayers = players.map((player) => ({ ...player, points: { ...player }.points + { ...player }.points * 0.1 }));
console.log(newPlayers);
//   Збільшити кількість годин гравця по id. Переписати на тернарник
//   Отримати масив всіх гравців онлайн
const onlinePlayer = players.filter((player)=> player === true)
console.log(onlinePlayer)
//   Отримати масив всіх гравців офлайн
const oflinePlayer = players.filter((player)=> player === false)
console.log(oflinePlayer)
//   Отримати масив всіх хардкорних гравців з часом більше 250
//   Знайти гравця по id
//   Знайти гравця по імені
//   Перевірити чи всі гравці мають час більше 200
//   Перевірити чи всі гравці онлайн



//////////////////////////////////////////////////////
// reduce перебираючий метод
const numberR = [5, 8, 55,]

// знайдемо суму цифр
// let sumNumberR = 0
// for (const num of numberR) {
//   sumNumberR += num
// }

// console.log(sumNumberR)

//зробимо цей самий приклад через reduce 
// const sumNumberR = масив.reduce((аккумулятор, елемент масиву) => аккумулятор + елемент масиву, початкове значення аккамулятору)
// sum назва змінної 
// 0 значення акамулятора (змінна (sum))
const sumNumberR = numberR.reduce((sum, number) => sum + number, 0)
console.log(sumNumberR)

// крок 1: запускаємо reduce на масиві, в reduce пишемо callback (sum, number) => sum + number, а 0 це початкове значення аккумулятора sum
// крок 2: у number приходить перше число з numberR (тобто 1) далі number додається до акамулятора sum (в якому лежить 0); тобо 5 + 0 і в sum тепер лежить 5
// крок 3: reduce переходить до наступної ітерації і витагає наступне (2ге) число тобто 8; додаємо number 8 до sum (5 + 8 = 13) тепер у sum оновлюється 13
// крок 4: reduce переходить до наступної ітерації і витагає наступне (3тє) число тобто 55; додаємо number 13 до sum (13 + 55 = 68) тепер у sum оновлюється 68
// крок 5: у масиві числа закінчились тому reduce завершує своє виконання та повертає останнє значення аккумулятора sum (68)

// Порахувати загальну кількість годин:

const playersRe = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true}
 ]

//  const totalTimePlayed = playersRe.reduce((totalTime, playerOb) => {
//  const personTime = playerOb.timePlayed
// totalTime += personTime
// return totalTime
//  }, 0)

const totalTimePlayed = playersRe.reduce((totalTime, playerOb) => totalTime + playerOb.timePlayed, 0)


const cart = [
  { label: 'Apples', price: 100, quantity: 2 },
  { label: 'Bananas', price: 120, quantity: 3 },
  { label: 'Lemons', price: 70, quantity: 4 },
];

const totalAmount = cart.reduce((acc, product) => acc + product.quantity, 0)
const totalPrice = cart.reduce((acc, product) => acc + product.price * product.quantity, 0)

console.log(totalAmount);
console.log(totalPrice)


// Зробити статистику всіх тегів. Назву тега потрібно зробити ключем, 
// значення якого буде кількістьповторень тегів в масиві. 
// Якщо властивість з ключем tag є, збільшуємо його значення
// на 1 якщо властивості немає с таким ключем що в tag, створити
//  і записати 1
const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

const makeSttisticOfTags = tweets.reduce((statistic, tweet) => {
tweet.tags.forEach(tag => { 
  if (statistic[tag]) {
  statistic[tag] += 1
} else {
  statistic[tag] = 1
}});
return statistic
} ,{})
console.log(makeSttisticOfTags)


// // якщо є той той той той код то записати + 1 


// в нас є масив чисел потрібно сформувати меседж в масиві знаходяться такі числа і перерахувати ці числа

const enyNum = [3, 4, 8, 12, 47]

// const messageStri = enyNum.reduce((result, number) => result + " "  + number + "," ,"цей рядок має")
const messageStri = enyNum.reduce((result, number) => result + number  ,"цей рядок має")
// перший крок ми записуємо callback з початковим значення "цей рядок має"
// крок два з enyNum там приходить елемент number  тобто (3) який додається до аккумулятора 
// крок три  з enyNum там приходить елемент number тобто (4) який додається до аккумулятора
// крок чотири  з enyNum там приходить елемент number тобто (8) який додається до аккумулятора
// крок пять  з enyNum там приходить елемент number тобто (12) який додається до аккумулятора
// крок шість  з enyNum там приходить елемент number тобто (47) який додається до аккумулятора
// крок сім в результаті ми отримаємо початкова значення аккумуляора та значення які додавалися до нього тобто ( цей рядок має 3481247 )
console.log(messageStri)

///////////////////////////////////////////////////////////////
// метод sort() 
// сортує елементи по зростанню або по алфавіту; це метод ЗМІНЮЄ оригінальний масив
// щоб не змінити дані оригінального масиву для початку зробимо копію (...) в якій і посортуємо елементи 

const sNumber = [4, 59, 39, 2, 43, 3, 45, 84, 44, 9]; 
// const sCopyNum = [...sNumber]
// const sCopyNum2 = sNumber.slice()
const sCopyNum3 = sNumber.splice(0)
const sortNum = sCopyNum3.sort()
console.log(sortNum)

const sortReversNum = sCopyNum3.sort((a, b) => b - a);
console.log(sortReversNum)


// Відсортуйте масив об'єктів за зростанням значення властивості date в форматі dd / mm / yyyy.
const events = [
    { name: 'Event 1', date: '10/02/2023' },
    { name: 'Event 2', date: '15/03/2023' },
    { name: 'Event 3', date: '01/01/2023' },
    { name: 'Event 4', date: '01/02/2023' }
  ];
 
  events.sort((a, b) => {
    const dateA = new Date(a.date.split('/').reverse().join('-'));
    const dateB = new Date(b.date.split('/').reverse().join('-'));
    return dateA - dateB;
  });
console.log(events);


// Відсортуйте масив об'єктів за спаданням значення властивості popularity, а при однаковому значенні popularity - за алфавітом значення властивості name.
const items = [
    { name: 'Item A', popularity: 5 },
    { name: 'Item C', popularity: 2 },
    { name: 'Item D', popularity: 3 },
    { name: 'Item B', popularity: 5 }
  ];

items.sort((a, b) => {
  if (b.popularity === a.popularity) {
    return a.name.localeCompare(b.name)
  } else {
    return b.popularity - a.popularity
  }
})
console.log(items)


// Відсортуйте масив об'єктів за спаданням значення властивості price, а при однаковому значенні price - за зростанням значення властивості quantity.
const products = [
    { name: 'Product 1', price: 100, quantity: 5 },
    { name: 'Product 2', price: 50, quantity: 10 },
    { name: 'Product 3', price: 200, quantity: 2 },
    { name: 'Product 4', price: 50, quantity: 5 }
  ];

products.sort((a, b) =>  {
  if (a.price === b.price) {
    return a.quantity - b.quantity
  } else {
    return b.price - a.price
  }
});
console.log(products)

// Відсортувати масив об'єктів за алфавітом в полі name:
const arrT = [
    { name: 'John', age: 32 },
    { name: 'Jane', age: 26 },
    { name: 'Mike', age: 42 },
    { name: 'Emily', age: 29 }
  ];

// arrT.sort((a, b) => {
//   return a.name - b.name
// });
// console.log(arrT)

arrT.sort((a, b) => {
  return a.age - b.age
});
console.log(arrT)