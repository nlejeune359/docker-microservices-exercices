const express = require('express')
const fetch = require('node-fetch');
const app = express();
const port = 4567;

let addr = "";

app.use(express.text());

app.listen(port, () => {
    console.log(`Listening at http://172.16.8.68:${port}`)
})

app.post('/', (req, res) => {
    console.log(req.body);
    setTimeout(() => {
        connect();
    }, 1000)
})

const getAddr = () => {
    fetch('http://172.16.8.68:8080')
    .then(res => res.json())
    .then(body => {
        addr = body.filter(el => el != ('http://172.16.8.68:' + port))[0];
    })
    .catch(err => {
        setTimeout(() => {
            console.log("can't get addresses, retrying");
            getAddr();
        }, 1000);

    });
}

const connect = async () => {

    await fetch(addr, {
        method: 'POST',
        body: 'pong',
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

getAddr();
connect();