const express = require('express');
const router = express.Router();
const {getRealtors} = require('../helpers/realtorsHelpers');

module.exports = ({ getRealtors}) => {
    /* GET realtors listing. */
    router.get('/', (req, res) => {
        getRealtors()
            .then((realtors) => res.json(realtors))
            .catch((err) => res.json({
                error: err.message
            }));
    });
   return router;
};