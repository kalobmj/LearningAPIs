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

    gallery.classList.add('hidden')

    scanner.classList.remove('hidden');

    // make star wars logo smaller
    logo.style.width = '300px';
    logo.style.height = 'auto';

    setTimeout(() => {
        scannerTextChanger();
    }, 1000);


    setTimeout(() => {
        getMidoChlorianCount();

    }, 6000);

});

const gallery = document.getElementById('gallery')
const galleryText = document.getElementById('gallery-text');
const galleryContainer = document.getElementById('gallery-container');

const heroArray = ['films', 'people', 'planets', 'species', 'starships', 'vehicles'];

const galleryPicContainer = document.getElementById('gallery-pic-container')

function testClick(category) {
    console.log('clicked!')
    gallery.classList.add('hidden');
    galleryPicContainer.classList.remove('hidden')

    const films = [1, 2, 3, 4, 5, 6, 7];
    const starships = [3, 5, 9, 10, 11, 12, 13, 15, 21, 22, 23, 27, 28, 29, 31, 39, 40, 41, 43, 47, 48];
    const vehicles = [4, 6, 7, 8, 14, 16, 18, 19, 20, 24, 25, 26, 30, 33, 34, 35, 36, 37, 38, 42];
    let people = [];
    let planets = [];
    let species = [];
    for (let i = 1; i < 84; i++) {
        people.push(i)
    };
    console.log({people});

    for (let i = 1; i < 20; i++) {
        planets.push(i)

        if (i === 19) {
            planets.push(21)
        }
    }
    console.log({planets})

    for (let i = 1; i < 38; i++) {
        species.push(i)
        if (i === 37) {
            species.push(79)
        }
    }

    console.log({species})

    if (category === 'films') {
        let localImages = films.map(img => {
            return `<img id='gallery-img' src='../../static/assets/${category}/${img}.jpg' />`
        });
        galleryPicContainer.innerHTML = `${localImages.join('')}`
    }
    if (category === 'starships') {
        let localImages = starships.map(img => {
            return `<img id='gallery-img' src='../../static/assets/${category}/${img}.jpg' />`
        });
        galleryPicContainer.innerHTML = `${localImages.join('')}`
    }
    if (category === 'vehicles') {
        let localImages = vehicles.map(img => {
            return `<img id='gallery-img' src='../../static/assets/${category}/${img}.jpg' />`
        });
        galleryPicContainer.innerHTML = `${localImages.join('')}`
    }
    if (category === 'people') {
        let localImages = people.map(img => {
            return `<img id='gallery-img' src='../../static/assets/${category}/${img}.jpg' />`
        });
        galleryPicContainer.innerHTML = `${localImages.join('')}`
    }
    if (category === 'planets') {
        let localImages = planets.map(img => {
            return `<img id='gallery-img' src='../../static/assets/${category}/${img}.jpg' />`
        });
        galleryPicContainer.innerHTML = `${localImages.join('')}`
    }
    if (category === 'species') {
        let localImages = species.map(img => {
            return `<img id='gallery-img' src='../../static/assets/${category}/${img}.jpg' alt='gallery-img' />`
        });
        galleryPicContainer.innerHTML = `${localImages.join('')}`
    }

}

galleryText.addEventListener('click', () => {
    galleryText.innerText = 'go back';
    galleryContainer.classList.remove('hidden');
    gallery.classList.remove('hidden');
    // mainContentContainer.classList.add('hidden');
    findCharContainer.classList.add('hidden');

    let heroArrayElements = heroArray.map(category => {
        return `
            <div id='hero-elem' onClick='testClick("${category}")'>
                <img id='hero-img' src='../../static/assets/hero/${category}.jpg' />
                <br>
                <p id='hero-text'>${category}</p>
            </div>
        `
    });

    gallery.innerHTML = `${heroArrayElements}`

});


// function for scannerText
const scannerText = document.getElementById('scanner-text');
const scannerTextChanger = () => {
    let dots = scannerText.innerText.substring(23);

    if (dots.length === 3) {
        dots = dots.slice(0, -1);
        scannerText.innerText = scannerText.innerText.slice(0, 23) + dots;
    } else if (dots.length === 2) {
        dots = dots + '.';
        scannerText.innerText = scannerText.innerText.slice(0, 23) + dots;
    };

    // have dots change every 2 seconds
    setTimeout(() => {
        scannerTextChanger()
    }, 2000);

};


// function to display mido-chlorian count
function getMidoChlorianCount() {
    const randomMidoChlorianCount = Math.floor(Math.random() * (16500 - 7000)) + 7000;
    console.log({ randomMidoChlorianCount });

    // fetch random character here and get name, info, and img to display.

    const localPeople = JSON.parse(localStorage.getItem('peopleData'));

    console.log(localPeople.length)

    console.log(localPeople)

    const randomNumber = Math.floor(Math.random() * localPeople.length)

    console.log({ randomNumber })

    const ourRandomPerson = localPeople[randomNumber];

    console.log('this should be a random person: ', ourRandomPerson)

    findCharHeader.innerHTML = `Your <span id='mido-text'>mido-chlorian</span> test results came back... You have a <span id='mido-text'>mido-chlorian</span> count of <span id='mido-text'>${randomMidoChlorianCount}</span>. Therefore you are most similar to... <br> <span id="char-text">${ourRandomPerson.name}</span> <br> <img id='char-img' src="../../static/assets/people/${randomNumber < 16 ? randomNumber + 1 : randomNumber + 2}.jpg" />`

    mainContentContainer.classList.remove('hidden');
    findCharContainer.classList.remove('hidden');
    scanner.classList.add('hidden');

    findCharButton.innerText = 'test again !'

    galleryText.classList.remove('hidden')

    // make star wars logo slightly bigger
    logo.style.width = '350px';
    logo.style.height = 'auto';

};

// function calls
checkStorage();

const style = document.getElementById('style');

// logo.style.width = '300px';
// logo.style.height = 'auto';

// style.append(`#logo {
//     width: 300px;
//     height: auto;
//     }`)

// style.remove('')