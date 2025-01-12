/*
 מגישים: 
 יבגני נמצ'נקו
 שמיאקין לאוניד  
 כיתה 48-5
*/

const express = require('express');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;


const users = JSON.parse(fs.readFileSync('users.json', 'utf8'));

//_______________________4_______________________

app.get('/api/users/filter', (req, res) => { 

    const minAge = Number(req.query.minAge);
    const maxAge = Number(req.query.maxAge);

    if (isNaN(minAge) || isNaN(maxAge)) {
        return res.status(400).send({ message: 'Invalid or missing query parameters' });
    }

    const filteredUsers = users.filter(user => user.age >= minAge && user.age <= maxAge);

    if (filteredUsers.length === 0) {
        return res.status(404).send({ message: 'No users found' });
    }

    res.json(filteredUsers);
    res.send();
  })


/*_______________________2_______________________*/
app.get('/api/users/:id', (req, res) => {

    const user = users.find(user => user.id === Number(req.params.id));

    if(user === undefined) {
        return res.status(404).send({message: 'User does not exist'}); 
    }

    res.send(user);
  })


//_______________________1_______________________
app.get('/api/users', (req, res) => {
    res.send(users);
  })


//_______________________3_______________________
app.get('/users/:id', (req, res) => {

    const user = users.find(user => user.id === Number(req.params.id));

    if(user === undefined) {
        return res.status(404).send({message: 'User does not exist'}); 
    }

    res.send(res.send(
        '<html><head>The User Info</head><body><h1>Person: ' +
          user.name +
          ' age: ' +
          user.age +
          ' email: ' +
          user.email +
          '</h1></body></html>'
      ));
  })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});