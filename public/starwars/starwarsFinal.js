const currentTime = Date.now();
const elapsedTime = localStorage.getItem('elapsedTime');
const week = 604800000;

localStorage.clear()

// function to fetch data from backend
const fetchData = async (reqData) => {
    const baseURL = 'http://localhost:4000/api/';
    try {
        const res = await fetch(`${baseURL}${reqData}`)
        if (!res.ok) {
            console.log('problem calling backend...')
            throw new Error('There was a problem fetching data from backend')
        }
        const data = await res.json()
        // logic to sift through multiple pages and append will go here... maybe
        console.log(`reqData: ${reqData} data: `, data)
        localStorage.setItem(reqData, JSON.stringify(data.results))
        console.log(localStorage.getItem(reqData))
    } catch (err) {
        console.error(err)
    };
};

const checkStorage = () => {
    if (elapsedTime === null || (elapsedTime + week) < currentTime) {
        localStorage.setItem('elapsedTime', currentTime);
        const dataArray = ['elapsedTime', 'filmsData', 'peopleData', 'planetsData', 'speciesData', 'starshipsData', 'vehiclesData'];

        dataArray.map(dataType => {
            if (localStorage.getItem(dataType) === null) {
                fetchData(dataType)
            }
        })
    };
};

// function calls
checkStorage();
