const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
var os = require("os");

app.use('/', require('./routers/url.router'));

app.listen(PORT, () => {
    console.log("API is runing on port",PORT);
})