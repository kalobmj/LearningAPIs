import express from 'express';
import cors from 'cors';
import { spec } from 'node:test/reporters';

const app = express();
const port = 3000

app.get('/', (req, res) => {
    console.log('app get root /')
    res.send('Hello World!')
})

app.get('/newRoute', (req, res) => {
    console.log('app get /newRoute')
    let greetings = [
        'hello there!',
        'hi there!',
        'welcome there!'
    ];

    const randomNum = Math.floor(Math.random() * greetings.length);
    console.log({ randomNum })

    const randomGreeting = greetings[randomNum];
    console.log('Your random greeting is: ', randomGreeting)

    res.send(randomGreeting);
})

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

// api call films including search query
app.get('/api/films', cors(), async (req, res) => {
    const films = 'https://swapi.dev/api/films/';
    const filmsSearch = req.query.search;

    if (filmsSearch != undefined) {
        fetch(`${films}?search=${filmsSearch}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Network response not ok. searchTerm: ${filmsSearch}`)
                }
                return res.json()
            })
            .then(data => {
                console.log({ data })
                res.send(data)
            })
            .catch(err => console.error(`Error with search query: Error: ${err}, searchTerm: ${filmsSearch}`))
    } else {
        fetch(films)
            .then(res => res.json())
            .then(data => {
                console.log({ data })
                res.send(data)
            })
    };
});

// api call people including search query
app.get('/api/people', cors(), async (req, res) => {
    const people = 'https://swapi.dev/api/people/';
    const peopleSearch = req.query.search;

    if (peopleSearch != undefined) {
        fetch(`${people}?search=${peopleSearch}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Network response not ok. searchTerm: ${peopleSearch}`)
                }
                return res.json()
            })
            .then(data => {
                console.log({ data })
                res.send(data)
            })
            .catch(err => console.error(`Error with search query: Error: ${err}, searchTerm: ${peopleSearch}`))
    } else {
        fetch(people)
            .then(res => res.json())
            .then(data => {
                console.log({ data })
                res.send(data)
            })
    };
});

// test people req parameters
app.get('/api/people/:id', cors(), async (req, res) => {
    const people = 'https://swapi.dev/api/people/';
    const peopleId = req.params.id;

    fetch(`${people}${peopleId}/`)
        .then(res => res.json())
        .then(data => {
            console.log({ data })
            res.send(data)
        })
});

// api call planets including search query
app.get('/api/planets', cors(), async (req, res) => {
    const planets = 'https://swapi.dev/api/planets/';
    const planetsSearch = req.query.search;

    if (planetsSearch != undefined) {
        fetch(`${planets}?search=${planetsSearch}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Network response not ok. searchTerm: ${planetsSearch}`)
                }
                return res.json()
            })
            .then(data => {
                console.log({ data })
                res.send(data)
            })
            .catch(err => console.error(`Error with search query: Error: ${err}, searchTerm: ${planetsSearch}`))
    } else {
        fetch(planets)
            .then(res => res.json())
            .then(data => {
                console.log({ data })
                res.send(data)
            })
    };
});

// api call species including search query
app.get('/api/species', cors(), async (req, res) => {
    const species = 'https://swapi.dev/api/species/';
    const speciesSearch = req.query.search;

    if (speciesSearch != undefined) {
        fetch(`${species}?search=${speciesSearch}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Network response not ok. searchTerm: ${speciesSearch}`)
                }
                return res.json()
            })
            .then(data => {
                console.log({ data })
                res.send(data)
            })
            .catch(err => console.error(`Error with search query: Error: ${err}, searchTerm: ${speciesSearch}`))
    } else {
        fetch(species)
            .then(res => res.json())
            .then(data => {
                console.log({ data })
                res.send(data)
            })
    };
});

// api call starships including search query
app.get('/api/starships', cors(), async (req, res) => {
    const starships = 'https://swapi.dev/api/starships/';
    const starshipsSearch = req.query.search;

    if (starshipsSearch != undefined) {
        fetch(`${starships}?search=${starshipsSearch}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Network response not ok. searchTerm: ${starshipsSearch}`)
                }
                return res.json()
            })
            .then(data => {
                console.log({ data })
                res.send(data)
            })
            .catch(err => console.error(`Error with search query: Error: ${err}, searchTerm: ${starshipsSearch}`))
    } else {
        fetch(starships)
            .then(res => res.json())
            .then(data => {
                console.log({ data })
                res.send(data)
            })
    };
});

// api call vehicles including search query
app.get('/api/vehicles', cors(), async (req, res) => {
    const vehicles = 'https://swapi.dev/api/vehicles/';
    const vehiclesSearch = req.query.search;

    if (vehiclesSearch != undefined) {
        fetch(`${vehicles}?search=${vehiclesSearch}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Network response not ok. searchTerm: ${vehiclesSearch}`)
                }
                return res.json()
            })
            .then(data => {
                console.log({ data })
                res.send(data)
            })
            .catch(err => console.error(`Error with search query: Error: ${err}, searchTerm: ${vehiclesSearch}`))
    } else {
        fetch(vehicles)
            .then(res => res.json())
            .then(data => {
                console.log({ data })
                res.send(data)
            })
    };
});


app.listen(port, () => {
    console.log(`Example app listening on ${port}`)
});