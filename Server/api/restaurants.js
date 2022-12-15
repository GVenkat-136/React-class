const express=require('express')
const Restaurant=express.Router()
const database=require('.././model/db')

Restaurant.route('/')
   .get((req, res)=>{
      let query={}
      let stateid=Number(req.query.state)
      let mealid=Number(req.query.mealid)
      if(mealid){
         query=({"mealTypes.mealtype_id":mealid})
      }else if(stateid){
       query=({state_id:stateid})
      }
      db.collection("RestaurantData").find(query).toArray((err,data)=>{
       res.status(200).send(data)})
   })

Restaurant.route('/mealtypes')
   .get((req,res)=>{
      let query = {}
      let mealtypeid=Number(req.query.mealtype)
      if(mealtypeid){
         query={mealtype_id:mealtypeid}
      }
   db.collection("mealTypes").find(query).toArray((err,data)=>{
      res.status(200).send(data)})
   })
module.exports= Restaurant