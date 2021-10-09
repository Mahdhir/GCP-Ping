const { performance } = require("perf_hooks");
const axios = require('axios');
var express = require('express');



var app = express();

app.get('/', async function (req, res) {
    const t0 = performance.now();
    try {
        await axios({
            method: 'post',
            url: `https://speedcoding.toptal.com/webappApi/entry?ch=29&acc=2341`,
            headers: {
              'Accept-Encoding': 'gzip'
            },
          });
    } catch (error) {
        console.log(error);
    }
    const t1 = performance.now();
    const time = t1 -t0;
    res.send({ time });
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})