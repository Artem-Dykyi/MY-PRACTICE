// Метод addEventListener додає слухач на вказаний нами елемент 

const btn = document.querySelector(".test-btn")
btn.style.color = "blue"
btn.style.backgroundColor = "yellow"

// function changeBgColour () {
//     const bodyEle = document.querySelector("body")
//     bodyEle.style.backgroundColor = "blue"
// }
// btn.addEventListener("click", changeBgColour)


btn.addEventListener("click", () => {
    const bodyEle = document.querySelector("body")
    const redValue = (Math.round (Math.random() * (255 - 0) + 0));
    const greenVlu = (Math.round (Math.random() * (255 - 0) + 0));
    const blueValue = (Math.round (Math.random() * (255 - 0) + 0));
    const color = `rgb(${redValue}, ${greenVlu}, ${blueValue})`
    bodyEle.style.backgroundColor = color
})


// Напишіть скрипт зміни кольору кнопки при натискані на неї.
// Напиши скрипт реалізації додавання класу до заголовка при кліку на кнопку ‘Додати стилі’.
// Написати програму яка буде виводити данні введені в інпут в інтерфейс сторінки.
// Створити форму, після сабміту виводити на екран повідомлення ‘Ви зареєструвалися успішно! Дякую!’

const btnPrac = document.querySelector(".prac-btn")
btnPrac.addEventListener("click", () => {
   btnPrac.style.backgroundColor = "red"
})

const mainTitle = document.querySelector("h2")
const btnTitle = document.querySelector(".change-color")
btnTitle.addEventListener("click", () => {
    mainTitle.classList.add("color-for-title")
})

// подія submit може зібрати дані з форми та відправити їх по кліку на кнопку з типом 
// подію submit ми завжди чепляємо не на кнопку а на саму форму 


const form = document.querySelector(".registrationForm")
function testData(data){

}
form.addEventListener("submit", (event) => {
    event.preventDefault() //Щоб не оновлювалася сторінка сама 
    const formData = {
        email : event.target.elements.userEmail.value,
        password: event.target.elements.userPassword.value,
        checkbox: event.target.elements.checkbox.value
    };
    testData (formData)
    // event.target.elements.userEmail.value = ""
    // event.target.elements.userPassword.value = "" //очищаємо поля форми
    // event.target.reset();
    console.log(formData)
    return formData
})


//  подія focus натиск на інтерактивний обєкт 

const input = document.querySelector("#radio-input");
input.addEventListener("focus", (event) => {
    event.target.style.boxShadow = "5px 5px 5px 5px green"
    event.target.style.outline = "none"

})
input.addEventListener("blur", (event) => {
    event.target.style.boxShadow = "none"
})