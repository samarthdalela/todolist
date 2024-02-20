import express from "express"
import bodyparser from "body-parser"
import mongoose from "mongoose"
import { dirname } from "path"
import {fileURLToPath} from "url"
import { Long } from "mongodb"
const app= express()
const port =3000
const __dirname=dirname(fileURLToPath(import.meta.url))
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static("public"))

let new_item=""
let array=[]
app.get("/",(req,res)=>{
    const date= new Date()
  
    const data={ 
        
        day:date.getDate(),
        week:date.toLocaleDateString('default', { weekday: 'long' }),
        // month:date.getMonth(),
        month:date.toLocaleString('default', { month: 'long' }),
        year:date.getFullYear(),
        listnew_item:new_item,
        ag:array
     
    }
    res.render(__dirname+"/index.ejs",data,)
    console.log(data)
})

app.post('/',(req,res)=>{
 new_item=req.body.new_item
 array.push(new_item)
 console.log(array)
res.redirect("/")
})
app.listen(port,()=>{
    console.log("you are listening to the port ",port)
  })