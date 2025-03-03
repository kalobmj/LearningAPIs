import express from 'express';
import cors from 'cors';
import { spec } from 'node:test/reporters';

const app = express();
const port = 3000

// app.use(cors());

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
    console.log({randomNum})

    const randomGreeting = greetings[randomNum];
    console.log('Your random greeting is: ', randomGreeting)
    
    res.send(randomGreeting);
})



// const starwarsFilms = 'https://swapi.dev/api/films/';

// fetch(starwarsFilms)
//     .then(res => res.json())
//     .then(data => {
        
//     })

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

// api call films
app.get('/api/films', cors(), async (req,res) => {
    // res.send(data) -> this returns data to frontend
    const films = 'https://swapi.dev/api/films/';
    fetch(films)
    .then(res => res.json())
    .then(data => {
        console.log({data})
        res.send(data)
    })
});

// api call people
app.get('/api/people', cors(), async (req,res) => {
    // res.send(data) -> this returns data to frontend
    const people = 'https://swapi.dev/api/people/';
    const param1 = req.query
    const param2 = req.query.search

    console.log(param1)
    console.log(param2)

    if (param1 != undefined) {
        fetch(`${people}?search=${param1.search}`)
         .then(res => res.json())
         .then(data => {
            console.log({data})
            res.send(data)
         })
    } else {

        fetch(people)
        .then(res => res.json())
        .then(data => {
            console.log({data})
            res.send(data)
        })
    }

});

// app.get('/api/people/?search=r2', cors(), async (req,res) => {
//     // res.send(data) -> this returns data to frontend
//     const people = 'https://swapi.dev/api/people/?search=r2';
//     fetch(people)
//     .then(res => res.json())
//     .then(data => {
//         console.log({data})
//         res.send(data)
//     })
// });

// api call planets
app.get('/api/planets', cors(), async (req,res) => {
    // res.send(data) -> this returns data to frontend
    const planets = 'https://swapi.dev/api/planets/';
    fetch(planets)
    .then(res => res.json())
    .then(data => {
        console.log({data})
        res.send(data)
    })
});

// api call species
app.get('/api/species', cors(), async (req,res) => {
    // res.send(data) -> this returns data to frontend
    const species = 'https://swapi.dev/api/species/';
    fetch(species)
    .then(res => res.json())
    .then(data => {
        console.log({data})
        res.send(data)
    })
});

// api call starships
app.get('/api/starships', cors(), async (req,res) => {
    // res.send(data) -> this returns data to frontend
    const starships = 'https://swapi.dev/api/starships/';
    fetch(starships)
    .then(res => res.json())
    .then(data => {
        console.log({data})
        res.send(data)
    })
});

// api call vehicles
app.get('/api/vehicles', cors(), async (req,res) => {
    // res.send(data) -> this returns data to frontend
    const vehicles = 'https://swapi.dev/api/vehicles/';
    fetch(vehicles)
    .then(res => res.json())
    .then(data => {
        console.log({data})
        res.send(data)
    })
});

// app.get('/api/species/schema', cors(), async (req, res) => {
//     const speciesSchema = 'https://swapi.dev/api/species/schema';
//     fetch(speciesSchema)
//         .then(res => res.json())
//         .then(data => {
//             console.log({data})
//             res.send(data)
//         })
// });

app.listen(port, () => {
    console.log(`Example app listening on ${port}`)
})