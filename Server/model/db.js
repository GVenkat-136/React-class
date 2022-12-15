const mongo = require('mongodb')
const Mongoclint=mongo.MongoClient
const url=process.env.Dburl
Mongoclint.connect(url,(err,client)=>{
   if(err) throw err("while connecting")
   db=client.db("Tommato")
})
