var express = require('express'),
    path = require('path');

var app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', function (req, res) {
  res.header('Content-Security-Policy', 'default-src \'self\'');
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.listen(process.env.PORT || 3000);
