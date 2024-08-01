const express = require('express');

const app = express();
const port = 8080;

/*  //middleware
 app.use ((req, res, next) => {
    console.log('Middleware executed');
    next();
}); */

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User with id ${userId}`);
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});