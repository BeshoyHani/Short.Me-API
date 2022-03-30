const mongoose = require('mongoose');
const db = require('../db/db');
const shortid = require('shortid');

const URLSchema = new mongoose.Schema({
    urlID: {
        type: String,
        required: true,
    },
    origURL: {
        type: String,
        required: true
    },

    shortURL: {
        type: String,
        required: true
    },

    clicks: {
        type: Number,
        required: true,
        default: 0
    },

    date: {
        type: String,
        default: Date.now,
    }
})

const URLModel = mongoose.model('url', URLSchema);


exports.createShortURL = async (originalURL, baseAddress) =>{
    try{
        await db.connectDB();
        let url = await URLModel.findOne({origURL: originalURL});
        if(url === null){
            let shortID = shortid.generate();
            let shortURL = `${baseAddress}/${shortID}`;
            url = new URLModel({
                origURL: originalURL,
                shortURL: shortURL,
                urlID: shortID,
            });
            await url.save();
        }
        db.disconnectDB();
        return url;

    }catch(err){
        db.disconnectDB();
        console.error(err);
    }
}

exports.getOriginalURL = async (id) => {
    try{
        await db.connectDB();
        let url = await URLModel.findOne({urlID: id});
        if(url){
            url.clicks++;
            await url.save();
        }
        db.disconnectDB();
        return url;
    }catch(err){
        db.disconnectDB();
        console.err(err.message);
    }
}