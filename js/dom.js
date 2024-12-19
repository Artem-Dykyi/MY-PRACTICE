// метод querySelector знаходить потрібний елемент у DOM дереві

// const boxElement = document.querySelector("div") - витягуэмо елемент через назву тега 
// const boxElement = document.querySelector(".box") - витягуэмо елемент через назву класу
// console.log(boxElement)

// const linkElement = document.querySelector(`[href=google.com]`) витягуємо елемент через його атрибут
// console.log(linkElement)

// const allItems = document.querySelectorAll("li") отримуємо масив елементів li
// console.log(allItems)

const listElement = document.querySelector("ul");
console.log(listElement);

const allItems = listElement.children;
console.log(allItems);

const firstItem = listElement.firstElementChild;
console.log(firstItem);

const lastItem = listElement.lastElementChild;
console.log(lastItem);

const secondItem = firstItem.nextElementSibling;
console.log(secondItem);

const thirdItem = lastItem.previousElementSibling;
console.log(thirdItem);

// властивість textContent дозволяє додати властивість в середині вузла
const textElement = document.querySelector("p")
console.log(textElement)

textElement.textContent = "Hello"

const addText = textElement.textContent
console.log(addText)

const page = document.body
page.style.backgroundColor = "orange"
console.log(page)

textElement.style.color = "blue"
textElement.style.fontSize = "36px"

const fotoElement = document.querySelector("img")
console.log(fotoElement)
fotoElement.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJEZDqeEtzYUOfH3KmnwxVjmHcQgPDJ3w-8w&s"
fotoElement.alt = "banana"

const hasFotoClass = fotoElement.classList.contains("cls")
console.log(hasFotoClass)

fotoElement.classList.add("three-foto")
console.log(fotoElement)

fotoElement.classList.remove("foto")
console.log(fotoElement)

fotoElement.classList.replace("three-foto", "three")
console.log(fotoElement)


/////////////////////////////////////////////

// Дано розмітку. 
// 1. Отримайте доступ до списку
// 2. Додайте жовтий колір фону 
// 3. Додайте клас "site-nav__link" до першого посилання
// 4. Збільшіть розмір шрифта посилання з атрибутом href="https://"

const listNav = document.querySelector(".site-nav")
console.log(listNav)

listNav.style.backgroundColor = "yellow"

listNav.firstElementChild.firstElementChild.classList.add("site-nav__link");
console.log(listNav)

const hasAtribu = listNav.querySelector(`[href="https://"]`)
console.log(hasAtribu)
hasAtribu.style.fontSize = "28px"



//////////////////////////////////////

// 1. Зробіть всі зовнішні посилання помаранчевими, змінюючи властивість style.
// 2. Оберіть всі посилання всередині списку та додайте першому і останньому клас зі стилями
// 3. Додайте заголовок до тексту та стилізуйте його за допомогою додаткового класу.
// 4. Замініть клас на заголовку.
// 5. Перевірте чи містить посилання клас list

// const anotherLink = document.querySelectorAll(`[ href="http://"]`)
// anotherLink.style.color = "orange"
// console.log(anotherLink)

const outhrefElements = document.querySelectorAll(`[href^="http://"]`);
outhrefElements.forEach((elem) => (elem.style.color = "orange"));

const allLinks = document.querySelectorAll("a + ul  a")
console.log(allLinks)

const firstLink = allLinks[0]
const lastLink = allLinks[allLinks.length - 1]

firstLink.style.color = "pink"
lastLink.style.color = "pink"