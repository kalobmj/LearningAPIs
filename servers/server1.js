import express from 'express';
// import cors from 'cors';

const app = express();
const port = 3000

// app.use(cors());

// app.use(express.static("public"))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/newRoute', (req, res) => {

    let greetings = [
        'hello there!',
        'hi there!',
        'welcome there!'
    ]

    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)]

    res.send(randomGreeting)
})


app.listen(port, () => {
    console.log(`Example app listening on ${port}`)
})