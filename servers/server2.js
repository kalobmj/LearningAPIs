import express from 'express';
import cors from 'cors';

const app = express();
const port = 4000;

app.get('/', (req, res) => {
    console.log('app get root /');
    res.send('Hello world!')
});

// 

app.get('/api/filmsData', cors(), async (req, res) => {
    // const films = 'https://swapi.dev/api/films/';
    // let filmData = [];

    const films = 'https://swapi.dev/api/films/';
    let filmData = [];
    const fetchAllFilmsData = async (url) => {
        let nextUrl = url;

        while (nextUrl) {
            const res = await fetch(nextUrl);
            if (!res.ok) {
                throw new Error('Error fetching film data from API')
            }
            const data = await res.json();
            filmData.push(...data.results);
            console.log({filmData})
            nextUrl = data.next; // if null, while loop stops
        }

        return filmData

    }

    // fetchAllFilmsData(films)

    // console.log(filmData)
    // console.log('this is jsonStringify our filmData', JSON.stringify(filmData))

    res.send(JSON.stringify(fetchAllFilmsData(films)))

    // try {
    //     const res = await fetch(films)
    //     if (!res.ok) {
    //         throw new Error('Error calling star wars films API')
    //     }
    //     const data = await res.json();

    //     // logic for sifting here...
    //     // possibly using recursion where the base case is if data.next === null
    //     // while data.next != null .. call itself with fetches and appending the data to our array. when the base case is reached the recursion will backtrack. the last pages will push first. so we will need to append our data to the front.

    //     while (data.next != null) {
    //         filmData.push(data.results)

    //     }

    //     filmData = data;
    // } catch (err) {
    //     console.error(err)
    // };
    // res.send(filmData); // sending an array of each data page
});

// 

app.get('/api/peopleData', cors(), async (req, res) => {
    const people = 'https://swapi.dev/api/people/';
    let peopleData;
    try {
        const res = await fetch(people)
        if (!res.ok) {
            throw new Error('Error calling star wars people API')
        }
        const data = await res.json();
        peopleData = data;
    } catch (err) {
        console.error(err)
    };
    res.send(peopleData);
});

app.get('/api/planetsData', cors(), async (req, res) => {
    const planets = 'https://swapi.dev/api/planets/';
    let planetData;
    try {
        const res = await fetch(planets)
        if (!res.ok) {
            throw new Error('Error calling star wars planets API')
        }
        const data = await res.json();
        planetData = data;
    } catch (err) {
        console.error(err)
    };
    res.send(planetData);
});

app.get('/api/speciesData', cors(), async (req, res) => {
    const species = 'https://swapi.dev/api/species/';
    let speciesData;
    try {
        const res = await fetch(species)
        if (!res.ok) {
            throw new Error('Error calling star wars species API')
        }
        const data = await res.json();
        speciesData = data;
    } catch (err) {
        console.error(err)
    };
    res.send(speciesData);
});

app.get('/api/starshipsData', cors(), async (req, res) => {
    const starships = 'https://swapi.dev/api/starships/';
    let starshipData;
    try {
        const res = await fetch(starships)
        if (!res.ok) {
            throw new Error('Error calling star wars starships API')
        }
        const data = await res.json();
        starshipData = data;
    } catch (err) {
        console.error(err)
    };
    res.send(starshipData);
});

app.get('/api/vehiclesData', cors(), async (req, res) => {
    const vehicles = 'https://swapi.dev/api/vehicles/';
    let vehicleData;
    try {
        const res = await fetch(vehicles)
        if (!res.ok) {
            throw new Error('Error calling star wars vehicles API')
        }
        const data = await res.json();
        // logic to sift through multiple pages and append will go here... maybe
        vehicleData = data;
    } catch (err) {
        console.error(err)
    };
    res.send(vehicleData);
});

app.listen(port, () => {
    console.log(`Starwars backend express server listening on ${port}`)
});
