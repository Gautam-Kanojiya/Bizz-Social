const express = require('express');
const app = express();
const port = 8000;

//use express router
app.use('/', require('./routes'));


//adding EJS
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err){
    if(err){
        console.log(`Error satring server: ${err}`);
    }
    console.log(`Server started on port: ${port}`); 
})