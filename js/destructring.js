const playList = {
  title: "Favourite mood",
  author: {
    name: "Ford Sally",
    age: 29,
    popular: true,
    lacation: {
      city: "Roum",
      country: "Italy",
    },
  },
};
const authorAge = playList.author.age;
console.log(authorAge);

const authorCountry = playList.author.lacation.country;
console.log(authorCountry);

// деструкторуризація це скорочення звернення до ключа в об'єкті

// const {назва ключа 1, назва ключа 2} = назва об'єкта

// const { author, title } = playList;
// console.log(title);
// console.log(author);

// const product = {
//   name: "banana",
//   price: 25,
//   photo:
//     "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fua%2Fsearch%3Fk%3Dbanan&psig=AOvVaw0l6G5H5KKy95BTebO23iPE&ust=1728897917251000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJDh9eKEi4kDFQAAAAAdAAAAABAP",
//   info: {
//     city: "Lviv",
//     country: "Ukraine",
//   },
// };

// const producCountry = product.info.country
// console.log(producCountry)
// const producCity = product.info.city
// console.log(producCity)

// const { name, price, photo } = product;
// console.log(name, price, photo);

// глибока диструктаризація

// const {city, country} = product.info
// console.log(city, country)

// const {info} = product;
// console.log(info)

// якщо нам треба витягнути ключи з глибше вкладеного
//  обєкта то використовуємо такий синтаксис
// const {} = назва обєкта
// const {info: {city, country} } = product
// console.log(city)
// console.log(info) працюваити не буде бо ми
// його розпакували у змінні city, country

// const {weight = 0, name = "без імені"} = product
// console.log(weight, name)
// let info = "test";

// const { info: productInfo, ...information } = product;
// const {info: переназиваємо цю змнінну на productInfo, збираємо всі ключі через rest в інший обєкт який назвали ...information} = product

// console.log(information);
// console.log(info);
// console.log(productInfo);

// деструктуризація масивів

// const rgb = [200, 250, 100];
// const [red, green, blue] = rgb

const products = [
  {
    title: "tomato",
    price: 30,
  },
  {
    title: "cucumber",
    price: 35,
  },
  {
    title: "potato",
    price: 25,
  },
];

// const tomatoProduct = products[0]
// console.log(tomatoProduct)
// const [tomatoProduct, cucumberProduct, pomatoProduct, bananaProduct = {}] = products
// console.log(tomatoProduct, cucumberProduct, pomatoProduct, bananaProduct)

// const [tomatoProduct, ...otherProducts] = products
// console.log(tomatoProduct, otherProducts)

// const [ , cucumberProduct, ] = products
// console.log(cucumberProduct)

let [tomatoProduct, , pomatoProduct] = products;
console.log(tomatoProduct, pomatoProduct);

tomatoProduct = { ...tomatoProduct, country: "Ukraine" };
console.log(tomatoProduct);

// Провести глибоку деструктуризацію об’єкту

const musicLibrary = {
  count: 2,
  artists: [
    {
      name: "The Beatles",
      albums: [
        {
          title: "Sgt. Pepper's Lonely Hearts Club Band",
          year: 1967,
          tracks: [
            { title: "With a Little Help from My Friends", duration: "2:44" },
            { title: "Lucy in the Sky with Diamonds", duration: "3:28" },
            { title: "A Day in the Life", duration: "5:33" },
          ],
        },
        {
          title: "Abbey Road",
          year: 1969,
          tracks: [
            { title: "Come Together", duration: "4:19" },
            { title: "Something", duration: "3:01" },
            { title: "Here Comes the Sun", duration: "3:06" },
          ],
        },
      ],
    },
    {
      name: "Pink Floyd",
      albums: [
        {
          title: "The Wall",
          year: 1979,
          tracks: [
            { title: "Another Brick in the Wall, Part 2", duration: "3:59" },
            { title: "Comfortably Numb", duration: "6:23" },
            { title: "Hey You", duration: "4:40" },
          ],
        },
        {
          title: "Dark Side of the Moon",
          year: 1973,
          tracks: [
            { title: "Speak to Me/Breathe", duration: "3:58" },
            { title: "Time", duration: "7:06" },
            { title: "Money", duration: "6:22" },
          ],
        },
      ],
    },
  ],
};

// const { count, artists } = musicLibrary;
// console.log(count, artists);
const {
    count,
    artists: [
      {
        name,
        albums: [
          {
            title,
            year,
            tracks: [
              { title: trackTitle1, duration: duration1 },
              { title: trackTitle2, duration: duration2 },
              { title: trackTitle3, duration: duration3 },
            ],
          },
          {
            title: title2,
            year: year2,
            tracks: [
              { title: trackTitle4, duration: duration4 },
              { title: trackTitle5, duration: duration5 },
              { title: trackTitle6, duration: duration6 },
            ],
          },
        ],
      },
      {
        name: name2,
        albums: [
          {
            title: title3,
            year: year3,
            tracks: [
              { title: trackTitle7, duration: duration7 },
              { title: trackTitle8, duration: duration8 },
              { title: trackTitle9, duration: duration9 },
            ],
          },
          {
            title: title4,
            year: year4,
            tracks: [
              { title: trackTitle10, duration: duration10 },
              { title: trackTitle11, duration: duration11 },
              { title: trackTitle12, duration: duration12 },
            ],
          },
        ],
      },
    ],
  } = musicLibrary;

//   Напишіть функцію, яка отримує об'єкт з ім'ям, прізвищем та віком
//  та використовує деструктуризаціюдля повернення рядка, що містить інформацію 
//  про цю людину в такому форматі: "Мене звати Ім'я Прізвище і мені Вік років".


// const person = {
//     name: 'Nelli',
//     surname: 'Laroy',
//     age: 25,

//     // personInfo(person) {
//     //     const {name, surname, age} = person
//     //      return `Мене звати ${name}, ${surname} і мені ${age} років`
       
//     // }
//   };

const personInfo = ({name, surname, age}) => `Мене звати ${name}, ${surname} і мені ${age} років`
// console.log(person.personInfo(person));


// Напишіть функцію, яка приймає об'єкт, що містить інформацію 
// про студента (ім'я, прізвище, оцінки за три предмети) та 
// використовує деструктуризацію для повернення 
//  середньої оцінки студента.
const student = {
    name: 'Bruce',
    surname: 'Lee',
    grades: [4, 5, 3, 8, 9]
  };

  const calculateAverageGrade = function(student) {
    const {grades} = student
    let allMarks = 0
    for (const mark of grades) {
        allMarks += mark
    }
    const result = allMarks / grades.length
    return result

  }
 
  console.log(calculateAverageGrade(student));


//   Напишіть функцію, яка отримує масив об'єктів з інформацією
//    про товари (назва, ціна, кількість) та використовує
//     деструктуризацію для обчислення загальної вартості товарів.
  const items = [
    { name: 'Футболка', price: 250, quantity: 2 },
    { name: 'Джинси', price: 800, quantity: 1 },
    { name: 'Кросівки', price: 1200, quantity: 1 }
  ];
 
//   const calculateTotalCost = function([
//         {name: name1, price: price1, quantity: quantity1},
//         {name: name2, price: price2, quantity: quantity2},
//         {name: name3, price: price3, quantity: quantity3},
//     ] = items) => price1 * quantity1 + price2 * quantity2 + price3 * quantity3
//   console.log(calculateTotalCost(items)); // 250 * 2 + 800 * 1 + 1200 * 1 = 2500


// Напишіть функцію, яка отримує об'єкт зі списком електронних 
// адрес (поле "emails") та використовує деструктуризацію 
// для повернення першої адреси в цьому списку.
// const personG = {
//     name: 'John',
//     emails: ['john@gmail.com', 'john@example.com', 'john123@yahoo.com']
//   };
//  const getFirstEmail = ({ emails: [email] } = personG) => email
//   console.log(getFirstEmail(person)); // 'john@gmail.com'


// Напишіть функцію, яка отримує об'єкт зі списком користувачів 
// (поле "users"), де кожен користувач є об'єктом з полями "ім'я" 
// та "вік", та використовує деструктуризацію для повернення 
// списку користувачів, які старші за 18 років.
const data = {
    users: [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 17 },
      { name: 'Bob', age: 30 },
      { name: 'Alice', age: 20 }
    ]
  };
 
  const getAdultUsers = function({ users }) {
    const adultUsers = []
    for (const user of users) {
        const {name, age} = user
        if (age > 18 ){
            adultUsers.push(user)
        }
        return adultUsers
    }
}

  console.log(getAdultUsers(data)); // [{ name: 'John', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Alice', age: 20 }