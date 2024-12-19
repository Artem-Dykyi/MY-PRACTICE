// метод split робить з рядка масив 
const message = "Hello people"
console.log(message)
console.log(message.indexOf("o"))

const letters = message.split("")
console.log(letters)

const words = message.split(" ")
console.log(words)

const pwords = message.split("p")
console.log(pwords)

const lwords = message.split("l")
console.log(lwords)

// метод join робить з масиву рядок

const tetsJo = ["city", "town", "build"]
const messageJo = tetsJo.join(" | ")
console.log(messageJo)


// метод indexOf шукає перше співпадіння, якщо не знайшов то видає -1 

const tree = ["oak", "beresa", "klen"];
console.log(tree.indexOf("oak"));
console.log(tree.indexOf("klen"));
console.log(tree.indexOf("beresaa"));

const treeNumb = [100, 88, 130];
console.log(treeNumb.indexOf(88));

// метод includes перевіряє чи є елемент взагалі 

const treeNumBer = [2, 4, 6, 8]
const isTreeNumBer = treeNumBer.includes(5)
console.log(isTreeNumBer)

// метод (push) додає в кінці (pop) видаляє елемент в кінці 
// метод (unshift) додає на початку (shift) видаляє елемент на початку 

// (unshift) додає на початку
const addEleStart = ["mike", "goof", "gingir", "olmo"]
addEleStart.unshift("susana")
console.log(addEleStart)

// (shift)  видаляє елемент на початку 
const delEleStart = ["mike", "goof", "gingir", "olmo"]
delEleStart.shift()
console.log(delEleStart)

// (push) додає в кінці
const addEleEnd = ["mike", "goof", "gingir", "olmo"]
addEleEnd.shift()
console.log(addEleEnd)

// (pop) видаляє елемент в кінці 
const delEleEnd = ["mike", "goof", "gingir", "olmo"]
delEleEnd.pop()
console.log(delEleEnd)



// метод slice

const fruits = ["apple", "banana", "mango", "kiwi" ];
const fruitsCopy = fruits.slice(0, fruits.length - 1);
console.log(fruitsCopy);
console.log(fruits.slice(0, 3));
console.log(fruits === fruitsCopy);

const newFruits = fruits.slice(0, 2);
console.log(newFruits);
const lastEleFrutindex = fruits.length - 1;
const lastEleFrut = fruits[lastEleFrutindex];

console.log(lastEleFrut)

// Метод splice 
// Видалення 
// з відки - (0) скільки - (2)
const hisFriend = ["Vova", "Lika", "Vika", "Lili"];
console.log(hisFriend)
const hisBestFriend = hisFriend.splice(0, 2)
console.log(hisBestFriend)

// Додавання 
// Після якого буде доданий (2) щоб не видвлялись (0) 
const hisNewFriend = hisFriend.splice(2, 0, "Deeper", "Egor")
console.log(hisNewFriend)
console.log(hisFriend)


// Оновлення 
const hisNewFriendSummer = hisFriend.splice(1, 1, "Alla", "Uliiiiiiiilia")
console.log(hisNewFriendSummer)
console.log(hisFriend)



//  Створіть масив styles з елементами 'Джаз' i 'Блюз'.
//   Додайте 'Рок-н-ролл' в кінець масиву. 
//   Замініть значення в середині масиву на 'Класика'. 
//   Видаліть перший елемент масиву і покажіть його. 
//   Додайте 'Реп' і 'Реггі' на початок масиву. Виведіть масив в консоль.

const musicStyle = ["Джаз", "Блюз"]
console.log(musicStyle)

const addMusicStyle = musicStyle.splice(2, 0, "Рок-н-ролл")
console.log(addMusicStyle)
console.log(musicStyle)

const enotherMusicStyle = musicStyle.splice(1, 1, "Класика")
console.log(enotherMusicStyle)
console.log(musicStyle)

const delMusicStyle = musicStyle.splice(0, 1)
console.log(delMusicStyle)
console.log(musicStyle)

const addNewMusicStyle = musicStyle.splice(0, 0, "Реп", "Реггі")
console.log(addNewMusicStyle)
console.log(musicStyle)


const testAddConc = [1, 2, 3];
const testAddConc2 = [4, 5, 6]
const bigTestAdd = testAddConc.concat(testAddConc, testAddConc2)



// Напиши скрипт який замінює регістр кожного
//  символа в рядку на протилежний.
// Наприклад, якщо рядок «JavaScript», 
// то на виході повинно бути «jAVAsCRIPT».

// const textProba = prompt("Введіть будь який текст").split("")
// let resultProba = ""
// console.log(textProba)
// for (let symbol of textProba) {
//     if (symbol === symbol.toLocaleUpperCase()) {
//         symbol = symbol.toLocaleLowerCase();
//     } else {
//         symbol = symbol.toLocaleUpperCase ()
//     }
//     resultProba += symbol
// }
// console.log(resultProba)



const numbers2 = [5, 3, 1, 6];
const yourNumbers2 = numbers2.slice(1, 3);
console.log(yourNumbers2)
const copyNumbers2 = numbers2.slice()
console.log(copyNumbers2)

const myMessage2 = "Hello people";
const oneMyMessage = myMessage2.slice(6, 11);
console.log(oneMyMessage);

const kalugArry = "kalugin sviat"
console.log(kalugArry.slice(5, 9))