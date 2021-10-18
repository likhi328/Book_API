//import express
const express = require("express");
//initilazation
const OP = express();

OP.get("/", (request , response) =>{
    response.json({ message:"uff wt a mess"});

});

 OP.listen(4000 , () => 
 console.log("jeakakS")
 );