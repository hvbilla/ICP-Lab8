const express = require ("express");
const jwt = require('jsonwebtoken');
var cors = require('cors')
const app= express();


app.use(cors());

const PORT=1234;

app.listen(PORT, ()=>{
  console.log(PORT);
});

app.post('/api/login', (req, res) =>{
  console.log(req.body);
  const user ={
    id:1,
    username: 'Harsha',
    email: 'Saiharsha9444@gmail.com'
  }

  jwt.sign({user}, 'secretkey', (err, token)=>{
    res.json(token);
  });
});

app.get('/api/getDetails', verifyToken, (req, res) =>{

  jwt.verify(req.token,'secretkey', (err, authData)=> {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json(authData);
    }
  });

});

function verifyToken(req, res, next) {

  const bearerHeader = req.headers['authorization'];

  if(typeof bearerHeader!=='undefined') {

    req.token = bearerHeader;

    next();
  }
  else{
    res.sendStatus(403);
  }


}
