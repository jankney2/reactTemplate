const express=require('express')
const app=express()
require('dotenv').config()
const {PORT, DATABASE_STRING}=process.env
const massive=require('massive')

//require controllers here

app.use(express.json())

app.use(express.static(`${__dirname}/../build`));

//If this syntax does not work, try the second syntax
// massive(DATABASE_STRING).then((db)=>{
    // app.set('db', db)
    //     console.log('db connected')
// })).catch(err=>console.log(err, 'database connection err'))

// massive({ connectionString: process.env.DATABASE_URL, 
//     ssl: true 
//   }).then(database => {
//       app.set("db", database);
//       console.log("db connected");
//     }).catch(err => console.log("database error", err));



app.listen(PORT, ()=>{
    console.log('listening on ', PORT)
})