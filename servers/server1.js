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

// api call films including search query & id param
app.get('/api/films/:id?', cors(), async (req, res) => {
    const films = 'https://swapi.dev/api/films/';
    const filmsSearch = req.query.search;
    const filmsId = req.params.id;

    if (filmsSearch) {
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
    } else if (filmsId) {
        fetch(`${films}${filmsId}/`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Network response not ok. filmsId: ${filmsId}`)
                }
                return res.json()
            })
            .then(data => {
                console.log({ data })
                res.send(data)
            })
            .catch(err => console.error(`Error with id parameter: Error: ${err}, filmsId: ${filmsId}`))
    } else {
        fetch(films)
            .then(res => res.json())
            .then(data => {
                console.log({ data })
                res.send(data)
            })
            .catch(err => console.error('Error fetching films data: ', err))
    }
});

// api call people including search query & id param
app.get('/api/people/:id?', cors(), async (req, res) => {
    const people = 'https://swapi.dev/api/people/';
    const peopleSearch = req.query.search;
    const peopleId = req.params.id;

    if (peopleSearch) {
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
    } else if (peopleId) {
        fetch(`${people}${peopleId}/`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Network response not ok. peopleId: ${peopleId}`)
                }
                return res.json()
            })
            .then(data => {
                console.log({ data })
                res.send(data)
            })
            .catch(err => console.error(`Error with id parameter: Error: ${err}, peopleId: ${peopleId}`))
    } else {
        fetch(people)
            .then(res => res.json())
            .then(data => {
                console.log({ data })
                res.send(data)
            })
            .catch(err => console.error('Error fetching people data: ', err))
    }
});

// api call planets including search query & id param
app.get('/api/planets/:id?', cors(), async (req, res) => {
    const planets = 'https://swapi.dev/api/planets/';
    const planetsSearch = req.query.search;
    const planetsId = req.params.id;

    if (planetsSearch) {
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
    } else if (planetsId) {
        fetch(`${planets}${planetsId}/`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Network response not ok. planetsId: ${planetsId}`)
                }
                return res.json()
            })
            .then(data => {
                console.log({ data })
                res.send(data)
            })
            .catch(err => console.error(`Error with id parameter: Error: ${err}, planetsId: ${planetsId}`))
    } else {
        fetch(planets)
            .then(res => res.json())
            .then(data => {
                console.log({ data })
                res.send(data)
            })
            .catch(err => console.error('Error fetching planets data: ', err))
    }
});

// api call species including search query & id param
app.get('/api/species/:id?', cors(), async (req, res) => {
    const species = 'https://swapi.dev/api/species/';
    const speciesSearch = req.query.search;
    const speciesId = req.params.id;

    if (speciesSearch) {
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
    } else if (speciesId) {
        fetch(`${species}${speciesId}/`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Network response not ok. speciesId: ${speciesId}`)
                }
                return res.json()
            })
            .then(data => {
                console.log({ data })
                res.send(data)
            })
            .catch(err => console.error(`Error with id parameter: Error: ${err}, speciesId: ${speciesId}`))
    } else {
        fetch(species)
            .then(res => res.json())
            .then(data => {
                console.log({ data })
                res.send(data)
            })
            .catch(err => console.error('Error fetching species data: ', err))
    }
});

// api call starships including search query & id param
app.get('/api/starships/:id?', cors(), async (req, res) => {
    const starships = 'https://swapi.dev/api/starships/';
    const starshipsSearch = req.query.search;
    const starshipsId = req.params.id;

    if (starshipsSearch) {
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
    } else if (starshipsId) {
        fetch(`${starships}${starshipsId}/`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Network response not ok. starshipsId: ${starshipsId}`)
                }
                return res.json()
            })
            .then(data => {
                console.log({ data })
                res.send(data)
            })
            .catch(err => console.error(`Error with id parameter: Error: ${err}, starshipsId: ${starshipsId}`))
    } else {
        fetch(starships)
            .then(res => res.json())
            .then(data => {
                console.log({ data })
                res.send(data)
            })
            .catch(err => console.error('Error fetching starships data: ', err))
    }
});

// api call vehicles including search query & id param
app.get('/api/vehicles/:id?', cors(), async (req, res) => {
    const vehicles = 'https://swapi.dev/api/vehicles/';
    const vehiclesSearch = req.query.search;
    const vehiclesId = req.params.id;

    if (vehiclesSearch) {
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
    } else if (vehiclesId) {
        fetch(`${vehicles}${vehiclesId}/`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Network response not ok. vehiclesId: ${vehiclesId}`)
                }
                return res.json()
            })
            .then(data => {
                console.log({ data })
                res.send(data)
            })
            .catch(err => console.error(`Error with id parameter: Error: ${err}, vehiclesId: ${vehiclesId}`))
    } else {
        fetch(vehicles)
            .then(res => res.json())
            .then(data => {
                console.log({ data })
                res.send(data)
            })
            .catch(err => console.error('Error fetching vehicles data: ', err))
    }
});

app.listen(port, () => {
    console.log(`Example app listening on ${port}`)
});