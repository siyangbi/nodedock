var express = require('express');
var http = require('http');
var app = express();
var pg = require('pg');

var conString = "postgres://"+process.env.POSTGRES_USER+":"+process.env.POSTGRES_PASSWORD+"@postgres:5432/"+process.env.POSTGRES_USER;

app.get('/', function(req, res, next) {
  pg.connect(conString, function(err, client, done) {
    client.query('CREATE TABLE IF NOT EXISTS foo (id SERIAL, bar varchar);', function(err, result) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }
      client.query('INSERT INTO "foo" (bar) values (\'blah\');', function(err, result) {
        done();
        client.query('SELECT count(id) as counter FROM "foo";', function(err, result) {
          if(err) {
            return console.error('error running query', err);
          }
          res.send('This page has been viewed: ' + result.rows[0].counter + ' times! from container '+ require("os").hostname());
        });
      });
    });
  });
});

http.createServer(app).listen(process.env.PORT || 8080, function() {
  console.log('Listening on port ' + (process.env.PORT || 8080));
});