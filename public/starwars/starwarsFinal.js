const currentTime = Date.now();
const elapsedTime = localStorage.getItem('elapsedTime');
const week = 604800000;
const dataArray = ['filmsData', 'peopleData', 'planetsData', 'speciesData', 'starshipsData', 'vehiclesData'];
const resDisplay = document.getElementById('res-display');

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

const findCharButton = document.getElementById('click');
const findCharHeader = document.getElementById('click-h1');
const mainContentContainer = document.getElementById('main-content-container');
const findCharContainer = document.getElementById('find-char-container');
const logo = document.getElementById('logo');
const headerImg = document.getElementById('header-img');
const scanner = document.getElementById('scanner');

findCharButton.addEventListener('click', () => {
    mainContentContainer.classList.add('hidden');
    findCharContainer.classList.add('hidden');
    headerImg.classList.add('hidden');

    scanner.classList.remove('hidden');

    setTimeout(() => {
        scannerTextChanger();
    }, 1000);
    

    setTimeout(() => {
    getMidoChlorianCount();
        
    }, 5000);

});

// function for scannerText
const scannerText = document.getElementById('scanner-text');
const scannerTextChanger = () => {
    let dots = scannerText.innerText.substring(23);

    if (dots.length === 3) {
        dots = dots.slice(0, -1);
        scannerText.innerText = scannerText.innerText.slice(0,23) + dots;
    } else if (dots.length === 2) {
        dots = dots + '.';
        scannerText.innerText = scannerText.innerText.slice(0,23) + dots;
    };

    // have dots change every 2 seconds
    setTimeout(() => {
       scannerTextChanger() 
    }, 2000);

};

// function to display mido-chlorian count
function getMidoChlorianCount() {
    const randomMidoChlorianCount = Math.floor(Math.random() * (16500 - 7000)) + 7000;
    console.log({randomMidoChlorianCount});
    findCharHeader.innerText = `Your <span id='mido-text'>mido-chlorian</span> test results came back... You have a <span id='mido-text'>mido-chlorian</span> count of ${randomMidoChlorianCount}. Therefore you are most similar to <charNameHere>`
    mainContentContainer.classList.remove('hidden');
    findCharContainer.classList.remove('hidden');
    scanner.classList.add('hidden')
};

// function calls
checkStorage();

