const express = require('express');
const app = express();
const port = 8000;

app.listen(port, function(err){
    if(err){
        console.log(`Error satring server: ${err}`);
    }
    console.log(`Server started on port: ${port}`); 
})