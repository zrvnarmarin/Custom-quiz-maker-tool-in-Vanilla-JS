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
questionAndAnswersSection.classList.toggle('question-answer-section')

function SetQuestion(item, i)
{
    item.textContent = questionsArray[i].question
}

function SetQuestionParagraphAttributes(item) 
{
    
}

function SetAnswerInputAttributes(item)
{
    item.setAttribute('type', 'radio')
    item.setAttribute('id', 'nesto')
    item.setAttribute('value', 'nesto')
}

function SetAnswerLabelAttributes(item)
{
    item.setAttribute('for', 'nesto') 
    //setanje odgovora
    item.textContent = 'prvi odgovor'
}
////////////////////////////////////////////////////////////////////////////
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

function SetAnswerAttributes(answer)
{
    if ( answer.type === 'input')
    SetAnswerInputAttributes(answer.element)

    if ( answer.type === 'label')
    SetAnswerLabelAttributes(answer.element)
}

CreateAnswerBlueprint().forEach((item, i) => {
    SetAnswerAttributes(item)
    console.log(item.element, i)
})

answerArray.forEach((answer, index) => {

    const section = document.createElement('div')
    section.classList.add('answerSection')
    section.style.backgroundColor = 'green'

    const blueprint = CreateAnswerBlueprint()
    

    //console.log(AnswerBlueprint())
    section.append(blueprint)
    console.log(blueprint)
    questionAnswerForm.append(section)
})

//Question section
questionsArray.forEach((question, index) => {

    const section = document.createElement('div')
    section.classList.add('questionSection')
    section.style.backgroundColor = 'yellow'

    const questionAndAnswers = [
        {type: 'paragraph', element: document.createElement('p')},
    ]

    //console.log(section)
        
    questionAndAnswers.forEach(item => {
        if (item.type === 'paragraph') {
            SetQuestionParagraphAttributes(item.element)
            SetQuestion(item.element, index)
        }

        section.append(item.element)
    })

    questionAnswerForm.append(section)
})










questionAndAnswersSection.append(questionAnswerForm)


//Apendanje na dokument
document.body.append(mainHeaderSection)
document.body.append(scoreSection)
document.body.append(questionAndAnswersSection)
