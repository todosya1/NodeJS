const express = require('express');
const router = express.Router();
const data = require('../data')
const path = require('path');

// GET /api/products
router.get('/', (req, res) => {
    res.json({ products: data.products });
});

// GET /api/products/:id
//get product by id (path param)
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const product = data.products.find(item=>item.id===parseInt(id))
    if(product) res.json(product)
    else res.status(404).json({ message: `Product with ID: ${id} not found` });
});

// POST /api/products
/*add product (
    {
    "id": 4,
    "name": "New Product",
    "price": 299.99
    }
    )
    */
router.post('/', (req, res) => {
    const productData = req.body;
    const productId = productData.id;
    
    const product = data.products.find(item=>item.id===parseInt(productId))
    if(product){
        res.status(400).json({ message: `Product with ID: ${productId} already exists` });
    }

    // if we need to check the stock put the - && productData.stock>=0 - to the if condition
    if(productData.name && productData.price>0 && productData.stock>=0){
        data.products.push(productData)
    res.json({ message: `Product added`, products: data.products });
    }
    else{
        res.status(400).json({ message: `Product validation failed` });
    }
});

// PUT /api/products/:id
//update product by id (path param + body data)
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const productData = req.body;
    //find index of product by id into array 
    const productInd = data.products.findIndex(item=>item.id===parseInt(id));
    
    
    if(productInd !== -1){
        // if we need to check the stock put the - && productData.stock>=0 - to the if condition
        if(productData.price>0 ){
        //preserve the original ID and update other fields
            data.products[productInd] = {
                ...productData,
                id: parseInt(id)  // Keep the original ID
            };
            res.json({ message: `Product with ID: ${id} updated`, products: data.products });
        }
        else{
            res.status(400).json({ message: `Product validation failed` });
        }
    }

    else{
        res.status(404).json({ message: `Product with ID: ${id} not found` });
    }
    
}
);

// DELETE /api/products
//delete product by id
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const productInd = data.products.findIndex(item=>item.id===parseInt(id))

    if(productInd !== -1){
        //delete product into array
        data.products.splice(productInd, 1)
        res.json({ message: `Product with ID: ${id} deleted`, products: data.products });
    }else{
        res.status(404).json({ message: `Product with ID: ${id} not found` })
    }

});
module.exports = router;
