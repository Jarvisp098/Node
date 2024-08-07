    const express = require('express');
    const app = express();

    const PORT = 8080;

        app.use(express.static('public'));

        //middleware
        app.use((req, res, next) => {
            console.log(`Requeste recieved: ${req.method} ${req.url}`);
            next();
        });

        //route controller
        app.get('/', (req, res) => {
            res.send(`Hello WOrld`);
        });

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
        
        /*
        app.get('/', (req, res) => {
            const id = req.query.id;
            const username = req.query.username;

            res.send(`User Id:- ${id}, Username:- ${username}`);
        });

        app.get('/products/:id', (req, res) => {
            const productId = req.params.id;
            const products = [
                {"id": 1, "name": "Product A"},
                {"id": 2, "name": "Product B"},
                {"id": 3, "name": "Product C"}, 
            ]

            const product = products.find(product => product.id == parseInt(productId));
            res.send(`Product id:- ${product.id}, Product name:- ${product.name}`);
        }); */

                    /* const express = require('express');
                    const ejs = require('ejs');
                    const router = require('./routes/pages');

                    const app = express();
                    const port = 3000;
                    
                    app.use(router);

                    app.listen(port, () => {
                        console.log(`Server started on port ${port}`);
                    }); */

                   /* //setting of view engine
                    app.set('view engine','ejs');
                    app.set('views', './views');

                    /*  //middleware
                    app.use ((req, res, next) => {
                        console.log('Middleware executed');
                        next();
                    }); */

                   /* app.get('/', (req, res) => {
                        res.send('Hello world');
                    });

                    //route controller with a path parameter
                    app.get('/users/:id', (req, res) => {
                        const userId = req.params.id;
                        res.send(`User with id ${userId}`);
                    });

                    app.get('/', (req, res) => {
                        const data = {
                            title: 'Hello, world',
                            message: 'Welcome to my website'
                        }
                        res.render('index', {data});
                    }); */

                    