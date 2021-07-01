const express = require('express');
const app = express();
const port = 5372;
const fetch = require('node-fetch');

let addr = "";

app.use(express.text());

app.post('/', (req, res) => {
    console.log(req.body);
    setTimeout(() => {
        connect();
    }, 1000)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

const connect = () => {
    fetch(addr, {
        method: 'POST',
        body: 'ping',
        headers: { 'Content-Type': 'text/plain' },
    }).then(
        res => {
            console.log(res.text());
        }
    ).catch(
        err => {
            getAddr();
            console.log('error, retry');
            setTimeout(() => {
                connect();
            }, 1000);
        }
    )
}

const getAddr = () => {
    fetch('http://localhost:8080')
    .then(res => res.json())
    .then(body => {
        addr = body.filter(el => el != ('http://localhost:' + port))[0];
    });
}
