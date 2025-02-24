// check localStorage to see if data exists

// cat test
localStorage.setItem('animal', 'cat');
const cat = localStorage.getItem('animal');
console.log({cat})

localStorage.setItem('data', 'this is our data')

const data = localStorage.getItem('data');
console.log({data})

const emptyData = localStorage.getItem('no-data')
console.log({emptyData})

if (localStorage.getItem('data') != null) {
    console.log('our data was found in localstorage, and here it is: ', data)
} else {
    console.error(err => err)
}