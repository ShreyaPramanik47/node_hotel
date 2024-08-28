const express = require('express');
const router = express.Router();
const menuItem=require('./../models/menuItem');

// POST METHOD OF THE MENU ITEM
router.post('/', async(req,res)=>{
    try{
      const data= req.body
      const newMenu= new menuItem(data);
      const response= await newMenu.save();
      console.log('data saved');
      res.status(200),json(response);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'Inter Server Error'});
    }
  })
  // GET METHOD OF THE MENU ITEM
  router.get('/', async(req,res)=>{
    try{
      const data=await menuItem.find();
      console.log('data fetched');
      res.status(200).json(data);
    }
    catch(err){
      console.log(err);
      res.status(500).json({error:'Internal Server Error'});
    }
  })

  module.exports=router;