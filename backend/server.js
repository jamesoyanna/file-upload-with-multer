const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) =>{
    res.send("I am at kfc")
})

app.post("/upload_files", uploadFiles);

function uploadFiles(req, res){
    console.log(req.body)
}

app.listen(5000, () =>{
    console.log(`Server running on port 5000`)
});