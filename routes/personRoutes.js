const express = require('express');
const router = express.Router();
const Person = require('./../models/person');

router.post('/', async (req, res) => {
    try{
        console.log(req.body);
        const data = req.body // Assuming the request body containes the person data

         // Create a Document type Person
        const newPerson = new Person(data);

        //Save the new Person to the database
        const response = await newPerson.save()
        console.log('data saved');
        res.status(200).json(data);
    }
    
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }

});


router.get('/', async (req, res) => {
    try{
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch(err) {
        console.log(err);
        res.status(500).json({error: 'Internal server Error'});
    }
});


router.get('/:worktype', async (req, res) => {
    try{
         const worktype = req.params.worktype; //Extract the work type from the URL parameter
         if(worktype == 'chef' || worktype == 'manager' || worktype == 'waiter'){
             const response = await Person.find({work: worktype});
             console.log('response Fetched');
             res.status(200).json(response);
 
         } else{
             res.status(404).json({error: 'Invalid Work type'});
         }
 
    } catch(err){
         console.log(err);
         res.status(500).json({error: 'Internal Server Error'});
    }
 });


            // DAY- 6 
 // New routes for Update Opreation
// for UPDATE use PUT/PATCH  method

// Update Operation Using PUT method
router.put('/:id', async (req, res) => {
    try{

        const personId = req.params.id;
        const updatedPersonData = req.body;

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true, // Return Updated Document
            runValidation: true, // Run Mongoose Validation
        })

        if(!response) {
            return res.status(404).json({error: 'Person Not Found'});
        }

        console.log('Data Updated');
        res.status(200).json(response);
    } catch(err) {
        
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
});


// Delete Opreation using DELETE method
router.delete('/:id', async(req, res) => {
    try{

        const personId = req.params.id; // Extract the person's ID from URL parameter

        // Assuming you have a Person Model
        const response = await Person.findByIdAndDelete(personId);

        if(! response) {
            return res.status(404).json({error: 'Person Not found'});
        }
        console.log('Data fetched');
        res.status(200).json({massage: 'Person Deleted Successfully'});

    } catch(err) {
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});

    }
})

module.exports = router;
 module.exports = router;
