// const selector = document.querySelector('p')
// selector.innerText = 'ŽMArin je prejeben'
// console.log(selector)

// let newText = ' koja se nalazi u dokumentu!'

// const selectorsAll = document.querySelectorAll('p')
// selectorsAll.forEach(paragraph => {
//     console.log(paragraph.innerText)
//     paragraph.innerText += newText
// })

// const contentdiv = document.querySelector('.content p')
// contentdiv.innerText = 'Marin je gejjjj'
// console.log(contentdiv.innerText)
    
// const content = document.querySelector('.content')
// content.innerHTML += '<h1>Ovo je overrideani content</div>'
// console.log(content.innerHTML)

// const people = ['mario', 'luigi', 'yoshi']
// people.forEach(person => {
//     content.innerHTML += `<h3>${person}</h3>`
// })

// const link = document.querySelector('a')
// console.log(link.getAttribute('href'))

// link.setAttribute('href', 'http://www.facebook.com')
// link.innerText = 'The Facebook web site link'

// const messagge = document.querySelector('.error-msg')
// messagge.getAttribute('class')
// messagge.setAttribute('class', 'error-class')
// messagge.setAttribute('style', 'background-color: red')

// const pageTitle = document.querySelector('.page-title')
// pageTitle.setAttribute('style', 'color: blue')
// pageTitle.setAttribute('style', 'background-color: crimson') //ovaj ce overrideati stil iznad, tako da je bolej direktno dohvatiti style property

// //bolji nacin, koji ne overridea sve prijasnje stilove:
// pageTitle.style.color = 'blue'
// pageTitle.style.padding = '50px'
// pageTitle.style.fontSize = '50px'

// //brisanje stilova 
// pageTitle.style.padding = ''

// //BRISANJE ILI DODAVANJE KLASA
// const paragraph = document.querySelector('.random-paragraph')
// paragraph.classList.add('prva-dodana-klasa')
// paragraph.classList.add('druga-dodana-klasa')
// paragraph.classList.remove('prva-dodana-klasa')
// console.log(paragraph.classList) //--> rezultat: ranom paragraph, druga dodatna klasa
// paragraph.classList.add('random-paragraph-second-class')

// //property textContent prikazuje i dalje tekst iako je on možda sakriven(display: hidden)
// //funckija includes() nad textContentom ili innerTextom traži da li postoji neki string sa tom vrijednošću
// const paragraphs = document.querySelectorAll('.paragraphs > p')

// paragraphs.forEach(paragraph => {
//     paragraph.textContent.includes('succes')
//     ? paragraph.classList.add('random-paragraph-second-class') 
//     : paragraph.classList.add('random-paragraph')
// })

// //funckija toogle() dodaje klasu ako ne postoji u elementu, a briše ju ako postoji
// const pageTitle = document.querySelector('.page-title')
// pageTitle.classList.toggle('title')
// console.log(pageTitle.classList)

//ZA ZAPAMTITI - forEach() funckija se ne može upotrebljavati na HTML Collection tipu podataka, ali moze na arrayu i NodeListu
//HTML Collection možemo konvertirati u array putem Array.from() funckije i pritom manipulirati podacima

//DOM TRANVERSE
// const article = document.querySelector('article')
// const arrayArticle = Array.from(article.children)

// arrayArticle.forEach((child) => {
//     child.classList.add('article-child')
// })

//kako saznati parenta od elementa:
const headerTwo = document.querySelector('article > h2')
console.log(headerTwo.parentElement/*.parentElement --> grandparent*/)
console.log(headerTwo.nextElementSibling) //sljedeći sibling
console.log(headerTwo.previousElementSibling) //prošli sibling