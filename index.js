const express = require('express');
var { hostname, networkInterfaces } = require("os");
var hostname = hostname();

const nets = networkInterfaces();
const results = Object.create(null); // Or just '{}', an empty object

for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
        // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
        // 'IPv4' is in Node <= 17, from 18 it's a number 4 or 6 
        const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4
        if (net.family === familyV4Value && !net.internal) {
            if (!results[name]) {
                results[name] = [];
            }

            results[name].push(hostname, net.address);
        }
    }
}

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json(JSON.stringify(results));
});

app.listen(3210, () => { 
    console.log("Docker demo running on " + hostname + ":3210");
});