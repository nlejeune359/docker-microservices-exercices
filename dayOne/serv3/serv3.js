const express = require('express')
const app = express();
const port = 8080;

const addresses = [
    "http://localhost:4567",
    "http://localhost:5372"
]

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send(addresses);
})