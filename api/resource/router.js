const express = require('express');
const Resources = require('./model');

const router = express.Router();

router.get('/', (req, res, next) => {
    Resources.getAllResources()
        .then(all => {
            res.status(200).json(all);
        })
        .catch(err => {
            next(err);
        })
});

router.post('/', (req, res, next) => {
    Resources.postResource(req.body)
        .then(resource => {
            res.status(201).json(resource);
        })
        .catch(err => {
            next(err);
        })
});

module.exports = router;