// document.createElement() -- цей метод дозволяє створити новий елемент в пам'яті але не на сторінці 

const box = document.createElement("div")
console.log(box)

const imgElement = document.createElement("img")
const textElement = document.createElement("p")
const titleElement = document.createElement("h2")
const mainTitleElem = document.createElement("h1")
const linkElement = document.createElement("a")
// box.appendChild(imgElement)
// console.log(box)
// box.appendChild(textElement)
// console.log(box)

box.append(imgElement, textElement)
console.log(box)
// метод append дозволяє додати елементи всередину box

box.prepend(titleElement)
console.log(box)
// метод prepend дозволяє додати елемент всередину бокс зверху над елементами 

const page = document.querySelector("body")
console.log(page)

page.prepend(box)
box.before(mainTitleElem)
console.log(page)
box.after(linkElement)



// створити статтю яка буде складатися з зображення інформацї та кнопки
//  або лінка і наповнити її відповідним контентом


const paragraf = document.createElement("article")
const paragImg = document.createElement("img")
const paragText = document.createElement("p")
const paragBtn =  document.createElement("button")


paragraf.append(paragText, paragImg, paragBtn)
paragText.textContent = "Сьогодні ми подивимось на бобра"
paragText.style.color = "tomato"

paragraf.classList.add("bober")
paragImg.classList.add("bober-img")
paragText.classList.add("bober-text")
paragBtn.classList.add("bober-btn")

paragImg.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/American_Beaver.jpg/640px-American_Beaver.jpg"
paragImg.alt = "bober"

paragBtn.textContent = "Good Day"
paragBtn.style.backgroundColor = "yellow"

const pageParagraf = document.querySelector("body")
pageParagraf.append(paragraf)

// const boxTest = ` <article>
//         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/American_Beaver.jpg/640px-American_Beaver.jpg" alt="">
//         <p>сьогодні побачите вилку</p>
//         <button style="background-color: red;">Клік</button>
//     </article>`
//     console.log(boxTest)

// const pageTest = document.querySelector("body")

// pageTest.innerHTML = boxTest


// document.querySelector("body").innerHTML = ` <article>
//          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/American_Beaver.jpg/640px-American_Beaver.jpg" alt="">
//          <p>сьогодні побачите вилку</p>
//          <button style="background-color: red;">Клік</button>
//      </article>`;


///////////////////////////////////////
// властивість innerHTML дозволяє шлянути інформацію яка лежить між відкриваючим та закриваючтм тегом елемента; а також можна замінити цю інформацію

// const titleEleTest = document.querySelector("h1")
// console.log(titleEleTest.innerHTML);

// const boxEleTest = document.querySelector("article")
// console.log(boxEleTest.innerHTML)
// console.log(boxEleTest)

// boxEleTest.innerHTML = `<img src="" alt="">`
// console.log(boxEleTest.innerHTML)
// console.log(boxEleTest)


// метод insertAdjacentHTML дозволяє додати кусок розмітки у вигляді рядка до певного елемента
const boxElement2 = document.querySelector(".box2")
boxElement2.insertAdjacentHTML("afterbegin", `<img src="" alt="">`)
console.log(boxElement2)

boxElement2.insertAdjacentHTML("beforeend", `<p></p>`)
boxElement2.insertAdjacentHTML("beforebegin", `<a></a>`)

//////////////////////////////////////////////////
// Методи для роботи з атрибутами 

const linkSv = document.createElement("a")
// linkSv.href = ""

linkSv.setAttribute("href", "https//google.com") //додає атрибут до елемента та значення до атрибуту

// метод getAttribute дивиться яке значення лежить в атрибуті
const attributeValue = linkSv.getAttribute("href")
console.log(linkSv)
console.log(attributeValue)

// метод hasAttribute перевиряє чи є певний елемент в атрибуті 
const isHrefFindLink = linkSv.hasAttribute("href")
console.log(isHrefFindLink)

const attrsObj = linkSv.attributes
console.log(attrsObj)

const delAttr = linkSv.removeAttribute("href")
console.log(linkSv)

// data атрибутами позначають елемент що на ньому є js 
const openBtn = document.querySelector("[data-open]")
openBtn.dataset.open 
console.log(openBtn.dataset.open)

const sendBtn = document.querySelector("[data-send]")

// Практика 
// Створити та додати колекцію кнопок з динамічними даними
//  з масиву об’єктів. використати метод createElement

const colorPickerOptions = [
    { label: 'red', color: '#F44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color: '#2196F3' },
    { label: 'grey', color: '#607D8B' },
    { label: 'pink', color: '#E91E63' },
    { label: 'indigo', color: '#3F51B5' },
  ];

// const boxEle = document.querySelector(".color-picker")
// colorPickerOptions.forEach(({label, color}) => {
//     const btnEle = document.createElement("button")
//     boxEle.prepend(btnEle)
//     btnEle.style.color = color;
//     btnEle.textContent = label
// })

const boxEle = document.querySelector(".color-picker")
colorPickerOptions.map(({label, color}) => {
    boxEle.insertAdjacentHTML(
        "beforeend",
        `<button type="button"  class="btn">${label}</button>`
    )
})
const allBtn = document.querySelectorAll("")
