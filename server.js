var express = require('express'),
    twitterAPI = require('node-twitter-api');

var app = express();

var searchRouter = new express.Router();

var twitter = new twitterAPI({
  consumerKey: 'GLizuvnaynh413zeuH2Q1hc80',
  consumerSecret: 'fMnKlsd2ttqfzhBorRr7XDBdpd8GdRA2tRTx1Ewn7EYWmmjS5D'
});

var accTok = '32334676-YHAGworlA69LyZv0OCkR2727G7LdngviSyYCyr3eL',
    accTokSec = 'nzzm47wGefbT5Iq7wbO5yONgMtwLawMcPr8hMwp44BRJo',
    scrName;

app.get('/search/:id', function (req, res) {
  twitter.search({
    q: req.params.id
  }, accTok, accTokSec, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.send(JSON.stringify(data.statuses[0].user['screen_name']));
    }
  });
});

app.listen((process.env.PORT || 3000), function() {
  console.log('server listening on port ' + (process.env.PORT || 3000));
});