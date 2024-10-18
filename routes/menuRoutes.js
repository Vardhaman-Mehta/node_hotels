const express = require('express');
const router = express.Router();
const menu = require('./../models/menu');

router.post('/', async (req, res) => {
    try{
        console.log(req.body);
        const data = req.body; //assume the request body contain menu list

        const newMenu = new menu(data); 

        const response = await newMenu.save();
        console.log('data saved');
        res.status(200).json(data);


    }catch(err) {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});

    }
});

router.get('/', async (req, res) => {
    try{
        const data = await menu.find();
        console.log('data Fetched');
        res.status(200).json(data);
    
    } catch(err) {
        console.log(err);
        res.status(500).json({error: 'Internal server Error'});
    }
});




router.get('/:tastetype', async (req, res) => {
    try{

        const tastetype = req.params.tastetype;
        if(tastetype == 'sweet' || tastetype == 'spicy' || tastetype == 'sour') {
            const response = await menu.find({taste: tastetype})
            console.log(' Response Fetched');
            res.status(200).json(response);

        } else {
            res.status(404).json({error: 'Invalid taste type'});
        }

    } catch(err) {
        console.log(err)
        res.status(500).json({error: 'Internal Server error'});

    }
})

// New routes for Update Opreation
// for UPDATE use PUT/PATCH  method

// Update Operation Using PUT method // By HomeWork- SELF_SOLVE 

router.put('/:id', async (req, res) => {
    try{

        const menuId = req.params.id;
        const updatdMenuData = req.body;

        const response = await menu.findByIdAndUpdate(menuId, updatdMenuData, {
            new: true,
            runValidation: true,
        });

        if(!response) {
            return res.status(404).json({error: 'Menu Not Found'});

        }
        
        console.log('Data Fetched');
        res.status(200).json(response);
    } catch(err) {

        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

// Delete Opreation using DELETE method

router.delete('/:id', async (req, res) => {
    try{

        const menuId = req.params.id;

        const response = await menu.findByIdAndDelete(menuId);

        if(!response) {
            return res.status(404).json({error: 'Menu Not Found'});        
        }

        console.log('Data Fetched');
        res.status(200).json({massage: 'Menu Deleted Successfully'});


    } catch (err) {

        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});

    }
})







module.exports = router;