// check localStorage to see if data exists

// cat test
localStorage.setItem('animal', 'cat');
const cat = localStorage.getItem('animal');
console.log({ cat })

localStorage.setItem('data', 'this is our data')

const data = localStorage.getItem('data');
console.log({ data })

const emptyData = localStorage.getItem('no-data')
console.log({ emptyData })

if (localStorage.getItem('data') != null) {
    console.log('our data was found in localstorage, and here it is: ', data)
} else {
    console.error(err => err)
}

localStorage.setItem('star-data', 123)

const starDataFromLocal = localStorage.getItem('star-data')

console.log({ starDataFromLocal })

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
        console.log({ filmData })

        // filmDataKeys = Object.keys(data)
        // filmDataValues = Object.values(data)
        // console.log({filmDataKeys})
        // console.log({filmDataValues})

        console.log(filmData[0].title)
        console.log(filmData[1])
        console.log(filmData[2])

        filmDataKeys = Object.keys(filmData[0])
        console.log({ filmDataKeys })
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

// check if we have film data, if not req from backend
// if (localStorage.getItem('filmData') === null) {
//     // fetch

//     fetch('http://localhost:3000/api')
//         .then(res => res.json())
//         .then(data => {
//             console.log({ data })
//             console.log('data.results: ', data.results)
//         })
//         .catch(err => console.error('Error: ', err))


// } else {
//     // present data

//     console.log('our film movie data exists :P')

// }



// Attributes:

// films string -- The URL root for Film resources
// people string -- The URL root for People resources
// planets string -- The URL root for Planet resources
// species string -- The URL root for Species resources
// starships string -- The URL root for Starships resources
// vehicles string -- The URL root for Vehicles resources

// HTTP/1.0 200 OK
// Content-Type: application/json
// {
//     "films": "https://swapi.dev/api/films/",
//     "people": "https://swapi.dev/api/people/",
//     "planets": "https://swapi.dev/api/planets/",
//     "species": "https://swapi.dev/api/species/",
//     "starships": "https://swapi.dev/api/starships/",
//     "vehicles": "https://swapi.dev/api/vehicles/"
// }



// Example request:

// http https://swapi.dev/api/people/1/

// Example response:

// HTTP/1.0 200 OK
// Content-Type: application/json
// {
//     "birth_year": "19 BBY",
//     "eye_color": "Blue",
//     "films": [
//         "https://swapi.dev/api/films/1/",
//         ...
//     ],
//     "gender": "Male",
//     "hair_color": "Blond",
//     "height": "172",
//     "homeworld": "https://swapi.dev/api/planets/1/",
//     "mass": "77",
//     "name": "Luke Skywalker",
//     "skin_color": "Fair",
//     "created": "2014-12-09T13:50:51.644000Z",
//     "edited": "2014-12-10T13:52:43.172000Z",
//     "species": [
//         "https://swapi.dev/api/species/1/"
//     ],
//     "starships": [
//         "https://swapi.dev/api/starships/12/",
//         ...
//     ],
//     "url": "https://swapi.dev/api/people/1/",
//     "vehicles": [
//         "https://swapi.dev/api/vehicles/14/"
//         ...
//     ]
// }

// endpoints: 
// /species/ -- get all the species resources
// /species/:id/ -- get a specific species resource
// /species/schema/ -- view the JSON schema for this resource

// initial setting of data to undefined. commenting this out will leave the data in our localStorage
// localStorage.setItem('filmsData', undefined) // value passed converts to string: undefined => 'undefined'
// localStorage.setItem('peopleData', undefined) // value passed converts to string: undefined => 'undefined'
// localStorage.setItem('planetsData', undefined) // value passed converts to string: undefined => 'undefined'
// localStorage.setItem('speciesData', undefined) // value passed converts to string: undefined => 'undefined'
// localStorage.setItem('starshipsData', undefined) // value passed converts to string: undefined => 'undefined'
// localStorage.setItem('vehiclesData', undefined) // value passed converts to string: undefined => 'undefined'

console.log(localStorage.getItem('filmsData') === 'undefined')

// function to fetch any data ex: 'films'
const fetchData = async (reqData) => {
    if (localStorage.getItem(`${reqData}Data`) === 'undefined' || null) {
        return fetch(`http://localhost:3000/api/${reqData}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Network response not ok: ${reqData}`)
                }
                return res.json()
            })
            .then(data => {
                console.log(`fetched reqData: ${reqData} `, data)
                localStorage.setItem(`${reqData}Data`, JSON.stringify(data.results))
                return data.results;
            })
            .catch(err => console.error(`Error fetching data: ${reqData}: `, err))
    } else {
        console.log(`we have our data: ${reqData} in localStorage :)`)
        return JSON.parse(localStorage.getItem(`${reqData}Data`))
    }
};

// should console.log our fetched film data in our console log. this data is from an api call made from our backend server
fetchData('films');
fetchData('people');
fetchData('planets');
fetchData('species');
fetchData('starships');
fetchData('vehicles');

// function to display info about a random planet
async function displayRandomPlanet() {
    let planetData;
    await fetchData('planets')
        .then(pData => {
            console.log({ pData });
            planetData = pData;
            // document.getElementById('res-display').innerText = planetData[Math.floor(Math.random() * planetData.length)].name;
            const pDataKeyValuePairs = Object.entries(planetData[Math.floor(Math.random() * planetData.length)]);
            console.log({ pDataKeyValuePairs })
            let futureInnerText = '';
            for (const attribute of pDataKeyValuePairs) {
                futureInnerText += `\n${attribute[0]}: ${attribute[1]}`
            }
            console.log({ futureInnerText });
            document.getElementById('res-display').innerText = futureInnerText;
        })
        .catch(err => console.error('Error fetching planetData: ', err));
    // return planetData;
};

displayRandomPlanet();

async function foo() {
    let obj;

    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')

    obj = await res.json();

    console.log(obj)
}

foo();