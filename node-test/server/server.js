const express = require('express');

var app = express();

app.get('/', (req,res) => {
   res.status(404).send({
      error : 'Page Not Found.',
      name: 'Todo App v1.0'
  });
});

app.get('/users', (req,res) => {
   res.status(200).send(
      [
         {
           name: 'kolawole olaniyi',
           age: 23
         },
         {
            name: 'peter olaniyi',
            age: 21
          },
          {
            name: 'joseph utih',
            age: 20
          }
      ]
   )
});

app.listen(3000);

module.exports.app = app;