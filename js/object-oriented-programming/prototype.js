// Прототипне наслідування
// flower - це прототип
// rose - екземпляр flower 
// daisys - екземпляр flower 
// yellowRose - екземпляр flower 
// yellowRose1 - екземпляр flower 
// yellowRose2 - екземпляр flower 
const flower = {
    plant: true,
    owner: "Artem"
}
console.log(flower)

const rose = Object.create(flower)
console.log(rose)

rose.color = "red"
console.log(rose)

const daisys = Object.create(flower)
daisys.color = "white"
console.log(daisys)

const yellowRose = Object.create(flower)
yellowRose.color = "yellow"

const yellowRose1 = Object.create(yellowRose)
yellowRose.name = "Fiby"

const yellowRose2 = Object.create(yellowRose)
yellowRose2.name = "Andriy"

console.log(yellowRose1)
console.log(yellowRose2)
console.log(yellowRose2.owner)

console.log(Array())

