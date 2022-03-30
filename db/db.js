const mongoose = require('mongoose');
require('dotenv').config({ path: __dirname + '/../config/.env' });

exports.connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

exports.disconnectDB = async ()=> {
    try {
        await mongoose.disconnect();
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}