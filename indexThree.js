const form = document.querySelector('.signup-form')
//const username = document.querySelector('#username')

form.addEventListener('submit', e => {
    e.preventDefault();
    form.username.value == 'administrator' ? console.log('Točan username') : console.log('Krivi username')
})