const express = require('express');
const multer = require('multer');
const path = require('path')
const app = express();
const Router = require('router')
const router = Router()
app.set('view engine', 'ejs')
const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads')
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + ".jpg")
        }
    })
}).single('file_name');
app.use(express.static(__dirname))
app.post("/", function (req, res, next) {
    upload(req, res, function (err) {
        if (err) {
            res.send("Failed to upload the image");
        }
        else {
            res.sendFile(path.join(__dirname, 'titles.html'));
        }
    }
    )
})


app.listen(5000)