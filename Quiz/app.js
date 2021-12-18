import { questionsArray } from "./Questions.js"
import  { answerArray } from "./Answers.js"

//Main Quizz Header section
const mainHeaderText = document.createElement('h1')
const mainHeaderSection = document.createElement('div')

mainHeaderText.textContent = 'Metallica Quizz'
mainHeaderText.classList.toggle('main-header-text')
mainHeaderSection.append(mainHeaderText)
mainHeaderSection.classList.toggle('main-header-section')

//Score section - vidjeti kako da span tag od countera ne utječe na resize cijele sekcije kad se poveća counterov font size
let counter = 0
const scoreSection = document.createElement('div')
const scoreParagraph = document.createElement('p')
const counterSpan = document.createElement('span')

scoreSection.classList.toggle('score-section')
scoreSection.style.visibility = 'visible' //promijeniti poslije
scoreSection.append(scoreParagraph)

scoreParagraph.textContent = 'Your score is: '
scoreParagraph.classList.toggle('score-section-paragraph')
scoreParagraph.append(counterSpan)

counterSpan.textContent = counter
counterSpan.classList.toggle('score-section-counter')

//Questions/Answers section
const questionAndAnswersSection = document.createElement('div')
const questionAnswerForm = document.createElement('form')

const allAnswers = answerArray.map(element => [...element.falseAnswers, element.trueAnswer])
const allAnswersConcatenated = Array.prototype.concat.apply([], allAnswers)

function SetSectionClass(section, className)
{
    section.classList.add(className)
}

function SetAnswerSectionAttributes(section)
{
    section.style.backgroundColor = 'crimson'
    section.style.display = 'block'
}

function SetQuestionSectionAttributes(section)
{
    section.style.backgroundColor = 'yellow'
}

questionAndAnswersSection.classList.toggle('question-answer-section')

function CreateAnswerBlueprint()
{
    const answersBlueprint = [
        {type: 'input', element: document.createElement('input')},
        {type: 'label', element: document.createElement('label')},
        {type: 'input', element: document.createElement('input')},
        {type: 'label', element: document.createElement('label')},
        {type: 'input', element: document.createElement('input')},
        {type: 'label', element: document.createElement('label')},
        {type: 'input', element: document.createElement('input')},
        {type: 'label', element: document.createElement('label')},
    ]
    
    return answersBlueprint
}

function CreateQuestionBlueprint()
{
    const questionBlueprint = [
        {type: 'paragraph', element: document.createElement('p')}
    ]

    return questionBlueprint
}

function SetQuestion(item, i)
{
    item.textContent = questionsArray[i].question
}

function SetQuestionParagraphAttributes(item) 
{
    item.style.paddingTop = '20px'
}

const IsLabel = (item) => item.type ==='label' ? true : false
const IsInput = (item) => item.type ==='input' ? true : false
const IsParagraph = (item) => item.type ==='paragraph' ? true : false

function SetAnswersTextContent(item)
{
    answerLabels.forEach((element, index) => {
        item.textContent = allAnswersConcatenated[index]
    })
}

function SetAnswerInputAttributes(item)
{
    const array = ['first', 'second', 'third', 'fourth']

        array.map((element, index) => {
        item.setAttribute('id', `${++index} answer`)
    })

    item.setAttribute('type', 'radio')
    item.setAttribute('value', 'nesto')
}

function SetAnswerLabelAttributes(item)
{
    item.setAttribute('for', 'nesto') 
    SetAnswersTextContent(item)
}

function SetAnswerAttributes(answer)
{
    if ( answer.type === 'input')
    SetAnswerInputAttributes(answer.element)
    
    if ( answer.type === 'label')
    SetAnswerLabelAttributes(answer.element)
}

const answerSection = []
const answerLabels = []
const answerInputs = []

const numbers = [1,2,3,4,5,6,7,8]

const Every_nthElement = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
console.log(Every_nthElement(numbers, 4))
console.log(answerInputs)


//Answer section
answerArray.forEach((answer, index) => {
    
    const section = document.createElement('div')
    SetSectionClass(section, 'answerSection')
    SetAnswerSectionAttributes(section)
    
    const blueprint = CreateAnswerBlueprint()
    console.log(blueprint)
    
    blueprint.forEach((item, index) => {
        IsLabel(item) ? answerLabels.push(item) : false
        IsInput(item) ? answerInputs.push(item) : false
        SetAnswerAttributes(item)
        section.append(item.element)
    })
    
    answerSection.push(section) 
    questionAnswerForm.append(section)
})


const questionSection = []
//Question section
questionsArray.forEach((question, index) => {
    
    const section = document.createElement('div')
    SetSectionClass(section, 'questionSection')
    SetQuestionSectionAttributes(section)
    
    const blueprint = CreateQuestionBlueprint()
    
    blueprint.forEach(item => {
        if (IsParagraph(item)) {
            SetQuestionParagraphAttributes(item.element)
            SetQuestion(item.element, index)
        }
        
        section.append(item.element)
    })
    
    questionSection.push(section)
    questionAnswerForm.append(section)
})

//Nesting answer section inside question section
const questionAndAnswerMerge = questionSection.map((element, i) => element.append(answerSection[i]));















questionAndAnswersSection.append(questionAnswerForm)


//Apendanje na dokument
document.body.append(mainHeaderSection)
document.body.append(scoreSection)
document.body.append(questionAndAnswersSection)
