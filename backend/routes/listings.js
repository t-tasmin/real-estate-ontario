const express = require('express');
const router = express.Router();
const {getListings} = require('../helpers/listlingsHelpers');

module.exports = ({ getListings}) => {
    /* GET Listings listing. */
    router.get('/', (req, res) => {
        getListings()
            .then((listings) => {
                console.log(listings);
                res.json(listings)})
            .catch((err) => res.json({
                error: err.message
            }));
    });
   return router;
};