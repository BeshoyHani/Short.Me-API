const URL = require('../models/url.model');
const validateURL = require('../utils/utils').validateUrl;
require('dotenv').config({ path: __dirname + '/../config/.env' });

exports.create_short_url = (req, res, next) => {
    let originalURL = req.body.originalURL;
    let baseAddress = process.env.BASE;
    if (validateURL(originalURL)) {
        URL.createShortURL(originalURL, baseAddress)
            .then(newURL => {
                res.json(newURL);
            })
            .catch(err => {
                console.err(err.message);
                res.status(500).json('Server Error');
            });
    }
    else {
        res.status(400).json('Invalid Original Url');
    }
}

exports.get_original_url = (req, res, next) => {
    let id = req.params.urlID;
    URL.getOriginalURL(id)
    .then(url => {
            if (url) {
                res.status(301).redirect(url.origURL);
            } else {
                res.status(404).json('URL Not found');
            }
        })
        .catch(err => {
            console.error(err.message);
            res.status(500).json('Server Error');
        })
}