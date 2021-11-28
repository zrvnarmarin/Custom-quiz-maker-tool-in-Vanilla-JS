// const addHeaderButton = document.createElement('button')
// const addRowButton = document.createElement('button')
// const addDataButton = document.createElement('button')
// const buttonFlexbox = document.createElement('div')
// const tr = document.querySelector('.table-headers')
// const trWithData = document.querySelector('.table-data')

// const buttons = [
//     {id: 1, button: addHeaderButton}, 
//     {id: 2, button: addRowButton}, 
//     {id: 3, button: addDataButton} 
// ]
// const buttonNames = [ 
//     {id: 1, function: "Add Header"}, 
//     {id: 2, function: "Add Row"}, 
//     {id: 3, function: "Add Data"}
// ]

// const buttonsWithNames = buttons.map((button, i) => Object.assign(button, buttonNames[i]));

// buttonsWithNames.forEach(item => {
//     item.button.textContent = `${item.function}`
//     SetButtonProperties(item.button)
//     buttonFlexbox.append(item.button)
// })

// buttonsWithNames.forEach(element => {
//     if (element.button === addHeaderButton)
//     {
//         element.button.addEventListener('click', e => {
//             const newHeader = document.createElement('th')
//             newHeader.textContent = 'blabla'
//             console.log(newHeader)
//             tr.append(newHeader)
//         })
//     }
//     if (element.button === addDataButton)
//     {
//         element.button.addEventListener('click', e => {
//             const newTableData = document.createElement('td')
//             newTableData.textContent = 'blabla'
//             console.log(newTableData)
//             trWithData.append(newTableData)
//         })
//     }
// })

// document.body.append(buttonFlexbox)
// SetButtonFlexboxStyle(buttonFlexbox)




// //Styling
// function SetButtonProperties(button)
// {
//     button.style.backgroundColor = 'blue';
//     button.style.fontSize = '50px';
//     button.style.marginTop = '30px';
//     button.style.marginRight = '30px';
// }
// function SetButtonFlexboxStyle(buttonFlexbox)
// {
//     buttonFlexbox.style.backgroundColor = 'red'
//     buttonFlexbox.style.marginTop = '20px'
//     buttonFlexbox.style.marginBottom = '20px'
//     buttonFlexbox.style.border = '5px solid black'
//     buttonFlexbox.style.borderRadius = '10px'
//     buttonFlexbox.style.display = 'flex'
//     buttonFlexbox.style.justifyContent = 'space-evenly'
// }
function AnswerBlueprint()
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

    

    console.log(answersBlueprint.element)
}
AnswerBlueprint()