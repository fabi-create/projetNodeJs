const mongoose = require('mongoose');

const connectDB = () => {
    mongoose
    .connect("mongodb+srv://sourochlandrysanou:12345678910@cluster0.cekcwr5.mongodb.net/?retryWrites=true&w=majority")
    .then((cnx) =>{
        console.log(`Database connected: " ${cnx.connection.host}`)
    })
    .catch((error)=>{
        console.log(`Database connection error :  ${error}`)
    })
}


      
module.exports = connectDB;