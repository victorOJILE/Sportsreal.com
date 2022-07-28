const path = require('path');
const express = require('express');
const fs = require('fs');
const fileupload = require('express-fileupload');
const createPost = require('./controllers/addPost').addPost;
const usersRouter = require('./routes/users.js').router;

const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.static('../myFiles/fonts'));
app.use(express.static('../myFiles'));
app.use(express.static('../myFiles/logos'));
app.use(express.static("../myFiles/images"));
app.use(express.static(path.join(__dirname, '/CMS')));
app.use(express.static(path.join(__dirname, '/CMS/login')));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", usersRouter);


app.get('/', (req, res) => {
    res.redirect("http://localhost:3000");
    console.log(req);
});
app.get('/getFrontendData', (req, res) => {
    fs.readFile(path.resolve(__dirname, './database/blog.json'), "utf8", (err, data) => {
        if(err) {
            console.error(err);
            return;
        }
        res.json(data);
    })
})

app.get('/CMS/create', (req, res) => {
    res.sendFile(path.resolve(__dirname, './CMS/login/main.html'));
})
app.post('/preview', (req, res) => {
    let response = createPost(req.body);
    res.setHeader('Content-Type', 'text/html').send(response);
})
app.use(fileupload());
app.post('/saveTopImage', (req, res) => {
    const file = req.files.topImage;
    file.mv("C:/Users/ojile/Documents/reactagain/myFiles/images/"  + file.name, (error) => {
        if(error) {
            console.error(error);
            res.json(JSON.stringify({status: 'error', message: error }));
            return;
        }
        res.send(JSON.stringify({status: 'success', path: file.name, message: "Top image successfully saved." }))
    });
});
app.post('/saveOtherImages', (req, res) => {
    try {
        if(!req.files) {
            res.send({ status: false, message: "No file uploaded"});
        }else {
            let data = [];
            for(let key in req.files) {
                let photo = req.files[key];
                photo.mv("C:/Users/ojile/Documents/reactagain/myFiles/images/"  + photo.name, (error) => {
                    if(error) {
                        console.error(error);
                        res.send(JSON.stringify({status: 'error', message: error }));
                        return;
                    }
                })
                data.push({
                    name: photo.name,
                    mimetype: photo.mimetype,
                    size: photo.size
                });
            }
            res.send({
                status: true,
                message: "Files have been uploaded",
                data: data
            });
        }
    } catch (error) {
        res.status(500).send(error);
    }
});
app.listen(PORT, (err) => {
    if(err) {
        console.error("Error connecting to port " + PORT);
        return;
    }
    console.log("Server listening on port " + PORT);
})