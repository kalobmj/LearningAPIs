// starwars api

// endpoints: 
// /species/ -- get all the species resources
// /species/:id/ -- get a specific species resource
// /species/schema/ -- view the JSON schema for this resource

// Attributes:
//  films string -- The URL root for Film resources
//  people string -- The URL root for People resources
//  planets string -- The URL root for Planet resources
//  species string -- The URL root for Species resources
//  starships string -- The URL root for Starships resources
//  vehicles string -- The URL root for Vehicles resources

// checker function to see if our localStorage has our data. if not set them and pass a value of undefined so we can work with them.

let dateNow = Date.now();
console.log({dateNow})
let timeSinceDataPull = localStorage.getItem('timeSinceDataPull') // null or int
console.log({timeSinceDataPull})

// 1 week: 604800000

// check if data has been pulled or been over a week since last pull
if (timeSinceDataPull === null || timeSinceDataPull + 604800000 < dateNow) {
    localStorage.setItem('timeSinceDataPull', dateNow);
    localStorage.setItem('filmsData', undefined);
    localStorage.setItem('peopleData', undefined);
    localStorage.setItem('planetsData', undefined);
    localStorage.setItem('speciesData', undefined);
    localStorage.setItem('starshipsData', undefined);
    localStorage.setItem('vehiclesData', undefined);
};

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
        console.log(`we have our data: ${reqData} in localStorage :)`);
        return JSON.parse(localStorage.getItem(`${reqData}Data`));
    }
};

// should console.log our fetched film data in our console log. this data is from an api call made from our backend server
fetchData('films');
fetchData('people');
fetchData('planets');
fetchData('species');
fetchData('starships');
fetchData('vehicles');

// function to display info based on req data passed
async function displayInfo(reqData) {
    let infoData;
    await fetchData(`${reqData}`)
        .then(iData => {
            console.log({ iData });
            infoData = iData;
            const iDataKeyValuePairs = Object.entries(infoData[Math.floor(Math.random() * infoData.length)]);
            console.log({ iDataKeyValuePairs })
            let futureInnerText = '';
            for (const attribute of iDataKeyValuePairs) {
                futureInnerText += `\n${attribute[0]}: ${attribute[1]}`
            }
            console.log({ futureInnerText });
            document.getElementById('res-display').innerText = futureInnerText;
        })
        .catch(err => console.error(`Error fetching ${reqData}Data: `, err));
    // return planetData;
};

// display info on static page
// displayInfo('films');
displayInfo('people');
// displayInfo('planets');
// displayInfo('species');
// displayInfo('starships');
// displayInfo('vehicles');

// JSON schema species
// make request to -> /api/<resource>/schema

// .json()
// Note that despite the method being named json(), the result is not JSON but is instead the result of taking JSON as input and parsing it to produce a JavaScript object.

// Searching
// All resources support a search parameter that filters the set of resources returned. This allows you to make queries like:

// https://swapi.dev/api/people/?search=r2

// All searches will use case-insensitive partial matches on the set of search fields. To see the set of search fields for each resource, check out the individual resource documentation. For more information on advanced search terms see here.

// function to make search queries based off resource
// resource: people, search: r2 -> (people, r2) (strings)
async function searchResource(resource, search) {
    await fetch(`http://localhost:3000/api/${resource}/?search=${search}`)
        .then(res => res.json())
        .then(data => {
            console.log(`search query data -> resource: ${resource}, search: ${search}`, data)
        })
        .catch(err => console.error(err))
};

// searchResource('films', 'hope');
// searchResource('people', 'r2');
// searchResource('planets', 'naboo');
// searchResource('species', 'wookie');
// searchResource('starships', 'falcon');
// searchResource('vehicles', 'shuttle');

// test req params function
async function fetchRandomPerson() {
    const randomNum = Math.floor(Math.random() * 10) + 1
    fetch(`http://localhost:3000/api/people/${randomNum}`)
        .then(res => res.json())
        .then(data => {
            console.log(`Random person data with randomNum ${randomNum}: `, data)
        })
};

// fetchRandomPerson();

async function fetchRandomStarship() {
    const randomNum = Math.floor(Math.random() * 20)
    fetch(`http://localhost:3000/api/starships/${randomNum}`)
        .then(res => res.json())
        .then(data => {
            console.log(`Random starship data with randomNum ${randomNum}: `, data)
        })
};

// fetchRandomStarship();

// function to findRandom Info based on resource and id
async function fetchRandomInfo(resource, id) {
    let randomNum;
    if (id) {
        fetch(`http://localhost:3000/api/${resource}/${id}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Error fetching specific resource info based on id. id: ${id}`)
                }
                return res.json()
            })
            .then(data => {
                console.log(`This is our ${resource} data fetched with id number ${id}`, data)
            })
            .catch(err => console.error(`Error with resource ${resource} and id ${id}: ${err}`))
    } else {
        if (localStorage.getItem(`${resource}Data`) === null || 'undefined') {
            fetchData(resource)
            randomNum = Math.floor(Math.random() * JSON.parse(localStorage.getItem(`${resource}Data`)).length);

            console.log({ randomNum })
            console.log(`This is our random ${resource} info pulled from localStorage. Found with randomNum: ${randomNum}`, JSON.parse(localStorage.getItem(`${resource}Data`))[randomNum])

        };
    };
};

// fetchRandomInfo('starships');
// fetchRandomInfo('people', 3);

async function getRandomPersonFromPage(pageNumber) {
    try {
        console.log({pageNumber})
        const baseURL = 'http://localhost:3000/api/page/'
        console.log(`${baseURL}${pageNumber}`)
        const res = await fetch(`${baseURL}${pageNumber}`)
        if (!res.ok) {
            throw new Error('error calling backend...')
        }
        const data = await res.json()
        console.log('this is our random page data: ', data)
        const randomCharNum = Math.floor(Math.random() * data.results.length)
        console.log({randomCharNum})
        const ourRandomCharacter = data.results[randomCharNum]
        console.log({ourRandomCharacter})
        const ourRandomCharacterUrl = ourRandomCharacter.url
        console.log({ourRandomCharacterUrl})
        const ourRandomCharacterId = ourRandomCharacterUrl.substr(29).slice(0, -1);
        console.log({ourRandomCharacterId})
        // console.log(Number(ourRandomCharacterId) + 2)
        console.log(`this is our randomCharacter: ${randomCharNum} from our pageNumber: ${pageNumber} passed: `, data.results[randomCharNum])

        // const ourRandomCharacterImg = document.querySelector(`img[name=${ourRandomCharacterId}.jpg]`)

        // console.log({ourRandomCharacterImg})

        const ourImg = document.createElement('img')

        // document.getElementById('res-display').appendChild(`<img src='./static/assets/img/people/${ourRandomCharacterId}.jpg' />`)

        ourImg.src = `/static/assets/img/people/${ourRandomCharacterId}.jpg`

        console.log({ourImg})
        
        document.getElementById('res-display').append(ourImg)

        // return data;
    } catch (error) {
        console.error(error)
    }
}

const randomNum = Math.floor(Math.random() * 9)
console.log({randomNum})

getRandomPersonFromPage(randomNum)


// 9 pages 82 people 8 pages and 2 people on page 9
async function tryPersonPage() {
    try {
        const res = await fetch('https://swapi.dev/api/people/?page=9')
        if (!res.ok) {
            throw new Error('probem looking on page 2')
        }
        const data = await res.json();
        console.log('this is our data: ', data)
        console.log(data.next)
        console.log(data.results)
    } catch (error) {
        console.error(error)
    }
}

tryPersonPage();



// src="./static/assets/img/people/6.jpg"

// OSRS build py
const historicalMarketDataOsrsWikiApi = 'https://oldschool.runescape.wiki/w/RuneScape:Real-time_Prices';

// Routes:
// API endpoint: 'prices.runescape.wiki/api/v1/osrs'

// Endpoint url prefix:
const urlPrefix = 'https://prices.runescape.wiki/api/v1/osrs/';

// Lastest price (all items):
// map from itemId
const latestPrice = '/latest';

// Query parameters:
// (optional) ItemID. will only display the latest price for this item
// (required) id: item id to return a time series for
const id = 'id';
// const id = 'id'; // use same id for mapping and time

// To load this data externally, send a GET request to:
const moduleDataJsonGetRequest = 'https://oldschool.runescape.wiki/?title=Module:GEIDs/data.json&action=raw&ctype=application%2Fjson'

// Mapping:
// Gives a list of objects containing key value pairs about items
const mapping = '/mapping';

// 5-minute prices:
// Gives 5-minute avg of item high and low prices aswell as [number traded]
const fiveMinute = '/5m';

// 1-hour prices:
// Gives hourly avg of item hiugh and low, aswell as number traded
const oneHour = '/1h';

// Query parameters:
// (optional) Timestep. display 5-minute avgs for all items -> .data.Id
const timestamp = 'timestamp';

// Time series (getting price data at a specific time interval) :
// Gives a list of high and low prices of item with given id at the given interval
const timeSeries = '/timeseries';

// Query parameters:
// (required) timestep: valid options are "5m", "1h", "6h", "24h", 
const timeStep = 'timestep';

// Please set a descriptive User-Agent!
// This is the only thing we ask! If you're using automated tooling to scrape the wiki's APIs, please set a User-Agent that describes what you're using it for: for example, dps-calculator-stats-scraper.
