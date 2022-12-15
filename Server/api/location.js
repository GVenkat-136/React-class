const express=require('express')
const router=express.Router()
const database=require('.././model/db')

router.get('/',function(req, res){
   db.collection("Locations").find().toArray((err,data)=>{
      res.status(200).send(data)})
})
module.exports =router