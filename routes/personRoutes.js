const express = require('express');
const router = express.Router();
const Person= require('./../models/person');

// POST ROUTE TO ADD A PERSON
router.post('/', async (req, res) => {
    try {
        const newPersondata = req.body
        const newPerson = new Person(newPersondata);
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Inter Server Error' });
    }

});

// GET METHOD TO GET THE PERSON
router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Inter Server Error' });
    }
})

router.get('/:workType', async(req,res)=>{
    const workType= req.params.workType;
    try{
      if(workType=='chef' || workType=='waiter' || workType=='manager'){
      const data=await Person.find({work:workType});
      console.log('response fetched');
      res.status(200).json(data);
      }
      else{
        res.status(404).json({error:'Invaild work type'});
      }
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'Internal Server Error'});
    }
  })

  router.put('/:id',async(req,res)=>{
    try{
        const personId= req.params.id;
        const updatedPersonData=req.body;

        const response=await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new :true,
            runValidators:true,
        })
        if(!response){
            return res.status(404).json({error:'Person not found'});
        }
        console.log('data updated');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'}); 
    }
  })

  router.delete('/:id', async(req,res)=>{
    try{
        const personId= req.params.id;
        const response=await Person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error:'Person not found'});
        }
        console.log('data deleted');
        res.status(200).json({message:'person deleted sucessfully'});
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'}); 
    }
  })

  module.exports=router;