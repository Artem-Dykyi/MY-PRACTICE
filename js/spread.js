// Присвоєння за посиланням

// let a = 44;
// const b = a 

// У змінну b записалася копія значення змінної а (44)

// console.log(a === b)
// a = 100

// у змінну а поставили нове число 100 але в b ми значення ми 
// не міняли і там залишилась стара копія а (44)
// console.log(a === b)


const basket = {
    prodact: "apple",
};
const basket2 = {...basket};

// ми поставили basket у basket2 і у basket2 поставилась 
// не копія, basket, а передалось оригінальне посилання на об'єкт

console.log("перший кошик", basket, "другий кошик", basket2)

basket2.fruit = "kiwi"
console.log("перший кошик", basket, "другий кошик", basket2)




const userLocation = {
    location: "Kyiv",
}

const userData = {
    hobby: "swimming",
    location: "Lviv"
}

// const user ={...userData, ...userLocation}
// const user = {
//     hobby: "swimming", 
//     location: "Lviv",
//     location: "Kyiv",
// }

const user = {
    hobby: "swimming", 
    location: "Kyiv",
}
console.log(user)