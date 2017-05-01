// var express = require('express');
import express from 'express';
// var path = require('path');
import path from 'path';
import open from 'open';
import compression from 'compression';
/* eslint-disable no-console */
const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res) {
  res.json([
    {"id": 1, "firstName": "Carmen", "lastName":"Liu", "email":"carmen.liujia@gmail.com"},
    {"id": 2, "firstName": "Ninja", "lastName":"Liu", "email":"13770576@qq.com"},
    {"id": 3, "firstName": "Lizzy", "lastName":"Lee", "email":"lizzy.lee@gmal.com"}
  ]);
});
app.listen(port, function(err){
  if(err) {
    console.log(err);
  } else {
    open('http://localhost:' +port);
  }
});
