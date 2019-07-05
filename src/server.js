const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/public' ));

app.get('/models', function(pet, res) {
    res.sendFile(path.join(__dirname, './views/models', 'list.html'));
});

app.get('/models/create', function(pet, res) {
    res.sendFile(path.join(__dirname, './views/models', 'create.html'));
});

app.get('/printers', function(pet, res) {
    res.sendFile(path.join(__dirname, './views/printers', 'list.html'));
});

app.get('/printers/create', function(pet, res) {
    res.sendFile(path.join(__dirname, './views/printers', 'create.html'));
});

app.listen(8000, function() {
  console.log('The aplication is running on port 8000!');
});
