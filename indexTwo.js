function GetData(callback)
{
    let test;
    const request = new XMLHttpRequest()

    request.open('GET', 'http://localhost:8000/users', true)

    request.addEventListener('readystatechange', e => {
        if (request.status === 200 && request.readyState === 4)
        {
            test = JSON.parse(request.response)
            callback(test)
        }
    })

    request.send()

    return test
}

// GetData((test) => {
//     console.log(test)
// })

function DeleteData()
{
    const request = new XMLHttpRequest()
    request.open('DELETE', 'http://localhost:8000/users/2')

    request.addEventListener('readystatechange', e => {
        if (request.status === 200 && request.readyState === 4)
        {
            console.log(request.responseText)
        }
    })

    request.send()
}

// DeleteData()

function Postdata()
{
    const request = new XMLHttpRequest()
    request.open('POST', 'http://localhost:8000/users')
    request.setRequestHeader('Content-type', 'application/json');

    request.addEventListener('readystatechange', e => {
        if (request.status === 200 && request.readyState === 4)
        {
            console.log(request.responseText)
        }
        
    })

    request.send(JSON.stringify({ime : 'penis', prezime: 'dautovic'}))
}

Postdata()