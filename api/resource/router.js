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

module.exports = router;