const express = require('express')
const app = express();
const port = 8080;

const addresses = [
    "http://172.16.8.68:4567",
    "http://172.16.8.68:5372"
]

app.listen(port, () => {
    console.log(`Listening at http://172.16.8.68:${port}`);
});

app.get('/', (req, res) => {
    res.send(addresses);
})