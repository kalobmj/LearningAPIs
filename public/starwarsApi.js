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
const checkForData = () => {
    if (localStorage.length === 0) {
        // initial setting of data to undefined. commenting this out will leave the data in our localStorage (make sure to set our data, because our functions will not work without it)
        localStorage.setItem('filmsData', undefined);
        localStorage.setItem('peopleData', undefined);
        localStorage.setItem('planetsData', undefined);
        localStorage.setItem('speciesData', undefined);
        localStorage.setItem('starshipsData', undefined);
        localStorage.setItem('vehiclesData', undefined);
    }
};

// checking data on start
checkForData();

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
// displayInfo('people');
// displayInfo('planets');
// displayInfo('species');
// displayInfo('starships');
displayInfo('vehicles');

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
