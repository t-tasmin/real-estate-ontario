const express = require('express');
const router = express.Router();
const {getListings} = require('../helpers/listlingsHelpers');

module.exports = ({ getListings}) => {
    /* GET Listings listing. */
    router.get('/', (req, res) => {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const result={};
        getListings()
            .then((listings) => {
                if (endIndex < listings.length) {
                    result.next = {
                      page: page + 1,
                      limit: limit,
                    };
                  }
                  if (startIndex > 0) {
                    result.previous = {
                      page: page - 1,
                      limit: limit,
                    };
                  }
                result.count=listings.length;
                result.results=listings.slice(startIndex, endIndex);
                res.json(result)})
            .catch((err) => res.json({
                error: err.message
            }));
    });
   return router;
};