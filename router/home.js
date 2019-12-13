const express = require('express');

const router = express.Router();

router.get('/index', (req, res) => {
    res.render('home/default')
})

router.get('/article', (req, res) => {
    res.render('home/article')
})

module.exports = router;