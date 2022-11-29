const express = require('express');
require('dotenv').config();

const app = express();



app.get('/',(req, res)=> {
    res.send('<h1>Allah Mohan</h1>')
})


// Get
app.get('/query', (req, res) => {

   let firstName = req.query.firstName;
   let lastName  = req.query.lastName;
   res.send(firstName +" "+ lastName);

})

app.get('/header',(req, res)=> {
    let firstName = req.header('firstName');
    let lastName  = req.header('lastName');

    res.send(firstName+' '+lastName);
})

//POST
app.post('/query', (req, res) => {

    let firstName = req.query.firstName;
    let lastName  = req.query.lastName;
    res.send(firstName +" "+ lastName);
 
 })

 app.post('/header', (req, res)=> {
    let userName = req.header('userName');
    let password = req.header('password');

    res.send('User Name: '+ userName + ' Password: ' + password);
 })



const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log(`Server Run Successfully at http://localhost:${port}`);
})