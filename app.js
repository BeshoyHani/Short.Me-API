const express = require('express');
const app = express();
const PORT = 3000;

app.use('/', require('./routers/url.router'));

app.listen(PORT, () => {
    console.log("besh")
})