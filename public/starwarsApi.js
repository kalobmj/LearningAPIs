// check localStorage to see if data exists

// cat test
localStorage.setItem('animal', 'cat');
const cat = localStorage.getItem('animal');
console.log({cat})

localStorage.setItem('data', 'this is our data')

const data = localStorage.getItem('data');
console.log({data})

const emptyData = localStorage.getItem('no-data')
console.log({emptyData})

if (localStorage.getItem('data') != null) {
    console.log('our data was found in localstorage, and here it is: ', data)
} else {
    console.error(err => err)
}

localStorage.setItem('star-data', 123)

const starDataFromLocal = localStorage.getItem('star-data')

console.log({starDataFromLocal})

// fetching data for star wars films
const starwarsFilms = 'https://swapi.dev/api/films/';

let filmData;
let filmDataKeys;
let filmDataValues;

fetch(starwarsFilms)
    .then(res => res.json())
    .then(data => {
        console.log('film data', data)

        filmData = data.results
        console.log({filmData})

        // filmDataKeys = Object.keys(data)
        // filmDataValues = Object.values(data)
        // console.log({filmDataKeys})
        // console.log({filmDataValues})

        console.log(filmData[0].title)
        console.log(filmData[1])
        console.log(filmData[2])

        filmDataKeys = Object.keys(filmData[0])
        console.log({filmDataKeys})
        console.log(Object.keys(filmData[0]))
        console.log('filmdata 0: ', filmData[0])

        console.log('filmdata 0 length: ', Object.keys(filmData[0]).length)
        console.log(filmDataKeys.length)
    })
    // .then(console.log('filmData', filmData))
    .then(() => {
        console.log('filmData: ', filmData)
    })
    .catch(err => console.error(err))

    // .json() -> method used on response object from fetch call. parses response body and returns js object.
    // JSON.parse() -> parses json string and converts to JSON
    // JSON.stringify -> converts JS object to a single string

console.log('first getting filmData: ', localStorage.getItem('filmData'))

localStorage.removeItem('filmData')

console.log('filmData should be cleared after this', localStorage.getItem('filmData'))

localStorage.setItem('filmData', 'test')

const starwarsFilmDataLocal = localStorage.getItem('filmData')

console.log('test')

console.log({starwarsFilmDataLocal})

// localStorage.removeItem(itemhere) -> removes single item 
// localStorage.clear() -> removes all data 

localStorage.removeItem('filmData')

console.log('our star wars filmData should be test here: ', starwarsFilmDataLocal)
console.log('our star wars filmData should be null here: ', localStorage.getItem('filmData'))

// check if we have film data, if not req from backend
if (localStorage.getItem('filmData') === null) {
    // fetch

    fetch('http://localhost:3000/api')
    .then(res => res.json())
    .then(data => {
        console.log({data})
        console.log('data.results: ', data.results)
    })
    .catch(err => console.error('Error: ', err))


} else {
    // present data

    console.log('our film movie data exists :P')

}
