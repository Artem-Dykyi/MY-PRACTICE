// стовріть повідомлення в якому буде вкзазано кількість зірок 
// та рейтинг за допомогою циклу

const svHotel = {
    stars: 5,
    popularity: 10,
}
let message = "Готель має"
for (const key in svHotel) {
   
    message += ` ${key} - ${svHotel[key]},`
    // console.log(`Готель має ${key}, зі значенням ${svHotel[key]}`)
    // console.log(key)
    // console.log(svHotel[key])
}
console.log(message)


const products = {
    apple: 10,
    banana: 20,
    milk: 30,
    bread: 40,
}
let total = 0
for (const product in products) {
    total += products[product]
}
console.log(total)

console.dir(Object())
// const objectTest = {
//     keys() {

//     }
// }


// Object.keys()
// Даний метод  витягує всі ключі з обʼєкту та робить їх масивом
const user ={
    name: "Alex",
    age: 33
}
const userKeys = Object.keys(user)
console.log(userKeys)
const userValues = Object.values(user)
console.log(userValues)
const userEntries = Object.entries(user)
console.log(userEntries)

// Написати функцію яка буде повертати масив всіх імен друзів
// console.log(getAllNames(friends));
// Дано масив об’єктів
// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: false },
//     { name: 'Ajax', online: false },
//   ];

const productsSeco = {
    apple: 10,
    banana: 20,
    milk: 30,
    bread: 40,
}
const productsValues = Object.values(products)
console.log(productsValues)

let sum = 0;
for (const product of productsValues) {
    sum += product
}
console.log(sum)