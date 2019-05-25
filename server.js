const express = require('express');
// const mongoose = require('moongose');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('client/public'));

//IMPORT OUR ROUTES
require('./routes/apiroutes')(app);

//CONNECT TO MONGOOSE

//START THE SERVER
app.listen(PORT, function() {
  console.log('app listening at port ' + PORT);
});
