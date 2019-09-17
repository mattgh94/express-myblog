var express = require('express');
var router = express.Router();

const posts = [
    { id: 1, title: "1", message: "This is the first post", datets: '2019-09-16'},
    { id: 2, title: "2", message: "This is the second post", datets: '2019-09-16'},
    { id: 3, title: "3", message: "This is the third post", datets: '2019-09-16'},
    { id: 4, title: "4", message: "This is the fourth post", datets: '2019-09-16'}
];

router.get('/', function(req, res, next) {
    res.send(posts);
});

router.get('/numPosts', function(req, res, next) {
    res.send('' + posts.length);
});

router.post('/', function(req, res, next) {
    if (!req.body.title || !req.body.message){
        res.status(400).send("Error, title and message are not valid");
        return;
    }
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const post = {id: posts.length + 1, title: req.body.title, message: req.body.title,
     datets: date
    };
    posts.push(post);
    res.send(post);
});

module.exports = router;