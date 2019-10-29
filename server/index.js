const express=require('express')

const app=express()
const {PORT, DATABASE_STRING}=process.env
console.log(PORT)


app.listen(PORT, ()=>{
    console.log('listening on ', process.env.PORT)
})