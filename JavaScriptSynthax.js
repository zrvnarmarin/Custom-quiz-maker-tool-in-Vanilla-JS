//Array deconstruction
const games = ['Resident Evil', 'Mortal Kombat: Shaolin Monks', 'Splinter Cell: Pandora Tommorrow', 'Hitman: Blood Money', 'Bloodborne']
const years = [2003, 2007, 2004, 2006, 2015]

const combined = [...games, ...years] 
const [,,game] = games 

function SumAndDivide(a, b)
{
    return [a + b, a / b]
}


//Object deconstruction
const [sum, divide, division = 'No division!'] = SumAndDivide(10, 5)

const firstGuitar = {
    brand: 'Gibson', 
    model: 'Explorer',
    year: 2007, 
    color: 'black and white', 
    hardware: {
        pickups: '490T, 600H',
        tuners: 'Grover Tuners'
    }
}

const {brand, model, color, year: yearOfProduction, pickupConfig = 'HH'} = firstGuitar
const {hardware: {tuners}, ...allData} =  firstGuitar 

//console.log(tuners, allData)


//Combining two objects
const carOne = {
    brand: 'Mercedes',
    model: 'SL-100', 
    year: '2020',
    speed: 270,
}

const carTwo = {
    brand: 'Porsche',
    length: 4.5,
    motorType: 'Diezel'
}

//If second object the same properties as the first objects, first object`s properties will be overriden by the second object`s properties
const carThree = {...carOne, ...carTwo}

console.log(carThree)

const person = {
    name: 'Marin',
    surname: 'zrvnar', 
    years: 28, 
    country: 'Croatia'
}

const personTwo = {
    name: 'Kristijan',
    surname: 'zrvnar', 
    years: 24, 
    country: 'Croatia'
}

function PrintUser({name, surname, years, country, city = 'Karlovac'})
{
    console.log(`${name}, ${surname}, ${years}, ${country}, ${city}`)
}

PrintUser(person)
PrintUser(personTwo)


