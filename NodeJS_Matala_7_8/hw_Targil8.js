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


const { products } = require('./data');


app.get('/products/:productPrice', (req, res) => { 

    const productPrice = Number(req.params.productPrice);

    if (isNaN(productPrice)) {
        return res.status(400).send({ message: 'Invalid or missing query parameter' });
    }

    const filteredProducts = products.filter(product => product.price > productPrice);

    if (filteredProducts.length === 0) {
        return res.status(404).send({ message: 'No product found' });
    }

    res.json(filteredProducts);
  })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
