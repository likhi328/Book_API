//import express
const express = require("express");
const Database = require("./database");
//initilazation
const OP = express();

OP.get("/", (request , response) =>{
    response.json({ message:"server al"});

});

OP.get("/books",(req, res) =>{
return res.json({book: Database.books});
});
OP.get("/publication",(req, res) =>{
    return res.json({book: Database.publication});
    });

 OP.listen(4000 , () => 
 console.log("server is running")
 );