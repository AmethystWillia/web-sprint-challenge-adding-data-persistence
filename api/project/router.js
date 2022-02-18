const express = require('express');
const Projects = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
    Projects.getAllProjects()
        .then(all => {
            res.status(200).json(all);
        })
        .catch(err => {
            next(err);
        })
});

module.exports = router;