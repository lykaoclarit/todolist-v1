const express = require ("express");
const bodyParser = require ("body-parser");

const port = 3000;
const app = express();

app.get("/", function (req, res){
  
});

app.listen(function(){
  console.log("Server is running at https://localhost:" + port);
})
