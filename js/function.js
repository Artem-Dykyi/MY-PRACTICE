const firstFruits = "apples";

function showMessage(dataFruts) {
  const messageFruit = `Я люблю ${dataFruts}`;
  const bigmessageFruit = messageFruit.toUpperCase();
  return bigmessageFruit;
}

const resultFruits = showMessage(firstFruits)
console.log(resultFruits)

const resultFruits2 = showMessage("Tomato")
console.log(resultFruits2)


////////////////////////////////

const myNumbers = [1, 4, 78];

// тут передаємо параметри в круглих дужках
function mySumNumbers (arryNums) {
    console.log(arryNums)
}

// тут передаємо аргументи 
mySumNumbers (myNumbers)  





// Напишіть функцію makeGreetings(), 
// яка при виклику буде приймати змінну
// name (наприклад, «Василь») і виводити
// рядок (в нашому випадку «Привіт, Василь»).



// Є 2 способи створити функцію!!!!

console.log(svMakeGreetings("Mukola")) 

// 1) оголошення фунцкії (function decloration)
// створення функції \/ 
function svMakeGreetings(svUserName) {
// const svMessageGreeting = `Hello, ${svUserName}`
// return svMessageGreeting

return `Hello, ${svUserName}`
}

// покличемо створену функцію\/ 
const resultSvMake = svMakeGreetings("Vasuly")
console.log(resultSvMake)

const resultSvMake2 = svMakeGreetings("Albani")
console.log(resultSvMake2)




// 2) функціональний вираз (function expression)
// створення функції \/ 
const svMakeGreetings2 = function(svUserName2) {
    const gretings = `Hello,  ${svUserName2}`
    return gretings;
}

// покличемо створену функцію\/ 
const secondGreetings = svMakeGreetings2("Susana")
console.log(secondGreetings)

const anoterGreek = svMakeGreetings2("Galina")
console.log(anoterGreek)

// У фунцціональному виразі спочатку створити а потім викликати 



// Напишіть функцію mul(n, m),
//  яка приймає два аргументи і повертає добуток, 
//  суму і різницю цих аргументів. Перевірте її роботу.


// const mul = function(n, m) {
//     const sumMul = n + m 
//     const addMul = n * m
//     const differMul = n- m 
//     return `При додаванні ${sumMul}, При множенні ${addMul}, при відніманні${differMul}`
// }

// const resultMul = mul(6, 5)
// console.log(resultMul)


// Розглянемо як прювати з різною кількістю аргументів 

// const anotherMul = function(a, b, c) {
//     return a + b + c
// }
// const resultAnotherMulSum = anotherMul(8, 5)
// console.log(resultAnotherMulSum)

// const resultAnother = anotherMul(8, 9, 3)
// console.log(resultAnother)


const anotherMul = function(arryNumbers) {
    let sumArryNumbers = 0
    // for (let i = 0; arryNumbers.length < 0; i++) {
        sumArryNumbers += arryNumbers[i]
    // }

    return sumArryNumbers
}
const resultAnotherMulSum = anotherMul([8, 5])
console.log(resultAnotherMulSum)

const resultAnother = anotherMul([8, 9, 3])
console.log(resultAnother)

///////////////////////////////////////

