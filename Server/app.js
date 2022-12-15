const express=require('express')
const app=express()
const bodyparser=require('body-parser')
const cors=require('cors')
const dotenv=require('dotenv')
dotenv.config()
const port=process.env.PORT
const index=require('./api/index')
const locations=require('./api/location')
const RestaurantData = require('./api/restaurants')
//middlewares
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cors())
//viwes
app.set('views','./views')
app.set('view engine', 'ejs')
///routers
app.use('/',index)
app.use('/locations', locations)
app.use('/Restaurants',RestaurantData)

app.listen(port,(req,res)=>{
   console.log(`Serve is Running on localhost:${port}`)
})

