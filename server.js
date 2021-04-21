const express = require("express");
const multer = require("multer");
const upload = multer({dest: "uploads/"})

const app = express();
app.use(express.json());

app.get("/", (req, res) =>{
    res.send("I am at kfc")
})

app.post("/upload_files", upload.array("files"), uploadFiles);

function uploadFiles(req, res){
    console.log(req.body)
    console.log(req.files);
    res.json({message: "Sucessfully uploaded files"})
}

app.listen(5000, () =>{
    console.log(`Server running on port 5000`)
});