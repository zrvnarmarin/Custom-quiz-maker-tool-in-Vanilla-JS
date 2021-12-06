const request = new XMLHttpRequest()
request.open('GET', 'http://www.https://jsonplaceholder.typicode.com/todos.com')
request.send()

request.addEventListener('readystatechange', () => {
    if (request.readyState === 4)
    {
        console.log(request.responseText)
    }
})