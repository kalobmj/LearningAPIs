const currentTime = Date.now();
const elapsedTime = localStorage.getItem('elapsedTime');
const week = 604800000;
const dataArray = ['filmsData', 'peopleData', 'planetsData', 'speciesData', 'starshipsData', 'vehiclesData'];
const resDisplay = document.getElementById('res-display');

localStorage.clear();

// function to fetch data from backend
const fetchData = async (reqData) => {
    const baseURL = 'http://localhost:4000/api/';
    try {
        const res = await fetch(`${baseURL}${reqData}`)
        if (!res.ok) {
            throw new Error('Error fetching data from backend')
        };
        const data = await res.json();
        console.log(`reqData: ${reqData} data: `, data)
        localStorage.setItem(reqData, JSON.stringify(data));
    } catch (err) {
        console.error(err)
    };
};

const checkStorage = () => {
    if (elapsedTime === null || (elapsedTime + week) < currentTime) {
        localStorage.setItem('elapsedTime', currentTime);

        dataArray.map(dataType => {
            if (localStorage.getItem(dataType) === null) {
                fetchData(dataType)
            }
        })
    };
};

// function calls
checkStorage();

setTimeout(() => {
    let localData = [];
    console.log('we are in setTimeout')
    dataArray.map(dataType => {
        if (localStorage.getItem(dataType) != null) {
            localData.push(JSON.parse(localStorage.getItem(dataType)))
        }
    });
    console.log({localData});
    let localDataRandomNum = Math.floor(Math.random() * localData.length);
    console.log({localDataRandomNum})
    let ourRandomDataSet = localData[localDataRandomNum];
    console.log({ourRandomDataSet})
    let dataSetRandomNum = Math.floor(Math.random() * ourRandomDataSet.length)
    resDisplay.innerText = ourRandomDataSet[dataSetRandomNum].name;
    console.log(ourRandomDataSet[dataSetRandomNum])
}, 10000);
