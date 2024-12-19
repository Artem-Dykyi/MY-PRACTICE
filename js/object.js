// const playList = {
//     title: "My favourite songs", 
//     songs: ["Glory", "Aura", "Fluxxwave", "tt"],
//     quantity() {
//         return this.songs.length
//     }, 
//     addSong(){
//         const newSong = prompt("Яку пісню додати")
//         this.songs.push(newSong)
//         return this.songs
//     }
// }

// console.log(playList.title)
// console.log(playList.songs)
// console.log(playList.quantity())
// console.log(playList.addSong())

// вичисляючі властивості

const friendAge = "age"

const friend = {
    name: "Arsen",
    [friendAge]: 14,
    height: 180,
}
console.log(friend.age)

// короткий записис властивостей

// const colour = "red"

// const favourireColor = {
//     firstCol: colour,
//     secondCol: "blue",
//     thearedCol: "gren",
// }


// const firstCol = "red"

// const favourireColor = {
//     firstCol: firstCol,
//     secondCol: "blue",
//     thearedCol: "gren",
// }

// скоротимо цей запис 

const firstCol = "red"
const secondCol = "blue"
const thearedCol = "green"

const favourireColor = {
    firstCol,
    secondCol,
    thearedCol,
}
// firstCol: firstCol, можемо скоротити коли маємо однакові 
// значення в ключі і змінній





const user = {
    userName: "Oleg",
    userAdress: "Polova 777",
    userPhone: 828282
}

const adress = user.userAdress
console.log(adress)

const secondAdress = user["userAdress"]
console.log(secondAdress)


user.heightUser = 150
console.log(user)



// Створіть об'єкт "person" з властивостями "name", "age", "gender".
//  Додайте до об'єкту метод, який буде виводити на екран 
// повідомлення про особистість зі значеннями всіх властивостей.

const person = {
    namePerson: "Oken",
    agePerson: "10",
    gander: "male",
    getInfo() {
        console.log(`name: ${person.namePerson}, Age: ${person.agePerson}, Gander: ${person.gander}`)
    }
}




// Створіть масив об'єктів "students", де кожен об'єкт буде містити 
// властивості "name", "age", "gender" та "grade". Напишіть функцію, 
// яка приймає масив об'єктів "students" і повертає середній бал групи.

const students = [
    {
        dogName: "Roof",
        dogAge: 3,
        gender: "male",
        grade: 10, 
        
    },
    {
        dogName: "Spot",
        dogAge: 4,
        gender: "male",
        grade: 11, 
    }
]

function averageGrad(students)  {
    let sumGrude = 0;
    for (const student of students) {
        sumGrude += student.grade
    }
    const averGrade = sumGrude / students.length;
    return
}
console.log(averageGrad(students))

// Створіть об’єкт "сar", який буде мати властивості
//  "brand", "model", "year" та "color". Додайте метод, 
//  який буде виводити на екран повідомлення про автомобіль 
//  зі значеннями всіх властивостей.


const car = {
    brand: "BMW",
    model: "m3",
    year: 2019,
    color: "white",
    everInfoCar () {
        return `brand ${this.brand}, model ${this.model}, year ${this.year}, color ${this.color}`
    }
}
console.log(car.everInfoCar())


// Працюємо з колекцією товарів в кошику:
// Написати методи вказані нижче в коді
// { name: '🍎', price: 50 }
// { name: '🍇', price: 70 }
// { name: '🍋', price: 60 }
// { name: '🍓', price: 110 }

// const products = {
//     fruts: [
//     { name: '🍎', price: 50 },
//     { name: '🍇', price: 70 },
//     { name: '🍋', price: 60 },
//     { name: '🍓', price: 110 },
// ],

// productsQuantity() {
//     return this.fruts.length;
// },
// addFruit() {
//     const newFruit = promt("what frut would you like to add")
//     this.fruts.push(newFruit)
//     return
// },
// deleteFruits() {
//     const deleteFtuit = promt("What fruit you like to delete")
//     let indexOfEllement;
//     for (const fruit of this.fruits) {
//         if( fruit.name === deleteFtuit) {
//             const indexOfEllement = this.fruts.indexOf(fruit)
//         }
//     }
//     // const indexOfEllement = this.fruts.indexOf(deleteFtuit)
//     this.fruts.splice(indexOfEllement, indexOfEllement + 1)
//     return
// },
// editFruts() {
//     // const editFruitName = promt("Який фрукт ви хочете замінити");
//     const editFrutPrice = Number(prompt("яка нова ціна"))
//     for (const fruit of this.fruits) {
//         if(fruit.name === editFruitName) {
//             fruit.price = editFrutPrice
//         }
//     }
// },
// totalPrice () {
//     let total = 0
//     for (const fruit of this.fruits){
//         total += fruit.price
//     }
// }
// };

// console.log(products.productsQuantity());
// console.log(products.productsQuantity());
// // products.deleteFruits()
// products.editFruts()
// console.log(totalPrice)
// console.log(products.productsQuantity())
// console.log(products.fruts)


///////////////////////////////////////////////////////

// Створіть масив об'єктів "movies", де кожен об'єкт буде містити
//  властивості "title", "director", "year" та "genre". 
//  Напишіть функцію, яка приймає масив об'єктів "movies" 
// та жанр (строку) як параметри, та повертає масив фільмів,
//  які належать до цього жанру.

let movise = [
    {title: "Interpiration", director: "Fo Fo", year: 201, genre: "ss"},
    {title: "Lopata", director: "Vo Lo", year: 2001, genre: "po"},
    {title: "Porit", director: "Dotp", year: 2021, genre: "po"},
];

function getMoviesByGenre(movies, genre) {
    let result = [];
    for (let i = 0; i < movies.length; i++){
        if (movies[i].genre === genre) {
            result.push(movies[i])
        }
    }
    return result
}

let ssMovies = getMoviesByGenre (movise, "po")
console.log(ssMovies)

// Написати функцію яка буде повертати масив імен друзів які офлайн
// console.log(getOfflineFriends(friends));
// Написати функцію яка буде повертати об’єкт масивів
//   імен друзів які офлайн та онлайн. Створити 2 масива онлайн і офлайн,
//     якщо тру - в перший, якщо ні - в другий
// const getFriendsByStatus = function () {};
 
//   const friendByStat = {
//     onlineFriends: [],
//     offlineFriends: [],
//   }
//   console.log(getFriendsByStatus(friends));


const myFriends = {
    friends: [
        {
            name: "Nelya",
            isOneline: true,
        },
        {
            name: "Kata",
            isOneline: true,
        },
        {
            name: "Vika",
            isOneline: true,
        },
        {
            name: "Gosha",
            isOneline: true,
        },
        {
            name: "Kola",
            isOneline: true,
        },
    ],
    findFriendByName(name) {
        let message = "This friend does not existed";
        for (const friend of this.friends) {
            if (friend.name === name) {
                // message = `The friend ${}`
            }
        }
    },
    getAllNames () {
        let message = "";
        for (const friend of this.friends) {
            message += friend.name + ", "
        }
        return message
    },
    getOnlineFriends () {
        let message = "";
        for (const friend of this.friends) {
            if (friend.isOneline === true) {
                message += friend.name + ", "
            }
        }
        return message
    },
    getOfflineFriends() {
        let message = ""
        for (const friend of this.friends) {
            if (friend.isOneline === false) {
                message += friend.name + ", "
            }
        }
    },
    getFriendByStatus (){
        const onlineFriends = []
        const offlineFriends = []
        for (const friend of this.friends) {
            if (friend.isOneline === true) {
                onlineFriends.push(friend)
            } else {
                offlineFriends.push(friend)
            }
        }
        
    }
};

console.log(myFriends.getAllNames())
console.log(myFriends.findFriendByName("Kata"))
console.log(myFriends.getFriendByStatus())
console.log(myFriends.getOfflineFriends())
console.log(myFriends.getOnlineFriends())

