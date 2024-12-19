// Функції конструктори - це шаблони за якими ми можемо створювати модель (шаблон) а на базі моделі створюємо екземпляри

// const Car = function(modelCar, priceCar, colorCar) {
//     this.model = modelCar
//     this.price = priceCar
//     this.color = colorCar
// }

// const bmw = new Car("BMW", "1000$", "white")
// console.log(bmw)

// const toyota = new Car ("Toyota", "2000$", "yellow")
// console.log(toyota)


// Об'єкт параметрів це коли ми аргументи передаємо у вигляді об'єкта

const Car = function({modelCar, priceCar, colorCar, popularityCar = false}) {
    this.model = modelCar
    this.price = priceCar
    this.color = colorCar
    this.popularity = popularityCar
}

const dataBMW = {
    modelCar: "BMW", 
    priceCar: "1000$", 
    colorCar: "white",
    popularityCar: true
}

const bmw = new Car(dataBMW)
console.log(bmw)

const dataToyota = {
    modelCar: "Toyota", 
    priceCar: "2000$", 
    colorCar: "yellow",
}

const toyota = new Car(dataToyota)
console.log(toyota)