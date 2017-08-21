// server.js
// where your node app starts

// init project
const express = require('express');
const bodyparser = require('body-parser')
const app = express();
const port = process.env.PORT || 8080;
const querys = require('./app/db/querys');
const axios = require('axios');

app.use(express.static('public'));

app.get("/", function (req, res) {
  //querys.save('teste')
  res.sendFile(__dirname + '/views/index.html');
});


app.get('/api', function (req, res) {
  const therm = req.query.q;
  const offset = req.query.offset || 0;
  const url = `https://api.qwant.com/api/search/images?count=10&offset=${offset}&q=${therm}`;

  axios.get(url)
    .then(function (response) {
      let data = response.data.data.result.items;
      querys.save(therm);
      res.send(data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.get('/latest', function (req, res) {
  getResults = results => res.send(results);
  querys.find(getResults);
});


const listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
