// const express = require('express');
// const router = express.Router();

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.json({ message: 'everything is fine' });
  });
};
