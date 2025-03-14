import express from 'express';
import cors from 'cors';

const app = express();
const port = 4000;

app.get('/', (req, res) => {
    console.log('app get root /');
    res.send('Hello world!')
});

// calling films API
app.get('/api/filmsData', cors(), async (req, res) => {
    let filmsUrl = 'https://swapi.dev/api/films/';
    let filmData = [];

    do {
        const res = await fetch(filmsUrl);
        if (!res.ok) {
            throw new Error('Error calling films API...')
        };
        const data = await res.json();
        filmsUrl = data.next;
        filmData.push(...data.results);
    } while (filmsUrl) {
        res.send(JSON.stringify(filmData));
    }
});

// calling people API
app.get('/api/peopleData', cors(), async (req, res) => {
    let peopleURL = 'https://swapi.dev/api/people/';
    let peopleData = [];

    do {
        const res = await fetch(peopleURL)
        if (!res.ok) {
            throw new Error('Error calling people API...')
        }
        const data = await res.json();
        peopleData.push(...data.results);
        peopleURL = data.next;
    } while (peopleURL) {
        res.send(JSON.stringify(peopleData));
    }
});

// calling planets API
app.get('/api/planetsData', cors(), async (req, res) => {
    let planetsURL = 'https://swapi.dev/api/planets/';
    let planetsData = [];

    do {
        const res = await fetch(planetsURL);
        if (!res.ok) {
            throw new Error('Error calling planets API...')
        };
        const data = await res.json();
        planetsData.push(...data.results);
        planetsURL = data.next;
    } while (planetsURL) {
        res.send(JSON.stringify(planetsData));
    }
});

app.get('/api/speciesData', cors(), async (req, res) => {
    let speciesURL = 'https://swapi.dev/api/species';
    let speciesData = [];

    do {
        const res = await fetch(speciesURL);
        if (!res.ok) {
            throw new Error('Error calling species API...')
        };
        const data = await res.json();
        speciesData.push(...data.results);
        speciesURL = data.next;
    } while (speciesURL) {
        res.send(JSON.stringify(speciesData));
    }
});

app.get('/api/starshipsData', cors(), async (req, res) => {
    let starshipsURL = 'https://swapi.dev/api/starships';
    let starshipsData = [];

    do {
        const res = await fetch(starshipsURL);
        if (!res.ok) {
            throw new Error('Error calling starships API...')
        };
        const data = await res.json();
        starshipsData.push(...data.results);
        starshipsURL = data.next;
    } while (starshipsURL) {
        res.send(JSON.stringify(starshipsData));
    }
});

app.get('/api/vehiclesData', cors(), async (req, res) => {
    let vehiclesURL = 'https://swapi.dev/api/vehicles';
    let vehiclesData = [];

    do {
        const res = await fetch(vehiclesURL);
        if (!res.ok) {
            throw new Error('Error calling vehicles API...')
        };
        const data = await res.json();
        vehiclesData.push(...data.results);
        vehiclesURL = data.next;
    } while (vehiclesURL) {
        res.send(JSON.stringify(vehiclesData));
    }
});

app.listen(port, () => {
    console.log(`Starwars backend express server listening on ${port}`)
});
