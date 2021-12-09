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

const allAnswers = answerArray.map(element => [...element.falseAnswers, element.trueAnswer])
const allAnswersConcatenated = Array.prototype.concat.apply([], allAnswers)

const IsLabel = (item) => item.type ==='label' ? true : false

function SetQuestionParagraphAttributes(item) 
{
    item.style.paddingTop = '20px'
}

function SetAnswerInputAttributes(item)
{
    item.setAttribute('type', 'radio')
    item.setAttribute('id', 'nesto')
    item.setAttribute('value', 'nesto')
}

function SetAnswersTextContent(item)
{
    answerLabels.forEach((element, index) => {
        item.textContent = allAnswersConcatenated[index]
    })
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

const answerSection = []
const answerLabels = []
//Answer section
answerArray.forEach((answer, index) => {
    
    const section = document.createElement('div')
    section.classList.add('answerSection')
    section.style.backgroundColor = 'crimson'
    section.style.display = 'block'
    
    const blueprint = CreateAnswerBlueprint()
    
    blueprint.forEach((item, index) => {
        IsLabel(item) ? answerLabels.push(item) : false
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
    section.classList.add('questionSection')
    section.style.backgroundColor = 'yellow'
    
    const questionAndAnswers = [
        {type: 'paragraph', element: document.createElement('p')},
    ]
    
    questionAndAnswers.forEach(item => {
        if (item.type === 'paragraph') {
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


answerLabels.forEach((element, index) => {
    element.textContent = allAnswersConcatenated[index]
})










questionAndAnswersSection.append(questionAnswerForm)


//Apendanje na dokument
document.body.append(mainHeaderSection)
document.body.append(scoreSection)
document.body.append(questionAndAnswersSection)
